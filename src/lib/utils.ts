import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | undefined) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-MA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateTime(dateString: string | undefined) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-MA", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function getAuthorImage(slug: string) {
  const normalizedSlug = slug?.toLowerCase()?.trim() || "";
  const map: Record<string, string> = {
    "marcus-webb": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    "diana-forsythe": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    "carlos-reyes": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    "victoria-chambers": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    "hassan-alaoui": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    "fatima-benali": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&q=80",
    "karim-tazi": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    "robert-hargrove": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  };
  return map[normalizedSlug] || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80";
}

export function translateAuthorName(name: string) {
  const map: Record<string, string> = {
    "Robert Hargrove": "محمد عبد الرحمان",
    "Marcus Webb": "أمينة المنصوري",
    "Diana Forsythe": "يوسف العلمي",
    "Carlos Reyes": "مريم الطاهري",
    "Victoria Chambers": "عمر بنجلون",
    "Hassan Alaoui": "حسن العلوي",
    "Fatima Benali": "فاطمة بنعلي",
    "Karim Tazi": "كريم الطازي",
    "The Publisher": "الناشر",
  };
  return map[name] || name;
}

export function translateAuthorTitle(title: string) {
  const map: Record<string, string> = {
    "Editor-in-Chief": "رئيس التحرير",
    "Senior Correspondent, International Affairs": "مراسلة الشؤون السياسية",
    "Economics Editor": "محرر الشؤون الاقتصادية",
    "Sports Correspondent": "مراسلة الشؤون الرياضية",
    "Global Trends Intelligence Director": "محرر الشؤون الثقافية",
    "Arts & Media Critic": "ناقد الفنون والإعلام",
    "Social Affairs Reporter": "مراسلة الشؤون الاجتماعية",
    "Science & Technology Editor": "محرر العلوم والتكنولوجيا",
  };
  return map[title] || title;
}

export function translateAuthorBio(bio: string) {
  if (bio.includes("spent three decades at the intersection of policy and print")) {
    return "خبير إعلامي قضى ثلاثة عقود في دهاليز الصحافة المغربية والعالمية. يسهر محمد عبد الرحمان على الخط التحريري لمغرب 24 برؤية ترتكز على المصداقية والعمق التحليلي.";
  }
  if (bio.includes("reported from 47 countries")) {
    return "محللة سياسية متخصصة في الشأن المغربي والعربي. تغطي أمينة المنصوري البرلمان والحكومة والسياسة الخارجية بحصرية — لا تكتب خارج تخصصها السياسي.";
  }
  if (bio.includes("PhD in Macroeconomics")) {
    return "اقتصادي متخصص في الأسواق والمال والأعمال. يوسف العلمي يفكك شفرات الميزانيات والبورصات والتجارة بأسلوب دقيق — لا يعلّق على شؤون خارج الاقتصاد.";
  }
  if (bio.includes("grew up between Madrid and Buenos Aires")) {
    return "مراسلة رياضية متخصصة في كرة القدم المغربية والرياضات الوطنية. مريم الطاهري تُعيد بث الملاعب من داخل الحدث — لا تكتب في السياسة ولا الثقافة.";
  }
  if (bio.includes("trained as an intelligence analyst")) {
    return "ناقد ثقافي متخصص في الأدب والتراث والهوية المغربية. عمر بنجلون يشترط التعمق قبل الكتابة — تخصصه الثقافة ولا شيء غيرها.";
  }
  if (bio.includes("arts")) {
    return "ناقد فني متخصص في الموسيقى والسينما والتشكيل. حسن العلوي يرصد المشهد الفني المغربي بعين خبيرة — الفنون فقط تخصصه.";
  }
  if (bio.includes("social")) {
    return "صحفية اجتماعية تُعنى بقضايا الأسرة والشباب والمرأة. فاطمة بنعلي تقرأ المجتمع بعمق وتلتزم بتخصصها الاجتماعي فقط.";
  }
  if (bio.includes("science") || bio.includes("tech")) {
    return "محرر علمي يُغطي الذكاء الاصطناعي والبيئة والفضاء. كريم الطازي يُترجم العلم للقارئ العادي — علوم وتقنية فقط.";
  }
  return bio;
}


export function getTranslatedSection(section: string | undefined) {
  switch (section?.toLowerCase()) {
    case 'politics': return 'السياسة';
    case 'economics': return 'الاقتصاد';
    case 'sports': return 'الرياضة';
    case 'editorial': return 'الرأي';
    case 'culture': return 'الثقافة';
    case 'science': return 'العلوم';
    case 'society': return 'المجتمع';
    case 'incidents': return 'حوادث';
    default: return section;
  }
}


export function getTranslatedFrequency(freq: string | undefined) {
  switch (freq?.toLowerCase()) {
    case 'daily': return 'يومياً';
    case 'weekly': return 'أسبوعياً';
    case 'monthly': return 'شهرياً';
    case '3x/week': return '3 مرات أسبوعياً';
    case 'on-demand': return 'عند الطلب';
    default: return freq;
  }
}

// ─── Section-specific colors ───
export function getSectionColor(section: string | undefined) {
  switch (section?.toLowerCase()) {
    case 'politics': return 'text-blue-700 border-blue-700 dark:text-blue-400 dark:border-blue-500';
    case 'economics': return 'text-amber-700 border-amber-700 dark:text-amber-400 dark:border-amber-500';
    case 'sports': return 'text-green-700 border-green-700 dark:text-green-400 dark:border-green-500';
    case 'editorial': return 'text-violet-700 border-violet-700 dark:text-violet-400 dark:border-violet-500';
    case 'culture': return 'text-orange-700 border-orange-700 dark:text-orange-400 dark:border-orange-500';
    case 'science': return 'text-cyan-700 border-cyan-700 dark:text-cyan-400 dark:border-cyan-500';
    case 'society': return 'text-purple-700 border-purple-700 dark:text-purple-400 dark:border-purple-500';
    case 'incidents': return 'text-red-700 border-red-700 dark:text-red-400 dark:border-red-500';
    default: return 'text-emerald-700 border-emerald-700 dark:text-emerald-500 dark:border-emerald-500';
  }
}

export function getSectionBgColor(section: string | undefined) {
  switch (section?.toLowerCase()) {
    case 'politics': return 'bg-blue-700 text-white dark:bg-blue-600';
    case 'economics': return 'bg-amber-700 text-white dark:bg-amber-600';
    case 'sports': return 'bg-green-700 text-white dark:bg-green-600';
    case 'editorial': return 'bg-violet-700 text-white dark:bg-violet-600';
    case 'culture': return 'bg-orange-700 text-white dark:bg-orange-600';
    case 'science': return 'bg-cyan-700 text-white dark:bg-cyan-600';
    case 'society': return 'bg-purple-700 text-white dark:bg-purple-600';
    case 'incidents': return 'bg-red-700 text-white dark:bg-red-600';
    default: return 'bg-emerald-700 text-white dark:bg-emerald-600';
  }
}

// ─── SEO Helper: update document title ───
export function usePageTitle(title: string) {
  if (typeof document !== 'undefined') {
    document.title = title ? `${title} — مغرب 24` : 'مغرب 24 — جريدة إلكترونية مغربية مستقلة';
  }
}
