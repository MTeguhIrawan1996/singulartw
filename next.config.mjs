import { fileURLToPath } from 'node:url';
import { withSentryConfig } from '@sentry/nextjs';

import bundleAnalyzer from '@next/bundle-analyzer';
import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/env.ts');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default withSentryConfig(withBundleAnalyzer(nextConfig), {
  org: 'one-dev',
  project: 'singulartw-nextjs',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false, // Can be used to suppress logs
});
