import { useParams, Link } from "wouter";
import { useGetMAROC24Article, useGetMAROC24Comments, useAddMAROC24Comment, useListMAROC24Articles } from "@workspace/api-client-react";
import { formatDate, formatDateTime, getAuthorImage, translateAuthorName, translateAuthorTitle, translateAuthorBio, getTranslatedSection, usePageTitle } from "@/lib/utils";
import { Loader2, MessageSquare, Pen, Share2, Bookmark, TrendingUp, MapPin, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useAds } from "@/hooks/use-ads";

const commentSchema = z.object({
  authorName: z.string().min(2, "يجب أن يكون الاسم حرفين على الأقل"),
  body: z.string().min(5, "يجب أن يكون التعليق 5 أحرف على الأقل")
});

export default function ArticleDetail() {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const [awaitingReply, setAwaitingReply] = useState(false);
  const [replyReceived, setReplyReceived] = useState(false);
  const pollCountRef = useRef(0);

  const { data: article, isLoading, error } = useGetMAROC24Article(slug || "");
  const { data: sidebarArticlesData } = useListMAROC24Articles({ limit: 6 });
  
  const { data: comments } = useGetMAROC24Comments(article?.id || 0, { 
    query: { 
      enabled: !!article?.id,
      refetchInterval: awaitingReply ? 3000 : false,
    } as any
  });
  
  useEffect(() => {
    if (!awaitingReply || !Array.isArray(comments)) return;
    const hasReply = comments.some(c => c?.isAuthorReply);
    if (hasReply) {
      setAwaitingReply(false);
      setReplyReceived(true);
      pollCountRef.current = 0;
      setTimeout(() => setReplyReceived(false), 5000);
    } else {
      pollCountRef.current++;
      if (pollCountRef.current > 15) {
        setAwaitingReply(false);
        pollCountRef.current = 0;
      }
    }
  }, [comments, awaitingReply]);

  const addComment = useAddMAROC24Comment({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/MAROC24/articles/${article?.id}/comments`] });
        form.reset();
        pollCountRef.current = 0;
        setAwaitingReply(true);
        setReplyReceived(false);
      }
    }
  });

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: { authorName: "", body: "" }
  });

  if (isLoading) return <div className="min-h-[60vh] flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-emerald-700" /></div>;
  if (error || !article) return <div className="py-32 text-center font-sans text-3xl font-bold">المقال الذي تبحث عنه غير متاح حالياً.</div>;

  usePageTitle(article.title);

  const sidebarArticles = Array.isArray(sidebarArticlesData?.articles) ? sidebarArticlesData.articles : [];
  const mostRead = sidebarArticles.slice(0, 3);
  const related = sidebarArticles.slice(3, 5);

  const { ads } = useAds();
  const sidebarAds = Array.isArray(ads) ? ads.filter(ad => ad.position === 'sidebar' && ad.active) : [];
  const inArticleAds = Array.isArray(ads) ? ads.filter(ad => ad.position === 'in_article' && ad.active) : [];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Article Content */}
        <div className="lg:col-span-8">
          <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 dark:border-slate-800" dir="rtl">
            <header className="mb-10 text-right">
              <div className="flex items-center gap-3 mb-6">
                <Link 
                  href={`/section/${article.section}`}
                  className="bg-emerald-700/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest transition-colors hover:bg-emerald-700/20"
                >
                  {getTranslatedSection(article.section)}
                </Link>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">تغطية خاصة</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.2] mb-8 tracking-tighter text-gray-900 dark:text-white">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-bold border-y border-gray-50 dark:border-slate-800 py-6">
                <div className="flex items-center gap-3">
                  {article.author && <img src={getAuthorImage(article.author.slug)} className="w-10 h-10 rounded-full object-cover shadow-md" alt="" />}
                  <span className="text-gray-900 dark:text-white">بقلم: {article.author ? <Link href={`/author/${article.author.slug}`} className="hover:text-emerald-700 underline decoration-gold-500 underline-offset-4">{translateAuthorName(article.author.name)}</Link> : "محرر مغرب 24"}</span>
                </div>
                <span className="text-gray-200">|</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-700" /> الرباط</span>
                <span className="text-gray-200">|</span>
                <span className="flex items-center gap-2"><TrendingUp className="w-3.5 h-3.5 text-gold-500" /> {formatDate(article.publishedAt)}</span>
              </div>
            </header>

            {/* Featured Image */}
            {article.imageUrl && (
              <figure className="mb-12">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800" 
                />
                <figcaption className="mt-4 text-sm text-gray-400 italic text-center font-medium">
                  {article.title} - مصدر الصورة: وكالة مغرب 24
                </figcaption>
              </figure>
            )}

            {/* Body */}
            <div className="prose prose-lg md:prose-xl dark:prose-invert prose-emerald max-w-none font-sans leading-relaxed text-gray-800 dark:text-gray-200 mb-16
              prose-headings:font-black prose-headings:tracking-tighter
              prose-strong:font-black prose-strong:text-emerald-900 dark:prose-strong:text-emerald-400
              prose-blockquote:border-r-4 prose-blockquote:border-emerald-700 prose-blockquote:border-l-0 prose-blockquote:pr-8 prose-blockquote:pl-0 prose-blockquote:italic prose-blockquote:text-lg md:text-2xl prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 bg-gray-50 dark:bg-slate-800/50 p-6 rounded-l-2xl">
              {article.body.split('\n\n').map((para: string, i: number) => (
                <div key={i}>
                  <p>{para}</p>
                  {i === 1 && inArticleAds.length > 0 && (
                    <div className="my-8 w-full">
                      <div className="text-[9px] text-gray-400 text-center bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-0.5 mb-2">إشهار</div>
                      <a href={inArticleAds[0].linkUrl || '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <img src={inArticleAds[0].imageUrl} alt="Advertisement" className="w-full h-auto object-cover rounded shadow-md mx-auto" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between py-8 border-y border-gray-50 dark:border-slate-800">
               <div className="flex items-center gap-4">
                 <span className="text-sm font-black text-gray-400 ml-2">شارك:</span>
                 <button className="p-2.5 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-lg"><Share2 className="w-4 h-4" /></button>
                 <button className="p-2.5 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition shadow-lg"><Bookmark className="w-4 h-4" /></button>
               </div>
               <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <MessageSquare className="w-4 h-4 text-emerald-700" /> {article.commentCount} تعليق
               </div>
            </div>

            {/* Comments Section */}
            <section className="mt-16" id="comments">
              <h2 className="text-2xl font-black mb-10 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-700 rounded-full"></span>
                نقاش القراء
              </h2>

              <div className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 mb-12 relative overflow-hidden">
                {awaitingReply && (
                  <div className="absolute inset-0 z-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                    <Loader2 className="w-10 h-10 animate-spin mb-4 text-emerald-700" />
                    <p className="font-sans font-black uppercase tracking-widest text-sm text-gray-900 dark:text-white">بانتظار رد الكاتب...</p>
                  </div>
                )}
                
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-gray-400 flex items-center gap-2">
                   أضف تعليقك <Pen className="w-3 h-3 text-gold-500" />
                </h3>
                <form onSubmit={form.handleSubmit(data => addComment.mutate({ id: article.id, data }))} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      {...form.register("authorName")}
                      className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-transparent focus:border-emerald-700 rounded-2xl transition-all font-sans text-lg outline-none text-right shadow-sm"
                      placeholder="الاسم الكامل"
                    />
                    <div className="hidden md:block"></div>
                    <textarea 
                      {...form.register("body")}
                      rows={4}
                      className="w-full md:col-span-2 px-6 py-4 bg-white dark:bg-slate-900 border border-transparent focus:border-emerald-700 rounded-2xl transition-all font-sans text-lg outline-none resize-none text-right shadow-sm"
                      placeholder="اكتب تعليقك هنا..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={addComment.isPending}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-emerald-700/20 active:scale-95"
                  >
                    {addComment.isPending ? "جاري الإرسال..." : "نشر التعليق"}
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                {comments?.map(comment => (
                  <div key={comment.id} className={cn(
                    "p-8 rounded-3xl border transition-all",
                    comment.isAuthorReply 
                      ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/50 mr-8" 
                      : "bg-white dark:bg-slate-900 border-gray-50 dark:border-slate-800"
                  )}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center font-black text-white shadow-md",
                        comment.isAuthorReply ? "bg-emerald-700" : "bg-gray-200 text-gray-500"
                      )}>
                        {comment.isAuthorReply ? <Pen className="w-5 h-5" /> : comment.authorName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-black text-sm uppercase tracking-wider">{comment.authorName}</h4>
                          {comment.isAuthorReply && <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-sm">رد الكاتب</span>}
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mt-1">{formatDateTime(comment.createdAt)}</span>
                      </div>
                    </div>
                    <p className="font-sans text-lg leading-relaxed text-gray-700 dark:text-gray-300">{comment.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10" dir="rtl">
          {/* Ads, Most Read, Related, Newsletter */}
          {/* ... باقي Sidebar كما في الكود السابق، مع استبدال الرموز العربية المشوهة */}
        </aside>
      </div>
    </div>
  );
}