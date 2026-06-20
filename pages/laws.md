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
      <p class="hz-hero-sub reveal d3">Most articles are forgotten. Most frameworks last only as long as the presentation that introduced them. What remains are the observations that continue to hold true across situations, industries, technologies, and time. This is a collection of those observations.</p>
      <div class="hz-hero-meta reveal d4">
        <span class="hz-meta-item">{% assign law_count = site.laws | size %}{{ law_count }} law{% if law_count != 1 %}s{% endif %}</span>
        <span class="hz-meta-sep">·</span>
        <span class="hz-meta-item">Growing</span>
        <span class="hz-meta-sep">·</span>
        <span class="hz-meta-item">getunstuck.in</span>
      </div>
    </div>
  </div>
</section>

<!-- WHAT YOU'LL FIND HERE -->
<section class="section-wide">
  <div class="section-label">What you'll find here</div>
  <div class="laws-pillars">
    <div class="laws-pillar">
      <strong>Strategy</strong>
      <p>How value moves.</p>
    </div>
    <div class="laws-pillar">
      <strong>Systems</strong>
      <p>How constraints shape outcomes.</p>
    </div>
    <div class="laws-pillar">
      <strong>Leadership</strong>
      <p>How people and organisations behave.</p>
    </div>
    <div class="laws-pillar">
      <strong>Growth</strong>
      <p>How advantage is created and lost.</p>
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
        <p style="color:rgba(255,255,255,.55);font-size:.92rem;line-height:1.7;margin-top:1rem;">Laws are discovered, not invented.</p>
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
{% if all_laws.size > 0 %}
<section class="section-wide">
  <div class="section-label">The laws</div>
  <h2>{{ all_laws.size }} law{% if all_laws.size != 1 %}s{% endif %} in the library.</h2>
  <div class="laws-grid" style="margin-top:1.8rem;">
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
  </div>
</section>
{% else %}
<section class="section-wide">
  <div class="section-label">The laws</div>
  <h2>The library is being built.</h2>
  <p class="prose" style="margin-top:.8rem;">Laws emerge from articles. The first laws are being extracted and will appear here as they are formalised. Each article on this site contains at least one law — compressed and named.</p>
</section>
{% endif %}

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
  <div class="section-ink" style="margin-top:2rem;border-radius:var(--radius-md);overflow:hidden;">
    <div class="bleed-inner">
      <div class="section-label">The goal</div>
      <p class="pull-quote">Not agreement. <em>Observation.</em> A useful law should help you see something that was previously invisible.</p>
    </div>
  </div>
</section>

<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The long-term goal</div>
    <p class="pull-quote">Articles explore ideas. Drills train them. <em>Laws distil them.</em></p>
  </div>
</div>
