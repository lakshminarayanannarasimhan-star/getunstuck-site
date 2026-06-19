---
layout: default
title: The Drills
permalink: /drills/
description: "Practice materials from the Horizon series and the weekly drill programme. No price, no gate, no email."
---

<section class="hz-hero">
  <div class="hz-hero-inner">
    <div class="hz-hero-left">
      <div class="eyebrow reveal d1" style="color:rgba(255,255,255,.45);">Practice materials · Open to all · No gate</div>
      <h1 class="hz-hero-title reveal d2">The practice is the gift.</h1>
      <p class="hz-hero-sub reveal d3">Every drill comes from a real situation — not a textbook. Capability is only installed when it performs, sustains, transfers, and survives absence. Reading is not installation.</p>
    </div>
  </div>
</section>

<!-- SERIES DRILL PACKS -->
{% assign packs = site.drills | where: "layout", "drillpack" | sort: "pack_number" %}
{% if packs.size > 0 %}
<section class="section-wide">
  <div class="section-label">Series drill packs</div>
  <h2>Practice the argument.</h2>
  <p class="prose" style="margin-top:.8rem;">Each pack is companion exercises for a published article — drawn directly from that article's argument. Work them after reading the article.</p>
  <div class="card-grid" style="margin-top:1.8rem;">
    {% for pack in packs %}
    <div class="card">
      <div class="num">{{ pack.series }} · {{ pack.drill_count }} exercises · {{ pack.duration }}</div>
      <h3 style="margin-top:.3rem;font-size:1.05rem;">
        <a href="{{ pack.url }}" style="text-decoration:none;color:inherit;">{{ pack.title }}</a>
      </h3>
      <p style="font-size:.88rem;color:var(--muted);margin-top:.4rem;">{{ pack.description }}</p>
      <a class="card-link" href="{{ pack.url }}">Open the drill pack</a>
    </div>
    {% endfor %}
  </div>
</section>
{% endif %}

<!-- WEEKLY DRILLS -->
{% assign weekly = site.drills | where: "layout", "drill" | sort: "title" %}
{% if weekly.size > 0 %}
<section class="section-wide">
  <div class="section-label">Weekly practice drills</div>
  <h2>The eight-week arc.</h2>
  <p class="prose" style="margin-top:.8rem;">See → Measure → Sort → Eliminate → Act → Prevent → Systemise → Integrate. One daily drill, one weekly review.</p>
  <ul class="drills-list" style="margin-top:1.5rem;">
    {% for drill in weekly %}
    <li>
      <a href="{{ drill.url }}">{{ drill.title }}</a>
      {% if drill.week %}<span class="meta"> — {{ drill.week }}{% if drill.day %} · {{ drill.day }}{% endif %}</span>{% endif %}
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}

<div class="section-ink">
  <div class="bleed-inner">
    <div class="section-label">The principle</div>
    <p class="pull-quote">A skill practised until it is yours is <em>tough to take away.</em> It sticks with you for years.</p>
  </div>
</div>
