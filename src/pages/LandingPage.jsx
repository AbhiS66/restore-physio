import SEOHead from "../components/SEOHead";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import BlogFAQ from "../components/ui/BlogFAQ";
import Button from "../components/ui/Button";
import { ArrowRight, PhoneIcon, CheckIcon, StarIcon, ShieldIcon, HeartIcon, TargetIcon } from "../components/icons/Icons";
import { getLandingPageBySlug, buildLandingPageSchema } from "../data/landingPages";
import { SITE_URL } from "../data/locations";

/* ─── Conversion Hero ─────────────────────────────────────────────────── */
function LandingHero({ page }) {
  return (
    <SectionWrapper id="hero" bg="bg-cloud" className="pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-3xl">
        <SectionLabel>{page.heroHeading}</SectionLabel>
        <RevealOnScroll>
          <h1 className="text-display text-charcoal mb-6">{page.heroHeading}</h1>
          <p className="text-body text-slate mb-8 max-w-lg">{page.heroSubtext}</p>
        </RevealOnScroll>

        {/* Trust badges */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-xs text-slate bg-snow rounded-full px-4 py-2 border border-charcoal/5">
              <StarIcon className="w-3.5 h-3.5 text-sand" />
              4.9/5 Patient Rating
            </div>
            <div className="flex items-center gap-2 text-xs text-slate bg-snow rounded-full px-4 py-2 border border-charcoal/5">
              <ShieldIcon className="w-3.5 h-3.5 text-primary" />
              6+ Years Serving Powai
            </div>
            <div className="flex items-center gap-2 text-xs text-slate bg-snow rounded-full px-4 py-2 border border-charcoal/5">
              <HeartIcon className="w-3.5 h-3.5 text-primary" />
              1500+ Patients Treated
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA buttons */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="hidden md:block">
              <Button href="#contact" size="lg">
                Book Home Physiotherapy
                <ArrowRight />
              </Button>
            </div>
            <div className="md:hidden">
              <a
                href="tel:+917738556911"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-400 cursor-pointer bg-primary-deep text-snow hover:bg-primary-dark px-10 py-4 text-base"
              >
                Book Home Physiotherapy
                <ArrowRight />
              </a>
            </div>
            <Button href="#pricing" variant="secondary" size="lg">
              View Pricing
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Pain Points ─────────────────────────────────────────────────────── */
function PainPoints({ page }) {
  return (
    <SectionWrapper id="pain-points" bg="bg-snow">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">
            When the clinic isn't the answer
          </h2>
        </RevealOnScroll>
        <div className="space-y-5">
          {page.painPoints.map((point, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-cloud rounded-2xl p-8 md:p-10 border border-charcoal/5">
                <h3 className="text-h3 text-charcoal mb-3">{point.heading}</h3>
                <p className="text-sm text-slate leading-relaxed">{point.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Benefits Bullets ────────────────────────────────────────────────── */
function Benefits({ page }) {
  return (
    <SectionWrapper id="benefits" bg="bg-cloud">
      <div className="max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-8">Why our home physiotherapy is different</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {page.benefits.map((benefit, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className="flex items-start gap-3 bg-snow rounded-xl p-5 border border-charcoal/5">
                <span className="mt-0.5 shrink-0 text-primary-deep">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span className="text-sm text-slate">{benefit}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Trust Signals ───────────────────────────────────────────────────── */
function TrustSignals({ page }) {
  const iconMap = {
    shield: <ShieldIcon className="w-8 h-8" />,
    heart: <HeartIcon className="w-8 h-8" />,
    star: <StarIcon className="w-8 h-8" />,
    target: <TargetIcon className="w-8 h-8" />,
  };

  return (
    <SectionWrapper id="trust" bg="bg-snow">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal text-center mb-12">Trusted by Powai families since 6+ years</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {page.trustSignals.map((signal, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-primary-deep mb-4 flex justify-center">
                  {iconMap[signal.icon] || <ShieldIcon className="w-8 h-8" />}
                </div>
                <div className="text-display text-primary-deep mb-1">{signal.stat}</div>
                <p className="text-xs text-slate">{signal.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Pricing Transparency ───────────────────────────────────────────── */
function Pricing({ page }) {
  if (!page.pricing) return null;

  return (
    <SectionWrapper id="pricing" bg="bg-cloud">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Transparent Pricing</SectionLabel>
          <RevealOnScroll>
            <h2 className="text-h2 text-charcoal mb-4">{page.pricing.heading}</h2>
            <p className="text-body text-slate">{page.pricing.intro}</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {page.pricing.tiers.map((tier, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 md:p-10 h-full flex flex-col border ${
                  tier.highlighted
                    ? "bg-primary-deep border-primary-deep ring-2 ring-primary"
                    : "bg-snow border-charcoal/5"
                }`}
              >
                <h3 className={`text-h3 mb-1 ${tier.highlighted ? "text-snow" : "text-charcoal"}`}>
                  {tier.name}
                </h3>
                <div className={`text-display mb-1 ${tier.highlighted ? "text-snow" : "text-primary-deep"}`}>
                  {tier.price}
                </div>
                <p className={`text-xs mb-6 ${tier.highlighted ? "text-snow/70" : "text-slate"}`}>
                  {tier.duration}
                </p>

                {tier.highlighted && (
                  <span className="inline-block bg-snow/15 text-snow text-xs rounded-full px-3 py-1 mb-5 self-start">
                    Best Value
                  </span>
                )}

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-2 text-sm ${
                        tier.highlighted ? "text-snow/85" : "text-slate"
                      }`}
                    >
                      <span className={`mt-1 shrink-0 ${tier.highlighted ? "text-snow" : "text-primary-deep"}`}>
                        <CheckIcon className="w-4 h-4" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  {tier.highlighted ? (
                    <div className="hidden md:block">
                      <Button href="#contact" variant="light" size="md" className="w-full justify-center">
                        Get Started
                      </Button>
                    </div>
                  ) : (
                    <div className="hidden md:block">
                      <Button href="#contact" variant="secondary" size="md" className="w-full justify-center">
                        Get Started
                      </Button>
                    </div>
                  )}
                  <div className="md:hidden">
                    <a
                      href="tel:+917738556911"
                      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-400 cursor-pointer px-8 py-3 text-sm w-full justify-center ${
                        tier.highlighted
                          ? "bg-snow text-primary-deep hover:bg-snow/90"
                          : "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-snow"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
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
          <h2 className="text-h2 text-charcoal mb-8">Questions about home physiotherapy in Powai</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <BlogFAQ faqs={page.faqs} variant="primary" />
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Strong CTA ──────────────────────────────────────────────────────── */
function StrongCTA({ page }) {
  return (
    <SectionWrapper id="final-cta" bg="bg-primary-dark">
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-h1 text-snow mb-6">{page.ctaHeading}</h2>
          <p className="text-body text-snow/80 mb-10 max-w-lg mx-auto">{page.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="hidden md:block">
              <Button href="#contact" variant="light" size="lg">
                Call to Book Now
                <PhoneIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="md:hidden">
              <a
                href="tel:+917738556911"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-400 cursor-pointer bg-snow text-charcoal hover:bg-snow/90 px-10 py-4 text-base"
              >
                Call to Book Now
                <PhoneIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function LandingPage({ slug }) {
  const page = getLandingPageBySlug(slug);

  if (!page) return null;

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={`${SITE_URL}${page.path}`}
        schema={buildLandingPageSchema(page)}
      />
      <LandingHero page={page} />
      <PainPoints page={page} />
      <Benefits page={page} />
      <TrustSignals page={page} />
      <Pricing page={page} />
      <FAQSection page={page} />
      <StrongCTA page={page} />
      <Contact />
    </>
  );
}