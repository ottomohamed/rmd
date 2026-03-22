import { useParams, Link } from "wouter";
import { useGetMAGHREB24Article, useGetMAGHREB24Comments, useAddMAGHREB24Comment, useListMAGHREB24Articles } from "@workspace/api-client-react";
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
  authorName: z.string().min(2, "ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø§Ø³Ù… Ø­Ø±ÙÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„"),
  body: z.string().min(5, "ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„ØªØ¹Ù„ÙŠÙ‚ 5 Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„")
});

export default function ArticleDetail() {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const [awaitingReply, setAwaitingReply] = useState(false);
  const [replyReceived, setReplyReceived] = useState(false);
  const pollCountRef = useRef(0);

  const { data: article, isLoading, error } = useGetMAGHREB24Article(slug || "");
  const { data: sidebarArticlesData } = useListMAGHREB24Articles({ limit: 6 });
  
  const { data: comments, isLoading: isLoadingComments } = useGetMAGHREB24Comments(article?.id || 0, { 
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

  const addComment = useAddMAGHREB24Comment({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/MAGHREB24/articles/${article?.id}/comments`] });
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
  if (error || !article) return <div className="py-32 text-center font-sans text-3xl font-bold">Ø§Ù„Ù…Ù‚Ø§Ù„ Ø§Ù„Ø°ÙŠ ØªØ¨Ø­Ø« Ø¹Ù†Ù‡ ØºÙŠØ± Ù…ØªØ§Ø­ Ø­Ø§Ù„ÙŠØ§Ù‹.</div>;

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
                <span className="text-gray-300">â€¢</span>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">ØªØºØ·ÙŠØ© Ø®Ø§ØµØ©</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.2] mb-8 tracking-tighter text-gray-900 dark:text-white">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-bold border-y border-gray-50 dark:border-slate-800 py-6">
                <div className="flex items-center gap-3">
                  {article.author && <img src={getAuthorImage(article.author.slug)} className="w-10 h-10 rounded-full object-cover shadow-md" alt="" />}
                  <span className="text-gray-900 dark:text-white">Ø¨Ù‚Ù„Ù…: {article.author ? <Link href={`/author/${article.author.slug}`} className="hover:text-emerald-700 underline decoration-gold-500 underline-offset-4">{translateAuthorName(article.author.name)}</Link> : "Ù…Ø­Ø±Ø± Ù…ØºØ±Ø¨ 24"}</span>
                </div>
                <span className="text-gray-200">|</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-700" /> Ø§Ù„Ø±Ø¨Ø§Ø·</span>
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
                  {article.title} - Ù…ØµØ¯Ø± Ø§Ù„ØµÙˆØ±Ø©: ÙˆÙƒØ§Ù„Ø© Ù…ØºØ±Ø¨ 24
                </figcaption>
              </figure>
            )}

            {/* Body */}
            <div className="prose prose-lg md:prose-xl dark:prose-invert prose-emerald max-w-none font-sans leading-relaxed text-gray-800 dark:text-gray-200 mb-16
              prose-headings:font-black prose-headings:tracking-tighter
              prose-strong:font-black prose-strong:text-emerald-900 dark:prose-strong:text-emerald-400
              prose-blockquote:border-r-4 prose-blockquote:border-emerald-700 prose-blockquote:border-l-0 prose-blockquote:pr-8 prose-blockquote:pl-0 prose-blockquote:italic prose-blockquote:text-lg md:text-2xl prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 bg-gray-50 dark:bg-slate-800/50 p-6 rounded-l-2xl">
              {article.body.split('\n\n').map((para, i) => (
                <div key={i}>
                  <p>{para}</p>
                  {/* Insert an ad after paragraph 2 if available */}
                  {i === 1 && inArticleAds.length > 0 && (
                    <div className="my-8 w-full">
                      <div className="text-[9px] text-gray-400 text-center bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-0.5 mb-2">Ø¥Ø´Ù‡Ø§Ø±</div>
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
                 <span className="text-sm font-black text-gray-400 ml-2">Ø´Ø§Ø±Ùƒ:</span>
                 <button className="p-2.5 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-lg"><Share2 className="w-4 h-4" /></button>
                 <button className="p-2.5 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition shadow-lg"><Bookmark className="w-4 h-4" /></button>
               </div>
               <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <MessageSquare className="w-4 h-4 text-emerald-700" /> {article.commentCount} ØªØ¹Ù„ÙŠÙ‚
               </div>
            </div>

            {/* Comments Section */}
            <section className="mt-16" id="comments">
              <h2 className="text-2xl font-black mb-10 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-700 rounded-full"></span>
                Ù†Ù‚Ø§Ø´ Ø§Ù„Ù‚Ø±Ø§Ø¡
              </h2>
              
              <div className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 mb-12 relative overflow-hidden">
                {awaitingReply && (
                  <div className="absolute inset-0 z-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                    <Loader2 className="w-10 h-10 animate-spin mb-4 text-emerald-700" />
                    <p className="font-sans font-black uppercase tracking-widest text-sm text-gray-900 dark:text-white">Ø¨Ø§Ù†ØªØ¸Ø§Ø± Ø±Ø¯ Ø§Ù„ÙƒØ§ØªØ¨...</p>
                  </div>
                )}
                
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-gray-400 flex items-center gap-2">
                   Ø£Ø¶Ù ØªØ¹Ù„ÙŠÙ‚Ùƒ <Pen className="w-3 h-3 text-gold-500" />
                </h3>
                <form onSubmit={form.handleSubmit(data => addComment.mutate({ id: article.id, data }))} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      {...form.register("authorName")}
                      className="w-full px-6 py-4 bg-white dark:bg-slate-900 border border-transparent focus:border-emerald-700 rounded-2xl transition-all font-sans text-lg outline-none text-right shadow-sm"
                      placeholder="Ø§Ù„Ø§Ø³Ù… Ø¨Ø§Ù„ÙƒØ§Ù…Ù„"
                    />
                    <div className="hidden md:block"></div>
                    <textarea 
                      {...form.register("body")}
                      rows={4}
                      className="w-full md:col-span-2 px-6 py-4 bg-white dark:bg-slate-900 border border-transparent focus:border-emerald-700 rounded-2xl transition-all font-sans text-lg outline-none resize-none text-right shadow-sm"
                      placeholder="Ø§ÙƒØªØ¨ ØªØ¹Ù„ÙŠÙ‚Ùƒ Ù‡Ù†Ø§..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={addComment.isPending}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-emerald-700/20 active:scale-95"
                  >
                    {addComment.isPending ? "Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„..." : "Ù†Ø´Ø± Ø§Ù„ØªØ¹Ù„ÙŠÙ‚"}
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                {isLoadingComments ? (
                  <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-emerald-700" /></div>
                ) : comments?.map(comment => (
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
                          {comment.isAuthorReply && <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-sm">Ø±Ø¯ Ø§Ù„ÙƒØ§ØªØ¨</span>}
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
          {sidebarAds.length > 0 && (
             <section className="rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden bg-gray-50 dark:bg-slate-900">
               <div className="text-[9px] text-gray-400 text-center bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-0.5">Ø¥Ø´Ù‡Ø§Ø±</div>
               <a href={sidebarAds[0].linkUrl || '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <img src={sidebarAds[0].imageUrl} alt={sidebarAds[0].title} className="w-full h-auto object-cover" />
               </a>
             </section>
          )}

          {/* Most Read (Sticky) */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 sticky top-28">
            <h3 className="text-xl font-black mb-8 border-r-4 border-gold-500 pr-4 text-emerald-700 dark:text-emerald-500">
              Ø§Ù„Ø£ÙƒØ«Ø± Ù‚Ø±Ø§Ø¡Ø©
            </h3>
            <div className="space-y-8">
              {mostRead.map((item, idx) => (
                <Link key={item.id} href={`/article/${item.slug}`} className="group flex gap-4 items-start">
                  <span className="text-4xl font-black text-gray-100 dark:text-slate-800 group-hover:text-gold-500/30 transition-colors">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-bold leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">{formatDate(item.publishedAt)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related News */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800">
            <h3 className="text-xl font-black mb-8 border-r-4 border-emerald-700 pr-4">
              Ø£Ø®Ø¨Ø§Ø± Ø°Ø§Øª ØµÙ„Ø©
            </h3>
            <div className="space-y-8">
              {related.map(item => (
                <div key={item.id} className="group">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-md border border-gray-50 dark:border-slate-800">
                    <img 
                      src={item.imageUrl || "https://placehold.co/300x200?text=Related"} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <Link href={`/article/${item.slug}`} className="block text-base font-bold hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors leading-snug">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter (Sidebar) */}
          <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-xl font-black mb-2">Ø§Ù„Ù†Ø´Ø±Ø© Ø§Ù„Ø¨Ø±ÙŠØ¯ÙŠØ©</h3>
              <p className="text-xs text-emerald-100/70 mb-6 leading-relaxed font-medium">
                Ø§Ø´ØªØ±Ùƒ Ø§Ù„Ø¢Ù† Ù„ØªØµÙ„Ùƒ Ø£Ù‡Ù… Ø§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª ÙˆØ§Ù„Ø£Ù†Ø¨Ø§Ø¡ Ø¹Ø¨Ø± Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.
              </p>
              <form className="space-y-3">
                <input 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-xs focus:ring-1 focus:ring-gold-500 outline-none placeholder:text-emerald-300/40" 
                  placeholder="Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ" 
                  type="email"
                />
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-black py-3 rounded-xl transition-all shadow-lg active:scale-95 text-[10px] uppercase tracking-widest">
                  Ø§Ø´ØªØ±Ùƒ Ø§Ù„Ø¢Ù†
                </button>
              </form>
            </div>
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </section>
        </aside>
      </div>
    </div>
  );
}

