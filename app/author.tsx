'use client';

import { useState, useEffect } from "react";
import { Loader2, Send, CheckCircle } from "lucide-react";

const DRAFT_KEY = "article_draft";

export default function SubmitArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ حساب الكلمات
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  // ✅ وقت القراءة (تقريباً 200 كلمة/دقيقة)
  const readingTime = Math.ceil(wordCount / 200);

  // ✅ تحميل المسودة
  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      const d = JSON.parse(saved);
      setTitle(d.title || "");
      setContent(d.content || "");
      setAuthor(d.author || "");
      setEmail(d.email || "");
    }
  }, []);

  // ✅ حفظ تلقائي (debounce)
  useEffect(() => {
    const t = setTimeout(() => {
      const draft = { title, content, author, email };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    }, 500);

    return () => clearTimeout(t);
  }, [title, content, author, email]);

  // ✅ إرسال
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !content || !author || !email) {
      alert("⚠️ المرجو ملء جميع الحقول");
      return;
    }

    if (wordCount < 100) {
      alert("⚠️ المقال يجب أن يحتوي على 100 كلمة على الأقل");
      return;
    }

    try {
      setLoading(true);

      // 🔥 هنا تضع API الحقيقي
      await new Promise((r) => setTimeout(r, 1500));

      setSuccess(true);
      localStorage.removeItem(DRAFT_KEY);

    } catch (err) {
      alert("❌ حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  };

  // ✅ شاشة النجاح
  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h1 className="text-3xl font-bold">تم إرسال مقالك بنجاح 🎉</h1>
        <p className="text-muted-foreground">
          سيتم مراجعته من طرف فريق التحرير قريباً
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      <h1 className="text-4xl font-black text-center">
        ✍️ أرسل مقالك إلى مغرب 24
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* 📝 النموذج */}
        <div className="lg:col-span-2 space-y-6">

          <input
            type="text"
            placeholder="عنوان المقال"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-4 rounded-xl text-xl font-bold"
          />

          <textarea
            placeholder="اكتب مقالك هنا..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={12}
            className="w-full border p-4 rounded-xl text-lg"
          />

          {/* 📊 إحصائيات */}
          <div className="flex justify-between text-sm">
            <span className={wordCount < 100 ? "text-red-500" : "text-green-600"}>
              {wordCount} كلمة
            </span>
            <span>⏱ {readingTime} دقيقة قراءة</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="اسم الكاتب"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send />}
            {loading ? "جارٍ الإرسال..." : "إرسال المقال"}
          </button>

        </div>

        {/* 📌 الجانب */}
        <div className="space-y-6">

          <div className="p-6 border rounded-xl space-y-3">
            <h2 className="font-bold text-lg">📌 قواعد النشر</h2>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>✔ الحد الأدنى 100 كلمة</li>
              <li>✔ محتوى أصلي وغير منسوخ</li>
              <li>✔ احترام القوانين</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl space-y-3">
            <h2 className="font-bold text-lg">💡 نصيحة</h2>
            <p className="text-sm text-muted-foreground">
              اكتب بأسلوب بسيط ومباشر، وركز على فكرة واحدة واضحة.
            </p>
          </div>

        </div>
      </form>
    </div>
  );
}