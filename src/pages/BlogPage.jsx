import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import BlogFAQ from "../components/ui/BlogFAQ";
import { getBlogPageBySlug, buildBlogPageSchema } from "../data/blogPages";
import { SITE_URL } from "../data/locations";

/* ─── Article Hero ────────────────────────────────────────────────────── */
function BlogHero({ page }) {
  return (
    <SectionWrapper id="hero" bg="bg-cloud" className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionLabel>Physiotherapy Guide</SectionLabel>
        <RevealOnScroll>
          <h1 className="text-display text-charcoal mb-6">{page.heroHeading}</h1>
          <p className="text-body text-slate mb-4">{page.heroSubtext}</p>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Rich Prose Body ─────────────────────────────────────────────────── */
function ProseSection({ page }) {
  return (
    <SectionWrapper id="article" bg="bg-snow">
      <div className="max-w-3xl">
        {/* Intro */}
        <RevealOnScroll>
          <p className="text-body text-slate leading-relaxed mb-10">{page.intro}</p>
        </RevealOnScroll>

        {/* Article sections */}
        <div className="space-y-10">
          {page.sections.map((section, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <div>
                <h2 className="text-h2 text-charcoal mb-4">{section.heading}</h2>
                <p className="text-sm text-slate leading-relaxed">{section.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── FAQ Accordion ───────────────────────────────────────────────────── */
function FAQSection({ page }) {
  return (
    <SectionWrapper id="faqs" bg="bg-cloud">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">Frequently Asked Questions</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <BlogFAQ faqs={page.faqs} variant="default" />
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Related Links ───────────────────────────────────────────────────── */
function RelatedSection({ page }) {
  return (
    <SectionWrapper id="related" bg="bg-snow">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-3">Continue reading</h2>
          <p className="text-body text-slate mb-8">
            Explore related articles and services that may be helpful for your situation.
          </p>
        </RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          {page.relatedLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-2 rounded-full bg-cloud border border-charcoal/10 text-sm text-charcoal hover:bg-charcoal hover:text-snow transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function BlogPage({ slug }) {
  const page = getBlogPageBySlug(slug);

  if (!page) return null;

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={`${SITE_URL}${page.path}`}
        schema={buildBlogPageSchema(page)}
      />
      <BlogHero page={page} />
      <ProseSection page={page} />
      <FAQSection page={page} />
      <RelatedSection page={page} />
      <CTASection />
      <Contact />
    </>
  );
}