# Get Unstuck — Improvement Backlog

## In Progress / Done
- [x] Redesign all 30 themes with distinct tinted canvases
- [x] Editorial header (clean surface + accent top stripe)
- [x] Article share bar (LinkedIn, WhatsApp, copy link)
- [x] Audio player on articles (Web Speech API, gated via enable_audio in _config.yml)
- [x] Open Graph / Twitter card meta tags
- [~] **Reading progress bar** — implemented but progress bar blends with header accent line; needs repositioning fix

---

## Backlog

### Reading Experience
- [~] **Reading progress bar** — implemented; bug: blends with header accent line (same colour/position)
- [ ] **Table of contents** — auto-generated from headings, sticky sidebar for long articles
- [ ] **Pull quotes / callout blocks** — styled blockquote treatment to make key ideas stand out

### Discoverability
- [ ] **Open Graph / Twitter card meta tags** — rich preview cards (title, description, image) when sharing on LinkedIn, WhatsApp, Twitter ← *next up*
- [ ] **Client-side search** — Lunr.js, indexes all articles and drills at build time, no server needed
- [ ] **Related articles** — show 2–3 articles from the same series at the bottom of each article

### Technical
- [ ] **Analytics** — Plausible or Fathom (privacy-friendly, no cookie banner needed)
- [ ] **Print / PDF styles** — clean CSS print stylesheet for articles
- [ ] **Audio: pre-generated MP3s** — option to upload ElevenLabs/OpenAI TTS audio per article for higher voice quality
