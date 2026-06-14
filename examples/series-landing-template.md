---
layout: default
title: "SERIES TITLE"
permalink: /series-slug/
description: "One-sentence description of the series for SEO and social share."
---

<!--
  SERIES LANDING PAGE TEMPLATE
  ─────────────────────────────
  Copy this file to the root as `series-slug.md` (e.g. `leadership-os.md`).
  Replace every ALL-CAPS placeholder with your content.
  The episode list auto-generates from posts with matching series_code.

  Front matter to set:
    title       → displayed in browser tab and OG
    permalink   → URL (must match the filename, e.g. /leadership-os/)
    description → shown in search results and social previews
-->

<!-- ═══════════════════════
     HERO
═══════════════════════ -->
<section class="hero">
  <div class="eyebrow">SERIES NAME · A Series on TOPIC</div>
  <h1 class="hero-title">OPENING STATEMENT — the one-sentence argument of the series.</h1>
  <p class="hero-sub">TWO OR THREE SENTENCES expanding the argument. Who it is written for and why it matters now.</p>
  <div class="hero-actions">
    <a class="btn-primary" href="#episodes">See the episodes</a>
    <a class="btn-secondary" href="/publications/">All publications</a>
  </div>
</section>

<!-- ═══════════════════════
     THESIS BAND
═══════════════════════ -->
<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The series thesis</div>
    <p class="pull-quote">ONE SENTENCE that captures the central claim. <em>The part you want readers to remember.</em></p>
  </div>
</div>

<!-- ═══════════════════════
     EPISODES (auto-generated)
═══════════════════════ -->
<section class="section-wide" id="episodes">
  <div class="section-label">The episodes</div>
  <h2>EPISODE COUNT episodes. ONE THEME.</h2>
  <p class="prose" style="margin-top:.8rem;">SHORT DESCRIPTION of how the episodes relate — sequential, standalone, etc.</p>

  {% assign series_posts = site.posts | where: "series_code", "SERIES_CODE" | sort: "series_position" %}

  <div class="art-related-grid" style="margin-top:2rem;">
    {% for post in series_posts %}
    <a class="card {% if post.status == 'published' %}{% else %}card-muted{% endif %}"
       {% if post.status == 'published' %}href="{{ post.url }}"{% endif %}
       style="display:block;text-decoration:none;color:inherit;">
      <div class="card-eyebrow">
        Episode {{ post.series_position }}
        {% if post.status == 'published' %}
          · <span style="color:var(--primary)">Published</span>
        {% elsif post.status == 'review' %}
          · <span style="color:var(--muted)">Coming soon</span>
        {% else %}
          · <span style="color:var(--faint)">In progress</span>
        {% endif %}
      </div>
      <div class="card-title">{{ post.title }}</div>
      {% if post.tldr %}
        <p class="card-desc">{{ post.tldr | truncate: 120 }}</p>
      {% elsif post.description %}
        <p class="card-desc">{{ post.description | truncate: 120 }}</p>
      {% endif %}
    </a>
    {% endfor %}

    {% if series_posts.size == 0 %}
    <p style="color:var(--muted);font-size:.85rem;">No episodes published yet — set <code>series_code: SERIES_CODE</code> in your post front matter.</p>
    {% endif %}
  </div>
</section>

<!-- ═══════════════════════
     WHO IT IS FOR  (optional — remove if not needed)
═══════════════════════ -->
<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">Who this series is written for</div>
    <p class="pull-quote">SHORT PHRASE describing the reader. <em>The specific situation they are in.</em></p>
  </div>
</div>

<!-- ═══════════════════════
     FOLLOW + AUTHOR
═══════════════════════ -->
<section class="section-wide">
  <div style="display:flex;gap:3rem;flex-wrap:wrap;align-items:flex-start;">

    <div style="flex:1;min-width:260px;">
      <div class="section-label">Follow the series</div>
      <h2>Episodes publish as they are ready.</h2>
      <p style="font-size:.92rem;color:var(--muted);line-height:1.7;margin-top:.8rem;max-width:48ch;">Each episode is published directly on this site — no gate, no email required.</p>
      <div style="margin-top:1.4rem;display:flex;gap:.8rem;flex-wrap:wrap;">
        <a class="btn-primary" href="https://www.linkedin.com/in/lakshminarayanann/" target="_blank" rel="noopener">Follow on LinkedIn</a>
        <a class="btn-secondary" href="/publications/">All publications</a>
      </div>
    </div>

    <div style="flex:1;min-width:260px;display:flex;gap:1.2rem;align-items:flex-start;">
      <div class="hz-author-photo">
        <img src="/assets/img/lakshmi.jpg" alt="Lakshmi Narayanan Narasimhan"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div class="hz-author-initials" style="display:none;">LN</div>
      </div>
      <div>
        <div class="hz-author-name">Lakshmi Narayanan Narasimhan</div>
        <div class="hz-author-title">Technology Executive · Leadership Practitioner · Author</div>
        <a class="card-link" href="/about/" style="margin-top:.5rem;display:inline-block;">Full story</a>
      </div>
    </div>

  </div>
</section>

<!-- CLOSING QUOTE  (optional) -->
<div class="section-ink">
  <div class="bleed-inner">
    <p class="pull-quote">CLOSING PULL QUOTE — the line you want readers to leave with.</p>
  </div>
</div>
