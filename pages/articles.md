---
layout: default
title: Articles
permalink: /articles/
description: "Articles across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces — built to install, not just inform."
---

<div class="pub-hero-split">

  <!-- LEFT: Dark panel -->
  <div class="pub-series-nav pub-manifesto">
    <div class="pub-panel-top pub-m-a1">
      <div class="pub-series-eyebrow">Six series</div>
      <a class="pub-series-row" href="/series/horizon/">
        <span class="pub-series-row-name">Horizon</span>
        <span class="series-status in-progress" style="font-size:.48rem;padding:.1rem .38rem;"><span class="series-dot"></span>Live</span>
      </a>
      <a class="pub-series-row" href="/series/frontier/">
        <span class="pub-series-row-name">Frontier</span>
        <span class="series-status coming" style="font-size:.48rem;padding:.1rem .38rem;"><span class="series-dot"></span>To write</span>
      </a>
      <a class="pub-series-row" href="/series/compass/">
        <span class="pub-series-row-name">Compass</span>
        <span class="series-status ideation" style="font-size:.48rem;padding:.1rem .38rem;"><span class="series-dot"></span>Ideation</span>
      </a>
      <div class="pub-series-row pub-series-row-dim">
        <span class="pub-series-row-name">The Trust Equation</span>
        <span class="series-status ideation" style="font-size:.48rem;padding:.1rem .38rem;"><span class="series-dot"></span>Ideation</span>
      </div>
      <div class="pub-series-row pub-series-row-dim">
        <span class="pub-series-row-name">Leadership OS</span>
        <span class="series-status coming" style="font-size:.48rem;padding:.1rem .38rem;"><span class="series-dot"></span>Pipeline</span>
      </div>
      <div class="pub-series-row pub-series-row-dim">
        <span class="pub-series-row-name">The Moving Target</span>
        <span class="series-status coming" style="font-size:.48rem;padding:.1rem .38rem;"><span class="series-dot"></span>Pipeline</span>
      </div>
    </div>

    <div class="pub-panel-mid">
      <div class="pub-series-eyebrow pub-m-a2">The editorial standard</div>
      <p class="pub-manifesto-lead pub-m-a3">Most leadership writing is written to be agreed with.</p>
      <div class="pub-manifesto-principle">
        <span class="pub-m-line pub-m-a4">Anything not questioned is a gateway to mediocrity.</span>
        <span class="pub-m-line pub-m-a5">Anything questioned with curiosity is the way to meritocracy.</span>
        <span class="pub-m-line pub-m-a6">Let us stop expecting that we are always right.</span>
      </div>
      <p class="pub-manifesto-body pub-m-a7">Every article is stress-tested before it is drafted. The counter-argument comes first. If the thesis cannot survive it, the article does not exist. What you read here has been questioned. It held.</p>
    </div>

    <div class="pub-panel-bot pub-m-a9">
      <div class="pub-series-eyebrow">Follow along</div>
      <p class="pub-panel-bot-desc">Get articles when they publish. No gate. No email required to read the work.</p>
      <a class="pub-detail-link" href="/subscribe/">Subscribe →</a>
    </div>
  </div>

  <!-- RIGHT: Methodology with concrete examples -->
  <div class="pub-info-panel">
    <div class="eyebrow" style="color:var(--muted);">Articles</div>
    <h1 class="pub-info-title">Writing worth reading slowly.</h1>
    <p class="pub-info-sub">Each series is a single argument delivered across multiple pieces. Every article follows the same four-part structure — not as a formula, but as a standard.</p>
    <div class="pub-approach">
      <div class="pub-approach-row">
        <div class="pub-approach-num">01</div>
        <div>
          <div class="pub-approach-name">Perspective</div>
          <div class="pub-approach-desc">The argument, built from first principles. In H1: <em>execution earned compensation. It no longer earns a future.</em></div>
        </div>
      </div>
      <div class="pub-approach-row">
        <div class="pub-approach-num">02</div>
        <div>
          <div class="pub-approach-name">Stress Test</div>
          <div class="pub-approach-desc">The strongest counter-argument, before drafting. In H1: <em>"Why not just hire GenAI talent and cut the people?"</em></div>
        </div>
      </div>
      <div class="pub-approach-row">
        <div class="pub-approach-num">03</div>
        <div>
          <div class="pub-approach-name">Diagnostic</div>
          <div class="pub-approach-desc">Applied to your context. In H1: <em>when did you last shape a conversation before the brief was written?</em></div>
        </div>
      </div>
      <div class="pub-approach-row">
        <div class="pub-approach-num">04</div>
        <div>
          <div class="pub-approach-name">Drills</div>
          <div class="pub-approach-desc">Installation — not reading. In H1: <em>10 exercises. The first asks what would actually change if your firm's chair were empty.</em></div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- NEW STRIP -->
{% assign latest = site.posts | where: "status", "published" | sort: "date" | last %}
{% if latest %}
<a class="hp-new-strip" href="{{ latest.url }}">
  <span class="hp-new-badge">New</span>
  {% if latest.series %}<span class="hp-new-series">{{ latest.series }} · {{ latest.article_code }}</span><span class="hp-new-sep">·</span>{% endif %}
  <span class="hp-new-title">{{ latest.title }}</span>
  <span class="hp-new-arrow">Read →</span>
