// Team member data for the Meet the Team page.
// Photos to be added when available.

export const teamMembers = [
  {
    slug: "dr-avdhoot-shimpi",
    name: "Dr. Avdhoot Shimpi",
    role: "Neuro & MSK Physiotherapist",
    qualifications: ["BPT", "CKTP", "MDT"],
    bio: "Dr. Avdhoot Shimpi is an experienced physiotherapist in Powai, Mumbai with strong expertise in neuro as well as musculoskeletal rehabilitation. He specialises in managing MSK conditions using Maitland techniques, manual therapy, McKenzie therapy, and gait training. His patient-focused approach ensures effective pain management, improved mobility, and functional recovery. Combining advanced physiotherapy techniques with personalised care, he has become a trusted professional for addressing complex musculoskeletal issues in the Powai community.",
    photoUrl: "/avdhoot.jpeg",
    order: 1,
  },
  {
    slug: "dr-sama-kanagat",
    name: "Dr. Sama Kanagat",
    role: "MSK & Rehabilitation Specialist",
    qualifications: ["BPT", "DPT (USA)"],
    bio: "Dr. Sama Kanagat (PT) is a specialist in musculoskeletal injuries. As an expert in rehabilitation, she regularly practices advanced physiotherapy techniques, including McKenzie therapy, gait training, and musculoskeletal injury management. With her DPT training from the USA, she brings an international perspective to assessment and treatment. Committed to effective pain treatment for bone and muscle pain, she provides personalised care for optimal recovery.",
    photoUrl: "/ms-sama-kanagat.png",
    order: 2,
  },
  {
    slug: "dr-anvita-redkar",
    name: "Dr. Anvita Redkar",
    role: "Geriatric & Women's Health Physiotherapist",
    qualifications: ["BPT", "MPT (MSK)", "Certified Pilates & Aerobics Instructor", "Certified Pre & Postnatal Fitness Trainer"],
    bio: "Dr. Anvita Redkar (PT) is a distinguished geriatric physiotherapist in Powai, Mumbai, specialising in musculoskeletal rehabilitation. Apart from being a Pilates and aerobics instructor, she is also a certified pre and postnatal fitness trainer. She integrates evidence-based physio techniques including manual therapy and pelvic floor therapy, into personalised treatment plans. With a strong clinical foundation and expertise, she focuses on addressing women's health issues and improving mobility, reducing discomfort, and enhancing functional independence for her patients.",
    photoUrl: "/anvita.jpeg",
    order: 3,
  },
];

export function getTeamMemberBySlug(slug) {
  return teamMembers.find((m) => m.slug === slug);
}

export function getTeamMembersSorted() {
  return [...teamMembers].sort((a, b) => a.order - b.order);
}