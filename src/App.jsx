import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ConversionHooks from "./components/ui/ConversionHooks";
import ScrollToTop from "./components/utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { allRoutes, pageComponentMap } from "./data/routes";

export default function App() {
  return (
    <div className="grain overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-deep focus:text-snow focus:rounded-lg focus:text-sm focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="overflow-x-hidden">
        <Routes>
          {/* Home - handled separately (no slug) */}
          <Route path="/" element={<HomePage />} />

          {/* All other routes - generated dynamically from data */}
          {allRoutes
            .filter((r) => r.path !== "/")
            .map((r) => {
              const Component = pageComponentMap[r.pageType];
              if (!Component) return null;

              return (
                <Route
                  key={r.path}
                  path={r.path}
                  element={
                    r.slug ? (
                      <Component slug={r.slug} />
                    ) : (
                      <Component />
                    )
                  }
                />
              );
            })}

          {/* Catch-all: 404 page for unknown routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ConversionHooks />
    </div>
  );
}