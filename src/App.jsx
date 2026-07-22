import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ConversionHooks from "./components/ui/ConversionHooks";
import ScrollToTop from "./components/utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import { allRoutes, pageComponentMap } from "./data/routes";

export default function App() {
  return (
    <div className="grain overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="overflow-x-hidden">
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

          {/* Catch-all: redirect unknown routes back to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ConversionHooks />
    </div>
  );
}