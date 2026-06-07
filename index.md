---
layout: default
title: Home
permalink: /
description: "Leadership practitioner, author, and writer. 25 years building systems, teams, and strategy. GET UNSTUCK Leadership Handbooks."
---

<!-- ═══════════════════════════════
     LEAN HERO
═══════════════════════════════ -->
<section class="hero-lean">
  <div class="hero-split">

    <div class="hero-left">
      <div class="eyebrow reveal d1">Leadership · Writing · Practice</div>
      <h1 class="hero-title reveal d2">25 years of building what others theorise about.</h1>
      <p class="hero-sub reveal d3">Author. Leadership systems practitioner. Writing on what actually holds — in books, articles, and practice.</p>
      <div class="hero-actions reveal d4">
        <a class="btn-primary" href="/books/">The Library</a>
        <a class="btn-secondary" href="/publications/">The Writing</a>
        <a class="btn-secondary" href="/case-studies/">Case Studies</a>
      </div>
    </div>

    <div class="hero-right reveal d4">
      <div class="stat-strip-4">
        <div class="stat">
          <div class="stat-num">25</div>
          <div class="stat-label">Years in Practice</div>
        </div>
        <div class="stat">
          <div class="stat-num">11</div>
          <div class="stat-label">Books in Progress</div>
        </div>
        <div class="stat">
          <div class="stat-num">2</div>
          <div class="stat-label">Article Series</div>
        </div>
        <div class="stat">
          <div class="stat-num">Open</div>
          <div class="stat-label">Drills &amp; Workbook</div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════
     DASHBOARD
