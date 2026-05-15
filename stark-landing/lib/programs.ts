export type ProgramBucket =
  | 'vocational-training'
  | 'bachpan'
  | 'higher-ed-partnerships'
  | 'community-camps'
  | 'disaster-relief'

export type Centre = {
  name: string
  location: string
  opened: string
  tracks: string[]
  trained: string
  runBy?: string
}

export type Activity = {
  id: string
  bucket: ProgramBucket
  title: string
  date: string
  venue: string
  beneficiaries?: number
  spendINR?: number
  description: string
  partners?: string[]
  photo?: string
}

export type Program = {
  bucket: ProgramBucket
  slug: string
  label: string
  shortLabel: string
  category: string
  intro: string
  cardPhoto: string
  cardPhotoAlt: string
}

export const programs: Program[] = [
  {
    bucket: 'vocational-training',
    slug: 'vocational-training',
    label: 'Vocational Training',
    shortLabel: 'Vocational',
    category: 'Flagship',
    intro:
      'Free certified courses in computer skills, accounting, and stitching & fashion. Two centres in Bikaner and Pundalsar, with placement support for selected candidates.',
    cardPhoto: '/images/gallery/vocational-training-class.jpg',
    cardPhotoAlt: 'Students at the STARK Foundation Bikaner centre during a vocational training class',
  },
  {
    bucket: 'bachpan',
    slug: 'bachpan',
    label: 'Bachpan',
    shortLabel: 'Bachpan',
    category: 'Children',
    intro:
      'Summer camps in govt schools, weekend workshops, study-kit drives, and on-the-ground work with kids in slums and govt schools.',
    cardPhoto: '/images/12a/image5.jpg',
    cardPhotoAlt: 'Students at Bhagwanpur Govt Girls School with study kits',
  },
  {
    bucket: 'higher-ed-partnerships',
    slug: 'higher-ed-partnerships',
    label: 'Higher-Ed Partnerships',
    shortLabel: 'Higher Ed',
    category: 'Colleges',
    intro:
      'We partner with colleges to revive dormant facilities and run free, future-facing courses, from computer training at Maharani College to AI workshops at Engineering College Bikaner.',
    cardPhoto: '/images/gallery/maharani-computer.jpg',
    cardPhotoAlt: 'Students at Maharani Sudarshan College computer batch with the STARK Foundation team',
  },
  {
    bucket: 'community-camps',
    slug: 'community-camps',
    label: 'Community Camps',
    shortLabel: 'Camps',
    category: 'CSR',
    intro:
      'Mobile health camps, eye check-ups, and welfare drives for the wider community, funded by our CSR partners.',
    cardPhoto: '/images/gallery/eye-camp-composite.jpg',
    cardPhotoAlt: 'Eye Check-Up Camp at Udasar, Bikaner',
  },
  {
    bucket: 'disaster-relief',
    slug: 'disaster-relief',
    label: 'Disaster Relief',
    shortLabel: 'Relief',
    category: 'Emergency',
    intro:
      'How STARK Foundation responded when COVID-19 hit Bikaner in 2021. 1,500 families served with meals, ration, RT-PCR testing and rent-free oxygen.',
    cardPhoto: '/images/12a/image18.jpg',
    cardPhotoAlt: 'STARK Foundation volunteers distributing meal boxes during COVID 2021',
  },
]

export const centres: Centre[] = [
  {
    name: 'Bikaner',
    location: 'Behind Sardar Hall, Mehron Ka Mohalla',
    opened: 'June 2021',
    tracks: [
      'Basic Computer',
      'Hindi/English Typing',
      'MS Excel & Office',
      'Tally & Accounting',
      'Stitching: Certification',
      'Stitching: Diploma',
      'Fashion Designing',
    ],
    trained: '250+',
  },
  {
    name: 'Pundalsar',
    location: 'Pundalsar Village, Dungargarh District',
    opened: 'February 2025',
    tracks: ['Stitching: Certification', 'Fashion Designing'],
    trained: '10+',
    runBy: 'Stark directly',
  },
]

