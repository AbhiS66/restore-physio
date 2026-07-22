import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import RevealOnScroll from "../ui/RevealOnScroll";
import Button from "../ui/Button";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, ArrowRight } from "../icons/Icons";

const DEFAULT_CONTACT = {
  phone: "+91 77385 56911",
  phoneHref: "tel:+917738556911",
  email: "adaptrehabilitation@gmail.com",
  fullAddress:
    "Galleria Shopping Mall, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.9038!3d19.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b7e1b7e1b7%3A0x0!2sGalleria%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1",
};

function buildContactInfo(data) {
  return [
    { icon: PhoneIcon, label: "Phone", value: data.phone, href: data.phoneHref },
    { icon: MailIcon, label: "Email", value: data.email, href: `mailto:${data.email}` },
    { icon: MapPinIcon, label: "Location", value: data.fullAddress },
    { icon: ClockIcon, label: "Hours", value: data.hours },
  ];
}

export default function Contact({ locationData }) {
  const contact = locationData ? { ...DEFAULT_CONTACT, ...locationData } : DEFAULT_CONTACT;
  const contactInfo = buildContactInfo(contact);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would submit to a backend
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" bg="bg-snow">
      <div className="mb-16 md:mb-20 max-w-2xl">
        <SectionLabel>Get in Touch</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h1 text-charcoal mb-6">
            Ready to begin your recovery?
          </h2>
          <p className="text-body text-slate">
            Reach out to schedule your initial consultation. We&apos;ll discuss
            your concerns, assess your needs, and outline a clear path forward.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-16 lg:gap-24">
        {/* Form */}
        <RevealOnScroll>
          {submitted ? (
            <motion.div
              aria-live="polite"
              className="bg-primary-light/50 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-deep flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-snow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-h2 text-charcoal mb-3">Thank you</h3>
              <p className="text-body text-slate max-w-sm">
                We&apos;ve received your message and will be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
                <div>
                  <label className="text-label text-slate block mb-3" htmlFor="condition">
                    Condition
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Select a condition</option>
                    <option value="back-pain">Back & Spinal Pain</option>
                    <option value="sports">Sports Injuries</option>
                    <option value="joint">Joint & Arthritis</option>
                    <option value="neck">Neck Pain & Headaches</option>
                    <option value="post-surgical">Post-Surgical Rehab</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <FormField
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your condition or what you'd like help with..."
              />
              <Button type="submit" size="lg">
                Send Message
                <ArrowRight />
              </Button>
            </form>
          )}
        </RevealOnScroll>

        {/* Contact info + Map */}
        <RevealOnScroll delay={0.2}>
          <div className="space-y-8 mb-12">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary-dark" />
                </div>
                <div>
                  <p className="text-label text-slate mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-charcoal hover:text-primary-deep transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-charcoal">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden h-64 bg-cloud">
            <iframe
              title="Adapt Physiotherapy Location"
              src={contact.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.8) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* Minimal underline-style form field */
function FormField({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="text-label text-slate block mb-3">
        {label}
        {required && <span className="text-sand ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          rows={4}
          className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-slate/40"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          className="w-full bg-transparent border-b border-charcoal/20 pb-3 text-charcoal text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-slate/40"
        />
      )}
    </div>
  );
}
