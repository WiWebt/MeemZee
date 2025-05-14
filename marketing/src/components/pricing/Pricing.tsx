'use client';

import React from 'react';
import ComparisonTable from './ComparisonTable';
import FAQSection from './FAQSection';
import PricingCard from './PricingCard';
import PricingHeader from './PricingHeader';

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '/signup',
    price: { monthly: 'Coming Soon' },
    description: 'Everything you need to get started with typing practice.',
    features: [
      'Access to basic typing lessons',
      'Practice in multiple languages',
      'Daily challenges',
      'Basic progress tracking',
      'Ad-supported experience',
    ],
    featured: false,
    comingSoon: true,
    futurePrice: 'Free',
    featureDetails: {
      'Languages Available': '5 languages',
      'Daily AI Practice': 'Up to 30 minutes',
      'Typing Tests': 'Basic tests only',
      'Progress Reports': 'Weekly summary',
      'Lesson Types': 'Basic lessons',
      'Practice Modes': 'Standard mode only',
      'Learning Resources': 'Basic resources',
      'Support': 'Community support',
      'Ad Experience': 'Contains ads',
      'Custom Practice': 'Limited customization',
      'Social Features': 'Basic profile only',
      'Offline Access': 'Not available',
    },
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '/signup?plan=premium',
    price: { monthly: 'Coming Soon' },
    description: 'Unlock the full potential of language typing.',
    features: [
      'All Free features',
      'Ad-free experience',
      'Unlimited AI practice',
      'Advanced analytics',
      'AI-powered tutoring',
      'Virtual pen pals',
      'Custom learning paths',
      'Priority support',
    ],
    featured: true,
    comingSoon: true,
    futurePrice: '$5/month',
    featureDetails: {
      'Languages Available': 'Unlimited languages',
      'Daily Practice Time': 'Unlimited',
      'Typing Tests': 'Advanced tests & certifications',
      'Progress Reports': 'Daily detailed analysis',
      'Lesson Types': 'Advanced & specialized lessons',
      'Practice Modes': 'Multiple modes (Speed, Accuracy, etc.)',
      'Learning Resources': 'Premium study materials',
      'Support': 'Priority 24/7 support',
      'Ad Experience': 'Ad-free',
      'Custom Practice': 'Full customization',
      'Social Features': 'Full social features & pen pals',
      'Offline Access': 'Available',
    },
  },
  {
    name: 'Certification',
    id: 'tier-certification',
    href: '/signup?plan=certification',
    price: { monthly: 'Coming Soon' },
    description: 'Validate your typing and language proficiency.',
    features: [
      'Official certification exam',
      'Unlimited retakes',
      'Detailed performance analysis',
      'Digital certificate',
      'Shareable credentials',
      'Industry recognition',
    ],
    featured: false,
    comingSoon: true,
    futurePrice: '$50/exam',
    featureDetails: {
      'Languages Available': 'All languages',
      'Daily AI Practice': 'Unlimited',
      'Typing Tests': 'All test types',
      'Progress Reports': 'Daily detailed reports',
      'Lesson Types': 'All lesson types',
      'Practice Modes': 'All modes',
      'Learning Resources': 'Premium resources',
      'Support': 'Priority support',
      'Ad Experience': 'Ad-free',
      'Custom Practice': 'Full customization',
      'Social Features': 'All social features',
      'Offline Access': 'Full offline access',
    },
  },
];

const comparisonFeatures = [
  {
    category: 'Core Features',
    items: [
      {
        name: 'Languages Available',
        free: '5 languages',
        premium: 'Unlimited languages',
      },
      {
        name: 'Daily AI Practice Time',
        free: 'Up to 30 minutes',
        premium: 'Unlimited',
      },
      {
        name: 'Typing Tests',
        free: 'Basic tests only',
        premium: 'Advanced tests & certifications',
      },
    ],
  },
  {
    category: 'Learning Experience',
    items: [
      {
        name: 'Progress Reports',
        free: 'Weekly summary',
        premium: 'Daily detailed analysis',
      },
      {
        name: 'Lesson Types',
        free: 'Basic lessons',
        premium: 'Advanced & specialized lessons',
      },
      {
        name: 'Practice Modes',
        free: 'Standard mode only',
        premium: 'Multiple modes (Speed, Accuracy, etc.)',
      },
      {
        name: 'Learning Resources',
        free: 'Basic resources',
        premium: 'Premium study materials',
      },
    ],
  },
  {
    category: 'Support & Experience',
    items: [
      { name: 'Support', free: 'Community support', premium: 'Priority 24/7 support' },
      { name: 'Ad Experience', free: 'Contains ads', premium: 'Ad-free' },
      {
        name: 'Custom Practice',
        free: 'Limited customization',
        premium: 'Full customization',
      },
    ],
  },
  {
    category: 'Additional Features',
    items: [
      {
        name: 'Social Features',
        free: 'Basic profile only',
        premium: 'Full social features & pen pals',
      },
      { name: 'Offline Access', free: 'Not available', premium: 'Available' },
    ],
  },
];

const faqs = [
  {
    id: 1,
    question: "What's included in the free plan?",
    answer: "The free plan includes access to basic typing lessons, practice in multiple languages, daily challenges, basic progress tracking, and an ad-supported experience. It's perfect for getting started with language typing.",
  },
  {
    id: 2,
    question: 'How does the Premium subscription work?',
    answer: "Premium subscription gives you access to all features including ad-free experience, unlimited typing practice, AI-powered tutoring, virtual pen pals, custom learning paths, and priority support. It's billed monthly and can be cancelled anytime.",
  },
  {
    id: 3,
    question: 'What is the certification program?',
    answer: "Our certification program provides official recognition of your language typing skills. It includes a comprehensive exam, unlimited retakes, detailed performance analysis, and a shareable digital certificate that's recognized by industry professionals.",
  },
  {
    id: 4,
    question: 'Can I switch between plans?',
    answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. If you upgrade to a higher tier, you'll get immediate access to all the new features. When downgrading, you'll retain access to your current features until the end of your billing period.",
  },
  {
    id: 5,
    question: 'Is there a refund policy?',
    answer: "Yes, we offer a 30-day money-back guarantee for Premium subscriptions. If you're not satisfied with our service, you can request a full refund within the first 30 days of your subscription.",
  },
];

export default function Pricing() {
  return (
    <div
      className="relative py-24 sm:py-32"
      id="pricing"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <PricingHeader />

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            {tiers.slice(0, 2).map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>

        <ComparisonTable features={comparisonFeatures} />
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
}
