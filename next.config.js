/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        formats: [
            "image/avif", "image/webp"
        ],
        domains: ["cdn.mos.cms.futurecdn.net"],
        deviceSizes: [
            320,
            640,
            768,
            1024,
            1280,
            1440,
            1920
        ]

    }
}

module.exports = nextConfig
