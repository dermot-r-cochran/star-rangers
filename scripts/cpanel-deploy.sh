#!/bin/bash
#
# scripts/cpanel-deploy.sh
#
# Single entry point for the cPanel Git Version Control deployment. All of
# the logic previously spread across 5 separate .cpanel.yml tasks lives
# here now, because cPanel aborts every remaining task the instant one
# exits non-zero - that made it impossible to guarantee a deployment-log
# notification email fires on failure (e.g. ensure-node.sh failing to
# download Node mid-build used to just silently stop the deploy, with only
# cPanel's own UI log as a record). Centralizing into one task/script means
# we control our own success/failure handling and can always notify.
#
# Shell: bash (not POSIX sh, unlike ensure-node.sh, which is *sourced* and
# so must work under any caller shell). This script is *executed* with its
# own interpreter, invoked explicitly as `bash scripts/cpanel-deploy.sh`
# from .cpanel.yml (see that file), so the interpreter choice here is
# independent of cPanel's task-runner shell. bash's `${PIPESTATUS[0]}` is
# what makes the "capture full log AND keep it live in cPanel's own UI AND
# know the real exit code" combination simple and race-free (see `main`
# invocation below); a portable POSIX equivalent exists but is meaningfully
# more fragile for a marginal portability gain, since cPanel/WHM hosts
# universally ship /bin/bash (cPanel's own stack depends on it).
#
# Multi-domain: one clone can now deploy the primary site (public_html)
# AND any number of optional "alt domains" - each a sibling folder under
# the same $HOME, at the same level as public_html (e.g. an addon domain's
# own document root), with its own DOMAIN/THEME/CHARACTERS/etc, declared in
# this same clone's deploy.conf via ALT_DOMAINS. See that file's header
# comment for the full key reference. build_and_deploy() below runs one
# full build+deploy pass per domain; main() calls it once for the primary
# and once per ALT_DOMAINS entry, all reusing the one npm-installed
# node_modules/ that main() sets up before the first call.
#
# DEPLOY_PRIMARY=false skips the public_html pass entirely, for a clone
# whose cPanel account only exists to serve one or more addon domains -
# public_html on that account may be reserved for something else, or
# deliberately left parked, and this account's ALT_DOMAINS entries
# shouldn't also duplicate the site there. See that key's own check in
# main() below for what happens if it's false with no ALT_DOMAINS set.

set -u

REPOSITORY_ROOT="${REPOSITORY_ROOT:-$(cd "$(dirname "$0")/.." && pwd)}"
cd "$REPOSITORY_ROOT" || exit 1

# ---------------------------------------------------------------------------
# Log file: everything main() prints (stdout+stderr) is teed here AND to
# this script's own stdout/stderr (so cPanel's UI still shows live
# progress exactly as it did with the old per-task list). Placed under
# $HOME (survives outside the repo, like ensure-node.sh's cache dir) with a
# repo-root fallback if mktemp/$HOME is unavailable for some reason - that
# fallback path matches the repo's `*.log` .gitignore entry, so it can
# never accidentally get committed.
# ---------------------------------------------------------------------------
LOG_FILE=$(mktemp "${TMPDIR:-$HOME}/cpanel-deploy.XXXXXX.log" 2>/dev/null) \
  || LOG_FILE="$REPOSITORY_ROOT/cpanel-deploy-$$.log"

# ---------------------------------------------------------------------------
# Source deploy.conf ONCE. This script *is* the single .cpanel.yml task now,
# so - unlike the old 5-task version, where each task ran in its own shell
# and had to re-source deploy.conf independently - there's no cross-task
# persistence problem; one sourcing point is enough. These are the PRIMARY
# domain's (public_html's) settings; ALT_DOMAINS entries read their own
# settings via ALT_<id>_* keys, fetched with alt_get() below rather than
# fixed variable names, since the set of alt domains is dynamic.
# ---------------------------------------------------------------------------
CPANEL_USER="sciencef"
THEME="default"
CHARACTERS=""
TOPICS=""
THREADS=""
ADMIN_EMAIL=""
DOMAIN="sciencefiction.site"
SITE_NAME=""
SITE_TITLE=""
CUSTOM_LORE_FILE=""
CUSTOM_CSS_FILE=""
COMMENTS_ENABLED="true"
GISCUS_REPO=""
GISCUS_REPO_ID=""
GISCUS_CATEGORY_CHARACTERS_ID=""
GISCUS_CATEGORY_LORE_ID=""
GISCUS_CATEGORY_EPISODES_ID=""
ALT_DOMAINS=""
DEPLOY_PRIMARY="true"
# shellcheck disable=SC1091
[ -f "$REPOSITORY_ROOT/deploy.conf" ] && . "$REPOSITORY_ROOT/deploy.conf"

