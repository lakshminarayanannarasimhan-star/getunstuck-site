---
layout: default
title: Home
permalink: /
description: "Leadership practitioner, author, and writer. 25 years building systems, teams, and strategy. GET UNSTUCK."
---

<!-- ═══════════════════════
     HERO
═══════════════════════ -->
<section class="hp-hero">
  <div class="hp-hero-inner">

    <div class="hp-hero-left">
      <div class="eyebrow reveal d1" style="color:rgba(255,255,255,.45);">Leadership Operating Systems · Technology Strategy · Author</div>
      <h1 class="hp-hero-title reveal d2">25 years of building what others theorise about.</h1>
      <p class="hp-hero-sub reveal d3">Most leadership writing is written by people who observe leaders from the outside. This is not that. 25 years of building organisations from the inside — carrying strategy, developing people, making decisions that had real consequences for real careers. Not studied. Not consulted. Carried. Everything on this site is drawn from what that work actually taught.</p>
      <div class="area-tags reveal d4" style="margin-top:1.4rem;">
        <span class="area-tag" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.65);">Technology Services</span>
        <span class="area-tag" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.65);">Leadership Systems</span>
        <span class="area-tag" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.65);">Security Strategy</span>
      </div>
    </div>

    <div class="hp-hero-right reveal d3">
      <div class="hp-toc">
        <div class="hp-toc-label">On this platform</div>
        <a class="hp-toc-item" href="#los">
          <span class="hp-toc-num">01</span>
          <div>
            <div class="hp-toc-name">The Leadership Operating System</div>
            <div class="hp-toc-meta">Constitution v1.0 · 34 capabilities · 6 domains</div>
          </div>
          <span class="series-status live" style="font-size:.55rem;padding:.15rem .45rem;margin-left:auto;flex-shrink:0;"><span class="series-dot"></span>Live</span>
        </a>
        <a class="hp-toc-item" href="#books">
          <span class="hp-toc-num">02</span>
          <div>
            <div class="hp-toc-name">Books &amp; Workbooks</div>
            <div class="hp-toc-meta">The Invisible Backlog · Drills · Workbook · No gate</div>
          </div>
          <span class="series-status in-progress" style="font-size:.55rem;padding:.15rem .45rem;margin-left:auto;flex-shrink:0;"><span class="series-dot"></span>Writing</span>
        </a>
        <a class="hp-toc-item" href="#publications">
          <span class="hp-toc-num">03</span>
          <div>
            <div class="hp-toc-name">Publications</div>
            <div class="hp-toc-meta">Magazines · This site · Leadership · Technology · Security</div>
          </div>
          <span class="series-status in-progress" style="font-size:.55rem;padding:.15rem .45rem;margin-left:auto;flex-shrink:0;"><span class="series-dot"></span>Active</span>
        </a>
        <a class="hp-toc-item" href="/mentees/">
          <span class="hp-toc-num">04</span>
          <div>
            <div class="hp-toc-name">Coaching</div>
            <div class="hp-toc-meta">Long-term · Structured · Any experience level</div>
          </div>
          <span class="series-status live" style="font-size:.55rem;padding:.15rem .45rem;margin-left:auto;flex-shrink:0;"><span class="series-dot"></span>Open</span>
        </a>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════
     FEATURED ARTICLE
═══════════════════════ -->
{% assign featured = site.posts.first %}
{% if featured %}
<section class="section-wide" style="padding-top:2.5rem;padding-bottom:2.5rem;" id="featured">
  <div class="section-label">Featured article</div>
  <div class="hp-featured-card">
    <div class="hp-fa-left">
      <div class="hp-fa-meta">
        <span class="series-status live"><span class="series-dot"></span>Published</span>
        <span class="hp-fa-series">{{ featured.series }}</span>
      </div>
      <h2 class="hp-fa-title">{{ featured.title }}</h2>
      <p class="hp-fa-excerpt">{% if featured.tldr %}{{ featured.tldr | truncate: 200 }}{% else %}{{ featured.excerpt | strip_html | truncate: 200 }}{% endif %}</p>
      <div class="hp-fa-footer">
        <a class="btn-primary" href="{{ featured.url }}">Read the article</a>
        <span class="hp-fa-detail">{{ featured.date | date: "%d %b %Y" }}</span>
      </div>
    </div>
    <div class="hp-fa-right">
      {% if featured.tldr %}
      <div class="hp-fa-pull">
        <div class="hp-fa-pull-label">Key insight</div>
        <p class="hp-fa-pull-text">{{ featured.tldr }}</p>
      </div>
      {% endif %}
      <div class="hp-fa-tags">
        {% if featured.series %}<span class="area-tag">{{ featured.series }}</span>{% endif %}
        {% if featured.reading_time %}<span class="area-tag">{{ featured.reading_time }} min read</span>{% endif %}
      </div>
    </div>
  </div>
