/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    images: {
      domains: ['miro.medium.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.postimg.cc',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;