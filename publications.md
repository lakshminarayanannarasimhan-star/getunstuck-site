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
  <div class="section-label">Four series</div>
  <div class="series-grid">

    <a class="series-card" href="#series-d">
      <div class="series-card-top">
        <div class="series-id">Series D</div>
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
        <div class="series-id">Series A</div>
        <span class="series-status in-progress">
          <span class="series-dot"></span>In progress
        </span>
      </div>
      <h3 class="series-title">Leadership Operating System</h3>
      <p class="series-desc">How leaders build systems, not just habits. Four articles on the operating layer beneath execution.</p>
      <div class="series-meta">4 articles · Submitting Jul–Oct 2026</div>
    </a>

    <a class="series-card" href="#horizon">
      <div class="series-card-top">
        <div class="series-id">Horizon</div>
        <span class="series-status in-progress">
          <span class="series-dot"></span>In progress
        </span>
      </div>
      <h3 class="series-title">Horizon</h3>
      <p class="series-desc">How technology services firms escape the race to the bottom and compete on terrain that cannot be commoditised. Six episodes on the arc from execution to indispensability — at the firm level.</p>
      <div class="series-meta">6 episodes · Business World · The CEO Magazine · Indian Management</div>
    </a>

    <a class="series-card" href="#series-c">
      <div class="series-card-top">
        <div class="series-id">Series C</div>
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
      <div class="section-label">Series D · The Trust Equation</div>
      <h2>Security is a trust problem.</h2>
      <p class="prose" style="margin-top:.8rem;">Most security programmes are built as if the customer does not exist. They protect systems. What they actually defend is the willingness of a person who trusted you where they could not see. This series names the structural problem — and gives practitioners the language to make it visible to the people who govern it.</p>
    </div>
    <span class="series-status live" style="align-self:flex-start;">
      <span class="series-dot"></span>Live
    </span>
  </div>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for post in site.posts %}
      {% if post.series contains "Trust Equation" or post.series contains "Series D" %}
      <div class="card">
        <div class="num">{{ post.date | date: "%d %b %Y" }} · D{{ forloop.index0 }}</div>
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
      <div class="section-label">Series A · Leadership Operating System</div>
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

