export interface Chamber {
  id: string;
  name: string;
  badge: string;
  address: string;
  days: string;
  timings: string;
  isMainClinic: boolean;
  mapUrl: string;
  phone: string;
  facilities: string[];
  landmark: string;
  transitTip: string;
}

export interface ClinicalService {
  id: string;
  title: string;
  category: 'general' | 'dental' | 'aesthetic';
  shortDesc: string;
  fullDesc: string;
  recovery: string;
  painLevel: string;
  duration: string;
  benefits: string[];
  highlight: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
}

export const DOCTOR_INFO = {
  name: 'Dr. Kuntal Nayak',
  qualification: 'BDS, MDS (PG) Kolkata, WBUHS',
  regNo: '4565-A',
  title: 'Dental & Oral Surgeon & LASER Specialist',
  pastExperience: 'Ex-Surgeon of Medella Cancer Institute, Kolkata',
  totalExperience: '10+ Years Clinical Excellence',
  phone: '+91 86973 94358',
  phoneRaw: '+918697394358',
  whatsappRaw: '918697394358',
  email: 'kuntalnayak19@gmail.com',
  website: 'https://kuntalnayak.com/',
  mapsUrl: 'https://maps.app.goo.gl/XVqH7xNgh3bbBuVW7',
  realPhotoUrl: '/images/dr_kuntal_nayak_headshot.jpg',
  portraitAltUrl: '/images/FB_IMG_1745295991687.jpg',
  brandingPhotoUrl: '/images/FB_IMG_1745295991687.jpg',
  credentialsPhotoUrl: '/images/FB_IMG_1745296195699-1-1080x807.jpg',
  logoUrl: '/images/cropped-ora-logo-436x142.png',
  logoIconUrl: '/images/cropped-ora-logo2.png',
  about:
    'Dr. Kuntal Nayak is a renowned Dental & Oral Surgeon and advanced Laser Specialist practicing across Bankura and South Bengal. With postgraduate training from the West Bengal University of Health Sciences (WBUHS) Kolkata and extensive surgical background as an Ex-Surgeon at Medella Cancer Institute Kolkata, Dr. Nayak is a pioneer in bloodless, suture-free laser dentistry and advanced aesthetic dermatological laser therapies.'
};

export const CLINIC_CHAMBERS: Chamber[] = [
  {
    id: 'simlapal',
    name: 'Simlapal – Ora Health Line (Main Clinic)',
    badge: 'Flagship Laser Center',
    address: 'Hoi Choi Building, Simlapal Road, Simlapal School More, Bankura, West Bengal - 722151',
    days: 'Daily (Monday – Sunday)',
    timings: '6:00 AM – 2:00 PM & 7:00 PM – 9:00 PM',
    isMainClinic: true,
    mapUrl: 'https://maps.app.goo.gl/XVqH7xNgh3bbBuVW7',
    phone: '+91 86973 94358',
    facilities: [
      'Advanced Dental Laser Operatory',
      'Ultra-Low Radiation Digital RVG X-Ray',
      'Motorized Rotary Endodontics (Single-Sitting RCT)',
      'Class-B Autoclave 100% Sterile Protocol',
      'Aesthetic Laser Dermatology Suite',
      'Air-Conditioned Patient Waiting Lounge'
    ],
    landmark: 'Hoi Choi Building, near Simlapal Girls High School / School More',
    transitTip: 'Convenient 2-minute walk from Simlapal School More bus stop; dedicated patient two-wheeler and car parking available.'
  },
  {
    id: 'panchmura',
    name: 'Panchmura – Dev Drug House',
    badge: 'Bi-Weekly OPD',
    address: 'Dev Drug House, Panchmura Main Bazar, Bankura, West Bengal',
    days: 'Monday & Thursday',
    timings: 'From 4:30 PM onwards',
    isMainClinic: false,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Panchmura+Bankura+West+Bengal',
    phone: '+91 86973 94358',
    facilities: [
      'Comprehensive Oral & Dental Consultations',
      'Routine Tooth Extraction & Pain Relief',
      'Crown, Bridge & Denture Impressions',
      'Post-Surgical Follow-ups'
    ],
    landmark: 'Dev Drug House, Panchmura Central Market',
    transitTip: 'Located in the heart of Panchmura market, accessible by local buses and auto-rickshaws from Taldangra and Khatra.'
  },
  {
    id: 'raipur',
    name: 'Raipur – Medicare Polyclinic',
    badge: 'Bi-Weekly OPD',
    address: 'Medicare Polyclinic, Near Raipur Bus Stand Area, Raipur, Bankura, West Bengal',
    days: 'Tuesday & Friday',
    timings: 'From 4:00 PM onwards',
    isMainClinic: false,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Raipur+Bankura+West+Bengal',
    phone: '+91 86973 94358',
    facilities: [
      'Dental Checkups & Scaling Consultations',
      'Toothache Emergency Triage',
      'Pediatric & Geriatric Oral Care',
      'Orthodontic (Braces/Aligners) Screenings'
    ],
    landmark: 'Adjacent to Raipur Central Bus Stand',
    transitTip: 'Walking distance from Raipur Bus Stand with direct connectivity to Sarenga, Khatra, and Jhargram.'
  },
  {
    id: 'laxmisagar',
    name: 'Laxmisagar – Cure Pharmacy',
    badge: 'Sunday Evening Clinic',
    address: 'Cure Pharmacy, Laxmisagar Market Complex, Bankura, West Bengal',
    days: 'Sunday Only',
    timings: 'From 6:00 PM onwards',
    isMainClinic: false,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Laxmisagar+Bankura+West+Bengal',
    phone: '+91 86973 94358',
    facilities: [
      'Sunday Evening Specialist Consultations',
      'Aesthetic & Laser Skin Consultations',
      'Oral Cancer Screenings & Biopsy Guidance',
      'Prosthetic Planning'
    ],
    landmark: 'Cure Pharmacy, Main Market Road',
    transitTip: 'Easily accessible from surrounding villages and Simlapal rural belt on Sunday evenings.'
  }
];

