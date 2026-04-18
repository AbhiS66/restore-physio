import { SITE_URL } from "./locations";

export const treatmentPages = [
  {
    slug: "back-pain-treatment-powai",
    path: "/back-pain-treatment-powai",
    title: "Back Pain Treatment in Powai | Adapt Physiotherapy",
    description:
      "Evidence-based back pain physiotherapy in Powai. Personalized plans for sciatica, disc pain, posture correction, and long-term spine health.",
    heading: "Back pain treatment in Powai that targets the root cause",
    intro:
      "Our back pain programs combine manual therapy, strength progression, and posture retraining so you can move confidently at work and at home.",
    points: [
      "Detailed spinal assessment before starting treatment",
      "Session-wise progress tracking for pain and movement",
      "Custom home exercises for lasting relief",
      "Lifestyle and workstation correction guidance",
    ],
    relatedLocations: [
      { label: "Physiotherapy in Powai", href: "/physiotherapy-in-powai" },
      { label: "Physiotherapy in Hiranandani", href: "/physiotherapy-in-hiranandani" },
      { label: "Physiotherapy in Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
  },
  {
    slug: "sports-injury-rehab-mumbai",
    path: "/sports-injury-rehab-mumbai",
    title: "Sports Injury Rehab in Mumbai | Adapt Physiotherapy",
    description:
      "Sports injury rehab in Mumbai for runners, cricketers, and gym athletes. Return-to-sport programs for ACL, shoulder, ankle, and muscle injuries.",
    heading: "Sports injury rehab in Mumbai for faster, safer comeback",
    intro:
      "From acute injury to return-to-play, our protocols are designed to rebuild strength, agility, confidence, and sport-specific movement quality.",
    points: [
      "Acute pain and swelling management",
      "Progressive loading based on healing stage",
      "Movement correction to reduce re-injury risk",
      "Return-to-sport testing before discharge",
    ],
    relatedLocations: [
      { label: "Physiotherapy in Powai", href: "/physiotherapy-in-powai" },
      { label: "Physiotherapy in Vikhroli", href: "/physiotherapy-in-vikhroli" },
      { label: "Knee Pain Physiotherapy in Powai", href: "/knee-pain-physio-powai" },
    ],
  },
  {
    slug: "knee-pain-physio-powai",
    path: "/knee-pain-physio-powai",
    title: "Knee Pain Physiotherapy in Powai | Adapt Physiotherapy",
    description:
      "Knee pain physiotherapy in Powai for OA, ligament strain, patellofemoral pain, and post-surgery rehab. Improve mobility, reduce pain, and restore function.",
    heading: "Knee pain physio in Powai built around movement goals",
    intro:
      "Whether your pain starts on stairs, while running, or after surgery, we build a progressive rehab plan that improves mobility and lowers recurrence.",
    points: [
      "Joint-friendly strength and mobility routines",
      "Gait and stair-climbing correction",
      "Patella and soft tissue pain management",
      "Post-op knee replacement and ACL rehab support",
    ],
    relatedLocations: [
      { label: "Physiotherapy in Hiranandani", href: "/physiotherapy-in-hiranandani" },
      { label: "Back Pain Treatment in Powai", href: "/back-pain-treatment-powai" },
      { label: "Physiotherapy in Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
  },
];

export const treatmentFaqs = [
  {
    question: "How soon can I start physiotherapy after an injury?",
    answer:
      "In most cases, early physiotherapy is beneficial and helps reduce stiffness, swelling, and delayed recovery. A therapist will adapt your plan to the stage of healing.",
  },
  {
    question: "Do you treat sports and gym injuries without surgery?",
    answer:
      "Yes. Many sports injuries respond very well to structured rehab, progressive loading, and movement retraining without surgery.",
  },
  {
    question: "Can I continue work while taking physiotherapy sessions?",
    answer:
      "Absolutely. Most plans are designed around your schedule and include short home routines for consistency between sessions.",
  },
];

export function getTreatmentPageBySlug(slug) {
  return treatmentPages.find((page) => page.slug === slug);
}

export function buildTreatmentSchema(page) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: page.title,
      url: `${SITE_URL}${page.path}`,
      description: page.description,
      about: ["Physiotherapy", "Rehabilitation", "Pain Management"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: treatmentFaqs.map((faq) => ({
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
