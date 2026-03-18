import { useState, useEffect, useRef } from "react";
import { 
  useGetMeridianNewsroom, 
  useTriggerMeridianGeneration, 
  useMeridianNewsroomDiscuss, 
  useListMeridianSubmissions, 
  useApproveMeridianSubmission, 
  useRejectMeridianSubmission, 
  useAnalyzeMeridianTrends, 
  useGetMeridianTrendsLatest 
} from "@workspace/api-client-react";
import { 
  Loader2, Terminal, ShieldAlert, Play, RefreshCw, Activity, 
  Crosshair, Send, Mic, Inbox, Check, X, ChevronDown, ChevronUp, 
  TrendingUp, Zap, BarChart2, Eye, Megaphone, Image as ImageIcon, 
  Layout, ImagePlus, UserX, Settings, Save, Trash2, MessageSquare, 
  ShieldBan, Users, AlertCircle, PenLine, ToggleLeft, ToggleRight, Plus 
} from "lucide-react";
import { formatDateTime } from "@/lib/utils";
import { useAds } from "@/hooks/use-ads";
import { useBreakingNews } from "@/hooks/use-breaking-news";

const ADMIN_KEY = "meridian2024";

// أنواع البيانات
interface Submission {
  id: string;
  title: string;
  author: string;
  authorName: string;
  authorEmail: string;
  authorBio?: string;
  authorPhotoUrl?: string;
  body: string;
  section: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  createdAt: string;
}

interface LogEntry {
  id: string;
  message: string;
  messageType?: string;
  author: string;
  createdAt: string;
  relatedArticleId?: string;
}

// ── مراسلو مغرب 24 — ذكاء اصطناعي متخصص لكل قسم ──────────────────
export const JOURNALISTS = [
  {
    slug: "marcus-webb",
    name: "أمينة المنصوري",
    beat: "السياسة",
    section: "politics",
    title: "مراسلة الشؤون السياسية",
    emoji: "🏛️",
    color: "text-blue-400",
    border: "border-blue-900/40",
    bg: "bg-blue-900/10",
    persona: "محللة سياسية متخصصة في الشأن المغربي والعربي.",
    topics: ["البرلمان", "الحكومة", "الأحزاب", "السفارات", "الانتخابات", "السياسة الخارجية"],
  },
  {
    slug: "diana-forsythe",
    name: "يوسف العلمي",
    beat: "الاقتصاد",
    section: "economics",
    title: "محرر الشؤون الاقتصادية",
    emoji: "📈",
    color: "text-emerald-400",
    border: "border-emerald-900/40",
    bg: "bg-emerald-900/10",
    persona: "اقتصادي متخصص في الأسواق والمال والأعمال.",
    topics: ["البورصة", "الاستثمار", "الميزانية", "التجارة", "البنوك", "الشركات"],
  },
  {
    slug: "carlos-reyes",
    name: "مريم الطاهري",
    beat: "الرياضة",
    section: "sports",
    title: "مراسلة الشؤون الرياضية",
    emoji: "⚽",
    color: "text-amber-400",
    border: "border-amber-900/40",
    bg: "bg-amber-900/10",
    persona: "صحفية رياضية متخصصة في كرة القدم المغربية.",
    topics: ["الوداد", "الرجاء", "المنتخب الوطني", "كأس العالم", "الدوري", "الألعاب الأولمبية"],
  },
  {
    slug: "victoria-chambers",
    name: "عمر بنجلون",
    beat: "الثقافة",
    section: "culture",
    title: "محرر الشؤون الثقافية",
    emoji: "📚",
    color: "text-violet-400",
    border: "border-violet-900/40",
    bg: "bg-violet-900/10",
    persona: "ناقد ثقافي متخصص في الأدب والتراث والهوية.",
    topics: ["الأدب", "المسرح", "التراث", "المهرجانات", "الكتب", "الهوية المغربية"],
  },
  {
    slug: "hassan-alaoui",
    name: "حسن العلوي",
    beat: "الفنون",
    section: "culture",
    title: "ناقد الفنون والإعلام",
    emoji: "🎭",
    color: "text-pink-400",
    border: "border-pink-900/40",
    bg: "bg-pink-900/10",
    persona: "ناقد فني متخصص في الموسيقى والسينما.",
    topics: ["السينما", "الموسيقى", "المسرح", "التشكيل", "المعارض", "الفنانون"],
  },
  {
    slug: "fatima-benali",
    name: "فاطمة بنعلي",
    beat: "المجتمع",
    section: "society",
    title: "مراسلة الشؤون الاجتماعية",
    emoji: "🏘️",
    color: "text-rose-400",
    border: "border-rose-900/40",
    bg: "bg-rose-900/10",
    persona: "صحفية اجتماعية متخصصة في قضايا الأسرة والمجتمع.",
    topics: ["التعليم", "الصحة", "الأسرة", "الشباب", "المرأة", "السكن", "الهجرة"],
  },
  {
    slug: "karim-tazi",
    name: "كريم الطازي",
    beat: "العلوم والتقنية",
    section: "science",
    title: "محرر العلوم والتكنولوجيا",
    emoji: "🔬",
    color: "text-cyan-400",
    border: "border-cyan-900/40",
    bg: "bg-cyan-900/10",
    persona: "متخصص في العلوم والتكنولوجيا والبيئة.",
    topics: ["الذكاء الاصطناعي", "البيئة", "الفضاء", "الطاقة المتجددة", "الصحة الرقمية", "الابتكار"],
  },
];

