// GBP (Google Business Profile) landing pages - conversion-focused.
// Each entry drives a LandingPage template.

import { SITE_URL } from "./locations";

export const landingPages = [
  {
    slug: "home-physiotherapy-powai",
    path: "/home-physiotherapy-powai",
    title: "Home Physiotherapy in Powai - Expert Care at Your Doorstep | Adapt Physiotherapy",
    metaDescription:
      "Top-rated home physiotherapy in Powai, Mumbai. Post-surgery rehab, geriatric care, neuro physio & pain management delivered to your home. Call +91 77385 56911. Same-day slots available.",
    heroHeading: "Expert physiotherapy at your doorstep in Powai",
    heroSubtext:
      "Skip the commute. Get the same specialist-led, evidence-based physiotherapy you'd receive at our Hiranandani Gardens clinic - delivered to your home in Powai. Post-surgery recovery, senior mobility, neuro rehab, pain relief.",
    intro:
      "When you can't come to the clinic, we bring the clinic to you. Our home physiotherapy service in Powai delivers complete assessment, hands-on manual therapy, guided exercise prescription, and progress tracking - all in the comfort and privacy of your home. Same therapist continuity, same clinical standards, same measurable outcomes.",
    painPoints: [
      {
        heading: "Traveling after surgery is painful and risky",
        body: "Avoid the strain of getting into a car, navigating clinic stairs, and sitting in waiting rooms during the critical first weeks of recovery. We come to you - so healing starts immediately.",
      },
      {
        heading: "Elderly parents need care but can't travel alone",
        body: "Your parents deserve expert physiotherapy without the logistics of arranging transport and an attendant. Our geriatric-specialist therapists treat them safely at home, with family present.",
      },
      {
        heading: "Busy schedule? Clinic hours don't fit your day",
        body: "Early morning and evening slots available. No commute time, no waiting room delays - treatment happens around your schedule, in your space.",
      },
    ],
    benefits: [
      "Same expert team that runs our Hiranandani Gardens clinic - now at your doorstep",
      "Full 60-minute sessions: assessment, manual therapy, exercise progression, not rushed 20-minute visits",
      "Same therapist continuity - one dedicated physiotherapist follows your entire recovery",
      "All portable equipment brought: IFT/TENS units, resistance bands, balance tools, assessment kit",
      "Measurable progress tracking with session-by-session documentation",
      "Family/caregiver training included - they learn to support your recovery safely",
    ],
    trustSignals: [
      {
        icon: "shield",
        stat: "6+ Years",
        label: "Serving Powai & Mumbai",
      },
      {
        icon: "heart",
        stat: "1500+",
        label: "Patients Successfully Treated",
      },
      {
        icon: "star",
        stat: "4.9/5",
        label: "Patient Rating",
      },
      {
        icon: "target",
        stat: "100%",
        label: "Qualified Physiotherapists (MPT/BPTh)",
      },
    ],
    pricing: {
      heading: "Transparent home visit pricing for Powai",
      intro:
        "Quality home physiotherapy at fair rates. No hidden charges. Packages offer better value for the consistent care that produces the best outcomes.",
      tiers: [
        {
          name: "Single Session",
          price: "₹1,500",
          duration: "60 minutes",
          features: [
            "Full assessment & treatment",
            "Hands-on manual therapy",
            "Exercise prescription",
            "Progress documentation",
          ],
        },
        {
          name: "5-Session Package",
          price: "₹7,000",
          duration: "₹1,400/session",
          features: [
            "Everything in Single Session",
            "Same dedicated therapist throughout",
            "Structured treatment plan with milestones",
            "Free phone support between sessions",
            "Save ₹500 vs single sessions",
          ],
          highlighted: true,
        },
        {
          name: "10-Session Package",
          price: "₹12,500",
          duration: "₹1,250/session",
          features: [
            "Everything in 5-Session Package",
            "Family/caregiver training session included",
            "Home environment safety assessment",
            "Long-term maintenance program on discharge",
            "Save ₹2,500 vs single sessions",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Which areas of Powai do you cover for home visits?",
        answer:
          "We cover all of Powai: Hiranandani Gardens (all complexes), Raheja Vihar, Lake Homes, L&T Powai, Nahar, IIT Bombay campus, and adjacent pockets. Most addresses are reachable within 10-15 minutes. Same-day or next-day slots are frequently available for Powai residents.",
      },
      {
        question: "Is home physiotherapy as effective as visiting your clinic?",
        answer:
          "Yes - and for some conditions, it can be more effective. Treatment in your actual home environment means exercises are practised on your real stairs, your actual bed height, your specific bathroom layout. Functional carryover is often better because the gap between 'therapy exercise' and 'real life' is eliminated.",
      },
      {
        question: "How do I book a home physiotherapy session in Powai?",
        answer:
          "Call us at +91 77385 56911 or email adaptrehabilitation@gmail.com. We'll discuss your condition, confirm your Powai location, explain pricing, and offer available slots. For post-surgical patients, we prioritise next-day booking. Most Powai residents can be seen within 24-48 hours of contacting us.",
      },
    ],
    ctaHeading: "Ready to start your recovery at home?",
    ctaSubtext:
      "Call us now to book your first home physiotherapy session in Powai. We'll arrive within 24-48 hours.",
  },
];

export function getLandingPageBySlug(slug) {
  return landingPages.find((l) => l.slug === slug);
}

export function buildLandingPageSchema(page) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Adapt Physiotherapy - Home Visits in Powai",
      url: `${SITE_URL}${page.path}`,
      description: page.metaDescription,
      telephone: "+917738556911",
      email: "adaptrehabilitation@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Galleria Shopping Mall, Central Ave, Hiranandani Gardens",
        addressLocality: "Powai",
        addressRegion: "Maharashtra",
        postalCode: "400076",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Neighborhood", name: "Powai" },
        { "@type": "Neighborhood", name: "Hiranandani Gardens" },
        { "@type": "Neighborhood", name: "IIT Bombay" },
        { "@type": "Neighborhood", name: "Chandivali" },
      ],
      priceRange: "₹₹",
      medicalSpecialty: ["Home Physiotherapy", "Post-Surgical Rehabilitation", "Geriatric Physiotherapy", "Neurological Physiotherapy"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}