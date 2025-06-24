import { useLanguage } from '@/contexts/LanguageContext';
import { translations, TranslationKey } from '@/translations/translations';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return { t };
};