═══════════════════════════════ -->
<div class="dashboard-grid">

  <!-- ── BOOKS (large, 3 cols) ── -->
  <div class="dash-card dash-area-books">
    <div class="dash-card-label">
      Books
      <span class="badge">11 in Progress</span>
    </div>
    <h2>A growing library for leadership practitioners.</h2>
    <p>Two series, built incrementally. Each book installs one shift in how a leader sees, decides, and acts. The practice materials — drills and workbook — carry no price, always.</p>

    <div class="dash-books-unified">
      <div class="unified-track">
        <div class="unified-stat">
          <div class="stat-num">11</div>
          <div class="stat-label">Books planned</div>
        </div>
        <div class="unified-stat">
          <div class="stat-num">1</div>
          <div class="stat-label">Published</div>
        </div>
        <div class="unified-stat">
          <div class="stat-num">10</div>
          <div class="stat-label">In development</div>
        </div>
        <div class="unified-stat">
          <div class="stat-num">Open</div>
          <div class="stat-label">Practice materials</div>
        </div>
      </div>
      <div class="unified-progress">
        <div class="progress-label">
          <span>Library progress</span><span>1 of 11 published</span>
        </div>
        <div class="progress-bar" style="height:6px;">
          <div class="progress" style="width:9%"></div>
        </div>
      </div>
    </div>

    <div class="dash-card-footer">
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
        <a class="btn-primary" href="/books/">Browse the Library</a>
        <a class="btn-secondary" href="/drills/">The Drills</a>
        <a class="btn-secondary" href="/workbook/">The Workbook</a>
      </div>
      <a class="card-link" href="/stories/">Reader stories</a>
    </div>
  </div>

  <!-- ── LINKEDIN CAROUSEL (1 col) ── -->
  <div class="dash-card dash-area-consulting" style="padding:0;overflow:hidden;">
    <div style="padding:1.6rem 1.8rem 1rem;">
      <div class="dash-card-label">
        LinkedIn
        <a href="https://www.linkedin.com/in/lakshminarayanann/" target="_blank" rel="noopener" class="badge" style="text-decoration:none;">Follow →</a>
      </div>
      <h3 style="font-size:1.05rem;">From the feed.</h3>
    </div>

    {% assign li_images = site.static_files | where_exp: "f", "f.path contains '/assets/img/linkedin/'" | sort: "name" | reverse %}

    {% if li_images.size > 0 %}
    <div class="li-carousel" id="liCarousel">
      <div class="li-track" id="liTrack">
        {% for img in li_images %}
        <div class="li-slide">
          <img src="{{ img.path | relative_url }}" alt="LinkedIn post {{ forloop.index }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
      <button class="li-btn li-prev" id="liPrev" aria-label="Previous">&#8592;</button>
      <button class="li-btn li-next" id="liNext" aria-label="Next">&#8594;</button>
      <div class="li-dots" id="liDots">
        {% for img in li_images %}
        <button class="li-dot{% if forloop.first %} active{% endif %}" data-index="{{ forloop.index0 }}" aria-label="Slide {{ forloop.index }}"></button>
        {% endfor %}
      </div>
    </div>
    {% else %}
    <div style="padding:1.5rem 1.8rem 1.8rem;">
      <div class="carousel-empty">
        <div class="carousel-empty-icon">&#128248;</div>
        <p>Drop your LinkedIn post images into<br><code>assets/img/linkedin/</code><br>They will appear here automatically.</p>
        <p style="margin-top:.6rem;font-size:.8rem;color:var(--faint);">Supported: JPG, PNG, WEBP<br>Name files by date for correct order<br>e.g. <code>2026-06-13.jpg</code></p>
      </div>
    </div>
    {% endif %}

    <div style="padding:.8rem 1.8rem 1.4rem;border-top:1px solid var(--border);margin-top:auto;">
      <a class="card-link" href="/personal-branding/linkedin/">All LinkedIn posts</a>
    </div>
  </div>

  <!-- ── PUBLICATIONS (2 cols) ── -->
  <div class="dash-card dash-area-pubs">
    <div class="dash-card-label">
      Publications
      <span class="badge">2 Active Series</span>
    </div>
    <h3>Writing worth reading slowly.</h3>
    <p>Articles on leadership systems, strategy, and the gap between execution and indispensability.</p>

    <div class="pub-series">
      <div class="pub-series-item">
        <div class="ps-label">Series A</div>
        <div class="ps-title">Leadership Operating System</div>
        <div class="ps-meta">4 articles · Jul–Oct 2026</div>
      </div>
      <div class="pub-series-item">
        <div class="ps-label">Series B</div>
        <div class="ps-title">Beyond Execution</div>
        <div class="ps-meta">6 articles · In progress</div>
      </div>
    </div>

    <div class="dash-card-footer">
      <a class="card-link" href="/publications/">All publications</a>
      <a class="btn-secondary" href="https://www.linkedin.com/in/lakshminarayanann/" target="_blank" rel="noopener">LinkedIn →</a>
    </div>
  </div>

  <!-- ── PERSONAL BRAND (1 col) ── -->
  <div class="dash-card dash-area-brand">
    <div class="dash-card-label">Personal Brand</div>
    <h3>Presence that earns the right seat.</h3>
    <p>Positioning built on genuine expertise. The long game, done deliberately.</p>
    <div class="area-tags" style="margin-top:.8rem;">
      <span class="area-tag">Positioning</span>
      <span class="area-tag">LinkedIn</span>
      <span class="area-tag">Thought Leadership</span>
    </div>
    <div class="dash-card-footer">
      <a class="card-link" href="/personal-branding/">Brand work</a>
    </div>
  </div>

  <!-- ── ABOUT (1 col) ── -->
  <div class="dash-card dash-area-about">
    <div class="dash-card-label">About</div>
    <h3>Lakshmi Narayanan</h3>
    <p>Leadership systems practitioner. 25 years inside one of India's largest organisations. Chennai.</p>
    <ul class="open-to-list">
      <li>Leadership programme partnerships</li>
      <li>Writing and speaking</li>
      <li>Senior industry opportunities</li>
    </ul>
    <div class="dash-card-footer">
      <a class="card-link" href="/about/">Full story</a>
    </div>
  </div>

</div>

<!-- ═══════════════════════════════
     THROUGH-LINE
═══════════════════════════════ -->
<div class="section-ink" style="margin-top:2rem;">
  <div class="bleed-inner">
    <div class="section-label">The through-line</div>
    <p class="pull-quote">Tools change. <em>Systems endure.</em> Every book, article, and engagement is built on that one idea.</p>
  </div>
</div>
