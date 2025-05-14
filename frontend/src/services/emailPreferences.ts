import { configProvider } from '@/config/configProvider';
import type { EmailPreference } from '@/components/emailPreferences/types';

const API_BASE_URL = configProvider.get('apiBaseUrl');

export const emailPreferencesService = {
  async getPreferences(email?: string): Promise<EmailPreference[]> {
    const url = email
      ? `${API_BASE_URL}/preferences?email=${encodeURIComponent(email)}`
      : `${API_BASE_URL}/preferences`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch email preferences');
    }

    const data = await response.json();

    if (email) {
      // If email is provided, try to find user preferences
      const userResponse = await fetch(
        `${API_BASE_URL}/users?email=${encodeURIComponent(email)}`
      );
      if (!userResponse.ok) {
        return data; // Return default preferences if user not found
      }

      const users = await userResponse.json();
      const user = users[0]; // json-server returns an array

      if (user && user.preferences) {
        // Merge preferences with user settings
        return data.map((pref: EmailPreference) => ({
          ...pref,
          enabled: user.preferences[pref.id] ?? true,
        }));
      }
    }

    return data;
  },

  async updatePreferences(
    email: string,
    preferences: Record<string, boolean>
  ): Promise<void> {
    const userResponse = await fetch(
      `${API_BASE_URL}/users?email=${encodeURIComponent(email)}`
    );
    const users = await userResponse.json();
    const user = users[0];

    if (user) {
      // Update existing user
      await fetch(`${API_BASE_URL}/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preferences: {
            ...user.preferences,
            ...preferences,
          },
        }),
      });
    } else {
      // Create new user
      await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          preferences,
        }),
      });
    }
  },
};
