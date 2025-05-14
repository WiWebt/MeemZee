"use client";

import dynamic from 'next/dynamic';

// Loading components with proper suspense and no SSR for interactive components
const Landing = dynamic(() => import('@/components/home/Landing'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const Benefits = dynamic(() => import('@/components/home/Benefits'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const FeaturesList = dynamic(() => import('@/components/home/FeaturesList'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const Comparison = dynamic(() => import('@/components/home/Comparison'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const FAQ = dynamic(() => import('@/components/home/FAQ'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

const PricingCTA = dynamic(() => import('@/components/home/PricingCTA'), {
  loading: () => <div className="min-h-screen" />,
  ssr: false
});

export default function HomeContent() {
  return (
    <>
      <Landing />
      <FeaturesList />
      <Benefits />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <PricingCTA />
    </>
  );
}
