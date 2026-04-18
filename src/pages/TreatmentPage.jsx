import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import Contact from "../components/sections/Contact";
import CTASection from "../components/sections/CTASection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import {
  buildTreatmentSchema,
  getTreatmentPageBySlug,
  treatmentFaqs,
} from "../data/contentPages";
import { SITE_URL } from "../data/locations";

export default function TreatmentPage({ slug }) {
  const page = getTreatmentPageBySlug(slug);

  if (!page) return null;

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={`${SITE_URL}${page.path}`}
        schema={buildTreatmentSchema(page)}
      />

      <SectionWrapper id="hero" bg="bg-cloud">
        <div className="max-w-3xl pt-24 md:pt-32">
          <SectionLabel>Specialized Physiotherapy Page</SectionLabel>
          <RevealOnScroll>
            <h1 className="text-display text-charcoal mb-6">{page.heading}</h1>
            <p className="text-body text-slate">{page.intro}</p>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper id="approach" bg="bg-snow">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-10 items-start">
          <RevealOnScroll>
            <div className="bg-cloud rounded-2xl p-8 md:p-10">
              <h2 className="text-h2 text-charcoal mb-6">What your treatment includes</h2>
              <ul className="space-y-4 text-slate text-sm">
                {page.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-deep" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="bg-primary-light/60 rounded-2xl p-8 md:p-10 border border-primary/10">
              <p className="text-label text-primary-dark mb-4">Quick FAQ</p>
              <div className="space-y-5">
                {treatmentFaqs.slice(0, 2).map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">{faq.question}</h3>
                    <p className="text-sm text-slate">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper id="nearby-links" bg="bg-cloud">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <h2 className="text-h2 text-charcoal mb-3">Also serving nearby areas: Vikhroli, Ghatkopar</h2>
            <p className="text-body text-slate mb-8">
              Explore our location pages and related treatment guides to find care closest to you.
            </p>
          </RevealOnScroll>
          <div className="flex flex-wrap gap-3">
            {page.relatedLocations.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full bg-snow border border-charcoal/10 text-sm text-charcoal hover:bg-charcoal hover:text-snow transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
      <Contact />
    </>
  );
}
