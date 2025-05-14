import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface StatusMessageProps {
    status: "success" | "error";
    message: string;
    onDismiss: () => void;
}

export default function StatusMessage({ status, message, onDismiss }: StatusMessageProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id="status-message"
                className={`rounded-lg p-4 ${
                    status === "success"
                        ? "bg-gradient-to-r from-green-50 to-green-100 border border-green-200"
                        : "bg-gradient-to-r from-red-50 to-red-100 border border-red-200"
                }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex-shrink-0"
                        >
                            {status === "success" ? (
                                <CheckCircleIcon
                                    className="h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                            ) : (
                                <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="ml-3"
                        >
                            <p
                                className={`text-sm font-medium ${
                                    status === "success" ? "text-green-800" : "text-red-800"
                                }`}
                            >
                                {message}
                            </p>
                        </motion.div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onDismiss}
                        className={`p-1 rounded-full ${
                            status === "success" 
                                ? "text-green-500 hover:bg-green-200" 
                                : "text-red-500 hover:bg-red-200"
                        } transition-colors duration-200`}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </motion.button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
