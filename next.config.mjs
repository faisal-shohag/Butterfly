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
        {
          protocol: 'https',
          hostname: 'cdn11.bigcommerce.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'books.google.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          port: '',
          pathname: '/**',
        
        },
        {
          protocol: 'https',
          hostname: 'ik.imagekit.io',
          port: '',
          pathname: '/**',
        
        }
       
        
      ],
    },
  };
  
  export default nextConfig;