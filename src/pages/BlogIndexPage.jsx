import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/icons/Icons";
import { blogPages } from "../data/blogPages";
import { SITE_URL } from "../data/locations";

const indexSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Physiotherapy Blog & Guides | Adapt Physiotherapy Mumbai",
  url: `${SITE_URL}/blog`,
  description:
    "Read expert physiotherapy guides, cost breakdowns, and recovery tips from Adapt Physiotherapy, Mumbai. Evidence-based articles on home physio, post-surgery rehab, and more.",
  about: ["Physiotherapy", "Home Health Care", "Rehabilitation"],
  audience: { "@type": "MedicalAudience", audienceType: "Patients and Caregivers" },
  hasPart: blogPages.map((page) => ({
    "@type": "MedicalWebPage",
    name: page.title,
    url: `${SITE_URL}${page.path}`,
    description: page.metaDescription,
  })),
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <>
      <SEOHead
        title="Physiotherapy Blog & Guides | Adapt Physiotherapy Mumbai"
        description="Read expert physiotherapy guides, cost breakdowns, and recovery tips from Adapt Physiotherapy, Mumbai. Evidence-based articles on home physio, post-surgery rehab, and more."
        canonical={`${SITE_URL}/blog`}
        schema={indexSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      <SectionWrapper id="hero" bg="bg-cloud" className="pt-32 md:pt-40">
        <div className="max-w-3xl">
          <SectionLabel>Blog & Guides</SectionLabel>
          <RevealOnScroll>
            <h1 className="text-display text-charcoal mb-6">Physiotherapy Guides for Mumbai</h1>
            <p className="text-body text-slate max-w-lg">
              Evidence-based articles on home physiotherapy costs, post-surgery recovery, and expert tips — written by the Adapt Physiotherapy team for the Mumbai community.
            </p>
          </RevealOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper id="articles" bg="bg-snow">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPages.map((page, i) => (
              <RevealOnScroll key={page.slug} delay={i * 0.06}>
                <Link
                  to={page.path}
                  className="block h-full group bg-cloud rounded-2xl p-8 border border-charcoal/5 hover:shadow-md transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    {/* Category tag */}
                    <span className="text-xs text-primary-deep font-medium mb-3 uppercase tracking-wider">
                      Physiotherapy Guide
                    </span>

                    {/* Title */}
                    <h2 className="text-h3 text-charcoal mb-3 group-hover:text-primary-deep transition-colors">
                      {page.heroHeading}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-slate leading-relaxed mb-4 flex-1 line-clamp-3">
                      {page.heroSubtext}
                    </p>

                    {/* Date & Read more */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-charcoal/5">
                      <span className="text-xs text-slate/60">
                        {page.datePublished ? formatDate(page.datePublished) : ""}
                      </span>
                      <span className="text-sm text-primary-deep font-medium group-hover:underline inline-flex items-center gap-1">
                        Read more <ArrowRight />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
      <Contact />
    </>
  );
}