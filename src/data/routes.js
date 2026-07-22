// Unified route registry - single source of truth for all page routes.
// App.jsx maps over allRoutes to generate <Route> elements dynamically.

import { locations } from "./locations";
import { treatmentPages } from "./contentPages";
import { techniquePages } from "./techniques";
import { servicePages } from "./servicePages";
import { blogPages } from "./blogPages";
import { landingPages } from "./landingPages";

// Import page components for the component map
import LocationPage from "../pages/LocationPage";
import TreatmentPage from "../pages/TreatmentPage";
import TechniquePage from "../pages/TechniquePage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import BlogPage from "../pages/BlogPage";
import LandingPage from "../pages/LandingPage";
import TeamPage from "../pages/TeamPage";

// ─── Build Routes Array ──────────────────────────────────────────────

/**
 * Location routes: /physiotherapy-in-<slug>
 * Path is derived from the slug. The locationRouteMap in locations.js
 * maps slug → path; we use that for consistency.
 *
 * NOTE: Only locations with full data entries in the locations array
 * get a route. If a slug is in locationRouteMap but has no data entry,
 * it will 404 at the page level (getLocationBySlug returns null).
 */
const locationRoutes = locations.map((l) => ({
  path: `/physiotherapy-in-${l.slug}`,
  slug: l.slug,
  pageType: "location",
}));

/** Existing treatment pages from contentPages.js */
const treatmentRoutes = treatmentPages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "treatment",
}));

/** New technique pages from techniques.js */
const techniqueRoutes = techniquePages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "technique",
}));

/** New service detail pages from servicePages.js */
const serviceRoutes = servicePages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "service",
}));

/** New blog pages from blogPages.js */
const blogRoutes = blogPages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "blog",
}));

/** New landing pages from landingPages.js */
const landingRoutes = landingPages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "landing",
}));

// ─── All Routes (order matters - more specific before catch-all) ────

export const allRoutes = [
  { path: "/", pageType: "home" },
  ...locationRoutes,
  ...treatmentRoutes,
  ...techniqueRoutes,
  ...serviceRoutes,
  ...blogRoutes,
  ...landingRoutes,
  { path: "/team", pageType: "team" },
];

// ─── Page Component Map ──────────────────────────────────────────────

export const pageComponentMap = {
  home: null, // HomePage is handled separately (no slug)
  location: LocationPage,
  treatment: TreatmentPage,
  technique: TechniquePage,
  service: ServiceDetailPage,
  blog: BlogPage,
  landing: LandingPage,
  team: TeamPage,
};

// ─── Helpers ─────────────────────────────────────────────────────────

/** Get the total count of all registered routes (excluding catch-all) */
export function getTotalRouteCount() {
  return allRoutes.length;
}

/** Find a route entry by path */
export function getRouteByPath(path) {
  return allRoutes.find((r) => r.path === path);
}