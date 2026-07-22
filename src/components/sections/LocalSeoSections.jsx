import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import RevealOnScroll from "../ui/RevealOnScroll";

function Card({ title, children }) {
  return (
    <div className="bg-snow rounded-2xl p-8 md:p-10 shadow-sm border border-charcoal/5 h-full flex flex-col">
      <h3 className="text-h3 text-charcoal mb-4">{title}</h3>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function LocalSeoSections({ location }) {
  return (
    <SectionWrapper id="local-seo" bg="bg-cloud">
      <div className="mb-12 md:mb-16 max-w-2xl">
        <SectionLabel>Local Physiotherapy in Mumbai</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h1 text-charcoal mb-6">Care built for your neighborhood</h2>
          <p className="text-body text-slate">
            We tailor rehabilitation plans around commuting load, desk-heavy routines, and activity goals common across Powai, Hiranandani, IIT Bombay, and Chandivali.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevealOnScroll>
          <Card title={location.commonConditionsHeading}>
            <ul className="space-y-3 text-sm text-slate">
              {location.commonConditions.map((condition) => (
                <li key={condition} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-deep" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <Card title={location.whyChooseHeading}>
            <ul className="space-y-3 text-sm text-slate">
              {location.whyChoosePoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-sand" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <Card title={location.nearbyFocusHeading}>
            <p className="text-sm text-slate leading-relaxed mb-6">{location.nearbyFocusText}</p>
            <div className="border-t border-charcoal/10 pt-5">
              <p className="text-label text-slate mb-3">Also serving nearby areas: Vikhroli, Ghatkopar</p>
              <div className="flex flex-wrap gap-2">
                {location.nearbyLocationLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-3 py-1.5 rounded-full text-xs bg-primary-light text-primary-dark hover:bg-primary hover:text-snow transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </RevealOnScroll>
      </div>

      {/* Related articles */}
      {location.relatedBlogs && location.relatedBlogs.length > 0 && (
        <RevealOnScroll delay={0.3}>
          <div className="mt-12 pt-8 border-t border-charcoal/10">
            <p className="text-label text-slate mb-4">Related articles</p>
            <div className="flex flex-wrap gap-2">
              {location.relatedBlogs.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 rounded-full bg-primary-light/50 text-primary-dark text-sm hover:bg-primary hover:text-snow transition-colors border border-primary/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      )}
    </SectionWrapper>
  );
}
