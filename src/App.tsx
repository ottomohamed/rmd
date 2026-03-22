import React, { Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/components/layout";
import { Loader2 } from "lucide-react";

// Lazy-load ØµÙØ­Ø§Øª Ø§Ù„Ù…ÙˆÙ‚Ø¹
const Home = React.lazy(() => import("@/pages/home"));
const ArticleDetail = React.lazy(() => import("@/pages/article"));
const SectionPage = React.lazy(() => import("@/pages/section"));
const AuthorPage = React.lazy(() => import("@/pages/author"));
const Newsroom = React.lazy(() => import("@/pages/newsroom"));
const SubmitArticle = React.lazy(() => import("@/pages/submit"));
const PrivacyPolicy = React.lazy(() => import("@/pages/privacy"));

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.error("React Error Caught:", error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// Ø¥Ø¹Ø¯Ø§Ø¯ React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 2, // 2 Ø¯Ù‚Ø§Ø¦Ù‚
    },
  },
});

// ØµÙØ­Ø© ØªØ­Ù…ÙŠÙ„ Loader
function PageLoader() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4" dir="rtl">
      <Loader2 className="w-8 h-8 animate-spin text-emerald-700" />
      <p className="text-sm text-gray-400 font-bold tracking-wider animate-pulse">
        Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù…ÙŠÙ„...
      </p>
    </div>
  );
}

// Router Ù…Ø¹ ØµÙØ­Ø§Øª Ø§Ù„Ù…ÙˆÙ‚Ø¹
function Router() {
  return (
    <Layout>
      <ErrorBoundary
        fallback={
          <div
            className="p-10 text-center font-sans bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30 m-4"
            dir="rtl"
          >
            <h2 className="text-xl font-bold mb-2 text-red-600 dark:text-red-400">
              Ø¹Ø°Ø±Ø§Ù‹ØŒ Ø­Ø¯Ø« Ø®Ø·Ø£ ØªÙ‚Ù†ÙŠ
            </h2>
            <p className="text-red-500/70 text-sm mb-4">
              ÙŠØ±Ø¬Ù‰ ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø© Ø£Ùˆ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù„Ø§Ø­Ù‚Ø§Ù‹.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors"
            >
              ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø©
            </button>
          </div>
        }
      >
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/article/:slug" component={ArticleDetail} />
            <Route path="/section/:section" component={SectionPage} />
            <Route path="/author/:slug" component={AuthorPage} />
            <Route path="/newsroom" component={Newsroom} />
            <Route path="/submit" component={SubmitArticle} />
            <Route path="/privacy" component={PrivacyPolicy} />
            {/* ØµÙØ­Ø© 404 */}
            <Route>
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center" dir="rtl">
                <div className="text-8xl mb-6 opacity-10">ðŸ“°</div>
                <h1 className="text-4xl font-sans font-black mb-4">404 - Ø§Ù„ØµÙØ­Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©</h1>
                <p className="text-gray-400 font-sans text-lg mb-8">
                  Ø§Ù„Ø±Ø§Ø¨Ø· Ø§Ù„Ø°ÙŠ ØªØ¨Ø­Ø« Ø¹Ù†Ù‡ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ Ø­Ø§Ù„ÙŠØ§Ù‹.
                </p>
                <a
                  href="/"
                  className="px-8 py-3 bg-emerald-700 text-white rounded-xl font-bold text-sm hover:bg-emerald-800 transition-all"
                >
                  Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ø±Ø¦ÙŠØ³ÙŠØ©
                </a>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

// App Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {/* Ø§Ø³ØªØ®Ø¯Ø§Ù… Wouter Ù…Ø¹ base ØµØ­ÙŠØ­ */}
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || "/"}>
          <Router />
        </WouterRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

