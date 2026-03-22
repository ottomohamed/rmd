'use client';

import { useState, useRef } from "react";
import { useSubmitMAROC24Article, useRequestUploadUrl } from "@workspace/api-client-react";
import { CheckCircle, Upload, Loader2, FileText, User, Send, Sparkles, AlertTriangle } from "lucide-react";
import { cn, usePageTitle } from "@/lib/utils";
import Link from "next/link";

const SECTIONS = [
  { value: "politics", label: "سياسة", color: "bg-blue-600" },
  { value: "economics", label: "اقتصاد", color: "bg-amber-500" },
  { value: "sports", label: "رياضة", color: "bg-emerald-600" },
  { value: "society", label: "مجتمع", color: "bg-rose-500" },
  { value: "culture", label: "ثقافة", color: "bg-violet-500" },
  { value: "editorial", label: "رأي / وجهة نظر", color: "bg-zinc-700" },
];

type Step = "form" | "success";

export default function SubmitArticle() {
  usePageTitle('أرسل مقالك — مساهمات القراء');
  const [step, setStep] = useState<Step>("form");
  const [submissionId, setSubmissionId] = useState<number | null>(null);

  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [section, setSection] = useState("editorial");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [formError, setFormError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const requestUpload = useRequestUploadUrl();
  const submitArticle = useSubmitMAROC24Article();

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setUploadError("يرجى اختيار ملف صورة.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("يجب أن تكون الصورة أقل من 5 ميجابايت.");
      return;
    }
    setUploadError("");
    setUploadingPhoto(true);
    try {
      const result = await new Promise<{ uploadURL: string; objectPath: string }>((resolve, reject) => {
        requestUpload.mutate(
          { data: { contentType: file.type, name: file.name, size: file.size } },
          {
            onSuccess: (data: { uploadURL: string; objectPath: string; }) => resolve(data),
            onError: (err: Error) => reject(err),
          }
        );
      });
      await fetch(result.uploadURL, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });
      const publicUrl = result.objectPath;
      setPhotoUrl(publicUrl);
      setPhotoPreview(URL.createObjectURL(file));
      setUploadError("");
    } catch {
      setUploadError("فشل تحميل الصورة. يمكنك الاستمرار في الإرسال بدون صورة.");
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!authorName.trim() || !authorEmail.trim() || !title.trim() || !body.trim()) {
      setFormError("يرجى ملء جميع الحقول المطلوبة التي تحمل علامة (*)");
      return;
    }

    const words = body.trim().split(/\s+/).length;
    if (words < 100) {
      setFormError(`مقالتك قصيرة جداً (${words} كلمة). يجب أن لا تقل عن 100 كلمة لمراجعتها.`);
      return;
    }

    submitArticle.mutate(
      {
        data: {
          authorName: authorName.trim(),
          authorEmail: authorEmail.trim(),
          authorBio: authorBio.trim() || undefined,
          authorPhotoUrl: photoUrl || undefined,
          title: title.trim(),
          body: body.trim(),
          section: section as any,
        },
      },
      {
        onSuccess: (data: { id: number; }) => {
          setSubmissionId(data.id);
          setStep("success");
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        onError: (err: Error) => {
          setFormError("فشل الإرسال بسبب خطأ تقني. يرجى مراجعة اتصالك والمحاولة مرة أخرى.");
        },
      }
    );
  };

  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0;

  if (step === "success") {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center animate-in fade-in zoom-in duration-500" dir="rtl">
        <div className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-emerald-100 dark:bg-emerald-950/30 rounded-full">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-sans mb-6">وصلنا مقالك بنجاح!</h1>
        <p className="text-gray-500 dark:text-gray-400 font-sans text-xl leading-relaxed mb-8 max-w-xl mx-auto text-center">
          شكراً لمساهمتك في "مغرب 24". سيقوم فريق التحرير بمراجعة المحتوى بدقة، وسنتواصل معك عبر البريد الإلكتروني فور اتخاذ قرار النشر.
        </p>
        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-4 rounded-xl inline-block mb-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">رقم مرجع المساهمة</p>
          <p className="font-mono text-xl font-bold text-emerald-700">#M24-{submissionId?.toString().padStart(5, "0")}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-10 py-4 bg-emerald-700 text-white rounded-xl font-bold text-sm hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20">
            العودة للرئيسية
          </Link>
          <button
            onClick={() => { setStep("form"); setBody(""); setTitle(""); setAuthorName(""); setAuthorEmail(""); setAuthorBio(""); setPhotoUrl(""); setPhotoPreview(""); }}
            className="px-10 py-4 border-2 border-gray-200 dark:border-slate-800 font-bold rounded-xl text-sm hover:bg-gray-50 dark:hover:bg-slate-900 transition-all text-gray-900 dark:text-white"
          >
            إرسال موضوع آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-right animate-in fade-in duration-700" dir="rtl">
      <div className="relative mb-16">
        <div className="absolute -right-8 top-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="flex items-center gap-2 text-emerald-600 mb-4 justify-end font-bold text-xs uppercase tracking-[0.2em]">
          <span>شاركنا رأيك وخبرك</span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-sans tracking-tighter mb-6 leading-[1.1] text-gray-900 dark:text-white">
          أرسل مقالك إلى <br />
          <span className="text-emerald-700">مغرب 24</span>
        </h1>
        <p className="font-sans text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl ml-auto text-right">
          نحن في "مغرب 24" نؤمن بأن الحقيقة ملك للجميع. إذا كان لديك تحليل عميق، أو خبر حصري، أو وجهة نظر تستحق المشاركة، فنحن نفتح لك مساحة احترافية للنشر.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-12">
            <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm text-right">
              <div className="flex items-center gap-3 mb-8 justify-end">
                <h2 className="text-2xl font-black font-sans text-gray-900 dark:text-white">تفاصيل المقال</h2>
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              <div className="space-y-8">
               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 text-right">القسم المفضل</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SECTIONS.map(s => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setSection(s.value)}
                        className={cn(
                          "py-3 px-4 rounded-xl text-xs font-bold transition-all border-2 text-center",
                          section === s.value
                            ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700"
                            : "border-gray-100 dark:border-slate-800 hover:border-gray-200 dark:hover:border-slate-700 text-gray-600 dark:text-gray-400"
                        )}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 text-right">العنوان *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    maxLength={150}
                    placeholder="ضع عنواناً جذاباً لموضوعك..."
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-emerald-700/5 focus:border-emerald-700 transition-all text-right text-gray-900 dark:text-white"
                  />
                  <div className="flex justify-between mt-2 px-1">
                    <span className="text-[10px] text-gray-400 font-mono">{title.length} / 150</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3 flex-row-reverse">
                    <span className={cn(
                      "text-[10px] font-bold py-1 px-3 rounded-full",
                      wordCount < 100 ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                    )}>
                      {wordCount} كلمة {wordCount < 100 && "(أقل من الحد الأدنى)"}
                    </span>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 text-right">نص المقال *</label>
                  </div>
                  <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    rows={15}
                    placeholder="ابدأ بكتابة موضوعك هنا بأسلوب رصين ومحترف..."
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-base leading-relaxed focus:outline-none focus:ring-4 focus:ring-emerald-700/5 focus:border-emerald-700 transition-all resize-none text-right text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm text-right">
              <div className="flex items-center gap-3 mb-8 justify-end">
                <h2 className="text-2xl font-black font-sans text-gray-900 dark:text-white">معلومات الكاتب</h2>
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 text-right">الاسم الكامل *</label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-emerald-700 transition-all text-right text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 text-right">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    value={authorEmail}
                    onChange={e => setAuthorEmail(e.target.value)}
                    placeholder="contact@example.com"
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-emerald-700 transition-all text-right text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 text-right">نبذة قصيرة</label>
                <textarea
                  value={authorBio}
                  onChange={e => setAuthorBio(e.target.value)}
                  rows={2}
                  maxLength={200}
                  className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 rounded-2xl px-6 py-3 text-sm focus:outline-none focus:border-emerald-700 transition-all resize-none text-right text-gray-900 dark:text-white"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 dark:border-slate-800">
                <div
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-slate-700 cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/10 transition-all flex-row-reverse"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex items-center gap-4 flex-row-reverse">
                    {photoPreview ? (
                      <img src={photoPreview} className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-700/20" alt="" />
                    ) : (
                      <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-400 group-hover:text-emerald-700 transition-colors">
                        {uploadingPhoto ? <Loader2 className="w-6 h-6 animate-spin" /> : <Upload className="w-6 h-6" />}
                      </div>
                    )}
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{photoPreview ? "تم تحميل الصورة" : "أرفق صورة شخصية"}</p>
                      <p className="text-[10px] text-gray-400 uppercase">اختياري — ستظهر بجانب اسمك كمؤلف</p>
                    </div>
                  </div>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                </div>
                {uploadError && <p className="text-[10px] text-red-500 mt-2 text-center">{uploadError}</p>}
              </div>
            </section>

            {formError && (
              <div className="flex items-center gap-3 p-5 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-red-600 rounded-2xl flex-row-reverse">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-bold">{formError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitArticle.isPending || uploadingPhoto}
              className="w-full py-5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-emerald-700/20 flex items-center justify-center gap-3 group disabled:opacity-50 flex-row-reverse"
            >
              {submitArticle.isPending ? (
                <><Loader2 className="w-6 h-6 animate-spin" /> جاري التقديم...</>
              ) : (
                <>إرسال المقال للمراجعة <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>

        <div className="space-y-8 order-1 lg:order-2 text-right">
          <div className="bg-emerald-700 text-white p-8 rounded-3xl shadow-xl shadow-emerald-700/20">
            <h3 className="text-xl font-black mb-6 text-right">قواعد النشر</h3>
            <ul className="space-y-5">
              {[
                "أن يكون المحتوى أصلياً وغير منقول.",
                "ألا يقل النص عن 100 كلمة.",
                "الالتزام بالحياد والموضوعية.",
                "ألا يتضمن إساءة أو قذفاً.",
                "إرفاق مصادر الأخبار إن وُجدت."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-sm font-medium leading-relaxed opacity-90 flex-row-reverse text-right">
                  <span className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border-2 border-dashed border-gray-100 dark:border-slate-800 rounded-3xl">
            <h3 className="text-lg font-black mb-4 flex items-center gap-2 justify-end text-gray-900 dark:text-white">
              ماذا يحدث بعد الإرسال؟
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-right">
              بمجرد ضغطك على زر الإرسال، يصل مقالك إلى نظام المراجعة لدينا. يقوم المحررون بقراءته والتأكد من توافقه مع معايير "مغرب 24". إذا تمت الموافقة، ستتلقى رسالة تأكيد ويُنشر المقال باسمك في قسم "مساهمات القراء".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

