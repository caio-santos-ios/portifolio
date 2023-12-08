/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
            {
                protocol: "https",
                hostname: "skillicons.dev"
            },
        ],
    formats: ["image/webp"],
    }
}

module.exports = nextConfig
