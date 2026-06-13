---
layout: default
title: Publications
permalink: /publications/
description: "Writing across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces."
---

<section class="hero">
  <div class="eyebrow reveal d1">Publications</div>
  <h1 class="hero-title reveal d2">Writing worth reading slowly.</h1>
  <p class="hero-sub reveal d3">Writing across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces — not a list of topics.</p>
</section>

<!-- SERIES OVERVIEW GRID -->
<section class="section-wide">
  <div class="section-label">Perspective on Tech, Strategy and Leadership</div>
  <div class="series-grid">

    <a class="series-card" href="/horizon/">
      <div class="series-card-top">
        <div class="series-id">Horizon</div>
        <span class="series-status in-progress">
          <span class="series-dot"></span>In progress
        </span>
      </div>
      <h3 class="series-title">From Compression to Premium</h3>
      <p class="series-desc">How technology services firms escape the Compression Zone and earn the Growth Premium. Six episodes on the arc from execution to indispensability — and what it takes to cross.</p>
      <div class="series-meta">6 episodes · Technology services strategy</div>
    </a>

    <a class="series-card" href="#series-d">
      <div class="series-card-top">
        <div class="series-id">The Trust Equation</div>
        <span class="series-status ideation">
          <span class="series-dot"></span>Ideation
        </span>
      </div>
      <h3 class="series-title">The Trust Equation</h3>
      <p class="series-desc">Security is not a technology problem. It is a trust problem — and most organisations are built to miss that distinction.</p>
      <div class="series-meta">Security leadership · Boards · Compliance</div>
    </a>

    <a class="series-card" href="#series-a">
      <div class="series-card-top">
        <div class="series-id">Leadership OS</div>
        <span class="series-status coming">
          <span class="series-dot"></span>In pipeline
        </span>
      </div>
      <h3 class="series-title">Leadership Operating System</h3>
      <p class="series-desc">How leaders build systems, not just habits. Four articles on the operating layer beneath execution.</p>
      <div class="series-meta">4 articles · In pipeline</div>
    </a>

    <a class="series-card" href="#series-c">
      <div class="series-card-top">
        <div class="series-id">The Moving Target</div>
        <span class="series-status coming">
          <span class="series-dot"></span>In pipeline
        </span>
      </div>
      <h3 class="series-title">The Moving Target</h3>
      <p class="series-desc">Network security as technology strategy. Risk is not static — every technology shift redistributes where it concentrates.</p>
      <div class="series-meta">7 articles · In pipeline</div>
    </a>

  </div>
</section>

<!-- HORIZON — PUBLISHED EPISODES -->
{% assign hz_posts = site.posts | where: "series_code", "H" | sort: "series_position" %}
{% if hz_posts.size > 0 %}
<section class="section-wide" id="horizon">
  <div class="series-section-header">
    <div>
      <div class="section-label">Horizon</div>
      <h2>From Compression to Premium.</h2>
      <p class="prose" style="margin-top:.8rem;">How technology services firms escape the Compression Zone and earn the Growth Premium. Six episodes — published as they are ready.</p>
    </div>
    <a class="btn-secondary" href="/horizon/" style="align-self:flex-start;white-space:nowrap;">Series overview →</a>
  </div>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in hz_posts %}
    <div class="card" data-read-url="{{ post.url }}">
      <div class="num">Episode {{ post.series_position }} &nbsp;·&nbsp; {{ post.date | date: "%d %b %Y" }}</div>
      <h3 style="margin-top:.3rem;font-size:1.1rem;">
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a>
      </h3>
      <p style="font-size:.9rem;color:var(--muted);margin-top:.4rem;">{% if post.tldr %}{{ post.tldr | truncate: 140 }}{% else %}{{ post.excerpt | strip_html | truncate: 140 }}{% endif %}</p>
      <a class="card-link" href="{{ post.url }}">Read</a>
    </div>
    {% endfor %}
  </div>
</section>
{% endif %}

<!-- IN DEVELOPMENT -->
<section class="section-wide">
  <div class="section-label">In development</div>
  <h2>Three series in the pipeline.</h2>
  <p class="prose" style="margin-top:.8rem;">Each series is outlined and structurally frozen before the first article is written. Articles appear here as they are completed.</p>
  <div class="series-grid" style="margin-top:2rem;">

    <div class="series-card" id="series-d">
      <div class="series-card-top">
        <div class="series-id">The Trust Equation</div>
        <span class="series-status ideation"><span class="series-dot"></span>Ideation</span>
      </div>
      <h3 class="series-title">Security is a trust problem.</h3>
      <p class="series-desc">Most security programmes are built as if the customer does not exist. This series names the structural problem and gives practitioners the language to make it visible to the people who govern it.</p>
      <div class="series-meta">Security leadership · Boards · Compliance</div>
    </div>

    <div class="series-card" id="series-a">
      <div class="series-card-top">
        <div class="series-id">Leadership OS</div>
        <span class="series-status coming"><span class="series-dot"></span>In pipeline</span>
      </div>
      <h3 class="series-title">The system underneath execution.</h3>
      <p class="series-desc">How leaders build systems, not just habits. Four articles on the operating layer beneath execution — what holds when circumstances change.</p>
      <div class="series-meta">4 articles · Leadership systems</div>
    </div>

    <div class="series-card" id="series-c">
      <div class="series-card-top">
        <div class="series-id">The Moving Target</div>
        <span class="series-status coming"><span class="series-dot"></span>In pipeline</span>
      </div>
      <h3 class="series-title">Security does not sit still.</h3>
      <p class="series-desc">Every technology shift — cloud, API, edge, AI — moves the boundary of who holds risk. Seven articles on network security as technology strategy, not compliance.</p>
      <div class="series-meta">7 articles · Technology strategy</div>
    </div>

  </div>
</section>

<!-- ALL WRITING -->
<section class="section-wide">
  <div class="section-label">All published writing</div>
  <h2>Articles</h2>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in site.posts %}
    <div class="card" data-read-url="{{ post.url }}">
      <div class="num">{{ post.date | date: "%d %b %Y" }}{% if post.series %} · {{ post.series }}{% endif %}</div>
      <h3 style="margin-top:.3rem;font-size:1.1rem;">
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a>
      </h3>
      <p style="font-size:.9rem;color:var(--muted);margin-top:.4rem;">{% if post.tldr %}{{ post.tldr | truncate: 140 }}{% else %}{{ post.excerpt | strip_html | truncate: 140 }}{% endif %}</p>
      <a class="card-link" href="{{ post.url }}">Read</a>
    </div>
    {% endfor %}
  </div>
</section>

<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The principle</div>
    <p class="pull-quote">Each series is a single argument. <em>The articles are the proof, not the product.</em></p>
  </div>
</div>

<!-- LINKEDIN -->
<section class="section-wide">
  <div class="section-label">LinkedIn</div>
  <h2>Thinking in public.</h2>
  <p class="prose" style="margin-top:.8rem;">Short-form thinking on leadership, systems, and the practice of building organisations that hold. Published on a regular cadence — written to be useful, not to perform.</p>
  <div class="hero-actions" style="margin-top:1.5rem;">
    <a class="btn-primary" href="https://www.linkedin.com/in/lakshminarayanann/" target="_blank" rel="noopener">Follow on LinkedIn</a>
  </div>
</section>
