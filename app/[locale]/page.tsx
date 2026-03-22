import { getTranslations } from 'next-intl/server';
import Link from "next/link";
import { PenLine } from "lucide-react";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-32 h-32 bg-emerald-50 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mb-10 animate-bounce transition-all">
        <PenLine className="w-14 h-14 text-emerald-700" />
      </div>
      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
        {t('hero.title')} <span className="text-emerald-700">{t('site.name')}</span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        {t('hero.subtitle')} "{t('hero.placeholder')}".
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/submit" className="px-12 py-4 bg-emerald-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition-all">
          {t('buttons.submit_article')}
        </Link>
        <Link href="/newsroom" className="px-12 py-4 border-2 border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-all">
          {t('buttons.visit_newsroom')}
        </Link>
      </div>
    </div>
  );
}
