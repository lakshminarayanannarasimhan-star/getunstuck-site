---
layout: default
title: "Horizon — Applications"
permalink: /theories/horizon/applications/
description: "Applications of Horizon — the theory of how the basis of competition changes — to technology services strategy."
---

<section class="section-wide">
  <nav class="art-breadcrumb" style="margin-bottom:1.5rem;">
    <a href="/">Home</a>
    <span>›</span>
    <a href="/theories/">Theories</a>
    <span>›</span>
    <a href="/theories/horizon/">Horizon</a>
    <span>›</span>
    <span>Applications</span>
  </nav>

  <div class="section-label">Applications of Horizon</div>
  <h1 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,2.4rem);margin-bottom:.75rem;">Technology services in the age of GenAI and GCCs.</h1>
  <p class="prose" style="margin-bottom:2rem;">These articles apply the Horizon mechanism — how the basis of competition changes over time — to the technology services industry. They are evidence for the theory, not the theory itself. The theory is at <a href="/theories/horizon/">Horizon · The Theory</a>.</p>

  {% assign hz_posts = site.posts | where: "parent_theory", "horizon" | sort: "series_position" %}
  {% if hz_posts.size > 0 %}
  <div class="art-arc">
    {% for post in hz_posts %}
    {% if post.status == "published" %}
    <div class="art-arc-item" data-read-url="{{ post.url }}">
      <div class="art-arc-num">0{{ post.series_position }}</div>
      <div class="art-arc-body">
        <div class="art-arc-title">{{ post.title }}</div>
        <p class="art-arc-idea">{{ post.tldr | truncate: 140 }}</p>
        <div class="art-arc-links">
          <a href="{{ post.url }}">Read →</a>
          {% if post.drill_pack_url %}<a href="{{ post.drill_pack_url }}" class="art-arc-drill">{{ post.drill_pack_count }} drills</a>{% endif %}
        </div>
      </div>
    </div>
    {% endif %}
    {% endfor %}
  </div>
  {% endif %}

  <div style="margin-top:2rem;display:flex;gap:.8rem;flex-wrap:wrap;">
    <a class="btn-secondary" href="/theories/horizon/">← Horizon Theory</a>
    <a class="btn-secondary" href="/theories/">All Theories</a>
  </div>
</section>

<div class="section-ink" style="margin-top:2rem;">
  <div class="bleed-inner">
    <div class="section-label">The parent theory</div>
    <p class="pull-quote">These articles are the proof. <em>Horizon is the product.</em></p>
  </div>
</div>
