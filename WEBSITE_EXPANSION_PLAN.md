# Plan: Restore-Physio Website - 34 New Pages + Architecture Restructure

## Context

The Adapt Physiotherapy website (Vite + React SPA, `react-router-dom`, Tailwind v4) needs ~34 new pages covering hyper-local SEO, service details, therapeutic techniques, blog/Q&A content, a team page, and a GBP landing page. The current architecture hardcodes routes in `App.jsx` and only has 2 page templates (`LocationPage`, `TreatmentPage`). This plan restructures the site to scale dynamically and adds new reusable templates.

**Duplicate handling:** 3 requested hyper-local pages (Vikhroli, Hiranandani, Powai) already exist - skip duplicates, create only the 10 truly new ones.

**Team data:** Will be provided separately; use placeholder content for now.

---

## Page Inventory (34 total)

### Hyper-Local SEO (10) - reuses `LocationPage` template
Physiotherapy in: Bhandup, Kanjurmarg, Chandivali, Ghatkopar, Saki Naka, Marol Naka, L&T Powai, Raheja Vihar, Lake Homes, Hiranandani Highlands, Nahar

### Blog/Q&A (6) - new `BlogPage` template
Cost of Home Physiotherapy in: Mumbai, Thane, Powai, Saki Naka, Marol Naka
+ Home Physiotherapy after Knee Surgery (Post-Sx)

### Therapeutic Techniques (7) - new `TechniquePage` template
IFT, K-Taping, Shockwave Therapy (ESWT), TENS Therapy, Ultrasound Therapy, Laser Therapy, Manual Therapy

### Service Details (9) - new `ServiceDetailPage` template
Home Visits, Knee Pain, Back Pain, Neck Pain, Parkinson's Rehab, Stroke/Hemiplegia Rehab, Knee TKR Rehab, Post-Surgery Rehab, Paediatric Physiotherapy (Down Syndrome)

### Other (2)
- Meet the Team - new `TeamPage` template
- Home Physiotherapy in Powai (GBP Landing) - new `LandingPage` template

---

## Architecture Changes

### 1. Dynamic Route Generation in `App.jsx`

Replace hardcoded `<Route>` elements with map-based generation from data arrays. Each data file exports a `routes` array with `{ path, slug, pageType }` so `App.jsx` just iterates:

```jsx
{allRoutes.map(r => {
  const Component = pageComponentMap[r.pageType];
  return <Route key={r.path} path={r.path} element={<Component slug={r.slug} />} />;
})}
```

This keeps `App.jsx` ~20 lines instead of 100+.

### 2. New Page Templates (4 new + 2 existing)

| Template | File | Used By | Key Sections |
|----------|------|---------|--------------|
| `LocationPage` | exists in `pages/LocationPage.jsx` | 10 hyper-local pages | LocationHero, About, Services, Conditions, LocalSeoSections, Testimonials, WhyUs, CTA, Contact |
| `TreatmentPage` | exists in `pages/TreatmentPage.jsx` | ~3 existing (unchanged) | Hero, Treatment points, FAQ sidebar, Related links |
| **`BlogPage`** | NEW `pages/BlogPage.jsx` | 6 Q&A/blog pages | Article hero, Rich prose body, FAQ accordion, Related links, CTA |
| **`TechniquePage`** | NEW `pages/TechniquePage.jsx` | 7 technique pages | Hero, What/How/Benefits/Conditions sections, Scientific references, FAQ, CTA |
| **`ServiceDetailPage`** | NEW `pages/ServiceDetailPage.jsx` | 9 service pages | Hero with condition focus, Detailed approach breakdown, Treatment phases, Expected outcomes, FAQ, Related services, CTA |
| **`TeamPage`** | NEW `pages/TeamPage.jsx` | 1 team page | Hero, Team grid (photo cards with bios), Credentials section, CTA |
| **`LandingPage`** | NEW `pages/LandingPage.jsx` | 1 GBP landing page | Conversion hero, Pain points, Benefits bullets, Trust signals, Pricing transparency, Strong CTA |

### 3. New/Expanded Data Files

