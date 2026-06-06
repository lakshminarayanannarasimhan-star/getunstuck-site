---
layout: default
title: Sitemap
permalink: /sitemap/
sitemap: false
---

<div class="sitemap-page">
<h1>Sitemap</h1>

<div class="sitemap-section">
<h2>Core</h2>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/start-here/">Start Here</a></li>
  <li><a href="/about/">About</a></li>
</ul>
</div>

<div class="sitemap-section">
<h2>Handbook #1 — The Invisible Backlog</h2>
<ul>
  <li><a href="/the-invisible-backlog/">About the Book</a></li>
  <li><a href="/drills/">The Drills (8-Week Practice)</a></li>
  <li><a href="/workbook/">The Workbook</a></li>
</ul>
</div>

<div class="sitemap-section">
<h2>Community</h2>
<ul>
  <li><a href="/stories/">What Became Possible</a></li>
</ul>
</div>

<div class="sitemap-section">
<h2>The Library</h2>
<ul>
  <li><a href="/the-series/">The Series (Six Handbooks)</a></li>
  <li><a href="/writing/">Writing</a></li>
</ul>
</div>

<div class="sitemap-section">
<h2>All Drills</h2>
<ul>
  {% for drill in site.drills %}
  <li><a href="{{ drill.url }}">{{ drill.title }}</a> <span class="meta">— {{ drill.week }}</span></li>
  {% endfor %}
</ul>
</div>

<div class="sitemap-section">
<h2>All Writing</h2>
<ul>
  {% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <span class="meta">— {{ post.date | date: "%d %b %Y" }}</span></li>
  {% endfor %}
</ul>
</div>

</div>
