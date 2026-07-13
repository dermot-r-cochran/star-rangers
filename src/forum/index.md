---
layout: base.njk
title: "Forum"
description: "Discuss Star Rangers with other readers."
---
<h1 class="page-title">Forum</h1>

{% if site.giscus.enabled %}
<p class="page-intro">
  Discuss the story with other readers below, powered by
  <a href="https://giscus.app/">giscus</a> and backed by GitHub Discussions.
  Sign in with a GitHub account to post.
</p>
<script src="https://giscus.app/client.js"
  data-repo="{{ site.giscus.repo }}"
  data-repo-id="{{ site.giscus.repoId }}"
  data-category="{{ site.giscus.category }}"
  data-category-id="{{ site.giscus.categoryId }}"
  data-mapping="specific"
  data-term="forum"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-theme="{% if theme == 'light' %}light{% else %}dark{% endif %}"
  data-lang="en"
  crossorigin="anonymous"
  async>
</script>
{% else %}
<p class="page-intro">This edition of the site doesn't have a discussion forum enabled.</p>
{% endif %}