| File | Status | Contents |
|------|--------|----------|
| `data/locations.js` | **Expand** | Add 10 new hyper-local location objects following existing pattern |
| `data/blogPages.js` | **New** | 6 blog entries: slug, path, title, metaDescription, heroHeading, intro, sections (array of {heading, body}), faqs, relatedLinks |
| `data/techniques.js` | **New** | 7 technique entries: slug, path, title, metaDescription, heroHeading, whatIsIt, howItWorks, benefits[], conditionsTreated[], faqs, scientificRefs |
| `data/servicePages.js` | **New** | 9 service entries: slug, path, title, metaDescription, heroHeading, intro, approachSteps[], expectedOutcomes[], faqs, relatedServices[], relatedLocations[] |
| `data/team.js` | **New** | 4 team entries: name, role, qualifications, bio, photoUrl (placeholder) |
| `data/landingPages.js` | **New** | 1 landing entry: all fields for GBP conversion page |
| `data/routes.js` | **New** | Aggregator: imports all data files, exports unified `allRoutes` array + `pageComponentMap` |

### 4. Component Additions

- **`BlogFAQ`** - Reusable FAQ accordion component (used across BlogPage, TechniquePage, ServiceDetailPage)
- **`RichContent`** - Prose-styled content section for long-form pages
- Small tweaks to existing `Navbar` and `Footer` to link new key pages

---

## Implementation Phases

### Phase 1: Foundation (Data + Routes + Templates)

**Files to create:**
- `src/data/team.js` - Team member placeholder data
- `src/data/techniques.js` - 7 techniques data
- `src/data/servicePages.js` - 9 services data
- `src/data/blogPages.js` - 6 blog entries data
- `src/data/landingPages.js` - GBP landing page data
- `src/data/routes.js` - Route aggregator/registry
- `src/components/ui/BlogFAQ.jsx` - Reusable FAQ accordion

**Files to modify:**
- `src/data/locations.js` - Add 10 new hyper-local location entries
- `src/App.jsx` - Refactor to dynamic route generation

**Templates to create:**
- `src/pages/BlogPage.jsx`
- `src/pages/TechniquePage.jsx`
- `src/pages/ServiceDetailPage.jsx`
- `src/pages/TeamPage.jsx`
- `src/pages/LandingPage.jsx`

### Phase 2: Content Pages (Service Details + Techniques + Team)

- Wire up 9 service detail routes/pages
- Wire up 7 technique routes/pages
- Wire up Team page route
- Update Footer with service/technique links

### Phase 3: SEO Pages (Blog/Q&A + Hyper-Local + Landing)

- Wire up 6 blog/Q&A routes/pages
- Wire up 10 hyper-local routes/pages
- Wire up GBP landing page route
- Cross-link blog pages to/from location pages
- Cross-link technique pages to/from service pages

### Phase 4: Integration & Polish

- Update Navbar with additional links or dropdown
- Update Footer with all new page categories
- Add internal linking between related pages (SEO silos)
- Verify all Schema.org structured data on each page type
- Test all routes render correctly

---

## Key Design Decisions

1. **Dynamic routes over hardcoding** - Single source of truth in data files; adding a page = adding a data entry + route registration (no App.jsx edits).

2. **Template reuse over one-off pages** - Every new page fits one of 6 templates. No ad-hoc page components.

3. **Data-driven SEO** - Each data entry carries its own `metaTitle`, `metaDescription`, `canonical`, and structured data config. `SEOHead` already supports this pattern.

4. **Existing patterns preserved** - All new templates follow the same section composition pattern (`SectionWrapper` + `RevealOnScroll` + `SectionLabel`) and use the same design tokens (Tailwind v4 theme, fluid typography classes).

5. **Hyper-local pages share LocationPage** - The 10 new hyper-local pages reuse the existing `LocationPage` component without modification. Only data entries are added to `locations.js`.

6. **Service detail pages are distinct from treatment pages** - Existing treatment pages (back-pain-treatment-powai, knee-pain-physio-powai) are location-specific. New service detail pages (/services/back-pain, /services/knee-pain) are general/evergreen, not tied to one location.

---

## Verification

- `npm run dev` - Confirm all 34+ routes resolve without 404
- Spot-check 5 pages across different templates for correct rendering
- Validate Schema.org structured data via Google Rich Results Test on 3 page types
- Check mobile rendering of new templates (Navbar mobile menu, accordion interactions)
- Run Lighthouse on a hyper-local page and a blog page to verify SEO head tags