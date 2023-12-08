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
    },
    async headers() {
        return [
          {
            source: '/api/:path*',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'http://localhost:3000',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
