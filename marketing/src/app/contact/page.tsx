"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-32">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Have questions? We&apos;d love to hear from you. Send us a message
                            and we&apos;ll respond as soon as possible.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
