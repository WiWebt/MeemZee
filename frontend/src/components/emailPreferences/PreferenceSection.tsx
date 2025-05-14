import { motion } from "framer-motion";
import { EmailPreference } from "./types";
import PreferenceToggle from "./PreferenceToggle";

interface PreferenceSectionProps {
    title: string;
    preferences: EmailPreference[];
    category: string;
    onToggle: (id: string) => void;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function PreferenceSection({
    title,
    preferences,
    category,
    onToggle,
}: PreferenceSectionProps) {
    const filteredPreferences = preferences.filter((pref) => pref.category === category);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-xl p-6"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
                <div className="h-1 w-20 bg-blue-500 rounded mb-6"></div>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-4"
            >
                {filteredPreferences.map((preference) => (
                    <PreferenceToggle
                        key={preference.id}
                        name={preference.name}
                        description={preference.description}
                        enabled={preference.enabled}
                        onChange={() => onToggle(preference.id)}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}
