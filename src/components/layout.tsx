import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, Search, X, ChevronLeft, PenLine } from "lucide-react";
import { useTheme } from "next-themes";
import { BreakingNewsTicker } from "./breaking-news-ticker";
import { useState, useEffect } from "react";

// Social media icon components (lucide doesn't include brand icons)
function SocialIcon({ letter, className }: { letter: string; className?: string }) {
  return <span className={cn("w-4 h-4 flex items-center justify-center text-[10px] font-black", className)}>{letter}</span>;
}
const Facebook = ({ className }: { className?: string }) => <SocialIcon letter="f" className={className} />;
const Twitter = ({ className }: { className?: string }) => <SocialIcon letter="𝕏" className={className} />;
const Instagram = ({ className }: { className?: string }) => <SocialIcon letter="◎" className={className} />;
const Youtube = ({ className }: { className?: string }) => <SocialIcon letter="▶" className={className} />;

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const currentTheme = theme || "light";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for masthead collapse
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false); setSearchOpen(false); }, [location]);

  const sections = [
    { name: "الرئيسية", href: "/" },
    { name: "سياسة", href: "/section/politics", color: "text-blue-600 dark:text-blue-400" },
    { name: "اقتصاد", href: "/section/economics", color: "text-amber-600 dark:text-amber-400" },
    { name: "رياضة", href: "/section/sports", color: "text-green-600 dark:text-green-400" },
    { name: "حوادث", href: "/section/incidents", color: "text-red-600 dark:text-red-400", urgent: true },
    { name: "مجتمع", href: "/section/society", color: "text-purple-600 dark:text-purple-400" },
    { name: "ثقافة", href: "/section/culture", color: "text-orange-600 dark:text-orange-400" },
  ];

  if (location === "/newsroom") {
    return <>{children}</>;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString("ar-MA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-300" dir="rtl">
      
      {/* ─── Top Info Bar ─── */}
      <div className="bg-emerald-950 text-emerald-100 py-1.5 text-xs border-b border-emerald-900 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="font-bold text-emerald-300/80">{dateStr}</span>
            <span className="text-emerald-700">|</span>
            <span className="text-emerald-400/60 tracking-wider">مؤسسة إعلامية مغربية مستقلة</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold-500 transition" title="فيسبوك"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-gold-500 transition" title="تويتر"><Twitter className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-gold-500 transition" title="إنستغرام"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-gold-500 transition" title="يوتيوب"><Youtube className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* ─── Masthead / Newspaper Title ─── */}
      <div className={cn(
        "bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-all duration-500 overflow-hidden",
        scrolled ? "max-h-0 py-0 opacity-0" : "max-h-60 py-6 md:py-8 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-block group">
            {/* Decorative top line */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16 bg-gradient-to-l from-gold-500 to-transparent"></div>
              <span className="text-[10px] font-black text-gold-500 uppercase tracking-[0.4em]">منذ 2024 — على مدار الساعة</span>
              <div className="h-px w-16 bg-gradient-to-r from-gold-500 to-transparent"></div>
            </div>
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none select-none">
              <span className="text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-700 transition-colors duration-300">مغرب</span>
              <span className="relative mx-1">
                <span className="text-gold-500 group-hover:text-gold-600 transition-colors duration-300">24</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </span>
            </h1>
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-0.5 w-8 bg-emerald-700 dark:bg-emerald-500 rounded-full"></div>
              <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]">
                جريدة إلكترونية مغربية — نبض المغرب على مدار الساعة
              </p>
              <div className="h-0.5 w-8 bg-emerald-700 dark:bg-emerald-500 rounded-full"></div>
            </div>
          </Link>
        </div>
      </div>

      {/* ─── Sticky Navigation ─── */}
      <nav className={cn(
        "sticky top-0 z-50 backdrop-blur-xl transition-all duration-300",
        scrolled 
          ? "bg-white/95 dark:bg-slate-900/95 shadow-lg border-b border-gray-100 dark:border-slate-800" 
          : "bg-white dark:bg-slate-900 border-b-4 border-emerald-700 dark:border-emerald-600"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Compact Logo (visible when scrolled) */}
            <div className={cn("transition-all duration-300 flex-shrink-0", scrolled ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden")}>
              <Link href="/" className="flex items-center gap-1">
                <span className="text-xl font-black text-emerald-700 dark:text-emerald-400 tracking-tighter">مغرب</span>
                <span className="text-xl font-black text-gold-500">24</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-reverse space-x-1 flex-1 justify-center">
              {sections.map((section) => (
                <Link
                  key={section.name}
                  href={section.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200",
                    location === section.href 
                      ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20" 
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800",
                    section.urgent && location !== section.href ? "text-red-600 dark:text-red-400" : ""
                  )}
                >
                  {section.urgent && <span className="text-[8px] ml-1">🔴</span>}
                  {section.name}
                </Link>
              ))}
            </div>

            {/* Utility Icons */}
            <div className="flex items-center gap-2">
              <Link href="/submit" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-all ml-2">
                <PenLine className="w-3.5 h-3.5" />
                أرسل مقالك
              </Link>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-emerald-700 transition-all"
                title="بحث"
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gold-500 transition-all"
                title="تبديل الوضع"
              >
                {currentTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ─── Search Bar (Expandable) ─── */}
        <div className={cn(
          "overflow-hidden transition-all duration-300 border-t border-gray-100 dark:border-slate-800",
          searchOpen ? "max-h-20 py-3" : "max-h-0 py-0"
        )}>
          <div className="max-w-2xl mx-auto px-4">
            <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) window.location.href = `/section/politics?q=${searchQuery}`; }} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في مغرب 24..."
                className="w-full py-3 px-5 pr-12 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all text-right"
                autoFocus={searchOpen}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
          </div>
        </div>

        {/* ─── Mobile Menu ─── */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900",
          mobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
        )}>
          <div className="px-4 pt-2 space-y-1">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className={cn(
                  "flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold transition-all",
                  location === section.href 
                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400" 
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800",
                  section.urgent && location !== section.href ? "text-red-600" : ""
                )}
              >
                <span>{section.name}</span>
                <ChevronLeft className="w-4 h-4 opacity-30" />
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 dark:border-slate-800">
              <Link href="/submit" className="flex items-center justify-center gap-2 py-3 bg-emerald-700 text-white rounded-xl font-bold text-sm">
                أرسل مقالك
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <BreakingNewsTicker />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>

      {/* ─── Professional Footer ─── */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white pt-16 pb-8 mt-12 border-t-4 border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <span className="text-4xl font-black tracking-tighter">
                  <span className="text-white">مغرب</span>{" "}
                  <span className="text-gold-500">24</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">
                مؤسسة إعلامية مغربية مستقلة تقدم الخبر بمهنية وحياد على مدار الساعة، تغطي الشأن المحلي والدولي بلمسة حضارية.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Facebook, label: "فيسبوك" },
                  { icon: Twitter, label: "تويتر" },
                  { icon: Instagram, label: "إنستغرام" },
                  { icon: Youtube, label: "يوتيوب" },
                ].map(({ icon: Icon, label }) => (
                  <a key={label} href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-emerald-700 flex items-center justify-center transition-all hover:-translate-y-0.5" title={label}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-black mb-6 border-r-4 border-gold-500 pr-3 uppercase tracking-widest text-gray-300">روابط سريعة</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-gold-500 transition-colors">الصفحة الرئيسية</Link></li>
                <li><Link href="/submit" className="hover:text-gold-500 transition-colors">أرسل مقالاً</Link></li>
                <li><Link href="/privacy" className="hover:text-gold-500 transition-colors">سياسة الخصوصية</Link></li>
                <li><Link href="/privacy" className="hover:text-gold-500 transition-colors">ميثاق التحرير</Link></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>

            {/* Sections */}
            <div>
              <h4 className="text-sm font-black mb-6 border-r-4 border-gold-500 pr-3 uppercase tracking-widest text-gray-300">الأقسام</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {sections.slice(1).map(s => (
                  <li key={s.name}>
                    <Link href={s.href} className="hover:text-gold-500 transition-colors">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-black mb-6 border-r-4 border-gold-500 pr-3 uppercase tracking-widest text-gray-300">النشرة البريدية</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">اشترك لتصلك الأخبار العاجلة وأهم التحليلات صباح كل يوم.</p>
              <form className="space-y-2">
                <input className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors" placeholder="بريدك الإلكتروني" type="email" />
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all active:scale-95">
                  اشتراك
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} مغرب 24. جميع الحقوق محفوظة.</p>
            <p className="text-gray-600 text-xs tracking-wider">صُنع بـ ❤️ في المغرب</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
