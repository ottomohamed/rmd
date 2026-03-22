import { useParams, Link } from "wouter";
import { useListMAGHREB24Articles, useListMAGHREB24Authors } from "@workspace/api-client-react";
import { ArticleCard } from "@/components/article-card";
import { getSectionBgColor, getTranslatedSection, translateAuthorName, getAuthorImage, translateAuthorTitle, formatDate, usePageTitle } from "@/lib/utils";
import { Loader2, PenBox, MessageSquare, TrendingUp, Sparkles, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SectionPage() {
  const { section } = useParams();
  const { data: articlesData, isLoading: isLoadingArticles } = useListMAGHREB24Articles({ section: section as any, limit: 20 });
  const { data: authors, isLoading: isLoadingAuthors } = useListMAGHREB24Authors();

  if (isLoadingArticles || isLoadingAuthors) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-emerald-700" />
      </div>
    );
  }

  const articles = Array.isArray(articlesData?.articles) ? articlesData.articles : [];
  const translatedSection = getTranslatedSection(section || "");
  const isEditorial = section?.toLowerCase() === 'editorial';
  usePageTitle(translatedSection || section || '');

  return (
    <div className="animate-in fade-in duration-700 text-right" dir="rtl">
      {/* Hero / Header Section */}
      <header className="bg-white dark:bg-slate-950 py-16 mb-16 border-b border-gray-100 dark:border-slate-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-700/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
               <Sparkles className="w-4 h-4" /> Ù‚Ø³Ù… {translatedSection}
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-sans text-gray-900 dark:text-white mb-6 tracking-tighter">
              {isEditorial ? "Ø±ÙƒÙ† Ø§Ù„Ù‚Ø±Ø§Ø¡ ÙˆØ§Ù„Ø¢Ø±Ø§Ø¡" : translatedSection}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10 font-medium">
              {isEditorial 
                ? "ÙØ¶Ø§Ø¡ Ù…Ø®ØµØµ Ù„Ù„Ø­ÙˆØ§Ø± Ø§Ù„ÙÙƒØ±ÙŠØŒ Ø§Ù„Ø¢Ø±Ø§Ø¡ Ø§Ù„Ù…ØªÙ†ÙˆØ¹Ø©ØŒ ÙˆØ£ØµÙˆØ§Øª Ø§Ù„Ù…Ø¬ØªÙ…Ø¹. Ø³Ø§Ù‡Ù… ÙÙŠ ØµÙŠØ§ØºØ© Ø§Ù„Ù†Ù‚Ø§Ø´ Ø­ÙˆÙ„ Ø§Ù„Ù‚Ø¶Ø§ÙŠØ§ Ø§Ù„ØªÙŠ ØªÙ‡Ù… Ø§Ù„Ù…ØºØ±Ø¨ ÙˆØ§Ù„Ù…Ù†Ø·Ù‚Ø©."
                : `Ù†Ù‚Ø¯Ù… Ù„ÙƒÙ… Ø£Ø­Ø¯Ø« Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ± ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª Ø§Ù„Ù…Ø¹Ù…Ù‚Ø© ÙˆØ§Ù„Ø­ØµØ±ÙŠØ© Ù…Ù† Ù‚Ù„Ø¨ Ø§Ù„Ø£Ø­Ø¯Ø§Ø« ÙÙŠ Ù‚Ø³Ù… ${translatedSection} Ø¹Ø¨Ø± Ø´Ø¨ÙƒØ© Ù…Ø±Ø§Ø³Ù„ÙŠÙ†Ø§.`
              }
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/submit" className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-700/20 transition-all active:scale-95">
                <PenBox className="w-4 h-4" /> {isEditorial ? "Ø£Ø±Ø³Ù„ Ù…Ù‚Ø§Ù„Ùƒ Ù„Ù„Ù†Ø´Ø±" : "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø§Ù„Ù‚Ø³Ù…"}
              </Link>
              <Link href="/newsroom" className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-lg transition-all">
                <UserCheck className="w-4 h-4 text-gold-500" /> ØªØ¹Ø±Ù Ø¹Ù„Ù‰ Ù‡ÙŠØ¦Ø© Ø§Ù„ØªØ­Ø±ÙŠØ±
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-8">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gold-600 mb-10 flex items-center gap-3">
             <div className="h-0.5 w-8 bg-gold-500"></div> Ø£Ø­Ø¯Ø« Ø§Ù„Ù…Ù†Ø´ÙˆØ±Ø§Øª
          </h2>

          {articles.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 dark:bg-slate-900 rounded-3xl border border-dashed border-gray-200 dark:border-slate-800">
               <MessageSquare className="w-12 h-12 text-gray-200 dark:text-slate-800 mx-auto mb-4" />
               <p className="text-gray-400 font-sans italic text-lg">Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ù‚Ø§Ù„Ø§Øª Ù…Ù†Ø´ÙˆØ±Ø© ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ù‚Ø³Ù… Ø­Ø§Ù„ÙŠØ§Ù‹.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} className="group" />
              ))}
            </div>
          )}

          {/* Pagination Placeholder */}
          {articles.length > 0 && (
            <nav className="mt-20 pt-10 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
               <button className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-emerald-700 transition-colors">â† Ø§Ù„Ù…Ù‚Ø§Ù„Ø§Øª Ø§Ù„Ø£Ù‚Ø¯Ù…</button>
               <div className="flex gap-3">
                 <span className="w-10 h-10 flex items-center justify-center bg-emerald-700 text-white rounded-xl font-black shadow-lg shadow-emerald-700/20">1</span>
                 <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl font-black hover:bg-gray-50 transition-colors cursor-pointer">2</span>
               </div>
               <button className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-emerald-700 transition-colors">Ø§Ù„Ù…Ù‚Ø§Ù„Ø§Øª Ø§Ù„Ø£Ø­Ø¯Ø« â†’</button>
            </nav>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Featured Columnists */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-50 dark:border-slate-800">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500 mb-8 flex items-center gap-3">
               <TrendingUp className="w-4 h-4" /> Ø£Ø¨Ø±Ø² Ø§Ù„ÙƒØªØ§Ø¨
            </h3>
            <div className="space-y-8">
              {authors && Array.isArray(authors) && authors.length > 0 ? (
                authors.slice(0, 3).map(author => (
                  <Link key={author.id} href={`/author/${author.slug}`} className="flex items-center gap-4 group">
                    <div className="relative">
                      <img 
                        src={getAuthorImage(author.slug)} 
                        alt={author.name} 
                        className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-md grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-700 transition-colors">{translateAuthorName(author.name)}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{translateAuthorTitle(author.title)}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-400 text-sm">Ù„Ø§ ÙŠÙˆØ¬Ø¯ ÙƒØªØ§Ø¨ Ø­Ø§Ù„ÙŠÙ‹Ø§</p>
              )}
            </div>
          </section>

          {/* Submission Guidelines */}
          <section className="bg-emerald-950 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4">Ù‡Ù„ Ù„Ø¯ÙŠÙƒ Ø±Ø£ÙŠØŸ</h3>
              <p className="text-sm text-emerald-100/70 mb-8 leading-relaxed font-medium">
                Ù†Ø±Ø­Ø¨ Ø¨Ø§Ù„Ù…Ù‚Ø§Ù„Ø§Øª Ø§Ù„Ø¹Ù…ÙŠÙ‚Ø© ÙˆØ§Ù„Ù…Ø¯Ø±ÙˆØ³Ø© ÙÙŠ Ø§Ù„Ø³ÙŠØ§Ø³Ø© ÙˆØ§Ù„Ø§Ù‚ØªØµØ§Ø¯ ÙˆØ§Ù„Ø«Ù‚Ø§ÙØ© ÙˆØ§Ù„Ù…Ø¬ØªÙ…Ø¹. Ø´Ø§Ø±Ùƒ ØµÙˆØªÙƒ Ù…Ø¹ Ø¬Ù…Ù‡ÙˆØ±Ù†Ø§ Ø§Ù„ÙˆØ§Ø³Ø¹.
              </p>
              <ul className="text-xs space-y-4 mb-10 text-emerald-200 font-bold italic">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Ø¹Ø¯Ø¯ Ø§Ù„ÙƒÙ„Ù…Ø§Øª: 600 - 1000 ÙƒÙ„Ù…Ø©</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Ù…Ø­ØªÙˆÙ‰ Ø£ØµÙ„ÙŠ ÙˆØºÙŠØ± Ù…Ù†Ø´ÙˆØ± Ù…Ø³Ø¨Ù‚Ø§Ù‹</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Ù†Ø¨Ø±Ø© Ù…Ù‡Ù†ÙŠØ© ÙˆÙ…ÙˆØ¶ÙˆØ¹ÙŠØ©</li>
              </ul>
              <Link href="/submit" className="block w-full bg-gold-500 hover:bg-gold-600 text-white font-black py-4 rounded-2xl text-center shadow-lg active:scale-95 text-[10px] uppercase tracking-widest transition-all">
                Ø§Ø¨Ø¯Ø£ Ø¹Ù…Ù„ÙŠØ© Ø§Ù„Ù†Ø´Ø± Ø§Ù„Ø¢Ù†
              </Link>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
               <PenBox className="w-20 h-20" />
            </div>
          </section>

          {/* Trending Topics */}
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-3">
               <Sparkles className="w-4 h-4 text-gold-500" /> Ù…ÙˆØ§Ø¶ÙŠØ¹ Ø³Ø§Ø®Ù†Ø©
            </h2>
            <div className="flex flex-wrap gap-2">
              {['#Ø§Ù„Ù‡ÙŠØ¯Ø±ÙˆØ¬ÙŠÙ†_Ø§Ù„Ø£Ø®Ø¶Ø±', '#Ø§Ù„Ø§ØªØ­Ø§Ø¯_Ø§Ù„Ù…ØºØ§Ø±Ø¨ÙŠ', '#Ø¥ØµÙ„Ø§Ø­_Ø§Ù„ØªØ¹Ù„ÙŠÙ…', '#Ø§Ù„Ø°ÙƒØ§Ø¡_Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ', '#Ø§Ù„Ø·Ø§Ù‚Ø©_Ø§Ù„Ù…ØªØ¬Ø¯Ø¯Ø©'].map(tag => (
                <Link key={tag} href="#" className="px-4 py-2 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-full text-[10px] font-black text-gray-600 dark:text-gray-400 hover:border-emerald-700 hover:text-emerald-700 transition-all">
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

