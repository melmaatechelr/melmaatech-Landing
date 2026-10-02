# Melmaa Tech SEO audit — 2026-10-02

Scope: public routes present in this Vite/React repository, including the Industrial Training November 2026 page and its Sadhana ECET relationship. This is a code and local-build audit; production HTTP behavior, Search Console, analytics accounts and field Core Web Vitals cannot be observed from the repository.

## Baseline

- Vite 5 / React 18 SPA with routes `/`, `/careers`, `/contact`, `/trainings`, and the Industrial Training route. No authenticated routes are configured.
- Before changes, canonical and sitemap hosts conflicted (`netlify.app`, apex and www); the batch URL was incorrectly November 2027; runtime metadata only was used for several routes; a fallback rewrite risked soft 404s; large unrelated files in `public/assets` were copied into deployments; three forms implied functionality that did not exist (contact, careers, footer newsletter).
- The supplied batch brief explicitly establishes Industrial Training November 2026 and separate Sadhana ECET 2027 search intent.

## Findings and implementation

- **P0:** Corrected the www canonical host and page canonicals, removed fake aggregate review rating and other unsupported Organization markup, replaced the 2027 batch URL, added a permanent legacy redirect, generated static route HTML and a noindex 404, and removed catch-all hosting rewrites.
- **P1:** Converted supplied posters to responsive WebP files (12.5 MB poster to about 752 KB at 1920×2880, plus 480/800/1280 widths; 2.09 MB Sadhana artwork to about 329 KB at 1024×1536, plus 480/768 widths). Added dimensions, `srcset`, descriptive filenames/alts, eager high-priority loading for the hero, and lazy loading for Sadhana. Mobile hero uses a dedicated 800px image source and places the poster before the text.
- **P1:** Kept the Industrial Training page focused on Diploma / Full Stack Java with AI / November 2026; Sadhana section links to `https://ecet.melmaa.tech/` and describes ECET 2027 as a separate product benefit. Added visible, content-supported FAQs but no FAQ schema.
- **P1:** Disabled blanket Vite `public` copying and added an explicit allowlist for 16 needed assets and five public metadata/hosting files. Build now contains 43 files totaling about 7.8 MB rather than copying 6,310 files / about 475 MB from `public/assets`.
- **P2:** Added crawlable anchor navigation, corrected section navigation from inner routes, improved page descriptions, removed hard-coded unverified student/course/success counters and company claims. Fixed contact and careers submission messaging to create a user-reviewed email draft; fixed footer email action and removed inert privacy/terms/cookie anchors and the fake newsletter form.
- **P2:** Added visible breadcrumbs and matching BreadcrumbList JSON-LD on training routes, Course JSON-LD on the program detail page, Organization and WebSite JSON-LD at root, www sitemap and robots file. Job listings and education-initiative logo artwork remain owner-verification items before deployment.
- **P3:** Removed invalid CSS font-face definitions with no source and a global crisp-edge setting that degraded photo rendering.

## Checklist legend

Each check is assigned exactly one status: **PASS**, **FAIL**, **NEEDS REVIEW**, or **NOT APPLICABLE**. “PASS” means verified in source or local build only when explicitly so stated. Production and account-owned services remain review items.

## 128-point audit

### 1. Crawlability

1. **PASS** — Configured public React routes are directly represented by generated route HTML.
2. **PASS** — Key route links render as anchor links rather than button-only controls.
3. **PASS** — Industrial Training page links to Trainings, Contact, Home and Sadhana.
4. **NEEDS REVIEW** — Production bot access and rendered HTML require deployment inspection.

### 2. Indexability

5. **PASS** — Public route HTML defaults to index/follow.
6. **PASS** — Generated 404 document has noindex metadata and no canonical.
7. **PASS** — Important images and bundles are outside authenticated paths.
8. **NEEDS REVIEW** — Verify HTTP status and index directives in production.

### 3. URL architecture

9. **PASS** — Public route paths are lowercase and descriptive.
10. **PASS** — Training detail slug identifies program and month/year.
11. **PASS** — Batch uses November 2026; ECET preparation remains 2027.
12. **NEEDS REVIEW** — Check external links and crawl depth after publishing.

