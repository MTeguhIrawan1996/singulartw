import { fileURLToPath } from 'node:url';

import bundleAnalyzer from '@next/bundle-analyzer';
import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/env.ts');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
});
