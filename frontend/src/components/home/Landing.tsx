'use client';

import Link from 'next/link';
import { useState } from "react";
import SignupDialog from "../global/SignupDialog";

export default function Landing() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsSignupOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white will-change-transform">
      {/* Remove grid pattern since it's not providing meaningful visual value */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Master <span className="text-blue-600">Any Language</span>
                <br />
                Through Typing
              </h1>
              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">
                  🎁 Pre-Launch: First 100 users get Free Lifetime Premium
                </span>
                <span className="mt-2 inline-flex items-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                  🚀 First 1000: Early Access to Features
                </span>
              </div>
              <div className="mt-6">
                <div className="mx-auto max-w-3xl bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 transform hover:scale-[1.02] transition-transform duration-300">
                  <p className="text-xl leading-8 text-gray-700 font-medium">
                    Be among the first to experience our{" "}
                    <span className="text-blue-600 font-semibold">revolutionary platform</span>{" "}
                    for learning to type in multiple languages.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {["Korean", "Bangla", "Persian", "Japanese"].map((lang) => (
                      <span key={lang} className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-md font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {lang}
                      </span>
                    ))}
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-md font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      & more!
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <span className="inline-block">
                  🏆 Early adopters receive exclusive in-app badges and items
                </span>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={handleJoinWaitlist}
                  className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Join Waitlist Now
                </button>
                <Link
                  href="/pricing"
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  View Pricing <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignupDialog 
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </div>
  );
}