// 10 dated activities from the 12A doc, ordered chronologically.
// Each maps to one bucket. Photo paths point at verified files in /public/images/12a/
// (extracted from the 12A docx, position-mapped to activities, sampled for content).
// See docs/PHOTOS.md for the full activity-to-photo map.
export const activities: Activity[] = [
  {
    id: 'covid-relief-2021',
    bucket: 'disaster-relief',
    title: 'COVID-19 Relief',
    date: 'May 5 – June 15, 2021',
    venue: 'Bikaner',
    beneficiaries: 1500,
    spendINR: 658000,
    description:
      '6,000+ meal boxes delivered to COVID patients at their doorstep. 4,000+ ration kits delivered to families impacted by livelihood loss. Free at-home RT-PCR sample collection for residents aged 60+. Oxygen concentrators distributed rent-free to discharged patients.',
    partners: ['Central Medical Health Office'],
    photo: '/images/12a/image18.jpg',
  },
  {
    id: 'childrens-day-2021',
    bucket: 'bachpan',
    title: "Children's Day Activities",
    date: 'November 14, 2021',
    venue: 'Bikaner',
    beneficiaries: 150,
    spendINR: 78000,
    description:
      '150 kids from 5 slum areas brought together for sports (100m race, sack race, spoon race) and cultural events (dancing, singing, poem recitation). Each child received a kit: sports shoes, jersey, bag, education material, packaged food. Women in our stitching program made frocks for the girl participants. Guest of honour: Mrs. Vimal Dhukwal.',
    partners: ['Robin Hood Army', 'Youth Against Illiteracy', 'Vrikshit Foundation'],
    photo: '/images/gallery/childrens-day-2021.jpg',
  },
  {
    id: 'health-camp-vaishno-dham-2022',
    bucket: 'community-camps',
    title: 'Health Camp',
    date: 'February 6, 2022',
    venue: 'Vaishno Dham',
    beneficiaries: 130,
    spendINR: 41250,
    description:
      'Health awareness, drug awareness, and nutritional support. 50% of beneficiaries were women & children. Basic nutritional supplements distributed based on medical prescription.',
    partners: ['BkESL'],
    photo: '/images/gallery/health-camp-composite.jpg',
  },
  {
    id: 'school-infra-pemasar-2022',
    bucket: 'bachpan',
    title: 'Enhanced Learning Environment: Pemasar',
    date: 'March 2, 2022',
    venue: 'Govt Sr Sec School, Pemasar',
    beneficiaries: 700,
    spendINR: 100880,
    description:
      'Electricity fittings and sports equipment provided to the school to create a better learning environment.',
    partners: ['BkESL'],
    photo: '/images/12a/image23.jpg',
  },
  {
    id: 'eye-camp-udasar-2022',
    bucket: 'community-camps',
    title: 'Eye Check-Up Camp',
    date: 'March 8, 2022',
    venue: 'Udasar',
    beneficiaries: 290,
    spendINR: 116300,
    description:
      'Mobile camp delivering low-cost eye care to rural communities. Primary emphasis on identifying and treating cataract cases, the leading cause of blindness in the area.',
    partners: ['BkESL'],
    photo: '/images/gallery/eye-camp-composite.jpg',
  },
  {
    id: 'school-infra-udairamsar-2022',
    bucket: 'bachpan',
    title: 'Enhanced Learning Environment: Udairamsar',
    date: 'March 28, 2022',
    venue: 'Govt Girls + Sr Sec Schools, Udairamsar',
    beneficiaries: 968,
    spendINR: 422815,
    description:
      'Water coolers + RO systems for safe drinking water. 100 sets of desks/furniture. Two computers for digital literacy. Storage almirahs for learning materials. Benefits 500 girls + 468 students across two schools.',
    partners: ['BkESL'],
    photo: '/images/12a/image9.jpg',
  },
  {
    id: 'study-kit-bhagwanpur-2022',
    bucket: 'bachpan',
    title: 'Study Kit Distribution: Bhagwanpur',
    date: 'September 20, 2022',
    venue: 'Govt Girls Sr Sec School, Bhagwanpur',
    beneficiaries: 200,
    spendINR: 40000,
    description:
      'Distributed study kits (notebooks, pens, pencils, erasers, rulers, essential supplies) to students. Aimed at easing the financial burden on families and providing the basic tools for effective learning.',
    photo: '/images/12a/image5.jpg',
  },
  {
    id: 'adhigam-2023',
    bucket: 'bachpan',
    title: 'Adhigam: Computer Learning Camp (1st edition)',
    date: 'May 18 – June 2, 2023',
    venue: 'NGO Office · 4 govt schools',
    beneficiaries: 90,
    spendINR: 52000,
    description:
      'Flagship 2-week summer camp covering digital education. Interactive science-based workshops, hands-on activities, collaborative projects, guest speakers. Schools covered: Maharani Govt Girls Sr Sec · Govt Ganga Bal Sr Sec · SMJT Govt Sr Sec · Haldiram Govt Sursagar.',
    photo: '/images/gallery/adhigam-2023.jpg',
  },
  {
    id: 'study-kit-pemasar-2024',
    bucket: 'bachpan',
    title: 'Study Kit Distribution: Pemasar',
    date: 'February 14, 2024',
    venue: 'Govt Higher Sec School, Pemasar',
    beneficiaries: 140,
    spendINR: 46290,
    description: 'Study kits distributed to support student learning.',
    photo: '/images/12a/image1.jpg',
  },
  {
    id: 'maharani-mou-2024',
    bucket: 'higher-ed-partnerships',
    title: 'Maharani Sudarshan College: Vocational Training MOU',
    date: 'March 28, 2024 – February 2026',
    venue: 'Maharani Sudarshan College for Women',
    beneficiaries: 210,
    spendINR: 112600,
    description:
      'Revived a 10-year-dormant computer lab by transferring our computers. Signed a 2-year MOU to run Computer-based Skill Development + Stitching & Fashion Designing courses at the college, at zero fees. First batch (Mar–Jul 2024): 60 computer/typing + 45 stitching. Additional batches followed; ~210 students total across the MOU period.',
    partners: ['Maharani Sudarshan College for Women'],
    photo: '/images/gallery/maharani-stitching.jpg',
  },
  {
    id: 'water-cooler-bhim-vridha-2026',
    bucket: 'community-camps',
    title: 'Water Cooler Donation: Bhim Vridha Ashram',
    date: 'May 8, 2026',
    venue: 'Bhim Vridha Ashram, Rani Bazar, Bikaner',
    description:
      'Installed a water cooler at Bhim Vridha Ashram to provide cold, safe drinking water to the residents through the Rajasthan summer. Made possible through a donor partner who wished to remain anonymous.',
    partners: ['Anonymous donor partner'],
    photo: '/images/gallery/water-cooler-bhim-vridha-2026.jpg',
  },
  {
    id: 'ai-workshop-ecb-2026',
    bucket: 'higher-ed-partnerships',
    title: 'AI Workshop for Innovators & Entrepreneurs (Phase 1)',
    date: 'May 13, 2026',
    venue: 'Engineering College Bikaner, Dept of EICE',
    description:
      'Introductory session at ECB on Artificial Intelligence and VLSI, organised with the EICE department under HOD Ms. Pooja Bhardwaj. Pradhyumn Singh (Stark Foundation) walked students through AI in industry, the shift from chatbots to autonomous agents, hallucination risks, and tools like Claude Code and Copilot. Madhavi Joshi covered VLSI design tools, hardware languages, and how AI is starting to influence hardware design. A hands-on Phase 2 project in collaboration with the Stark Foundation was announced.',
    partners: ['Engineering College Bikaner (EICE Department)'],
    photo: '/images/gallery/ai-workshop-ecb-2026.jpg',
  },
]

