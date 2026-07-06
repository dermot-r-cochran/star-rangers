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
# persistence problem; one sourcing point is enough.
# ---------------------------------------------------------------------------
CPANEL_USER="sciencef"
THEME="default"
CHARACTERS=""
TOPICS=""
ADMIN_EMAIL=""
# shellcheck disable=SC1091
[ -f "$REPOSITORY_ROOT/deploy.conf" ] && . "$REPOSITORY_ROOT/deploy.conf"

# CHARACTERS/TOPICS/THEME are read via `process.env` inside the Eleventy
# Node build below, which runs as a *child process* - sourcing deploy.conf
# only sets them as local shell variables, so they must still be
# `export`ed for Node to see them. THEME still also drives the post-build
# CSS swap in step 5 below (that part never needed the export - it's this
# same shell reading its own variable) - the export here is only so
# src/index.md's per-theme hero copy resolves during the build itself.
# CPANEL_USER/ADMIN_EMAIL are only ever read back within this same shell
# (never by a subprocess), so they don't need it.
export CHARACTERS TOPICS THEME

{
  printf '=== cPanel deploy started: %s (user=%s theme=%s) ===\n' \
    "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$CPANEL_USER" "$THEME"
} | tee -a "$LOG_FILE"

# ---------------------------------------------------------------------------
# main(): the actual build+deploy sequence, unchanged in substance from the
# old 5 tasks - only the failure handling changed (an inline `exit 1` here
# only terminates this function's pipeline subshell, letting the rest of
# the script still run notify()/cleanup below).
# ---------------------------------------------------------------------------
main() {
  echo "--- [1/5] ensure-node + npm ci ---"
  # shellcheck disable=SC1091
  . "$REPOSITORY_ROOT/scripts/ensure-node.sh" \
    || { echo "FAIL: scripts/ensure-node.sh (Node.js install/verify)" >&2; exit 1; }
  npm ci --no-audit --no-fund \
    || { echo "FAIL: npm ci" >&2; exit 1; }

  echo "--- [2/5] eleventy build (CHARACTERS=$CHARACTERS TOPICS=$TOPICS) ---"
  "$REPOSITORY_ROOT/node_modules/.bin/eleventy" \
    || { echo "FAIL: eleventy build" >&2; exit 1; }

  echo "--- [3/5] verify _site/ exists ---"
  test -d "$REPOSITORY_ROOT/_site" \
    || { echo "FAIL: _site/ was not produced by eleventy" >&2; exit 1; }

  echo "--- [4/5] rewrite /star-rangers/ prefix ---"
  find "$REPOSITORY_ROOT/_site" -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) \
    -exec sed -i 's#/star-rangers/#/#g' {} + \
    || { echo "FAIL: prefix rewrite (sed)" >&2; exit 1; }

  echo "--- [5/5] theme select + rsync deploy + verify ---"
  DEST="/home/$CPANEL_USER/public_html/"
  SRC_CSS="$REPOSITORY_ROOT/src/css/main.css"
  if [ "$THEME" != "default" ] && [ -f "$REPOSITORY_ROOT/src/css/theme-$THEME.css" ]; then
    SRC_CSS="$REPOSITORY_ROOT/src/css/theme-$THEME.css"
  fi
  cp "$SRC_CSS" "$REPOSITORY_ROOT/_site/css/main.css" \
    || { echo "FAIL: theme CSS copy ($SRC_CSS)" >&2; exit 1; }
  # --exclude keeps AutoSSL/Let's Encrypt's domain-validation directory out
  # of rsync's view entirely - it's never part of the Eleventy build, so
  # without this, --delete-delay would remove it (and any in-progress
  # certificate challenge) on every single deploy.
  rsync -av --delete-delay --exclude=.well-known/acme-challenge/ "$REPOSITORY_ROOT/_site/" "$DEST" \
    || { echo "FAIL: rsync to $DEST" >&2; exit 1; }
  test -f "${DEST}index.html" \
    || { echo "FAIL: post-deploy check - ${DEST}index.html missing" >&2; exit 1; }

  echo "=== Build + deploy completed successfully ==="
}

# Foreground pipe (NOT `exec > >(tee ...)`): the shell blocks until both
# main() and tee have fully finished, so LOG_FILE is guaranteed complete
# and flushed by the time we read it below - no race with the notify step.
main 2>&1 | tee -a "$LOG_FILE"
STATUS=${PIPESTATUS[0]}

# ---------------------------------------------------------------------------
# Notification: best-effort, always attempted exactly once, and NEVER
# allowed to change the script's own exit status - cPanel uses that exit
# status for its own deployment UI, and it must reflect the BUILD/DEPLOY
# outcome only.
# ---------------------------------------------------------------------------
NOTIFIED=0
MAIL_OK=0
notify() {
  status="$1"
  [ "$NOTIFIED" -eq 1 ] && return 0
  NOTIFIED=1

  if [ -z "$ADMIN_EMAIL" ]; then
    echo "=== ADMIN_EMAIL not set in deploy.conf; skipping notification ==="
    return 0
  fi

  if [ "$status" -eq 0 ]; then RESULT="SUCCESS"; else RESULT="FAILURE"; fi
  SUBJECT="[star-rangers deploy] $RESULT - ${CPANEL_USER} - $(date -u +'%Y-%m-%d %H:%M:%SZ')"

  echo "=== Deploy finished: $RESULT (exit $status). Notifying $ADMIN_EMAIL ==="

  if command -v mail >/dev/null 2>&1; then
    if mail -s "$SUBJECT" "$ADMIN_EMAIL" < "$LOG_FILE"; then
      MAIL_OK=1
      echo "=== Notification sent via mail(1) ==="
    else
      echo "=== WARNING: mail(1) exited non-zero; notification may not have been delivered ===" >&2
    fi
  elif [ -x /usr/sbin/sendmail ]; then
    if { printf 'To: %s\nSubject: %s\nContent-Type: text/plain; charset=utf-8\n\n' \
           "$ADMIN_EMAIL" "$SUBJECT"; cat "$LOG_FILE"; } | /usr/sbin/sendmail -t; then
      MAIL_OK=1
      echo "=== Notification sent via /usr/sbin/sendmail ==="
    else
      echo "=== WARNING: sendmail exited non-zero; notification may not have been delivered ===" >&2
    fi
  else
    echo "=== WARNING: neither mail(1) nor /usr/sbin/sendmail found; notification skipped ===" >&2
  fi

  return 0   # never let a mail failure propagate
}

# Safety net: also fire on unexpected termination (e.g. a signal) so a
# partial log still gets mailed, without double-sending on the normal path
# (the NOTIFIED guard makes this idempotent).
trap 'notify "$?"' EXIT

notify "$STATUS"

# ---------------------------------------------------------------------------
# Persist a copy of every run's log locally, regardless of ADMIN_EMAIL, so
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

if [ "$MAIL_OK" -eq 1 ] || [ -z "$ADMIN_EMAIL" ]; then
  rm -f "$LOG_FILE" 2>/dev/null
else
  echo "Deploy log retained at $LOG_FILE (mail delivery unavailable/failed)" >&2
fi

exit "$STATUS"
