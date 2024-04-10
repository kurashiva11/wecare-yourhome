/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV == "production" ? "/wecare-yourhome" : "",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
