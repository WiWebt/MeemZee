"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen">
            {/* Left Section */}
            <div className="hidden w-1/2 bg-gradient-to-br from-[#4338CA] to-[#7C3AED] lg:flex lg:flex-col lg:items-center lg:justify-center p-12">
                <div className="text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-5xl font-bold text-white"
                    >
                        Welcome to MeemZee
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 text-xl text-gray-100"
                    >
                        Join our community of language enthusiasts and start your learning journey today.
                    </motion.p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex w-1/2 items-center justify-center bg-white">
                <div className="w-full max-w-md space-y-8 px-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900">Sign in to your account</h2>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.03,
                                borderColor: "#EA4335", // Google red
                                backgroundColor: "#F8FAFC",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.3,
                                scale: {
                                    type: "spring",
                                    stiffness: 700,
                                    damping: 30,
                                    duration: 0
                                },
                                borderColor: { duration: 0 },
                                backgroundColor: { duration: 0 }
                            }}
                            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm"
                        >
                            <FcGoogle className="h-5 w-5" />
                            Continue with Google
                        </motion.button>
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.03,
                                borderColor: "#1877F2", // Facebook blue
                                backgroundColor: "#F8FAFC",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.4,
                                scale: {
                                    type: "spring",
                                    stiffness: 700,
                                    damping: 30,
                                    duration: 0
                                },
                                borderColor: { duration: 0 },
                                backgroundColor: { duration: 0 }
                            }}
                            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm"
                        >
                            <FaFacebook className="h-5 w-5 text-[#1877F2]" />
                            Continue with Facebook
                        </motion.button>
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.03,
                                borderColor: "#000000", // Apple black
                                backgroundColor: "#F8FAFC",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.5,
                                scale: {
                                    type: "spring",
                                    stiffness: 700,
                                    damping: 30,
                                    duration: 0
                                },
                                borderColor: { duration: 0 },
                                backgroundColor: { duration: 0 }
                            }}
                            className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm"
                        >
                            <FaApple className="h-5 w-5" />
                            Continue with Apple
                        </motion.button>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5,
                            delay: 0.6,
                            ease: "easeOut"
                        }}
                        className="mt-4 text-center text-sm text-gray-600"
                    >
                        By continuing, you agree to our{" "}
                        <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">
                            Privacy Policy
                        </Link>
                        .
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
