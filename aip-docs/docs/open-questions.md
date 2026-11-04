# Open Questions and Conflicts

Last updated: 2026-10-28

## Conflicts
- **CONFLICT-1 — Placeholder/sample content vs. no-invention rule.** NOTES timeline says "Build all seven pages using placeholder content" and "Add sample content". MPP §1.2 and §8 forbid invented organizational content. Proposed resolution (needs approval): use a labeled missing-content state ("Content coming soon") and clearly fake-labeled dev fixtures that never ship to production. Status: **awaiting user decision**.
- **CONFLICT-2 — "Explain the inspiration behind AIP in your own words" (About Us, NOTES).** MPP forbids writing organization descriptions. Proposed resolution: this is a content instruction for AIP officers, not for the AI; the CMS field is filled by AIP. Status: **awaiting confirmation**.
- **CONFLICT-3 — Sitemap labels.** NOTES nav labels ("AIP Community", "Programs and Impact") match the MPP provisional sitemap. File names in the NOTES structure use `community.astro` and `programs-impact.astro`. No true conflict found, but the Canva design may use different labels (**Unverified**).

## Resolved 2026-10-28 (developer statements)
- Logo roles: `main_logo.png` = logo inside the website; `icon_logo.png` = website icon. (Q7 partly resolved: official status/usage rules still unrecorded.)
- Member photos: names/photos not ready; build a CMS-editable template now (see `design/people-content-model.md`).
- Photo publishing consent: developer says "yes" (Q13 partly resolved: per-person record proposed).
- Canva design is "what the team is aiming for" (Q1 partly resolved: exact vs. adaptable still unstated).

## New questions (2026-10-28)
15. Asset location: keep `logos/` and `members_images/` at repo root, or move/copy under `public/` (or `src/assets`) for Astro? Do not move without approval.
16. Header search box (shown in Canva): what does it search (pages, archives, programs)? Needed for FR-NAV-02.
17. The Canva hero and card photos show identifiable people and printed names: are the original files available, and are they approved for publication?
18. Is a neutral placeholder avatar acceptable for people without a photo, or should the card be text-only?
19. Please share Canva pages 3 and 4 and the unread comments (badges show 2 on page 1 and 1 on page 2).
20. Is the favicon `icon_logo.png` large enough, and may it be scaled to standard favicon sizes (scaling only)?

## Questions needing the developer or AIP
1. Is the Canva design **exact** or **inspirational**? (Canva link could not be read; please export pages as PDF/PNG.)
2. Is the Angat Buhay Foundation site an exact layout reference or only inspiration?
3. Who in AIP approves content, design, and assets?
4. Which Google account will be the single CMS administrator, and who is the successor?
5. Is Gotham Regular licensed, and is a font file available? Is Inter an acceptable fallback (MPP lists it as possible)?
6. Is the palette final? Which color is used for what (primary, accent, text, background)?
7. Does an official AIP logo exist as SVG or PNG, and what are its usage rules?
8. Which GitHub account or organization will own the repository? Which Cloudflare account will own hosting?
9. Is there a custom domain, and who owns it?
10. Is the repo private or public? (Affects the publishing design.)
11. Get Involved: which of these exist and are approved — volunteer registration, partnerships, contact info, donation instructions, social links?
12. Are "Announcements" a page, a homepage section, or CMS-only? NOTES list them in the CMS table but not in the sitemap.
13. Is member/officer data publishable (consent for portraits and names)? Data privacy handling for student photos.
14. Archives: "searchable or filterable" — is filtering by year/category enough, or is full-text search required?

## Notes mismatches found (not resolved by assumption)
- CMS table includes **Organization settings** and **Announcements**; the content folders in the NOTES project structure list only people, programs, stories, reports. Needs reconciliation (see functional-requirements FR-CMS-02).
- NOTES step 4 of the timeline mentions schemas for "people, programs, stories, and reports" only.
- NOTES architecture line "AIP Admin - CMS Dashboard - GitHub Repository - Live AIP Website" omits the Worker/auth service that Option A requires.
