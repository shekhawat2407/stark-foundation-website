/** @type {import('next').NextConfig} */
// Set NEXT_PUBLIC_BASE_PATH=/stark-foundation-website when building for GitHub Pages
// subpath URL (https://<user>.github.io/stark-foundation-website/).
// Leave it empty when serving from a custom apex domain (starkfoundation.in).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
