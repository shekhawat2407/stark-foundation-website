export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Programs',
    href: '#',
    children: [
      {
        label: 'Vocational Training',
        href: '/vocational-training',
        description: 'Free certified courses in computer skills, accounting, stitching',
      },
      {
        label: 'Bachpan',
        href: '/bachpan',
        description: 'Summer camps, workshops & community work with kids in slums and govt schools',
      },
      {
        label: 'Higher-Ed Partnerships',
        href: '/higher-ed-partnerships',
        description: 'Reviving college labs, running AI workshops',
      },
      {
        label: 'Community Camps',
        href: '/community-camps',
        description: 'CSR-funded health & welfare camps for Bikaner',
      },
      {
        label: 'Disaster Relief',
        href: '/disaster-relief',
        description: 'COVID 2021 response case study',
      },
    ],
  },
  {
    label: 'Digital Pahel',
    href: '/digital-pahel',
  },
  {
    label: 'Get Involved',
    href: '#',
    children: [
      { label: 'Volunteer Your Time', href: '/volunteer-your-time' },
      { label: 'Donate Now', href: '/donate-now' },
      { label: 'Partner With Us', href: '/partner-with-us' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]
