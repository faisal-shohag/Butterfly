/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
      // missingSuspenseWithCSRBailout: false,
      // staleTimes: {
      //   dynamic: 30
      // }
    // },
    images: {
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
        
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/**',
        }
       
        
      ],
    },
  };
  
  export default nextConfig;