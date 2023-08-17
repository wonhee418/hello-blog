/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.codefactory.ai',
                port: '',
                pathname: '/static/**',
            },
        ],
    },
}

module.exports = nextConfig
