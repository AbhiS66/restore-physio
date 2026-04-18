import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { getLocationBySlug, SITE_URL } from "../data/locations";
import SEOHead from "../components/SEOHead";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Conditions from "../components/sections/Conditions";
import Testimonials from "../components/sections/Testimonials";
import WhyUs from "../components/sections/WhyUs";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import LocalSeoSections from "../components/sections/LocalSeoSections";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/icons/Icons";
import { testimonials } from "../data/testimonials";

/* ─── Animated Background (matches Hero) ────────────────────────────── */
function AnimatedBackground({ reduceMotion }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cloud via-primary-light/30 to-cloud" />
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-primary/[0.06] blur-3xl"
        animate={reduceMotion ? { opacity: 0.8 } : { x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={reduceMotion ? { duration: 0.2 } : { duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-sand/[0.04] blur-3xl"
        animate={reduceMotion ? { opacity: 0.75 } : { x: [0, -20, 30, 0], y: [0, 30, -20, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={reduceMotion ? { duration: 0.2 } : { duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

const lineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─── Location-specific Hero ─────────────────────────────────────────── */
function LocationHero({ location }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-x-hidden scrollbar-hide"
      id="hero"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <AnimatedBackground reduceMotion={reduceMotion} />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 w-full pt-32 pb-20 md:pt-40 md:pb-32"
        style={{ opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          <motion.span
            className="text-label text-primary-deep block mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {location.heroLabel}
          </motion.span>

          <h1 className="text-display text-charcoal mb-8">
            {location.heroHeadlines.map((line, i) => (
              <motion.span
                key={i}
                className={`block${i === location.heroHeadlines.length - 1 ? " text-primary-deep" : ""}`}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-body text-slate max-w-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {location.heroSubtext}
          </motion.p>

          {/* Nearby areas — local SEO keywords rendered visibly */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {location.nearbyAreas.map((area) => (
              <span
                key={area}
                className="text-xs text-slate bg-charcoal/5 rounded-full px-3 py-1"
              >
                Near {area}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="#contact" size="lg">
              Book Consultation
              <ArrowRight />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Our Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 h-px bg-charcoal/10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
}

/* ─── Build Schema.org LocalBusiness for a location ─────────────────── */
function buildLocationSchema(location) {
  const baseBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Adapt Physiotherapy — ${location.name}`,
    url: location.canonical,
    logo: `${SITE_URL}/favicon.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: location.metaDescription,
    telephone: "+917738556911",
    email: location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.fullAddress,
      addressLocality: location.name,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.geo.lat,
      longitude: location.geo.lng,
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
    medicalSpecialty: ["Physiotherapy", "Sports Medicine", "Neurological Physiotherapy"],
    areaServed: [
      { "@type": "Neighborhood", name: location.name },
      ...location.nearbyAreas.map((area) => ({ "@type": "Neighborhood", name: area })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: location.review.ratingValue,
      reviewCount: location.review.reviewCount,
      bestRating: location.review.bestRating,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: `Adapt Physiotherapy — ${location.name}`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: location.review.ratingValue,
      bestRating: location.review.bestRating,
    },
    author: {
      "@type": "Person",
      name: location.review.authorName,
    },
    reviewBody: location.review.reviewBody,
  };

  const testimonialReviewSchema = testimonials.slice(0, 2).map((item) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: `Adapt Physiotherapy — ${location.name}`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(item.rating),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: item.name,
    },
    reviewBody: item.quote,
  }));

  return [baseBusinessSchema, faqSchema, reviewSchema, ...testimonialReviewSchema];
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function LocationPage({ slug }) {
  const location = getLocationBySlug(slug);

  if (!location) return null;

  return (
    <>
      <SEOHead
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={location.canonical}
        schema={buildLocationSchema(location)}
      />
      <LocationHero location={location} />
      <About />
      <Services />
      <Conditions />
      <LocalSeoSections location={location} />
      <Testimonials />
      <WhyUs />
      <CTASection />
      <Contact locationData={location} />
    </>
  );
}
