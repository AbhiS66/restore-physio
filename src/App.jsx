import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ConversionHooks from "./components/ui/ConversionHooks";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import TreatmentPage from "./pages/TreatmentPage";

export default function App() {
  return (
    <div className="grain overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/physiotherapy-in-powai" element={<LocationPage slug="powai" />} />
          <Route path="/physiotherapy-in-vikhroli" element={<LocationPage slug="vikhroli" />} />
          <Route path="/physiotherapy-in-hiranandani" element={<LocationPage slug="hiranandani" />} />
          <Route path="/back-pain-treatment-powai" element={<TreatmentPage slug="back-pain-treatment-powai" />} />
          <Route path="/sports-injury-rehab-mumbai" element={<TreatmentPage slug="sports-injury-rehab-mumbai" />} />
          <Route path="/knee-pain-physio-powai" element={<TreatmentPage slug="knee-pain-physio-powai" />} />
          {/* Catch-all: redirect unknown routes back to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ConversionHooks />
    </div>
  );
}
