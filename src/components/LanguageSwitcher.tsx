import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    // Set document direction for RTL languages
    if (languageCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = languageCode;
    }
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white transition-colors duration-200">
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-primary-700 rounded-lg shadow-lg border dark:border-primary-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-primary-600 transition-colors duration-200 ${
                i18n.language === language.code 
                  ? 'bg-primary-50 dark:bg-primary-600 text-primary-800 dark:text-white' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;