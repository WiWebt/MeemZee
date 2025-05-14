"use client"

import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import SignupForm from "./SocialAuth"
import AuthStatusDialog from "./AuthStatusDialog"
import { Fragment, useState } from "react"

interface SignupDialogProps {
    isOpen: boolean
    onClose: () => void
}

export default function SignupDialog({ isOpen, onClose }: SignupDialogProps) {
    const [showAuthStatus, setShowAuthStatus] = useState(false)
    const [authStatus, setAuthStatus] = useState<"success" | "error">("success")

    const handleClose = () => {
        onClose()
    }

    const handleAuthStart = () => {
        handleClose()
    }

    const handleAuthComplete = (success: boolean) => {
        setAuthStatus(success ? "success" : "error")
        setShowAuthStatus(true)
    }

    const handleStatusClose = () => {
        setShowAuthStatus(false)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={handleClose}>
                    {/* Backdrop animation */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-sm"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 backdrop-blur-sm"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-all transform" aria-hidden="true" />
                    </Transition.Child>

                    {/* Dialog container with scrolling enabled */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            {/* Dialog panel animation */}
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-200"
                                enterFrom="opacity-0 scale-95 translate-y-8"
                                enterTo="opacity-100 scale-100 translate-y-0"
                                leave="ease-in duration-150"
                                leaveFrom="opacity-100 scale-100 translate-y-0"
                                leaveTo="opacity-0 scale-95 translate-y-8"
                            >
                                <Dialog.Panel className="relative w-full max-w-xl transform rounded-2xl bg-white shadow-2xl border border-gray-100 transition-all motion-safe:hover:scale-[1.01]">
                                    <div className="relative">
                                        {/* Decorative gradient background with animation */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-50 transition-opacity duration-500" />
                                        
                                        {/* Close button with enhanced hover effect */}
                                        <button
                                            type="button"
                                            onClick={handleClose}
                                            className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100/80 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            <span className="sr-only">Close</span>
                                        </button>

                                        <div className="relative p-8">
                                            {/* Title with gradient text and animation */}
                                            <Dialog.Title 
                                                className="text-center text-3xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2 transform transition-all duration-300"
                                            >
                                                Join the Waitlist
                                            </Dialog.Title>

                                            {/* Description with fade-in animation */}
                                            <Dialog.Description className="text-center text-sm text-gray-600 mb-8 transition-all duration-300 delay-100">
                                                Be among the first to experience our revolutionary platform.
                                                <br />
                                                <span className="text-secondary-500 font-medium">Sign up now and get early access!</span>
                                            </Dialog.Description>

                                            {/* Form with fade-in animation */}
                                            <div className="transition-all duration-300 delay-200">
                                                <SignupForm 
                                                    onAuthStart={handleAuthStart}
                                                    onAuthComplete={handleAuthComplete}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <AuthStatusDialog 
                isOpen={showAuthStatus}
                onClose={handleStatusClose}
                status={authStatus}
            />
        </>
    )
}
