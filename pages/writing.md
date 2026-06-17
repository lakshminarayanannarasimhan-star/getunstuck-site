---
layout: default
title: Writing
permalink: /writing/
---

<section class="hero">
  <div class="eyebrow">Articles · Thinking</div>
  <h1 class="hero-title">Writing.</h1>
  <p class="hero-sub">Thinking on leadership, systems, and practice — as articles worth reading slowly.</p>
</section>

<section class="section-wide">
  <div class="card-grid">
    {% for post in site.posts %}
    <div class="card">
      <div class="num">{{ post.date | date: "%d %b %Y" }}</div>
      <h3><a href="{{ post.url }}" style="text-decoration:none;color:inherit;">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <a class="card-link" href="{{ post.url }}">Read</a>
    </div>
    {% endfor %}
    {% for article in site.articles %}
    <div class="card">
      <div class="num">{{ article.date | date: "%d %b %Y" }}</div>
      <h3><a href="{{ article.url }}" style="text-decoration:none;color:inherit;">{{ article.title }}</a></h3>
      <p>{{ article.excerpt | strip_html | truncate: 120 }}</p>
      <a class="card-link" href="{{ article.url }}">Read</a>
    </div>
    {% endfor %}
  </div>
</section>
