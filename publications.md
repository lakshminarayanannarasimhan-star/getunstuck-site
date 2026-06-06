---
layout: default
title: Publications
permalink: /publications/
description: "Articles and writing on leadership, strategy, and the gap between execution and indispensability."
---

<section class="hero">
  <div class="eyebrow reveal d1">Publications</div>
  <h1 class="hero-title reveal d2">Writing worth reading slowly.</h1>
  <p class="hero-sub reveal d3">Articles on leadership systems, strategy, and the thinking that separates execution from indispensability. Published across LinkedIn and long-form platforms.</p>
</section>

<div class="section-accent">
  <div class="bleed-inner">
    <div class="section-label">Two active series</div>
    <div class="pillar-strip">
      <a class="pillar" href="/publications/articles/#los">
        <div class="pillar-num">Series A</div>
        <div class="pillar-name">Leadership Operating System</div>
        <div class="pillar-desc">How leaders build systems, not just habits — four articles</div>
      </a>
      <a class="pillar" href="/publications/articles/#beyond-execution">
        <div class="pillar-num">Series B</div>
        <div class="pillar-name">Beyond Execution</div>
        <div class="pillar-desc">From execution to indispensability — the full arc</div>
      </a>
    </div>
  </div>
</div>

<section class="section-wide">
  <div class="section-label">All writing</div>
  <h2>Articles</h2>
  <div class="card-grid" style="margin-top:2rem;">
    {% for post in site.posts %}
    <div class="card">
      <div class="num">{{ post.date | date: "%d %b %Y" }} {% if post.series %} · {{ post.series }}{% endif %}</div>
      <h3 style="margin-top:.3rem;font-size:1.15rem;">
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a>
      </h3>
      <p style="font-size:.92rem;color:var(--muted);margin-top:.5rem;">{{ post.excerpt | strip_html | truncate: 110 }}</p>
      <a class="card-link" href="{{ post.url }}">Read</a>
    </div>
    {% endfor %}
    {% for article in site.articles %}
    <div class="card">
      <div class="num">{{ article.date | date: "%d %b %Y" }} {% if article.series %} · {{ article.series }}{% endif %}</div>
      <h3 style="margin-top:.3rem;font-size:1.15rem;">
        <a href="{{ article.url }}" style="text-decoration:none;color:inherit;">{{ article.title }}</a>
      </h3>
      <p style="font-size:.92rem;color:var(--muted);margin-top:.5rem;">{{ article.excerpt | strip_html | truncate: 110 }}</p>
      <a class="card-link" href="{{ article.url }}">Read</a>
    </div>
    {% endfor %}
  </div>
</section>

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
