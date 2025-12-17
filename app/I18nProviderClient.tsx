// Updated file: app/providers/I18nProviderClient.tsx (or wherever this component lives)

'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config'; // Shared i18n instance
import { useEffect } from 'react';

export function I18nProviderClient({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const rtlLanguages = ['fa', 'ar']; // Add more RTL languages here if needed in the future

        const handleLanguageChange = () => {
            const lng = i18n.resolvedLanguage || 'en';

            // Set direction: RTL for Persian (fa) and Arabic (ar), LTR for others
            document.documentElement.dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';

            // Set lang attribute for accessibility and SEO
            document.documentElement.lang = lng;
        };

        // Initial setup
        handleLanguageChange();

        // Listen for future language changes
        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}