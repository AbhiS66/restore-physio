// Location data for each clinic branch.
// Update fullAddress, phone, mapEmbed, and geo for each real location.

export const SITE_URL = "https://www.adaptphysiotherapy.in";

export const locationRouteMap = {
  powai: "/physiotherapy-in-powai",
  vikhroli: "/physiotherapy-in-vikhroli",
  hiranandani: "/physiotherapy-in-hiranandani",
};

export const contentRoutes = [
  {
    slug: "back-pain-treatment-powai",
    title: "Back Pain Treatment in Powai",
    href: "/back-pain-treatment-powai",
  },
  {
    slug: "sports-injury-rehab-mumbai",
    title: "Sports Injury Rehab in Mumbai",
    href: "/sports-injury-rehab-mumbai",
  },
  {
    slug: "knee-pain-physio-powai",
    title: "Knee Pain Physiotherapy in Powai",
    href: "/knee-pain-physio-powai",
  },
];

const defaultFaqs = [
  {
    question: "How many sessions are needed for back pain?",
    answer:
      "Most people notice improvement within 4 to 6 sessions, but total sessions depend on severity, posture, work demands, and whether the condition is acute or chronic.",
  },
  {
    question: "Is physiotherapy painful?",
    answer:
      "Treatment is designed to reduce pain, not increase it. Some techniques may feel intense, but sessions are always adjusted to your comfort and stage of recovery.",
  },
  {
    question: "Do you provide home visit physiotherapy?",
    answer:
      "Yes. We provide home visits across Mumbai for patients who need post-surgical, geriatric, neurological, or convenience-based care.",
  },
];

const defaultReview = {
  ratingValue: "4.9",
  reviewCount: "128",
  bestRating: "5",
  authorName: "Patient at Adapt Physiotherapy",
  reviewBody:
    "The treatment plan was practical, clear, and effective. Pain reduced within weeks and mobility improved significantly.",
};

