"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import notFoundAnimation from "../components/ui/lotties/not-found-dog.json";

// Lazy load the Lottie component
const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
    loading: () => (
        <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg animate-pulse" />
    ),
});

// Import animation data only when needed
const AnimationWrapper = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFoundAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Lottie 
            options={defaultOptions}
            height={300}
            width={300}
            isClickToPauseDisabled={true}
        />
    );
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
            <div className="text-center animate-fadeIn">
                <div className="mb-8">
                    <div className="flex justify-center mb-4">
                        <Suspense fallback={
                            <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg animate-pulse" />
                        }>
                            <AnimationWrapper />
                        </Suspense>
                    </div>
                    <h1 className="text-9xl font-bold text-gray-900 mb-4 animate-scaleIn">404</h1>
                    <div className="animate-slideUp">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Oops! The page you&apos;re looking for seems to have wandered off into the digital wilderness.
                        </p>
                    </div>
                </div>
                
                <div className="animate-slideUp">
                    <Link 
                        href="/"
                        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 hover:scale-105 transform"
                    >
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
