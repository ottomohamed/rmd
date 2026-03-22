(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Providers({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: false,
                        staleTime: 1000 * 60 * 2
                    }
                }
            })
    }["Providers.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            attribute: "class",
            defaultTheme: "light",
            enableSystem: false,
            disableTransitionOnChange: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/providers.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Providers, "8mgzJaEp8HYBalQqHcoWZ8Acs9E=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "getAuthorImage",
    ()=>getAuthorImage,
    "getSectionBgColor",
    ()=>getSectionBgColor,
    "getSectionColor",
    ()=>getSectionColor,
    "getTranslatedFrequency",
    ()=>getTranslatedFrequency,
    "getTranslatedSection",
    ()=>getTranslatedSection,
    "translateAuthorBio",
    ()=>translateAuthorBio,
    "translateAuthorName",
    ()=>translateAuthorName,
    "translateAuthorTitle",
    ()=>translateAuthorTitle,
    "usePageTitle",
    ()=>usePageTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-MA", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function formatDateTime(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-MA", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}
function getAuthorImage(slug) {
    const normalizedSlug = slug?.toLowerCase()?.trim() || "";
    const map = {
        "marcus-webb": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
        "diana-forsythe": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
        "carlos-reyes": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
        "victoria-chambers": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
        "hassan-alaoui": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
        "fatima-benali": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&q=80",
        "karim-tazi": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
        "robert-hargrove": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80"
    };
    return map[normalizedSlug] || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80";
}
function translateAuthorName(name) {
    const map = {
        "Robert Hargrove": "Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø­Ù…Ø§Ù†",
        "Marcus Webb": "Ø£Ù…ÙŠÙ†Ø© Ø§Ù„Ù…Ù†ØµÙˆØ±ÙŠ",
        "Diana Forsythe": "ÙŠÙˆØ³Ù Ø§Ù„Ø¹Ù„Ù…ÙŠ",
        "Carlos Reyes": "Ù…Ø±ÙŠÙ… Ø§Ù„Ø·Ø§Ù‡Ø±ÙŠ",
        "Victoria Chambers": "Ø¹Ù…Ø± Ø¨Ù†Ø¬Ù„ÙˆÙ†",
        "Hassan Alaoui": "Ø­Ø³Ù† Ø§Ù„Ø¹Ù„ÙˆÙŠ",
        "Fatima Benali": "ÙØ§Ø·Ù…Ø© Ø¨Ù†Ø¹Ù„ÙŠ",
        "Karim Tazi": "ÙƒØ±ÙŠÙ… Ø§Ù„Ø·Ø§Ø²ÙŠ",
        "The Publisher": "Ø§Ù„Ù†Ø§Ø´Ø±"
    };
    return map[name] || name;
}
function translateAuthorTitle(title) {
    const map = {
        "Editor-in-Chief": "Ø±Ø¦ÙŠØ³ Ø§Ù„ØªØ­Ø±ÙŠØ±",
        "Senior Correspondent, International Affairs": "Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø³ÙŠØ§Ø³ÙŠØ©",
        "Economics Editor": "Ù…Ø­Ø±Ø± Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯ÙŠØ©",
        "Sports Correspondent": "Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©",
        "Global Trends Intelligence Director": "Ù…Ø­Ø±Ø± Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø«Ù‚Ø§ÙÙŠØ©",
        "Arts & Media Critic": "Ù†Ø§Ù‚Ø¯ Ø§Ù„ÙÙ†ÙˆÙ† ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù…",
        "Social Affairs Reporter": "Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ©",
        "Science & Technology Editor": "Ù…Ø­Ø±Ø± Ø§Ù„Ø¹Ù„ÙˆÙ… ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§"
    };
    return map[title] || title;
}
function translateAuthorBio(bio) {
    if (bio.includes("spent three decades at the intersection of policy and print")) {
        return "Ø®Ø¨ÙŠØ± Ø¥Ø¹Ù„Ø§Ù…ÙŠ Ù‚Ø¶Ù‰ Ø«Ù„Ø§Ø«Ø© Ø¹Ù‚ÙˆØ¯ ÙÙŠ Ø¯Ù‡Ø§Ù„ÙŠØ² Ø§Ù„ØµØ­Ø§ÙØ© Ø§Ù„Ù…ØºØ±Ø¨ÙŠØ© ÙˆØ§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©. ÙŠØ³Ù‡Ø± Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø­Ù…Ø§Ù† Ø¹Ù„Ù‰ Ø§Ù„Ø®Ø· Ø§Ù„ØªØ­Ø±ÙŠØ±ÙŠ Ù„Ù…ØºØ±Ø¨ 24 Ø¨Ø±Ø¤ÙŠØ© ØªØ±ØªÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ù…ØµØ¯Ø§Ù‚ÙŠØ© ÙˆØ§Ù„Ø¹Ù…Ù‚ Ø§Ù„ØªØ­Ù„ÙŠÙ„ÙŠ.";
    }
    if (bio.includes("reported from 47 countries")) {
        return "Ù…Ø­Ù„Ù„Ø© Ø³ÙŠØ§Ø³ÙŠØ© Ù…ØªØ®ØµØµØ© ÙÙŠ Ø§Ù„Ø´Ø£Ù† Ø§Ù„Ù…ØºØ±Ø¨ÙŠ ÙˆØ§Ù„Ø¹Ø±Ø¨ÙŠ. ØªØºØ·ÙŠ Ø£Ù…ÙŠÙ†Ø© Ø§Ù„Ù…Ù†ØµÙˆØ±ÙŠ Ø§Ù„Ø¨Ø±Ù„Ù…Ø§Ù† ÙˆØ§Ù„Ø­ÙƒÙˆÙ…Ø© ÙˆØ§Ù„Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø­ØµØ±ÙŠØ© â€” Ù„Ø§ ØªÙƒØªØ¨ Ø®Ø§Ø±Ø¬ ØªØ®ØµØµÙ‡Ø§ Ø§Ù„Ø³ÙŠØ§Ø³ÙŠ.";
    }
    if (bio.includes("PhD in Macroeconomics")) {
        return "Ø§Ù‚ØªØµØ§Ø¯ÙŠ Ù…ØªØ®ØµØµ ÙÙŠ Ø§Ù„Ø£Ø³ÙˆØ§Ù‚ ÙˆØ§Ù„Ù…Ø§Ù„ ÙˆØ§Ù„Ø£Ø¹Ù…Ø§Ù„. ÙŠÙˆØ³Ù Ø§Ù„Ø¹Ù„Ù…ÙŠ ÙŠÙÙƒÙƒ Ø´ÙØ±Ø§Øª Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ§Øª ÙˆØ§Ù„Ø¨ÙˆØ±ØµØ§Øª ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø© Ø¨Ø£Ø³Ù„ÙˆØ¨ Ø¯Ù‚ÙŠÙ‚ â€” Ù„Ø§ ÙŠØ¹Ù„Ù‘Ù‚ Ø¹Ù„Ù‰ Ø´Ø¤ÙˆÙ† Ø®Ø§Ø±Ø¬ Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯.";
    }
    if (bio.includes("grew up between Madrid and Buenos Aires")) {
        return "Ù…Ø±Ø§Ø³Ù„Ø© Ø±ÙŠØ§Ø¶ÙŠØ© Ù…ØªØ®ØµØµØ© ÙÙŠ ÙƒØ±Ø© Ø§Ù„Ù‚Ø¯Ù… Ø§Ù„Ù…ØºØ±Ø¨ÙŠØ© ÙˆØ§Ù„Ø±ÙŠØ§Ø¶Ø§Øª Ø§Ù„ÙˆØ·Ù†ÙŠØ©. Ù…Ø±ÙŠÙ… Ø§Ù„Ø·Ø§Ù‡Ø±ÙŠ ØªÙØ¹ÙŠØ¯ Ø¨Ø« Ø§Ù„Ù…Ù„Ø§Ø¹Ø¨ Ù…Ù† Ø¯Ø§Ø®Ù„ Ø§Ù„Ø­Ø¯Ø« â€” Ù„Ø§ ØªÙƒØªØ¨ ÙÙŠ Ø§Ù„Ø³ÙŠØ§Ø³Ø© ÙˆÙ„Ø§ Ø§Ù„Ø«Ù‚Ø§ÙØ©.";
    }
    if (bio.includes("trained as an intelligence analyst")) {
        return "Ù†Ø§Ù‚Ø¯ Ø«Ù‚Ø§ÙÙŠ Ù…ØªØ®ØµØµ ÙÙŠ Ø§Ù„Ø£Ø¯Ø¨ ÙˆØ§Ù„ØªØ±Ø§Ø« ÙˆØ§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ù…ØºØ±Ø¨ÙŠØ©. Ø¹Ù…Ø± Ø¨Ù†Ø¬Ù„ÙˆÙ† ÙŠØ´ØªØ±Ø· Ø§Ù„ØªØ¹Ù…Ù‚ Ù‚Ø¨Ù„ Ø§Ù„ÙƒØªØ§Ø¨Ø© â€” ØªØ®ØµØµÙ‡ Ø§Ù„Ø«Ù‚Ø§ÙØ© ÙˆÙ„Ø§ Ø´ÙŠØ¡ ØºÙŠØ±Ù‡Ø§.";
    }
    if (bio.includes("arts")) {
        return "Ù†Ø§Ù‚Ø¯ ÙÙ†ÙŠ Ù…ØªØ®ØµØµ ÙÙŠ Ø§Ù„Ù…ÙˆØ³ÙŠÙ‚Ù‰ ÙˆØ§Ù„Ø³ÙŠÙ†Ù…Ø§ ÙˆØ§Ù„ØªØ´ÙƒÙŠÙ„. Ø­Ø³Ù† Ø§Ù„Ø¹Ù„ÙˆÙŠ ÙŠØ±ØµØ¯ Ø§Ù„Ù…Ø´Ù‡Ø¯ Ø§Ù„ÙÙ†ÙŠ Ø§Ù„Ù…ØºØ±Ø¨ÙŠ Ø¨Ø¹ÙŠÙ† Ø®Ø¨ÙŠØ±Ø© â€” Ø§Ù„ÙÙ†ÙˆÙ† ÙÙ‚Ø· ØªØ®ØµØµÙ‡.";
    }
    if (bio.includes("social")) {
        return "ØµØ­ÙÙŠØ© Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ© ØªÙØ¹Ù†Ù‰ Ø¨Ù‚Ø¶Ø§ÙŠØ§ Ø§Ù„Ø£Ø³Ø±Ø© ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨ ÙˆØ§Ù„Ù…Ø±Ø£Ø©. ÙØ§Ø·Ù…Ø© Ø¨Ù†Ø¹Ù„ÙŠ ØªÙ‚Ø±Ø£ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ Ø¨Ø¹Ù…Ù‚ ÙˆØªÙ„ØªØ²Ù… Ø¨ØªØ®ØµØµÙ‡Ø§ Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠ ÙÙ‚Ø·.";
    }
    if (bio.includes("science") || bio.includes("tech")) {
        return "Ù…Ø­Ø±Ø± Ø¹Ù„Ù…ÙŠ ÙŠÙØºØ·ÙŠ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ù„Ø¨ÙŠØ¦Ø© ÙˆØ§Ù„ÙØ¶Ø§Ø¡. ÙƒØ±ÙŠÙ… Ø§Ù„Ø·Ø§Ø²ÙŠ ÙŠÙØªØ±Ø¬Ù… Ø§Ù„Ø¹Ù„Ù… Ù„Ù„Ù‚Ø§Ø±Ø¦ Ø§Ù„Ø¹Ø§Ø¯ÙŠ â€” Ø¹Ù„ÙˆÙ… ÙˆØªÙ‚Ù†ÙŠØ© ÙÙ‚Ø·.";
    }
    return bio;
}
function getTranslatedSection(section) {
    switch(section?.toLowerCase()){
        case 'politics':
            return 'Ø§Ù„Ø³ÙŠØ§Ø³Ø©';
        case 'economics':
            return 'Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯';
        case 'sports':
            return 'Ø§Ù„Ø±ÙŠØ§Ø¶Ø©';
        case 'editorial':
            return 'Ø§Ù„Ø±Ø£ÙŠ';
        case 'culture':
            return 'Ø§Ù„Ø«Ù‚Ø§ÙØ©';
        case 'science':
            return 'Ø§Ù„Ø¹Ù„ÙˆÙ…';
        case 'tech':
            return 'Ø§Ù„ØªÙ‚Ù†ÙŠØ©';
        case 'society':
            return 'Ø§Ù„Ù…Ø¬ØªÙ…Ø¹';
        case 'incidents':
            return 'Ø­ÙˆØ§Ø¯Ø«';
        case 'health':
            return 'Ø§Ù„ØµØ­Ø©';
        case 'contests':
            return 'Ù…Ø³Ø§Ø¨Ù‚Ø§Øª';
        default:
            return section;
    }
}
function getTranslatedFrequency(freq) {
    switch(freq?.toLowerCase()){
        case 'daily':
            return 'ÙŠÙˆÙ…ÙŠØ§Ù‹';
        case 'weekly':
            return 'Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹';
        case 'monthly':
            return 'Ø´Ù‡Ø±ÙŠØ§Ù‹';
        case '3x/week':
            return '3 Ù…Ø±Ø§Øª Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹';
        case 'on-demand':
            return 'Ø¹Ù†Ø¯ Ø§Ù„Ø·Ù„Ø¨';
        default:
            return freq;
    }
}
function getSectionColor(section) {
    switch(section?.toLowerCase()){
        case 'politics':
            return 'text-blue-700 border-blue-700 dark:text-blue-400 dark:border-blue-500';
        case 'economics':
            return 'text-amber-700 border-amber-700 dark:text-amber-400 dark:border-amber-500';
        case 'sports':
            return 'text-green-700 border-green-700 dark:text-green-400 dark:border-green-500';
        case 'editorial':
            return 'text-violet-700 border-violet-700 dark:text-violet-400 dark:border-violet-500';
        case 'culture':
            return 'text-orange-700 border-orange-700 dark:text-orange-400 dark:border-orange-500';
        case 'science':
            return 'text-cyan-700 border-cyan-700 dark:text-cyan-400 dark:border-cyan-500';
        case 'tech':
            return 'text-indigo-700 border-indigo-700 dark:text-indigo-400 dark:border-indigo-500';
        case 'society':
            return 'text-purple-700 border-purple-700 dark:text-purple-400 dark:border-purple-500';
        case 'incidents':
            return 'text-red-700 border-red-700 dark:text-red-400 dark:border-red-500';
        case 'health':
            return 'text-rose-700 border-rose-700 dark:text-rose-400 dark:border-rose-500';
        case 'contests':
            return 'text-yellow-600 border-yellow-600 dark:text-yellow-400 dark:border-yellow-500';
        default:
            return 'text-emerald-700 border-emerald-700 dark:text-emerald-500 dark:border-emerald-500';
    }
}
function getSectionBgColor(section) {
    switch(section?.toLowerCase()){
        case 'politics':
            return 'bg-blue-700 text-white dark:bg-blue-600';
        case 'economics':
            return 'bg-amber-700 text-white dark:bg-amber-600';
        case 'sports':
            return 'bg-green-700 text-white dark:bg-green-600';
        case 'editorial':
            return 'bg-violet-700 text-white dark:bg-violet-600';
        case 'culture':
            return 'bg-orange-700 text-white dark:bg-orange-600';
        case 'science':
            return 'bg-cyan-700 text-white dark:bg-cyan-600';
        case 'tech':
            return 'bg-indigo-700 text-white dark:bg-indigo-600';
        case 'society':
            return 'bg-purple-700 text-white dark:bg-purple-600';
        case 'incidents':
            return 'bg-red-700 text-white dark:bg-red-600';
        case 'health':
            return 'bg-rose-700 text-white dark:bg-rose-600';
        case 'contests':
            return 'bg-yellow-600 text-white dark:bg-yellow-500';
        default:
            return 'bg-emerald-700 text-white dark:bg-emerald-600';
    }
}
function usePageTitle(title) {
    if (typeof document !== 'undefined') {
        document.title = title ? `${title} â€” Ù…ØºØ±Ø¨ 24` : 'Ù…ØºØ±Ø¨ 24 â€” Ø¬Ø±ÙŠØ¯Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ù…ØºØ±Ø¨ÙŠØ© Ù…Ø³ØªÙ‚Ù„Ø©';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-breaking-news.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBreakingNews",
    ()=>useBreakingNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const DEFAULT_BREAKING = [
    {
        id: "1",
        text: "Ø¬Ù„Ø§Ù„Ø© Ø§Ù„Ù…Ù„Ùƒ Ù…Ø­Ù…Ø¯ Ø§Ù„Ø³Ø§Ø¯Ø³ ÙŠØªØ±Ø£Ø³ Ù…Ø¬Ù„Ø³Ø§Ù‹ ÙˆØ²Ø§Ø±ÙŠØ§Ù‹ Ø¨Ø§Ù„Ù‚ØµØ± Ø§Ù„Ù…Ù„ÙƒÙŠ Ø¨Ø§Ù„Ø±Ø¨Ø§Ø·",
        active: true,
        urgent: true
    },
    {
        id: "2",
        text: "Ø§Ù„Ù…ØºØ±Ø¨ ÙŠØ³Ø¬Ù„ Ù†Ù…ÙˆØ§Ù‹ Ø§Ù‚ØªØµØ§Ø¯ÙŠØ§Ù‹ Ù…Ù„Ø­ÙˆØ¸Ø§Ù‹ ÙÙŠ Ø§Ù„Ø±Ø¨Ø¹ Ø§Ù„Ø£ÙˆÙ„ Ù…Ù† Ø§Ù„Ø³Ù†Ø©",
        active: true,
        urgent: false
    },
    {
        id: "3",
        text: "Ø§Ù†Ø·Ù„Ø§Ù‚ ÙØ¹Ø§Ù„ÙŠØ§Øª Ù…Ù‡Ø±Ø¬Ø§Ù† Ù…ÙˆØ§Ø²ÙŠÙ† Ø§Ù„Ø¯ÙˆÙ„ÙŠ ÙÙŠ Ø¯ÙˆØ±ØªÙ‡ Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©",
        active: true,
        urgent: false
    },
    {
        id: "4",
        text: "Ø§Ù„Ù…Ù†ØªØ®Ø¨ Ø§Ù„ÙˆØ·Ù†ÙŠ ÙŠØ³ØªØ¹Ø¯ Ù„Ù…ÙˆØ§Ø¬Ù‡Ø© Ø­Ø§Ø³Ù…Ø© ÙÙŠ Ø§Ù„ØªØµÙÙŠØ§Øª Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠØ©",
        active: true,
        urgent: false
    }
];
function useBreakingNews() {
    _s();
    const [items, setItemsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useBreakingNews.useState": ()=>{
            try {
                const stored = localStorage.getItem("maghrib24_breaking");
                if (stored) return JSON.parse(stored);
            } catch  {}
            return DEFAULT_BREAKING;
        }
    }["useBreakingNews.useState"]);
    const [tickerEnabled, setTickerEnabledState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useBreakingNews.useState": ()=>{
            try {
                return localStorage.getItem("maghrib24_ticker_enabled") !== "false";
            } catch  {}
            return true;
        }
    }["useBreakingNews.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBreakingNews.useEffect": ()=>{
            const handleUpdate = {
                "useBreakingNews.useEffect.handleUpdate": ()=>{
                    try {
                        const stored = localStorage.getItem("maghrib24_breaking");
                        if (stored) setItemsState(JSON.parse(stored));
                        setTickerEnabledState(localStorage.getItem("maghrib24_ticker_enabled") !== "false");
                    } catch  {}
                }
            }["useBreakingNews.useEffect.handleUpdate"];
            window.addEventListener("breaking_updated", handleUpdate);
            return ({
                "useBreakingNews.useEffect": ()=>window.removeEventListener("breaking_updated", handleUpdate)
            })["useBreakingNews.useEffect"];
        }
    }["useBreakingNews.useEffect"], []);
    const persist = (data)=>{
        localStorage.setItem("maghrib24_breaking", JSON.stringify(data));
        window.dispatchEvent(new Event("breaking_updated"));
    };
    const setItems = (fn)=>{
        setItemsState((prev)=>{
            const updated = typeof fn === "function" ? fn(prev) : fn;
            persist(updated);
            return updated;
        });
    };
    const setTickerEnabled = (val)=>{
        setTickerEnabledState(val);
        localStorage.setItem("maghrib24_ticker_enabled", val ? "true" : "false");
        window.dispatchEvent(new Event("breaking_updated"));
    };
    const addItem = (text, urgent = false)=>{
        setItems((prev)=>[
                ...prev,
                {
                    id: Date.now().toString(),
                    text,
                    active: true,
                    urgent
                }
            ]);
    };
    const deleteItem = (id)=>{
        setItems((prev)=>prev.filter((i)=>i.id !== id));
    };
    const toggleItem = (id)=>{
        setItems((prev)=>prev.map((i)=>i.id === id ? {
                    ...i,
                    active: !i.active
                } : i));
    };
    const updateItem = (id, text)=>{
        setItems((prev)=>prev.map((i)=>i.id === id ? {
                    ...i,
                    text
                } : i));
    };
    return {
        items,
        tickerEnabled,
        setTickerEnabled,
        addItem,
        deleteItem,
        toggleItem,
        updateItem
    };
}
_s(useBreakingNews, "qNQ8DxrnHlIclZvAVqISOQDmw2U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/breaking-news-ticker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreakingNewsTicker",
    ()=>BreakingNewsTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$breaking$2d$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-breaking-news.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function BreakingNewsTicker() {
    _s();
    const { items, tickerEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$breaking$2d$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreakingNews"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Re-check visibility when storage changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreakingNewsTicker.useEffect": ()=>{
            const handleUpdate = {
                "BreakingNewsTicker.useEffect.handleUpdate": ()=>{
                    try {
                        setVisible(localStorage.getItem("maghrib24_ticker_enabled") !== "false");
                    } catch  {}
                }
            }["BreakingNewsTicker.useEffect.handleUpdate"];
            window.addEventListener("breaking_updated", handleUpdate);
            return ({
                "BreakingNewsTicker.useEffect": ()=>window.removeEventListener("breaking_updated", handleUpdate)
            })["BreakingNewsTicker.useEffect"];
        }
    }["BreakingNewsTicker.useEffect"], []);
    const activeItems = items.filter((i)=>i.active);
    if (!tickerEnabled || !visible || activeItems.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-emerald-700 text-white overflow-hidden py-2 shadow-sm relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 flex items-center gap-1.5 bg-gold-500 text-white px-3 py-1 font-black text-xs uppercase tracking-widest shadow-lg whitespace-nowrap animate-pulse",
                    children: "âš¡ Ø¹Ø§Ø¬Ù„"
                }, void 0, false, {
                    fileName: "[project]/src/components/breaking-news-ticker.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ticker-content flex gap-16 whitespace-nowrap",
                        style: {
                            animation: "ticker-scroll 40s linear infinite"
                        },
                        children: [
                            ...activeItems,
                            ...activeItems
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-medium text-sm ${item.urgent ? "text-yellow-200 font-bold" : ""}`,
                                children: [
                                    item.urgent ? "ðŸ”´ " : "â€¢ ",
                                    item.text
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/breaking-news-ticker.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/breaking-news-ticker.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/breaking-news-ticker.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/breaking-news-ticker.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/breaking-news-ticker.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(BreakingNewsTicker, "u+iJvntKsJbBvtUvZQ0sJ4M2BV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$breaking$2d$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreakingNews"]
    ];
});
_c = BreakingNewsTicker;
var _c;
__turbopack_context__.k.register(_c, "BreakingNewsTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layout",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$breaking$2d$news$2d$ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/breaking-news-ticker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Social media icon components
function SocialIcon({ letter, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 flex items-center justify-center text-[10px] font-black", className),
        children: letter
    }, void 0, false, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = SocialIcon;
const Facebook = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
        letter: "f",
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 15,
        columnNumber: 61
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Facebook;
const Twitter = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
        letter: "ð•",
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 16,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Twitter;
const Instagram = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
        letter: "â—Ž",
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 17,
        columnNumber: 62
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Instagram;
const Youtube = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
        letter: "â–¶",
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 18,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Youtube;
function Layout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const currentTheme = theme || "light";
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layout.useEffect": ()=>{
            const onScroll = {
                "Layout.useEffect.onScroll": ()=>setScrolled(window.scrollY > 60)
            }["Layout.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Layout.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Layout.useEffect"];
        }
    }["Layout.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layout.useEffect": ()=>{
            setMobileMenuOpen(false);
            setSearchOpen(false);
        }
    }["Layout.useEffect"], [
        pathname
    ]);
    const sections = [
        {
            name: "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
            href: "/"
        },
        {
            name: "Ø³ÙŠØ§Ø³Ø©",
            href: "/section/politics"
        },
        {
            name: "Ø§Ù‚ØªØµØ§Ø¯",
            href: "/section/economics"
        },
        {
            name: "Ø±ÙŠØ§Ø¶Ø©",
            href: "/section/sports"
        },
        {
            name: "Ù…Ø¬ØªÙ…Ø¹",
            href: "/section/society"
        },
        {
            name: "ØµØ­Ø©",
            href: "/section/health"
        },
        {
            name: "ØªÙ‚Ù†ÙŠØ©",
            href: "/section/tech"
        },
        {
            name: "Ù…Ø³Ø§Ø¨Ù‚Ø§Øª",
            href: "/section/contests"
        },
        {
            name: "Ø«Ù‚Ø§ÙØ©",
            href: "/section/culture"
        },
        {
            name: "Ø­ÙˆØ§Ø¯Ø«",
            href: "/section/incidents",
            urgent: true
        }
    ];
    if (pathname === "/newsroom") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const now = new Date();
    const dateStr = now.toLocaleDateString("ar-MA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-300",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-emerald-950 text-emerald-100 py-1.5 text-xs border-b border-emerald-900 hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-emerald-300/80",
                                    children: dateStr
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-700",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-400/60 tracking-wider",
                                    children: "Ù…Ø¤Ø³Ø³Ø© Ø¥Ø¹Ù„Ø§Ù…ÙŠØ© Ù…ØºØ±Ø¨ÙŠØ© Ù…Ø³ØªÙ‚Ù„Ø©"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-gold-500 transition",
                                    title: "ÙÙŠØ³Ø¨ÙˆÙƒ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Facebook, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 72,
                                        columnNumber: 89
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-gold-500 transition",
                                    title: "ØªÙˆÙŠØªØ±",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Twitter, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 73,
                                        columnNumber: 87
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-gold-500 transition",
                                    title: "Ø¥Ù†Ø³ØªØºØ±Ø§Ù…",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Instagram, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 74,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-gold-500 transition",
                                    title: "ÙŠÙˆØªÙŠÙˆØ¨",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Youtube, {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 75,
                                        columnNumber: 89
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-all duration-500 overflow-hidden", scrolled ? "max-h-0 py-0 opacity-0" : "max-h-60 py-6 md:py-8 opacity-100"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-block group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-4 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-16 bg-gradient-to-l from-gold-500 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black text-gold-500 uppercase tracking-[0.4em]",
                                        children: "Ù…Ù†Ø° 2024 â€” Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-16 bg-gradient-to-r from-gold-500 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-700 transition-colors duration-300",
                                        children: "Ù…ØºØ±Ø¨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative mx-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gold-500 group-hover:text-gold-600 transition-colors duration-300",
                                                children: "24"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-0.5 w-8 bg-emerald-700 dark:bg-emerald-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]",
                                        children: "Ø¬Ø±ÙŠØ¯Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ù…ØºØ±Ø¨ÙŠØ© â€” Ù†Ø¨Ø¶ Ø§Ù„Ù…ØºØ±Ø¨ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-0.5 w-8 bg-emerald-700 dark:bg-emerald-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 backdrop-blur-xl transition-all duration-300", scrolled ? "bg-white/95 dark:bg-slate-900/95 shadow-lg border-b border-gray-100 dark:border-slate-800" : "bg-white dark:bg-slate-900 border-b-4 border-emerald-700 dark:border-emerald-600"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center h-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-300 flex-shrink-0", scrolled ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-black text-emerald-700 dark:text-emerald-400 tracking-tighter",
                                                children: "Ù…ØºØ±Ø¨"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-black text-gold-500",
                                                children: "24"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center space-x-reverse space-x-1 flex-1 justify-center overflow-x-auto no-scrollbar",
                                    children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: section.href,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap", pathname === section.href ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800", section.urgent && pathname !== section.href ? "text-red-600 dark:text-red-400" : ""),
                                            children: [
                                                section.urgent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] ml-1",
                                                    children: "ðŸ”´"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 38
                                                }, this),
                                                section.name
                                            ]
                                        }, section.name, true, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/submit",
                                            className: "hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-all ml-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                "Ø£Ø±Ø³Ù„ Ù…Ù‚Ø§Ù„Ùƒ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchOpen(!searchOpen),
                                            className: "p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-emerald-700 transition-all",
                                            title: "Ø¨Ø­Ø«",
                                            children: searchOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 156,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 156,
                                                columnNumber: 59
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTheme(currentTheme === "dark" ? "light" : "dark"),
                                            className: "p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gold-500 transition-all",
                                            title: "ØªØ¨Ø¯ÙŠÙ„ Ø§Ù„ÙˆØ¶Ø¹",
                                            children: currentTheme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 163,
                                                columnNumber: 44
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 163,
                                                columnNumber: 74
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all",
                                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 169,
                                                columnNumber: 35
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 169,
                                                columnNumber: 63
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-all duration-300 border-t border-gray-100 dark:border-slate-800", searchOpen ? "max-h-20 py-3" : "max-h-0 py-0"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    if (searchQuery.trim()) window.location.href = `/section/politics?q=${searchQuery}`;
                                },
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Ø§Ø¨Ø­Ø« ÙÙŠ Ù…ØºØ±Ø¨ 24...",
                                        className: "w-full py-3 px-5 pr-12 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all text-right",
                                        autoFocus: searchOpen
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900", mobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 pt-2 space-y-1",
                            children: [
                                sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: section.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold transition-all", pathname === section.href ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400" : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800", section.urgent && pathname !== section.href ? "text-red-600" : ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: section.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-4 h-4 opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, section.name, true, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t border-gray-100 dark:border-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/submit",
                                        className: "flex items-center justify-center gap-2 py-3 bg-emerald-700 text-white rounded-xl font-bold text-sm",
                                        children: "Ø£Ø±Ø³Ù„ Ù…Ù‚Ø§Ù„Ùƒ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$breaking$2d$news$2d$ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BreakingNewsTicker"], {}, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 dark:bg-slate-950 text-white pt-16 pb-8 mt-12 border-t-4 border-emerald-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 md:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl font-black tracking-tighter",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: "Ù…ØºØ±Ø¨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gold-500",
                                                        children: "24"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 leading-relaxed text-sm font-medium text-right",
                                            children: "Ù…Ø¤Ø³Ø³Ø© Ø¥Ø¹Ù„Ø§Ù…ÙŠØ© Ù…ØºØ±Ø¨ÙŠØ© Ù…Ø³ØªÙ‚Ù„Ø© ØªÙ‚Ø¯Ù… Ø§Ù„Ø®Ø¨Ø± Ø¨Ù…Ù‡Ù†ÙŠØ© ÙˆØ­ÙŠØ§Ø¯ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©ØŒ ØªØºØ·ÙŠ Ø§Ù„Ø´Ø£Ù† Ø§Ù„Ù…Ø­Ù„ÙŠ ÙˆØ§Ù„Ø¯ÙˆÙ„ÙŠ Ø¨Ù„Ù…Ø³Ø© Ø­Ø¶Ø§Ø±ÙŠØ©."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-6 flex-row-reverse",
                                            children: [
                                                {
                                                    icon: Facebook,
                                                    label: "ÙÙŠØ³Ø¨ÙˆÙƒ"
                                                },
                                                {
                                                    icon: Twitter,
                                                    label: "ØªÙˆÙŠØªØ±"
                                                },
                                                {
                                                    icon: Instagram,
                                                    label: "Ø¥Ù†Ø³ØªØºØ±Ø§Ù…"
                                                },
                                                {
                                                    icon: Youtube,
                                                    label: "ÙŠÙˆØªÙŠÙˆØ¨"
                                                }
                                            ].map(({ icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "w-9 h-9 rounded-lg bg-gray-800 hover:bg-emerald-700 flex items-center justify-center transition-all hover:-translate-y-0.5",
                                                    title: label,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, this)
                                                }, label, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-black mb-6 border-r-4 border-gold-500 pr-3 uppercase tracking-widest text-gray-300",
                                            children: "Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-gray-400 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        className: "hover:text-gold-500 transition-colors",
                                                        children: "Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/submit",
                                                        className: "hover:text-gold-500 transition-colors",
                                                        children: "Ø£Ø±Ø³Ù„ Ù…Ù‚Ø§Ù„Ø§Ù‹"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/privacy",
                                                        className: "hover:text-gold-500 transition-colors",
                                                        children: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/privacy",
                                                        className: "hover:text-gold-500 transition-colors",
                                                        children: "Ù…ÙŠØ«Ø§Ù‚ Ø§Ù„ØªØ­Ø±ÙŠØ±"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-gold-500 transition-colors",
                                                        children: "Ø§ØªØµÙ„ Ø¨Ù†Ø§"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-black mb-6 border-r-4 border-gold-500 pr-3 uppercase tracking-widest text-gray-300",
                                            children: "Ø§Ù„Ø£Ù‚Ø³Ø§Ù…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-gray-400 text-sm",
                                            children: sections.slice(1, 6).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: s.href,
                                                        className: "hover:text-gold-500 transition-colors",
                                                        children: s.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                }, s.name, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-black mb-6 border-r-4 border-gold-500 pr-3 uppercase tracking-widest text-gray-300",
                                            children: "Ø§Ù„Ù†Ø´Ø±Ø© Ø§Ù„Ø¨Ø±ÙŠØ¯ÙŠØ©"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mb-4 leading-relaxed",
                                            children: "Ø§Ø´ØªØ±Ùƒ Ù„ØªØµÙ„Ùƒ Ø§Ù„Ø£Ø®Ø¨Ø§Ø± Ø§Ù„Ø¹Ø§Ø¬Ù„Ø© ÙˆØ£Ù‡Ù… Ø§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª ØµØ¨Ø§Ø­ ÙƒÙ„ ÙŠÙˆÙ…."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors text-right",
                                                    placeholder: "Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
                                                    type: "email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all active:scale-95",
                                                    children: "Ø§Ø´ØªØ±Ø§Ùƒ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-xs text-right",
                                    children: [
                                        "Â© ",
                                        new Date().getFullYear(),
                                        " Ù…ØºØ±Ø¨ 24. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-xs tracking-wider",
                                    children: "ØµÙÙ†Ø¹ Ø¨Ù€ â¤ï¸ ÙÙŠ Ø§Ù„Ù…ØºØ±Ø¨"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Layout, "5H0jplURNEf3IV0LOurBxaPLTBQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c5 = Layout;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SocialIcon");
__turbopack_context__.k.register(_c1, "Facebook");
__turbopack_context__.k.register(_c2, "Twitter");
__turbopack_context__.k.register(_c3, "Instagram");
__turbopack_context__.k.register(_c4, "Youtube");
__turbopack_context__.k.register(_c5, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0orya45._.js.map