export const SERVICES: ClinicalService[] = [
  // Dental Wing
  {
    id: 'laser-dentistry',
    title: 'Bloodless Laser Dentistry & Oral Surgery',
    category: 'dental',
    shortDesc: 'Minimally invasive, suture-free soft tissue surgery with zero bleeding and rapid recovery.',
    fullDesc: 'Utilizing specialized surgical dental lasers for frenectomy, gingivectomy, crown lengthening, and lesion excision. Laser light naturally coagulates blood vessels and sterilizes the surgical site, eliminating traditional scalpels, stitches, and post-operative pain.',
    recovery: 'Zero downtime; eat same day',
    painLevel: 'Virtually painless',
    duration: '15 – 30 mins',
    benefits: ['Zero stitches required', 'Bloodless precision', 'Instant bacterial sterilization', 'Rapid tissue healing'],
    highlight: 'Proprietary Specialty',
    imageUrl: '/images/FB_IMG_1745296062679-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  },
  {
    id: 'rotary-rct',
    title: 'Rotary Endodontics (Single-Sitting Root Canal)',
    category: 'dental',
    shortDesc: 'State-of-the-art motorized canal cleaning with apex locator precision to save infected teeth.',
    fullDesc: 'Advanced rotary nickel-titanium instruments guided by digital apex locators thoroughly debride complex root canals in 1 to 2 comfortable visits. Pain relief is immediate, preserving your natural tooth structure for life.',
    recovery: 'Normal diet within 2 hours',
    painLevel: 'Painless with computer-monitored anesthesia',
    duration: '35 – 45 mins',
    benefits: ['Preserves natural tooth', 'Single-sitting option', '99.4% clinical success rate', 'Digital 3D canal obturation'],
    highlight: 'High Demand',
    imageUrl: '/images/2-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'dental-implants',
    title: 'Single-Visit Dental Implants',
    category: 'dental',
    shortDesc: 'Permanent replacement for missing teeth using world-class biocompatible titanium posts.',
    fullDesc: 'Restores chewing strength, facial profile, and smile aesthetics with high-grade titanium implants that seamlessly fuse with your jawbone. Ideal for single missing tooth, multiple teeth, or full-arch restoration.',
    recovery: '24 – 48 hours mild rest',
    painLevel: 'Gentle local anesthesia',
    duration: '40 – 60 mins',
    benefits: ['Looks and chews like real teeth', 'Prevents jaw bone loss', 'Lifetime durability', 'Zero harm to adjacent teeth'],
    highlight: 'Permanent Solution',
    imageUrl: '/images/3-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'orthodontics-aligners',
    title: 'Invisible Aligners & Orthodontic Braces',
    category: 'dental',
    shortDesc: 'Straighten crooked, crowded, or spaced teeth with modern ceramic braces or clear removable trays.',
    fullDesc: 'Custom computer-planned orthodontic alignment for children, teens, and adults. Options range from discreet clear aligners that can be removed for meals to low-friction self-ligating ceramic braces.',
    recovery: 'No downtime',
    painLevel: 'Gentle pressure sensation',
    duration: '30 mins per adjustment',
    benefits: ['Discreet & comfortable', 'Improves bite and speech', 'Custom 3D treatment preview', 'Easy to clean'],
    highlight: 'Smile Makeover',
    imageUrl: '/images/4-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'aesthetic-restorations',
    title: 'Smile Designing & Aesthetic Restorations',
    category: 'dental',
    shortDesc: 'Tooth-colored nano-composite fillings, porcelain veneers, and CAD/CAM zirconia crowns.',
    fullDesc: 'Correct chipped teeth, stubborn discoloration, gaps, and tooth wear using high-grade composite resin bonding or custom zirconia dental crowns that match the natural translucency of your natural teeth.',
    recovery: 'Instant',
    painLevel: 'Completely painless',
    duration: '30 – 60 mins',
    benefits: ['Natural enamel translucency', 'High-strength durability', 'Stain-resistant zirconia', 'Same-day smile fix'],
    highlight: 'Cosmetic Artistry',
    imageUrl: '/images/5-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'scaling-polishing',
    title: 'Ultrasonic Scaling & Periodontal Care',
    category: 'dental',
    shortDesc: 'Gentle plaque, calculus, and tobacco stain removal paired with laser gum disinfection.',
    fullDesc: 'Deep ultrasonic debridement cleans subgingival tartar and stops bleeding gums, halitosis (bad breath), and loose teeth. Combined with laser decontamination for long-lasting gum health.',
    recovery: 'Immediate',
    painLevel: 'Gentle vibration only',
    duration: '25 – 35 mins',
    benefits: ['Stops bleeding gums', 'Freshens breath permanently', 'Removes tough tea/tobacco stains', 'Protects tooth roots'],
    highlight: 'Preventive Essential',
    imageUrl: '/images/6-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'dentures',
    title: 'BPS Flexible & Complete Dentures',
    category: 'dental',
    shortDesc: 'Ultra-lightweight, unbreakable flexible dentures and balanced complete arches for elderly patients.',
    fullDesc: 'Custom-crafted prosthetic arches that fit comfortably without sharp edges or bulky metal clasps. Restores youthful facial aesthetics and confident eating for senior citizens.',
    recovery: 'Short adaptation period',
    painLevel: 'Painless fitting',
    duration: 'Multiple gentle sittings',
    benefits: ['Unbreakable flexible material', 'Secure suction retention', 'Clear natural gum tones', 'Restores digestive chewing'],
    highlight: 'Geriatric Specialist',
    imageUrl: '/images/7-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },

  // Aesthetic & Laser Wing
  {
    id: 'carbon-laser-peel',
    title: 'Carbon Laser Facial ("Hollywood Peel")',
    category: 'aesthetic',
    shortDesc: 'Deep pore purification, instant brightening, and oil control using medical-grade carbon & Q-laser.',
    fullDesc: 'A specialized medical liquid carbon layer is applied to the face to penetrate deep into pores. A high-speed Nd:YAG laser then vaporizes the carbon particles, instantly exfoliating dead cells, tightening enlarged pores, and revealing radiant glass skin.',
    recovery: 'Zero downtime; walk out glowing',
    painLevel: 'Mild warm tingling sensation',
    duration: '30 – 40 mins',
    benefits: ['Instant skin brightness', 'Deep pore unclogging', 'Controls excess facial oil', 'Evens skin tone without peeling'],
    highlight: 'Red Carpet Glow',
    imageUrl: '/images/8-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'acne-spot-removal',
    title: 'Acne, Spot & Pigmentation Laser Removal',
    category: 'aesthetic',
    shortDesc: 'Targeted laser therapy for stubborn dark spots, melasma, sun freckles, and post-acne blemishes.',
    fullDesc: 'Laser energy selectively targets excess melanin deposits without harming surrounding healthy skin tissue. Stimulates fresh dermal collagen to smooth indented acne scars and clarify patchy skin.',
    recovery: '1 – 2 days mild redness',
    painLevel: 'Very mild tingling',
    duration: '25 – 35 mins',
    benefits: ['Fades dark stubborn spots', 'Smooths acne pits and texture', 'Uniform complexion', 'Safe for Indian skin tones'],
    highlight: 'Dermatological Precision',
    imageUrl: '/images/9-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'mole-tag-removal',
    title: 'Birthmark, Mole & Skin Tag Laser Removal',
    category: 'aesthetic',
    shortDesc: 'Scarless, bloodless ablation of unsightly moles, warts, and skin tags from face and neck.',
    fullDesc: 'High-precision focused laser or radiofrequency micro-ablation vaporizes skin tags, raised moles, and warts in a single sitting without surgical scalpels, stitches, or ugly scars.',
    recovery: 'Forms microscopic scab for 3-5 days',
    painLevel: 'Painless with topical numbing cream',
    duration: '10 – 20 mins',
    benefits: ['Zero stitches or scalpels', 'No surgical scars', 'Single-sitting quick procedure', 'Safe around eyes & neck'],
    highlight: 'Instant Results',
    imageUrl: '/images/11-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'laser-hair-removal',
    title: 'Permanent Laser Hair Reduction',
    category: 'aesthetic',
    shortDesc: 'Triple-wavelength cooling diode laser for painless, long-lasting hair freedom on face and body.',
    fullDesc: 'Advanced chilled-tip laser technology safely destroys hair follicles in the active growth phase. Ideal for upper lip, chin, beard contouring, underarms, and full-body grooming.',
    recovery: 'Immediate',
    painLevel: 'Virtually painless with contact ice cooling',
    duration: '15 – 45 mins',
    benefits: ['90%+ permanent reduction', 'No ingrown hair or razor bumps', 'Integrated contact cooling head', 'Smooth, soft skin'],
    highlight: 'Modern Grooming',
    imageUrl: '/images/12-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'tattoo-removal',
    title: 'Advanced Q-Switched Laser Tattoo Removal',
    category: 'aesthetic',
    shortDesc: 'Safe, gradual ink shattering for unwanted black and colored tattoos without skin burning.',
    fullDesc: 'Emits picosecond to nanosecond ultra-short pulses that shatter ink particles into microscopic fragments. Your body’s natural lymphatic system filters the ink out safely over sequential sessions.',
    recovery: '2 – 3 days healing care',
    painLevel: 'Mild rubber-band snap feel (numbing applied)',
    duration: '20 – 40 mins',
    benefits: ['Safe on colored and dark ink', 'Preserves skin integrity', 'No surgical excision', 'Gradual permanent clearance'],
    highlight: 'Clinical Ink Removal',
    imageUrl: '/images/13-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'anti-aging-laser',
    title: 'Anti-Aging & Laser Skin Tightening',
    category: 'aesthetic',
    shortDesc: 'Non-surgical collagen remodeling to soften fine lines, crow’s feet, and sagging jowls.',
    fullDesc: 'Gentle dermal heating stimulates deep fibroblasts to produce fresh natural collagen and elastin. Restores skin firmness, sharpens jawline contours, and imparts a youthful bounce.',
    recovery: 'Zero downtime',
    painLevel: 'Comfortable soothing warmth',
    duration: '35 – 45 mins',
    benefits: ['Non-invasive facelift effect', 'Natural collagen rebuilding', 'Softens smile lines & wrinkles', 'Zero needles or fillers'],
    highlight: 'Youth Restoration',
    imageUrl: '/images/14-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },

  // General & Routine Dental Services (Common in Indian Dental Practice)
  {
    id: 'general-checkup',
    title: 'Comprehensive Dental Consultation & Digital X-Ray',
    category: 'general',
    shortDesc: 'Complete intraoral examination, ultra-low radiation RVG digital X-ray, and oral cancer screening.',
    fullDesc: 'A thorough diagnostic checkup for teeth, gums, and oral mucosa by Dr. Nayak using high-resolution digital RVG sensors. Includes detailed personalized treatment plan and oral hygiene advice.',
    recovery: 'Immediate',
    painLevel: 'Completely painless',
    duration: '15 – 20 mins',
    benefits: ['Early cavity detection', 'Ultra-low radiation digital X-ray', 'Oral cancer screening', 'Customized dental report'],
    highlight: 'Essential Routine',
    imageUrl: '/images/dental-checkup-1.png'
  },
  {
    id: 'tooth-extraction',
    title: 'Painless Tooth Extraction (Simple Extraction)',
    category: 'general',
    shortDesc: 'Gentle, atraumatic removal of non-restorable, fractured, or loose mobile teeth.',
    fullDesc: 'Administered under painless computerized local anesthesia. Gentle luxation preserves surrounding alveolar bone with minimal post-extraction discomfort.',
    recovery: '24 hours initial healing',
    painLevel: 'Painless with local anesthesia',
    duration: '15 – 25 mins',
    benefits: ['Gentle atraumatic removal', 'Zero pain during procedure', 'Preserves jawbone socket', 'Same-day post-op care pack'],
    highlight: 'Painless Technique',
    imageUrl: '/images/tooth-extraction.png'
  },
  {
    id: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Pain & Surgical Impaction Removal',
    category: 'general',
    shortDesc: 'Specialized surgical extraction for painful, partially erupted, or horizontally tilted wisdom teeth.',
    fullDesc: 'Relieves agonizing pericoronitis swelling, cheek biting, and jaw stiffness. Dr. Nayak’s oncological surgical background ensures micro-surgical flap reflection and minimal swelling.',
    recovery: '2 – 3 days rest',
    painLevel: 'Deep local numbing applied',
    duration: '30 – 45 mins',
    benefits: ['Permanent relief from jaw pain', 'Prevents damage to adjacent molar', 'Suture-free laser option', 'Minimal post-op swelling'],
    highlight: 'Surgical Specialist',
    imageUrl: '/images/1-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'cavity-filling',
    title: 'Tooth-Colored Cavity Fillings (Composite / GIC)',
    category: 'general',
    shortDesc: 'Long-lasting, aesthetic restoration for decayed teeth using German light-cure nano-composites.',
    fullDesc: 'Removes bacteria and replaces black caries cavities with tooth-shade composite resin that bonds chemically to tooth enamel. Completely mercury-free.',
    recovery: 'Immediate; chew normally after 1 hour',
    painLevel: 'Painless',
    duration: '20 – 30 mins',
    benefits: ['Matches natural tooth shade', '100% Mercury-free', 'Strong chemical enamel bond', 'Prevents root canal infection'],
    highlight: 'Tooth-Colored',
    imageUrl: '/images/5-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'emergency-pain-relief',
    title: 'Acute Toothache Emergency & Pain Relief',
    category: 'general',
    shortDesc: 'Fast-action relief for throbbing tooth pain, overnight dental ache, or abscess swelling.',
    fullDesc: 'Immediate pulpal decompression, sedative dressing, and clinical medication prescription to stop severe toothache in minutes.',
    recovery: 'Immediate pain relief',
    painLevel: 'Gentle emergency numbing',
    duration: '15 – 25 mins',
    benefits: ['Immediate throbbing pain relief', 'Sedative medicinal dressing', 'Abscess drainage', 'Priority emergency slot'],
    highlight: 'Immediate Relief',
    imageUrl: '/images/10-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.png'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening & Fluorosis Stain Removal',
    category: 'general',
    shortDesc: 'Clinical in-office teeth bleaching to remove yellow stains, fluorosis patches, and discoloration.',
    fullDesc: 'Safely lightens enamel shade by 3 to 6 tones without damaging tooth structure. Specially effective for regional tea, coffee, and water fluorosis staining across South Bengal.',
    recovery: 'Zero downtime',
    painLevel: 'Mild sensitivity for a few hours',
    duration: '35 – 45 mins',
    benefits: ['Shades brighter in 1 sitting', 'Removes regional fluorosis marks', 'Enamel-safe formulation', 'Long-lasting dazzling smile'],
    highlight: 'Instant Brightening',
    imageUrl: '/images/8-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Caps / Crowns & Fixed Bridges (Zirconia / PFM)',
    category: 'general',
    shortDesc: 'Protective ceramic, zirconia, or metal caps to reinforce root canal treated or broken teeth.',
    fullDesc: 'Custom CAD/CAM precision-milled dental caps and multi-unit fixed bridges that restore natural biting strength and aesthetics for decades.',
    recovery: 'Normal chewing within 2 hours',
    painLevel: 'Painless fitting',
    duration: '2 comfortable sittings',
    benefits: ['Unbreakable monolithic zirconia', 'Natural translucent appearance', 'Protects brittle RCT teeth', '5 to 15-year warranty'],
    highlight: 'High Durability',
    imageUrl: '/images/3-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'pyorrhea-gums',
    title: 'Bleeding Gums, Pyorrhea & Bad Breath Treatment',
    category: 'general',
    shortDesc: 'Subgingival deep cleaning and medicated irrigation to stop chronic gum bleeding and loose teeth.',
    fullDesc: 'Cleans deep bacterial pockets beneath the gum line, stops halitosis (bad mouth odor), and firms up spongy, bleeding gums before teeth become loose.',
    recovery: 'Immediate gum comfort',
    painLevel: 'Mild vibration',
    duration: '25 – 35 mins',
    benefits: ['Stops bleeding during brushing', 'Eliminates chronic bad breath', 'Tightens loose spongy gums', 'Medicated antiseptic irrigation'],
    highlight: 'Gum Protection',
    imageUrl: '/images/6-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Children’s Dental Care & Milk Teeth Fillings',
    category: 'general',
    shortDesc: 'Gentle, friendly pediatric dental care for kids, toddlers, and teenagers without dentist fear.',
    fullDesc: 'Specialized child-friendly approach for milk tooth decay, pulpectomy, pit & fissure sealants, and topical fluoride application to keep young smiles healthy.',
    recovery: 'Immediate normal routine',
    painLevel: '100% Gentle & fear-free',
    duration: '20 – 30 mins',
    benefits: ['Fear-free gentle environment', 'Prevents permanent tooth crookedness', 'Fluoride cavity shields', 'Kid-friendly communication'],
    highlight: 'Child-Friendly',
    imageUrl: '/images/dental-checkup-1.png'
  },
  {
    id: 'denture-repair',
    title: 'Denture Repair, Relining & Loose Clasp Adjustment',
    category: 'general',
    shortDesc: 'Same-day clinical adjustments for slipping, uncomfortable, or broken partial and complete dentures.',
    fullDesc: 'Soft tissue relining and suction adjustment to make old or slipping dentures fit snugly and comfortably without gum sores.',
    recovery: 'Instant fit improvement',
    painLevel: 'Completely painless',
    duration: '20 – 30 mins',
    benefits: ['Stops denture slippage', 'Prevents painful mouth ulcers', 'Reinforces cracked acrylic', 'Fast same-day turnaround'],
    highlight: 'Senior Care',
    imageUrl: '/images/7-rtth00n0279el6h5yjnphyffcq2tm9dwxjr3l7f1v0.jpg'
  }
];

export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Simlapal Main Flagship Center',
    subtitle: 'Hoi Choi Building, Simlapal School More, Bankura',
    category: 'Facility & Building',
    imageUrl: '/images/20250422_101855_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  },
  {
    id: 'gal-2',
    title: 'Advanced Dental Laser Operatory',
    subtitle: 'High-precision surgical diode laser console & ergonomic chair',
    category: 'Laser Operatory',
    imageUrl: '/images/20250422_110630_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  },
  {
    id: 'gal-3',
    title: 'Surgical Laser Delivery System',
    subtitle: 'Minimally invasive, suture-free soft tissue laser headpiece',
    category: 'Advanced Equipment',
    imageUrl: '/images/20250422_110434_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  },
  {
    id: 'gal-4',
    title: 'Micro-Surgical & Endodontic Kit',
    subtitle: 'Rotary nickel-titanium motorized instruments and digital apex sensors',
    category: 'Surgical Tools',
    imageUrl: '/images/20250422_110453_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  },
  {
    id: 'gal-5',
    title: 'Class-B Autoclave Sterilization Unit',
    subtitle: '100% sterile vacuum autoclaving for zero cross-infection',
    category: 'Sterile Standards',
    imageUrl: '/images/20250422_103500_11zon-scaled-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  },
  {
    id: 'gal-6',
    title: 'Specialist Consultation Suite',
    subtitle: 'Private clinical evaluation and treatment planning room',
    category: 'Consultation Room',
    imageUrl: '/images/FB_IMG_1745296070907-rtth00mzg9v6s6ear384fx08u1z0ads1zngiii6fug.jpg'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Subrata Mukherjee',
    location: 'Simlapal, Bankura',
    treatment: 'Laser Root Canal & Zirconia Crown',
    rating: 5,
    date: 'March 2026',
    comment:
      'I had severe throbbing tooth pain for days and was terrified of root canals. Dr. Kuntal Nayak completed the entire treatment in a single sitting with laser technology. I felt absolutely zero pain, not even during the local injection! The Hoi Choi building clinic is exceptionally neat, hygienic, and modern.'
  },
  {
    id: 'rev-2',
    patientName: 'Priyanka Sen',
    location: 'Khatra, South Bengal',
    treatment: 'Carbon Laser Facial & Mole Removal',
    rating: 5,
    date: 'February 2026',
    comment:
      'I visited Dr. Nayak for mole removal on my cheek and a carbon peel. The mole was removed in just 10 minutes without any cut or stitches, and now after a few weeks there is no mark at all! The Hollywood carbon facial left my skin glowing before my sister’s wedding. Highly recommended specialist in Bankura.'
  },
  {
    id: 'rev-3',
    patientName: 'Debabrata Ghosh',
    location: 'Panchmura, Bankura',
    treatment: 'Dental Implants & Laser Gum Contouring',
    rating: 5,
    date: 'January 2026',
    comment:
      'Got two dental implants done by Dr. Kuntal Nayak. His Medella Cancer Institute surgical background clearly shows in his precision and sterile protocols. The laser gum treatment had zero bleeding. Being able to consult him at Dev Drug House in Panchmura was also very convenient for my follow-ups.'
  },
  {
    id: 'rev-4',
    patientName: 'Ananya Banerjee',
    location: 'Raipur, Bankura',
    treatment: 'Laser Hair Reduction & Skin Tag Removal',
    rating: 5,
    date: 'December 2025',
    comment:
      'Finding world-class laser skin treatment in rural Bankura was a pleasant surprise. The cooling laser handpiece makes hair removal completely painless. Dr. Nayak explains every single step with patience and never rushes his patients. Truly an asset to South Bengal.'
  },
  {
    id: 'rev-5',
    patientName: 'Tarun Karmakar',
    location: 'Taldangra',
    treatment: 'Wisdom Tooth Laser Surgery',
    rating: 5,
    date: 'November 2025',
    comment:
      'Impacted wisdom tooth extraction done bloodlessly using laser. My previous extraction elsewhere had caused swollen jaws for a week, but here I was back to work in 24 hours with minimal swelling and zero stitches. Thank you, Dr. Kuntal Nayak!'
  }
];

export const LASER_VS_TRADITIONAL = [
  {
    feature: 'Surgical Cutting Tool',
    traditional: 'Mechanical scalpel blade',
    laser: 'High-precision concentrated laser light',
    advantage: 'Micro-millimeter accuracy'
  },
  {
    feature: 'Bleeding & Hemostasis',
    traditional: 'Frequent bleeding, gauze packing needed',
    laser: 'Virtually bloodless; instant vessel coagulation',
    advantage: 'Clear surgical view & clean recovery'
  },
  {
    feature: 'Stitches (Sutures)',
    traditional: 'Required (often painful to remove)',
    laser: '100% Suture-free for most procedures',
    advantage: 'No suture irritation or removal visits'
  },
  {
    feature: 'Post-Operative Swelling & Pain',
    traditional: 'Significant swelling for 4 to 7 days',
    laser: 'Minimal to zero post-treatment swelling',
    advantage: 'Immediate return to daily work'
  },
  {
    feature: 'Infection Risk & Sterility',
    traditional: 'Depends on antibiotic coverage',
    laser: 'Laser beam inherently sterilizes bacteria on contact',
    advantage: 'Ultra-low infection risk'
  },
  {
    feature: 'Sound & Anxiety',
    traditional: 'Loud drills and bone vibrations',
    laser: 'Quiet, gentle pulse; minimal vibration',
    advantage: 'Calm, anxiety-free experience'
  }
];
