import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SectionWrapper from "../components/layout/SectionWrapper";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/icons/Icons";
import { SITE_URL } from "../data/locations";

const notFoundSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "404 - Page Not Found | Adapt Physiotherapy",
  url: `${SITE_URL}/404`,
  description:
    "The page you're looking for doesn't exist at Adapt Physiotherapy. Browse our physiotherapy services or visit our homepage.",
  about: "Error page",
};

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | Adapt Physiotherapy"
        description="The page you're looking for doesn't exist or has been moved. Explore expert physiotherapy services in Mumbai — browse back pain, knee pain, sports injury rehab, and home visit physiotherapy."
        canonical={SITE_URL}
        schema={notFoundSchema}
      />

      <SectionWrapper id="not-found" bg="bg-cloud" className="min-h-screen flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <span className="text-[8rem] md:text-[10rem] font-serif text-primary-deep/20 leading-none block mb-4">
            404
          </span>
          <h1 className="text-display text-charcoal mb-4">Page not found</h1>
          <p className="text-body text-slate mb-10 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Back to Home
                <ArrowRight />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="secondary" size="lg">
                Browse Our Guides
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}