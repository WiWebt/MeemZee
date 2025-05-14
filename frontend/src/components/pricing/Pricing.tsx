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
    price: { monthly: '$0' },
    description: 'Access to basic features and tools.',
    features: [
      'Basic price tracking',
      'Limited product comparisons',
      'Basic utility tools access',
      'Ad-supported experience',
    ],
    featured: false,
    comingSoon: false,
    futurePrice: 'Free',
    featureDetails: {
      'Price Tracking': 'Up to 5 items',
      'Product Categories': 'Limited categories',
      'Utility Tools': 'Basic access',
      'Update Frequency': 'Daily updates',
      'Price History': '30-day history',
      'Price Alerts': 'Basic email alerts',
      'Product Search': 'Basic search',
      'Support': 'Community support',
      'Ad Experience': 'Contains ads',
      'Download Limits': 'Basic limits',
      'Comparison Tools': 'Basic comparison',
      'API Access': 'Not available',
    },
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '/signup?plan=premium',
    price: { monthly: '$4.99' },
    description: 'Full access to all features and priority support.',
    features: [
      'All Free features',
      'Unlimited price tracking',
      'Advanced product comparisons',
      'Priority utility tools access',
      'Ad-free experience',
      'API access',
      'Priority support',
    ],
    featured: true,
    comingSoon: false,
    futurePrice: '$4.99/month',
    featureDetails: {
      'Price Tracking': 'Unlimited items',
      'Product Categories': 'All categories',
      'Utility Tools': 'Full access',
      'Update Frequency': 'Real-time updates',
      'Price History': 'Full history',
      'Price Alerts': 'SMS & email alerts',
      'Product Search': 'Advanced search',
      'Support': 'Priority 24/7 support',
      'Ad Experience': 'Ad-free',
      'Download Limits': 'Unlimited',
      'Comparison Tools': 'Advanced comparison',
      'API Access': 'Full access',
    },
  },
];

const comparisonFeatures = [
  {
    category: 'Price Tracking',
    items: [
      {
        name: 'Tracked Items',
        free: 'Up to 5 items',
        premium: 'Unlimited items',
      },
      {
        name: 'Update Frequency',
        free: 'Daily updates',
        premium: 'Real-time updates',
      },
      {
        name: 'Price History',
        free: '30-day history',
        premium: 'Full history',
      },
    ],
  },
  {
    category: 'Shopping Features',
    items: [
      {
        name: 'Product Categories',
        free: 'Limited categories',
        premium: 'All categories',
      },
      {
        name: 'Price Alerts',
        free: 'Basic email alerts',
        premium: 'SMS & email alerts',
      },
      {
        name: 'Product Search',
        free: 'Basic search',
        premium: 'Advanced search',
      },
      {
        name: 'Comparison Tools',
        free: 'Basic comparison',
        premium: 'Advanced comparison',
      },
    ],
  },
  {
    category: 'Utility Tools',
    items: [
      {
        name: 'Tool Access',
        free: 'Basic access',
        premium: 'Full access',
      },
      {
        name: 'Download Limits',
        free: 'Basic limits',
        premium: 'Unlimited',
      },
      {
        name: 'API Access',
        free: 'Not available',
        premium: 'Full access',
      },
    ],
  },
];

const faqs = [
  {
    id: 1,
    question: "What's included in the free plan?",
    answer: "The free plan includes basic price tracking for up to 5 items, daily price updates, basic utility tools access, and essential shopping features. It's perfect for casual users who want to track a few products.",
  },
  {
    id: 2,
    question: 'How does the Premium subscription work?',
    answer: "Premium subscription gives you unlimited access to all features including unlimited price tracking, real-time updates, advanced product comparisons, priority access to utility tools, and API access. It's billed monthly and can be cancelled anytime.",
  },
  {
    id: 3,
    question: 'What utility tools are available?',
    answer: "Our utility tools include video downloaders (YouTube, Instagram), file converters, and other helpful tools. Free users get basic access with limits, while Premium users get unlimited access to all tools.",
  },
  {
    id: 4,
    question: 'How do price alerts work?',
    answer: "Free users receive basic email alerts when prices drop. Premium users get real-time alerts via both SMS and email, with customizable alert conditions and more frequent updates.",
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