export default function Newsroom() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  
  useEffect(() => {
    if (sessionStorage.getItem('newsroom_auth') === 'true') {
      setAuth(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === ADMIN_KEY) {
      sessionStorage.setItem('newsroom_auth', 'true');
      setAuth(true);
      setError("");
    } else {
      setError("خطأ: بيانات الاعتماد الإدارية غير صالحة");
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-emerald-500 font-sans absolute inset-0 z-50" dir="rtl">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen">
          <img src={`${import.meta.env.BASE_URL}images/newsroom-bg.png`} className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="z-10 w-full max-w-md p-8 border border-emerald-900/50 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.1)] text-right">
          <div className="flex justify-center mb-8">
            <ShieldAlert className="w-16 h-16 animate-pulse opacity-80" />
          </div>
          <h1 className="text-2xl text-center mb-2 tracking-widest font-bold">دخول مقيد</h1>
          <p className="text-emerald-700 text-xs text-center mb-10 tracking-widest">غرفة أخبار مغرب 24 المستقلة</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs mb-2 tracking-widest text-emerald-600 text-right">أدخل مفتاح المرور:</label>
              <input 
                type="password" 
                value={pass}
                onChange={e => setPass(e.target.value)}
                autoFocus
                className="w-full bg-black border-b border-emerald-800 text-emerald-400 p-2 focus:outline-none focus:border-emerald-400 transition-colors text-right"
              />
            </div>
            {error && <p className="text-red-500 text-xs tracking-widest animate-pulse text-right">{error}</p>}
            <button type="submit" className="w-full border border-emerald-800 text-emerald-500 hover:bg-emerald-950/30 tracking-widest font-bold py-3 transition-colors text-sm">
              تفويض الاتصال
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <NewsroomDashboard />;
}

function NewsroomDashboard() {
  const { data: logs, isLoading, refetch } = useGetMeridianNewsroom({ limit: 100 });
  const logEntries = Array.isArray(logs) ? logs : [];
  const triggerGen = useTriggerMeridianGeneration();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [selectedJournalist, setSelectedJournalist] = useState("");
  const [topicHint, setTopicHint] = useState("");
  const [briefSent, setBriefSent] = useState(false);
  const [publisherMsg, setPublisherMsg] = useState("");
  const [discussing, setDiscussing] = useState(false);
  const discuss = useMeridianNewsroomDiscuss();

  const { data: trendLogsData } = useGetMeridianTrendsLatest({ limit: 1 });
  const trendLogs = Array.isArray(trendLogsData) ? trendLogsData : [];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logEntries]);

  const handleTrigger = () => {
    triggerGen.mutate({ data: { adminKey: ADMIN_KEY } }, {
      onSuccess: () => refetch()
    });
  };

  const handleDiscuss = (e: React.FormEvent) => {
    e.preventDefault();
    if (!publisherMsg.trim()) return;
    setDiscussing(true);
    const msg = publisherMsg.trim();
    setPublisherMsg("");
    discuss.mutate({ data: { adminKey: ADMIN_KEY, message: msg } }, {
      onSuccess: () => {
        refetch();
        setTimeout(() => { setDiscussing(false); refetch(); }, 10000);
      },
      onError: () => setDiscussing(false),
    });
  };

  const handleBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicHint.trim()) return;
    triggerGen.mutate({
      data: {
        adminKey: ADMIN_KEY,
        authorSlug: selectedJournalist || undefined,
        topicHint: topicHint.trim(),
      }
    }, {
      onSuccess: () => {
        setBriefSent(true);
        setTopicHint("");
        refetch();
        setTimeout(() => { setBriefSent(false); refetch(); }, 4000);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans relative overflow-hidden" dir="rtl">
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <img src={`${import.meta.env.BASE_URL}images/grid-pattern.png`} className="w-full h-full object-cover" alt="" />
      </div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleTrigger}
              disabled={triggerGen.isPending}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600/10 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-600/20 transition-colors text-xs uppercase tracking-widest font-bold disabled:opacity-40"
            >
              {triggerGen.isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Activity className="w-3.5 h-3.5" />}
              توليد الأخبار
            </button>
            <button
              onClick={() => refetch()}
              className="p-2 text-zinc-500 hover:text-zinc-400 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-600 uppercase tracking-widest">غرفة الأخبار</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* العمود الرئيسي - الشات */}
          <div className="lg:col-span-2 space-y-6">
            {/* صندوق المحادثة */}
            <div className="bg-black border border-zinc-800 flex flex-col h-[600px]">
              <div className="border-b border-zinc-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-600">نشاط غرفة الأخبار</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-700" />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {isLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-emerald-500/50" />
                  </div>
                ) : logEntries.length === 0 ? (
                  <div className="text-center py-8 text-zinc-700 text-sm">
                    لا توجد رسائل بعد...
                  </div>
                ) : (
                  logEntries.map((log: LogEntry) => (
                    <div key={log.id} className="flex items-start gap-3 text-right">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                          <span className="text-xs font-bold text-emerald-500">{log.author}</span>
                          <span className="text-[10px] text-zinc-700">{formatDateTime(log.createdAt)}</span>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800 p-3 text-sm text-zinc-300">
                          {log.message}
                          {log.relatedArticleId && (
                            <div className="flex items-center gap-2 mt-2 text-[10px] text-emerald-700">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              <span>REF: ARTICLE_{log.relatedArticleId}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {discussing && (
                  <div className="flex gap-3 items-center text-zinc-600 text-xs animate-pulse justify-end">
                    <span className="text-zinc-600">الفريق يفكر...</span>
                    <span className="w-2 h-2 bg-zinc-700 rounded-full animate-bounce" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* مدخل النص */}
              <form onSubmit={handleDiscuss} className="border-t border-zinc-800 p-4 flex gap-3 bg-zinc-950/50">
                <button
                  type="submit"
                  disabled={discussing || !publisherMsg.trim()}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-amber-600/10 text-amber-500 border border-amber-500/30 hover:bg-amber-600/20 transition-colors disabled:opacity-40 text-xs uppercase tracking-widest font-bold"
                >
                  {discussing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                </button>
                <input
                  type="text"
                  value={publisherMsg}
                  onChange={e => setPublisherMsg(e.target.value)}
                  placeholder="خاطب غرفة الأخبار..."
                  disabled={discussing}
                  className="flex-1 bg-transparent border-none text-zinc-300 text-sm focus:outline-none placeholder:text-zinc-700 disabled:opacity-40 text-right"
                />
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-900/30 border border-amber-800/50 flex items-center justify-center">
                  <Mic className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </form>
            </div>
          </div>

          {/* الشريط الجانبي الأيمن - كل المشاهد */}
          <div className="space-y-6">
            {/* توجيه هيئة التحرير */}
            <div className="bg-black border border-emerald-900/40 p-5">
              <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1 flex items-center gap-2 justify-end">
                توجيه هيئة التحرير
                <Crosshair className="w-3.5 h-3.5" />
              </h3>
              <p className="text-[10px] text-zinc-600 mb-4 pb-3 border-b border-zinc-900">اختر المراسل وحدد الموضوع</p>

              <div className="space-y-2 mb-4">
                <select
                  value={selectedJournalist}
                  onChange={(e) => setSelectedJournalist(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-3 focus:outline-none focus:border-emerald-700"
                >
                  <option value="">كل المراسلين</option>
                  {JOURNALISTS.map(j => (
                    <option key={j.slug} value={j.slug}>{j.name} - {j.beat}</option>
                  ))}
                </select>
              </div>

              <form onSubmit={handleBrief} className="space-y-4">
                <textarea
                  value={topicHint}
                  onChange={e => setTopicHint(e.target.value)}
                  rows={3}
                  placeholder="أدخل الموضوع..."
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-3 focus:outline-none focus:border-emerald-700 resize-none text-right"
                />

                <button
                  type="submit"
                  disabled={triggerGen.isPending || !topicHint.trim()}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600/10 text-emerald-500 border border-emerald-500/40 hover:bg-emerald-600/20 disabled:opacity-40 text-xs uppercase font-bold"
                >
                  {triggerGen.isPending ? (
                    <><Loader2 className="w-3.5 h-3.5 animate-spin" /> جاري الكتابة...</>
                  ) : briefSent ? (
                    <><Activity className="w-3.5 h-3.5" /> تم الإرسال</>
                  ) : (
                    <><Send className="w-3.5 h-3.5" /> إرسال</>
                  )}
                </button>
              </form>
            </div>

            {/* وكالة المراسلين */}
            <AgentRosterPanel />
            
            {/* استخبارات التوجهات */}
            <TrendIntelPanel />
            
            {/* لوحة الإحصائيات */}
            <StatsDashboard />
            
            {/* الأخبار العاجلة */}
            <BreakingNewsPanel />
            
            {/* مساهمات القراء */}
            <SubmissionsPanel />
            
            {/* مدير الإعلانات */}
            <AdManagerPanel />
            
            {/* مكتبة الوسائط */}
            <MediaLibraryPanel />
            
            {/* إدارة التعليقات */}
            <CommentsModerationPanel />
            
            {/* إدارة الفريق */}
            <TeamManagerPanel />
            
            {/* إعدادات الموقع */}
            <SiteSettingsPanel />
            
            {/* بيانات التشخيص - هذا كان يخبرك بسبب عدم الرد */}
            <DiagnosticsPanel triggerGen={triggerGen} />
          </div>
        </div>
      </div>
    </div>
  );
}

// =================== المشاهد المساعدة ===================

function AgentRosterPanel() {
  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">وكلاء غرفة الأخبار</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 justify-end pb-3 border-b border-zinc-900">
          <div className="text-right">
            <div className="text-xs font-bold text-zinc-200">محمد عبد الرحمان</div>
            <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5">رئيس التحرير</div>
          </div>
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
        </div>
        {JOURNALISTS.map(j => (
          <div key={j.slug} className="flex items-start gap-3 justify-end">
            <div className="text-right flex-1">
              <div className={`text-xs font-bold ${j.color}`}>
                {j.emoji} {j.name}
                <span className="text-[9px] text-zinc-600 font-normal mr-2">— {j.beat}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1 justify-end">
                {j.topics.slice(0, 3).map(t => (
                  <span key={t} className={`text-[8px] px-1 py-0.5 border ${j.border} ${j.color} opacity-60`}>{t}</span>
                ))}
              </div>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0 mt-1.5 ${j.color.replace('text-', 'bg-')}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendIntelPanel() {
  const [mode, setMode] = useState<"scan" | "predict" | "brief">("scan");
  const [triggerArticles, setTriggerArticles] = useState(false);
  const analyze = useAnalyzeMeridianTrends();

  return (
    <div className="bg-black border border-violet-900/40 p-5">
      <div className="flex items-start justify-between mb-1 flex-row-reverse">
        <h3 className="text-xs font-bold text-violet-400 uppercase tracking-widest flex items-center gap-2">
          استخبارات التوجهات
          <TrendingUp className="w-3.5 h-3.5" />
        </h3>
        <span className="text-[9px] text-violet-600 uppercase tracking-widest border border-violet-800/40 px-1.5 py-0.5">فيكتوريا تشامبرز</span>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-3 gap-1">
          {([
            { key: "scan", label: "مسح", icon: Eye },
            { key: "predict", label: "توقع", icon: Zap },
            { key: "brief", label: "توجيه", icon: BarChart2 },
          ] as const).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`flex flex-col items-center p-2 border ${
                mode === key ? "border-violet-500/50 bg-violet-500/10 text-violet-300" : "border-zinc-800 text-zinc-600"
              }`}
            >
              <Icon className="w-3 h-3 mb-0.5" />
              <span className="text-[9px] font-bold uppercase">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 py-2 border-t border-b border-zinc-900">
        <span className="text-[10px] text-zinc-400">إنشاء مقالات تلقائي</span>
        <button
          onClick={() => setTriggerArticles(!triggerArticles)}
          className={`w-10 h-5 rounded-full transition-all relative ${triggerArticles ? "bg-violet-600" : "bg-zinc-800"}`}
        >
          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${triggerArticles ? "left-5" : "left-0.5"}`} />
        </button>
      </div>

      <button
        onClick={() => analyze.mutate({ data: { adminKey: ADMIN_KEY, mode, triggerArticles } })}
        disabled={analyze.isPending}
        className="w-full flex items-center justify-center gap-2 py-3 bg-violet-600/10 text-violet-400 border border-violet-500/40 hover:bg-violet-600/20 disabled:opacity-40 text-xs uppercase font-bold"
      >
        {analyze.isPending ? (
          <><Loader2 className="w-3.5 h-3.5 animate-spin" /> جاري التحليل...</>
        ) : (
          <><TrendingUp className="w-3.5 h-3.5" /> تشغيل {mode === "scan" ? "المسح" : mode === "predict" ? "التوقع" : "التوجيه"}</>
        )}
      </button>
    </div>
  );
}

function StatsDashboard() {
  const metrics = [
    { label: "زيارات اليوم", value: "12,847", color: "text-emerald-400" },
    { label: "زيارات الأسبوع", value: "84,321", color: "text-teal-400" },
    { label: "مقالات الشهر", value: "34", color: "text-blue-400" },
    { label: "معلقة", value: "7", color: "text-amber-400" },
  ];

  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-300 uppercase mb-4 flex items-center gap-2 justify-end">
        الإحصائيات
        <BarChart2 className="w-3.5 h-3.5" />
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {metrics.map(m => (
          <div key={m.label} className="border border-zinc-800 p-3">
            <div className={`text-xl font-black ${m.color}`}>{m.value}</div>
            <div className="text-[9px] text-zinc-600 mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BreakingNewsPanel() {
  const { items, tickerEnabled, setTickerEnabled, addItem, deleteItem, toggleItem } = useBreakingNews();
  const [newText, setNewText] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;
    addItem(newText.trim(), isUrgent);
    setNewText("");
    setIsUrgent(false);
  };

  return (
    <div className="bg-black border border-orange-900/40 p-5">
      <h3 className="text-xs font-bold text-orange-400 uppercase mb-1 flex items-center gap-2 justify-end">
        أخبار عاجلة
        <AlertCircle className="w-3.5 h-3.5" />
      </h3>

      <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-900">
        <button
          onClick={() => setTickerEnabled(!tickerEnabled)}
          className={`flex items-center gap-2 text-xs font-bold uppercase px-3 py-1.5 border ${
            tickerEnabled ? "bg-orange-500/10 border-orange-500/40 text-orange-400" : "bg-zinc-900 border-zinc-700 text-zinc-500"
          }`}
        >
          {tickerEnabled ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
          {tickerEnabled ? 'مفعّل' : 'معطّل'}
        </button>
      </div>

      <form onSubmit={handleAdd} className="mb-4">
        <textarea 
          value={newText} 
          onChange={e => setNewText(e.target.value)} 
          placeholder="نص الخبر العاجل..." 
          rows={2}
          className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-2 focus:outline-none focus:border-orange-600 resize-none text-right"
        />
        <div className="flex gap-2 mt-2">
          <button 
            type="submit" 
            disabled={!newText.trim()} 
            className="flex-1 py-1.5 bg-orange-600/10 text-orange-400 border border-orange-500/30 hover:bg-orange-600/20 text-[10px] uppercase font-bold"
          >
            <Plus className="w-3 h-3 inline ml-1" /> إضافة
          </button>
          <button 
            type="button" 
            onClick={() => setIsUrgent(!isUrgent)}
            className={`px-3 py-1.5 border text-[10px] font-bold uppercase ${isUrgent ? "bg-red-600/20 border-red-500/40 text-red-400" : "border-zinc-800 text-zinc-600"}`}
          >
            🔴 عاجل
          </button>
        </div>
      </form>

      <div className="space-y-2 max-h-48 overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className={`border p-3 flex items-center gap-2 ${item.urgent ? "border-red-900/40 bg-red-950/10" : "border-zinc-800"}`}>
            <div className="flex-1 text-right">
              {item.urgent && <span className="text-red-400 text-[9px] font-bold ml-1">🔴</span>}
              <span className="text-xs text-zinc-300">{item.text}</span>
            </div>
            <button 
              onClick={() => toggleItem(item.id)} 
              className={`w-7 h-3.5 rounded-full relative ${item.active ? "bg-orange-600" : "bg-zinc-800"}`}
            >
              <div className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-white transition-all ${item.active ? "left-3.5" : "left-0.5"}`} />
            </button>
            <button onClick={() => deleteItem(item.id)} className="text-zinc-600 hover:text-red-500">
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubmissionsPanel() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [editorNote, setEditorNote] = useState("");

  const { data: submissions, isLoading, refetch } = useListMeridianSubmissions({ adminKey: ADMIN_KEY });
  const approve = useApproveMeridianSubmission();
  const reject = useRejectMeridianSubmission();

  const submissionEntries = Array.isArray(submissions) ? submissions : [];
  const pendingCount = submissionEntries.filter((s: any) => s.status === 'pending').length;

  const handleApprove = (id: string) => {
    approve.mutate(
      { submissionId: id, data: { adminKey: ADMIN_KEY, editorNote } },
      { onSuccess: () => { refetch(); setExpanded(null); setEditorNote(""); } }
    );
  };

  const handleReject = (id: string) => {
    reject.mutate(
      { submissionId: id, data: { adminKey: ADMIN_KEY, editorNote } },
      { onSuccess: () => { refetch(); setExpanded(null); setEditorNote(""); } }
    );
  };

  return (
    <div className="bg-black border border-blue-900/40 p-5">
      <h3 className="text-xs font-bold text-blue-400 uppercase mb-1 flex items-center gap-2 justify-end">
        {pendingCount > 0 && (
          <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded px-1.5 py-0.5 text-[10px]">
            {pendingCount} جديد
          </span>
        )}
        مساهمات القراء
        <Inbox className="w-3.5 h-3.5" />
      </h3>

      <div className="flex gap-1 mb-4">
        {(['pending', 'approved', 'rejected'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 py-1 text-[10px] uppercase border ${
              filter === f
                ? f === 'pending' ? 'bg-blue-500/10 border-blue-500/40 text-blue-400'
                  : f === 'approved' ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'bg-red-500/10 border-red-500/40 text-red-400'
                : 'border-zinc-800 text-zinc-600'
            }`}
          >
            {f === 'pending' ? 'معلق' : f === 'approved' ? 'مقبول' : 'مرفوض'}
          </button>
        ))}
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center py-6"><Loader2 className="w-5 h-5 animate-spin text-blue-500/40" /></div>
        ) : submissionEntries.length === 0 ? (
          <div className="text-zinc-700 text-xs text-center py-6">لا توجد مساهمات</div>
        ) : (
          submissionEntries.map((sub: any) => (
            <div key={sub.id} className="border border-zinc-800 bg-zinc-950/50">
              <button
                className="w-full flex items-center gap-3 p-3 text-right hover:bg-zinc-900/30"
                onClick={() => setExpanded(expanded === sub.id ? null : sub.id)}
              >
                {sub.authorPhotoUrl ? (
                  <img src={sub.authorPhotoUrl} alt="" className="w-8 h-8 rounded-full object-cover border border-zinc-700" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                    {sub.authorName?.charAt(0) || '?'}
                  </div>
                )}
                <div className="flex-1 text-right">
                  <div className="text-xs font-bold text-zinc-200">{sub.title}</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">{sub.authorName}</div>
                </div>
                {expanded === sub.id ? <ChevronUp className="w-3.5 h-3.5 text-zinc-600" /> : <ChevronDown className="w-3.5 h-3.5 text-zinc-600" />}
              </button>

              {expanded === sub.id && (
                <div className="border-t border-zinc-800 p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-zinc-400 whitespace-pre-wrap">{sub.body}</div>
                  </div>

                  {filter === 'pending' && (
                    <div className="space-y-3">
                      <textarea
                        value={editorNote}
                        onChange={e => setEditorNote(e.target.value)}
                        placeholder="ملاحظة المحرر..."
                        rows={2}
                        className="w-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs p-2 focus:outline-none focus:border-blue-600 resize-none text-right"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(sub.id)}
                          disabled={approve.isPending}
                          className="flex-1 py-2 bg-emerald-600/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/20 text-[10px] uppercase font-bold"
                        >
                          {approve.isPending ? <Loader2 className="w-3 h-3 animate-spin mx-auto" /> : 'نشر'}
                        </button>
                        <button
                          onClick={() => handleReject(sub.id)}
                          disabled={reject.isPending}
                          className="flex-1 py-2 bg-red-600/10 text-red-400 border border-red-500/30 hover:bg-red-600/20 text-[10px] uppercase font-bold"
                        >
                          {reject.isPending ? <Loader2 className="w-3 h-3 animate-spin mx-auto" /> : 'رفض'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function AdManagerPanel() {
  const { ads, updateAd, addAd, deleteAd } = useAds();
  const [isAdding, setIsAdding] = useState(false);
  const [newAd, setNewAd] = useState({ title: "", position: "header_home", imageUrl: "", linkUrl: "" });

  return (
    <div className="bg-black border border-amber-900/40 p-5">
      <h3 className="text-xs font-bold text-amber-500 uppercase mb-1 flex items-center gap-2 justify-end">
        مدير الإعلانات
        <Megaphone className="w-3.5 h-3.5" />
      </h3>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {ads.map((ad: any) => (
          <div key={ad.id} className="border border-zinc-800 p-3 flex justify-between items-center group">
            <div className="text-right flex-1">
              <div className="text-xs font-bold text-zinc-300">{ad.title}</div>
            </div>
            <button onClick={() => deleteAd(ad.id)} className="text-zinc-600 hover:text-red-500">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => setIsAdding(true)} className="w-full mt-3 py-2 bg-zinc-900 border border-zinc-800 text-amber-500 hover:bg-amber-950/20 text-xs uppercase font-bold">
        + إضافة إعلان
      </button>
    </div>
  );
}

function MediaLibraryPanel() {
  return (
    <div className="bg-black border border-emerald-900/40 p-5">
      <h3 className="text-xs font-bold text-emerald-500 uppercase mb-1 flex items-center gap-2 justify-end">
        مكتبة الوسائط
        <ImageIcon className="w-3.5 h-3.5" />
      </h3>
      <div className="text-center text-zinc-600 text-xs py-4">قريباً...</div>
    </div>
  );
}

function CommentsModerationPanel() {
  return (
    <div className="bg-black border border-rose-900/40 p-5">
      <h3 className="text-xs font-bold text-rose-500 uppercase mb-1 flex items-center gap-2 justify-end">
        إدارة التعليقات
        <MessageSquare className="w-3.5 h-3.5" />
      </h3>
      <div className="text-center text-zinc-600 text-xs py-4">قريباً...</div>
    </div>
  );
}

function TeamManagerPanel() {
  return (
    <div className="bg-black border border-sky-900/40 p-5">
      <h3 className="text-xs font-bold text-sky-400 uppercase mb-1 flex items-center gap-2 justify-end">
        إدارة الفريق
        <Users className="w-3.5 h-3.5" />
      </h3>
      <div className="text-center text-zinc-600 text-xs py-4">قريباً...</div>
    </div>
  );
}

function SiteSettingsPanel() {
  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-300 uppercase mb-1 flex items-center gap-2 justify-end">
        إعدادات الموقع
        <Settings className="w-3.5 h-3.5" />
      </h3>
      <div className="text-center text-zinc-600 text-xs py-4">قريباً...</div>
    </div>
  );
}

function DiagnosticsPanel({ triggerGen }: { triggerGen: any }) {
  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">بيانات التشخيص</h3>
      <div className="space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-zinc-500">المحرك</span>
          <span className="text-amber-500 font-bold">Claude 3.5 Haiku</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-500">حالة الاتصال</span>
          <span className={`font-bold ${triggerGen.isPending ? 'text-amber-400 animate-pulse' : 'text-emerald-500'}`}>
            {triggerGen.isPending ? 'جاري الكتابة...' : 'جاهز'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-500">الطابور</span>
          <span className="text-amber-500">{triggerGen.isPending ? 'مشغول' : 'خامل'}</span>
        </div>
      </div>
    </div>
  );
}
