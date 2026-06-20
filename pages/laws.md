---
layout: default
title: Laws
permalink: /laws/
description: "A growing library of compressed insights — recurring patterns observed in leadership, strategy, systems, growth, and human organisations."
---

<section class="hz-hero">
  <div class="hz-hero-inner">

    <div class="hz-hero-left">
      <div class="eyebrow reveal d1" style="color:rgba(255,255,255,.45);">Laws · A Library of Compressed Insights</div>
      <h1 class="hz-hero-title reveal d2">The map is useful. The laws explain why the terrain looks the way it does.</h1>
      <p class="hz-hero-sub reveal d3">Most articles are forgotten. Most frameworks last only as long as the presentation that introduced them. What remains are the observations that continue to hold true across situations, industries, technologies, and time.</p>
      <div class="hz-hero-meta reveal d4">
        <span class="hz-meta-item">12 laws planned</span>
        <span class="hz-meta-sep">·</span>
        <span class="hz-meta-item">{% assign law_count = site.laws | size %}{{ law_count }} published</span>
        <span class="hz-meta-sep">·</span>
        <span class="hz-meta-item">Growing</span>
      </div>
    </div>

    <div class="hz-hero-right reveal d3">
      <div class="hz-forces">
        <div class="hz-forces-label">Laws are discovered, not invented</div>
        <div class="hz-force">
          <div class="hz-force-name">A law is a compressed insight.</div>
          <div class="hz-force-desc">An idea reduced to its essential form — what remains after the specific examples, technologies, and circumstances are removed.</div>
        </div>
        <div class="hz-force-sep">↓</div>
        <div class="hz-force">
          <div class="hz-force-name">The goal is observation, not agreement.</div>
          <div class="hz-force-desc">A useful law should help you see something that was previously invisible — in a strategy, a system, a decision, or a pattern of behaviour.</div>
        </div>
        <div class="hz-forces-conclusion">Use these when evaluating strategy, diagnosing problems, making decisions, or trying to understand why a system behaves the way it does.</div>
      </div>
    </div>

  </div>
</section>

<!-- WHAT YOU'LL FIND HERE -->
<section class="section-wide">
  <div class="section-label">What you'll find here</div>
  <div class="laws-pillars">
    <div class="laws-pillar">
      <div class="laws-pillar-num">01</div>
      <strong>Strategy</strong>
      <p>How value moves. How scarcity creates premium. How advantage is created and lost.</p>
    </div>
    <div class="laws-pillar">
      <div class="laws-pillar-num">02</div>
      <strong>Systems</strong>
      <p>How constraints shape outcomes. How removal of one constraint reveals the next.</p>
    </div>
    <div class="laws-pillar">
      <div class="laws-pillar-num">03</div>
      <strong>Leadership</strong>
      <p>How people and organisations behave. How trust, obligation, and accountability work.</p>
    </div>
    <div class="laws-pillar">
      <div class="laws-pillar-num">04</div>
      <strong>Growth</strong>
      <p>How capabilities diffuse. How scale undermines the scarcity that created it.</p>
    </div>
  </div>
</section>