</section>
{% endif %}

<!-- ═══════════════════════
     THE LOS
═══════════════════════ -->
<div class="section-ink" id="los" style="padding-top:clamp(2.5rem,5vw,4.5rem);padding-bottom:clamp(2.5rem,5vw,4.5rem);">
  <div class="bleed-inner">
    <div class="hp-los-grid">

      <div class="hp-los-left">
        <div class="section-label">The Leadership Operating System</div>
        <h2 style="color:#fff;font-size:clamp(1.8rem,3vw,2.6rem);margin-bottom:1rem;">Leadership is stewardship.<br>Not authority.</h2>
        <p style="color:rgba(255,255,255,.65);font-size:.95rem;line-height:1.75;max-width:44ch;margin-bottom:1.2rem;">A lifelong practice system. Not a course. Not a competency catalogue. Capability is counted as installed only when it performs, sustains, transfers, and survives absence.</p>
        <p style="color:rgba(255,255,255,.5);font-size:.85rem;font-style:italic;line-height:1.65;max-width:40ch;margin-bottom:1.8rem;padding-left:.9rem;border-left:2px solid var(--primary);">Constitution v1.0 is frozen. The curriculum is being built from evidence — not invented at the desk.</p>
        <div style="display:flex;gap:1.5rem;margin-bottom:1.8rem;">
          <div style="text-align:center;">
            <div class="stat-num-ink">34</div>
            <div class="stat-label-ink">Capabilities</div>
          </div>
          <div style="text-align:center;">
            <div class="stat-num-ink">6</div>
            <div class="stat-label-ink">Domains</div>
          </div>
          <div style="text-align:center;">
            <div class="stat-num-ink">8</div>
            <div class="stat-label-ink">Belts</div>
          </div>
          <div style="text-align:center;">
            <div class="stat-num-ink">4</div>
            <div class="stat-label-ink">Dojos</div>
          </div>
        </div>
        <a class="btn-primary" href="/los/" style="display:inline-block;">Explore the LOS →</a>
      </div>

      <div class="hp-los-right">
        <div class="hp-domains-list">
          <div class="hp-domain-row" style="--dd:#9E5A34;">
            <span class="hp-dl">A</span>
            <div><div class="hp-dn">Self Governance</div><div class="hp-dq">Can I be trusted with myself?</div></div>
          </div>
          <div class="hp-domain-row" style="--dd:#1565C0;">
            <span class="hp-dl">B</span>
            <div><div class="hp-dn">Human Leadership</div><div class="hp-dq">Do people feel safe placing important things in my hands?</div></div>
          </div>
          <div class="hp-domain-row" style="--dd:#2E7D32;">
            <span class="hp-dl">C</span>
            <div><div class="hp-dn">Collective Leadership</div><div class="hp-dq">Is success dependent on heroics or design?</div></div>
          </div>
          <div class="hp-domain-row" style="--dd:#7B1FA2;">
            <span class="hp-dl">D</span>
            <div><div class="hp-dn">Organisational Leadership</div><div class="hp-dq">What reality are we actually facing?</div></div>
          </div>
          <div class="hp-domain-row" style="--dd:#C62828;">
            <span class="hp-dl">E</span>
            <div><div class="hp-dn">Stewardship</div><div class="hp-dq">Will this survive me?</div></div>
          </div>
          <div class="hp-domain-row" style="--dd:#9a7808;">
            <span class="hp-dl">F</span>
            <div><div class="hp-dn">Legacy &amp; Wisdom</div><div class="hp-dq">What is worth doing?</div></div>
          </div>
        </div>
        <div style="margin-top:1.2rem;padding:1rem 1.2rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:var(--radius-md);">
          <div style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--primary);margin-bottom:.4rem;">Defining principle</div>
          <p style="font-family:'Playfair Display',serif;font-size:.95rem;font-style:italic;color:rgba(255,255,255,.8);line-height:1.5;">Leadership is the progressive expansion of stewardship.</p>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════════════════
     BOOKS
