import React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useLanguage, languages } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden lg:inline">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white border shadow-lg">
        <div className="px-3 py-2 text-sm font-medium text-gray-700 border-b">
          {t('change_language')}
        </div>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language)}
            className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50"
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
            {currentLanguage.code === language.code && (
              <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
            )}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-3 py-2 text-sm text-blue-600 cursor-pointer hover:bg-gray-50">
          {t('learn_more')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