# ADMIN_EMAIL defaults to admin@<DOMAIN> rather than staying unset, so every
# clone gets a deploy-log notification out of the box without needing its
# own deploy.conf entry.
[ -z "$ADMIN_EMAIL" ] && ADMIN_EMAIL="admin@$DOMAIN"

# ---------------------------------------------------------------------------
# alt_id_valid() / alt_get(): helpers for reading ALT_<id>_<suffix> keys out
# of deploy.conf via bash indirect expansion (e.g. `alt_get site2 THEME`
# reads $ALT_site2_THEME). alt_id_valid() restricts ALT_DOMAINS entries to
# valid bash identifier characters up front, since an id like "site-2"
# would silently build a variable name (ALT_site-2_THEME) that can never
# match anything a human wrote in deploy.conf - better to reject it loudly
# than have it look "supported" while quietly reading nothing. alt_get()
# guards with `[ -v ... ]` rather than a bare `${!var}` because indirect
# expansion of a wholly-unset variable is unreliable across bash versions
# under `set -u`; testing existence first sidesteps that entirely.
# ---------------------------------------------------------------------------
alt_id_valid() {
  [[ "$1" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]
}

alt_get() {
  local var="ALT_${1}_${2}"
  if [ -v "$var" ]; then
    printf '%s' "${!var}"
  fi
}

# ---------------------------------------------------------------------------
# NOTIFY_EMAILS: every address that should get this run's deploy-log email,
# computed once up front from deploy.conf alone (ADMIN_EMAIL plus each
# valid ALT_DOMAINS entry's own ADMIN_EMAIL, defaulting the same way
# ADMIN_EMAIL itself does - admin@<that domain> - when unset). This has to
# happen here, before main() runs, not by having main() build the list
# itself: main() executes as the left side of a pipe (`main | tee ...`)
# below, which forks it into its own subshell, so any variable it computed
# would vanish the moment that pipe finished - notify() below (which runs
# after the pipe, in this shell) would never see it. Pure config parsing
# has no such problem, so it's done here instead.
# ---------------------------------------------------------------------------
NOTIFY_EMAILS=()
add_notify_email() {
  local e="$1" existing
  [ -z "$e" ] && return 0
  for existing in "${NOTIFY_EMAILS[@]:-}"; do
    [ "$existing" = "$e" ] && return 0
  done
  NOTIFY_EMAILS+=("$e")
}
add_notify_email "$ADMIN_EMAIL"
for _alt_id in $ALT_DOMAINS; do
  if alt_id_valid "$_alt_id"; then
    _alt_email=$(alt_get "$_alt_id" ADMIN_EMAIL)
    if [ -z "$_alt_email" ]; then
      _alt_domain_for_default=$(alt_get "$_alt_id" DOMAIN)
      [ -n "$_alt_domain_for_default" ] && _alt_email="admin@$_alt_domain_for_default"
    fi
    add_notify_email "$_alt_email"
  fi
done
unset _alt_id _alt_email _alt_domain_for_default

{
  printf '=== cPanel deploy started: %s (user=%s theme=%s domain=%s site_name=%s site_title=%s custom_lore=%s custom_css=%s comments_enabled=%s giscus_repo=%s deploy_primary=%s alt_domains=%s) ===\n' \
    "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$CPANEL_USER" "$THEME" "$DOMAIN" \
    "${SITE_NAME:-default}" "${SITE_TITLE:-default}" \
    "${CUSTOM_LORE_FILE:-none}" "${CUSTOM_CSS_FILE:-none}" "$COMMENTS_ENABLED" "${GISCUS_REPO:-default}" "$DEPLOY_PRIMARY" "${ALT_DOMAINS:-none}"
} | tee -a "$LOG_FILE"

# ---------------------------------------------------------------------------
# build_and_deploy(): runs one full eleventy build + rsync deploy for a
# single domain (the primary public_html, or one ALT_DOMAINS entry), given
# that domain's own settings. Called once for the primary and once per
# ALT_DOMAINS entry from main() below - every step here (build, prefix
# rewrite, theme/CSS select, rsync, post-deploy checks) is unchanged in
# substance from the pre-multi-domain version, just parameterized and
# scoped to run more than once per invocation.
#
# Returns 0 on success, 1 on failure - a failure here must NOT raise (exit)
# out of main(), since one broken alt domain (e.g. its folder not actually
# provisioned yet) shouldn't block the primary site, or any other alt
# domain, from getting its own update. main() aggregates every call's
# result into one overall pass/fail instead.
# ---------------------------------------------------------------------------
build_and_deploy() {
  local label="$1" dest="$2" b_theme="$3" b_characters="$4" b_topics="$5" b_threads="$6" \
        b_site_name="$7" b_site_title="$8" b_site_domain="$9" \
        b_custom_lore_file="${10}" b_custom_css_file="${11}"
  shift 11

  # Anything left in "$@" past the 11 fixed positions above is a trailing
  # NAME=value toggle (COMMENTS_ENABLED, and now the 5 GISCUS_* keys) rather
  # than its own numbered parameter - a plain setting added later only needs
  # a `local`/case arm here plus one more "NAME=$value" string at each call
  # site below, not a new position threaded through this whole function
  # (and both callers) in order. Unrecognized names fail loudly rather than
  # being exported blindly, same spirit as the CUSTOM_LORE_FILE/
  # CUSTOM_CSS_FILE "missing file" checks further down.
  local COMMENTS_ENABLED="true"
  local GISCUS_REPO="" GISCUS_REPO_ID="" GISCUS_CATEGORY_CHARACTERS_ID="" \
        GISCUS_CATEGORY_LORE_ID="" GISCUS_CATEGORY_EPISODES_ID=""
  local b_kv b_kv_name b_kv_value
  for b_kv in "$@"; do
    b_kv_name="${b_kv%%=*}"
    b_kv_value="${b_kv#*=}"
    case "$b_kv_name" in
      COMMENTS_ENABLED) COMMENTS_ENABLED="$b_kv_value" ;;
      GISCUS_REPO) GISCUS_REPO="$b_kv_value" ;;
      GISCUS_REPO_ID) GISCUS_REPO_ID="$b_kv_value" ;;
      GISCUS_CATEGORY_CHARACTERS_ID) GISCUS_CATEGORY_CHARACTERS_ID="$b_kv_value" ;;
      GISCUS_CATEGORY_LORE_ID) GISCUS_CATEGORY_LORE_ID="$b_kv_value" ;;
      GISCUS_CATEGORY_EPISODES_ID) GISCUS_CATEGORY_EPISODES_ID="$b_kv_value" ;;
      *) echo "FAIL [$label]: unknown build_and_deploy toggle '$b_kv_name'" >&2; return 1 ;;
    esac
  done

  # CHARACTERS/TOPICS/THREADS/THEME/SITE_NAME/SITE_TITLE/SITE_DOMAIN/
  # COMMENTS_ENABLED are read via `process.env` inside the Eleventy Node
  # build below, which runs as a *child process* - local shell variables
  # alone aren't visible to it, so they must be `export`ed. Declaring them
  # `local` first (COMMENTS_ENABLED already was, above) scopes both the
  # value AND the export to this function call only: once build_and_deploy
  # returns, the next call's (next domain's) values can't leak into a
  # later build via the inherited process environment. DOMAIN is exported
  # as SITE_DOMAIN (not DOMAIN) since that env var name is generic enough
  # to risk colliding with something host-level; src/_data/site.js reads
  # SITE_DOMAIN specifically. CPANEL_USER/CUSTOM_LORE_FILE/CUSTOM_CSS_FILE
  # are never exported: CPANEL_USER is only used to build `dest` (already
  # done by the caller), and the latter two are copied into place on disk
  # (src/lore/custom/, _site/css/main.css) before Node ever runs, so
  # Eleventy just discovers them as ordinary files.
  local CHARACTERS="$b_characters" TOPICS="$b_topics" THREADS="$b_threads" THEME="$b_theme" \
        SITE_NAME="$b_site_name" SITE_TITLE="$b_site_title" SITE_DOMAIN="$b_site_domain"
  export CHARACTERS TOPICS THREADS THEME SITE_NAME SITE_TITLE SITE_DOMAIN COMMENTS_ENABLED \
    GISCUS_REPO GISCUS_REPO_ID GISCUS_CATEGORY_CHARACTERS_ID GISCUS_CATEGORY_LORE_ID GISCUS_CATEGORY_EPISODES_ID

  echo "=== [$label] build + deploy starting (dest=$dest theme=$b_theme domain=$b_site_domain comments_enabled=$COMMENTS_ENABLED) ==="

  # _site/ is NOT cleaned by Eleventy between runs - it only writes/
  # overwrites, so a file this domain's build doesn't happen to produce
  # (e.g. the PREVIOUS domain's CUSTOM_LORE_FILE page, or content excluded
  # only by THIS domain's CHARACTERS/TOPICS filter) would otherwise survive
  # from the prior domain's build in this same checkout and get rsynced
  # into this domain's DEST too. Wiping _site/ before every domain's build
  # is what makes it safe to reuse one clone/checkout across multiple
  # domains at all - without it, deploying domain B after domain A would
  # leak A's build artifacts into B.
  rm -rf "${REPOSITORY_ROOT:?}/_site" \
    || { echo "FAIL [$label]: could not clear _site/ before build" >&2; return 1; }

  local lore_dest=""
  # RETURN (not EXIT) trap: this function is called once per domain and
  # returns once per call, so each call's own CUSTOM_LORE_FILE copy - if
  # any - must be cleaned up at the end of THAT call, not deferred to the
  # whole script's exit (which would leave every earlier domain's custom
  # lore file sitting in src/lore/custom/ during every later domain's
  # build). A trap set inside a function fires on every return path out of
  # it, success or `return 1`, which covers every FAIL branch below.
  #
  # `trap - RETURN` as the trap's OWN last action is deliberate, not
  # redundant: bash's RETURN trap is shell-global, not scoped to this one
  # function call - left armed, it would fire AGAIN when the next function
  # to return does (main()'s own final `return`, once the whole domain
  # loop finishes), referencing this call's already-popped `lore_dest`
  # local under `set -u` ("unbound variable"), aborting the run after
  # every domain had already finished. Disarming it immediately after it
  # fires once confines it to this call; the next build_and_deploy() call
  # re-arms it fresh on its own next line.
  trap '[ -n "$lore_dest" ] && rm -f "$lore_dest"; trap - RETURN' RETURN

  echo "--- [$label 1/5] custom lore injection (CUSTOM_LORE_FILE=${b_custom_lore_file:-none}) ---"
  if [ -n "$b_custom_lore_file" ]; then
    if [ -f "$b_custom_lore_file" ]; then
      mkdir -p "$REPOSITORY_ROOT/src/lore/custom" \
        || { echo "FAIL [$label]: could not create src/lore/custom/" >&2; return 1; }
      lore_dest="$REPOSITORY_ROOT/src/lore/custom/$(basename "$b_custom_lore_file")"
      cp "$b_custom_lore_file" "$lore_dest" \
        || { echo "FAIL [$label]: could not copy CUSTOM_LORE_FILE ($b_custom_lore_file)" >&2; return 1; }
    else
      echo "FAIL [$label]: CUSTOM_LORE_FILE is set but not found: $b_custom_lore_file" >&2
      return 1
    fi
  fi

  echo "--- [$label 2/5] eleventy build (CHARACTERS=$CHARACTERS TOPICS=$TOPICS THREADS=$THREADS SITE_DOMAIN=$SITE_DOMAIN) ---"
  "$REPOSITORY_ROOT/node_modules/.bin/eleventy" \
    || { echo "FAIL [$label]: eleventy build" >&2; return 1; }

  echo "--- [$label 3/5] verify _site/ exists ---"
  test -d "$REPOSITORY_ROOT/_site" \
    || { echo "FAIL [$label]: _site/ was not produced by eleventy" >&2; return 1; }

  echo "--- [$label 4/5] rewrite /star-rangers/ prefix ---"
  find "$REPOSITORY_ROOT/_site" -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) \
    -exec sed -i 's#/star-rangers/#/#g' {} + \
    || { echo "FAIL [$label]: prefix rewrite (sed)" >&2; return 1; }

  echo "--- [$label 5/5] theme select + custom CSS + rsync deploy + verify ---"
  local src_css="$REPOSITORY_ROOT/src/css/main.css"
  if [ "$b_theme" != "default" ] && [ -f "$REPOSITORY_ROOT/src/css/theme-$b_theme.css" ]; then
    src_css="$REPOSITORY_ROOT/src/css/theme-$b_theme.css"
  fi
  cp "$src_css" "$REPOSITORY_ROOT/_site/css/main.css" \
    || { echo "FAIL [$label]: theme CSS copy ($src_css)" >&2; return 1; }
  # CUSTOM_CSS_FILE is a clone-local, untracked stylesheet appended after
  # the theme's own CSS, so its rules load (and can override) last - lets
  # one domain tweak a handful of things without a whole new
  # theme-<name>.css living in the shared repo.
  if [ -n "$b_custom_css_file" ]; then
    if [ -f "$b_custom_css_file" ]; then
      { printf '\n/* --- CUSTOM_CSS_FILE: %s --- */\n' "$b_custom_css_file"; cat "$b_custom_css_file"; } \
        >> "$REPOSITORY_ROOT/_site/css/main.css" \
        || { echo "FAIL [$label]: could not append CUSTOM_CSS_FILE ($b_custom_css_file)" >&2; return 1; }
    else
      echo "FAIL [$label]: CUSTOM_CSS_FILE is set but not found: $b_custom_css_file" >&2
      return 1
    fi
  fi
  # --exclude keeps AutoSSL/Let's Encrypt's domain-validation directory out
  # of rsync's view entirely - it's never part of the Eleventy build, so
  # without this, --delete-delay would remove it (and any in-progress
  # certificate challenge) on every single deploy.
  rsync -av --delete-delay --exclude=.well-known/acme-challenge/ "$REPOSITORY_ROOT/_site/" "$dest" \
    || { echo "FAIL [$label]: rsync to $dest" >&2; return 1; }
  test -f "${dest}index.html" \
    || { echo "FAIL [$label]: post-deploy check - ${dest}index.html missing" >&2; return 1; }
  # cPanel is Apache-hosted, unlike GitHub Pages, so it's the only target
  # that actually reads .htaccess - a missing file here silently deploys
  # with none of its security headers (CSP, X-Frame-Options, etc.) instead
  # of failing loudly, so it gets the same fail-the-deploy treatment as
  # index.html above rather than being left to a manual spot-check.
  test -f "${dest}.htaccess" \
    || { echo "FAIL [$label]: post-deploy check - ${dest}.htaccess missing" >&2; return 1; }
  test -f "${dest}.well-known/security.txt" \
    || { echo "FAIL [$label]: post-deploy check - ${dest}.well-known/security.txt missing" >&2; return 1; }

  echo "=== [$label] build + deploy completed successfully ==="
}

