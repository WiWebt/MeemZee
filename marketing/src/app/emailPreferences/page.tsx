'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import UnsubscribeModal from '@/components/emailPreferences/UnsubscribeModal';
import PreferenceSection from '@/components/emailPreferences/PreferenceSection';
import StatusMessage from '@/components/emailPreferences/StatusMessage';
import { configProvider } from '@/config/configProvider';
import type { EmailPreference } from '@/components/emailPreferences/types';

const API_BASE_URL = configProvider.get('apiBaseUrl');

const PREFERENCES_CONFIG = {
  communication: {
    title: "Communication Preferences",
    items: [
      {
        id: "marketing_updates",
        name: "Marketing Updates",
        description: "Receive updates about new features and promotions",
        category: "communication" as const,
      },
      {
        id: "newsletter",
        name: "Newsletter",
        description: "Monthly newsletter with industry insights and tips",
        category: "communication" as const,
      },
      {
        id: "product_updates",
        name: "Product Updates",
        description: "Important updates about our products and services",
        category: "communication" as const,
      },
    ],
  },
  announcement: {
    title: "Announcement Preferences",
    items: [
      {
        id: "product_announcements",
        name: "Product Announcements",
        description: "Be the first to know about new product launches and major updates",
        category: "announcement" as const,
      },
      {
        id: "maintenance",
        name: "Maintenance Notifications",
        description: "Get notified about scheduled maintenance and system updates",
        category: "announcement" as const,
      },
      {
        id: "events",
        name: "Event Announcements",
        description: "Stay informed about upcoming webinars, conferences, and events",
        category: "announcement" as const,
      },
    ],
  },
};

function EmailPreferencesContent() {
  const searchParams = useSearchParams();
  const [preferences, setPreferences] = useState<EmailPreference[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);
  const email = searchParams.get('email');

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(email || '')}`);
        
        // Convert static config to EmailPreference array with default enabled state
        const defaultPreferences: EmailPreference[] = Object.values(PREFERENCES_CONFIG).flatMap(
          section => section.items.map(item => ({
            ...item,
            enabled: true,
          }))
        );

        if (!response.ok) {
          setPreferences(defaultPreferences);
          return;
        }

        const users = await response.json();
        const user = users[0];
        
        if (user?.preferences) {
          // Merge static config with user preferences
          setPreferences(
            defaultPreferences.map(pref => ({
              ...pref,
              enabled: user.preferences[pref.id] ?? true,
            }))
          );
        } else {
          setPreferences(defaultPreferences);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPreferences();
  }, [email]);

  const togglePreference = (id: string) => {
    setPreferences(prev =>
      prev.map(pref => (pref.id === id ? { ...pref, enabled: !pref.enabled } : pref))
    );
  };

  const handleUnsubscribeAll = async () => {
    if (!email) {
      return;
    }

    try {
      setPreferences(prev => prev.map(pref => ({ ...pref, enabled: false })));
      
      const response = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(email)}`);
      const users = await response.json();
      const user = users[0];

      if (user) {
        await fetch(`${API_BASE_URL}/users/${user.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            preferences: Object.fromEntries(
              preferences.map(pref => [pref.id, false])
            ),
          }),
        });
      } else {
        await fetch(`${API_BASE_URL}/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            preferences: Object.fromEntries(
              preferences.map(pref => [pref.id, false])
            ),
          }),
        });
      }
      
      setShowUnsubscribeModal(false);
      setStatus('success');
      setTimeout(scrollToStatus, 100);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(scrollToStatus, 100);
    }
  };

  const scrollToStatus = () => {
    const statusElement = document.getElementById('status-message');
    if (statusElement) {
      statusElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSave = async () => {
    if (!email) {
      return;
    }

    setStatus('idle');
    try {
      const preferencesMap = preferences.reduce(
        (acc, pref) => ({
          ...acc,
          [pref.id]: pref.enabled,
        }),
        {}
      );

      const response = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(email)}`);
      const users = await response.json();
      const user = users[0];

      if (user) {
        await fetch(`${API_BASE_URL}/users/${user.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            preferences: preferencesMap,
          }),
        });
      } else {
        await fetch(`${API_BASE_URL}/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            preferences: preferencesMap,
          }),
        });
      }
      setStatus('success');
      // Scroll to status message after setting status
      setTimeout(scrollToStatus, 100);
    } catch (err) {
      console.error(err);
      setStatus('error');
      // Scroll to status message after error
      setTimeout(scrollToStatus, 100);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-10 h-10 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading your preferences...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {status !== 'idle' && (
          <div className="mb-8">
            <StatusMessage
              status={status}
              message={
                status === 'success'
                  ? 'Your preferences have been updated successfully!'
                  : 'There was an error updating your preferences. Please try again.'
              }
              onDismiss={() => setStatus('idle')}
            />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden backdrop-blur-lg backdrop-filter"
        >
          <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex justify-between items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold text-gray-900 tracking-tight"
                >
                  Email Preferences
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-2 text-sm text-gray-600"
                >
                  Customize your email notification settings
                </motion.p>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUnsubscribeModal(true)}
                className="text-sm font-medium text-red-600 hover:text-red-500 bg-red-50 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Unsubscribe from all
              </motion.button>
            </div>
          </div>

          <div className="px-8 py-8 space-y-8">
            <PreferenceSection
              title="Communication Preferences"
              preferences={preferences}
              category="communication"
              onToggle={togglePreference}
            />

            <PreferenceSection
              title="Announcement Preferences"
              preferences={preferences}
              category="announcement"
              onToggle={togglePreference}
            />
          </div>

          <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleSave}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Save Preferences
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <UnsubscribeModal
        isOpen={showUnsubscribeModal}
        onClose={() => setShowUnsubscribeModal(false)}
        onConfirm={handleUnsubscribeAll}
      />
    </div>
  );
}

export default function EmailPreferences() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="h-12 w-48 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 w-64 bg-gray-200 rounded"></div>
            <div className="h-4 w-56 bg-gray-200 rounded"></div>
            <div className="h-4 w-60 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <EmailPreferencesContent />
    </Suspense>
  );
}