═══════════════════════ -->
<section class="section-wide" id="books">
  <div class="section-label">Books</div>
  <h2>Built incrementally. Each book installs one shift.</h2>

  <div class="hp-books-grid">

    <div class="hp-book-lead">
      <div class="hp-book-badge">
        <span class="series-status in-progress"><span class="series-dot"></span>Writing Part 2</span>
        <span style="font-family:'DM Mono',monospace;font-size:.62rem;color:var(--faint);letter-spacing:.06em;">Handbook #1</span>
      </div>
      <h3 class="hp-book-title">The Invisible Backlog</h3>
      <p class="hp-book-sub">GET UNSTUCK Leadership Handbooks</p>
      <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-top:.8rem;">Every leader carries a backlog of deferred decisions, unexamined patterns, and inherited commitments. This book names the system, installs the discipline, and closes the loop. Part 1 frozen at 7 chapters. Part 2 in progress.</p>
      <div class="hp-book-status">
        <div class="hp-book-stat"><span>7</span> chapters frozen</div>
        <div class="hp-book-stat"><span>~120</span> pages</div>
        <div class="hp-book-stat"><span>14</span> chapters planned</div>
      </div>
      <div class="hp-book-progress">
        <div class="progress-label"><span>Manuscript progress</span><span>Part 1 of 4 complete</span></div>
        <div class="progress-bar"><div class="progress" style="width:28%"></div></div>
      </div>
      <div style="margin-top:1.4rem;display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;">
        <a class="btn-primary" href="/books/">Browse the Library</a>
        <a class="btn-secondary" href="/workbook/">Workbook — Open</a>
      </div>
    </div>

    <div class="hp-book-pipeline">
      <div class="hp-pipeline-label">In development</div>

      <div class="hp-pipeline-series">
        <div class="hp-ps-header">
          <span class="hp-ps-name">GET UNSTUCK Leadership Handbooks</span>
          <span style="font-family:'DM Mono',monospace;font-size:.6rem;color:var(--faint);">6 volumes · Self → Position → Strategy → Team → Organisation → Ecosystem</span>
        </div>
        <div class="hp-ps-track">
          <div class="hp-ps-node active" title="#1 The Invisible Backlog">#1</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#2 Position">#2</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#3 Strategy">#3</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#4 Team">#4</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#5 Organisation">#5</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#6 Ecosystem">#6</div>
        </div>
        <div style="height:1px;background:var(--border);margin:1.2rem 0;"></div>
        <div class="hp-ps-header">
          <span class="hp-ps-name">The Indispensable Series</span>
          <span style="font-family:'DM Mono',monospace;font-size:.6rem;color:var(--faint);">5 volumes · After the Handbooks complete</span>
        </div>
        <div class="hp-ps-track">
          <div class="hp-ps-node" title="#1">#1</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#2">#2</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#3">#3</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#4">#4</div>
          <div class="hp-ps-line"></div>
          <div class="hp-ps-node" title="#5">#5</div>
        </div>
      </div>

      <div class="hp-pipeline-note">
        <div style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--primary);margin-bottom:.4rem;">Practice materials</div>
        <p style="font-size:.82rem;color:var(--muted);line-height:1.6;">Every book comes with drills and a workbook. No price. No gate. No email. The practice circulates freely — always has, always will.</p>
        <a class="card-link" href="/drills/">The Drills</a>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════
     PUBLICATIONS
