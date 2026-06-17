---
layout: default
title: The People
permalink: /mentees/
description: "Work with me. And the people I have worked with — in their words."
---

<!-- ═══════════════════════════════
     INVITATION HERO
═══════════════════════════════ -->
<section class="hero">
  <div class="hero-split">
    <div class="hero-left">
      <div class="eyebrow reveal d1">Work with me</div>
      <h1 class="hero-title reveal d2">Leadership is a lifelong practice. You can start from anywhere. The only requirement is that you start.</h1>
      <p class="hero-sub reveal d3">A year from now you will be somewhere. The question is whether that somewhere was designed or inherited.</p>
      <p class="hero-sub reveal d4" style="margin-top:.8rem;">If you are ready to work seriously on your leadership — not think about it, work on it — this is the invitation.</p>
    </div>
    <div class="hero-right reveal d3">
      <div class="hero-panel">
        <div class="panel-label">The ask</div>
        <p style="font-size:.92rem;color:var(--muted);line-height:1.65;margin-bottom:1.2rem;">Write to me. Tell me where you are, what you are stuck on, and why now. That is all. I will read it and respond.</p>
        <a class="btn-primary" href="mailto:lakshminarayanan.narasimhan@gmail.com">Write to me →</a>
        <div style="margin-top:1.2rem;padding-top:1.2rem;border-top:1px solid var(--border);">
          <div class="panel-label">A note on who this is for</div>
          <p style="font-size:.88rem;color:var(--muted);line-height:1.65;margin-top:.4rem;">Anyone. No experience threshold, no seniority filter, no right background. The LOS is built on one premise: leadership is a progressive expansion of stewardship — and that expansion can begin wherever you are standing.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════
     WHAT THIS IS
═══════════════════════════════ -->
<section class="section-wide">
  <div class="mnt-invite-grid">

    <div class="mnt-invite-lead">
      <div class="section-label">What this is</div>
      <h2>Not advice. A structured, long-term practice.</h2>
      <p style="margin-top:1rem;font-size:.95rem;color:var(--muted);line-height:1.75;">Built on one standard borrowed from the Leadership Operating System: nothing counts as learned until it changes how you operate. Not what you think. How you work.</p>
      <p style="margin-top:.8rem;font-size:.95rem;color:var(--muted);line-height:1.75;">The LOS gives the work a spine. You will know what you are developing, why it matters, and what evidence looks like when something has genuinely moved.</p>
    </div>

    <div class="mnt-offer-grid">

      <div class="mnt-offer-card">
        <div class="mnt-offer-icon">◈</div>
        <div class="mnt-offer-title">A system, not opinions</div>
        <p class="mnt-offer-desc">Each conversation has a purpose. Each period between conversations has a practice. Progress is visible — not because we say so, but because something demonstrably changed.</p>
      </div>

      <div class="mnt-offer-card">
        <div class="mnt-offer-icon">⬡</div>
        <div class="mnt-offer-title">Time that compounds</div>
        <p class="mnt-offer-desc">The minimum is a year. Often longer. The first months are the slowest — that is not wasted time, that is the most important time. The years after are where the compounding happens.</p>
      </div>

      <div class="mnt-offer-card">
        <div class="mnt-offer-icon">◎</div>
        <div class="mnt-offer-title">Honest feedback without a political cost</div>
        <p class="mnt-offer-desc">I have no stake in your organisation, your manager's opinion, or your next review. The conversations will go to places you did not expect. That is not incidental — it is where the real work tends to live.</p>
      </div>

      <div class="mnt-offer-card">
        <div class="mnt-offer-icon">△</div>
        <div class="mnt-offer-title">What you bring</div>
        <p class="mnt-offer-desc">A problem you are genuinely stuck on. The seriousness to work on it over time. You do not need to arrive with certainty — about where you are going or what you need. You need to arrive willing to find out.</p>
      </div>

    </div>

  </div>

  <div class="mnt-capacity-note">
    <span class="mnt-cap-label">A note on availability</span>
    <p>I work with a small number of people at a time — not because of scarcity, but because this work requires attention, and attention cannot be spread thin. If something here resonates, write to me now rather than later.</p>
    <a class="card-link" href="mailto:lakshminarayanan.narasimhan@gmail.com">lakshminarayanan.narasimhan@gmail.com</a>
  </div>

</section>

<!-- ═══════════════════════════════
     DIVIDER
═══════════════════════════════ -->
<div class="section-ink" style="padding-top:2.5rem;padding-bottom:2.5rem;">
  <div class="bleed-inner">
    <div class="section-label">The people</div>
    <p class="pull-quote">Careers are systems too. <em>These are the people I worked with — in their words, not mine.</em></p>
  </div>
</div>

<!-- ═══════════════════════════════
     MENTEE CARDS
═══════════════════════════════ -->
<section class="section-wide">

  {% assign mentees = site.mentees | sort: "year" | reverse %}

  {% if mentees.size > 0 %}

  <div class="section-label" style="margin-bottom:.4rem;">{{ mentees.size }} people featured</div>
  <p style="font-size:.88rem;color:var(--faint);margin-bottom:2rem;">Every person here has consented to be included and has seen their entry before it was published. Names, roles, and words are theirs. Nothing has been edited for effect.</p>

  <div class="mnt-card-grid">
    {% for mentee in mentees %}
    <div class="mnt-card">

      <div class="mnt-card-header">
        <div class="mentee-photo" style="width:56px;height:56px;flex-shrink:0;">
          {% if mentee.photo %}
          <img src="{{ mentee.photo | relative_url }}" alt="{{ mentee.name }}" loading="lazy">
          {% else %}
          <div class="mentee-photo-placeholder" style="font-size:1.1rem;">
            {{ mentee.name | split: ' ' | map: 'first' | join: '' | slice: 0, 2 | upcase }}
          </div>
          {% endif %}
        </div>
        <div class="mnt-card-meta">
          <div class="mnt-card-name">{{ mentee.name }}</div>
          <div class="mnt-card-role">{{ mentee.role }}</div>
          <div class="mnt-card-org">{{ mentee.org }}{% if mentee.location %} · {{ mentee.location }}{% endif %}</div>
        </div>
      </div>

      <div class="mnt-card-tags">
        <span class="area-tag">{{ mentee.type }}</span>
        <span class="area-tag">{{ mentee.year }}{% if mentee.duration %} · {{ mentee.duration }}{% endif %}</span>
      </div>

      <div class="mnt-card-body">
        <div class="mnt-card-section">
          <div class="mentee-q">What we did together</div>
          <p>{{ mentee.together }}</p>
        </div>
        <div class="mnt-card-section">
          <div class="mentee-q">How it helped</div>
          <p>{{ mentee.helped }}</p>
        </div>
      </div>

      {% if mentee.linkedin %}
      <div class="mnt-card-footer">
        <a class="mentee-linkedin" href="{{ mentee.linkedin }}" target="_blank" rel="noopener">LinkedIn →</a>
      </div>
      {% endif %}

    </div>
    {% endfor %}
  </div>

  {% else %}
  <div class="mnt-empty">
    <p>Entries are being added. Check back soon.</p>
  </div>
  {% endif %}

</section>

<!-- ═══════════════════════════════
     CLOSING BELIEF
═══════════════════════════════ -->
<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The belief</div>
    <p class="pull-quote">The mentor learns as much as the mentee. <em>That is how you know it is working.</em></p>
  </div>
</div>
