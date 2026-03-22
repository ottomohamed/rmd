import '../globals.css'
import { Providers } from '@/lib/providers'
import { Layout } from '@/components/layout'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();
  
  return {
    title: `${t('site.name')} | ${t('site.description')}`,
    description: t('site.description'),
  };
}

export default async function RootLayout({
  children,
  params
}: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head><meta charSet="utf-8" /></head>
      <body className="antialiased">
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
