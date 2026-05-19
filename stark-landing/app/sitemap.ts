import type { MetadataRoute } from 'next'

const BASE = 'https://starkfoundation.in'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/',                      priority: 1.0, changeFrequency: 'monthly' },
    { path: '/about-us',              priority: 0.9, changeFrequency: 'monthly' },
    { path: '/bachpan',               priority: 0.8, changeFrequency: 'monthly' },
    { path: '/vocational-training',   priority: 0.8, changeFrequency: 'monthly' },
    { path: '/higher-ed-partnerships', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/community-camps',       priority: 0.8, changeFrequency: 'monthly' },
    { path: '/disaster-relief',       priority: 0.8, changeFrequency: 'monthly' },
    { path: '/digital-pahel',         priority: 0.7, changeFrequency: 'monthly' },
    { path: '/donate-now',            priority: 0.9, changeFrequency: 'yearly' },
    { path: '/volunteer-your-time',   priority: 0.8, changeFrequency: 'yearly' },
    { path: '/partner-with-us',       priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact',               priority: 0.6, changeFrequency: 'yearly' },
    { path: '/report-2026',           priority: 0.7, changeFrequency: 'yearly' },
    { path: '/the-foundation',        priority: 0.8, changeFrequency: 'yearly' },
  ]
  return pages.map(p => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
