"use client"

import { Dialog, Transition } from "@headlessui/react"
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Firework = ({ delay = 0 }) => (
    <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
    >
        {/* Circular bursts */}
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        transition: {
                            delay: delay + i * 0.1,
                            duration: 0.8,
                            ease: "easeOut"
                        }
                    }
                }}
                style={{
                    rotate: `${i * 30}deg`,
                    transformOrigin: "0 0"
                }}
            >
                <div 
                    className="w-24 h-1 origin-left"
                    style={{
                        background: `radial-gradient(circle, ${
                            ['#FFD700', '#FF6B6B', '#4FD1C5', '#F687B3'][i % 4]
                        } 0%, transparent 100%)`
                    }}
                />
            </motion.div>
        ))}

        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={`sparkle-${i}`}
                className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-yellow-300"
                variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                        transition: {
                            delay: delay + Math.random() * 0.3,
                            duration: 0.6,
                            ease: "easeOut"
                        }
                    }
                }}
            />
        ))}
    </motion.div>
)

interface AuthStatusDialogProps {
    isOpen: boolean
    onClose: () => void
    status: "success" | "error"
}

export default function AuthStatusDialog({ isOpen, onClose, status }: AuthStatusDialogProps) {
    const isSuccess = status === "success"

    const iconVariants = {
        hidden: { scale: 0, opacity: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            opacity: 1,
            rotate: 0,
            transition: { 
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.6 
            }
        }
    }

    const contentVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4 }
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center align-middle shadow-xl transition-all">
                                {/* Close button with larger hit area */}
                                <div className="absolute right-2 top-2 z-50">
                                    <button
                                        onClick={onClose}
                                        className="p-3 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Success/Error Icon with gradient background */}
                                <div className="relative mb-8">
                                    <div className={`absolute inset-0 blur-xl opacity-20 ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`} />
                                    <div className="relative w-32 h-32 mx-auto">
                                        {isSuccess && (
                                            <Firework delay={0} />
                                        )}
                                        <motion.div
                                            variants={iconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className={`absolute inset-0 rounded-full flex items-center justify-center ${
                                                isSuccess ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
                                            }`}
                                        >
                                            {isSuccess ? (
                                                <CheckCircleIcon className="h-16 w-16 relative z-10" />
                                            ) : (
                                                <XCircleIcon className="h-16 w-16" />
                                            )}
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="space-y-6"
                                >
                                    <div>
                                        <Dialog.Title className="text-3xl font-bold mb-2">
                                            {isSuccess ? (
                                                <>
                                                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                                        Welcome to MeemZee!
                                                    </span>
                                                    <span className="ml-1">🎉</span>
                                                </>
                                            ) : (
                                                <span className="text-red-700">
                                                    Oops! Something went wrong
                                                </span>
                                            )}
                                        </Dialog.Title>
                                        <Dialog.Description className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto">
                                            {isSuccess 
                                                ? "You're now part of our vibrant community of language enthusiasts. Get ready to revolutionize the way you work with AI!"
                                                : "We couldn't complete the authentication process. Please try again or contact our support team if the problem persists."}
                                        </Dialog.Description>
                                    </div>

                                    {isSuccess && (
                                        <motion.div 
                                            className="pt-2 text-sm text-gray-500 border-t border-gray-100 space-y-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <div className="flex flex-col gap-3">
                                                <div>
                                                    <div>Want to customize your notifications?</div>
                                                    <Link 
                                                        href="/emailPreferences"
                                                        className="text-gray-600 hover:text-gray-700 underline underline-offset-2"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            onClose()
                                                            window.location.href = "/emailPreferences"
                                                        }}
                                                    >
                                                        Manage preferences
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
