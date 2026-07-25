// Unified route registry - single source of truth for all page routes.
// Exports route records for createBrowserRouter (used by vite-react-ssg).

import { locations } from "./locations";
import { treatmentPages } from "./contentPages";
import { techniquePages } from "./techniques";
import { servicePages } from "./servicePages";
import { blogPages } from "./blogPages";
import { landingPages } from "./landingPages";

// Import page components
import LocationPage from "../pages/LocationPage";
import TreatmentPage from "../pages/TreatmentPage";
import TechniquePage from "../pages/TechniquePage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import BlogPage from "../pages/BlogPage";
import BlogIndexPage from "../pages/BlogIndexPage";
import LandingPage from "../pages/LandingPage";
import TeamPage from "../pages/TeamPage";

// Layout
import AppShell from "../AppShell";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

// ─── Build Routes Array ──────────────────────────────────────────────

const locationRoutes = locations.map((l) => ({
  path: `/physiotherapy-in-${l.slug}`,
  slug: l.slug,
  pageType: "location",
}));

const treatmentRoutes = treatmentPages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "treatment",
}));

const techniqueRoutes = techniquePages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "technique",
}));

const serviceRoutes = servicePages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "service",
}));

const blogRoutes = blogPages.map((p) => ({
  path: p.path,
  slug: p.slug,
  pageType: "blog",
}));

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
  { path: "/blog", pageType: "blog-index" },
];

// ─── Page Component Map ──────────────────────────────────────────────

const pageComponentMap = {
  location: LocationPage,
  treatment: TreatmentPage,
  technique: TechniquePage,
  service: ServiceDetailPage,
  blog: BlogPage,
  landing: LandingPage,
  team: TeamPage,
  "blog-index": BlogIndexPage,
};

// ─── Build React Router Route Records ───────────────────────────────

const dynamicRoutes = allRoutes
  .filter((r) => r.path !== "/")
  .map((r) => {
    const Component = pageComponentMap[r.pageType];
    if (!Component) return null;
    return {
      path: r.path,
      element: r.slug ? <Component slug={r.slug} /> : <Component />,
    };
  })
  .filter(Boolean);

export const routes = [
  {
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      ...dynamicRoutes,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────

export function getTotalRouteCount() {
  return allRoutes.length;
}

export function getRouteByPath(path) {
  return allRoutes.find((r) => r.path === path);
}