<!-- SERIES B — HORIZON -->
<section class="section-wide" id="horizon">
  <div class="series-section-header">
    <div>
      <div class="section-label">Horizon</div>
      <h2>How technology services firms escape the race to the bottom.</h2>
      <p class="prose" style="margin-top:.8rem;">Technology services firms were built to help customers execute. The next generation of industry leaders will be built to help customers expand. Execution remains necessary. Expansion becomes decisive. Six episodes tracing the arc from execution to indispensability — at the firm level, in the GenAI and GCC era.</p>
    </div>
    <span class="series-status in-progress" style="align-self:flex-start;">
      <span class="series-dot"></span>In progress
    </span>
  </div>

  <!-- Series thesis -->
  <div style="margin-top:2rem;display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
    <div style="background:var(--surface);padding:1.4rem;">
      <div class="section-label" style="margin-bottom:.5rem;">The Two Forces</div>
      <p style="font-size:.88rem;color:var(--muted);line-height:1.7;"><strong style="color:var(--text);">GenAI</strong> compresses the value of execution. <strong style="color:var(--text);">GCCs</strong> internalise it altogether. Two forces. Same pressure. Together they create the defining strategic question: what remains valuable after execution is no longer the differentiator?</p>
    </div>
    <div style="background:var(--surface);padding:1.4rem;">
      <div class="section-label" style="margin-bottom:.5rem;">The Framework</div>
      <p style="font-size:.88rem;color:var(--muted);line-height:1.7;">Execution earns compensation. Trust earns access. Influence earns a seat. Indispensability earns participation. Ownership earns control. Growth earns the premium. Each level requires a different move — not more of the same effort.</p>
    </div>
  </div>

  <!-- Episode list -->
  <div style="margin-top:2rem;display:flex;flex-direction:column;gap:2px;">

    <div style="display:flex;align-items:stretch;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
      <div style="flex-shrink:0;width:80px;background:var(--primary);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.8rem;gap:.3rem;">
        <span style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.6);">#1</span>
        <span class="series-status live" style="font-size:.5rem;padding:.12rem .35rem;"><span class="series-dot"></span>Frozen</span>
      </div>
      <div style="flex:1;padding:1.1rem 1.3rem;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;color:var(--text);margin-bottom:.3rem;">The Execution Trap</div>
        <div style="font-size:.78rem;color:var(--faint);font-style:italic;margin-bottom:.5rem;">When did execution stop being enough?</div>
        <p style="font-size:.84rem;color:var(--muted);line-height:1.65;">GenAI compresses execution. GCCs internalise it. Two forces, same pressure. This episode names both, introduces the six-step ladder, and identifies The Crossing — the boundary where the rules of earning change.</p>
      </div>
      <div style="flex-shrink:0;padding:1.1rem 1.2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:.4rem;min-width:130px;">
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Business World</span>
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Nov 2026</span>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
      <div style="flex-shrink:0;width:80px;background:var(--primary);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.8rem;gap:.3rem;">
        <span style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.6);">#2</span>
        <span class="series-status live" style="font-size:.5rem;padding:.12rem .35rem;"><span class="series-dot"></span>Frozen</span>
      </div>
      <div style="flex:1;padding:1.1rem 1.3rem;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;color:var(--text);margin-bottom:.3rem;">The Trust Ceiling</div>
        <div style="font-size:.78rem;color:var(--faint);font-style:italic;margin-bottom:.5rem;">Why do trusted firms stop evolving?</div>
        <p style="font-size:.84rem;color:var(--muted);line-height:1.65;">Trust is not the destination. It is the ceiling — the highest reward the Compression Zone offers. Revenue grows, renewals continue, and every strategic conversation happens somewhere else.</p>
      </div>
      <div style="flex-shrink:0;padding:1.1rem 1.2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:.4rem;min-width:130px;">
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Business World</span>
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Dec 2026</span>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
      <div style="flex-shrink:0;width:80px;background:var(--bg-deep);border-right:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.8rem;gap:.3rem;">
        <span style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);">#3</span>
        <span class="series-status in-progress" style="font-size:.5rem;padding:.12rem .35rem;"><span class="series-dot"></span>Rework</span>
      </div>
      <div style="flex:1;padding:1.1rem 1.3rem;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;color:var(--text);margin-bottom:.3rem;">The Indispensability Gap</div>
        <div style="font-size:.78rem;color:var(--faint);font-style:italic;margin-bottom:.5rem;">Would the customer create the same value without you?</div>
        <p style="font-size:.84rem;color:var(--muted);line-height:1.65;">A GCC can replace execution. A GCC cannot replace indispensability. The indispensability test is simple and brutal — and it is the direct answer to both GenAI and GCC pressure.</p>
      </div>
      <div style="flex-shrink:0;padding:1.1rem 1.2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:.4rem;min-width:130px;">
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">The CEO Magazine</span>
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Jan 2027</span>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
      <div style="flex-shrink:0;width:80px;background:var(--bg-deep);border-right:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.8rem;gap:.3rem;">
        <span style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);">#4</span>
        <span class="series-status in-progress" style="font-size:.5rem;padding:.12rem .35rem;"><span class="series-dot"></span>Review</span>
      </div>
      <div style="flex:1;padding:1.1rem 1.3rem;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;color:var(--text);margin-bottom:.3rem;">The Ownership Trap</div>
        <div style="font-size:.78rem;color:var(--faint);font-style:italic;margin-bottom:.5rem;">What does the customer still not trust you with — and why?</div>
        <p style="font-size:.84rem;color:var(--muted);line-height:1.65;">Participation in the economics is not authority over the outcome. Control requires accountability. Participation does not. The firm that misreads a control problem as a participation problem will keep proving what it has already proved.</p>
      </div>
      <div style="flex-shrink:0;padding:1.1rem 1.2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:.4rem;min-width:130px;">
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">The CEO Magazine</span>
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Feb 2027</span>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
      <div style="flex-shrink:0;width:80px;background:var(--bg-deep);border-right:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.8rem;gap:.3rem;">
        <span style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);">#5</span>
        <span class="series-status coming" style="font-size:.5rem;padding:.12rem .35rem;"><span class="series-dot"></span>To write</span>
      </div>
      <div style="flex:1;padding:1.1rem 1.3rem;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;color:var(--text);margin-bottom:.3rem;">The Growth Architecture</div>
        <div style="font-size:.78rem;color:var(--faint);font-style:italic;margin-bottom:.5rem;">How do you become the kind of firm customers cannot imagine replacing?</div>
        <p style="font-size:.84rem;color:var(--muted);line-height:1.65;">Assume GenAI compresses execution. Assume GCCs own it. What kind of firm wins anyway? The GCC is not a threat to this firm — it is a customer, a partner, an amplifier.</p>
      </div>
      <div style="flex-shrink:0;padding:1.1rem 1.2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:.4rem;min-width:130px;">
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Business World</span>
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">Mar 2027</span>
      </div>
    </div>

    <div style="display:flex;align-items:stretch;background:var(--bg-deep);border:1px dashed var(--border);border-radius:var(--radius-md);overflow:hidden;opacity:.7;">
      <div style="flex-shrink:0;width:80px;background:transparent;border-right:1px dashed var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.8rem;gap:.3rem;">
        <span style="font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);">#6</span>
        <span class="series-status coming" style="font-size:.5rem;padding:.12rem .35rem;"><span class="series-dot"></span>Hold</span>
      </div>
      <div style="flex:1;padding:1.1rem 1.3rem;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;color:var(--muted);margin-bottom:.3rem;">The Growth Premium</div>
        <div style="font-size:.78rem;color:var(--faint);font-style:italic;margin-bottom:.5rem;">Why do some firms earn fees while others earn a share of the future?</div>
        <p style="font-size:.84rem;color:var(--faint);line-height:1.65;">Reserve episode. Written only after B0–B4 are published and tested in market.</p>
      </div>
      <div style="flex-shrink:0;padding:1.1rem 1.2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;gap:.4rem;min-width:130px;">
        <span style="font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.06em;color:var(--faint);">If earned</span>
      </div>
    </div>

  </div>

  <div style="margin-top:1.5rem;padding:1rem 1.2rem;background:var(--primary-soft);border:1px solid var(--border);border-radius:var(--radius-md);display:flex;gap:1rem;flex-wrap:wrap;align-items:baseline;">
    <span style="font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--primary);flex-shrink:0;">Audience</span>
    <p style="font-size:.85rem;color:var(--muted);margin:0;">Senior executives · Account leaders · GCC heads · Technology services leadership</p>
  </div>

</section>

<!-- SERIES C -->
<section class="section-wide" id="series-c">
  <div class="series-section-header">
    <div>
      <div class="section-label">Series C · The Moving Target</div>
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
    {% for article in site.articles %}
    <div class="card">
      <div class="num">{{ article.date | date: "%d %b %Y" }}{% if article.series %} · {{ article.series }}{% endif %}</div>
      <h3 style="margin-top:.3rem;font-size:1.1rem;">
        <a href="{{ article.url }}" style="text-decoration:none;color:inherit;">{{ article.title }}</a>
      </h3>
      <p style="font-size:.9rem;color:var(--muted);margin-top:.4rem;">{{ article.excerpt | strip_html | truncate: 120 }}</p>
      <a class="card-link" href="{{ article.url }}">Read</a>
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
