
import { ArticleCard } from "@/components/article-card";
import Link from "next/link";
import Image from "next/image";
import { getAuthorImage, translateAuthorName, translateAuthorTitle, getTranslatedSection, formatDate, cn } from "@/lib/utils";
import { TrendingUp, Mail, MapPin, PenLine } from "lucide-react";

type Article = {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  section: string;
  author?: { name: string };
  publishedAt?: string;
  featured?: boolean;
  imageUrl?: string;
};

type Author = {
  id: string;
  name: string;
  slug: string;
  title?: string;
};

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/MAGHREB24/articles`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("خطأ في جلب المقالات:", error);
    return [];
  }
}

async function getAuthors(): Promise<Author[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/MAGHREB24/authors`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.authors || [];
  } catch (error) {
    console.error("خطأ في جلب الكتاب:", error);
    return [];
  }
}

export default async function Home() {
  const [articles, authors] = await Promise.all([getArticles(), getAuthors()]);

  const featured = articles.length > 0 ? (articles.find(a => a?.featured) || articles[0]) : null;
  const mostRead = articles.length > 0 ? articles.slice(1, 4) : [];

  if (articles.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-32 h-32 bg-emerald-50 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mb-10 animate-bounce transition-all">
          <PenLine className="w-14 h-14 text-emerald-700" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">مرحبا بك في <span className="text-emerald-700">مغرب 24</span></h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          الموقع حاليا قيد التجهيز لإطلاق أولى التقارير الحصرية. هل لديك خبر أو مقال تود نشره كن أول من يكتب في "مغرب 24".
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/submit" className="px-12 py-4 bg-emerald-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-700/20 hover:bg-emerald-800 transition-all">
            أرسل مقالك الأول
          </Link>
          <Link href="/newsroom" className="px-12 py-4 border-2 border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-all">
            زيارة غرفة الأخبار
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {featured && (
          <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] lg:h-[600px] shadow-2xl transition-transform duration-500 hover:shadow-emerald-900/10">
            {featured.imageUrl ? (
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                <span className="text-gray-400">صورة غير متوفرة</span>
              </div>
            )}
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
                <span>بواسطة {translateAuthorName(featured.author?.name || "تحرير مغرب 24")}</span>
              </div>
            </div>
          </div>
        )}

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-r-4 border-gold-500 shadow-xl shadow-black/5">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-emerald-700 dark:text-emerald-500 border-b border-gray-100 dark:border-gray-800 pb-3">
              <span className="p-1 px-2 bg-emerald-700 text-white rounded text-sm">#</span> الأكثر قراءة
            </h2>
            <ul className="space-y-6">
              {mostRead.map((article: Article, idx) => (
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
              <h3 className="text-2xl font-bold mb-3">النشرة البريدية</h3>
              <p className="text-sm text-emerald-100/70 mb-6 leading-relaxed">
                اشترك لتصلك أهم التقارير والأنباء <br/> صباح كل يوم على بريدك.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-lg text-sm focus:ring-2 focus:ring-gold-500 outline-none placeholder:text-emerald-200/30 transition-all"
                />
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-lg transition-transform active:scale-95 shadow-lg">
                  اشتراك الآن
                </button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] w-full h-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex gap-4 items-center mb-10 group">
          <div className="h-10 w-2 bg-emerald-700 rounded-full"></div>
          <h2 className="text-3xl font-black">اقتصاد وسياسة</h2>
          <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800"></div>
          <Link href="/section/politics" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline whitespace-nowrap">
            مشاهدة الكل 
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles
            .filter(a => a.section === "politics" || a.section === "economics")
            .slice(0, 4)
            .map((article: Article) => (
              <ArticleCard key={article.id} article={article} className="hover:-translate-y-1 transition-transform" />
            ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
        <div>
          <div className="flex items-center justify-between mb-8 border-b-2 border-emerald-700 pb-3">
            <h2 className="text-2xl font-black">ثقافة وفن</h2>
            <Link href="/section/culture" className="text-xs font-bold uppercase tracking-widest text-emerald-700">المزيد</Link>
          </div>
          <div className="space-y-8">
            {articles.filter(a => a.section === "culture").slice(0, 3).map((article: Article) => (
              <div key={article.id} className="flex gap-6 group">
                <div className="w-28 h-28 shrink-0 relative rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800">
                  {article.imageUrl ? (
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="112px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                      <span className="text-xs text-gray-400">صورة</span>
                    </div>
                  )}
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
            <h2 className="text-2xl font-black">علوم وتكنولوجيا</h2>
            <Link href="/section/science" className="text-xs font-bold uppercase tracking-widest text-gold-600">المزيد</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {articles.filter(a => a.section === "science").slice(0, 4).map((article: Article) => (
              <div key={article.id} className="group">
                <div className="aspect-video relative rounded-2xl overflow-hidden mb-4 shadow-lg border border-gray-100 dark:border-slate-800">
                  {article.imageUrl ? (
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                      <span className="text-gray-400">صورة غير متوفرة</span>
                    </div>
                  )}
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

      <section className="relative py-20 bg-gray-50 dark:bg-slate-900/40 rounded-[3rem] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-inner">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#046A38_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500"></span>
              <span className="text-emerald-700 dark:text-emerald-400 font-black uppercase tracking-widest text-sm">شبكة مراسلي مغرب 24</span>
              <span className="h-px w-10 bg-gold-500"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">تغطية مباشرة من قلب مدنكم</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium text-lg">
              ابقوا على اطلاع دائم مع شبكة مراسلينا المنتشرة عبر ربوع المملكة. قصص واقعية يرويها أهلها.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "الدار البيضاء", region: "جهة الدار البيضاء - سطات", reporter: "عمر الفاسي", headline: "إطلاق مشروع نقل حضري مستدام في قلب العاصمة الاقتصادية.", active: true },
              { city: "الرباط", region: "جهة الرباط - سلا - القنيطرة", reporter: "ليلى بنجلون", headline: "اختتام المنتدى الدبلوماسي بتوقيع اتفاقيات تجارية دولية جديدة.", active: true },
              { city: "مراكش", region: "جهة مراكش - آسفي", reporter: "يوسف المنصوري", headline: "استعدادات مهرجان الفيلم الدولي تصل لمراحلها النهائية بالمدينة الحمراء.", active: true },
              { city: "طنجة", region: "جهة طنجة - تطوان - الحسيمة", reporter: "أمين الطنجاوي", headline: "ميناء طنجة المتوسط يسجل أداء قياسيا في الربع الثالث.", active: true },
              { city: "فاس", region: "جهة فاس - مكناس", reporter: "سناء الإدريسي", headline: "استمرار أعمال ترميم المدينة القديمة للحفاظ على الحرف التقليدية.", active: false },
              { city: "أكادير", region: "جهة سوس - ماسة", reporter: "خالد السوسي", headline: "قطاع الفلاحة ينتعش بفضل تقنيات ري جديدة في سهل سوس.", active: true },
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
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">المراسل الميداني</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">{node.reporter}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50 dark:border-slate-700">
                    <p className="text-[10px] text-gold-600 font-black mb-3 flex items-center gap-2">
                      <span className={cn("flex h-2 w-2 rounded-full", node.active ? "bg-emerald-700 animate-pulse" : "bg-gray-300")}></span>
                      آخر المستجدات
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
              <span>انضم لشبكة مراسلينا</span>
              <TrendingUp className="w-5 h-5 transition-transform group-hover:scale-125" />
            </button>
            <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">انضم الآن لأكبر شبكة إعلامية تغطي كافة ربوع المملكة.</p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-24 rounded-[3rem] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 relative inline-block">
            هيئة التحرير
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gold-500 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {authors && authors.length > 0 ? (
              authors.slice(0, 4).map(author => (
                <Link key={author.id} href={`/author/${author.slug}`} className="group flex flex-col items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden mb-6 border-4 border-emerald-800/50 group-hover:border-gold-500 transition-all duration-500 shadow-2xl">
                    <Image
                      src={getAuthorImage(author.slug)}
                      alt={author.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      sizes="160px"
                    />
                  </div>
                  <h3 className="font-black text-xl group-hover:text-gold-500 transition-colors uppercase tracking-tight">{translateAuthorName(author.name)}</h3>
                  <p className="text-emerald-400 text-xs font-bold mt-2 uppercase tracking-[0.2em]">{translateAuthorTitle(author.title || '')}</p>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-emerald-200/70">لا يوجد كتاب حاليا</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-slate-900/30 py-16 rounded-[2rem] mt-12 text-center">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">ابق على تواصل معنا</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">اشترك في النشرة البريدية لتصلك أحدث المقالات والتقارير مباشرة على بريدك الإلكتروني.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-slate-700 focus:ring-2 focus:ring-emerald-700 outline-none transition-all bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-lg transition-transform active:scale-95 shadow-lg">
            اشترك الآن
          </button>
        </div>
      </section>
    </div>
  );
}
