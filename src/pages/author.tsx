import { useParams } from "wouter";
import { useGetMAGHREB24Author, useListMAGHREB24Articles } from "@workspace/api-client-react";
import { ArticleCard } from "@/components/article-card";
import { getAuthorImage, getSectionColor, translateAuthorName, translateAuthorTitle, translateAuthorBio, getTranslatedSection, getTranslatedFrequency } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export default function AuthorPage() {
  const { slug } = useParams();
  const { data: author, isLoading: isLoadingAuthor } = useGetMAGHREB24Author(slug || "");
  
  const { data: articlesData, isLoading: isLoadingArticles } = useListMAGHREB24Articles({ limit: 100 });
  
  if (isLoadingAuthor || isLoadingArticles) return <div className="min-h-[60vh] flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-muted-foreground" /></div>;
  if (!author) return <div className="py-32 text-center font-sans text-3xl italic">الكاتب غير موجود في سجلاتنا.</div>;

  const authorArticles = articlesData?.articles?.filter(a => a.author?.id === author.id) || [];

  return (
    <div className="max-w-5xl mx-auto space-y-20 py-8 text-right" dir="rtl">
      <header className="flex flex-col md:flex-row-reverse gap-10 items-center md:items-start border-b-8 border-foreground pb-16">
        <img 
          src={getAuthorImage(author.slug)} 
          alt={translateAuthorName(author.name)}
          className="w-56 h-56 rounded-full object-cover border-[10px] border-background shadow-2xl shadow-black/10"
        />
        <div className="text-right flex-1">
          <h1 className="text-5xl md:text-7xl font-black font-sans mb-4 tracking-tight">{translateAuthorName(author.name)}</h1>
          <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1">{translateAuthorTitle(author.title)}</span>
            <span className={`text-sm font-black uppercase tracking-widest border-b-2 pb-0.5 ${getSectionColor(author.section)}`}>
              قسم {getTranslatedSection(author.section)}
            </span>
          </div>
          <p className="font-sans text-2xl text-foreground/80 leading-relaxed max-w-3xl italic">
            "{translateAuthorBio(author.bio)}"
          </p>
          <div className="mt-10 flex gap-12 justify-start border-t border-border pt-8">
            <div className="text-center">
              <p className="text-4xl font-black font-sans text-foreground">{author.articlesWritten}</p>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-1">مقالات</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black font-sans text-foreground capitalize">
                {getTranslatedFrequency(author.scheduleFrequency)}
              </p>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-1">وقت النشر</p>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="flex items-center gap-6 mb-12 flex-row-reverse">
          <h2 className="text-2xl font-black font-sans uppercase tracking-widest whitespace-nowrap">
            أرشيف: {translateAuthorName(author.name)}
          </h2>
          <div className="h-0.5 bg-foreground flex-1"></div>
        </div>
        
        {authorArticles.length === 0 ? (
          <p className="text-muted-foreground font-sans italic text-xl py-12 text-center">لم يتم نشر أي مقالات في الأرشيف بعد.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {authorArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

