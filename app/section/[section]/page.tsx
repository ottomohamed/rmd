'use client';

import { supabase } from '@/lib/supabase'
import { useState, useEffect, useRef } from "react";
import {
  useGetMAROC24Newsroom,
  useTriggerMAROC24Generation,
  useMAROC24NewsroomDiscuss,
  useListMAROC24Submissions,
  useApproveMAROC24Submission,
  useRejectMAROC24Submission,
  useAnalyzeMAROC24Trends,
  useGetMAROC24TrendsLatest,
  useSubmitMAROC24Article
} from "@workspace/api-client-react";
import {
  Loader2, Terminal, ShieldAlert, Activity,
  Crosshair, Send, Mic, Inbox, ChevronDown, ChevronUp,
  TrendingUp, Zap, BarChart2, Eye, Megaphone, Image as ImageIcon,
  RefreshCw, Trash2, MessageSquare, Settings, Upload,
  ToggleLeft, ToggleRight, Plus, AlertCircle, Users, PenTool,
  CheckCircle2, AlertTriangle
} from "lucide-react";
import { formatDateTime, cn } from "@/lib/utils";
import { useAds } from "@/hooks/use-ads";
import { useBreakingNews } from "@/hooks/use-breaking-news";

const ADMIN_KEY = "meridian2024";

