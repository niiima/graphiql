// Updated file: app/components/LanguageToggle.tsx
// Fixed focus ring appearing on the trigger button after selecting a language item

'use client';

import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuLabel,
} from './ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const rtlLanguages = ['fa', 'ar'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);

    document.documentElement.dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const currentLang = (i18n.language?.split('-')[0] || 'fa').toLowerCase();

  const displayLabel =
    currentLang === 'fa' ? 'FA' :
      currentLang === 'ar' ? 'AR' :
        currentLang === 'fr' ? 'FR' :
          currentLang === 'de' ? 'DE' :
            'EN';

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fa', name: 'فارسی' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Select language"
        >
          <Languages className="h-5 w-5" />
          <span className="sr-only">Select language</span>
          <span className="ml-2 text-xs font-medium hidden sm:inline-block">
            {displayLabel}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="z-[9999] min-w-[160px] border bg-background shadow-lg"
          // Prevent focus from returning to trigger after selecting an item
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Language
          </DropdownMenuLabel>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onSelect={() => changeLanguage(lang.code)}
              className="cursor-pointer justify-between"
            >
              {lang.name}
              {currentLang === lang.code && <span className="text-primary">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}