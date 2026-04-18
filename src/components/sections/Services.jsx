import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import RevealOnScroll, { RevealItem } from "../ui/RevealOnScroll";
import { ServiceIcon } from "../icons/Icons";
import { services } from "../../data/services";

function ServiceCard({ service, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <RevealItem className="h-full">
      <motion.div
        className="group relative h-full p-8 md:p-10 rounded-2xl bg-snow hover:bg-primary-light/40 transition-colors duration-500 cursor-default flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Index number */}
        <span className="text-[4rem] font-serif text-charcoal/[0.04] absolute top-4 right-6 leading-none group-hover:text-primary/10 transition-colors duration-500">
          {num}
        </span>

        {/* Icon */}
        <div className="mb-6 text-primary group-hover:text-primary-deep transition-colors duration-300">
          <ServiceIcon name={service.icon} className="w-8 h-8" />
        </div>

        {/* Content */}
        <h3 className="text-h3 text-charcoal mb-3">{service.title}</h3>
        <p className="text-sm text-slate leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Bottom line that draws on hover */}
        <div className="mt-6 h-px bg-charcoal/5 overflow-hidden">
          <div className="h-full bg-primary/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out" />
        </div>
      </motion.div>
    </RevealItem>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" bg="bg-cloud">
      <div className="mb-16 md:mb-20 max-w-2xl">
        <SectionLabel>What We Offer</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h1 text-charcoal mb-6">
            Specialised care for every stage of your recovery
          </h2>
          <p className="text-body text-slate">
            From acute injury management to long-term wellness, our services are
            designed to restore function, relieve pain, and empower movement.
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </RevealOnScroll>
    </SectionWrapper>
  );
}
