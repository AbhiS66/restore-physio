import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import BlogFAQ from "../components/ui/BlogFAQ";
import Button from "../components/ui/Button";
import { ArrowRight, CheckIcon } from "../components/icons/Icons";
import { getServicePageBySlug, buildServicePageSchema } from "../data/servicePages";
import { SITE_URL } from "../data/locations";

/* ─── Hero ────────────────────────────────────────────────────────────── */
function ServiceHero({ page }) {
  return (
    <SectionWrapper id="hero" bg="bg-cloud" className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionLabel>Specialised Physiotherapy Service</SectionLabel>
        <RevealOnScroll>
          <h1 className="text-display text-charcoal mb-6">{page.heroHeading}</h1>
          <p className="text-body text-slate">{page.heroSubtext}</p>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Intro & Approach ────────────────────────────────────────────────── */
function ApproachSection({ page }) {
  return (
    <SectionWrapper id="approach" bg="bg-snow">
      <div className="max-w-3xl">
        {/* Intro */}
        <RevealOnScroll>
          <p className="text-body text-slate leading-relaxed mb-12">{page.intro}</p>
        </RevealOnScroll>

        {/* Approach heading */}
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">Our treatment approach</h2>
        </RevealOnScroll>

        {/* Approach steps */}
        <div className="space-y-6">
          {page.approachSteps.map((step, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-cloud rounded-2xl p-8 md:p-10 border border-charcoal/5">
                <div className="flex items-center gap-4 mb-3">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-deep text-snow text-xs font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="text-h3 text-charcoal">{step.heading}</h3>
                </div>
                <p className="text-sm text-slate leading-relaxed ml-12">{step.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Expected Outcomes ───────────────────────────────────────────────── */
function ExpectedOutcomes({ page }) {
  return (
    <SectionWrapper id="outcomes" bg="bg-cloud">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">What you can expect</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {page.expectedOutcomes.map((outcome, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className="flex items-start gap-3 bg-snow rounded-xl p-5 border border-charcoal/5">
                <span className="mt-0.5 shrink-0 text-primary-deep">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span className="text-sm text-slate">{outcome}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────────── */
function FAQSection({ page }) {
  return (
    <SectionWrapper id="faqs" bg="bg-snow">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">Frequently asked questions</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <BlogFAQ faqs={page.faqs} variant="default" />
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Related Services & Locations ────────────────────────────────────── */
function RelatedSection({ page }) {
  return (
    <SectionWrapper id="related" bg="bg-cloud">
      <div className="max-w-4xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">Related services & locations</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Related services */}
          <RevealOnScroll>
            <div>
              <h3 className="text-label text-slate mb-4">Related services</h3>
              <div className="flex flex-wrap gap-2">
                {page.relatedServices.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-2 rounded-full bg-snow border border-charcoal/10 text-sm text-charcoal hover:bg-primary hover:text-snow transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Related techniques */}
          {page.relatedTechniques && page.relatedTechniques.length > 0 && (
            <RevealOnScroll delay={0.1}>
              <div>
                <h3 className="text-label text-slate mb-4">Techniques we use</h3>
                <div className="flex flex-wrap gap-2">
                  {page.relatedTechniques.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="px-4 py-2 rounded-full bg-snow border border-charcoal/10 text-sm text-charcoal hover:bg-primary hover:text-snow transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Related locations */}
          <RevealOnScroll delay={0.2}>
            <div>
              <h3 className="text-label text-slate mb-4">Available in</h3>
              <div className="flex flex-wrap gap-2">
                {page.relatedLocations.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-2 rounded-full bg-primary-light text-primary-dark text-sm hover:bg-primary hover:text-snow transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Service-specific CTA ────────────────────────────────────────────── */
function ServiceCTA({ page }) {
  return (
    <SectionWrapper id="service-cta" bg="bg-primary-dark">
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-h1 text-snow mb-6">Ready to start your recovery?</h2>
          <p className="text-body text-snow/80 mb-10 max-w-lg mx-auto">
            Our {page.heroHeading.toLowerCase().split(":")[0]} program is evidence-based, individually tailored, and focused on measurable outcomes. Book your initial consultation today.
          </p>
          <div className="hidden md:block">
            <Button href="#contact" variant="light" size="lg">
              Book Your Consultation
              <ArrowRight />
            </Button>
          </div>
          <div className="block md:hidden">
            <Button href="tel:+917738556911" target="_blank" rel="noreferrer" variant="light" size="lg">
              Book Your Consultation
              <ArrowRight />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function ServiceDetailPage({ slug }) {
  const page = getServicePageBySlug(slug);

  if (!page) return null;

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={`${SITE_URL}${page.path}`}
        schema={buildServicePageSchema(page)}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: page.title.split("|")[0].trim(), url: page.path },
        ]}
      />
      <ServiceHero page={page} />
      <ApproachSection page={page} />
      <ExpectedOutcomes page={page} />
      <FAQSection page={page} />
      <RelatedSection page={page} />
      <ServiceCTA page={page} />
      <Contact />
    </>
  );
}