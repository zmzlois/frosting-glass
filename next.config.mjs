/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3v5naxe3z2qca.cloudfront.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
