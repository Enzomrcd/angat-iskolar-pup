# Non-Functional Requirements

Last updated: 2026-10-28
All **Proposed** (source: MPP §3, §5.2, §7, §13 unless noted). Verification is not yet performed for any item.

| ID | Area | Requirement | Acceptance criteria | Verification |
|---|---|---|---|---|
| NFR-PERF-01 | Performance | Static-first, lightweight pages, minimal client JS | Targets to be set with developer (no numbers invented here) | Lighthouse (not yet run) |
| NFR-A11Y-01 | Accessibility | Semantic HTML, keyboard navigation, visible focus, adequate contrast for the palette | Keyboard-only pass; contrast check of approved color pairs | Manual + tool |
| NFR-RESP-01 | Responsiveness | Works on mobile, tablet, laptop, desktop | Checked at agreed breakpoints (to be defined) | Manual |
| NFR-SEC-01 | Security | No secrets in browser code, static files, or Git; admin writes authorized server-side | Secret scan clean; unauthorized write rejected | Security test |
| NFR-SEC-02 | Security | Session handling and CSRF protection for admin write operations (NOTES timeline step 5) | Tests show forged requests rejected | Security test |
| NFR-PRIV-01 | Privacy | Student names/photos published only with consent | Consent status recorded per person (**approach unresolved**, open-questions Q13) | Process review |
| NFR-REL-01 | Reliability | Failed build or publish does not take down the live site | Rollback procedure documented and tested | Recovery test |
| NFR-MAINT-01 | Maintainability | Reusable components, structured content, central design tokens, documented for future student developers | Docs complete; no duplicated design values | Code review |
| NFR-BROWSER-01 | Compatibility | Current major browsers (exact list to be agreed) | Smoke test per browser | Manual |
| NFR-SEO-01 | SEO | Page titles and metadata per page | Metadata present on all 7 pages | Check |
| NFR-INTEG-01 | Content integrity | No fabricated organizational content; asset use matches register | Content and asset scan | Review |
| NFR-BACKUP-01 | Backup | Content recoverable (Git history plus documented restore) | Restore test (NOTES timeline step 7) | Recovery test |
| NFR-COST-01 | Cost | Prefer sustainable free tiers; limits verified against official docs before claiming | Cost table in deployment docs with sourced limits | Doc review |
| NFR-OWN-01 | Ownership | Organization owns repo, hosting, domain, admin account; documented succession | Ownership table filled in | Doc review |