# ---------------------------------------------------------------------------
# main(): shared setup once (Node + npm ci), then one build_and_deploy()
# call for the primary domain and one per ALT_DOMAINS entry, aggregating
# every call's pass/fail into a single overall result instead of stopping
# at the first failure - see build_and_deploy()'s own header comment for
# why. An inline `exit 1` (as opposed to `return 1`) is still used for the
# two shared-setup steps below: those aren't per-domain, so a failure there
# means no domain can build at all, and the whole run should stop rather
# than attempt - and report on - domains that have no chance of succeeding.
# Recall this whole function runs as the left side of a pipe
# (`main | tee ...`), so `exit 1` here only terminates this function's own
# pipeline subshell, letting the rest of the script still run notify() and
# log cleanup below.
# ---------------------------------------------------------------------------
main() {
  echo "--- shared setup: ensure-node + npm ci ---"
  # shellcheck disable=SC1091
  . "$REPOSITORY_ROOT/scripts/ensure-node.sh" \
    || { echo "FAIL: scripts/ensure-node.sh (Node.js install/verify)" >&2; exit 1; }
  npm ci --no-audit --no-fund \
    || { echo "FAIL: npm ci" >&2; exit 1; }

  local alt_count=0 id
  for id in $ALT_DOMAINS; do alt_count=$((alt_count + 1)); done

  # DEPLOY_PRIMARY=false with no ALT_DOMAINS configured would deploy
  # nothing at all - almost certainly a deploy.conf mistake (an addon-only
  # account that hasn't listed its addon domains yet, or a stray
  # DEPLOY_PRIMARY=false left over from copying another clone's config)
  # rather than an intentional no-op run. This is a whole-run misconfig,
  # not a single domain's problem, so it uses `exit 1` rather than
  # `return 1` - same reasoning as the shared-setup checks above (no domain
  # here has any chance of succeeding either).
  if [ "$DEPLOY_PRIMARY" != "true" ] && [ "$alt_count" -eq 0 ]; then
    echo "FAIL: DEPLOY_PRIMARY=false and ALT_DOMAINS is empty - this run would deploy nothing" >&2
    exit 1
  fi

  echo "=== Deploying $( [ "$DEPLOY_PRIMARY" = "true" ] && echo "primary + " )${alt_count} alt domain(s): ${ALT_DOMAINS:-none} (deploy_primary=$DEPLOY_PRIMARY) ==="

  local overall_status=0
  local -a result_lines=()

  if [ "$DEPLOY_PRIMARY" = "true" ]; then
    if build_and_deploy "primary" "/home/$CPANEL_USER/public_html/" \
         "$THEME" "$CHARACTERS" "$TOPICS" "$THREADS" "$SITE_NAME" "$SITE_TITLE" "$DOMAIN" \
         "$CUSTOM_LORE_FILE" "$CUSTOM_CSS_FILE" "COMMENTS_ENABLED=$COMMENTS_ENABLED" \
         "GISCUS_REPO=$GISCUS_REPO" "GISCUS_REPO_ID=$GISCUS_REPO_ID" \
         "GISCUS_CATEGORY_CHARACTERS_ID=$GISCUS_CATEGORY_CHARACTERS_ID" \
         "GISCUS_CATEGORY_LORE_ID=$GISCUS_CATEGORY_LORE_ID" \
         "GISCUS_CATEGORY_EPISODES_ID=$GISCUS_CATEGORY_EPISODES_ID"; then
      result_lines+=("OK   primary -> /home/$CPANEL_USER/public_html/ ($DOMAIN)")
    else
      overall_status=1
      result_lines+=("FAIL primary -> /home/$CPANEL_USER/public_html/ ($DOMAIN)")
    fi
  else
    echo "=== [primary] skipped (DEPLOY_PRIMARY=false) - public_html left untouched ==="
    result_lines+=("SKIP primary -> /home/$CPANEL_USER/public_html/ (DEPLOY_PRIMARY=false)")
  fi

  for id in $ALT_DOMAINS; do
    if ! alt_id_valid "$id"; then
      echo "FAIL [$id]: not a valid ALT_DOMAINS identifier (letters/digits/underscore, not starting with a digit)" >&2
      overall_status=1
      result_lines+=("FAIL $id (invalid ALT_DOMAINS identifier)")
      continue
    fi

    local alt_dir alt_domain alt_dest
    alt_dir=$(alt_get "$id" DIR)
    alt_domain=$(alt_get "$id" DOMAIN)

    # DIR and DOMAIN are the two fields every alt domain must set
    # explicitly - unlike THEME/CHARACTERS/etc, there's no sensible
    # default sibling-folder name or public domain to fall back to, and
    # guessing either wrong risks silently deploying to (or claiming to
    # be) the wrong place on a live account.
    if [ -z "$alt_dir" ]; then
      echo "FAIL [$id]: ALT_${id}_DIR is not set (required)" >&2
      overall_status=1
      result_lines+=("FAIL $id (ALT_${id}_DIR not set)")
      continue
    fi
    if [ -z "$alt_domain" ]; then
      echo "FAIL [$id]: ALT_${id}_DOMAIN is not set (required)" >&2
      overall_status=1
      result_lines+=("FAIL $id (ALT_${id}_DOMAIN not set)")
      continue
    fi

    alt_dest="/home/$CPANEL_USER/$alt_dir/"
    # Mirrors CUSTOM_LORE_FILE/CUSTOM_CSS_FILE's own philosophy elsewhere
    # in this script: fail loudly on a listed-but-broken alt domain rather
    # than silently skipping it, since a typo'd ALT_<id>_DIR or an addon
    # domain whose document root hasn't been created yet should surface as
    # a clear per-domain FAIL line (and notification), not a deploy that
    # quietly does nothing for that domain.
    if [ ! -d "$alt_dest" ]; then
      echo "FAIL [$id]: ALT_${id}_DIR target does not exist: $alt_dest (create the addon domain / point its document root there first)" >&2
      overall_status=1
      result_lines+=("FAIL $id -> $alt_dest (directory missing)")
      continue
    fi

    local alt_theme alt_characters alt_topics alt_threads alt_site_name alt_site_title \
          alt_custom_lore alt_custom_css alt_comments_enabled \
          alt_giscus_repo alt_giscus_repo_id alt_giscus_cat_characters alt_giscus_cat_lore alt_giscus_cat_episodes
    alt_theme=$(alt_get "$id" THEME); alt_theme="${alt_theme:-default}"
    alt_characters=$(alt_get "$id" CHARACTERS)
    alt_topics=$(alt_get "$id" TOPICS)
    alt_threads=$(alt_get "$id" THREADS)
    alt_site_name=$(alt_get "$id" SITE_NAME)
    alt_site_title=$(alt_get "$id" SITE_TITLE)
    alt_custom_lore=$(alt_get "$id" CUSTOM_LORE_FILE)
    alt_custom_css=$(alt_get "$id" CUSTOM_CSS_FILE)
    alt_comments_enabled=$(alt_get "$id" COMMENTS_ENABLED); alt_comments_enabled="${alt_comments_enabled:-true}"
    alt_giscus_repo=$(alt_get "$id" GISCUS_REPO)
    alt_giscus_repo_id=$(alt_get "$id" GISCUS_REPO_ID)
    alt_giscus_cat_characters=$(alt_get "$id" GISCUS_CATEGORY_CHARACTERS_ID)
    alt_giscus_cat_lore=$(alt_get "$id" GISCUS_CATEGORY_LORE_ID)
    alt_giscus_cat_episodes=$(alt_get "$id" GISCUS_CATEGORY_EPISODES_ID)

    if build_and_deploy "$id" "$alt_dest" "$alt_theme" "$alt_characters" "$alt_topics" "$alt_threads" \
         "$alt_site_name" "$alt_site_title" "$alt_domain" "$alt_custom_lore" "$alt_custom_css" \
         "COMMENTS_ENABLED=$alt_comments_enabled" \
         "GISCUS_REPO=$alt_giscus_repo" "GISCUS_REPO_ID=$alt_giscus_repo_id" \
         "GISCUS_CATEGORY_CHARACTERS_ID=$alt_giscus_cat_characters" \
         "GISCUS_CATEGORY_LORE_ID=$alt_giscus_cat_lore" \
         "GISCUS_CATEGORY_EPISODES_ID=$alt_giscus_cat_episodes"; then
      result_lines+=("OK   $id -> $alt_dest ($alt_domain)")
    else
      overall_status=1
      result_lines+=("FAIL $id -> $alt_dest ($alt_domain)")
    fi
  done

  echo "=== Per-domain results ==="
  printf '%s\n' "${result_lines[@]}"

  if [ "$overall_status" -eq 0 ]; then
    echo "=== Build + deploy completed successfully for all domains ==="
  else
    echo "=== One or more domains FAILED - see per-domain results and FAIL lines above ===" >&2
  fi

  return "$overall_status"
}

