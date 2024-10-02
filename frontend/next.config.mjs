/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/riotgames",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
