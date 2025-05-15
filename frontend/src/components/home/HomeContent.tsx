"use client";

import dynamic from 'next/dynamic';

// Loading components with proper suspense and no SSR for interactive components
const Landing = dynamic(() => import('@/components/home/Landing'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const FeaturesList = dynamic(() => import('@/components/home/FeaturesList'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

export default function HomeContent() {
  return (
    <>
      <Landing />
      <FeaturesList />
    </>
  );
}
