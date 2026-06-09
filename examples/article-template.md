---
layout: article

# ── REQUIRED ──────────────────────────────────────────
title: "Article Title Here"
date: 2026-01-01

# ── SERIES ────────────────────────────────────────────
series: "Series D — The Trust Equation"   # Full series name
series_code: D                            # Single letter: A, B, C, D
article_code: D0                          # e.g. D0, A1, B3
series_position: 1                        # 1-indexed position
series_total: 7                           # Total articles in series

# ── META ──────────────────────────────────────────────
status: published                         # draft | review | published
last_updated: 2026-01-01                  # omit if same as date
reading_time: 8                           # minutes (manual estimate)
excerpt: "One sentence summary for cards and SEO."

# ── CATEGORISATION ────────────────────────────────────
genre: [Security, Leadership]             # Display labels
tags: [security, trust, leadership]       # Slug-style for tag pages

# ── KEY INSIGHT / TL;DR ───────────────────────────────
# Optional. Shows as a highlighted box above the article body.
tldr: "One clear sentence or short paragraph stating the core insight."

# ── QUESTIONS TO PONDER ───────────────────────────────
# Optional. Shown after the article body.
questions_to_ponder:
  - "First question — make it open-ended and uncomfortable."
  - "Second question — points at the reader's own situation."
  - "Third question — asks them to name something specific."

# ── STRESS TEST ───────────────────────────────────────
# Optional. Where does this argument break down?
stress_test:
  intro: "Every argument has edges. These are the places where this one bends or breaks."
  points:
    - challenge: "The counter-argument or edge case."
      response: "The honest response — where the argument holds, where it doesn't."
    - challenge: "Second challenge."
      response: "Second response."

# ── BIBLIOGRAPHY ──────────────────────────────────────
# Optional. Shown with auto-numbering and cite-this block.
bibliography:
  - id: ref1
    author: "Author, A."
    year: 2024
    title: "Title of Work"
    publisher: "Publisher"          # for books
    url: "https://example.com"      # for web sources
    type: book                      # book | article | paper | web
  - id: ref2
    note: "For inline-only notes without a formal reference."

# ── WHAT'S NEXT ───────────────────────────────────────
# Optional. Teases the next article in the series.
whats_next:
  title: "Next Article Title"
  code: D1
  description: "One paragraph describing what the next piece covers and why it follows from this one."
  status: coming                    # coming | published
  url: /path/to/next/article/       # include only if published
---

Opening paragraph. No heading. Drops the reader directly into the argument or situation.

## First section heading

Prose continues. Each section heading advances the argument — not a topic, but a move in the argument.

{% include figure.html
   src="/assets/img/articles/series-d/diagram-name.png"
   alt="Descriptive alt text"
   caption="Caption explaining what the image shows and why it matters." %}

Continue prose after the image. Images break up long sections and add visual evidence.

## Second section heading

The argument deepens. No bullet points unless they are genuinely list-like data. Every sentence either advances the argument or should be cut.

> **Callout or key claim.** Use a blockquote for a sentence that deserves to stand alone.

## Third section heading

Build toward the turn — the moment the reader cannot unsee something.

---

## The Drill — Five Questions

For Series D, C (instructed): include the drill here as part of the article body.
For Series A, B (argued): omit or use a lighter version.

**1. Question one.**
Context for the question.
*The specific instruction for what to write/do.*

**2. Question two.**
*Specific instruction.*

**3. Question three.**
*Specific instruction.*

**4. Question four.**
*Specific instruction.*

**5. Question five.**
Owner: [person or role]. Date: [when].