═══════════════════════ -->
<div class="section-ink" id="publications" style="padding-top:clamp(2.5rem,5vw,4.5rem);padding-bottom:clamp(2.5rem,5vw,4.5rem);">
  <div class="bleed-inner">
    <div class="section-label">Publications</div>
    <div class="hp-pubs-grid">
      <div>
        <h2 style="color:#fff;font-size:clamp(1.6rem,2.8vw,2.2rem);margin-bottom:.8rem;">Writing worth reading slowly.</h2>
        <p style="color:rgba(255,255,255,.55);font-size:.9rem;line-height:1.7;max-width:40ch;margin-bottom:1.4rem;">Six series across leadership systems, technology strategy, and security. Each series is a single argument — not a list of topics.</p>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.6rem;">
          <span style="font-family:'DM Mono',monospace;font-size:.65rem;padding:.3rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:99px;color:rgba(255,255,255,.88);">Leadership</span>
          <span style="font-family:'DM Mono',monospace;font-size:.65rem;padding:.3rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:99px;color:rgba(255,255,255,.88);">Technology Strategy</span>
          <span style="font-family:'DM Mono',monospace;font-size:.65rem;padding:.3rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:99px;color:rgba(255,255,255,.88);">Technology Services</span>
          <span style="font-family:'DM Mono',monospace;font-size:.65rem;padding:.3rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:99px;color:rgba(255,255,255,.88);">Cybersecurity</span>
          <span style="font-family:'DM Mono',monospace;font-size:.65rem;padding:.3rem .7rem;border:1px solid rgba(255,255,255,.35);border-radius:99px;color:rgba(255,255,255,.88);">Management</span>
        </div>
        <a class="btn-primary" href="/publications/">All publications →</a>
      </div>
      <div class="hp-pubs-series">
        <div class="hp-pub-row">
          <div class="hp-pub-id" style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;">Horizon</div>
          <div>
            <div class="hp-pub-title">From Compression to Premium</div>
            <div class="hp-pub-meta">6 episodes · Technology services strategy</div>
          </div>
          <span class="series-status in-progress" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>In progress</span>
        </div>
        <div class="hp-pub-row">
          <div class="hp-pub-id" style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;">Frontier</div>
          <div>
            <div class="hp-pub-title">Graduation, Not Rejection</div>
            <div class="hp-pub-meta">4 parts · Technology services &amp; GCCs</div>
          </div>
          <span class="series-status coming" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>To write</span>
        </div>
        <div class="hp-pub-row">
          <div class="hp-pub-id" style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;">Compass</div>
          <div>
            <div class="hp-pub-title">Why Organisations Lose Their Direction</div>
            <div class="hp-pub-meta">9 episodes · Strategy &amp; customer centricity</div>
          </div>
          <span class="series-status ideation" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>Ideation</span>
        </div>
        <div class="hp-pub-row">
          <div class="hp-pub-id">D</div>
          <div>
            <div class="hp-pub-title">The Trust Equation</div>
            <div class="hp-pub-meta">Security as a trust problem · Ideation</div>
          </div>
          <span class="series-status ideation" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>Ideation</span>
        </div>
        <div class="hp-pub-row">
          <div class="hp-pub-id">A</div>
          <div>
            <div class="hp-pub-title">Leadership Operating System</div>
            <div class="hp-pub-meta">4 articles · Leadership systems</div>
          </div>
          <span class="series-status coming" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>In pipeline</span>
        </div>
        <div class="hp-pub-row">
          <div class="hp-pub-id">C</div>
          <div>
            <div class="hp-pub-title">The Moving Target</div>
            <div class="hp-pub-meta">7 articles · Network security as strategy</div>
          </div>
          <span class="series-status coming" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>In pipeline</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════
     CASE STUDIES & DRILLS
═══════════════════════ -->
<section class="section-wide" id="practice">
  <div class="section-label">Case Studies &amp; Drills</div>
  <h2>Drawn from 25 years of practice.</h2>
  <div class="hp-practice-grid">

    <div class="hp-practice-card">
      <div class="hp-pc-icon">◈</div>
      <div class="hp-pc-label">
        Drills
        <span class="series-status live" style="font-size:.55rem;padding:.15rem .45rem;"><span class="series-dot"></span>Open</span>
      </div>
      <h3>The practice is the gift.</h3>
      <p>Every drill in the workbook comes from a real situation — not a textbook. Daily and weekly practice formats designed to install capability, not fill time. No price. No gate. No email required.</p>
      <div class="area-tags" style="margin-top:.8rem;">
        <span class="area-tag">Daily drills</span>
        <span class="area-tag">Weekly review</span>
        <span class="area-tag">No gate</span>
      </div>
      <div style="display:flex;gap:.6rem;margin-top:1.2rem;flex-wrap:wrap;">
        <a class="btn-secondary" href="/drills/">The Drills</a>
        <a class="btn-secondary" href="/workbook/">The Workbook</a>
      </div>
    </div>

    <div class="hp-practice-card hp-practice-cred">
      <div class="hp-pc-label" style="margin-bottom:1rem;">Built in the field</div>
      <h3>Not theorised. Lived.</h3>
      <p style="font-size:.88rem;color:var(--muted);line-height:1.7;">Everything here is drawn from 25+ years of hands-on leadership inside deep technology engagements. Battle-tested in real organisations, with real stakes.</p>
      <div class="stat-strip" style="margin-top:1.2rem;">
        <div class="stat">
          <div class="stat-num">25+</div>
          <div class="stat-label">Years</div>
        </div>
        <div class="stat">
          <div class="stat-num">600+</div>
          <div class="stat-label">Engineers Led</div>
        </div>
        <div class="stat">
          <div class="stat-num">$150M+</div>
          <div class="stat-label">Revenue</div>
        </div>
      </div>
      <a class="card-link" href="/about/">The full story</a>
    </div>

  </div>
</section>

<!-- THROUGH-LINE -->
<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The through-line</div>
    <p class="pull-quote">Tools change. <em>Systems endure.</em> Every book, article, and engagement is built on that one idea.</p>
  </div>
</div>
