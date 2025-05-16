import Image from "next/image";
import React from "react";

export default function PricingHeader() {
  return (
    <div className="relative mx-auto max-w-4xl text-center">
      {/* Large Dog Mascot - With bounce animation */}
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative w-32 h-32 animate-bounce-slow">
          <Image
            src="/logo.png"
            alt="MeemZee Mascot"
            width={128}
            height={128}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Speech Bubble - Cloud style with floating animation */}
      <div className="mt-16 mb-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-[3rem] p-6 max-w-lg mx-auto animate-float-slow relative shadow-xl">
          {/* Speech bubble pointer */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-8 h-8 bg-white rounded-full shadow-lg" />
              <div className="w-6 h-6 bg-white rounded-full absolute -right-1 -top-3 shadow-lg" />
              <div className="w-4 h-4 bg-white rounded-full absolute -right-2 -top-5 shadow-lg" />
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            &quot;Ready to level up your language typing skills?&quot;
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <h2 className="text-base font-semibold leading-7 text-blue-600">
          Pricing Plans
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Choose your learning path
        </p>
      </div>

      <div className="mx-auto mt-4 max-w-2xl text-center">
        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-200 mb-4 backdrop-blur-sm">
          🎉 Pre-Launch Offer: First 100 Users Get Free Lifetime Premium
        </div>
      </div>
      <p className="mx-auto mt-2 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Join our waitlist now. Early adopters get exclusive benefits including lifetime premium features and special in-app items.
      </p>
    </div>
  );
}
