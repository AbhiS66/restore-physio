// Therapeutic technique pages - educational content for 7 techniques.
// Each entry drives a TechniquePage template.

import { SITE_URL } from "./locations";

export const techniquePages = [
  {
    slug: "ift",
    path: "/techniques/interferential-therapy",
    title: "Interferential Therapy (IFT) | Adapt Physiotherapy",
    metaDescription:
      "Learn how Interferential Therapy (IFT) relieves pain, reduces inflammation, and speeds healing. Used at Adapt Physiotherapy for back pain, arthritis, and sports injuries.",
    heroHeading: "Interferential Therapy (IFT): Drug-free pain relief",
    heroSubtext:
      "IFT uses intersecting medium-frequency currents to penetrate deep tissues, reducing pain and inflammation without medication. One of the most widely used electrotherapy modalities in physiotherapy.",
    whatIsIt:
      "Interferential Therapy (IFT) delivers two medium-frequency alternating currents that intersect inside the body, creating a low-frequency 'beat' modulation deep within the tissues. This interference pattern stimulates nerves, blocks pain signals, and increases blood flow - all without the surface discomfort of low-frequency currents.",
    howItWorks: [
      {
        heading: "Electrode placement & frequency selection",
        body: "Four electrodes are placed around the treatment area. The currents cross at the target depth - typically 4-5 kHz - producing an interferential beat frequency between 1-150 Hz that matches the therapeutic goal (pain gate vs. endorphin release).",
      },
      {
        heading: "Pain gate mechanism",
        body: "At 80-150 Hz, IFT stimulates large-diameter A-beta nerve fibres, which 'close the gate' at spinal cord level to pain signals from smaller C fibres. Relief begins during the session and can last hours after.",
      },
      {
        heading: "Circulatory & metabolic effects",
        body: "At 1-10 Hz, IFT triggers vasodilation and increased capillary circulation. Improved blood flow clears inflammatory metabolites, reduces oedema, and delivers oxygen and nutrients to damaged tissues.",
      },
    ],
    benefits: [
      "Significant reduction in acute and chronic musculoskeletal pain",
      "Decreased soft tissue swelling and oedema",
      "Accelerated healing of ligament sprains and muscle strains",
      "Non-invasive and drug-free - ideal when medication is contraindicated",
      "Can be combined with exercise therapy during the same session",
    ],
    conditionsTreated: [
      "Low back pain and sciatica",
      "Knee osteoarthritis and joint stiffness",
      "Frozen shoulder and rotator cuff tendonitis",
      "Cervical spondylosis and neck pain",
      "Sports injuries - ankle sprains, muscle contusions",
    ],
    faqs: [
      {
        question: "Is IFT painful?",
        answer:
          "No. Most patients feel a gentle tingling or buzzing sensation beneath the electrodes. Intensity is adjusted to each patient's comfort. The medium-frequency carrier current reduces skin impedance, so surface sensation is far less than traditional TENS.",
      },
      {
        question: "How long is a typical IFT session?",
        answer:
          "Most sessions last 12-20 minutes depending on the condition and area treated. Multiple areas may be treated in a single session. Relief often begins during treatment.",
      },
      {
        question: "How many IFT sessions will I need?",
        answer:
          "Acute conditions typically show improvement within 3-5 sessions. Chronic conditions may require 6-10 sessions alongside exercise therapy and manual treatment. Your physiotherapist will assess progress at each visit.",
      },
      {
        question: "Are there any contraindications?",
        answer:
          "IFT is avoided over pacemakers, during pregnancy (over the abdomen/low back), over active malignancies, and over open wounds or infections. Your physiotherapist screens for these before treatment.",
      },
    ],
    scientificRefs: [
      "Goats GC. Interferential current therapy. Br J Sports Med. 1990.",
      "Hurley DA et al. Interferential therapy electrode placement in acute low back pain. Arch Phys Med Rehabil. 2004.",
    ],
    relatedServices: [
      { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
      { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
      { label: "Neck Pain Physiotherapy", href: "/services/neck-pain-physiotherapy" },
      { label: "Home Visit Physiotherapy", href: "/services/home-visit-physiotherapy" },
    ],
  },
  {
    slug: "k-taping",
    path: "/techniques/kinesiology-taping",
    title: "Kinesiology Taping (K-Taping) | Adapt Physiotherapy",
    metaDescription:
      "Understand how Kinesiology Taping supports muscles and joints, reduces pain, and improves movement. Expert K-taping at Adapt Physiotherapy Mumbai.",
    heroHeading: "Kinesiology Taping: Support that moves with you",
    heroSubtext:
      "K-Taping uses elastic therapeutic tape applied in specific patterns to lift the skin, offload fascia, support muscles, and ease pain - all while allowing full range of motion.",
    whatIsIt:
      "Kinesiology Taping (K-Tape) is an elastic cotton tape with a medical-grade acrylic adhesive that mimics the elasticity of human skin. When applied strategically with varying tension, direction, and recoil, the tape mechanically decompresses tissue, alters proprioceptive feedback, and modulates pain signals without restricting movement.",
    howItWorks: [
      {
        heading: "Skin lifting & decompression",
        body: "The tape's elastic recoil lifts the epidermis, creating a microscopic gap between skin, fascia, and underlying muscle. This decompression reduces pressure on nociceptors (pain receptors), improves interstitial fluid drainage, and promotes better lymphatic and capillary flow.",
      },
      {
        heading: "Proprioceptive feedback & neuromuscular re-education",
        body: "The constant elastic pull on the skin provides ongoing sensory input to the brain about joint position and muscle activation. This helps correct faulty movement patterns - for example, gently cueing scapular retraction in rounded-shoulder posture.",
      },
      {
        heading: "Fascial correction & muscle facilitation",
        body: "Depending on application direction (origin-to-insertion vs. insertion-to-origin) and tension (15-50%), K-Tape can either facilitate an underactive muscle or inhibit an overactive one. This makes it valuable for both postural correction and injury rehab.",
      },
    ],
    benefits: [
      "Pain modulation without medication - often noticeable within hours",
      "Supports injured muscles/joints while preserving full range of motion",
      "Reduces bruising and swelling post-injury through improved lymphatic flow",
      "Water-resistant - stays effective for 3-5 days including during showers",
      "Complements manual therapy and exercise for better outcomes",
    ],
    conditionsTreated: [
      "Rotator cuff strain and shoulder impingement",
      "Patellofemoral pain and patella tracking dysfunction",
      "Ankle inversion sprains and chronic ankle instability",
      "Lower back muscle spasm and postural strain",
      "Lymphoedema and post-operative swelling",
    ],
    faqs: [
      {
        question: "How long does K-Tape stay on?",
        answer:
          "Typically 3-5 days. The tape is water-resistant so you can shower normally. Avoid scrubbing the tape directly. If edges peel, trim them. Remove if any irritation occurs.",
      },
      {
        question: "Does K-Taping actually work or is it placebo?",
        answer:
          "The mechanical skin-lifting effect is well-documented in imaging studies. K-Tape demonstrably alters subcutaneous space and improves lymphatic flow. Its proprioceptive effect also has measurable impact on movement patterns when applied correctly.",
      },
      {
        question: "Can I apply K-Tape myself?",
        answer:
          "Basic applications for common areas can be self-applied after instruction from your physiotherapist. Complex directional applications for specific muscle inhibition/facilitation are best left to a trained practitioner to ensure correct tension and recoil direction.",
      },
    ],
    scientificRefs: [
      "Kase K, Wallis J, Kase T. Clinical Therapeutic Applications of the Kinesio Taping Method. 2nd ed. 2003.",
      "Williams S et al. Kinesio taping in musculoskeletal conditions: systematic review. J Physiother. 2012.",
    ],
    relatedServices: [
      { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehabilitation" },
      { label: "Knee TKR Rehab", href: "/services/knee-replacement-rehab" },
      { label: "Home Visit Physiotherapy", href: "/services/home-visit-physiotherapy" },
    ],
  },
  {
    slug: "shockwave-therapy",
    path: "/techniques/shockwave-therapy",
    title: "Shockwave Therapy (ESWT) | Adapt Physiotherapy",
    metaDescription:
      "Discover how Extracorporeal Shockwave Therapy treats chronic tendon pain, calcifications, and delayed healing. Non-invasive ESWT at Adapt Physiotherapy Mumbai.",
    heroHeading: "Shockwave Therapy: Reboot stubborn tissue healing",
    heroSubtext:
      "ESWT delivers high-energy acoustic pulses to reactivate stalled healing in chronic tendinopathies, calcific deposits, and non-union fractures that haven't responded to conventional treatment.",
    whatIsIt:
      "Extracorporeal Shockwave Therapy (ESWT) generates high-amplitude acoustic pressure waves focused on a specific tissue depth. These mechanical pulses trigger a cascade of biological responses - neovascularisation, growth factor release, and breakdown of calcific deposits - essentially 'rebooting' the body's stalled healing process in chronic conditions.",
    howItWorks: [
      {
        heading: "Mechanical cavitation & tissue stimulation",
        body: "The shockwave's pressure gradient creates microscopic cavitation bubbles in the tissue. Their collapse produces secondary mechanical forces that stimulate tenocytes, osteoblasts, and fibroblasts - cells responsible for tendon, bone, and connective tissue repair.",
      },
      {
        heading: "Neovascularisation & growth factors",
        body: "ESWT upregulates eNOS, VEGF, and PCNA - key signalling molecules that promote new capillary formation. Increased blood supply delivers nutrients and progenitor cells to chronically hypovascular tissues like the supraspinatus tendon and plantar fascia.",
      },
      {
        heading: "Calcific deposit disruption",
        body: "In calcific tendinopathy (e.g. rotator cuff), focused shockwaves fragment calcium deposits mechanically. The body then phagocytoses and clears these fragments over subsequent weeks, reducing tendon impingement and pain.",
      },
    ],
    benefits: [
      "Clinically proven for chronic tendinopathies unresponsive to other modalities",
      "Stimulates actual tissue regeneration, not just symptom relief",
      "Non-invasive - no incisions, no anaesthesia, no downtime",
      "One of very few treatments effective for calcific tendon conditions",
      "Results sustained at 6-12 month follow-ups in published trials",
    ],
    conditionsTreated: [
      "Plantar fasciitis (chronic heel pain)",
      "Calcific rotator cuff tendinopathy",
      "Achilles tendinopathy (insertional and mid-portion)",
      "Tennis elbow / Golfer's elbow (lateral & medial epicondylitis)",
      "Patellar tendinopathy (jumper's knee)",
      "Delayed bone healing and non-union fractures",
    ],
    faqs: [
      {
        question: "Is shockwave therapy painful?",
        answer:
          "Treatment sensation ranges from mild discomfort to moderate pain depending on the condition's chronicity and the energy level required. Each pulse lasts microseconds. Sessions are short (5-15 min). Energy is adjusted to your tolerance, and post-treatment soreness is typically mild and resolves within 1-2 days.",
      },
      {
        question: "How many shockwave sessions do I need?",
        answer:
          "Most protocols involve 3-5 sessions spaced 1 week apart to allow tissue response between treatments. Chronic calcific conditions may need up to 6 sessions. Improvement is usually noticeable by session 2-3.",
      },
      {
        question: "Is there any downtime after ESWT?",
        answer:
          "You can resume daily activities immediately. High-impact exercise on the treated area should be avoided for 48 hours. Your physiotherapist provides specific aftercare guidance including stretches and activity modification.",
      },
      {
        question: "Who is not suitable for shockwave therapy?",
        answer:
          "ESWT is contraindicated over pregnant uterus, over malignancies, in patients on anticoagulants (bleeding risk), and over open growth plates in children. Your physiotherapist screens thoroughly during assessment.",
      },
    ],
    scientificRefs: [
      "Rompe JD et al. Shock wave therapy for chronic plantar fasciopathy. Clin Orthop Relat Res. 2002.",
      "Gerdesmeyer L et al. Radial ESWT for chronic Achilles tendinopathy. JBJS Am. 2008.",
      "Wang CJ. Extracorporeal shockwave therapy in musculoskeletal disorders. J Orthop Surg Res. 2012.",
    ],
    relatedServices: [
      { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
      { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
      { label: "Neck Pain Physiotherapy", href: "/services/neck-pain-physiotherapy" },
    ],
  },
  {
    slug: "tens-therapy",
    path: "/techniques/tens-therapy",
    title: "TENS Therapy (Transcutaneous Electrical Nerve Stimulation) | Adapt Physiotherapy",
    metaDescription:
      "Learn about TENS therapy for pain relief - how it works, conditions treated, and what to expect. Used at Adapt Physiotherapy for acute and chronic pain management.",
    heroHeading: "TENS Therapy: Natural pain relief through electrical stimulation",
    heroSubtext:
      "Transcutaneous Electrical Nerve Stimulation (TENS) uses low-voltage electrical impulses to block pain signals and trigger the body's natural endorphin release - giving you drug-free pain control.",
    whatIsIt:
      "TENS (Transcutaneous Electrical Nerve Stimulation) is a portable, non-invasive pain management modality that delivers low-voltage electrical impulses through electrodes placed on the skin. It works via two complementary mechanisms - the pain gate theory (fast relief) and endogenous opioid release (sustained relief). It is one of the safest and most researched electrotherapy modalities available.",
    howItWorks: [
      {
        heading: "Conventional TENS (pain gate)",
        body: "High-frequency (~80-120 Hz), low-intensity stimulation activates large-diameter A-beta sensory fibres. These fibres transmit faster than pain-carrying C fibres and effectively 'close the gate' on pain signals at the dorsal horn of the spinal cord. The effect begins within minutes.",
      },
      {
        heading: "Acupuncture-like TENS (endorphin release)",
        body: "Low-frequency (~2-4 Hz), high-intensity stimulation that produces visible muscle twitches. This triggers the descending pain inhibition system, releasing beta-endorphin and met-enkephalin - your body's own opioid painkillers. The effect takes 20-30 minutes to onset but lasts hours.",
      },
      {
        heading: "Burst-mode TENS",
        body: "Combines both mechanisms - high-frequency bursts delivered at low-frequency intervals. Popular for stubborn mixed pain states where both immediate relief and lasting endorphin-mediated analgesia are desired.",
      },
    ],
    benefits: [
      "Immediate pain relief without medication or systemic side effects",
      "Patient-controlled - intensity adjustable in real time",
      "Portable - small devices can be worn during daily activities",
      "No drug interactions - safe alongside oral medications",
      "CEA/IFA approved, supported by decades of clinical evidence",
    ],
    conditionsTreated: [
      "Chronic low back pain",
      "Osteoarthritis pain (knee, hip, hand)",
      "Labour pain and dysmenorrhea",
      "Post-operative pain",
      "Neuropathic pain and diabetic neuropathy",
    ],
    faqs: [
      {
        question: "How does TENS differ from IFT?",
        answer:
          "IFT uses two crossing medium-frequency currents to target deeper tissues more comfortably. TENS uses a single low-frequency current applied superficially. Both relieve pain via the gate mechanism. IFT is generally preferred for deep joint/muscle pain; TENS is excellent for surface-level and portable pain management.",
      },
      {
        question: "Can I use TENS at home?",
        answer:
          "Yes. After the first session and proper instruction from your physiotherapist on electrode placement and intensity settings, TENS can be safely used at home for ongoing pain management between clinic visits.",
      },
      {
        question: "Are there any side effects?",
        answer:
          "Side effects are minimal. Some patients experience mild skin irritation under the electrodes (use hypoallergenic gel pads). Over-stimulation can cause muscle fatigue. Following intensity guidelines prevents these issues.",
      },
    ],
    scientificRefs: [
      "Sluka KA, Walsh D. Transcutaneous electrical nerve stimulation: basic science mechanisms and clinical effectiveness. J Pain. 2003.",
      "Johnson MI. Transcutaneous Electrical Nerve Stimulation (TENS). In: Watson T, ed. Electrotherapy: Evidence-Based Practice. 12th ed. Elsevier; 2008.",
    ],
    relatedServices: [
      { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
      { label: "Neck Pain Physiotherapy", href: "/services/neck-pain-physiotherapy" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehabilitation" },
      { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
    ],
  },
  {
    slug: "ultrasound-therapy",
    path: "/techniques/ultrasound-therapy",
    title: "Therapeutic Ultrasound | Adapt Physiotherapy",
    metaDescription:
      "Learn how therapeutic ultrasound promotes soft tissue healing, reduces inflammation, and treats chronic musculoskeletal conditions. Available at Adapt Physiotherapy Mumbai.",
    heroHeading: "Therapeutic Ultrasound: Deep heating for accelerated healing",
    heroSubtext:
      "Therapeutic ultrasound uses high-frequency sound waves to generate deep heat and micro-vibration within tissues - promoting blood flow, collagen repair, and tissue extensibility.",
    whatIsIt:
      "Therapeutic ultrasound delivers inaudible high-frequency acoustic waves (1-3 MHz) into the body via a transducer head. The mechanical vibration creates two distinct therapeutic effects - thermal (deep heating at tissue interfaces) and non-thermal (cavitation and acoustic streaming). Both contribute to accelerated soft tissue repair.",
    howItWorks: [
      {
        heading: "Deep thermal effect",
        body: "Ultrasound waves encounter resistance at tissue interfaces - bone-soft tissue, ligament-muscle, and tendon-sheath boundaries. At these interfaces, sound energy converts to heat more efficiently than in homogeneous tissue, selectively warming structures like joint capsules, deep tendons, and ligament attachments that superficial heat packs cannot reach.",
      },
      {
        heading: "Cavitation & acoustic microstreaming",
        body: "Even in non-thermal mode (pulsed, low intensity), the pressure oscillations create microscopic gas bubbles that vibrate rather than collapse (stable cavitation). This vibration produces acoustic microstreaming - fluid movement at the cellular membrane level - which enhances ion transport, protein synthesis, and cell membrane permeability.",
      },
      {
        heading: "Tissue regeneration cascade",
        body: "Both thermal and non-thermal mechanisms stimulate fibroblasts to increase collagen synthesis, accelerate the inflammatory-to-proliferative phase transition in healing, and improve collagen fibre realignment in the remodelling phase. This makes ultrasound particularly valuable in the first 2-6 weeks post-injury.",
      },
    ],
    benefits: [
      "Reaches deep tissue structures (3-5 cm) inaccessible to surface heat",
      "Accelerates soft tissue repair in tendon, ligament, and muscle injuries",
      "Improves tissue extensibility before stretching or manual therapy",
      "Clinically established - in use for over 60 years with strong safety record",
      "Both thermal and non-thermal protocols available for different healing stages",
    ],
    conditionsTreated: [
      "Rotator cuff tendinopathy and frozen shoulder (adhesive capsulitis)",
      "Achilles tendonitis and plantar fasciitis",
      "Lateral epicondylitis (tennis elbow)",
      "Carpal tunnel syndrome",
      "Scar tissue remodelling post-surgery",
    ],
    faqs: [
      {
        question: "Can I feel ultrasound during treatment?",
        answer:
          "Continuous (thermal) ultrasound produces a gentle warming sensation. Pulsed (non-thermal) ultrasound is typically imperceptible. The transducer head glides smoothly over gel-applied skin. Treatment is comfortable and non-invasive.",
      },
      {
        question: "When is ultrasound preferred over other electrotherapy?",
        answer:
          "Ultrasound excels in treating deep, localised soft tissue injuries - particularly tendon, ligament, and joint capsule structures that heat packs can't reach. It's also the primary modality for scar tissue mobilisation and pre-stretch tissue preparation.",
      },
      {
        question: "How many sessions are typically needed?",
        answer:
          "Acute conditions often show benefit within 4-6 sessions over 2 weeks. Chronic tendon conditions may need 8-12 sessions combined with progressive loading exercises. Ultrasound is rarely used in isolation - it complements manual therapy and exercise.",
      },
    ],
    scientificRefs: [
      "Watson T. Ultrasound in contemporary physiotherapy practice. Ultrasonics. 2008.",
      "Draper DO et al. Rate of temperature increase in human muscle during 1 MHz and 3 MHz continuous ultrasound. J Orthop Sports Phys Ther. 1989.",
    ],
    relatedServices: [
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehabilitation" },
      { label: "Knee TKR Rehab", href: "/services/knee-replacement-rehab" },
      { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
      { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
    ],
  },
  {
    slug: "laser-therapy",
    path: "/techniques/laser-therapy",
    title: "Low-Level Laser Therapy (LLLT) | Adapt Physiotherapy",
    metaDescription:
      "Discover how Low-Level Laser Therapy accelerates wound healing, reduces inflammation, and manages pain. Photobiomodulation at Adapt Physiotherapy Mumbai.",
    heroHeading: "Laser Therapy: Harnessing light for tissue repair",
    heroSubtext:
      "Low-Level Laser Therapy (LLLT) - also called photobiomodulation - uses specific wavelengths of light to trigger cellular repair, reduce inflammation, and relieve pain without heat or discomfort.",
    whatIsIt:
      "Low-Level Laser Therapy (LLLT), now more accurately termed Photobiomodulation, delivers monochromatic light in the red to near-infrared spectrum (600-1000 nm) to biological tissue. At these specific wavelengths, photons are absorbed by mitochondrial chromophores - particularly cytochrome c oxidase - triggering a cascade of intracellular signalling that increases ATP production, reduces oxidative stress, and modulates inflammatory mediators.",
    howItWorks: [
      {
        heading: "Mitochondrial photoactivation",
        body: "Cytochrome c oxidase (Complex IV in the electron transport chain) absorbs photons in the 660-905 nm range. Photoactivation increases the enzyme's catalytic activity, raising ATP synthesis by up to 200% in compromised cells. More ATP means more energy for repair, proliferation, and matrix synthesis.",
      },
      {
        heading: "Redox modulation & anti-inflammatory signalling",
        body: "LLLT transiently increases reactive oxygen species (ROS) at very low levels - a hormetic effect that upregulates antioxidant defences (superoxide dismutase, catalase) and suppresses NF-κB, the master transcription factor for pro-inflammatory cytokines. The net result: reduced chronic inflammation.",
      },
      {
        heading: "Increased microcirculation",
        body: "Laser irradiation triggers nitric oxide (NO) release from haemoglobin and cytochrome c oxidase binding sites. NO is a potent vasodilator - increased local blood flow delivers oxygen and metabolites while clearing inflammatory debris.",
      },
    ],
    benefits: [
      "Clinically proven to accelerate wound closure and tissue repair",
      "Dose-dependent anti-inflammatory effect without medication",
      "No thermal sensation - safe for acute injuries where heat is contraindicated",
      "Applications spanning wound care, tendinopathy, nerve pain, and OA",
      "Strong systematic review evidence for neck pain and tendinopathy outcomes",
    ],
    conditionsTreated: [
      "Chronic neck pain and cervical myofascial pain",
      "Tennis elbow and Achilles tendinopathy",
      "Diabetic wound healing and pressure ulcers",
      "Temporomandibular joint (TMJ) dysfunction",
      "Post-herpetic neuralgia and neuropathic pain",
    ],
    faqs: [
      {
        question: "Does laser therapy produce heat?",
        answer:
          "No. LLLT uses non-thermal power levels (<500 mW typically). You feel nothing during treatment apart from the light touch of the applicator. This makes it safe for acute inflammation where heat is contraindicated.",
      },
      {
        question: "How is it different from surgical/high-power lasers?",
        answer:
          "Surgical lasers cut or ablate tissue via thermal destruction. LLLT uses 100-1000× lower power density and works photochemically, not thermally. It stimulates repair rather than destroying tissue.",
      },
      {
        question: "How many sessions produce results?",
        answer:
          "Acute conditions may respond within 3-5 sessions. Chronic tendinopathies and wound healing typically need 8-15 sessions. Optimal dosing and frequency are determined by the condition, depth, and skin type. Your physiotherapist follows WALT (World Association for Laser Therapy) dosing guidelines.",
      },
    ],
    scientificRefs: [
      "Hamblin MR, Demidova TN. Mechanisms of low level light therapy. Proc SPIE. 2006.",
      "Chow RT et al. Efficacy of low-level laser therapy in the management of neck pain: systematic review and meta-analysis. Lancet. 2009.",
      "Tumilty S et al. Low level laser treatment of tendinopathy: systematic review with meta-analysis. Photomed Laser Surg. 2010.",
    ],
    relatedServices: [
      { label: "Neck Pain Physiotherapy", href: "/services/neck-pain-physiotherapy" },
      { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
      { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
    ],
  },
  {
    slug: "manual-therapy",
    path: "/techniques/manual-therapy",
    title: "Manual Therapy | Adapt Physiotherapy",
    metaDescription:
      "Understand how hands-on manual therapy - mobilisation, manipulation, soft tissue release, and myofascial techniques - restores movement and relieves pain.",
    heroHeading: "Manual Therapy: Skilled hands, measurable results",
    heroSubtext:
      "Manual therapy encompasses a range of hands-on techniques - joint mobilisation, soft tissue release, myofascial work, and neural mobilisation - applied with clinical precision to restore movement and relieve pain.",
    whatIsIt:
      "Manual therapy is a skilled, hands-on approach to assessment and treatment of musculoskeletal dysfunction. It includes joint mobilisation and manipulation (Maitland, Mulligan, Kaltenborn concepts), soft tissue mobilisation, trigger point release, myofascial release, muscle energy techniques, and neural tissue mobilisation. Unlike passive modalities, manual therapy requires constant clinical reasoning - the therapist continuously assesses tissue response and adapts technique, grade, and direction.",
    howItWorks: [
      {
        heading: "Joint mobilisation & mechanical effects",
        body: "Graded oscillatory movements at specific joint positions (Maitland Grades I-V) mechanically stretch shortened capsuloligamentous structures, break down early adhesions, and improve synovial fluid dynamics for cartilage nutrition. High-velocity low-amplitude (HVLA) manipulation can gap fixated facet joints, releasing trapped meniscoid folds.",
      },
      {
        heading: "Neurophysiological pain modulation",
        body: "Joint mobilisation (even Grade I-II oscillations that don't reach resistance) stimulates mechanoreceptors in joint capsules and periarticular tissues, activating descending inhibitory pathways from the periaqueductal grey (PAG). This explains why gentle mobilisation produces immediate, measurable hypoalgesia beyond what mechanical stretch alone would predict.",
      },
      {
        heading: "Soft tissue & myofascial effects",
        body: "Trigger point compression produces local sarcomere release and normalises pH in contracted muscle bands. Myofascial release applies sustained low-load stretch to fascial planes, exploiting thixotropic properties of ground substance (fascia is viscoelastic - sustained pressure causes creep and realignment). Neural mobilisation restores nerve glide relative to its interfacing tissue bed.",
      },
    ],
    benefits: [
      "Immediate, measurable increases in joint range of motion",
      "Rapid hypoalgesic effect - pain relief within the session",
      "Breaks the pain-spasm-pain cycle in protective muscle guarding",
      "Highly individualised - every technique adapted to real-time tissue response",
      "Cornerstone of physiotherapy - maximally effective combined with exercise",
    ],
    conditionsTreated: [
      "Acute wry neck and cervical facet dysfunction",
      "Low back pain with stiffness (facet joint and SIJ dysfunction)",
      "Frozen shoulder - capsular stretching and accessory glide mobilisation",
      "Chronic tension headaches - suboccipital and cervical myofascial release",
      "Post-operative joint stiffness (after TKR, ACL reconstruction)",
    ],
    faqs: [
      {
        question: "Will manual therapy be painful?",
        answer:
          "Treatment is calibrated to tolerance. Mild treatment soreness can occur post-session (like post-exercise muscle soreness) but actual during-treatment pain is avoided through continuous feedback and graded technique. HVLA manipulation may produce an audible 'pop' (cavitation) - this is a gas release in the joint, not structural damage.",
      },
      {
        question: "How is manual therapy different from a regular massage?",
        answer:
          "Massage focuses on relaxation and generalised muscle tension. Manual therapy is assessment-driven - techniques are selected based on specific joint, neural, or myofascial findings from clinical examination. It targets particular movement restrictions, not general relaxation.",
      },
      {
        question: "Can manual therapy alone fix my problem?",
        answer:
          "Manual therapy is most effective as part of a multimodal approach. It creates a window of improved mobility and reduced pain - within which exercise therapy becomes more effective and lasting. Manual therapy opens the door; exercise therapy walks through it.",
      },
    ],
    scientificRefs: [
      "Maitland GD. Vertebral Manipulation. 5th ed. Butterworth-Heinemann; 1986.",
      "Bialosky JE et al. The mechanisms of manual therapy in the treatment of musculoskeletal pain: a comprehensive model. Man Ther. 2009.",
      "Gross A et al. Manipulation or mobilisation for neck pain: a Cochrane Review. Man Ther. 2010.",
    ],
    relatedServices: [
      { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
      { label: "Neck Pain Physiotherapy", href: "/services/neck-pain-physiotherapy" },
      { label: "Knee TKR Rehab", href: "/services/knee-replacement-rehab" },
      { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehabilitation" },
    ],
  },
];

export function getTechniqueBySlug(slug) {
  return techniquePages.find((t) => t.slug === slug);
}

export function buildTechniqueSchema(page) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: page.title,
      url: `${SITE_URL}${page.path}`,
      description: page.metaDescription,
      about: ["Physiotherapy", "Manual Therapy", "Rehabilitation"],
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