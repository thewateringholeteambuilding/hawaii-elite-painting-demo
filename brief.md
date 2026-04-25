# Demo Brief — Hawaii Elite Painting and Renovation

**Demo built:** 2026-04-24
**Lead ID:** 0eaf4262-a54a-424c-a0e8-9827f629a13b
**Built by:** Kainoa (batch-demos run)

---

## Business Data

- **Name:** Hawaii Elite Painting and Renovation
- **Industry:** Construction — Painting & Renovation
- **Island:** Oahu
- **Address:** 200 N Vineyard Blvd Ste A325-148, Honolulu, HI 96817
- **Phone:** Not found in research (placeholder: (808) 555-0192)
- **Google CID:** 12364976460210408014
- **Google Maps:** https://maps.google.com/?cid=12364976460210408014

---

## Style Assignment

- **Style:** Industrial (iron-edge)
- **Palette:** iron-brass
- **Token file:** `_System/styles/_palettes/iron-brass.css`
- **Style file:** `_System/styles/_styles/industrial.css`

### Key tokens
- Background: `hsl(220 45% 7%)`
- Surface: `hsl(220 40% 10%)`
- Text: `hsl(40 30% 92%)`
- Accent (brass): `hsl(38 85% 55%)`
- Border: `hsl(220 30% 20%)`
- Font heading: Oswald
- Font body: Archivo
- Border radius: 0 everywhere (zero-radius is the Iron Edge signature)
- Shadows: hard offset, no blur — `6px 6px 0 0 var(--color-accent)`

---

## Pages Built

1. **Home** — split-hero (md:grid-cols-2), stats strip, services teaser (6 photo cards staggered), why-us section, 3 testimonials, prefooter CTA band
2. **About** — company story, photo + stats, 3 values with specific copy
3. **Services** — 7 full service entries with scope, detail list, note, per-service CTA
4. **Gallery** — 12-item photo grid with iron-frame labels and project details
5. **Contact** — 2-col layout, contact info panel, estimate request form with validation

---

## Anti-Pattern Compliance Notes

- No gradient icons or containers
- No rounded cards (zero-radius enforced)
- No gradient text
- Max 2 section kickers per page (Home: "§ Honolulu, Oahu" + "§ How We Work")
- All images are real Unsplash CDN URLs
- No em-dashes in marketing copy
- No "built on trust" / "quality craftsmanship" / "under one roof"
- No abstract trust taglines
- Hero is split-layout with real photo column on desktop
- Floating trust badge in hero: Google 4.8 stars, 47 reviews
- CTA varies by section: "Get Free Estimate" / "See Our Work" / "View Gallery" / "Request Estimate"

---

## Niche Notes — Construction (Painting/Renovation)

- Hawaii-specific differentiation: UV load, salt air, humidity cycling
- Coastal-rated coatings are a real differentiator to call out
- Cabinet painting vs. replacement cost math ($18k savings) adds credibility
- "One crew" positioning (no subs) resonates for renovation work
- Written scope before work is the #1 trust signal for this category
- Off-hours scheduling is a commercial painting differentiator
- Deck stain lifespan (18 months for mainland products) is a local pain point

---

## Build Notes

- Phone number not found in public sources; used placeholder (808) 555-0192
- Business appears to be primarily Google Business listing with minimal web presence — cold outreach opportunity
- Demo URL: TBD (batch mode)
- Repo: hawaii-elite-painting-demo (TWH-Portfolio)
