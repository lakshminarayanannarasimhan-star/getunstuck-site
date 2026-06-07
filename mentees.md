---
layout: default
title: The People
permalink: /mentees/
description: "People I worked with. In their words — what we did together and how it helped."
---

<section class="hero-lean">
  <div class="hero-split">
    <div class="hero-left">
      <div class="eyebrow reveal d1">The People</div>
      <h1 class="hero-title reveal d2">Careers are systems too.</h1>
      <p class="hero-sub reveal d3">Some of the most important work happens in conversations — not conference rooms. These are people I worked with at different stages of their careers. In their words, not mine.</p>
    </div>
    <div class="hero-right reveal d3">
      <div class="hero-panel">
        <div class="panel-label">A note</div>
        <p style="font-size:.92rem;color:var(--muted);line-height:1.65;">Every person featured here has consented to be included and has seen their entry before it was published. Names, roles, and words are theirs. Nothing has been edited for effect.</p>
      </div>
    </div>
  </div>
</section>

<section class="section-wide">
  <div class="mentee-grid">
    {% assign mentees = site.mentees | sort: "year" | reverse %}
    {% for mentee in mentees %}
    <div class="mentee-card">

      <div class="mentee-header">
        <div class="mentee-photo">
          {% if mentee.photo %}
          <img src="{{ mentee.photo | relative_url }}" alt="{{ mentee.name }}" loading="lazy">
          {% else %}
          <div class="mentee-photo-placeholder">{{ mentee.name | slice: 0 }}</div>
          {% endif %}
        </div>
        <div class="mentee-meta">
          <div class="mentee-name">{{ mentee.name }}</div>
          <div class="mentee-role">{{ mentee.role }}</div>
          <div class="mentee-org">{{ mentee.org }} · {{ mentee.location }}</div>
          <div class="mentee-tags">
            <span class="area-tag">{{ mentee.type }}</span>
            <span class="area-tag">{{ mentee.year }}{% if mentee.duration %} · {{ mentee.duration }}{% endif %}</span>
          </div>
          {% if mentee.linkedin %}
          <a class="mentee-linkedin" href="{{ mentee.linkedin }}" target="_blank" rel="noopener">LinkedIn →</a>
          {% endif %}
        </div>
      </div>

      <div class="mentee-body">
        <div class="mentee-section">
          <div class="mentee-q">What we did together</div>
          <p>{{ mentee.together }}</p>
        </div>
        <div class="mentee-section">
          <div class="mentee-q">How it helped</div>
          <p>{{ mentee.helped }}</p>
        </div>
      </div>

    </div>
    {% endfor %}
  </div>
</section>

<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The belief</div>
    <p class="pull-quote">The mentor learns as much as the mentee. <em>That is how you know it is working.</em></p>
  </div>
</div>
