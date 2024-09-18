/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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