# Foreground pipe (NOT `exec > >(tee ...)`): the shell blocks until both
# main() and tee have fully finished, so LOG_FILE is guaranteed complete
# and flushed by the time we read it below - no race with the notify step.
main 2>&1 | tee -a "$LOG_FILE"
STATUS=${PIPESTATUS[0]}

# ---------------------------------------------------------------------------
# Notification: best-effort, always attempted exactly once per address in
# NOTIFY_EMAILS (computed near the top of this file, before main() ran),
# and NEVER allowed to change the script's own exit status - cPanel uses
# that exit status for its own deployment UI, and it must reflect the
# BUILD/DEPLOY outcome only. The email body is the same full run log
# (covering every domain, via the "=== [<label>] ..." / "FAIL [<label>]:
# ..." lines each build_and_deploy() call and main()'s own per-domain
# results summary already write into it) for every recipient - there's one
# run, one log, so there's no per-domain log to split out even when a
# recipient is one alt domain's ADMIN_EMAIL rather than the primary's.
# ---------------------------------------------------------------------------
NOTIFIED=0
MAIL_OK=0
notify() {
  status="$1"
  [ "$NOTIFIED" -eq 1 ] && return 0
  NOTIFIED=1

  if [ "${#NOTIFY_EMAILS[@]}" -eq 0 ]; then
    echo "=== No notification addresses configured; skipping notification ==="
    return 0
  fi

  if [ "$status" -eq 0 ]; then RESULT="SUCCESS"; else RESULT="FAILURE"; fi
  SUBJECT="[star-rangers deploy] $RESULT - ${CPANEL_USER} - $(date -u +'%Y-%m-%d %H:%M:%SZ')"

  echo "=== Deploy finished: $RESULT (exit $status). Notifying: ${NOTIFY_EMAILS[*]} ==="

  local addr
  for addr in "${NOTIFY_EMAILS[@]}"; do
    if command -v mail >/dev/null 2>&1; then
      if mail -s "$SUBJECT" "$addr" < "$LOG_FILE"; then
        MAIL_OK=1
        echo "=== Notification sent to $addr via mail(1) ==="
      else
        echo "=== WARNING: mail(1) exited non-zero for $addr; notification may not have been delivered ===" >&2
      fi
    elif [ -x /usr/sbin/sendmail ]; then
      if { printf 'To: %s\nSubject: %s\nContent-Type: text/plain; charset=utf-8\n\n' \
             "$addr" "$SUBJECT"; cat "$LOG_FILE"; } | /usr/sbin/sendmail -t; then
        MAIL_OK=1
        echo "=== Notification sent to $addr via /usr/sbin/sendmail ==="
      else
        echo "=== WARNING: sendmail exited non-zero for $addr; notification may not have been delivered ===" >&2
      fi
    else
      echo "=== WARNING: neither mail(1) nor /usr/sbin/sendmail found; notification skipped ===" >&2
      break
    fi
  done

  return 0   # never let a mail failure propagate
}