<!-- WHAT A LAW IS -->
<div class="section-ink">
  <div class="bleed-inner">
    <div class="hz-thesis-grid">
      <div>
        <div class="section-label">What a law is</div>
        <p class="pull-quote">A law is a compressed insight. <em>An idea reduced to its essential form.</em></p>
        <p style="color:rgba(255,255,255,.55);font-size:.92rem;line-height:1.7;margin-top:1rem;">Laws are discovered, not invented. They describe patterns that already exist — in systems, markets, organisations, and human behaviour. The law names what was already happening before anyone noticed.</p>
      </div>
      <div class="hz-thesis-right">
        <div class="hz-thesis-pair">
          <div class="hz-tp-label">Articles</div>
          <div class="hz-tp-items">Explore a single problem in depth</div>
          <div class="hz-tp-earns">Becomes an example over time</div>
        </div>
        <div class="hz-tp-crossing">Becomes</div>
        <div class="hz-thesis-pair hz-thesis-pair-exp">
          <div class="hz-tp-label">Laws</div>
          <div class="hz-tp-items">Capture the pattern that remained</div>
          <div class="hz-tp-earns">Holds across technologies, industries, time</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- THE LAWS -->
{% assign all_laws = site.laws | sort: "law_number" %}
<section class="section-wide">
  <div class="section-label">The laws</div>
  {% if all_laws.size > 0 %}
  <h2>{{ all_laws.size }} of 12 laws published.</h2>
  {% else %}
  <h2>12 laws. The library is being built.</h2>
  {% endif %}
  <div class="laws-grid" style="margin-top:1.8rem;">

    {% if all_laws.size > 0 %}
      {% for law in all_laws %}
      <a class="law-card" href="{{ law.url }}">
        <div class="law-card-num">Law #{{ law.law_number }}</div>
        {% if law.law_name %}<div class="law-card-name">{{ law.law_name }}</div>{% endif %}
        <div class="law-card-statement">{{ law.description }}</div>
        {% if law.series %}
        <div class="law-card-origin">
          {% if law.series.first %}{{ law.series | join: " · " }}{% else %}{{ law.series }}{% endif %}
        </div>
        {% endif %}
      </a>
      {% endfor %}
    {% endif %}

    <!-- Planned laws — shown as coming-soon cards -->
    {% assign published_nums = all_laws | map: "law_number" %}
    {% assign planned = "1,2,3,4,5,6,7,8,9,10,11,12" | split: "," %}
    {% assign planned_names = "The Law of Constraint Migration,The Law of Scarcity Premium,The Law of Value Migration,The Law of Abundance,The Law of Capability Diffusion,The Law of Scale Consumption,The Law of Strategic Position,The Law of Future Constraints,The Law of Constraint Removal,The Reliability Law,The Trust Ceiling,The Law of Compression" | split: "," %}
    {% for num in planned %}
      {% assign n = num | plus: 0 %}
      {% assign already_published = false %}
      {% for law in all_laws %}
        {% if law.law_number == n %}{% assign already_published = true %}{% endif %}
      {% endfor %}
      {% unless already_published %}
      {% assign name_index = forloop.index0 %}
      <div class="law-card law-card--coming">
        <div class="law-card-num">Law #{{ num }}</div>
        <div class="law-card-name">{{ planned_names[name_index] }}</div>
        <div class="law-card-origin" style="margin-top:auto;">
          <span class="series-status coming" style="font-size:.5rem;"><span class="series-dot"></span>Coming</span>
        </div>
      </div>
      {% endunless %}
    {% endfor %}

  </div>
</section>

<!-- HOW TO USE -->
<section class="section-wide">
  <div class="section-label">How to use these laws</div>
  <h2>Not meant to be memorised. Meant to be tested.</h2>
  <div class="cp-vocab-grid" style="margin-top:1.5rem;">
    <div class="cp-vocab-item">
      <div class="cp-vocab-term">When evaluating a strategy</div>
      <div class="cp-vocab-def">Does this violate a known pattern? Does it depend on a pattern reversing?</div>
    </div>
    <div class="cp-vocab-item">
      <div class="cp-vocab-term">When making a decision</div>
      <div class="cp-vocab-def">Which law applies here? What does the pattern predict?</div>
    </div>
    <div class="cp-vocab-item">
      <div class="cp-vocab-term">When diagnosing a problem</div>
      <div class="cp-vocab-def">Which law is being violated? Which pattern is being ignored?</div>
    </div>
    <div class="cp-vocab-item">
      <div class="cp-vocab-term">When understanding a system</div>
      <div class="cp-vocab-def">Why does this system behave the way it does? What is the underlying pattern?</div>
    </div>
  </div>
</section>

<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The long-term goal</div>
    <p class="pull-quote">Articles explore ideas. Drills train them. <em>Laws distil them.</em> Together they form a body of practical thinking — not a methodology, but a collection of patterns observed, tested, and refined over time.</p>
  </div>
</div>
