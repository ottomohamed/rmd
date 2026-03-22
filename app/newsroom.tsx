import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  useGetMAGHREB24Newsroom,
  useTriggerMAGHREB24Generation,
  useMAGHREB24NewsroomDiscuss,
  useListMAGHREB24Submissions,
  useApproveMAGHREB24Submission,
  useRejectMAGHREB24Submission,
  useAnalyzeMAGHREB24Trends,
  useGetMAGHREB24TrendsLatest
} from "@workspace/api-client-react";
import {
  Loader2, Terminal, Activity, Send, Mic, Crosshair, TrendingUp, BarChart2, Eye, Zap, ChevronUp, ChevronDown, Inbox, Trash2, Plus, ToggleLeft, ToggleRight, AlertCircle
} from "lucide-react";
import { JOURNALISTS } from './journalists'; // استوردت بيانات الصحفيين من ملف منفصل
import { useBreakingNews } from '@/hooks/use-breaking-news';
import { formatDateTime } from '@/lib/utils';

// ===== JWT AUTH =====
function useAuth() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('newsroom_jwt');
    if (storedToken) {
      setAuth(true);
      setToken(storedToken);
    }
  }, []);

  const login = (jwt: string) => {
    sessionStorage.setItem('newsroom_jwt', jwt);
    setToken(jwt);
    setAuth(true);
  };

  const logout = () => {
    sessionStorage.removeItem('newsroom_jwt');
    setToken(null);
    setAuth(false);
  };

  return { auth, token, login, logout };
}

// ===== LOGIN COMPONENT =====
export function NewsroomLogin({ onLogin }: { onLogin: (token: string) => void }) {
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // استدعاء endpoint JWT على السيرفر للتحقق
      const res = await fetch('/api/newsroom/login', {
        method: 'POST',
        body: JSON.stringify({ password: pass }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (data.token) {
        onLogin(data.token);
        setError('');
      } else {
        setError('كلمة المرور غير صحيحة');
      }
    } catch (err) {
      setError('خطأ في الاتصال بالسيرفر');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-emerald-500" dir="rtl">
      <form onSubmit={handleLogin} className="p-8 bg-black/80 border border-emerald-900/50 backdrop-blur-md">
        <h1 className="text-2xl font-bold mb-4">دخول مكتب الأخبار</h1>
        <input
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder="أدخل كلمة المرور"
          className="w-full mb-4 p-2 bg-black border-b border-emerald-800 text-emerald-400"
          autoFocus
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button type="submit" className="w-full py-2 bg-emerald-600/10 text-emerald-500 font-bold">تسجيل الدخول</button>
      </form>
    </div>
  );
}

// ===== NEWSROOM DASHBOARD =====
export default function Newsroom() {
  const { auth, login } = useAuth();

  if (!auth) return <NewsroomLogin onLogin={login} />;
  return <NewsroomDashboard />;
}

function NewsroomDashboard() {
  const queryClient = useQueryClient();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ===== Queries =====
  const { data: logs = [], isLoading: logsLoading, refetch: refetchLogs } = useGetMAGHREB24Newsroom({ limit: 100 });
  const { data: trendLogsData = [] } = useGetMAGHREB24TrendsLatest({});
  const { data: submissionsData = [], isLoading: submissionsLoading } = useListMAGHREB24Submissions({ adminKey: 'meridian2024' });

  // ===== Mutations =====
  const triggerGen = useTriggerMAGHREB24Generation();
  const discuss = useMAGHREB24NewsroomDiscuss();
  const approve = useApproveMAGHREB24Submission();
  const reject = useRejectMAGHREB24Submission();
  const analyze = useAnalyzeMAGHREB24Trends();

  // ===== Local States =====
  const [publisherMsg, setPublisherMsg] = useState('');
  const [discussing, setDiscussing] = useState(false);
  const [selectedJournalist, setSelectedJournalist] = useState('');
  const [topicHint, setTopicHint] = useState('');
  const [briefSent, setBriefSent] = useState(false);

  // ===== Scrolling new messages =====
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // ===== Handlers =====
  const handleTrigger = () => {
    triggerGen.mutate({ data: { adminKey: 'meridian2024' } }, { onSuccess: () => refetchLogs() });
  };

  const handleDiscuss = (e: React.FormEvent) => {
    e.preventDefault();
    if (!publisherMsg.trim()) return;
    setDiscussing(true);
    discuss.mutate({ data: { adminKey: 'meridian2024', message: publisherMsg } }, {
      onSuccess: () => { refetchLogs(); setPublisherMsg(''); setDiscussing(false); },
      onError: () => setDiscussing(false),
    });
  };

  const handleBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicHint.trim()) return;
    triggerGen.mutate({ data: { adminKey: 'meridian2024', authorSlug: selectedJournalist || undefined, topicHint } }, {
      onSuccess: () => { setBriefSent(true); setTopicHint(''); refetchLogs(); setTimeout(() => setBriefSent(false), 4000); },
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 p-6" dir="rtl">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={handleTrigger} disabled={triggerGen.isPending} className="px-4 py-2 bg-emerald-600/10 text-emerald-500 border">توليد الأخبار</button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Logs Panel */}
        <div className="lg:col-span-2 flex flex-col bg-black border border-zinc-800 h-[600px]">
          <div className="border-b p-3 flex justify-between items-center">
            <span>نشاط غرفة الأخبار</span>
            <Terminal className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {logsLoading ? <Loader2 className="animate-spin" /> : logs.map((log: any) => (
              <div key={log.id} className="bg-zinc-900/50 p-3 border border-zinc-800">
                <div className="flex justify-between text-[10px] text-zinc-500"><span>{log.author}</span><span>{formatDateTime(log.createdAt)}</span></div>
                <div>{log.message}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleDiscuss} className="border-t p-3 flex gap-2 bg-zinc-950/50">
            <input value={publisherMsg} onChange={e => setPublisherMsg(e.target.value)} placeholder="اكتب رسالة" className="flex-1 p-2 bg-transparent border-none" />
            <button type="submit" disabled={discussing || !publisherMsg.trim()} className="px-3 bg-amber-600/10 text-amber-500">{discussing ? <Loader2 className="animate-spin" /> : 'إرسال'}</button>
          </form>
        </div>

        {/* Sidebar Panels */}
        <div className="space-y-6">
          {/* Briefing Panel */}
          <div className="bg-black border p-4">
            <select value={selectedJournalist} onChange={e => setSelectedJournalist(e.target.value)} className="w-full p-2 mb-2 bg-zinc-900 border border-zinc-800">
              <option value="">كل الصحفيين</option>
              {JOURNALISTS.map(j => <option key={j.slug} value={j.slug}>{j.name} - {j.beat}</option>)}
            </select>
            <form onSubmit={handleBrief}>
              <textarea value={topicHint} onChange={e => setTopicHint(e.target.value)} rows={3} placeholder="أدخل الموضوع" className="w-full p-2 bg-zinc-900 border border-zinc-800 mb-2" />
              <button type="submit" disabled={triggerGen.isPending || !topicHint.trim()} className="w-full py-2 bg-emerald-600/10 text-emerald-500">{briefSent ? 'تم الإرسال' : 'إرسال'}</button>
            </form>
          </div>
          {/* يمكن إضافة باقي اللوحات بنفس النمط: TrendIntelPanel, StatsDashboard, BreakingNewsPanel, SubmissionsPanel ... */}
        </div>
      </div>
    </div>
  );
}