# Safety net: also fire on unexpected termination (e.g. a signal) so a
# partial log still gets mailed, without double-sending on the normal path
# (the NOTIFIED guard makes this idempotent).
trap 'notify "$?"' EXIT

notify "$STATUS"

# ---------------------------------------------------------------------------
# Persist a copy of every run's log locally, regardless of NOTIFY_EMAILS, so
# past deploys can be inspected without needing email at all. deploy-logs/
# is untracked (gitignored) - host-local operational data, not repo content.
# One file per attempt (timestamp + result), pruned to the most recent
# LOG_RETENTION runs so it can't grow unbounded on a quota-limited account.
# ---------------------------------------------------------------------------
LOG_RETENTION=20
LOG_DIR="$REPOSITORY_ROOT/deploy-logs"
mkdir -p "$LOG_DIR" 2>/dev/null
if [ "$STATUS" -eq 0 ]; then LOG_RESULT="SUCCESS"; else LOG_RESULT="FAILURE"; fi
PERSISTED_LOG="$LOG_DIR/$(date -u +'%Y-%m-%dT%H-%M-%SZ')-$LOG_RESULT.log"
if cp "$LOG_FILE" "$PERSISTED_LOG" 2>/dev/null; then
  echo "=== Deploy log saved to $PERSISTED_LOG ==="
  # Filenames are ISO-8601-prefixed, so lexical sort is chronological sort;
  # drop everything but the newest LOG_RETENTION files.
  ls -1 "$LOG_DIR" 2>/dev/null | sort | head -n "-$LOG_RETENTION" | while IFS= read -r old; do
    rm -f "$LOG_DIR/$old"
  done
else
  echo "=== WARNING: could not persist deploy log to $LOG_DIR ===" >&2
fi

if [ "$MAIL_OK" -eq 1 ] || [ "${#NOTIFY_EMAILS[@]}" -eq 0 ]; then
  rm -f "$LOG_FILE" 2>/dev/null
else
  echo "Deploy log retained at $LOG_FILE (mail delivery unavailable/failed)" >&2
fi

exit "$STATUS"
