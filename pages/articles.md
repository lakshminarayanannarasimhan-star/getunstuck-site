---
layout: default
title: Articles
permalink: /articles/
description: "Articles across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces — built to install, not just inform."
---

<div class="pub-hero-split">

  <!-- LEFT: Dark panel — three zones -->
  <div class="pub-series-nav pub-manifesto">

    <!-- TOP: Series at a glance -->
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

    <!-- MIDDLE: Manifesto -->
    <div class="pub-panel-mid">
      <div class="pub-series-eyebrow pub-m-a2">The editorial standard</div>
      <p class="pub-manifesto-lead pub-m-a3">Most leadership writing is written to be agreed with.</p>
      <div class="pub-manifesto-principle">
        <span class="pub-m-line pub-m-a4">Anything not questioned is a gateway to mediocrity.</span>
        <span class="pub-m-line pub-m-a5">Anything questioned with curiosity is the way to meritocracy.</span>
        <span class="pub-m-line pub-m-a6">Let us stop expecting that we are always right.</span>
      </div>
      <p class="pub-manifesto-body pub-m-a7">Every article on this platform is stress-tested before it is drafted — not after. The counter-argument comes first. If the thesis cannot survive it, the article does not exist. What you read here has been questioned. It held.</p>
      <p class="pub-manifesto-close pub-m-a8">The Leadership Operating System defines capability as installed only when it performs, sustains, transfers, and survives absence. Reading is not installation.</p>
    </div>

    <!-- BOTTOM: Subscribe -->
    <div class="pub-panel-bot pub-m-a9">
      <div class="pub-series-eyebrow">Follow along</div>
      <p class="pub-panel-bot-desc">Get articles when they publish. No gate. No email required to read the work.</p>
      <a class="pub-detail-link" href="/subscribe/">Subscribe →</a>
    </div>

  </div>

  <!-- RIGHT: Light panel — hero copy + methodology -->
  <div class="pub-info-panel">
    <div class="eyebrow" style="color:var(--muted);">Articles</div>
    <h1 class="pub-info-title">Writing worth reading slowly.</h1>
    <p class="pub-info-sub">Articles across leadership systems, technology strategy, and security. Each series is a single argument delivered across multiple pieces — built to install, not just inform.</p>
    <div class="pub-approach">
      <div class="pub-approach-row">
        <div class="pub-approach-num">01</div>
        <div>
          <div class="pub-approach-name">Perspective</div>
          <div class="pub-approach-desc">Raw knowledge. The argument built from first principles — not commentary on what others have said.</div>
        </div>
      </div>
      <div class="pub-approach-row">
        <div class="pub-approach-num">02</div>
        <div>
          <div class="pub-approach-name">Stress Test</div>
          <div class="pub-approach-desc">Don't believe what you see. The stress test is where the argument proves its strength — or breaks under challenge.</div>
        </div>
      </div>
      <div class="pub-approach-row">
        <div class="pub-approach-num">03</div>
        <div>
          <div class="pub-approach-name">Diagnostic</div>
          <div class="pub-approach-desc">Apply in your context. Questions you can run inside your own organisation to see where you stand.</div>
        </div>
      </div>
      <div class="pub-approach-row">
        <div class="pub-approach-num">04</div>
        <div>
          <div class="pub-approach-name">Drills</div>
          <div class="pub-approach-desc">Installation. A skill practised until it is yours — tough to take away, sticks with you for years.</div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- LIVE NOW: HORIZON EPISODES -->
{% assign hz_posts = site.posts | where: "series_code", "H" | sort: "series_position" %}
{% if hz_posts.size > 0 %}
<section class="section-wide" id="horizon">
  <div class="series-section-header">
    <div>
      <div class="section-label">Horizon · Live now</div>
      <h2>From Compression to Premium.</h2>
      <p class="prose" style="margin-top:.8rem;">How technology services firms escape the Compression Zone and earn the Growth Premium. Six episodes — published as they are ready.</p>
    </div>
    <a class="btn-primary" href="/series/horizon/" style="align-self:flex-start;white-space:nowrap;">Series overview →</a>
  </div>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in hz_posts %}
    {% if post.status == "published" %}
    <div class="card" data-read-url="{{ post.url }}">
      <div class="num">Episode {{ post.series_position }} &nbsp;·&nbsp; {{ post.date | date: "%d %b %Y" }}</div>
      <h3 style="margin-top:.3rem;font-size:1.1rem;">
        <a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a>
      </h3>
      <p style="font-size:.9rem;color:var(--muted);margin-top:.4rem;">{% if post.tldr %}{{ post.tldr | truncate: 140 }}{% else %}{{ post.excerpt | strip_html | truncate: 140 }}{% endif %}</p>
      <a class="card-link" href="{{ post.url }}">Read</a>
    </div>
    {% endif %}
    {% endfor %}
  </div>
