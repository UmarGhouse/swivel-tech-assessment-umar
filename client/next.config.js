/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/employees/list',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
