---
layout: default
title: Articles
permalink: /articles/
description: "Articles across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces — built to install, not just inform."
---

<div class="pub-hero-split pub-hero-split--tall">

  <!-- LEFT: Manifesto — the only thing -->
  <div class="pub-series-nav pub-manifesto pub-manifesto--centered">

    <div class="pub-manifesto-hero-block">
      <div class="pub-series-eyebrow pub-m-a1" style="margin-bottom:1.5rem;">The standard</div>

      <p class="pub-manifesto-lead pub-m-a2">Most leadership writing is written to be agreed with.</p>

      <div class="pub-manifesto-principle pub-manifesto-principle--large">
        <span class="pub-m-line pub-m-a3">Anything not questioned is a gateway to mediocrity.</span>
        <span class="pub-m-line pub-m-a4">Anything questioned with curiosity is the way to meritocracy.</span>
        <span class="pub-m-line pub-m-a5">Let us stop expecting that we are always right.</span>
      </div>

      <p class="pub-manifesto-body pub-m-a6" style="margin-top:1.5rem;">Every article here is stress-tested before it is drafted. The counter-argument comes first. If the thesis cannot survive it, the article does not exist. What you read here has been questioned. It held.</p>

      <a class="btn-primary pub-m-a7" href="#start-here" style="align-self:flex-start;margin-top:1.75rem;">Start reading →</a>
    </div>

  </div>

  <!-- RIGHT: What changes — outcome language -->
  <div class="pub-info-panel pub-info-panel--outcome">
    <div class="eyebrow" style="color:var(--muted);">Articles</div>
    <h1 class="pub-info-title">The gap between knowing and doing is not a knowledge problem.</h1>
    <p class="pub-info-sub">Most leadership writing stops after the argument. This platform is built for the next step — not just knowing what to think, but being able to do something different.</p>

    <div class="pub-outcomes">
      <div class="pub-outcome-row">
        <div class="pub-outcome-after">After the article</div>
        <div class="pub-outcome-get">You have an argument you can use — tested against its strongest counter, not just asserted.</div>
      </div>
      <div class="pub-outcome-row">
        <div class="pub-outcome-after">After the diagnostic</div>
        <div class="pub-outcome-get">You know where your organisation actually stands — not where you hope it does.</div>
      </div>
      <div class="pub-outcome-row">
        <div class="pub-outcome-after">After the drills</div>
        <div class="pub-outcome-get">You can do it. Not just explain it. The capability is installed — it performs, sustains, transfers.</div>
      </div>
    </div>

    <div class="pub-proof-strip">
      <div class="pub-proof-item"><span>4</span> articles published</div>
      <div class="pub-proof-div"></div>
      <div class="pub-proof-item"><span>40+</span> drill exercises</div>
      <div class="pub-proof-div"></div>
      <div class="pub-proof-item"><span>0</span> email gates</div>
    </div>
  </div>

</div>

<!-- START HERE ANCHOR -->
<div id="start-here"></div>

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
