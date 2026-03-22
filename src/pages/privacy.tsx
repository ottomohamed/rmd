import { ShieldCheck, Flag, Heart, Scale, ShieldAlert, CheckCircle2, Moon, Sun } from "lucide-react";
import { usePageTitle } from "@/lib/utils";

export default function PrivacyPolicy() {
  usePageTitle('Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ© ÙˆÙ…ÙŠØ«Ø§Ù‚ Ø§Ù„ØªØ­Ø±ÙŠØ± â€” Ù…ØºØ±Ø¨ 24');

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-right animate-in fade-in duration-1000" dir="rtl">
      {/* ðŸ›ï¸ Ø´Ø¹Ø§Ø± Ø§Ù„Ù…Ù…Ù„ÙƒØ© ÙˆØ§Ù„Ø«ÙˆØ§Ø¨Øª */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
           <Flag className="w-64 h-64 text-emerald-700" />
        </div>
        <div className="inline-block px-6 py-2 bg-emerald-700 text-white rounded-full text-sm font-black mb-6 tracking-[0.3em] shadow-xl shadow-emerald-700/20">
          Ø§Ù„Ù„Ù‡ â€” Ø§Ù„ÙˆØ·Ù† â€” Ø§Ù„Ù…Ù„Ùƒ
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-sans tracking-tighter mb-6 leading-tight">
          Ø§Ù„Ø®Ø· Ø§Ù„ØªØ­Ø±ÙŠØ±ÙŠ <br /> <span className="text-emerald-700">& Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©</span>
        </h1>
        <div className="h-1.5 w-24 bg-gold-500 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto italic">
          "Ù…ØºØ±Ø¨ 24: Ù…Ù†Ø¨Ø± Ù„Ù†Ø´Ø± Ø§Ù„Ù†ÙˆØ± ÙˆØ§Ù„Ø£Ù…Ù„ØŒ ÙˆØµÙˆØª ÙŠØ°ÙˆØ¯ Ø¹Ù† Ù…Ù‚Ø¯Ø³Ø§Øª Ø§Ù„Ù…Ù…Ù„ÙƒØ© ÙˆØ«ÙˆØ§Ø¨ØªÙ‡Ø§."
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* ðŸ“‹ Ù…ÙŠØ«Ø§Ù‚ Ø§Ù„ØªØ­Ø±ÙŠØ± */}
        <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-700"></div>
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-3xl font-black font-sans">Ù…ÙŠØ«Ø§Ù‚Ù†Ø§ Ø§Ù„ØªØ­Ø±ÙŠØ±ÙŠ</h2>
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-emerald-700" />
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ø§Ù„Ø¯ÙØ§Ø¹ Ø¹Ù† Ø§Ù„Ø«ÙˆØ§Ø¨Øª Ø§Ù„ÙˆØ·Ù†ÙŠØ©</h3>
                <p>ØªØ¶Ø¹ "Ù…ØºØ±Ø¨ 24" Ø§Ù„Ø¯ÙØ§Ø¹ Ø¹Ù† Ø«ÙˆØ§Ø¨Øª Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ù…ØºØ±Ø¨ÙŠØ© Ø¹Ù„Ù‰ Ø±Ø£Ø³ Ø£ÙˆÙ„ÙˆÙŠØ§ØªÙ‡Ø§ØŒ ÙˆØ¹Ù„Ù‰ Ø±Ø£Ø³Ù‡Ø§ **Ø§Ù„ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ±Ø§Ø¨ÙŠØ© Ù„Ù„Ù…Ù…Ù„ÙƒØ©**. Ù†Ø­Ù† Ù…Ù†Ø¨Ø± ÙŠØ³Ø®Ø± Ø£Ù‚Ù„Ø§Ù…Ù‡ Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù‚Ø¶Ø§ÙŠØ§ Ø§Ù„ÙˆØ·Ù†ÙŠØ© Ø§Ù„Ø¹Ø§Ø¯Ù„Ø© ÙˆÙ†Ø´Ø± Ø§Ù„ÙˆØ¹ÙŠ Ø¨Ù‚Ø¯Ø³ÙŠØ© Ù‡Ø°Ù‡ Ø§Ù„Ø«ÙˆØ§Ø¨Øª.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ø­Ø±ÙŠØ© Ù…Ø³Ø¤ÙˆÙ„Ø©</h3>
                <p>Ù†Ø¤Ù…Ù† ÙÙŠ Ø¬Ø±ÙŠØ¯ØªÙ†Ø§ Ø£Ù†Ù‡ **Ù„Ø§ ØªÙˆØ¬Ø¯ Ø®Ø·ÙˆØ· Ø­Ù…Ø±Ø§Ø¡** ÙÙŠ Ø§Ù„Ù†Ù‚Ø¯ Ø§Ù„Ø¨Ù†Ø§Ø¡ ÙˆÙƒØ´Ù Ø§Ù„Ø­Ù‚Ø§Ø¦Ù‚ØŒ Ø·Ø§Ù„Ù…Ø§ ÙƒØ§Ù† Ø°Ù„Ùƒ ØªØ­Øª Ø³Ù‚Ù Ø§Ù„Ø«ÙˆØ§Ø¨Øª Ø§Ù„ÙˆØ·Ù†ÙŠØ© ÙˆÙÙŠ Ø¥Ø·Ø§Ø± Ø§Ù„Ø£Ø¯Ø¨ ÙˆØ§Ù„Ø§Ø­ØªØ±Ø§Ù… ÙˆØ§Ù„Ù„ÙŠØ§Ù‚Ø© Ø§Ù„Ø£Ø¯Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ¹Ø§Ø±Ù Ø¹Ù„ÙŠÙ‡Ø§.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ø±Ø³Ø§Ù„Ø© Ø§Ù„Ù†ÙˆØ± ÙˆØ§Ù„Ø£Ù…Ù„</h3>
                <p>Ù†Ø³Ø¹Ù‰ Ù„Ø£Ù† Ù†ÙƒÙˆÙ† Ù…Ù†Ø¨Ø±Ø§Ù‹ ÙŠÙ†Ø´Ø± Ø§Ù„Ù†ÙˆØ± ÙˆÙŠØ¨Ø¹Ø« Ø§Ù„Ø£Ù…Ù„ ÙÙŠ Ù†ÙÙˆØ³ Ø§Ù„Ù…ØºØ§Ø±Ø¨Ø©ØŒ Ø¨Ø¹ÙŠØ¯Ø§Ù‹ Ø¹Ù† ØµØ­Ø§ÙØ© Ø§Ù„Ø¥Ø«Ø§Ø±Ø© Ø§Ù„Ø±Ø®ÙŠØµØ© Ø£Ùˆ Ø²Ø±Ø¹ Ø§Ù„ÙŠØ£Ø³. Ù†Ø­Ù† Ù†Ø¨Ø­Ø« Ø¹Ù† Ø§Ù„Ø¥ÙŠØ¬Ø§Ø¨ÙŠØ© ÙˆÙ†Ø¨Ù†ÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ù†Ø¬Ø²Ø§Øª Ø§Ù„ÙˆØ·Ù†ÙŠØ©.</p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* ðŸ›¡ï¸ Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ© */}
        <section className="bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-3xl font-black font-sans">Ø­Ù…Ø§ÙŠØ© Ø¨ÙŠØ§Ù†Ø§ØªÙƒÙ…</h2>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            <p>ØªÙ„ØªØ²Ù… "Ù…ØºØ±Ø¨ 24" Ø¨Ø­Ù…Ø§ÙŠØ© Ø®ØµÙˆØµÙŠØ© Ø²ÙˆØ§Ø±Ù‡Ø§ ÙˆÙ…Ø³Ø§Ù‡Ù…ÙŠÙ‡Ø§ ÙˆÙÙ‚Ø§Ù‹ Ù„Ù„Ù‚ÙˆØ§Ù†ÙŠÙ† Ø§Ù„Ù…Ø¹Ù…ÙˆÙ„ Ø¨Ù‡Ø§. Ù†Ø­Ù† Ù†Ø¬Ù…Ø¹ ÙÙ‚Ø· Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¶Ø±ÙˆØ±ÙŠØ© Ù„ØªØ­Ø³ÙŠÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙˆØªØ³Ù‡ÙŠÙ„ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ù…Ø³Ø§Ù‡Ù…ÙŠÙ†Ø§ ÙÙŠ Ù‚Ø³Ù… "Ù…Ø³Ø§Ù‡Ù…Ø§Øª Ø§Ù„Ù‚Ø±Ø§Ø¡".</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 justify-end">
                  Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªÙŠ Ù†Ø¬Ù…Ø¹Ù‡Ø§ <ShieldAlert className="w-4 h-4 text-gold-500" />
                </h4>
                <p className="text-sm">Ø§Ù„Ø§Ø³Ù… ÙˆØ§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø¹Ù†Ø¯ Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ù…Ù‚Ø§Ù„Ø§Øª Ø£Ùˆ Ø§Ù„ØªØ¹Ù„ÙŠÙ‚Ø§ØªØŒ Ø¨Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù…Ø¬Ù‡ÙˆÙ„Ø© Ù„ØªØ­Ø³ÙŠÙ† Ø£Ø¯Ø§Ø¡ Ø§Ù„Ù…ÙˆÙ‚Ø¹.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 justify-end">
                   Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª <Scale className="w-4 h-4 text-gold-500" />
                </h4>
                <p className="text-sm">Ù„Ø§ Ù†Ù‚ÙˆÙ… Ø¨Ø¨ÙŠØ¹ Ø£Ùˆ Ù…Ø´Ø§Ø±ÙƒØ© Ø¨ÙŠØ§Ù†Ø§ØªÙƒÙ… Ø§Ù„Ø´Ø®ØµÙŠØ© Ù…Ø¹ Ø£ÙŠ Ø·Ø±Ù Ø«Ø§Ù„Ø« Ù„Ø£ØºØ±Ø§Ø¶ ØªØ¬Ø§Ø±ÙŠØ© Ø¥Ø·Ù„Ø§Ù‚Ø§Ù‹.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-8">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em] font-bold">
            Ù…ØºØ±Ø¨ 24 â€” Ù…Ø¤Ø³Ø³Ø© Ø¥Ø¹Ù„Ø§Ù…ÙŠØ© Ù…Ø³ØªÙ‚Ù„Ø© Ø®Ø§Ø¶Ø¹Ø© Ù„Ù„Ù‚Ø§Ù†ÙˆÙ† Ø§Ù„Ù…ØºØ±Ø¨ÙŠ
          </p>
        </div>
      </div>
    </div>
  );
}

