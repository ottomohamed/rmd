import './globals.css'
import { Providers } from './providers'
import { Layout } from '@/components/layout'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();
  
  return {
    title: `${t('site.name')} | ${t('site.description')}`,
    description: t('site.description'),
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // اللغة الافتراضية هي العربية
  const locale = 'ar';
  
  return (
    <html lang={locale} dir="rtl" suppressHydrationWarning>
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
