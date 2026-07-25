import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ConversionHooks from "./components/ui/ConversionHooks";
import ScrollToTop from "./components/utils/ScrollToTop";

export default function AppShell() {
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
        <Outlet />
      </main>
      <Footer />
      <ConversionHooks />
    </div>
  );
}