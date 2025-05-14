"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FcGoogle } from "react-icons/fc"
import { FaApple, FaFacebook } from "react-icons/fa"

interface SignupFormProps {
    onAuthStart: () => void
    onAuthComplete: (success: boolean) => void
}

export default function SignupForm({ onAuthStart, onAuthComplete }: SignupFormProps) {
    const [loading, setLoading] = useState(false)

    const handleSocialAuth = async () => {
        setLoading(true)
        onAuthStart()
        
        // Simulate auth delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // For demo, always show success
        onAuthComplete(true)
        setLoading(false)
    }

    const buttonVariants = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full space-y-4"
        >
            <div className="space-y-3">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleSocialAuth()}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                    disabled={loading}
                >
                    <FcGoogle className="w-5 h-5" />
                    <span className="font-medium">Continue with Google</span>
                </motion.button>

                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleSocialAuth()}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                    disabled={loading}
                >
                    <FaApple className="w-5 h-5" />
                    <span className="font-medium">Continue with Apple</span>
                </motion.button>

                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleSocialAuth()}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                    disabled={loading}
                >
                    <FaFacebook className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Continue with Facebook</span>
                </motion.button>

                {loading && (
                    <div className="flex justify-center">
                        <div className="animate-spin h-5 w-5 border-2 border-primary-600 rounded-full border-t-transparent"></div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
