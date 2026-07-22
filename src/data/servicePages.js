// Service detail pages - evergreen, condition-focused educational pages.
// Each entry drives a ServiceDetailPage template.

import { SITE_URL } from "./locations";

export const servicePages = [
  {
    slug: "home-visits",
    path: "/services/home-visit-physiotherapy",
    title: "Home Visit Physiotherapy in Mumbai | Adapt Physiotherapy",
    metaDescription:
      "Professional home physiotherapy across Mumbai. Post-surgery rehab, geriatric care, neurological physiotherapy brought to your doorstep. Book a session: +91 77385 56911.",
    heroHeading: "Expert physiotherapy in the comfort of your home",
    heroSubtext:
      "Home visit physiotherapy delivers the same evidence-based, specialist-led care you'd receive at our clinic - right in your living room. Ideal for post-surgical recovery, elderly mobility support, neurological rehab, and busy professionals.",
    intro:
      "Not everyone can travel to a clinic - and recovery shouldn't wait. Our home visit service brings fully equipped physiotherapy sessions to any location across Mumbai, from Powai and Vikhroli to Thane and beyond. Each session includes thorough assessment, hands-on treatment, exercise prescription, and measurable progress tracking - exactly as you'd receive in-clinic.",
    approachSteps: [
      {
        heading: "Comprehensive home assessment",
        body: "We evaluate your living space for safety, accessibility, and functional demands. The assessment covers mobility, transfers, stair negotiation, bathroom safety, and any environmental risks.",
      },
      {
        heading: "Tailored treatment at home",
        body: "Manual therapy, guided exercises, gait training, balance work, and electrotherapy modalities are all delivered safely in your home. Equipment (exercise bands, foam rollers, portable electrotherapy units) is brought to each session.",
      },
      {
        heading: "Family & caregiver training",
        body: "We involve family members in understanding the condition, learning safe transfer techniques, supporting exercise routines between sessions, and recognising signs of progress or concern.",
      },
      {
        heading: "Progress tracking & discharge planning",
        body: "Every session outcome is documented. We set clear functional milestones - walking independently to the kitchen, climbing stairs unassisted, returning to work - and discharge only when those goals are met.",
      },
    ],
    expectedOutcomes: [
      "Improved mobility and independence in daily activities",
      "Reduced fall risk through balance training and home modifications",
      "Faster post-surgical recovery in familiar surroundings",
      "Less caregiver strain through training and confidence-building",
      "Same clinical outcomes as clinic-based treatment",
    ],
    faqs: [
      {
        question: "What areas of Mumbai do you cover for home visits?",
        answer:
          "We cover Powai, Hiranandani Gardens, Vikhroli, Bhandup, Kanjurmarg, Chandivali, Ghatkopar, Saki Naka, Marol Naka, Thane, and surrounding areas. Contact us to confirm availability for your specific location.",
      },
      {
        question: "Do you bring equipment to home sessions?",
        answer:
          "Yes. Portable electrotherapy units (IFT/TENS), exercise bands, foam rollers, balance boards, and assessment tools are brought by the physiotherapist. Larger equipment like parallel bars or stationary cycles are not portable - we adapt exercises using your home environment.",
      },
      {
        question: "Is home physiotherapy as effective as clinic treatment?",
        answer:
          "For most conditions, yes. The functional, real-environment context of home treatment can actually produce better carryover than clinic-based exercise. For high-tech modalities (shockwave, laser), patients may need periodic clinic visits supplemented by home sessions.",
      },
      {
        question: "How much does home physiotherapy cost?",
        answer:
          "Home visit pricing depends on location, session duration, and treatment complexity. A standard 60-minute session typically ranges from ₹1000-1500. Packages for multiple sessions offer reduced per-session rates. Contact us for a detailed quote based on your needs.",
      },
    ],
    relatedServices: [
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehab" },
      { label: "Knee TKR Rehab", href: "/services/knee-tkr-rehab" },
      { label: "Stroke Rehab", href: "/services/stroke-rehab" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
    relatedTechniques: [
      { label: "Interferential Therapy (IFT)", href: "/techniques/interferential-therapy" },
      { label: "TENS Therapy", href: "/techniques/tens-therapy" },
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
      { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
    ],
  },
  {
    slug: "knee-pain",
    path: "/services/knee-pain-physiotherapy",
    title: "Knee Pain Physiotherapy | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Expert knee pain physiotherapy for osteoarthritis, ligament injuries, patellofemoral pain & post-surgery rehab. Evidence-based treatment in Powai, Mumbai.",
    heroHeading: "Knee pain treatment built around your movement goals",
    heroSubtext:
      "Whether your knee pain limits stair climbing, running, sitting cross-legged, or recovering from surgery - our evidence-based programs restore mobility, strength, and confidence.",
    intro:
      "Knee pain is among the most common musculoskeletal complaints we treat - from young athletes with patellar tracking pain to seniors managing knee osteoarthritis to post-operative TKR patients. Our approach always starts with a precise diagnosis, because knee pain with apparently similar symptoms (anterior pain while climbing stairs) can come from patellofemoral syndrome, patellar tendinopathy, fat pad impingement, or early OA - each requiring a different treatment strategy.",
    approachSteps: [
      {
        heading: "Diagnostic assessment & movement analysis",
        body: "We analyse gait, stair negotiation, squat depth, single-leg stance, and patellar tracking. Specific orthopaedic tests differentiate ligament, meniscal, articular cartilage, and patellofemoral sources. If imaging is warranted, we guide referral.",
      },
      {
        heading: "Pain & swelling management (Phase 1)",
        body: "Modalities (IFT, cryotherapy, compression), gentle joint mobilisations (Grade I-II), isometric quadriceps activation to maintain VMO tone without joint load, and activity modification advice to avoid aggravating movements.",
      },
      {
        heading: "Strength & neuromuscular control (Phase 2)",
        body: "Progressive quadriceps, hamstring, gluteal, and calf strengthening emphasising closed-chain exercises. VMO-specific retraining, hip abductor/external rotator strengthening (critical for patellofemoral pain), and proprioceptive balance training.",
      },
      {
        heading: "Return-to-function (Phase 3)",
        body: "Sport-specific or activity-specific drills - stair negotiation, squatting, running gait retraining, jumping and landing mechanics, and agility work. Movement quality must meet discharge criteria before clearance.",
      },
    ],
    expectedOutcomes: [
      "Reduced knee pain during stair climbing and daily walking",
      "Improved quadriceps strength and patellar tracking",
      "Restored full flexion-extension range of motion",
      "Return to recreational running/sports with safe biomechanics",
      "Reduced reliance on pain medication for daily comfort",
    ],
    faqs: [
      {
        question: "Can physiotherapy help knee OA without surgery?",
        answer:
          "Absolutely. Evidence strongly supports exercise therapy as first-line treatment for knee OA. Quadriceps strengthening, gait correction, and joint mobilisation can significantly reduce pain, improve function, and delay or avoid joint replacement in many patients.",
      },
      {
        question: "When is knee surgery needed vs physiotherapy?",
        answer:
          "Physiotherapy is first-line for most knee conditions. Surgery becomes the option when conservative care fails after consistent trial (3-6 months), or for mechanical issues like locked bucket-handle meniscus tears, complete ACL rupture in active athletes, or end-stage OA with bone-on-bone contact. We help you make informed decisions.",
      },
      {
        question: "How long until I can climb stairs without pain?",
        answer:
          "Most patients with patellofemoral pain or mild OA notice stair improvement within 3-5 sessions (2-3 weeks). Post-surgical stair clearance depends on surgical protocol - typically 4-8 weeks. Each plan has specific stair milestones.",
      },
    ],
    relatedServices: [
      { label: "Knee TKR Rehab", href: "/services/knee-tkr-rehab" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehab" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Hiranandani Gardens", href: "/physiotherapy-in-hiranandani" },
    ],
    relatedTechniques: [
      { label: "Interferential Therapy (IFT)", href: "/techniques/interferential-therapy" },
      { label: "Shockwave Therapy (ESWT)", href: "/techniques/shockwave-therapy" },
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
      { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
      { label: "Low-Level Laser Therapy", href: "/techniques/laser-therapy" },
    ],
  },
  {
    slug: "back-pain",
    path: "/services/back-pain-physiotherapy",
    title: "Back Pain Physiotherapy | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Evidence-based back pain physiotherapy. Sciatica, disc pain, posture correction & spine rehabilitation. Expert care in Powai and across Mumbai. Book a consultation.",
    heroHeading: "Back pain treatment that targets the root cause",
    heroSubtext:
      "From sciatica and disc-related pain to chronic postural strain, our back pain programs identify and treat the underlying cause - not just mask the symptoms.",
    intro:
      "Back pain is the leading cause of disability worldwide, affecting 80% of adults at some point. The challenge is not just relieving pain but preventing recurrence. Our approach distinguishes discogenic pain, facet joint pain, sacroiliac dysfunction, myofascial pain, and radicular syndromes - because the same 'lower back pain' symptom has vastly different optimal treatments depending on the source. We combine precise clinical assessment with a phased rehab model that progresses from pain relief to spine resilience.",
    approachSteps: [
      {
        heading: "Precise diagnostic assessment",
        body: "Detailed history of pain behaviour (what eases it? what worsens it?), movement screening including repeated movement testing (McKenzie method) to identify directional preference, neurological exam for radicular signs, and spinal segmental mobility assessment.",
      },
      {
        heading: "Pain centralisation & symptom control (Phase 1)",
        body: "Directional preference exercises (extension or flexion bias), manual therapy (segmental mobilisation, soft tissue release for protective paraspinal spasm), ergonomic modification for sitting and sleeping postures, and pain neuroscience education to de-threaten the experience.",
      },
      {
        heading: "Core & spinal stability (Phase 2)",
        body: "Progressive deep stabiliser activation (transversus abdominis, multifidus), lumbo-pelvic motor control training, hip mobility work (tight hip flexors and hamstrings are common contributors), and introduction of functional loading patterns.",
      },
      {
        heading: "Spine resilience & return-to-life (Phase 3)",
        body: "Progressively loaded spinal movement in all planes (flexion, extension, rotation, lateral flexion), lifting mechanics training, sport-specific or occupation-specific conditioning, and a long-term maintenance program to prevent recurrence.",
      },
    ],
    expectedOutcomes: [
      "Centralisation of radiating symptoms within 1-2 weeks",
      "Improved sitting and standing tolerance for work",
      "Pain-free spinal range of motion for daily activities",
      "Independent self-management with a home program",
      "Significant reduction in recurrence risk",
    ],
    faqs: [
      {
        question: "Should I rest or move when I have back pain?",
        answer:
          "For acute non-specific low back pain, gentle movement in pain-free directions is almost always better than complete bed rest, which promotes stiffness, deconditioning, and fear-avoidance. Your physiotherapist identifies which specific movements are safe and therapeutic for your particular pattern.",
      },
      {
        question: "Do I need an MRI before starting physiotherapy?",
        answer:
          "Not usually. Clinical examination can identify the likely pain source in 85-90% of cases. Imaging is indicated when there are red flags (unexplained weight loss, night pain, neurological deficits progressing) or when symptoms don't respond to 4-6 weeks of guided conservative care. We refer for imaging only when clinically warranted.",
      },
      {
        question: "Can physiotherapy help sciatica?",
        answer:
          "Yes. Specific directional exercises (often extension-based), neural mobilisation to improve nerve glide, and core stabilisation work form an effective conservative program for most radicular pain. The McKenzie method is particularly evidence-supported for discogenic sciatica.",
      },
    ],
    relatedServices: [
      { label: "Neck Pain", href: "/services/neck-pain-physiotherapy" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehab" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
    relatedTechniques: [
      { label: "Interferential Therapy (IFT)", href: "/techniques/interferential-therapy" },
      { label: "TENS Therapy", href: "/techniques/tens-therapy" },
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
      { label: "Low-Level Laser Therapy", href: "/techniques/laser-therapy" },
      { label: "Therapeutic Ultrasound", href: "/techniques/ultrasound-therapy" },
    ],
  },
  {
    slug: "neck-pain",
    path: "/services/neck-pain-physiotherapy",
    title: "Neck Pain Physiotherapy | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Expert neck pain physiotherapy - cervical spondylosis, tension headaches, whiplash & postural neck pain. Evidence-based care in Powai and across Mumbai.",
    heroHeading: "Neck pain relief that addresses the source",
    heroSubtext:
      "From laptop-induced postural strain and tension headaches to cervical spondylosis and whiplash - our neck pain programs are designed around precise diagnosis and lasting correction.",
    intro:
      "Neck pain has become disproportionately common in the screen-dominant lifestyle of Mumbai professionals. Prolonged laptop use, phone-forward head posture ('tech neck'), and long commutes contribute to a predictable pattern of upper cervical extension overload, deep neck flexor weakness, and trapezius overactivity. But not all neck pain is mechanical - cervical radiculopathy, facet joint dysfunction, and whiplash-associated disorder each require distinct treatment pathways. Assessment drives everything we do.",
    approachSteps: [
      {
        heading: "Cervical assessment & red flag screening",
        body: "Active range of motion testing in all planes, segmental mobility palpation (PAIVMs/PPIVMs), neurological exam of upper limb myotomes, dermatomes, and reflexes, vertebrobasilar insufficiency screening where manipulation is considered, and cranio-cervical flexion test for deep neck flexor endurance.",
      },
      {
        heading: "Pain relief & muscle desensitisation (Phase 1)",
        body: "Gentle cervical mobilisations (Maitland Grades I-III), suboccipital and upper trapezius myofascial release, trigger point therapy for associated headache patterns, posture correction for workstation and phone use, and graded cervical isometrics.",
      },
      {
        heading: "Motor control & endurance (Phase 2)",
        body: "Deep neck flexor (longus colli/capitis) re-training using pressure biofeedback (craniocervical flexion protocol), scapular stabiliser strengthening (serratus anterior, lower trapezius), and cervico-scapular dissociation exercises to break the upper-trap-dominant pattern.",
      },
      {
        heading: "Load tolerance & sustained correction (Phase 3)",
        body: "Progressive cervical loading in all planes, return-to-sport or occupation-specific training (e.g., prolonged screen tolerance, overhead work), and maintenance exercise prescription for long-term posture habits.",
      },
    ],
    expectedOutcomes: [
      "Reduced neck pain and headache frequency within 2-3 weeks",
      "Improved cervical range of motion and segmental mobility",
      "Correction of forward head posture and scapular positioning",
      "Improved workstation tolerance without pain",
      "Independent self-management with targeted home exercises",
    ],
    faqs: [
      {
        question: "Is neck cracking/manipulation safe?",
        answer:
          "Cervical high-velocity manipulation carries very small but documented risk of vertebrobasilar artery dissection. Physiotherapists use thorough screening (positional testing, history of vascular conditions) before considering manipulation. Our preference is mobilisation (non-thrust, oscillatory techniques) which achieves comparable outcomes with lower risk.",
      },
      {
        question: "Can neck problems cause headaches?",
        answer:
          "Yes. Cervicogenic headaches originate from upper cervical spine structures (C1-C3) and refer pain to the head via the trigeminocervical nucleus. They often present as one-sided head pain starting at the neck base, worsened by neck movement or sustained postures. Physiotherapy targeting upper cervical dysfunction is highly effective for this headache type.",
      },
      {
        question: "How do I prevent tech neck?",
        answer:
          "The key interventions are: raise your screen to eye level (laptop stand + external keyboard), take 2-minute movement breaks every 30 minutes, perform chin tucks (craniocervical flexion) throughout the day to re-activate deep flexors, and strengthen scapular stabilisers with rows and serratus push-ups. We design a personalised prevention plan.",
      },
    ],
    relatedServices: [
      { label: "Back Pain", href: "/services/back-pain-physiotherapy" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Hiranandani Gardens", href: "/physiotherapy-in-hiranandani" },
    ],
    relatedTechniques: [
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
      { label: "TENS Therapy", href: "/techniques/tens-therapy" },
      { label: "Low-Level Laser Therapy", href: "/techniques/laser-therapy" },
      { label: "Therapeutic Ultrasound", href: "/techniques/ultrasound-therapy" },
    ],
  },
  {
    slug: "parkinsons-rehab",
    path: "/services/parkinsons-rehabilitation",
    title: "Parkinson's Rehabilitation | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Specialised Parkinson's physiotherapy - LSVT BIG, balance training, gait correction, and mobility programs for all stages. Expert neuro physio in Powai, Mumbai.",
    heroHeading: "Parkinson's rehabilitation that preserves movement quality",
    heroSubtext:
      "Our Parkinson's-specific programs - including LSVT BIG principles - target bradykinesia, rigidity, postural instability, and gait freezing to maintain independence at every disease stage.",
    intro:
      "Parkinson's disease progressively challenges movement amplitude, speed, balance, and gait automaticity. Physiotherapy is not optional in Parkinson's management - it is essential. Evidence shows that amplitude-based training (LSVT BIG), external cueing, and balance-challenging exercise can slow functional decline, reduce falls, and preserve quality of life. Our program adapts to disease stage - from early symptoms to advanced mobility needs - and involves family and caregivers throughout.",
    approachSteps: [
      {
        heading: "PD-specific assessment & goal setting",
        body: "UPDRS motor subsection evaluation, Timed Up & Go, Berg Balance Scale, 10-metre walk test, freezing of gait questionnaire, and functional reach test. Goals are co-designed with patient and family - e.g., 'walk independently to the local shop,' 'get up from the floor after a fall.'",
      },
      {
        heading: "Amplitude-based movement training",
        body: "LSVT BIG principles: exaggerated amplitude of all movements to counteract the hypokinetic (underscaled) motor output that defines PD. BIG steps, BIG arm swings, BIG trunk rotation. Training re-calibrates the internal perception of 'normal' movement size to actually-normal kinematics.",
      },
      {
        heading: "External cueing & gait strategies",
        body: "Visual cues (stripes on floor), auditory cues (metronome, counting), and attentional strategies (\"step over the line\") to bypass the deficient basal ganglia automaticity circuit and engage the frontal cortex for gait initiation - specifically effective for freezing episodes.",
      },
      {
        heading: "Balance, falls prevention & flexibility",
        body: "Reactive and anticipatory postural adjustments, rotational trunk movement training (trunk rigidity is an under-treated contributor to falls), floor transfer drills (\"how to get up safely\"), and flexibility work for the characteristic flexed posture.",
      },
    ],
    expectedOutcomes: [
      "Larger, safer gait steps and faster walking speed",
      "Reduced freezing-of-gait episodes through cueing strategies",
      "Improved balance confidence and fall reduction",
      "Maintained or improved independence in daily transfers",
      "Caregiver education for safe home support",
    ],
    faqs: [
      {
        question: "At what stage of Parkinson's should I start physiotherapy?",
        answer:
          "Immediately upon diagnosis. Early physiotherapy establishes movement strategies - amplitude calibration, balance training, and exercise habits - that serve as a reserve. Waiting until significant mobility loss occurs makes intervention harder. The evidence supports early, consistent physiotherapy engagement.",
      },
      {
        question: "What is LSVT BIG and is it available here?",
        answer:
          "LSVT BIG is a research-validated, intensive amplitude-based training protocol (16 sessions over 4 weeks) that recalibrates movement size perception. Our therapists are trained in LSVT principles and incorporate BIG methodology into treatment plans. The full certified protocol can be arranged for motivated patients.",
      },
      {
        question: "Can physiotherapy help with freezing of gait?",
        answer:
          "Yes. Freezing responds well to sensory cueing strategies - visual lines, rhythmic auditory cues (metronome on phone), and cognitive strategies like counting steps or imagining stepping over obstacles. We work with you to identify which specific cue works best and practise it in real environments.",
      },
    ],
    relatedServices: [
      { label: "Stroke Rehab", href: "/services/stroke-rehab" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
    relatedTechniques: [
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
    ],
  },
  {
    slug: "stroke-rehab",
    path: "/services/stroke-rehabilitation",
    title: "Stroke & Hemiplegia Rehabilitation | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Expert stroke rehabilitation in Powai, Mumbai. Neuro physiotherapy for hemiplegia, gait retraining, upper limb recovery, and functional independence. Home visits available.",
    heroHeading: "Stroke rehabilitation: rebuilding movement, reclaiming independence",
    heroSubtext:
      "Our neuro-specialist team uses Bobath/NDT principles, task-specific training, and constraint-induced approaches to maximise recovery after stroke - in clinic and at home.",
    intro:
      "Stroke recovery is a marathon, not a sprint. The brain's capacity for neuroplasticity - reorganisation of neural pathways around damaged areas - continues for years, not weeks. Maximising this window requires high-intensity, task-specific, repetitive practice guided by a neurophysiotherapist who understands spasticity management, motor relearning principles, and compensatory strategy reduction. We treat acute, sub-acute, and chronic stroke at all impairment levels, with a focus on meaningful functional outcomes.",
    approachSteps: [
      {
        heading: "Comprehensive neuro assessment",
        body: "Motor assessment (Fugl-Meyer, Motricity Index), spasticity grading (Modified Ashworth Scale), sensory testing, balance assessment (Berg), gait analysis, and functional independence measure (FIM). We identify key impairments but also preserved capabilities - the foundation for recovery.",
      },
      {
        heading: "Early mobilisation & positioning (Acute/Sub-acute)",
        body: "Bed mobility, supported sitting balance, safe transfer training (bed ↔ chair ↔ toilet), shoulder protection and positioning to prevent subluxation, and passive/active-assisted limb movement to maintain joint range.",
      },
      {
        heading: "Task-specific motor relearning (Sub-acute/Chronic)",
        body: "Sit-to-stand training, weight-bearing through the affected limb, gait retraining with appropriate assistive device progression (walker → quad stick → single stick → independent), stair negotiation, and upper limb reaching/grasping/releasing using shaping and repetitive task practice.",
      },
      {
        heading: "Constraint-induced & compensatory strategy reduction",
        body: "For patients with some active hand/wrist movement: constraint-induced movement therapy (CIMT) principles - restraining the unaffected arm to force use of the affected limb during graded tasks. For all patients: reducing learned non-use and replacing maladaptive compensatory patterns with recovered normal movement.",
      },
    ],
    expectedOutcomes: [
      "Improved bed mobility and independent transfers",
      "Safe, energy-efficient gait with appropriate assistive device",
      "Functional use of affected upper limb in daily tasks",
      "Reduced fall risk through balance and postural control training",
      "Caregiver competence in safe handling and home exercise support",
    ],
    faqs: [
      {
        question: "How soon after a stroke should physiotherapy start?",
        answer:
          "As soon as medically stable - typically within 24-48 hours in hospital settings. Early mobilisation prevents complications (contractures, pressure sores, deconditioning) and begins neuroplastic stimulation immediately. The first 3-6 months offer the largest recovery gains, but meaningful improvement continues beyond 1 year with consistent, targeted therapy.",
      },
      {
        question: "Can you provide stroke rehab at home?",
        answer:
          "Yes. Home-based stroke rehabilitation is a core service. It is often preferable for patients with significant mobility limitations - treatment happens in the exact environment where functional skills are needed. We bring all necessary equipment and train family/caregivers as part of each session.",
      },
      {
        question: "Will I walk again after a stroke?",
        answer:
          "Most stroke survivors regain walking ability with appropriate rehabilitation. Gait recovery depends on stroke severity, location, time since stroke, and rehabilitation intensity. Even with residual weakness, functional walking with an appropriate assistive device is a realistic goal for most patients. Honest prognosis is part of our initial assessment.",
      },
    ],
    relatedServices: [
      { label: "Parkinson's Rehab", href: "/services/parkinsons-rehabilitation" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehab" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
    relatedTechniques: [
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
      { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
    ],
  },
  {
    slug: "knee-tkr-rehab",
    path: "/services/knee-replacement-rehab",
    title: "Knee Replacement (TKR) Rehabilitation | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Specialised knee replacement rehab in Mumbai. Post-TKR physiotherapy for pain, swelling, ROM, strength, and gait - from hospital discharge to independent walking.",
    heroHeading: "Total Knee Replacement rehab: from surgery to stairs",
    heroSubtext:
      "Structured post-TKR rehabilitation that progresses from pain and swelling management through range-of-motion restoration to independent, confident walking - aligned with your surgeon's protocol.",
    intro:
      "A successful knee replacement is 50% surgery and 50% rehabilitation. The implant provides the hardware; physiotherapy builds the software - restoring flexion and extension range, quadriceps activation, proper gait pattern, and stair negotiation. Without guided rehab, stiffness, persistent limp, and quadriceps avoidance patterns can limit the outcome of even a technically perfect surgery. Our TKR program works in close coordination with your orthopaedic surgeon's protocol and milestones.",
    approachSteps: [
      {
        heading: "Early post-operative phase (Day 1-Week 2)",
        body: "Pain and swelling management (cryotherapy, elevation, compression), active ankle pumps for DVT prophylaxis, quadriceps re-activation (isometrics, straight leg raise progression), active-assisted knee flexion and extension to achieve early ROM targets, and safe walker/crutch gait training on flat ground.",
      },
      {
        heading: "ROM & strength building (Week 2-6)",
        body: "Targeted flexion gains (goal: 90°+ by week 2-3, 110°+ by week 6), terminal extension work (the last 10° of active extension is the hardest to regain and the most critical for normal gait), progressive closed-chain strengthening, patellar mobility, and scar tissue mobilisation.",
      },
      {
        heading: "Gait retraining & functional independence (Week 6-12)",
        body: "Weaning from assistive devices (stick → independent), stair negotiation (reciprocal pattern), static and dynamic balance training, return to community walking (uneven surfaces, curbs, crowds), and initiation of low-impact conditioning (cycling, swimming clearance).",
      },
      {
        heading: "Advanced function & maintenance (Month 3+)",
        body: "Kneeling tolerance training, squat-to-lift mechanics for daily tasks, recreational activity guidance (golf, doubles tennis, dancing), and a long-term home maintenance program for strength and ROM.",
      },
    ],
    expectedOutcomes: [
      "Knee flexion ≥110° and full extension within 8-12 weeks",
      "Pain-free, limp-free independent walking on varied surfaces",
      "Confident stair negotiation using reciprocal pattern",
      "Return to recreational walking, cycling, and swimming",
      "Understanding of lifelong knee care for implant longevity",
    ],
    faqs: [
      {
        question: "When should I start physiotherapy after knee replacement?",
        answer:
          "Ideally Day 1 post-op - in-hospital physiotherapy begins immediately. After discharge (typically Day 3-5), continue with home visits or clinic sessions within 48 hours. The first 2 weeks are critical for ROM - delay risks permanent stiffness.",
      },
      {
        question: "How long will I need a walker or stick after TKR?",
        answer:
          "Most patients progress from walker to single stick by week 2-4, and to independent walking by week 4-8. This varies with pre-op fitness, age, and adherence to exercise. Crutch weaning requires good quadriceps control and no significant limp - we don't rush this.",
      },
      {
        question: "Will I be able to kneel after knee replacement?",
        answer:
          "Most patients can kneel after TKR, though sensation may feel different due to the anterior incision numbness. Gradual kneeling desensitisation starts once ROM and strength milestones are met (usually month 3+). We use padded surfaces and graded exposure.",
      },
    ],
    relatedServices: [
      { label: "Knee Pain", href: "/services/knee-pain-physiotherapy" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehab" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
    relatedTechniques: [
      { label: "Interferential Therapy (IFT)", href: "/techniques/interferential-therapy" },
      { label: "Therapeutic Ultrasound", href: "/techniques/ultrasound-therapy" },
      { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
    ],
  },
  {
    slug: "post-surgery-rehab",
    path: "/services/post-surgery-rehabilitation",
    title: "Post-Surgery Physiotherapy | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Expert post-surgical rehabilitation for orthopaedic, neuro & general surgery recovery. ACL, TKR, spinal surgery, fracture rehab. Home visits across Mumbai.",
    heroHeading: "Post-surgery rehab that bridges the gap to full recovery",
    heroSubtext:
      "From ACL reconstruction and spinal surgery to general post-operative deconditioning - structured rehabilitation that follows surgical protocols while pushing your functional ceiling.",
    intro:
      "Surgery fixes the structural problem; physiotherapy restores the function. Too often, patients are discharged with a one-page exercise sheet and no guided progression - resulting in avoidable stiffness, weakness, compensatory patterns, and delayed return to work or sport. Our post-operative programs are protocol-aligned (working with your surgeon's restrictions and milestones) but individually paced - because two patients with the same surgery can have very different recovery trajectories based on pre-op fitness, tissue healing rate, and motivation.",
    approachSteps: [
      {
        heading: "Protocol review & baseline assessment",
        body: "We review your surgeon's post-operative protocol (weight-bearing status, ROM restrictions, precautions), assess current status against expected milestones, and identify gaps to address. Pain, swelling, range, strength, and functional mobility are measured.",
      },
      {
        heading: "Protection phase - heal first",
        body: "Respecting tissue healing timelines while preventing secondary complications. Controlled ROM within surgical limits, protected weight-bearing, isometric activation, oedema management, and safe transfers/mobility within restrictions.",
      },
      {
        heading: "Restoration phase - reclaim movement",
        body: "Full ROM (once cleared), progressive strengthening from isometric → isotonic → loaded, scar mobility, proprioceptive retraining, and normalisation of gait and functional patterns.",
      },
      {
        heading: "Return phase - back to life/sport",
        body: "Activity-specific or sport-specific conditioning, movement quality testing against return-to-sport criteria (not time alone), and a long-term maintenance plan to protect the surgical site.",
      },
    ],
    expectedOutcomes: [
      "Full joint range of motion within surgeon-allowed timelines",
      "Protocol-compliant yet maximally progressive strength restoration",
      "Elimination of compensatory gait or movement patterns",
      "Safe return to work, driving, and recreational activities",
      "Reduced risk of re-injury or contralateral compensation injury",
    ],
    faqs: [
      {
        question: "Can you work with my surgeon's specific protocol?",
        answer:
          "Yes. We request a copy of your discharge summary and post-operative protocol. Every surgeon has specific preferences on weight-bearing, ROM limits, and brace usage. Our program always works within these parameters while maximising what is permitted.",
      },
      {
        question: "What surgeries do you provide rehab for?",
        answer:
          "ACL reconstruction, meniscus repair, total knee and hip replacement, rotator cuff repair, shoulder labral repair, ankle ligament reconstruction, spinal discectomy/fusion, fracture ORIF, and general abdominal/thoracic post-operative deconditioning.",
      },
      {
        question: "How is post-op physiotherapy different from regular physiotherapy?",
        answer:
          "Post-op rehab respects tissue healing timelines - you cannot load a healing graft or repairing tendon the way you load a chronic tendinopathy. Exercises progress based on biological healing stages (inflammatory → proliferative → remodelling) and surgical restrictions, not just symptoms. Knowing what NOT to do is as important as knowing what to do.",
      },
    ],
    relatedServices: [
      { label: "Knee TKR Rehab", href: "/services/knee-replacement-rehab" },
      { label: "Knee Pain", href: "/services/knee-pain-physiotherapy" },
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Hiranandani Gardens", href: "/physiotherapy-in-hiranandani" },
    ],
    relatedTechniques: [
      { label: "Therapeutic Ultrasound", href: "/techniques/ultrasound-therapy" },
      { label: "TENS Therapy", href: "/techniques/tens-therapy" },
      { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
    ],
  },
  {
    slug: "paediatric-physiotherapy",
    path: "/services/paediatric-physiotherapy",
    title: "Paediatric Physiotherapy | Adapt Physiotherapy Mumbai",
    metaDescription:
      "Specialised paediatric physiotherapy for cerebral palsy, Down syndrome, developmental delays & congenital conditions. Play-based, family-centred care in Mumbai.",
    heroHeading: "Paediatric physiotherapy: building movement foundations",
    heroSubtext:
      "Specialised care for children with developmental delays, Down syndrome, cerebral palsy, and congenital conditions - using play-based therapy to achieve functional milestones.",
    intro:
      "Children are not small adults - their musculoskeletal, neurological, and physiological systems are developing, and their motivation and engagement require a fundamentally different therapeutic approach. Our paediatric physiotherapy uses play-based, family-centred methods to work on gross motor milestones (head control, rolling, sitting, crawling, walking), balance, coordination, postural alignment, and functional independence. We work closely with parents, because in paediatrics, the parent is the primary therapist - we provide the roadmap and training.",
    approachSteps: [
      {
        heading: "Developmental assessment & family goal-setting",
        body: "Standardised motor assessment (GMFM, AIMS depending on age and condition), tone and reflex evaluation, postural alignment, gait analysis if ambulant, and functional ability assessment. Goals are set WITH the family - 'I want my child to sit independently at the dinner table' or 'walk into school holding my hand.'",
      },
      {
        heading: "Play-based motor learning",
        body: "Therapeutic activities embedded in play - obstacle courses for crawling and balance, reaching games for trunk control, balloon play for upper limb coordination, and music/movement activities for rhythmic motor patterns. The child engages with the activity, not the 'exercise.'",
      },
      {
        heading: "Neurodevelopmental handling & positioning",
        body: "NDT/Bobath principles for tone management through key points of control, positioning strategies to prevent contractures and promote symmetry, and handling techniques that inhibit abnormal tone patterns while facilitating desired movement.",
      },
      {
        heading: "Equipment guidance & environmental adaptation",
        body: "Appropriate seating, standing frames, orthotics, walkers, and mobility aids - prescribed in coordination with the medical team. Home and school environment modifications to support independence and safe mobility.",
      },
    ],
    expectedOutcomes: [
      "Achievement of next developmental motor milestone",
      "Improved postural alignment in sitting, standing, or walking",
      "Reduced risk of contractures through positioning and active movement",
      "Increased participation in family, school, and play activities",
      "Parent confidence in handling, positioning, and home program delivery",
    ],
    faqs: [
      {
        question: "What conditions do you treat in paediatric physiotherapy?",
        answer:
          "We treat cerebral palsy (all GMFCS levels), Down syndrome, developmental coordination disorder (DCD), spina bifida, congenital torticollis, Erb's palsy, juvenile idiopathic arthritis, and general gross motor delay. We also treat children post-orthopaedic surgery or injury.",
      },
      {
        question: "My child has Down syndrome - when should physiotherapy start?",
        answer:
          "As early as possible - ideally within the first months of life. Early intervention for hypotonia, joint hypermobility, and delayed motor milestones significantly improves long-term function. The neuroplasticity window in early childhood is the greatest opportunity for building motor patterns.",
      },
      {
        question: "Do parents stay during the session?",
        answer:
          "Absolutely. Parent involvement is fundamental to paediatric physiotherapy. We teach handling, positioning, and exercise techniques during the session so you can implement them daily at home. Two hours a week with a therapist is far less important than the cumulative effect of daily guided activity at home.",
      },
    ],
    relatedServices: [
      { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
      { label: "Stroke Rehab", href: "/services/stroke-rehab" },
    ],
    relatedLocations: [
      { label: "Powai", href: "/physiotherapy-in-powai" },
      { label: "Vikhroli", href: "/physiotherapy-in-vikhroli" },
    ],
    relatedTechniques: [
      { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
      { label: "Manual Therapy", href: "/techniques/manual-therapy" },
    ],
  },
];

export function getServicePageBySlug(slug) {
  return servicePages.find((s) => s.slug === slug);
}

export function buildServicePageSchema(page) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: page.title,
      url: `${SITE_URL}${page.path}`,
      description: page.metaDescription,
      about: ["Physiotherapy", "Rehabilitation", "Pain Management"],
      audience: { "@type": "MedicalAudience", audienceType: "Patients" },
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