# ASC Website Enhancement Plan

This is a large multi-part enhancement to the existing site. I'll preserve current branding, typography, spacing, and layouts — only adding/changing what's listed below.

## 1. Theme System (Light/Dark)
- Add a `ThemeProvider` (class-based on `<html>`, persisted to `localStorage`, respects system preference initially).
- Extend `src/styles.css`: add a light-mode token set under `.light` (white bg, soft-gray surfaces, black text). Dark mode stays current. ASC red accent unchanged.
- Add a sun/moon toggle button in the navbar with smooth transition (CSS `color-scheme` + `transition` on bg/text/border tokens).
- Audit components for any hardcoded `text-white`/`bg-black` (already discouraged) and route through tokens.

## 2. Floating Glassmorphism Navbar
- Update `src/components/Header.tsx`: detached pill/rounded container, `backdrop-blur-xl`, semi-transparent surface, soft border + shadow, sticky with top offset, smooth hover underline on items. Theme toggle lives inside it.
- Mobile sheet menu retains same glass treatment.

## 3. Hero Workshop Spotlight Widget
- Add a right-side glass card to the hero in `src/routes/index.tsx`:
  - "UPCOMING WORKSHOP" label + red pulsing dot
  - Title: "Tech Beyond Boundaries"
  - Description per brief
  - Buttons: **Learn More** (scrolls to learning) and **Register Now** (→ enroll form, new tab)
  - Subtle float (CSS `@keyframes`) + entrance fade-in + hover lift.
- Hero layout becomes 2-column on lg+, stacks on mobile.

## 4. Homepage Restructure (Executive Summary)
Order on `/`:
1. Hero (+ widget)
2. Who We Are
3. Enterprise Capabilities
4. Solutions Preview (short — full content moves to new pages)
5. Team Preview (existing card grid, unchanged) + **View Full Team →**
6. Contact CTA

Remove from homepage (now lives on dedicated pages): full Learning/Programs details, long Projects list (keep brief solutions preview), Notes (already removed).

## 5. Enterprise Card System
Create reusable `<EnterpriseCard>` component:
- Full-bleed image (AI-generated, domain-specific — SOC dashboards, automation pipelines, dev environments, classroom collaboration, enterprise systems, modern web UIs)
- Gradient overlay + text on image
- Hover: subtle zoom (scale 1.05) + overlay intensify + lift shadow
- Applied to: services/solutions/program cards across home preview + new pages
- **Excluded**: team cards, workshop widget

I'll generate ~6 enterprise images via imagegen (cybersecurity, AI automation, AI fullstack, bootcamp, custom software, web dev).

## 6. New Pages
Standard route files under `src/routes/`:
- `/cybersecurity` — pillar page (Overview, Services, Capabilities, Solutions, Assessments, Training, CTA)
- `/cybersecurity/foundation` — from 15-day PDF (Overview, Modules, Outcomes, Tools, Highlights, Perfect For, Certification, Career Pathways)
- `/cybersecurity/professional` — from 30-day PDF (Overview, Modules, Outcomes, Tools, Career Readiness, Highlights, Perfect For, Capstone)
- `/ai-automation` — overview page
- `/ai-fullstack` — overview page
- `/team` — full team page (plain professional cards, no card-system imagery)

I'll parse both PDFs to extract real syllabus content.

## 7. Bootcamp Update
- In `src/lib/programs.ts`, replace `mastery-program` with `bootcamp` (name: "7-Day Bootcamp", duration: "7 Days", description per brief) across all 3 domains.
- Update slugs/types/order.

## 8. Enroll Now CTAs
- Add "Enroll Now" button → `https://forms.gle/newapaKMQKtVGjLLA` (new tab, `rel="noopener noreferrer"`) on:
  - Cybersecurity program pages (foundation, professional)
  - AI Automation page
  - AI Full Stack page
  - Bootcamp cards/pages
  - Existing dynamic program page

## 9. Team Updates
- Add 3 new members (Vidya Shri S, AnishFathima A, Mohammad Anas S) with LinkedIn links to the team data.
- Update Hari Vishnu portfolio link → `https://hari-vishnu.netlify.app/`.
- Homepage team preview keeps current visual treatment, adds "View Full Team →" link to `/team`.
- `/team` page: simple profile cards, no hero imagery.

## 10. Responsiveness & Polish
- Verify hero widget stacks below on mobile.
- Floating nav collapses to compact pill on mobile.
- Hover effects → tap-active on touch (use `:active` + `@media (hover: hover)`).

## Technical Notes
- All new routes use existing TanStack Start file-based routing conventions (`createFileRoute`, head() metadata per page, separate routes — not hash anchors).
- All asset images via `lovable-assets` CLI → `.asset.json` pointers.
- Theme transition: `transition-colors duration-300` on body + key surfaces; avoid FOUC via inline script in `__root.tsx` that sets initial class before hydration.

## Out of Scope (per guardrails)
- No rebranding, no typography changes, no layout changes beyond listed sections, no new sections beyond what's listed.

---

**Estimated scope:** ~6 new route files, 1 new component, 2 PDF parses, ~6 generated images, edits to Header/index/programs/styles. This is a multi-step build — I'll work through it in one go and report when ready.

Proceed?
