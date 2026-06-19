---
layout: default
title: Home
permalink: /
description: "Leadership practitioner, author, and writer. 25 years building systems, teams, and strategy. GET UNSTUCK."
---

<!-- ═══════════════════════
     NEW STRIP
═══════════════════════ -->
{% assign latest = site.posts | where: "status", "published" | sort: "date" | last %}
{% if latest %}
<a class="hp-new-strip" href="{{ latest.url }}">
  <span class="hp-new-badge">New</span>
  {% if latest.series %}<span class="hp-new-series">{{ latest.series }} · {{ latest.article_code }}</span><span class="hp-new-sep">·</span>{% endif %}
  <span class="hp-new-title">{{ latest.title }}</span>
  <span class="hp-new-arrow">Read →</span>
</a>
{% endif %}

<!-- ═══════════════════════
     HERO
═══════════════════════ -->
<section class="hp-hero">
  <div class="hp-hero-inner">

    <div class="hp-hero-left">
      <div class="eyebrow reveal d1" style="color:rgba(255,255,255,.45);">A practitioner library for leaders. No email gate.</div>
      <h1 class="hp-hero-title reveal d2">25 years of building what others theorise about.</h1>
      <p class="hp-hero-sub reveal d3">Most leadership writing is written by people who observe leaders from the outside. This is not that. 25 years of building organisations from the inside — carrying strategy, developing people, making decisions that had real consequences for real careers. Not studied. Not consulted. Carried. Everything on this site is drawn from what that work actually taught.</p>
      <div class="area-tags reveal d4" style="margin-top:1.4rem;">
        <span class="area-tag" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.65);">Technology Services</span>
        <span class="area-tag" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.65);">Leadership Systems</span>
        <span class="area-tag" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);color:rgba(255,255,255,.65);">Security Strategy</span>
      </div>
      <div class="hp-hero-stats reveal d4">
        <div class="hp-hero-stat"><span class="hp-hero-stat-num">25+</span><span class="hp-hero-stat-label">Years</span></div>
        <div class="hp-hero-stat-div"></div>
        <div class="hp-hero-stat"><span class="hp-hero-stat-num">600+</span><span class="hp-hero-stat-label">Engineers Led</span></div>
        <div class="hp-hero-stat-div"></div>
        <div class="hp-hero-stat"><span class="hp-hero-stat-num">$150M+</span><span class="hp-hero-stat-label">Revenue</span></div>
      </div>
    </div>

    <div class="hp-hero-right reveal d3">
      <div class="hp-toc">
        <div class="hp-toc-label">Choose your path</div>

        <a class="hp-path-dark" href="/articles/">
          <div class="hp-path-dark-label">Read</div>
          <p class="hp-path-dark-desc">Articles built from first principles. Each series is a single argument delivered across multiple pieces — not a list of topics.</p>
          <div class="hp-path-dark-foot">Executives · Managers · Technology leaders <span class="hp-path-dark-arrow">→</span></div>
        </a>

        <a class="hp-path-dark" href="/books/">
          <div class="hp-path-dark-label">Think</div>
          <p class="hp-path-dark-desc">Books that codify ideas into lasting models. One shift per book — no filler, no padding.</p>
          <div class="hp-path-dark-foot">Leaders building mental models <span class="hp-path-dark-arrow">→</span></div>
        </a>

        <a class="hp-path-dark" href="/los/">
          <div class="hp-path-dark-label">Practice</div>
          <p class="hp-path-dark-desc">The LOS and its drills. Capability only installed when it performs, sustains, transfers, and survives absence.</p>
          <div class="hp-path-dark-foot">Leaders developing capability <span class="hp-path-dark-arrow">→</span></div>
        </a>

      </div>
    </div>

  </div>
</section>

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
     BOOKS & DRILLS
═══════════════════════ -->
<section class="section-wide" id="books">
  <div class="section-label">Books &amp; Drills</div>
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
      </div>

      <div class="hp-pipeline-note">
        <div style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--primary);margin-bottom:.4rem;">Drills <span class="series-status live" style="font-size:.5rem;padding:.12rem .4rem;vertical-align:middle;"><span class="series-dot"></span>Open</span></div>
        <p style="font-size:.82rem;color:var(--muted);line-height:1.6;">Every drill comes from a real situation — not a textbook. No price. No gate. No email. The practice circulates freely — always has, always will.</p>
        <div class="area-tags" style="margin-top:.7rem;margin-bottom:.9rem;">
          <span class="area-tag">Daily drills</span>
          <span class="area-tag">Weekly review</span>
          <span class="area-tag">No gate</span>
        </div>
        <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
          <a class="btn-secondary" href="/drills/">The Drills</a>
          <a class="btn-secondary" href="/workbook/">The Workbook</a>
        </div>
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
        <a class="btn-primary" href="/articles/">All articles →</a>
      </div>
      <div class="hp-pubs-series">
        <a class="hp-pub-row" href="/horizon/">
          <div class="hp-pub-id">Horizon</div>
          <div>
            <div class="hp-pub-title">From Compression to Premium</div>
            <div class="hp-pub-meta">6 episodes · Technology services strategy</div>
          </div>
          <span class="series-status in-progress" style="font-size:.55rem;padding:.15rem .45rem;flex-shrink:0;"><span class="series-dot"></span>In progress</span>
        </a>
        <div class="hp-pubs-more">
          <span>5 more series in development</span>
          <a href="/articles/">See all →</a>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- THROUGH-LINE -->
<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The through-line</div>
    <p class="pull-quote">Tools change. <em>Systems endure.</em> Every book, article, and engagement is built on that one idea.</p>
  </div>
</div>
