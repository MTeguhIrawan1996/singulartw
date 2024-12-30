import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: 0.65,
  // This sets the sample rate to be 10%. You may want this to be 100% while
});