</section>
{% endif %}

<!-- ALL SERIES -->
<section class="section-wide">
  <div class="section-label">All series</div>
  <h2>Six arguments. One platform.</h2>
  <p class="prose" style="margin-top:.8rem;">Each series is structurally frozen before the first article is written. Episodes appear as they are completed — no gate, no email required.</p>
  <div class="series-grid" style="margin-top:2rem;">

    <a class="series-card" href="/series/horizon/">
      <div class="series-card-top">
        <div class="series-id">Horizon</div>
        <span class="series-status in-progress"><span class="series-dot"></span>In progress</span>
      </div>
      <h3 class="series-title">From Compression to Premium</h3>
      <p class="series-desc">How technology services firms escape the Compression Zone and earn the Growth Premium. Six episodes on the arc from execution to indispensability.</p>
      <div class="series-meta">6 episodes · Technology services strategy</div>
    </a>

    <a class="series-card" href="/series/frontier/">
      <div class="series-card-top">
        <div class="series-id">Frontier</div>
        <span class="series-status coming"><span class="series-dot"></span>To write</span>
      </div>
      <h3 class="series-title">Graduation, Not Rejection</h3>
      <p class="series-desc">When a client asks you to build a GCC, they are not leaving — they are graduating. Four parts on the reframe, the asset, the trap, and what the relationship becomes after.</p>
      <div class="series-meta">4 parts · Technology services &amp; GCCs</div>
    </a>

    <a class="series-card" href="/series/compass/">
      <div class="series-card-top">
        <div class="series-id">Compass</div>
        <span class="series-status ideation"><span class="series-dot"></span>Ideation</span>
      </div>
      <h3 class="series-title">Why Organisations Lose Their Direction</h3>
      <p class="series-desc">Most organisations measure position and call it direction. The customer is true north. Nine episodes on how the needle drifts — and what it takes to read it true.</p>
      <div class="series-meta">9 episodes · Strategy &amp; customer centricity</div>
    </a>

    <div class="series-card">
      <div class="series-card-top">
        <div class="series-id">The Trust Equation</div>
        <span class="series-status ideation"><span class="series-dot"></span>Ideation</span>
      </div>
      <h3 class="series-title">Security is a trust problem.</h3>
      <p class="series-desc">Most security programmes are built as if the customer does not exist. This series names the structural problem and gives practitioners the language to make it visible to the people who govern it.</p>
      <div class="series-meta">Security leadership · Boards · Compliance</div>
    </div>

    <div class="series-card">
      <div class="series-card-top">
        <div class="series-id">Leadership OS</div>
        <span class="series-status coming"><span class="series-dot"></span>In pipeline</span>
      </div>
      <h3 class="series-title">The system underneath execution.</h3>
      <p class="series-desc">How leaders build systems, not just habits. Four articles on the operating layer beneath execution — what holds when circumstances change.</p>
      <div class="series-meta">4 articles · Leadership systems</div>
    </div>

    <div class="series-card">
      <div class="series-card-top">
        <div class="series-id">The Moving Target</div>
        <span class="series-status coming"><span class="series-dot"></span>In pipeline</span>
      </div>
      <h3 class="series-title">Security does not sit still.</h3>
      <p class="series-desc">Every technology shift redistributes where risk concentrates. Seven articles on network security as technology strategy — not compliance.</p>
      <div class="series-meta">7 articles · Technology strategy</div>
    </div>

  </div>
</section>

<!-- ALL PUBLISHED ARTICLES -->
{% assign all_posts = site.posts | where: "status", "published" | sort: "date" | reverse %}
{% if all_posts.size > 0 %}
<section class="section-wide">
  <div class="section-label">All published articles</div>
  <h2>{{ all_posts.size }} article{% if all_posts.size != 1 %}s{% endif %} published.</h2>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in all_posts %}
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
{% endif %}

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
