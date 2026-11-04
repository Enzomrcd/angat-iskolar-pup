# Project Overview — Angat Iskolar PUP (AIP) Website

Last updated: 2026-10-28 · Phase: 1 (documentation baseline; no repository exists yet)

## Status legend
Confirmed · Proposed · Unverified · Missing · Conflicting · Blocked

## Source of this document
All content below comes from the developer's in-progress notes ("WEBSITE DOCUMENTATION", referenced as **NOTES**) and the Master Project Prompt (**MPP**). The notes are marked by their author as still in progress, so nothing here is organization-approved yet. The Canva design is **Unverified** (see reference-register.md).

## Purpose (Proposed, from NOTES + MPP §3)
Present AIP professionally, communicate its work and impact, give access to approved reports, introduce its people, and make it easier to get involved.

## Inspiration (Confirmed as stated by the developer)
Angat Buhay Foundation website. Whether this is an "exact" or "inspirational" reference is **Missing** (see open-questions.md Q2).

## Scope (Proposed)
Seven public pages: Home, About Us, Our People, AIP Community, Programs and Impact, Archives, Get Involved. Admin CMS at `/admin/` with Google sign-in and publishing through GitHub to the live site.

## Non-goals
Anything not listed above. No features, pages, or content are assumed beyond the notes.

## Content rule (MPP §1, §8)
No invented organizational content. Sections without approved content show a documented missing-content state, never made-up text, people, photos, or logos. Official assets are supplied by the developer into the repo's asset folders.

## Stakeholders
- Developer / repo owner: user (BS CpE student, PUP).
- Approving body for content and design: AIP officers — **Missing** (who approves is not stated).
- Authorized CMS administrator: one organizational Google account — **Missing** (account and succession not stated).

## Risks (summary)
1. Custom auth and publishing is the hardest part and is Unverified (architecture doc).
2. Gotham Regular license not confirmed.
3. Notes ask for "placeholder content" and "sample content", which conflicts with the no-invention rule (CONFLICT-1).
4. Canva design not readable by tooling; needs exports.
