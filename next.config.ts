import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next.x-u.cc", 
        pathname: "/topchat/assets/images/**", 
      },
    ],
  },
};

export default withNextIntl(nextConfig);
