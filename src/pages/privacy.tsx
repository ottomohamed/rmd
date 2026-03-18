import { ShieldCheck, Flag, Heart, Scale, ShieldAlert, CheckCircle2, Moon, Sun } from "lucide-react";
import { usePageTitle } from "@/lib/utils";

export default function PrivacyPolicy() {
  usePageTitle('سياسة الخصوصية وميثاق التحرير — مغرب 24');

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-right animate-in fade-in duration-1000" dir="rtl">
      {/* 🏛️ شعار المملكة والثوابت */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
           <Flag className="w-64 h-64 text-emerald-700" />
        </div>
        <div className="inline-block px-6 py-2 bg-emerald-700 text-white rounded-full text-sm font-black mb-6 tracking-[0.3em] shadow-xl shadow-emerald-700/20">
          الله — الوطن — الملك
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-sans tracking-tighter mb-6 leading-tight">
          الخط التحريري <br /> <span className="text-emerald-700">& سياسة الخصوصية</span>
        </h1>
        <div className="h-1.5 w-24 bg-gold-500 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto italic">
          "مغرب 24: منبر لنشر النور والأمل، وصوت يذود عن مقدسات المملكة وثوابتها."
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* 📋 ميثاق التحرير */}
        <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-700"></div>
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-3xl font-black font-sans">ميثاقنا التحريري</h2>
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-emerald-700" />
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">الدفاع عن الثوابت الوطنية</h3>
                <p>تضع "مغرب 24" الدفاع عن ثوابت المملكة المغربية على رأس أولوياتها، وعلى رأسها **الوحدة الترابية للمملكة**. نحن منبر يسخر أقلامه لخدمة القضايا الوطنية العادلة ونشر الوعي بقدسية هذه الثوابت.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">حرية مسؤولة</h3>
                <p>نؤمن في جريدتنا أنه **لا توجد خطوط حمراء** في النقد البناء وكشف الحقائق، طالما كان ذلك تحت سقف الثوابت الوطنية وفي إطار الأدب والاحترام واللياقة الأدبية المتعارف عليها.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">رسالة النور والأمل</h3>
                <p>نسعى لأن نكون منبراً ينشر النور ويبعث الأمل في نفوس المغاربة، بعيداً عن صحافة الإثارة الرخيصة أو زرع اليأس. نحن نبحث عن الإيجابية ونبني على المنجزات الوطنية.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* 🛡️ سياسة الخصوصية */}
        <section className="bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-3xl font-black font-sans">حماية بياناتكم</h2>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            <p>تلتزم "مغرب 24" بحماية خصوصية زوارها ومساهميها وفقاً للقوانين المعمول بها. نحن نجمع فقط البيانات الضرورية لتحسين تجربة المستخدم وتسهيل التواصل مع مساهمينا في قسم "مساهمات القراء".</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 justify-end">
                  البيانات التي نجمعها <ShieldAlert className="w-4 h-4 text-gold-500" />
                </h4>
                <p className="text-sm">الاسم والبريد الإلكتروني عند إرسال المقالات أو التعليقات، بالإضافة إلى البيانات التقنية المجهولة لتحسين أداء الموقع.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 justify-end">
                   مشاركة البيانات <Scale className="w-4 h-4 text-gold-500" />
                </h4>
                <p className="text-sm">لا نقوم ببيع أو مشاركة بياناتكم الشخصية مع أي طرف ثالث لأغراض تجارية إطلاقاً.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-8">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em] font-bold">
            مغرب 24 — مؤسسة إعلامية مستقلة خاضعة للقانون المغربي
          </p>
        </div>
      </div>
    </div>
  );
}
