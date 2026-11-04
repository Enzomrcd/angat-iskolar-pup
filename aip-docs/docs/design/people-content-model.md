# People Content Model and Template

Last updated: 2026-10-28 · Status: **Proposed** (developer asked for an easy-to-maintain template, 2026-10-28). No real names, roles, or photos are included, and none will be invented.

## Goal
Officers can add, edit, reorder, and replace photos of people through CMS forms only, without touching code or file paths. Until real data exists, the Our People page shows a documented missing-content state.

## Collection: People (`src/content/people/`, one file per person)
Fields come from NOTES §5; validation is Proposed.

| Field | Type | Required | Notes |
|---|---|---|---|
| name | text | Yes | Exactly as the person wants it shown |
| role | text | Yes | Position title as approved by AIP |
| committee | text | No | Only if the person belongs to one |
| academicYear | text (e.g. a term label) | Yes | Drives grouping by term/academic year (NOTES: "if appropriate") |
| bio | long text | No | |
| portrait | image | No | Uploaded through the CMS image widget |
| portraitAlt | text | If portrait set | Accessibility text |
| order | number | No | Controls display order within a group |
| published | boolean | Yes (default off) | Draft/publish control so unfinished entries never appear |
| photoConsent | boolean | Yes | Records that the person agreed to publication (developer stated consent is given; this keeps a per-person record) |

## Display rules (Proposed)
- Group by academicYear; within a group sort by `order`, then name.
- Entry without a portrait: show text-only card. A neutral placeholder avatar would be a substitute asset and needs explicit approval (open-questions Q18).
- Only `published: true` entries render.

## Replacing a photo (target workflow)
Open /admin → People → select person → replace image in the portrait field → save. No file renaming or code edits. **Unverified:** depends on the CMS and publishing flow working (see architecture doc).

## Component
`PersonCard.astro` (named in NOTES) reads only from the collection. It contains no hardcoded names or images.

## Adding the real data later
When the developer has names, roles, terms, and photos: add them either through the CMS or as files in the collection, with photos saved where the CMS media path points (path to be decided, open-questions Q15). Photo files in `members_images/` are not referenced by the site until that is configured.

## Blank entry template (for developers; not content)
```
---
name: ""
role: ""
committee: ""
academicYear: ""
bio: ""
portrait: ""
portraitAlt: ""
order: 0
published: false
photoConsent: false
---
```
This file must never be placed inside `src/content/people/` as a real entry.
