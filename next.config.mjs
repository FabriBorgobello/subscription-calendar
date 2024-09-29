const TODAY = new Date();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${TODAY.getFullYear()}/${TODAY.getMonth() + 1}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
