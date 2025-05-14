import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";

interface PreferenceToggleProps {
    name: string;
    description: string;
    enabled: boolean;
    onChange: () => void;
}

export default function PreferenceToggle({
    name,
    description,
    enabled,
    onChange,
}: PreferenceToggleProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            <div className="flex-1 pr-8">
                <h3 className="text-base font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
            <Switch
                checked={enabled}
                onChange={onChange}
                className={`${
                    enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
                <span
                    className={`${
                        enabled ? "translate-x-8" : "translate-x-1"
                    } inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out`}
                />
            </Switch>
        </motion.div>
    );
}
