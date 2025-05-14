'use client';

import Link from 'next/link';
import { useState } from "react";
import SignupDialog from "../global/SignupDialog";

export default function PricingCTA() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleGetEarlyAccess = () => {
    setIsSignupOpen(true);
  };

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to start your journey?
          <br />
          <span className="text-lg font-normal text-gray-300 mt-2">
            Join now and be among the first 100 users to get lifetime premium access free!
          </span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <button
            onClick={handleGetEarlyAccess}
            className="rounded-md bg-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Get Early Access
          </button>
          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-white"
          >
            View pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <SignupDialog 
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </div>
  );
}
