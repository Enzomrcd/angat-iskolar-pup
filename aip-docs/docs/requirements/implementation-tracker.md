# Implementation Tracker

Last updated: 2026-10-28
Evidence basis: no repository exists yet (user confirmed), so nothing below is Implemented or Verified. Phases follow MPP §9; steps follow the NOTES project timeline.

| ID | Item | Related reqs | Priority | Status | Blocker / dependency | Evidence |
|---|---|---|---|---|---|---|
| T-01 | Documentation baseline (this set) | all | High | In Progress | Needs developer review | Files in `docs/` |
| T-02 | Answer open questions | open-questions.md | High | Blocked | Developer / AIP input | — |
| T-03 | Export Canva design as PDF/PNG and register it | REF-01 | High | In Progress | Pages 1–2 seen via screenshots; pages 3–4 and an export still needed | `design/ref-01-canva-observations.md` |
| T-04 | Supply logo, fonts, icons, portraits, program photos | AS-01..08 | High | In Progress | Logos supplied (not inspected by Claude); member photos, hero photos, program photos, Gotham, UI icons still missing | Register updated |
| T-15 | People template and content model | FR-PEOPLE-02/03 | High | In Progress | Document written (Proposed); needs approval and the CMS to be verifiable | `design/people-content-model.md` |
| T-16 | Decide asset folder location for Astro | Q15 | High | Blocked | Developer decision | — |
| T-05 | Create GitHub repository and Astro project (timeline step 1) | NFR-MAINT-01 | High | Not started | T-01 reviewed | — |
| T-06 | Design tokens + shared layout + navigation | FR-NAV-01 | High | Not started | T-03, T-04, palette role confirmation | — |
| T-07 | Seven pages with missing-content states | FR-*, FR-EMPTY-01 | High | Not started | CONFLICT-1 decision, T-03 | — |
| T-08 | Content schemas (people, programs, stories, reports, settings, announcements) | FR-CMS-01/02 | Medium | Not started | Reconcile collection list (open-questions) | — |
| T-09 | Deploy static site to Cloudflare Pages (step 3) | NFR-COST-01 | Medium | Not started | T-05, hosting account ownership | — |
| T-10 | Verify auth/publishing feasibility (Decap + Worker + GitHub App) | FR-ADM-01/02 | Critical | Not started | Official docs check | — |
| T-11 | Build CMS (step 4) | FR-CMS-* | Medium | Not started | T-08 | — |
| T-12 | Google auth Worker (step 5) | FR-ADM-01 | Critical | Not started | T-10, Google account choice | — |
| T-13 | Connect publishing (step 6) | FR-ADM-02 | Critical | Not started | T-12 | — |
| T-14 | Test and handover, admin guide (step 7) | NFR-BACKUP-01, NFR-OWN-01 | High | Not started | All above | — |

Definition of done for any item: instructions followed, correct assets used, no invented content, docs updated, tests run, results honestly reported (MPP §15).
