import { useState, useRef, useEffect } from "react";
import { useSubmitMAGHREB24Article, useRequestUploadUrl } from "@workspace/api-client-react";
import { CheckCircle, Upload, AlertTriangle, Loader2, User, FileText, Send, Sparkles } from "lucide-react";
import { cn, usePageTitle } from "@/lib/utils";

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
  const submitArticle = useSubmitMAGHREB24Article();

  // تنظيف روابط الصور عند تغيير الصورة أو تفكيك المكون
  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

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
          { onSuccess: resolve, onError: reject }
        );
      });

      await fetch(result.uploadURL, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (photoPreview) URL.revokeObjectURL(photoPreview); // تنظيف الرابط السابق
      setPhotoPreview(URL.createObjectURL(file));
      setPhotoUrl(result.objectPath);
    } catch {
      setUploadError("فشل تحميل الصورة. حاول مرة أخرى.");
    } finally {
      setUploadingPhoto(false);
    }
  };

  const countWords = (text: string) =>
    text
      .trim()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()؟،«»…]/g, "")
      .split(/\s+/)
      .filter(Boolean).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!authorName.trim() || !authorEmail.trim() || !title.trim() || !body.trim()) {
      setFormError("يرجى ملء جميع الحقول المطلوبة (*)");
      return;
    }

    const words = countWords(body);
    if (words < 100) {
      setFormError(`مقالك قصير جداً (${words} كلمة). يجب ألا يقل عن 100 كلمة للمرجعية.`);
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
        onSuccess: (data: { id: number }) => {
          setSubmissionId(data.id);
          setStep("success");
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        onError: () => setFormError("فشل الإرسال بسبب خطأ تقني. حاول مرة أخرى."),
      }
    );
  };

  const wordCount = countWords(body);

  if (step === "success") {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center" dir="rtl">
        <div className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-4xl font-black mb-6">وصلنا مقالك بنجاح!</h1>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          شكراً لمساهمتك في "مغرب 24". سيتم فحص التحري بالمرجعية بدقة، وسنتواصل معك عند الحاجة.
        </p>
        <div className="bg-gray-50 p-4 rounded-xl mb-12">
          <p className="text-xs text-gray-400 uppercase mb-1">رقم مرجع المساهمة</p>
          <p className="font-mono text-xl font-bold text-emerald-700">#M24-{submissionId?.toString().padStart(5, "0")}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="px-10 py-4 bg-emerald-700 text-white rounded-xl font-bold text-sm">العودة للرئيسية</a>
          <button
            onClick={() => {
              setStep("form");
              setBody(""); setTitle(""); setAuthorName(""); setAuthorEmail(""); setAuthorBio("");
              if (photoPreview) { URL.revokeObjectURL(photoPreview); setPhotoPreview(""); }
              setPhotoUrl("");
            }}
            className="px-10 py-4 border-2 rounded-xl text-sm"
          >
            إرسال موضوع آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-right" dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* ... بقية الحقول كما هي ... */}
        <div>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={10}
            placeholder="اكتب مقالك هنا..."
            className="w-full border rounded-xl p-4 resize-none"
          />
          <span>{wordCount} كلمة {wordCount < 100 && "(أقل من الحد الأدنى)"}</span>
        </div>

        <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer border p-4 rounded-xl flex items-center gap-4">
          {photoPreview ? <img src={photoPreview} className="w-12 h-12 rounded-full" /> : <Upload />}
          <input type="file" ref={fileInputRef} accept="image/*" hidden onChange={handlePhotoUpload} />
        </div>
        {uploadError && <p className="text-red-500">{uploadError}</p>}

        <button type="submit" disabled={submitArticle.isPending || uploadingPhoto} className="w-full py-5 bg-emerald-700 text-white rounded-xl">
          {submitArticle.isPending ? "جاري الإقديم..." : "إرسال المقال"}
        </button>
      </form>
    </div>
  );
}