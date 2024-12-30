'use client';

import * as Sentry from '@sentry/nextjs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <button onClick={() => Sentry.captureMessage('Something went wrong')}>
          Test
        </button>
        <button
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Test SENTRY ERROR
        </button>
      </div>
    </main>
  );
}