// "Active right now" callouts for the homepage and program pages.
// Adhigam 2026 is launching this month (per brainstorm); update once schools are confirmed.
export const activeNow = [
  {
    id: 'adhigam-2026',
    bucket: 'bachpan' as ProgramBucket,
    title: 'Adhigam 2026: Summer Learning Camp',
    period: 'May – June 2026',
    status: 'Launching this month',
    description:
      "Our flagship summer learning camp's second edition, with a broader school list than 2023. Schools, dates and target reach being finalised.",
  },
  {
    id: 'ecb-ai-workshops',
    bucket: 'higher-ed-partnerships' as ProgramBucket,
    title: 'AI Workshops at Engineering College Bikaner',
    period: 'May 2026 onwards',
    status: 'Active',
    description:
      'Intro to AI · Prompt Engineering · Building AI Tools. 20+ students reached so far. Expansion to other engineering colleges planned.',
  },
]

export type Partner = { name: string; logo: string }

export const skillPartners: Partner[] = [
  { name: 'Tally Institute of Learning', logo: '/images/partners/tally-education.png' },
  { name: 'Singer India', logo: '/images/partners/singer.png' },
]

export const csrPartners: Partner[] = [
  { name: 'BkESL (Bikaner Electricity Supply)', logo: '/images/partners/bkesl.webp' },
  { name: 'Confluxsys Private Limited', logo: '/images/partners/confluxsys.png' },
]

export const ngoCollaborators: Partner[] = [
  { name: 'Robin Hood Army', logo: '/images/partners/robin-hood-army.png' },
  { name: 'Youth Against Illiteracy', logo: '/images/partners/youth-against-illiteracy.png' },
  { name: 'Vrikshit Foundation', logo: '/images/partners/vrikshit-foundation.png' },
]

// Helpers
// activitiesForBucket relies on the activities array already being in chronological order.
// Don't sort here — the human-readable dates ("May 5 – June 15, 2021") aren't ISO and would
// sort alphabetically (Feb 2022 before May 2021), which is wrong.
export function activitiesForBucket(bucket: ProgramBucket): Activity[] {
  return activities.filter((a) => a.bucket === bucket)
}

export function programForBucket(bucket: ProgramBucket): Program {
  const p = programs.find((p) => p.bucket === bucket)
  if (!p) throw new Error(`No program for bucket: ${bucket}`)
  return p
}
