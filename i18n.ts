import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// اللغات المدعومة
export const locales = ['ar', 'fr', 'en'] as const;
export const defaultLocale = 'ar' as const;

export default getRequestConfig(async ({ locale }) => {
  // التحقق من صحة اللغة
  if (!locales.includes(locale as any)) notFound();
  
  // تحميل ملف الترجمة
  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}/common.json`)).default
  };
});
