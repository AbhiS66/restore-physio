import SEOHead from "../components/SEOHead";
import GuideLine from "../components/ui/GuideLine";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Conditions from "../components/sections/Conditions";
import Testimonials from "../components/sections/Testimonials";
import WhyUs from "../components/sections/WhyUs";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import { SITE_URL, SAME_AS_URLS } from "../data/locations";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Adapt Physiotherapy",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Premium evidence-based physiotherapy in Mumbai. Neuro, ortho, cardio pulmonary physiotherapy & home visits in Powai and Vikhroli.",
  telephone: "+917738556911",
  email: "adaptrehabilitation@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Galleria Shopping Mall, Central Ave, Hiranandani Gardens",
    addressLocality: "Powai",
    addressRegion: "Maharashtra",
    postalCode: "400076",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.1176,
    longitude: 72.906,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹",
  medicalSpecialty: [
    "Physiotherapy",
    "Sports Medicine",
    "Neurological Physiotherapy",
    "Orthopaedic Physiotherapy",
  ],
  sameAs: SAME_AS_URLS,
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "Neighborhood", name: "Powai" },
    { "@type": "Neighborhood", name: "Vikhroli" },
    { "@type": "Neighborhood", name: "Hiranandani Gardens" },
  ],
};

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Adapt Physiotherapy - Transforming Lives | Mumbai"
        description="Premium evidence-based physiotherapy in Mumbai. Neuro, ortho, cardio pulmonary physiotherapy & home visits in Powai and Vikhroli. Book your consultation today."
        canonical={SITE_URL}
        schema={homeSchema}
      />
      <div className="relative">
        <GuideLine />
        <Hero />
        <About />
        <Services />
        <Conditions />
        <Testimonials />
        <WhyUs />
        <CTASection />
        <Contact />
      </div>
    </>
  );
}
