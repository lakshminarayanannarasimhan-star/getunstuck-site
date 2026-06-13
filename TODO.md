# Get Unstuck — Improvement Backlog

## In Progress / Done
- [x] Redesign all 30 themes with distinct tinted canvases
- [x] Editorial header (clean surface + accent top stripe)
- [x] Article share bar (LinkedIn, WhatsApp, copy link)
- [x] Audio player on articles (Web Speech API, gated via enable_audio in _config.yml)
- [x] Open Graph / Twitter card meta tags
- [x] Reading progress bar (article pages only, replaces static header accent line while reading)

---

## Backlog

### Reading Experience
- [x] Reading progress bar — fixed colour blending issue
- [x] **Table of contents** — auto-generated from headings, sticky sidebar for long articles
- [ ] **Pull quotes / callout blocks** — styled blockquote treatment to make key ideas stand out

### Discoverability
- [ ] **Open Graph / Twitter card meta tags** — rich preview cards (title, description, image) when sharing on LinkedIn, WhatsApp, Twitter ← *next up*
- [x] Client-side search — Lunr.js modal (Ctrl+K), covers articles + drills, keyboard navigable
- [x] **Related articles** — implemented; section hidden until series has 2+ articles. Test when H2 is published.

### Technical
- [ ] **Analytics** — Plausible or Fathom (privacy-friendly, no cookie banner needed)
- [ ] **Print / PDF styles** — clean CSS print stylesheet for articles
- [ ] **Audio: pre-generated MP3s** — option to upload ElevenLabs/OpenAI TTS audio per article for higher voice quality
