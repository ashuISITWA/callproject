// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { locales } from '../lib/config';
 
export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale if it's a Promise
  const locale = await requestLocale;
  
  // Validate locale and fallback to default
  const validLocale = (locale && locales.includes(locale as any)) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