export const locations = [
  {
    slug: "powai",
    name: "Powai",
    area: "Hiranandani Gardens, Powai",
    fullAddress:
      "Galleria Shopping Mall, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    phone: "+91 77385 56911",
    phoneHref: "tel:+917738556911",
    email: "adaptrehabilitation@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 7:00 PM",
    geo: { lat: 19.1176, lng: 72.906 },
    // Replace pb= value with actual Google Maps embed code for this branch
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.9038!3d19.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b7e1b7e1b7%3A0x0!2sGalleria%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1",
    nearbyAreas: ["Hiranandani Gardens", "Chandivali", "Kanjurmarg", "Bhandup", "IIT Bombay"],
    heroLabel: "Adapt Physiotherapy · Powai, Mumbai",
    heroHeadlines: ["Expert Physiotherapy", "in Powai,", "Mumbai."],
    heroSubtext:
      "Conveniently located in Galleria Mall, Hiranandani Gardens. Serving Powai, Chandivali, Kanjurmarg and surrounding areas. Book your consultation today.",
    metaTitle: "Physiotherapy in Powai, Mumbai | Adapt Physiotherapy",
    metaDescription:
      "Top-rated physiotherapy clinic in Powai (Hiranandani Gardens), Mumbai. Neuro, ortho, sports rehab & home visit physiotherapy. 6+ years, 1500+ patients. Call: +91 77385 56911.",
    canonical: `${SITE_URL}/physiotherapy-in-powai`,
    commonConditionsHeading: "Common conditions treated in Powai",
    commonConditions: [
      "Back and neck pain from desk-heavy routines",
      "Sports injuries from running, cricket, and gym training",
      "Post-operative rehabilitation after ACL or joint surgery",
      "Sciatica and nerve-related pain radiating to the leg",
      "Knee pain while climbing stairs in daily city movement",
    ],
    whyChooseHeading: "Why choose us in Hiranandani",
    whyChoosePoints: [
      "1:1 sessions with evidence-based treatment plans",
      "Central Galleria location with easy access from Powai",
      "Clear progress milestones and home exercise guidance",
      "Trusted by working professionals, athletes, and seniors",
    ],
    nearbyFocusHeading: "Physiotherapy near IIT Bombay / Chandivali",
    nearbyFocusText:
      "If you are searching for physiotherapy near IIT Bombay, Chandivali, or Lake Homes, our clinic is a short commute and offers flexible slots before and after work hours.",
    nearbyLocationLinks: [
      { name: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
      { name: "Ghatkopar", href: "/physiotherapy-in-vikhroli" },
    ],
    faqs: defaultFaqs,
    review: defaultReview,
  },
  {
    slug: "vikhroli",
    name: "Vikhroli",
    area: "Vikhroli, Mumbai",
    // Update with actual Vikhroli branch address
    fullAddress: "Vikhroli, Mumbai, Maharashtra 400083",
    phone: "+91 77385 56911",
    phoneHref: "tel:+917738556911",
    email: "adaptrehabilitation@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 7:00 PM",
    geo: { lat: 19.109, lng: 72.9266 },
    // Replace with actual Vikhroli Google Maps embed
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.9246!3d19.1100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b879b7e1b7%3A0x0!2sVikhroli!5e0!3m2!1sen!2sin!4v1",
    nearbyAreas: ["Kanjurmarg", "Powai", "Bhandup", "Ghatkopar", "Asalpha"],
    heroLabel: "Adapt Physiotherapy · Vikhroli, Mumbai",
    heroHeadlines: ["Expert Physiotherapy", "in Vikhroli,", "Mumbai."],
    heroSubtext:
      "Serving Vikhroli and nearby areas including Kanjurmarg, Bhandup and Ghatkopar. The same evidence-based, specialist-led care — close to home.",
    metaTitle: "Physiotherapy in Vikhroli, Mumbai | Adapt Physiotherapy",
    metaDescription:
      "Expert physiotherapy in Vikhroli, Mumbai. Neuro, ortho, sports rehab & home visit physiotherapy. Serving Kanjurmarg, Bhandup & Ghatkopar. Call: +91 77385 56911.",
    canonical: `${SITE_URL}/physiotherapy-in-vikhroli`,
    commonConditionsHeading: "Common conditions treated in Powai",
    commonConditions: [
      "Persistent lower back pain from prolonged commuting",
      "Neck pain and headaches related to laptop posture",
      "Ligament strain and overuse sports injuries",
      "Shoulder impingement and rotator cuff discomfort",
      "Post-fracture stiffness and mobility restoration",
    ],
    whyChooseHeading: "Why choose us in Hiranandani",
    whyChoosePoints: [
      "Structured assessments followed by measurable outcomes",
      "Manual therapy + active rehab in every stage",
      "Dedicated support for return-to-work and return-to-sport",
      "Same-day consultation support when slots are available",
    ],
    nearbyFocusHeading: "Physiotherapy near IIT Bombay / Chandivali",
    nearbyFocusText:
      "Many patients from Powai, IIT Bombay, and Chandivali choose us for focused rehab plans and continuity in follow-up sessions.",
    nearbyLocationLinks: [
      { name: "Powai", href: "/physiotherapy-in-powai" },
      { name: "Ghatkopar", href: "/physiotherapy-in-vikhroli" },
    ],
    faqs: defaultFaqs,
    review: defaultReview,
  },
  {
    slug: "hiranandani",
    name: "Hiranandani Gardens",
    area: "Hiranandani Gardens, Powai",
    fullAddress:
      "Galleria Shopping Mall, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    phone: "+91 77385 56911",
    phoneHref: "tel:+917738556911",
    email: "adaptrehabilitation@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 7:00 PM",
    geo: { lat: 19.1176, lng: 72.906 },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.9038!3d19.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b7e1b7e1b7%3A0x0!2sGalleria%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1",
    nearbyAreas: ["Powai", "IIT Bombay", "Chandivali", "Kanjurmarg", "Bhandup"],
    heroLabel: "Adapt Physiotherapy · Hiranandani Gardens",
    heroHeadlines: ["Expert Physiotherapy", "in Hiranandani", "Gardens, Mumbai."],
    heroSubtext:
      "Located in the heart of Hiranandani Gardens, Galleria Mall. Serving Powai, Chandivali and the wider East Mumbai community with specialist physiotherapy care.",
    metaTitle: "Physiotherapy in Hiranandani Gardens, Mumbai | Adapt Physiotherapy",
    metaDescription:
      "Premier physiotherapy clinic in Hiranandani Gardens, Powai. Expert neuro, ortho & sports rehab. Home visits across Mumbai. 1500+ patients treated. Call: +91 77385 56911.",
    canonical: `${SITE_URL}/physiotherapy-in-hiranandani`,
    commonConditionsHeading: "Common conditions treated in Powai",
    commonConditions: [
      "Chronic back pain and postural syndromes",
      "Knee pain from stair climbing and running",
      "Sports rehab after ankle, knee, and shoulder injuries",
      "Neck stiffness and tension headaches",
      "Post-surgical strengthening and movement retraining",
    ],
    whyChooseHeading: "Why choose us in Hiranandani",
    whyChoosePoints: [
      "Experienced physiotherapists with modern clinical protocols",
      "Convenient access for Hiranandani and Powai residents",
      "Holistic sessions covering pain relief and performance",
      "Personalized home-programs to maintain long-term gains",
    ],
    nearbyFocusHeading: "Physiotherapy near IIT Bombay / Chandivali",
    nearbyFocusText:
      "From IIT Bombay students to Chandivali professionals, we provide practical plans designed around real schedules and repeatable outcomes.",
    nearbyLocationLinks: [
      { name: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
      { name: "Ghatkopar", href: "/physiotherapy-in-vikhroli" },
    ],
    faqs: defaultFaqs,
    review: defaultReview,
  },
];

export function getLocationBySlug(slug) {
  return locations.find((l) => l.slug === slug);
}
