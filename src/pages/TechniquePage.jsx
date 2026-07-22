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
import { getTechniqueBySlug, buildTechniqueSchema } from "../data/techniques";
import { SITE_URL } from "../data/locations";

/* ─── Hero ────────────────────────────────────────────────────────────── */
function TechniqueHero({ page }) {
  return (
    <SectionWrapper id="hero" bg="bg-cloud" className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionLabel>Therapeutic Technique</SectionLabel>
        <RevealOnScroll>
          <h1 className="text-display text-charcoal mb-6">{page.heroHeading}</h1>
          <p className="text-body text-slate">{page.heroSubtext}</p>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── What Is It ──────────────────────────────────────────────────────── */
function WhatIsIt({ page }) {
  return (
    <SectionWrapper id="what-is-it" bg="bg-snow">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-6">What is {page.slug === "ift" ? "IFT" : page.slug === "k-taping" ? "K-Taping" : page.slug === "tens-therapy" ? "TENS" : page.heroHeading.split(":")[0]}?</h2>
          <p className="text-body text-slate leading-relaxed">{page.whatIsIt}</p>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── How It Works ────────────────────────────────────────────────────── */
function HowItWorks({ page }) {
  return (
    <SectionWrapper id="how-it-works" bg="bg-cloud">
      <div className="max-w-3xl">
        <SectionLabel>The Science</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">How it works</h2>
        </RevealOnScroll>
        <div className="space-y-8">
          {page.howItWorks.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-snow rounded-2xl p-8 md:p-10 border border-charcoal/5">
                <h3 className="text-h3 text-charcoal mb-3">{item.heading}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Benefits + Conditions ──────────────────────────────────────────── */
function BenefitsConditions({ page }) {
  return (
    <SectionWrapper id="benefits" bg="bg-snow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Benefits */}
        <RevealOnScroll>
          <div>
            <h2 className="text-h2 text-charcoal mb-6">Key benefits</h2>
            <ul className="space-y-3">
              {page.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-primary-deep">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                  <span className="text-sm text-slate">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Conditions treated */}
        <RevealOnScroll delay={0.1}>
          <div>
            <h2 className="text-h2 text-charcoal mb-6">Conditions treated</h2>
            <ul className="space-y-3">
              {page.conditionsTreated.map((condition, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-deep shrink-0" />
                  <span className="text-sm text-slate">{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Scientific References ───────────────────────────────────────────── */
function ScientificRefs({ page }) {
  if (!page.scientificRefs || page.scientificRefs.length === 0) return null;

  return (
    <SectionWrapper id="references" bg="bg-cloud">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-4">Scientific references</h2>
          <p className="text-sm text-slate mb-6">
            The techniques we use are supported by published clinical research.
          </p>
          <ul className="space-y-2 text-xs text-slate/70">
            {page.scientificRefs.map((ref, i) => (
              <li key={i}>• {ref}</li>
            ))}
          </ul>
        </RevealOnScroll>
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
          <h2 className="text-h2 text-charcoal mb-8">Frequently asked questions about this technique</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <BlogFAQ faqs={page.faqs} variant="primary" />
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Related Services ────────────────────────────────────────────────── */
function RelatedServices({ page }) {
  if (!page.relatedServices || page.relatedServices.length === 0) return null;

  return (
    <SectionWrapper id="related-services" bg="bg-snow">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">Services that use this technique</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {page.relatedServices.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full bg-cloud border border-charcoal/10 text-sm text-charcoal hover:bg-primary hover:text-snow transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Bottom CTA ──────────────────────────────────────────────────────── */
function TechniqueCTA() {
  return (
    <SectionWrapper id="technique-cta" bg="bg-primary-dark">
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-h1 text-snow mb-6">Want to know if this technique is right for you?</h2>
          <p className="text-body text-snow/80 mb-10 max-w-lg mx-auto">
            Book a consultation. We'll assess your condition and recommend the most effective treatment approach - whether it's this technique or a combination tailored to your needs.
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
export default function TechniquePage({ slug }) {
  const page = getTechniqueBySlug(slug);

  if (!page) return null;

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={`${SITE_URL}${page.path}`}
        schema={buildTechniqueSchema(page)}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Techniques", url: "" },
          { name: page.title.split("|")[0].trim(), url: page.path },
        ]}
      />
      <TechniqueHero page={page} />
      <WhatIsIt page={page} />
      <HowItWorks page={page} />
      <BenefitsConditions page={page} />
      <ScientificRefs page={page} />
      <RelatedServices page={page} />
      <FAQSection page={page} />
      <TechniqueCTA />
      <Contact />
    </>
  );
}