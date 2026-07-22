import SEOHead from "../components/SEOHead";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import RevealOnScroll, { RevealItem } from "../components/ui/RevealOnScroll";
import Button from "../components/ui/Button";
import { ArrowRight, ShieldIcon, HeartIcon, TargetIcon } from "../components/icons/Icons";
import { getTeamMembersSorted } from "../data/team";
import { SITE_URL, SAME_AS_URLS } from "../data/locations";

/* ─── Team Hero ───────────────────────────────────────────────────────── */
function TeamHero() {
  return (
    <SectionWrapper id="hero" bg="bg-cloud" className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionLabel>Meet Our Team</SectionLabel>
        <RevealOnScroll>
          <h1 className="text-display text-charcoal mb-6">
            The people behind your recovery
          </h1>
          <p className="text-body text-slate max-w-lg">
            Our team brings together neuro, musculoskeletal, geriatric, and women's health specialists. Every physiotherapist at Adapt is qualified, experienced, and committed to evidence-based, compassionate care.
          </p>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}

/* ─── Team Grid ───────────────────────────────────────────────────────── */
function TeamMemberCard({ member, index }) {
  return (
    <RevealItem className="h-full">
      <div className="group bg-snow rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-md transition-shadow duration-400 h-full flex flex-col">
        {/* Photo */}
        <div className="aspect-[3/4] bg-cloud relative overflow-hidden">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate/30">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="12" cy="8" r="5" />
                <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
              </svg>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/20 to-transparent" />
        </div>

        {/* Info */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <h3 className="text-h3 text-charcoal mb-1">{member.name}</h3>
          <p className="text-sm text-primary-deep font-medium mb-3">{member.role}</p>
          <p className="text-sm text-slate leading-relaxed mb-5 flex-1">{member.bio}</p>

          {/* Qualifications */}
          <div className="border-t border-charcoal/5 pt-4">
            <p className="text-xs text-slate/60 mb-2 font-medium uppercase tracking-wider">Qualifications</p>
            <ul className="space-y-1">
              {member.qualifications.map((q, i) => (
                <li key={i} className="text-xs text-slate flex items-center gap-1.5">
                  <span className="inline-block w-1 h-1 rounded-full bg-sand" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealItem>
  );
}

function TeamGrid() {
  const members = getTeamMembersSorted();

  return (
    <SectionWrapper id="team-grid" bg="bg-snow">
      <RevealOnScroll
        stagger
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        delay={0.1}
        threshold={0.1}
      >
        {members.map((member, i) => (
          <TeamMemberCard key={member.slug} member={member} index={i} />
        ))}
      </RevealOnScroll>
    </SectionWrapper>
  );
}

/* ─── Credentials Section ─────────────────────────────────────────────── */
function Credentials() {
  const credentials = [
    {
      icon: <ShieldIcon className="w-8 h-8" />,
      title: "Licensed & Registered",
      body: "Every physiotherapist on our team is registered with the Maharashtra OTPT Council and holds a recognised MPT or BPTh degree.",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Specialist Training",
      body: "Our team includes certified specialists in neuro rehabilitation, manual therapy (Maitland, McKenzie, Mulligan), gait training, geriatric physiotherapy, and women's health including pelvic floor therapy and pre/postnatal care.",
    },
    {
      icon: <TargetIcon className="w-8 h-8" />,
      title: "Evidence-Based Practitioners",
      body: "Treatment decisions are guided by published research and clinical practice guidelines, not tradition or trends. Every plan is built on tested protocols.",
    },
  ];

  return (
    <SectionWrapper id="credentials" bg="bg-cloud">
      <div className="max-w-2xl mb-12">
        <SectionLabel>Our Standards</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h2 text-charcoal mb-4">Why our team is different</h2>
          <p className="text-body text-slate">
            When you choose Adapt Physiotherapy, you're treated by qualified professionals who are continuously updating their skills and working from clinical evidence - not generic routines.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {credentials.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="h-full bg-snow rounded-2xl p-8 md:p-10 border border-charcoal/5 text-center">
              <div className="text-primary-deep mb-5 flex justify-center">{item.icon}</div>
              <h3 className="text-h3 text-charcoal mb-3">{item.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{item.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ─── Team CTA ────────────────────────────────────────────────────────── */
function TeamCTA() {
  return (
    <SectionWrapper id="team-cta" bg="bg-primary-dark">
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-h1 text-snow mb-6">Meet your physiotherapist today</h2>
          <p className="text-body text-snow/80 mb-10 max-w-lg mx-auto">
            During your first consultation, we'll match you with the team member whose expertise best fits your condition. Book now - same-day and next-day slots available.
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

/* ─── Schema ──────────────────────────────────────────────────────────── */
function buildTeamSchema() {
  const members = getTeamMembersSorted();

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Adapt Physiotherapy - Meet Our Team",
    url: `${SITE_URL}/team`,
    description:
      "Meet the specialist physiotherapy team at Adapt Physiotherapy, Mumbai. Neuro, musculoskeletal, geriatric, and women's health physiotherapists serving Powai, Vikhroli and Mumbai.",
    telephone: "+917738556911",
    email: "adaptrehabilitation@gmail.com",
    sameAs: SAME_AS_URLS,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galleria Shopping Mall, Central Ave, Hiranandani Gardens",
      addressLocality: "Powai",
      addressRegion: "Maharashtra",
      postalCode: "400076",
      addressCountry: "IN",
    },
  };

  // Individual Person schema for each team member
  const personSchemas = members.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    description: member.bio,
    image: member.photoUrl ? `${SITE_URL}${member.photoUrl}` : undefined,
    jobTitle: member.role,
    knowsAbout: ["Physiotherapy", "Rehabilitation", "Pain Management"],
    affiliation: {
      "@type": "MedicalOrganization",
      name: "Adapt Physiotherapy",
    },
    hasCredential: member.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      credentialName: q,
    })),
  }));

  return [businessSchema, ...personSchemas];
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function TeamPage() {
  return (
    <>
      <SEOHead
        title="Meet Our Team - Specialist Physiotherapists | Adapt Physiotherapy Mumbai"
        description="Meet the specialist team at Adapt Physiotherapy - neuro, MSK, geriatric & women&#39;s health physiotherapists serving Powai, Vikhroli, and Mumbai. Book a consultation today."
        canonical={`${SITE_URL}/team`}
        schema={buildTeamSchema()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Team", url: "/team" },
        ]}
      />
      <TeamHero />
      <TeamGrid />
      <Credentials />
      <TeamCTA />
      <Contact />
    </>
  );
}