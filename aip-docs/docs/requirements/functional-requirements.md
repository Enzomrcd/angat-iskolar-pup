# Functional Requirements

Last updated: 2026-10-28
Source key: NOTES = developer notes; MPP = master prompt. Approval status for all items is **Proposed** until the developer/AIP confirms, because the notes are marked in progress.

| ID | Requirement | Source | Priority | Status | Acceptance criteria | Verification |
|---|---|---|---|---|---|---|
| FR-NAV-01 | Primary navigation with: Home, About us, Our people, AIP Community, Programs and Impact, Archives, Get Involved | NOTES "NAVIGATION BUTTON" | High | Proposed | All 7 links present, labels match approved design, keyboard reachable | Manual + link check |
| FR-HOME-01 | Home introduces AIP, explains purpose, features current activities, highlights achievements, has prominent "learn more" and "get involved" buttons | NOTES | High | Proposed | Each element present, content from approved sources only | Manual vs. design |
| FR-ABOUT-01 | About Us shows background, mission, vision, core values, history, relationship to PUP community | NOTES | High | Proposed | Each block populated from AIP-supplied content or shows missing-content state | Content review |
| FR-PEOPLE-01 | Our People shows officers, committees, members, roles, portraits, structure; may group by term/academic year | NOTES ("if appropriate") | High | Proposed | Data-driven from CMS; portraits are only supplied files | Manual + asset check |
| FR-COMM-01 | AIP Community shows stories, testimonials, volunteer experiences, partner organizations, participation opportunities | NOTES | Medium | Proposed | Only approved real content displayed | Content review |
| FR-PROG-01 | Programs and Impact shows program pages or cards: objectives, activities, dates, beneficiaries where appropriate, photos, measurable results | NOTES | High | Proposed | Card/page per program from content collection | Manual |
| FR-ARCH-01 | Archives list reports, accomplishment reports, newsletters, event documentation, previous officers/programs; searchable or filterable; PDFs open in browser | NOTES | Medium | Proposed | Filter works; PDF opens inline. "Searchable" scope unresolved (open-questions Q14) | Manual |
| FR-INV-01 | Get Involved: volunteer registration, partnerships, contact info, donation instructions, links to official social/registration forms | NOTES | High | Proposed | Only approved items shown; unapproved ones omitted or missing-state | Content review |
| FR-CMS-01 | CMS organization settings: mission, vision, values, contact links, homepage text | NOTES §5 | High | Proposed | Editable via form, appears on site | End-to-end |
| FR-CMS-02 | CMS collections: People, Programs, Community stories, Archives (reports), Announcements with the fields in NOTES §5 | NOTES §5 | High | Proposed | Each field editable and rendered. Announcements display location **unresolved** | End-to-end |
| FR-ADM-01 | `/admin/` access via Google sign-in for one authorized account, enforced server-side | NOTES, MPP §7.2 | Critical | Proposed / Unverified | Unauthorized Google accounts rejected by server; no frontend-only gate | Security test |
| FR-ADM-02 | Publishing from CMS to GitHub triggers a site rebuild without manual GitHub use | NOTES | Critical | Proposed / Unverified | Edit appears on live site after build | End-to-end test |
| FR-EMPTY-01 | Empty sections show a documented missing-content state and never fake content | MPP §8 | High | Proposed | No invented text/people/images in any build | Content scan |
| FR-ASSET-01 | Official logo, photos, and icons are used exactly as supplied; no substitutes | User instruction 2026-10-28, MPP §2 | Critical | Approved (direct user instruction) | Asset register matches usage; visual comparison done | Visual review |
| FR-BRAND-01 | `logos/main_logo.png` is the logo displayed inside the website; `logos/icon_logo.png` is the website icon (favicon). Neither is modified | Developer statement 2026-10-28; REF-01 | Critical | Approved (direct user instruction) | Header shows main logo unaltered; browser tab shows icon logo; no recolor/redraw | Visual review |
| FR-PEOPLE-02 | People section uses a CMS-driven template: add/edit/reorder people and replace photos through CMS forms; empty state until real data exists; no invented people or photos | Developer statement 2026-10-28; NOTES §5 | High | Approved as intent; field list Proposed (see `design/people-content-model.md`) | Entry can be added and photo replaced via CMS only; page renders missing-content state with zero entries | End-to-end (blocked on CMS) |
| FR-PEOPLE-03 | Record per-person photo consent | Developer statement (consent given) | Medium | Proposed | `photoConsent` field required to publish | Review |
| FR-NAV-02 | Header contains a search box as shown in REF-01 | REF-01 screenshots | Medium | Proposed (design shows it; scope undefined, Q16) | Behavior defined and approved before implementation | Manual |
| FR-NAV-03 | Current page's nav item shown as a highlighted pill; header overlays the hero image | REF-01 screenshots | Medium | Proposed | Matches exported design | Visual comparison |
| FR-ABOUT-02 | About Us shows Mission and Vision as two cards | REF-01 page 2 | Medium | Proposed | Text from AIP via CMS settings | Visual + content review |
