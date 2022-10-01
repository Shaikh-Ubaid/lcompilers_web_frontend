/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: (process.env.NODE_ENV !== "production" ? "" : "/lcompilers_web_frontend")
}

module.exports = nextConfig
