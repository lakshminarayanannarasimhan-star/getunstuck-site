---
layout: default
title: Publications
permalink: /publications/
description: "Four series across leadership systems, technology strategy, and security. Each a single argument delivered across multiple pieces."
---

<section class="hero">
  <div class="eyebrow reveal d1">Publications</div>
  <h1 class="hero-title reveal d2">Writing worth reading slowly.</h1>
  <p class="hero-sub reveal d3">Four series across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces — not a list of topics.</p>
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
      <h3 class="series-title">The Execution Trap</h3>
      <p class="series-desc">How technology services firms escape the race to the bottom and compete on terrain that cannot be commoditised. Six episodes on the arc from execution to indispensability — at the firm level.</p>
      <div class="series-meta">6 episodes · Deeper Insights to gain leverage</div>
    </a>

    <a class="series-card" href="#series-d">
      <div class="series-card-top">
        <div class="series-id">The Trust Equation</div>
        <span class="series-status live">
          <span class="series-dot"></span>Live
        </span>
      </div>
      <h3 class="series-title">The Trust Equation</h3>
      <p class="series-desc">Security is not a technology problem. It is a trust problem — and most organisations are built to miss that distinction.</p>
      <div class="series-meta">Security leadership · Boards · Compliance · D0 published</div>
    </a>

    <a class="series-card" href="#series-a">
      <div class="series-card-top">
        <div class="series-id">Leadership OS</div>
        <span class="series-status in-progress">
          <span class="series-dot"></span>In progress
        </span>
      </div>
      <h3 class="series-title">Leadership Operating System</h3>
      <p class="series-desc">How leaders build systems, not just habits. Four articles on the operating layer beneath execution.</p>
      <div class="series-meta">4 articles · Submitting Jul–Oct 2026</div>
    </a>

    <a class="series-card" href="#series-c">
      <div class="series-card-top">
        <div class="series-id">The Moving Target</div>
        <span class="series-status coming">
          <span class="series-dot"></span>Coming
        </span>
      </div>
      <h3 class="series-title">The Moving Target</h3>
      <p class="series-desc">Network security as technology strategy. Risk is not static — every technology shift redistributes where it concentrates.</p>
      <div class="series-meta">7 articles · Held until A and B close</div>
    </a>

  </div>
</section>

<!-- SERIES D — LIVE -->
<section class="section-wide" id="series-d">
  <div class="series-section-header">
    <div>
      <div class="section-label">The Trust Equation</div>
      <h2>Security is a trust problem.</h2>
      <p class="prose" style="margin-top:.8rem;">Most security programmes are built as if the customer does not exist. They protect systems. What they actually defend is the willingness of a person who trusted you where they could not see. This series names the structural problem — and gives practitioners the language to make it visible to the people who govern it.</p>
    </div>
    <span class="series-status live" style="align-self:flex-start;">
      <span class="series-dot"></span>Live
    </span>
  </div>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in site.posts %}
      {% if post.series contains "Trust Equation" or post.series_code == "D" %}
      <div class="card">
        <div class="num">{{ post.date | date: "%d %b %Y" }}</div>
        <h3 style="margin-top:.3rem;font-size:1.1rem;">
          <a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a>
        </h3>
        <p style="font-size:.9rem;color:var(--muted);margin-top:.4rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        <a class="card-link" href="{{ post.url }}">Read</a>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</section>

<!-- SERIES A -->
<section class="section-wide" id="series-a">
  <div class="series-section-header">
    <div>
      <div class="section-label">Leadership Operating System</div>
      <h2>The system underneath execution.</h2>
      <p class="prose" style="margin-top:.8rem;">Four articles on how leaders build systems — not just habits. Submitting to People Matters, Indian Management, Human Capital Online, The CEO Magazine, and Business World across July to October 2026.</p>
    </div>
    <span class="series-status in-progress" style="align-self:flex-start;">
      <span class="series-dot"></span>In progress
    </span>
  </div>
  <div class="coming" style="margin-top:1.8rem;">
    <div class="label">Submitting Jul–Oct 2026</div>
    <p>Articles will appear here as they are published across the target platforms.</p>
  </div>
</section>

<!-- SERIES C -->
<section class="section-wide" id="series-c">
  <div class="series-section-header">
    <div>
      <div class="section-label">The Moving Target</div>
      <h2>Security does not sit still.</h2>
      <p class="prose" style="margin-top:.8rem;">Seven articles on network security as technology strategy. Every technology shift — cloud, API, edge, AI — does not merely add risk. It moves the boundary of who holds risk and where it concentrates. The series installs a new way of seeing, not a longer checklist.</p>
    </div>
    <span class="series-status coming" style="align-self:flex-start;">
      <span class="series-dot"></span>Coming
    </span>
  </div>
  <div class="coming" style="margin-top:1.8rem;">
    <div class="label">Held until Series A and B close</div>
    <p>Seven articles, outlined and frozen. Content begins after Series A and B publish.</p>
  </div>
</section>

<!-- ALL WRITING -->
<section class="section-wide">
  <div class="section-label">All published writing</div>
  <h2>Articles</h2>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in site.posts %}
    <div class="card">
      <div class="num">{{ post.date | date: "%d %b %Y" }}{% if post.series %} · {{ post.series }}{% endif %}</div>
      <h3 style="margin-top:.3rem;font-size:1.1rem;">
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a>
      </h3>
      <p style="font-size:.9rem;color:var(--muted);margin-top:.4rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
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
  <div class="layout-sidebar">
    <div>
      <div class="section-label">LinkedIn</div>
      <h2>Thinking in public.</h2>
      <div class="prose" style="margin-top:1.2rem;">
        <p>Short-form thinking on leadership, systems, and the practice of building organisations that hold. Published on a regular cadence — written to be useful, not to perform.</p>
      </div>
      <div class="hero-actions" style="margin-top:1.5rem;">
        <a class="btn-primary" href="https://www.linkedin.com/in/lakshminarayanann/" target="_blank" rel="noopener">Follow on LinkedIn</a>
      </div>
    </div>
    <aside>
      <div class="hero-panel">
        <div class="panel-label">Coming</div>
        <p style="font-size:.93rem;color:var(--muted);">A full archive of LinkedIn writing, organised by theme, will live here. Until then, the best place to follow the thinking is LinkedIn directly.</p>
      </div>
    </aside>
  </div>
</section>