### 4. Canonicalization

13. **PASS** — Root canonical uses `https://www.melmaa.tech/`.
14. **PASS** — Static HTML routes receive matching absolute canonicals.
15. **PASS** — Runtime metadata helper removes/restores canonical during client navigation.
16. **NEEDS REVIEW** — Confirm one canonical in live response and rendered document.

### 5. Redirects

17. **PASS** — Legacy November 2027 path redirects permanently to November 2026 in Vercel/Netlify config.
18. **PASS** — Apex host redirects to www in hosting config.
19. **PASS** — Trailing slash variants are normalized in Netlify redirects.
20. **NEEDS REVIEW** — Verify deployed redirect status, query preservation, chains and loops.

### 6. Sitemap

21. **PASS** — Sitemap XML parses and lists five www canonical routes.
22. **PASS** — Old November 2027 path is absent from sitemap.
23. **PASS** — Sitemap contains no unverified last-modified claims.
24. **NEEDS REVIEW** — Confirm live sitemap URL and Google processing.

### 7. Robots

25. **PASS** — Robots allows public crawl and points to www sitemap.
26. **PASS** — No relevant route or required asset is disallowed by current robots rules.
27. **NEEDS REVIEW** — Check production robots response and CDN headers.
28. **NOT APPLICABLE** — No private application routes exist in configured router.

### 8. Metadata

29. **PASS** — Root title and description describe Melmaa Tech services.
30. **PASS** — Careers, Contact, Trainings and course routes have route-specific static titles/descriptions.
31. **PASS** — Runtime route metadata is maintained for client navigation.
32. **NEEDS REVIEW** — Review title truncation and snippets in live SERPs after indexing.

### 9. Headings

33. **PASS** — Course detail route has one page H1 naming Industrial Training and November 2026.
34. **PASS** — Trainings route has one H1 and nested section headings.
35. **PASS** — Training detail sections use visible H2 headings; technology cards use H3.
36. **NEEDS REVIEW** — Run a full rendered heading audit across all routes after deployment.

### 10. Content quality

37. **PASS** — Program page states duration, audience, mode, curriculum and CTA.
38. **PASS** — Main content is available as HTML text, not only embedded in the poster.
39. **PASS** — Added FAQ answers correspond to program details in the supplied brief.
40. **NEEDS REVIEW** — Business owner should verify technologies, course terms, jobs, office hours and support claims.

### 11. Search intent

41. **PASS** — Training listing represents training discovery intent.
42. **PASS** — Detail page targets Industrial Training for Diploma students.
43. **PASS** — Sadhana section summarizes the relationship and links to the primary ECET property.
44. **NEEDS REVIEW** — Validate query demand and landing-page fit with Search Console data.

### 12. Keyword mapping

45. **PASS** — Course title/H1/body consistently use Industrial Training and November 2026.
46. **PASS** — Course text identifies Diploma Students and Full Stack Java with AI.
47. **PASS** — ECET 2027 is used only in the Sadhana benefit context on Melmaa Tech.
48. **NEEDS REVIEW** — Validate keyword mapping against actual query reports.

### 13. Internal linking

49. **PASS** — Header and footer link to Trainings.
50. **PASS** — Training card links to its full detail page.
51. **PASS** — Detail page links back to Trainings and Contact.
52. **NEEDS REVIEW** — Verify all navigation links after hosting rewrites/redirects.

### 14. External links

53. **PASS** — Sadhana ECET CTA targets the supplied `ecet.melmaa.tech` property.
54. **PASS** — New-tab Sadhana links use `rel="noopener noreferrer"`.
55. **NEEDS REVIEW** — Verify Sadhana, social, maps, booking and partner destinations remain live.
56. **NEEDS REVIEW** — Verify logo artwork shown on the training pages is authorized/accurate.

### 15. Image SEO

57. **PASS** — Industrial poster has descriptive filename and alt text.
58. **PASS** — Sadhana image has descriptive filename and contextual alt text.
59. **PASS** — Both posters have explicit intrinsic dimensions and responsive sources.
60. **PASS** — Main hero image is eager/high priority; lower-page image is lazy loaded.