export const JOURNALISTS = [
  { slug: "marcus-webb", name: "أمينة المنصوري", beat: "السياسة", section: "politics", color: "text-blue-400" },
  { slug: "diana-forsythe", name: "يوسف العلمي", beat: "الاقتصاد", section: "economics", color: "text-emerald-400" },
  { slug: "carlos-reyes", name: "مريم الطاهري", beat: "الرياضة", section: "sports", color: "text-amber-400" },
  { slug: "victoria-chambers", name: "عمر بنجلون", beat: "الثقافة", section: "culture", color: "text-violet-400" },
  { slug: "hassan-alaoui", name: "حسن العلوي", beat: "الفنون", section: "culture", color: "text-pink-400" },
  { slug: "fatima-benali", name: "فاطمة بنعلي", beat: "المجتمع", section: "society", color: "text-rose-400" },
  { slug: "karim-tazi", name: "كريم الطازي", beat: "العلوم والتقنية", section: "science", color: "text-cyan-400" },
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
  const { data: logs, isLoading, refetch } = useGetMAROC24Newsroom({ limit: 100 });
  const logEntries = Array.isArray(logs) ? logs : [];
  const triggerGen = useTriggerMAROC24Generation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [selectedJournalist, setSelectedJournalist] = useState("");
  const [topicHint, setTopicHint] = useState("");
  const [briefSent, setBriefSent] = useState(false);
  const [publisherMsg, setPublisherMsg] = useState("");
  const [discussing, setDiscussing] = useState(false);
  const discuss = useMAROC24NewsroomDiscuss();

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
      <div className="relative z-10 max-w-[1600px] mx-auto p-6">
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
            <span className="text-xs text-zinc-600 uppercase tracking-widest">غرفة الأخبار (نظام الذكاء الاصطناعي)</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
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
                  <div className="text-center py-8 text-zinc-700 text-sm">لا توجد رسائل بعد...</div>
                ) : (
                  (logEntries as any[]).map((log: any) => (
                    <div key={log.id} className="flex items-start gap-3 text-right">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                          <span className="text-xs font-bold text-emerald-500">{log.author}</span>
                          <span className="text-[10px] text-zinc-700">{formatDateTime(log.createdAt)}</span>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800 p-3 text-sm text-zinc-300">
                          {log.message}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleDiscuss} className="border-t border-zinc-800 p-4 flex gap-3 bg-zinc-950/50">
                <button type="submit" disabled={discussing || !publisherMsg.trim()} className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-amber-600/10 text-amber-500 border border-amber-500/30 hover:bg-amber-600/20 transition-colors disabled:opacity-40 text-xs font-bold">
                  {discussing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                </button>
                <input type="text" value={publisherMsg} onChange={e => setPublisherMsg(e.target.value)} placeholder="خاطب غرفة الأخبار..." className="flex-1 bg-transparent border-none text-zinc-300 text-sm focus:outline-none text-right" />
              </form>
            </div>

            {/* ميزة النشر اليدوي السريع - الطوارئ */}
            <QuickPublishPanel />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-black border border-emerald-900/40 p-5">
              <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1 flex items-center gap-2 justify-end">
                توجيه هيئة التحرير
                <Crosshair className="w-3.5 h-3.5" />
              </h3>
              <div className="space-y-4 mt-4">
                <select value={selectedJournalist} onChange={(e) => setSelectedJournalist(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-3 focus:outline-none text-right">
                  <option value="">كل المراسلين الآليين</option>
                  {JOURNALISTS.map(j => <option key={j.slug} value={j.slug}>{j.name} - {j.beat}</option>)}
                </select>
                <textarea value={topicHint} onChange={e => setTopicHint(e.target.value)} rows={3} placeholder="أدخل الموضوع..." className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-3 focus:outline-none resize-none text-right" />
                <button onClick={handleBrief} disabled={triggerGen.isPending || !topicHint.trim()} className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600/10 text-emerald-500 border border-emerald-500/40 hover:bg-emerald-600/20 text-xs font-bold uppercase">
                  {triggerGen.isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />} إرسال أمر كتابة
                </button>
              </div>
            </div>

            <AgentRosterPanel />
            <BreakingNewsPanel />
            <SubmissionsPanel />
            <TrendIntelPanel />
            <StatsDashboard />
            <AdManagerPanel />
            <EnhancedMediaLibrary />
            <DiagnosticsPanel triggerGen={triggerGen} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── لوحة النشر السريع (الطوارئ) ───────────────────────────────────────────────────
function QuickPublishPanel() {
  const [isOpen, setOpen] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ title: '', authorName: '', body: '', section: 'politics', imageUrl: '' });

  const submitArticle = useSubmitMAROC24Article();
  const approveArticle = useApproveMAROC24Submission();

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.body || !form.authorName) return;

    setPublishing(true);
    setStatus('idle');

    try {
      // 1. إرسال كـ مساهمة
      const submission = await submitArticle.mutateAsync({
        data: {
          title: form.title,
          body: form.body,
          authorName: form.authorName,
          authorEmail: 'admin@maroc24.ma',
          section: form.section as any,
          authorPhotoUrl: form.imageUrl || undefined,
        }
      });

      // 2. موافقة فورية تلقائية
      if (submission.id) {
        await approveArticle.mutateAsync({
          id: submission.id,
          data: { adminKey: ADMIN_KEY, editorNote: 'نشر يدوي طارئ من الإدارة' }
        });
        setStatus('success');
        setForm({ title: '', authorName: '', body: '', section: 'politics', imageUrl: '' });
        setTimeout(() => { setStatus('idle'); setOpen(false); }, 3000);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="bg-black border border-amber-900/40 overflow-hidden">
      <button
        onClick={() => setOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-amber-950/10 hover:bg-amber-950/20 transition-colors"
      >
        {isOpen ? <ChevronUp className="w-4 h-4 text-amber-500" /> : <ChevronDown className="w-4 h-4 text-amber-500" />}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest">النشر اليدوي السريع (حالات الطوارئ)</h3>
            <p className="text-[10px] text-amber-700">تجاوز نظام الذكاء الاصطناعي والنشر بأي اسم</p>
          </div>
          <PenTool className="w-5 h-5 text-amber-500" />
        </div>
      </button>

      {isOpen && (
        <form onSubmit={handlePublish} className="p-6 space-y-4 border-t border-amber-900/20 animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 uppercase font-bold block text-right">اسم الكاتب المستعار</label>
              <input
                value={form.authorName}
                onChange={e => setForm({...form, authorName: e.target.value})}
                placeholder="مثلاً: هيئة التحرير، أو اسمك الشخصي"
                className="w-full bg-zinc-900 border border-zinc-800 p-2.5 text-xs text-zinc-300 focus:border-amber-600 outline-none text-right"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 uppercase font-bold block text-right">القسم</label>
              <select
                value={form.section}
                onChange={e => setForm({...form, section: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 p-2.5 text-xs text-zinc-300 focus:border-amber-600 outline-none text-right"
              >
                <option value="politics">سياسة</option>
                <option value="economics">اقتصاد</option>
                <option value="sports">رياضة</option>
                <option value="society">مجتمع</option>
                <option value="culture">ثقافة</option>
                <option value="editorial">رأي</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-zinc-500 uppercase font-bold block text-right">عنوان المقال</label>
            <input
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              placeholder="اكتب العنوان هنا..."
              className="w-full bg-zinc-900 border border-zinc-800 p-2.5 text-sm font-bold text-zinc-200 focus:border-amber-600 outline-none text-right"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-zinc-500 uppercase font-bold block text-right">محتوى المقال</label>
            <textarea
              value={form.body}
              onChange={e => setForm({...form, body: e.target.value})}
              rows={8}
              placeholder="اكتب نص المقال بالكامل هنا..."
              className="w-full bg-zinc-900 border border-zinc-800 p-3 text-xs text-zinc-300 focus:border-amber-600 outline-none resize-none text-right"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-zinc-500 uppercase font-bold block text-right">رابط الصورة (اختياري)</label>
            <input
              value={form.imageUrl}
              onChange={e => setForm({...form, imageUrl: e.target.value})}
              placeholder="https://..."
              className="w-full bg-zinc-900 border border-zinc-800 p-2.5 text-[10px] text-zinc-400 focus:border-amber-600 outline-none text-right"
            />
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold justify-end py-2">
              <span>تم نشر المقال بنجاح ويظهر الآن على الموقع</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 text-xs font-bold justify-end py-2">
              <span>حدث خطأ أثناء النشر، حاول مرة أخرى</span>
              <AlertTriangle className="w-4 h-4" />
            </div>
          )}

          <button
            disabled={publishing || !form.title || !form.body || !form.authorName}
            className="w-full py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-zinc-800 text-black font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
          >
            {publishing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Megaphone className="w-4 h-4" />}
            نشر المقال فوراً
          </button>
        </form>
      )}
    </div>
  );
}

// =================== المشاهد المساعدة المتبقية ===================

function AgentRosterPanel() {
  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2 text-right">وكلاء غرفة الأخبار</h3>
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
              <div className={`text-xs font-bold ${j.color}`}>{j.name} <span className="text-[9px] text-zinc-600 font-normal mr-2">— {j.beat}</span></div>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0 mt-1.5 ${j.color.replace('text-', 'bg-')}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendIntelPanel() {
  const [mode, setMode] = useState<"scan" | "predict" | "brief">('scan');
  const analyze = useAnalyzeMAROC24Trends();
  return (
    <div className="bg-black border border-violet-900/40 p-5">
      <h3 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4 flex items-center gap-2 justify-end">استخبارات التوجهات <TrendingUp className="w-3.5 h-3.5" /></h3>
      <button onClick={() => analyze.mutate({ data: { adminKey: ADMIN_KEY, mode } })} disabled={analyze.isPending} className="w-full flex items-center justify-center gap-2 py-3 bg-violet-600/10 text-violet-400 border border-violet-500/40 text-xs font-bold uppercase">
        {analyze.isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5" />} تشغيل التحليل الذكي
      </button>
    </div>
  );
}

function StatsDashboard() {
  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-300 uppercase mb-4 flex items-center gap-2 justify-end">الإحصائيات <BarChart2 className="w-3.5 h-3.5" /></h3>
      <div className="grid grid-cols-2 gap-2 text-right">
        <div className="border border-zinc-800 p-3"><div className="text-xl font-black text-emerald-400">12,847</div><div className="text-[9px] text-zinc-600 mt-1">زيارات اليوم</div></div>
        <div className="border border-zinc-800 p-3"><div className="text-xl font-black text-teal-400">34</div><div className="text-[9px] text-zinc-600 mt-1">مقالات الشهر</div></div>
      </div>
    </div>
  );
}

function BreakingNewsPanel() {
  const { items, tickerEnabled, setTickerEnabled, addItem, deleteItem, toggleItem } = useBreakingNews();
  const [newText, setNewText] = useState("");
  return (
    <div className="bg-black border border-orange-900/40 p-5">
      <h3 className="text-xs font-bold text-orange-400 uppercase mb-4 flex items-center gap-2 justify-end">أخبار عاجلة <AlertCircle className="w-3.5 h-3.5" /></h3>
      <form onSubmit={e => { e.preventDefault(); addItem(newText, true); setNewText(""); }} className="space-y-2">
        <input value={newText} onChange={e => setNewText(e.target.value)} placeholder="نص الخبر..." className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-2 outline-none text-right" />
        <button type="submit" className="w-full py-2 bg-orange-600/10 text-orange-400 border border-orange-500/30 text-[10px] font-bold uppercase">+ إضافة</button>
      </form>
    </div>
  );
}

function SubmissionsPanel() {
  const { data: submissions, isLoading } = useListMAROC24Submissions({ adminKey: ADMIN_KEY });
  const submissionEntries = Array.isArray(submissions) ? submissions : [];
  return (
    <div className="bg-black border border-blue-900/40 p-5">
      <h3 className="text-xs font-bold text-blue-400 uppercase mb-4 flex items-center gap-2 justify-end">مساهمات القراء <Inbox className="w-3.5 h-3.5" /></h3>
      <div className="text-[10px] text-zinc-600 text-center py-2">يوجد {submissionEntries.length} مساهمة في الانتظار</div>
    </div>
  );
}

function AdManagerPanel() {
  const { ads, deleteAd } = useAds();
  return (
    <div className="bg-black border border-amber-900/40 p-5">
      <h3 className="text-xs font-bold text-amber-500 uppercase mb-4 flex items-center gap-2 justify-end">مدير الإعلانات <Megaphone className="w-3.5 h-3.5" /></h3>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {ads.map((ad: any) => (
          <div key={ad.id} className="border border-zinc-800 p-2 flex justify-between items-center flex-row-reverse text-[10px]">
            <span className="text-zinc-300">{ad.title}</span>
            <button onClick={() => deleteAd(ad.id)} className="text-zinc-600 hover:text-red-500"><Trash2 className="w-3 h-3" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnhancedMediaLibrary() {
  const [uploading, setUploading] = useState(false);
  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('article-images').upload(fileName, file);
    if (!error) alert('✅ تم الرفع');
    setUploading(false);
  };
  return (
    <div className="bg-black border border-emerald-900/40 p-5">
      <h3 className="text-xs font-bold text-emerald-500 uppercase mb-4 flex items-center gap-2 justify-end">مكتبة الوسائط <ImageIcon className="w-3.5 h-3.5" /></h3>
      <label className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-600/10 text-emerald-400 border border-emerald-500/30 cursor-pointer text-[10px] font-bold">
        {uploading ? 'جاري الرفع...' : 'رفع صورة جديدة'}
        <input type="file" accept="image/*" onChange={uploadImage} className="hidden" />
      </label>
    </div>
  );
}

function DiagnosticsPanel({ triggerGen }: { triggerGen: any }) {
  return (
    <div className="bg-black border border-zinc-800 p-5">
      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2 text-right">الحالة التقنية</h3>
      <div className="space-y-2 text-[10px] text-right">
        <div className="flex justify-between items-center flex-row-reverse"><span className="text-zinc-500">المحرك</span><span className="text-amber-500">Claude 3.5</span></div>
        <div className="flex justify-between items-center flex-row-reverse"><span className="text-zinc-500">الذكاء الاصطناعي</span><span className="text-emerald-500">نشط</span></div>
      </div>
    </div>
  );
}