</a>
{% endif %}

<!-- START HERE -->
{% assign hz_posts = site.posts | where: "series_code", "H" | sort: "series_position" %}
{% assign h1 = hz_posts | where: "series_position", 1 | first %}
{% if h1 %}
<section class="section-wide">
  <div class="section-label">Start here</div>
  <div class="art-start-here">
    <div class="art-start-here-left">
      <div class="art-start-badge">Best first read</div>
      <h2 class="art-start-title">{{ h1.title }}</h2>
      <p class="art-start-desc">{{ h1.tldr }}</p>
      <div class="art-start-footer">
        <a class="btn-primary" href="{{ h1.url }}">Read H1 →</a>
        {% if h1.drill_pack_url %}<a class="btn-secondary" href="{{ h1.drill_pack_url }}">{{ h1.drill_pack_count }} drills →</a>{% endif %}
      </div>
    </div>
    <div class="art-start-right">
      <div class="art-start-meta-label">Why start here</div>
      <p class="art-start-meta">H1 introduces the two forces reshaping technology services — GenAI and GCCs — and the six-step progression that defines the rest of the series. Every subsequent article builds on this frame. Read it first.</p>
    </div>
  </div>
</section>
{% endif %}

<!-- THE ARC -->
{% assign published_posts = hz_posts | where: "status", "published" %}
{% if published_posts.size > 1 %}
<section class="section-wide">
  <div class="section-label">The arc · Horizon</div>
  <h2>One argument. Read in sequence.</h2>
  <p class="prose" style="margin-top:.8rem;">Each episode names one obstacle, explains the mechanism, and identifies the move that unlocks the next rung. They reward sequential reading — but each is complete in itself.</p>
  <div class="art-arc">
    {% for post in hz_posts %}
    {% if post.status == "published" %}
    <div class="art-arc-item" data-read-url="{{ post.url }}">
      <div class="art-arc-num">0{{ post.series_position }}</div>
      <div class="art-arc-body">
        <div class="art-arc-title">{{ post.title }}</div>
        <p class="art-arc-idea">{{ post.tldr | truncate: 120 }}</p>
        <div class="art-arc-links">
          <a href="{{ post.url }}">Read →</a>
          {% if post.drill_pack_url %}<a href="{{ post.drill_pack_url }}" class="art-arc-drill">{{ post.drill_pack_count }} drills</a>{% endif %}
        </div>
      </div>
    </div>
    {% endif %}
    {% endfor %}
  </div>
  <div style="margin-top:1.5rem;">
    <a class="btn-secondary" href="/series/horizon/">Full series overview →</a>
  </div>
</section>
{% endif %}

<!-- WHAT'S COMING -->
<section class="section-wide">
  <div class="section-label">What's coming</div>
  <h2>Five more series in development.</h2>
  <p class="prose" style="margin-top:.8rem;">Each series is structurally frozen before the first article is written. Architecture first, prose second — the same standard applied to Horizon.</p>
  <ul class="art-coming-list">
    <li>
      <a href="/series/frontier/" class="art-coming-name">Frontier</a>
      <span class="art-coming-desc">Graduation, Not Rejection · Technology services &amp; GCCs</span>
      <span class="series-status coming" style="font-size:.55rem;"><span class="series-dot"></span>To write</span>
    </li>
    <li>
      <a href="/series/compass/" class="art-coming-name">Compass</a>
      <span class="art-coming-desc">Why Organisations Lose Their Direction · Strategy &amp; customer centricity</span>
      <span class="series-status ideation" style="font-size:.55rem;"><span class="series-dot"></span>Ideation</span>
    </li>
    <li>
      <span class="art-coming-name">The Trust Equation</span>
      <span class="art-coming-desc">Security is a trust problem · Security leadership &amp; boards</span>
      <span class="series-status ideation" style="font-size:.55rem;"><span class="series-dot"></span>Ideation</span>
    </li>
    <li>
      <span class="art-coming-name">Leadership OS</span>
      <span class="art-coming-desc">The system underneath execution · Leadership systems</span>
      <span class="series-status coming" style="font-size:.55rem;"><span class="series-dot"></span>Pipeline</span>
    </li>
    <li>
      <span class="art-coming-name">The Moving Target</span>
      <span class="art-coming-desc">Network security as technology strategy</span>
      <span class="series-status coming" style="font-size:.55rem;"><span class="series-dot"></span>Pipeline</span>
    </li>
  </ul>
</section>

<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The principle</div>
    <p class="pull-quote">Each series is a single argument. <em>The articles are the proof, not the product.</em></p>
  </div>
</div>
