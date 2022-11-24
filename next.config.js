/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'imgur.com', 'platform-lookaside.fbsbx.com', 'ibb.co']
  },
  experimental: {
    appDir: true,
  }
}
