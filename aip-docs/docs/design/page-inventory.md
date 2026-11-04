# Page Inventory

Last updated: 2026-10-28
Design observations for Home and About Us (the only Canva pages seen so far) are in `ref-01-canva-observations.md`. Nav labels in the Canva screenshots match the sitemap below. People section model: `people-content-model.md`.

Sitemap source: NOTES navigation list, matching MPP §5.4 provisional sitemap. Status: **Proposed** (not approved). Design reference for every page: REF-01 (**Unverified**). Content for every page: **Missing** until AIP supplies it.

| Page | File (NOTES structure, not final) | Purpose (NOTES) | Content sources | CMS collection | Assets needed |
|---|---|---|---|---|---|
| Home | `src/pages/index.astro` | Introduce AIP, purpose, current activities, key achievements, buttons to learn more / get involved | Org settings, programs, announcements (**placement unresolved**) | Organization settings; Announcements | Logo, hero imagery (Missing) |
| About us | `about-us.astro` | Background, mission, vision, core values, history, PUP relationship, inspiration | Org settings (mission, vision, values) | Organization settings | Logo |
| Our people | `our-people.astro` | Officers, committees, members, roles, portraits, structure, optionally by term/academic year | People | People | Portraits (developer to supply) |
| AIP Community | `community.astro` | Stories, testimonials, volunteer experiences, partners, participation opportunities | Stories | Community stories | Approved images |
| Programs and Impact | `programs-impact.astro` | Program cards/pages: objectives, activities, dates, beneficiaries, photos, measurable results | Programs | Programs | Program photos |
| Archives | `archives.astro` | Searchable/filterable reports, newsletters, event documentation, past officers/programs; inline PDFs | Reports | Archives | PDFs |
| Get Involved | `get-involved.astro` | Volunteer registration, partnerships, contact, donation instructions, social/registration links | Org settings (contact links) | Organization settings | Logo |

## Page-level acceptance criteria (common)
- Layout, section order, and typography match the exported approved design (comparison done, not by memory).
- Only supplied assets; no stock or generated images.
- Empty sections use the missing-content state.
- Responsive and keyboard-accessible; per-page metadata present.

## Components named in NOTES (Proposed)
Header, Footer, Navigation, PersonCard, ProgramCard, ReportCard; layout BaseLayout. Component design is **not defined** until the Canva exports are reviewed. Community story card and announcement components are not in the NOTES list (gap).