### 16. Structured data

61. **PASS** — Root Organization JSON-LD has canonical ID/URL.
62. **PASS** — Root WebSite JSON-LD points to the Organization publisher.
63. **PASS** — Course JSON-LD is used only for the visible training program.
64. **PASS** — BreadcrumbList aligns with visible breadcrumb hierarchy; FAQ schema intentionally omitted.

### 17. Organization/entity

65. **PASS** — Name, URL and contact details use Melmaa Tech identity in source.
66. **PASS** — Schema `sameAs` links are drawn from existing official footer social destinations.
67. **FAIL** — A complete public privacy, terms and cookie policy is not present; footer now directs inquiries to email instead of dead placeholders.
68. **NEEDS REVIEW** — Confirm address, phone, founder identity, social profiles and business name against owner records.

### 18. Open Graph

69. **PASS** — Root OG title, description, URL and site name are provided.
70. **PASS** — Route HTML gets page-specific OG title/description/URL/image.
71. **PASS** — Course share image uses the course poster with dimensions and alt text.
72. **NEEDS REVIEW** — Verify social crawler fetch and rendered card after deployment.

### 19. Twitter metadata

73. **PASS** — Root has summary-large-image card/title/description/image.
74. **PASS** — Route HTML includes Twitter title/description/image.
75. **PASS** — Training page Twitter image is its poster.
76. **NEEDS REVIEW** — Confirm card rendering via the platform validators.

### 20. Mobile SEO

77. **PASS** — Viewport meta tag exists.
78. **PASS** — Course hero layout switches from single column to desktop grid responsively.
79. **PASS** — CTA buttons and navigation targets use touch-friendly minimum heights.
80. **NEEDS REVIEW** — 360px preview visibly shows the poster above the introduction; requested viewport sizes 375–1280px still need visual/manual regression review.

### 21. Core Web Vitals

81. **PASS** — Hero poster is responsive and compressed locally.
82. **PASS** — Explicit poster dimensions reduce image layout shift risk.
83. **NEEDS REVIEW** — LCP, INP and CLS have not been measured on deployed field data.
84. **NEEDS REVIEW** — Recheck after third-party Cal.com/embed initialization under production network conditions.

### 22. Performance

85. **PASS** — Build no longer copies all 6,310 public assets.
86. **PASS** — Optimized posters and responsive WebP variants are generated and referenced.
87. **PASS** — Vite output uses split route/vendor chunks and terser minification.
88. **NEEDS REVIEW** — Configure/verify production cache and compression headers; test PageSpeed.

### 23. Accessibility

89. **PASS** — Key page sections have headings/labels and images have alt attributes.
90. **PASS** — FAQs use keyboard-accessible native disclosure elements.
91. **PASS** — Navigation is rendered with anchors; controls have descriptive labels.
92. **NEEDS REVIEW** — Full keyboard/screen-reader/contrast audit remains outstanding.

### 24. Local SEO

93. **PASS** — Contact details and Eluru, Andhra Pradesh locality are present in root entity/schema.
94. **PASS** — Contact page has local contact information in the existing source.
95. **NEEDS REVIEW** — Verify address/coordinates/phone against Google Business Profile and NAP records.
96. **NEEDS REVIEW** — Keep local business markup out until eligibility and exact business facts are verified.

### 25. E-E-A-T

97. **PASS** — Removed fabricated aggregate review rating and unsupported counters/certification claims.
98. **PASS** — Program specifics are traceable to user-provided brief and poster.
99. **FAIL** — Public privacy, legal and editorial ownership pages are missing; no legal claims are implied by new SEO output.
100. **NEEDS REVIEW** — Verify founder bio, biographies, job listings, certificates and initiative affiliations.

### 26. Brand consistency

101. **PASS** — Root and route titles use Melmaa Tech name and www hostname.
102. **PASS** — ECET product relationship is visually and semantically separate.
103. **PASS** — Unsupported “approved by” text was softened to an artwork caption/initiative description.
104. **NEEDS REVIEW** — Business owner to approve supplied logos and cross-brand wording.

### 27. Training SEO

