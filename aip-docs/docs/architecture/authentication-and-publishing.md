# Authentication and Publishing Architecture

Last updated: 2026-10-28 · Status: **Proposed / Unverified** — nothing here has been built or tested.

## What the notes specify (NOTES)
- Stack: Astro, Cloudflare Pages, Google Authentication / OpenID Connect, GitHub, Decap CMS.
- Flow stated: AIP Admin → CMS Dashboard → GitHub Repository → Live AIP Website.
- "Option A": Google OpenID Connect to authenticate the officer, verify the exact email server-side, use a narrowly scoped GitHub App (or equivalent server-side credential) to save content to the repo. Decap provides the editor UI "but may need a custom backend or an adapter to this service."
- Planned Worker: `worker/src/index.ts` (Cloudflare Worker per timeline step 5).

## Gaps in the stated flow
1. The flow diagram omits the Worker/auth service that Option A requires between the CMS and GitHub.
2. Whether Decap CMS can talk to a custom backend or adapter is **Unverified**. Decap's built-in backends and its support for custom backends must be checked against the official Decap docs for the version chosen. Do not assume Google login works out of the box.
3. Whether Worker routes and Pages can be served from the same domain as `/admin/` is **Unverified**.
4. Whether the GitHub App can be installed on the intended repository owner (personal vs. organization account) is **Unverified**.
5. Cloudflare and GitHub free-tier limits relevant to this design are **Unverified**; check official pages before any claim.

## Separation of concerns (MPP §7.2) — design checklist
| Concern | Intended mechanism (from NOTES) | Status |
|---|---|---|
| Identity authentication | Google OIDC, ID token verified in the Worker | Unverified |
| Authorization | Server-side allowlist of exact authorized email | Unverified; account not chosen (open-questions Q4) |
| Content editing | Decap CMS forms | Unverified for this auth flow |
| Server-side checks | Worker rejects any write without valid session + allowlisted email | Unverified |
| GitHub credential | GitHub App with minimum permissions, stored as Worker secret | Unverified |
| Commit creation | Worker writes commits via GitHub API | Unverified |
| Build/deploy | Cloudflare Pages build triggered by commit to production branch | Unverified |
| Session and CSRF | Secure session, CSRF protection (NOTES step 5) | Unverified |
| Audit and recovery | Git history; restore procedure | Not yet documented |

## Security rules (confirmed requirements from MPP)
- Never expose GitHub tokens, OAuth client secrets, or private keys in browser JS, static files, public config, Git history, or client-visible env vars.
- A frontend-only login is not acceptable.
- Do not call the admin flow complete until tested end to end, including a rejected unauthorized Google account.

## Decisions needed before implementation
Confirm the Decap + Worker adapter is feasible; if not, compare alternatives (per MPP §7.2) and get approval before changing design. Alternatives are not evaluated here because none have been verified.

## Verification plan (not yet run)
Authorized login; unauthorized login rejected; forged/CSRF request rejected; create/edit/delete content; image/PDF upload; commit appears in repo; Pages build triggers; live site updates; rollback works.
