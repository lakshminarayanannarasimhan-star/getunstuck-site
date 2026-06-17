---
layout: default
title: The Drills
permalink: /drills/
---

<section class="hero">
  <div class="eyebrow reveal d1">The practice · Open to all · No gate</div>
  <h1 class="hero-title reveal d2">The drills.</h1>
  <p class="hero-sub reveal d3">The full eight-week practice, open to anyone. No email, no sign-up, nothing to hand over.</p>
</section>

<section class="section-wide">
  <div class="prose">
    <p>The arc runs across eight weeks — See, Measure, Sort, Eliminate, Act, Prevent, Systemise, Integrate — one daily drill at a time, with a weekly review each Sunday.</p>

<div class="flow-wrapper" style="margin:2rem 0;">
  <div class="flow">
    <div class="flow-card active">Week 1<br>See</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 2<br>Measure</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 3<br>Sort</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 4<br>Eliminate</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 5<br>Act</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 6<br>Prevent</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 7<br>Systemise</div>
    <div class="flow-arrow">→</div>
    <div class="flow-card">Week 8<br>Integrate</div>
  </div>
</div>

<ul class="drills-list">
  {% for drill in site.drills %}
  <li><a href="{{ drill.url }}">{{ drill.title }}</a>
    <span class="meta"> — {{ drill.week }} · {{ drill.day }}</span></li>
  {% endfor %}
</ul>
  </div>
  <div class="coming">
    <div class="label">Still being built</div>
    <p>This page is part of the map but not yet finished — it will arrive when it's ready.</p>
  </div>
  <div class="hero-actions" style="margin-top:1.5rem;">
    <a class="btn-secondary" href="/">Back to the Map</a>
  </div>
</section>
