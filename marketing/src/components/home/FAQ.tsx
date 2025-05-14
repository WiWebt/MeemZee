'use client';

import { useState, ReactNode } from 'react';
import FAQItem from './FAQItem';

const faqs: Array<{
  question: string;
  answer: ReactNode;
}> = [
  {
    question: "What makes MeemZee different from other typing platforms?",
    answer: "MeemZee is specifically designed for multilingual typing with AI-powered learning, real-time feedback, and a gamified approach. Unlike traditional typing tutors, we focus on helping you master typing in multiple scripts and languages simultaneously."
  },
  {
    question: "Which languages are currently supported?",
    answer: "We're launching with support for Korean, Bangla, Persian, Japanese, and more languages coming soon! Our roadmap includes expanding to over 50 languages based on user demand and feedback."
  },
  {
    question: "Do I need special keyboard layouts?",
    answer: "No! MeemZee works with your standard keyboard. Our intelligent input system helps you learn the correct key mappings for each language, and we provide virtual keyboard overlays for visual guidance."
  },
  {
    question: "How long does it take to improve typing speed?",
    answer: "Most users see significant improvement within 2-4 weeks of regular practice. Our adaptive learning system adjusts to your pace, ensuring steady progress whether you're a beginner or advanced typist."
  },
  {
    question: "Is there a mobile app available?",
    answer: "We're currently developing mobile apps for iOS and Android. Join our waitlist to be notified when they launch and get exclusive early access!"
  },
  {
    question: "Can I track my progress across different languages?",
    answer: "Yes! Our dashboard provides detailed analytics for each language, including WPM (Words Per Minute), accuracy, and improvement trends. You can also earn achievements and compete on language-specific leaderboards."
  },
  {
    question: "How can I delete my account?",
    answer: <>To delete your account, log in to the app and visit <a href="https://lang-gang.com/delete-account" className="text-blue-600 hover:text-blue-800 underline">https://lang-gang.com/delete-account</a>. Once you submit the deletion request, your account and all personal data will be scheduled for deletion within 30 days. Please note that if you log back into your account during this 30-day period, your deletion request will be automatically canceled.</>
  }
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Have questions about MeemZee? We&apos;re here to help.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndexes.has(index)}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
