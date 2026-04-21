import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://assets.calendly.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google.com.ar https://assets.calendly.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.googletagmanager.com https://www.google.com https://www.google.com.ar https://assets.calendly.com https://calendly.com",
              "frame-src https://calendly.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
