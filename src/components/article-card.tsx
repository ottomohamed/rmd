import { Link } from "wouter";
import { type MeridianArticleSummary } from "@workspace/api-client-react/src/generated/api.schemas";
import { cn, formatDate, getTranslatedSection, translateAuthorName } from "@/lib/utils";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  article: MeridianArticleSummary;
  featured?: boolean;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  if (!article) return null;

  return (
    <article className={cn("group flex flex-col text-right bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-slate-800", className)} dir="rtl">
      {article.imageUrl && (
        <Link href={`/article/${article.slug}`} className="block relative overflow-hidden aspect-[16/10]">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 right-4">
             <span className="bg-emerald-700/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
               {getTranslatedSection(article.section)}
             </span>
          </div>
        </Link>
      )}
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 text-gray-500 dark:text-gray-400">
          <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-500" /> {article.readingTimeMinutes || 0} دقائق قراءة
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            {formatDate(article.publishedAt)}
          </span>
        </div>

        <Link href={`/article/${article.slug}`}>
          <h3 className="font-sans font-extrabold text-gray-900 dark:text-white text-xl leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-3">
            {article.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4">
            {article.subtitle}
          </p>
        </Link>

        {article.author && (
          <div className="mt-auto pt-4 border-t border-gray-50 dark:border-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
               {authorInitials(article.author.name)}
            </div>
            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">
              {translateAuthorName(article.author.name)}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

function authorInitials(name: string | undefined) {
  if (!name) return "??";
  return name.split(' ').map(n => n?.[0] || '').join('').slice(0, 2);
}