105. **PASS** — Training directory and course detail have separate purposes/URLs.
106. **PASS** — Course covers verified dates, audience, duration, mode and named curriculum.
107. **PASS** — CTA supports phone and contact enquiry.
108. **NEEDS REVIEW** — Confirm pricing, exact joining date, venue, eligibility conditions and admission status.

### 28. Sadhana / ECET SEO

109. **PASS** — Sadhana is linked to its own destination for ECET-specific searches.
110. **PASS** — Industrial Training November 2026 and ECET 2027 are not conflated.
111. **PASS** — Benefit text says free access applies to joining students and is governed by program terms.
112. **NEEDS REVIEW** — Verify exact eligibility, access duration and benefit terms with program owner.

### 29. Conversion SEO

113. **PASS** — Primary phone enquiry CTA and secondary contact CTA are provided.
114. **PASS** — Phone and email are clickable on page.
115. **PASS** — Contact and careers forms now accurately state that submission opens an email draft; they do not claim server submission.
116. **NEEDS REVIEW** — Test completion on desktop/mobile email clients and add a backend if direct form delivery is required.

### 30. Security

117. **PASS** — External Sadhana target uses noopener/noreferrer.
118. **PASS** — This change adds no credentials, secret keys or new external submission.
119. **NEEDS REVIEW** — Confirm deployed HTTPS enforcement and security headers.
120. **NEEDS REVIEW** — Review Vercel/Netlify project settings and preview deployment indexing controls.

### 31. Analytics

121. **FAIL** — No analytics tag/configuration exists in the inspected app source; referral/conversion measurement is unavailable.
122. **NEEDS REVIEW** — Confirm whether privacy-reviewed analytics is configured externally in hosting.
123. **NEEDS REVIEW** — Define and validate training-call, enquiry and Sadhana outbound click events if analytics is approved.
124. **NOT APPLICABLE** — No analytics event is claimed or sent by this implementation.

### 32. Search Console readiness

125. **PASS** — Sitemap and canonical URLs are syntactically ready and on www host.
126. **PASS** — Industrial Training route has a distinct pre-rendered title, description, canonical and social metadata.
127. **NEEDS REVIEW** — Search Console property ownership, sitemap submission and URL inspection require account access.
128. **NEEDS REVIEW** — Recheck indexing, rich-result report and queries after production rollout.

## Validation performed

- `npm run build` — **PASS**; Vite built and route prerender script generated `/careers`, `/contact`, `/trainings`, `/trainings/industrial-training-november-2026` plus noindex `/404.html`.
- Production output inventory — **PASS**; 43 files, approximately 7.42 MiB (7.78 MB), including the 16 allowlisted site images and required root metadata files; unrelated `.tmp`/XML files excluded.
- `npm run lint` — **PASS**, 0 errors; 7 existing React Fast Refresh warnings in shared UI components.
- `npx tsc -b` — **PASS**.
- Local production browser preview — **PASS**; training listing and detail routes rendered, both poster images loaded, mobile 360px view showed the course poster above the intro, and major content/CTA links were visible.
- Live host, mobile viewport matrix, broken-link crawling, Rich Results Test, Search Console and PageSpeed — **NEEDS REVIEW**, not verified here.

## Manual deployment checklist

- [ ] Review changed files and the 128-point findings; confirm the facts marked for owner review.
- [ ] Configure working form/newsletter intake or retain the clearly labeled email-draft behavior.
- [ ] Publish production build and hosting redirects/rewrites.
- [ ] Verify `https://www.melmaa.tech/`, Trainings and Industrial Training November 2026 on desktop and mobile.
- [ ] Verify both posters, the Sadhana destination, phone CTA, canonical tags, page titles, schemas, sitemap and robots.
- [ ] Verify legacy November 2027 redirect and apex-to-www redirect return one permanent hop.
- [ ] Add/verify privacy, terms and cookie policies and analytics only with owner-approved content/configuration.
- [ ] Submit sitemap and inspect the course URL in Google Search Console; request indexing when appropriate.
- [ ] Run PageSpeed Insights and structured-data validation; monitor Search Console and field CWV after indexing.
