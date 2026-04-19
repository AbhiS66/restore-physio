import RevealOnScroll from "../ui/RevealOnScroll";
import Button from "../ui/Button";
import { ArrowRight } from "../icons/Icons";

export default function CTASection() {
  return (
    <section className="bg-primary-dark py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 text-center">
        <RevealOnScroll>
          <h2 className="text-display text-snow max-w-3xl mx-auto mb-8">
            Your healing journey starts with a single step
          </h2>
          <p className="text-body text-snow/80 max-w-lg mx-auto mb-12">
            Book your initial consultation today. Let's build a recovery plan
            as unique as you are.
          </p>
          {/* Desktop: Scroll to contact */}
          <div className="hidden md:block">
            <Button href="#contact" variant="light" size="lg">
              Book Your Consultation
              <ArrowRight />
            </Button>
          </div>
          {/* Mobile: Call directly */}
          <div className="block md:hidden">
            <Button
              href="tel:+917738556911"
              target="_blank"
              rel="noreferrer"
              variant="light"              
              size="lg"
            >
              Book Your Consultation
              <ArrowRight />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
