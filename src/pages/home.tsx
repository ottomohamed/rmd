import { useListMAGHREB24Articles, useListMAGHREB24Authors } from "@workspace/api-client-react";
import { ArticleCard } from "@/components/article-card";
import { Link } from "wouter";
import { getAuthorImage, translateAuthorName, translateAuthorTitle, getTranslatedSection, formatDate, cn, usePageTitle } from "@/lib/utils";
import { Loader2, TrendingUp, Mail, MapPin, PenLine } from "lucide-react";
import { useAds } from "@/hooks/use-ads";

export default function Home() {
  // âœ… ÙƒÙ„ Hooks ÙÙŠ Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© (Ù‚Ø¨Ù„ Ø£ÙŠ if Ø£Ùˆ return)
  usePageTitle('');
  const { ads } = useAds();
  const { data: articlesData, isLoading: isLoadingArticles } = useListMAGHREB24Articles({ limit: 12 });
  const { data: authors, isLoading: isLoadingAuthors } = useListMAGHREB24Authors();

  // Ø§Ù„Ø¢Ù† ÙŠÙ…ÙƒÙ†Ù†Ø§ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø´Ø±Ø·ÙŠØ§Øª
  const headerAds = ads?.filter((ad: any) => ad.position === 'header_home' && ad.active) || [];

  if (isLoadingArticles || isLoadingAuthors) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-700" />
      </div>
    );
  }

  const articles = Array.isArray(articlesData?.articles) ? articlesData.articles : [];
  const featured = articles.length > 0 ? (articles.find(a => a?.featured) || articles[0]) : null;
  const mostRead = articles.length > 0 ? articles.slice(1, 4) : [];
  const economyPolitics = articles.filter(a => a && (a.section as string) === "politics" || (a.section as string) === "economics").slice(0, 4);
  const cultureScience = articles.filter(a => a && (a.section as string) === "culture" || (a.section as string) === "science").slice(0, 4);

  if (articles.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-32 h-32 bg-emerald-50 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mb-10 animate-bounce transition-all">
          <PenLine className="w-14 h-14 text-emerald-700" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Ù…Ø±Ø­Ø¨Ø§Ù‹ Ø¨Ùƒ ÙÙŠ <span className="text-emerald-700">Ù…ØºØ±Ø¨ 24</span></h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø­Ø§Ù„ÙŠØ§Ù‹ Ù‚ÙŠØ¯ Ø§Ù„ØªØ¬Ù‡ÙŠØ² Ù„Ø¥Ø·Ù„Ø§Ù‚ Ø£ÙˆÙ„Ù‰ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ± Ø§Ù„Ø­ØµØ±ÙŠØ©. Ù‡Ù„ Ù„Ø¯ÙŠÙƒ Ø®Ø¨Ø± Ø£Ùˆ Ù…Ù‚Ø§Ù„ ØªÙˆØ¯ Ù†Ø´Ø±Ù‡ØŸ ÙƒÙ† Ø£ÙˆÙ„ Ù…Ù† ÙŠÙƒØªØ¨ ÙÙŠ "Ù…ØºØ±Ø¨ 24".
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/submit" className="px-12 py-4 bg-emerald-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition-all">
            Ø£Ø±Ø³Ù„ Ù…Ù‚Ø§Ù„Ùƒ Ø§Ù„Ø£ÙˆÙ„
          </Link>
          <Link href="/newsroom" className="px-12 py-4 border-2 border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-all">
            Ø²ÙŠØ§Ø±Ø© ØºØ±ÙØ© Ø§Ù„Ø£Ø®Ø¨Ø§Ø±
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Top Advertisements */}
      {headerAds.length > 0 && (
        <div className="w-full mb-8 flex flex-col gap-4">
          {headerAds.map((ad: any) => (
            <a key={ad.id} href={ad.linkUrl || '#'} target="_blank" rel="noopener noreferrer" className="block w-full max-w-5xl mx-auto cursor-pointer rounded overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="text-[9px] text-gray-400 text-center bg-gray-100 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 py-0.5">Ø¥Ø´Ù‡Ø§Ø±</div>
              <img src={ad.imageUrl} alt={ad.title} className="w-full md:h-[100px] object-cover" />
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Main Featured Story */}
        {featured && (
          <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] lg:h-[600px] shadow-2xl transition-transform duration-500 hover:shadow-emerald-900/10">
            <img 
              alt={featured.title} 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
              src={featured.imageUrl || "https://placehold.co/800x600?text=News"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
              <Link href={`/section/${featured.section}`} className="bg-emerald-700 text-white text-xs font-bold px-4 py-1.5 w-fit mb-4 uppercase rounded-sm shadow-lg hover:bg-emerald-800 transition">
                {getTranslatedSection(featured.section)}
              </Link>
              <Link href={`/article/${featured.slug}`}>
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 group-hover:text-gold-500 transition-colors drop-shadow-sm">
                  {featured.title}
                </h1>
              </Link>
              <p className="text-gray-200 text-base md:text-lg mb-6 line-clamp-2 max-w-3xl opacity-90">
                {featured.subtitle}
              </p>
              <div className="flex items-center text-gold-500 text-sm font-bold gap-3">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> {formatDate(featured.publishedAt)}
                </span>
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                <span>Ø¨ÙˆØ§Ø³Ø·Ø© {translateAuthorName(featured.author?.name || "ØªØ­Ø±ÙŠØ± Ù…ØºØ±Ø¨ 24")}</span>
              </div>
            </div>
          </div>
        )}

        {/* Side Stories (Most Read + Newsletter) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-r-4 border-gold-500 shadow-xl shadow-black/5">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-emerald-700 dark:text-emerald-500 border-b border-gray-100 dark:border-gray-800 pb-3">
              <span className="p-1 px-2 bg-emerald-700 text-white rounded text-sm">#</span> Ø§Ù„Ø£ÙƒØ«Ø± Ù‚Ø±Ø§Ø¡Ø©
            </h2>
            <ul className="space-y-6">
              {mostRead.map((article, idx) => (
                <li key={article.id} className="flex gap-5 group items-start">
                  <span className="text-4xl font-black text-gray-100 dark:text-slate-800 transition-colors group-hover:text-gold-500/20">
                    0{idx + 1}
                  </span>
                  <div>
                    <Link href={`/article/${article.slug}`} className="font-bold text-lg hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors leading-snug block">
                      {article.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-2 font-medium">{formatDate(article.publishedAt)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-center p-8 text-white relative shadow-2xl">
            <div className="z-10 w-full">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Mail className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ø§Ù„Ù†Ø´Ø±Ø© Ø§Ù„Ø¨Ø±ÙŠØ¯ÙŠØ©</h3>
              <p className="text-sm text-emerald-100/70 mb-6 leading-relaxed">
                Ø§Ø´ØªØ±Ùƒ Ù„ØªØµÙ„Ùƒ Ø£Ù‡Ù… Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ± ÙˆØ§Ù„Ø£Ù†Ø¨Ø§Ø¡ <br/> ØµØ¨Ø§Ø­ ÙƒÙ„ ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø¨Ø±ÙŠØ¯Ùƒ.
              </p>
              <div className="space-y-3">
                <input 
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-lg text-sm focus:ring-2 focus:ring-gold-500 outline-none placeholder:text-emerald-200/30 transition-all" 
                  placeholder="Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ" 
                  type="email"
                />
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-lg transition-transform active:scale-95 shadow-lg">
                  Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ø¢Ù†
                </button>
              </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] w-full h-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Economy & Politics Section */}
      <section className="mb-12">
        <div className="flex gap-4 items-center mb-10 group">
          <div className="h-10 w-2 bg-emerald-700 rounded-full"></div>
          <h2 className="text-3xl font-black">Ø§Ù‚ØªØµØ§Ø¯ ÙˆØ³ÙŠØ§Ø³Ø©</h2>
          <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
          <Link href="/section/politics" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline whitespace-nowrap">
            Ù…Ø´Ø§Ù‡Ø¯Ø© Ø§Ù„ÙƒÙ„ â†
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {economyPolitics.map(article => (
            <ArticleCard key={article.id} article={article} className="hover:-translate-y-1 transition-transform" />
          ))}
        </div>
      </section>

      {/* Reporters & Regional Network Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-slate-900/40 rounded-[3rem] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-inner">
        {/* Decorative Map Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#046A38_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500"></span>
              <span className="text-emerald-700 dark:text-emerald-400 font-black uppercase tracking-widest text-sm">Ø´Ø¨ÙƒØ© Ù…Ø±Ø§Ø³Ù„ÙŠ Ù…ØºØ±Ø¨ 24</span>
              <span className="h-px w-10 bg-gold-500"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">ØªØºØ·ÙŠØ© Ù…Ø¨Ø§Ø´Ø±Ø© Ù…Ù† Ù‚Ù„Ø¨ Ù…Ø¯Ù†ÙƒÙ…</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium text-lg">
              Ø§Ø¨Ù‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ø·Ù„Ø§Ø¹ Ø¯Ø§Ø¦Ù… Ù…Ø¹ Ø´Ø¨ÙƒØ© Ù…Ø±Ø§Ø³Ù„ÙŠÙ†Ø§ Ø§Ù„Ù…Ù†ØªØ´Ø±ÙŠÙ† Ø¹Ø¨Ø± Ø±Ø¨ÙˆØ¹ Ø§Ù„Ù…Ù…Ù„ÙƒØ©. Ù‚ØµØµ ÙˆØ§Ù‚Ø¹ÙŠØ©ØŒ ÙŠØ±ÙˆÙŠÙ‡Ø§ Ø£Ù‡Ù„Ù‡Ø§.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "Ø§Ù„Ø¯Ø§Ø± Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡", region: "Ø¬Ù‡Ø© Ø§Ù„Ø¯Ø§Ø± Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡ - Ø³Ø·Ø§Øª", reporter: "Ø¹Ù…Ø± Ø§Ù„ÙØ§Ø³ÙŠ", headline: "Ø¥Ø·Ù„Ø§Ù‚ Ù…Ø´Ø±ÙˆØ¹ Ù†Ù‚Ù„ Ø­Ø¶Ø±ÙŠ Ù…Ø³ØªØ¯Ø§Ù… ÙÙŠ Ù‚Ù„Ø¨ Ø§Ù„Ø¹Ø§ØµÙ…Ø© Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯ÙŠØ©.", active: true },
              { city: "Ø§Ù„Ø±Ø¨Ø§Ø·", region: "Ø¬Ù‡Ø© Ø§Ù„Ø±Ø¨Ø§Ø· - Ø³Ù„Ø§ - Ø§Ù„Ù‚Ù†ÙŠØ·Ø±Ø©", reporter: "Ù„ÙŠÙ„Ù‰ Ø¨Ù†Ø¬Ù„ÙˆÙ†", headline: "Ø§Ø®ØªØªØ§Ù… Ø§Ù„Ù…Ù†ØªØ¯Ù‰ Ø§Ù„Ø¯Ø¨Ù„ÙˆÙ…Ø§Ø³ÙŠ Ø¨ØªÙˆÙ‚ÙŠØ¹ Ø§ØªÙØ§Ù‚ÙŠØ§Øª ØªØ¬Ø§Ø±ÙŠØ© Ø¯ÙˆÙ„ÙŠØ© Ø¬Ø¯ÙŠØ¯Ø©.", active: true },
              { city: "Ù…Ø±Ø§ÙƒØ´", region: "Ø¬Ù‡Ø© Ù…Ø±Ø§ÙƒØ´ - Ø¢Ø³ÙÙŠ", reporter: "ÙŠÙˆØ³Ù Ø§Ù„Ù…Ù†ØµÙˆØ±ÙŠ", headline: "Ø§Ø³ØªØ¹Ø¯Ø§Ø¯Ø§Øª Ù…Ù‡Ø±Ø¬Ø§Ù† Ø§Ù„ÙÙŠÙ„Ù… Ø§Ù„Ø¯ÙˆÙ„ÙŠ ØªØµÙ„ Ù„Ù…Ø±Ø§Ø­Ù„Ù‡Ø§ Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ© Ø¨Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ø­Ù…Ø±Ø§Ø¡.", active: true },
              { city: "Ø·Ù†Ø¬Ø©", region: "Ø¬Ù‡Ø© Ø·Ù†Ø¬Ø© - ØªØ·ÙˆØ§Ù† - Ø§Ù„Ø­Ø³ÙŠÙ…Ø©", reporter: "Ø£Ù…ÙŠÙ† Ø§Ù„Ø·Ù†Ø¬Ø§ÙˆÙŠ", headline: "Ù…ÙŠÙ†Ø§Ø¡ Ø·Ù†Ø¬Ø© Ø§Ù„Ù…ØªÙˆØ³Ø· ÙŠØ³Ø¬Ù„ Ø£Ø¯Ø§Ø¡Ù‹ Ù‚ÙŠØ§Ø³ÙŠØ§Ù‹ ÙÙŠ Ø§Ù„Ø±Ø¨Ø¹ Ø§Ù„Ø«Ø§Ù„Ø«.", active: true },
              { city: "ÙØ§Ø³", region: "Ø¬Ù‡Ø© ÙØ§Ø³ - Ù…ÙƒÙ†Ø§Ø³", reporter: "Ø³Ù†Ø§Ø¡ Ø§Ù„Ø¥Ø¯Ø±ÙŠØ³ÙŠ", headline: "Ø§Ø³ØªÙ…Ø±Ø§Ø± Ø£Ø¹Ù…Ø§Ù„ ØªØ±Ù…ÙŠÙ… Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø© Ù„Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø±Ù Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ©.", active: false },
              { city: "Ø£ÙƒØ§Ø¯ÙŠØ±", region: "Ø¬Ù‡Ø© Ø³ÙˆØ³ - Ù…Ø§Ø³Ø©", reporter: "Ø®Ø§Ù„Ø¯ Ø§Ù„Ø³ÙˆØ³ÙŠ", headline: "Ù‚Ø·Ø§Ø¹ Ø§Ù„ÙÙ„Ø§Ø­Ø© ÙŠÙ†ØªØ¹Ø´ Ø¨ÙØ¶Ù„ ØªÙ‚Ù†ÙŠØ§Øª Ø±ÙŠ Ø¬Ø¯ÙŠØ¯Ø© ÙÙŠ Ø³Ù‡Ù„ Ø³ÙˆØ³.", active: true },
            ].map((node, i) => (
              <article key={i} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className={cn("h-2 w-full", node.active ? "bg-emerald-700" : "bg-gray-300 dark:bg-slate-700")}></div>
                <div className="p-8 flex flex-col flex-grow text-right">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-500 shadow-inner">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1 pr-4">
                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">{node.region}</span>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-1">{node.city}</h3>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Ø§Ù„Ù…Ø±Ø§Ø³Ù„ Ø§Ù„Ù…ÙŠØ¯Ø§Ù†ÙŠ</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">{node.reporter}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50 dark:border-slate-700">
                    <p className="text-[10px] text-gold-600 font-black mb-3 flex items-center gap-2">
                      <span className={cn("flex h-2 w-2 rounded-full", node.active ? "bg-emerald-700 animate-pulse" : "bg-gray-300")}></span>
                      Ø¢Ø®Ø± Ø§Ù„Ù…Ø³ØªØ¬Ø¯Ø§Øª
                    </p>
                    <h4 className="text-sm font-bold leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-2 italic">
                      "{node.headline}"
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="bg-emerald-950 dark:bg-emerald-700 hover:bg-gold-500 text-white font-black py-4 px-10 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-gold-500/20 inline-flex items-center gap-3 group text-sm uppercase tracking-widest">
              <span>Ø§Ù†Ø¶Ù… Ù„Ø´Ø¨ÙƒØ© Ù…Ø±Ø§Ø³Ù„ÙŠÙ†Ø§</span>
              <TrendingUp className="w-5 h-5 transition-transform group-hover:scale-125" />
            </button>
            <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">Ø§Ù†Ø¶Ù… Ø§Ù„Ø¢Ù† Ù„Ø£ÙƒØ¨Ø± Ø´Ø¨ÙƒØ© Ø¥Ø¹Ù„Ø§Ù…ÙŠØ© ØªØºØ·ÙŠ ÙƒØ§ÙØ© Ø±Ø¨ÙˆØ¹ Ø§Ù„Ù…Ù…Ù„ÙƒØ©.</p>
          </div>
        </div>
      </section>


      {/* Culture & Science Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
        <div>
          <div className="flex items-center justify-between mb-8 border-b-2 border-emerald-700 pb-3">
            <h2 className="text-2xl font-black">Ø«Ù‚Ø§ÙØ© ÙˆÙÙ†</h2>
            <Link href="/section/culture" className="text-xs font-bold uppercase tracking-widest text-emerald-700">Ø§Ù„Ù…Ø²ÙŠØ¯</Link>
          </div>
          <div className="space-y-8">
            {cultureScience.slice(0, 3).map(article => (
              <div key={article.id} className="flex gap-6 group">
                <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800">
                  <img alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={article.imageUrl || "https://placehold.co/100x100?text=Culture"} />
                </div>
                <div className="flex flex-col justify-center">
                  <Link href={`/article/${article.slug}`} className="font-bold text-xl group-hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors leading-snug">
                    {article.title}
                  </Link>
                  <p className="text-xs text-gray-400 mt-3 font-bold uppercase tracking-wider">{getTranslatedSection(article.section)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gold-500 pb-3">
            <h2 className="text-2xl font-black">Ø¹Ù„ÙˆÙ… ÙˆØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§</h2>
            <Link href="/section/science" className="text-xs font-bold uppercase tracking-widest text-gold-600">Ø§Ù„Ù…Ø²ÙŠØ¯</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cultureScience.slice(2, 4).map(article => (
              <div key={article.id} className="group">
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg border border-gray-100 dark:border-slate-800">
                  <img alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={article.imageUrl || "https://placehold.co/300x200?text=Science"} />
                </div>
                <Link href={`/article/${article.slug}`} className="font-bold text-lg group-hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors block">
                  {article.title}
                </Link>
                <p className="text-xs text-gray-400 mt-2 font-medium">{formatDate(article.publishedAt)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Authors / Team Section */}
      <section className="bg-emerald-950 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-24 rounded-[3rem] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 relative inline-block">
            Ù‡ÙŠØ¦Ø© Ø§Ù„ØªØ­Ø±ÙŠØ±
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gold-500 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {authors && Array.isArray(authors) && authors.length > 0 ? (
              authors.slice(0, 4).map(author => (
                <Link key={author.id} href={`/author/${author.slug}`} className="group flex flex-col items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-emerald-800/50 group-hover:border-gold-500 transition-all duration-500 shadow-2xl">
                    <img src={getAuthorImage(author.slug)} alt={author.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="font-black text-xl group-hover:text-gold-500 transition-colors uppercase tracking-tight">{translateAuthorName(author.name)}</h3>
                  <p className="text-emerald-400 text-xs font-bold mt-2 uppercase tracking-[0.2em]">{translateAuthorTitle(author.title)}</p>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-emerald-200/70">Ù„Ø§ ÙŠÙˆØ¬Ø¯ ÙƒØªØ§Ø¨ Ø­Ø§Ù„ÙŠÙ‹Ø§</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

