import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | undefined) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-MA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateTime(dateString: string | undefined) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-MA", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function getAuthorImage(slug: string) {
  const normalizedSlug = slug?.toLowerCase()?.trim() || "";
  const map: Record<string, string> = {
    "marcus-webb": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    "diana-forsythe": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    "carlos-reyes": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    "victoria-chambers": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    "hassan-alaoui": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    "fatima-benali": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&q=80",
    "karim-tazi": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    "robert-hargrove": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  };
  return map[normalizedSlug] || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80";
}

export function translateAuthorName(name: string) {
  const map: Record<string, string> = {
    "Robert Hargrove": "Ù…Ø­Ù…Ø¯ Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø­Ù…Ø§Ù†",
    "Marcus Webb": "Ø£Ù…ÙŠÙ†Ø© Ø§Ù„Ù…Ù†ØµÙˆØ±ÙŠ",
    "Diana Forsythe": "ÙŠÙˆØ³Ù Ø§Ù„Ø¹Ù„Ù…ÙŠ",
    "Carlos Reyes": "Ù…Ø±ÙŠÙ… Ø§Ù„Ø·Ø§Ù‡Ø±ÙŠ",
    "Victoria Chambers": "Ø¹Ù…Ø± Ø¨Ù†Ø¬Ù„ÙˆÙ†",
    "Hassan Alaoui": "Ø­Ø³Ù† Ø§Ù„Ø¹Ù„ÙˆÙŠ",
    "Fatima Benali": "ÙØ§Ø·Ù…Ø© Ø¨Ù†Ø¹Ù„ÙŠ",
    "Karim Tazi": "ÙƒØ±ÙŠÙ… Ø§Ù„Ø·Ø§Ø²ÙŠ",
    "The Publisher": "Ø§Ù„Ù†Ø§Ø´Ø±",
  };
  return map[name] || name;
}

export function translateAuthorTitle(title: string) {
  const map: Record<string, string> = {
    "Editor-in-Chief": "Ø±Ø¦ÙŠØ³ Ø§Ù„ØªØ­Ø±ÙŠØ±",
    "Senior Correspondent, International Affairs": "Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø³ÙŠØ§Ø³ÙŠØ©",
    "Economics Editor": "Ù…Ø­Ø±Ø± Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯ÙŠØ©",
    "Sports Correspondent": "Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ©",
    "Global Trends Intelligence Director": "Ù…Ø­Ø±Ø± Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø«Ù‚Ø§ÙÙŠØ©",
    "Arts & Media Critic": "Ù†Ø§Ù‚Ø¯ Ø§Ù„ÙÙ†ÙˆÙ† ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù…",
    "Social Affairs Reporter": "Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø´Ø¤ÙˆÙ† Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ©",
    "Science & Technology Editor": "Ù…Ø­Ø±Ø± Ø§Ù„Ø¹Ù„ÙˆÙ… ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§",
  };
  return map[title] || title;
}

export function translateAuthorBio(bio: string) {
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


export function getTranslatedSection(section: string | undefined) {
  switch (section?.toLowerCase()) {
    case 'politics': return 'Ø§Ù„Ø³ÙŠØ§Ø³Ø©';
    case 'economics': return 'Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯';
    case 'sports': return 'Ø§Ù„Ø±ÙŠØ§Ø¶Ø©';
    case 'editorial': return 'Ø§Ù„Ø±Ø£ÙŠ';
    case 'culture': return 'Ø§Ù„Ø«Ù‚Ø§ÙØ©';
    case 'science': return 'Ø§Ù„Ø¹Ù„ÙˆÙ…';
    case 'tech': return 'Ø§Ù„ØªÙ‚Ù†ÙŠØ©';
    case 'society': return 'Ø§Ù„Ù…Ø¬ØªÙ…Ø¹';
    case 'incidents': return 'Ø­ÙˆØ§Ø¯Ø«';
    case 'health': return 'Ø§Ù„ØµØ­Ø©';
    case 'contests': return 'Ù…Ø³Ø§Ø¨Ù‚Ø§Øª';
    default: return section;
  }
}


export function getTranslatedFrequency(freq: string | undefined) {
  switch (freq?.toLowerCase()) {
    case 'daily': return 'ÙŠÙˆÙ…ÙŠØ§Ù‹';
    case 'weekly': return 'Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹';
    case 'monthly': return 'Ø´Ù‡Ø±ÙŠØ§Ù‹';
    case '3x/week': return '3 Ù…Ø±Ø§Øª Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹';
    case 'on-demand': return 'Ø¹Ù†Ø¯ Ø§Ù„Ø·Ù„Ø¨';
    default: return freq;
  }
}

// â”€â”€â”€ Section-specific colors â”€â”€â”€
export function getSectionColor(section: string | undefined) {
  switch (section?.toLowerCase()) {
    case 'politics': return 'text-blue-700 border-blue-700 dark:text-blue-400 dark:border-blue-500';
    case 'economics': return 'text-amber-700 border-amber-700 dark:text-amber-400 dark:border-amber-500';
    case 'sports': return 'text-green-700 border-green-700 dark:text-green-400 dark:border-green-500';
    case 'editorial': return 'text-violet-700 border-violet-700 dark:text-violet-400 dark:border-violet-500';
    case 'culture': return 'text-orange-700 border-orange-700 dark:text-orange-400 dark:border-orange-500';
    case 'science': return 'text-cyan-700 border-cyan-700 dark:text-cyan-400 dark:border-cyan-500';
    case 'tech': return 'text-indigo-700 border-indigo-700 dark:text-indigo-400 dark:border-indigo-500';
    case 'society': return 'text-purple-700 border-purple-700 dark:text-purple-400 dark:border-purple-500';
    case 'incidents': return 'text-red-700 border-red-700 dark:text-red-400 dark:border-red-500';
    case 'health': return 'text-rose-700 border-rose-700 dark:text-rose-400 dark:border-rose-500';
    case 'contests': return 'text-yellow-600 border-yellow-600 dark:text-yellow-400 dark:border-yellow-500';
    default: return 'text-emerald-700 border-emerald-700 dark:text-emerald-500 dark:border-emerald-500';
  }
}

export function getSectionBgColor(section: string | undefined) {
  switch (section?.toLowerCase()) {
    case 'politics': return 'bg-blue-700 text-white dark:bg-blue-600';
    case 'economics': return 'bg-amber-700 text-white dark:bg-amber-600';
    case 'sports': return 'bg-green-700 text-white dark:bg-green-600';
    case 'editorial': return 'bg-violet-700 text-white dark:bg-violet-600';
    case 'culture': return 'bg-orange-700 text-white dark:bg-orange-600';
    case 'science': return 'bg-cyan-700 text-white dark:bg-cyan-600';
    case 'tech': return 'bg-indigo-700 text-white dark:bg-indigo-600';
    case 'society': return 'bg-purple-700 text-white dark:bg-purple-600';
    case 'incidents': return 'bg-red-700 text-white dark:bg-red-600';
    case 'health': return 'bg-rose-700 text-white dark:bg-rose-600';
    case 'contests': return 'bg-yellow-600 text-white dark:bg-yellow-500';
    default: return 'bg-emerald-700 text-white dark:bg-emerald-600';
  }
}

// â”€â”€â”€ SEO Helper: update document title â”€â”€â”€
export function usePageTitle(title: string) {
  if (typeof document !== 'undefined') {
    document.title = title ? `${title} â€” Ù…ØºØ±Ø¨ 24` : 'Ù…ØºØ±Ø¨ 24 â€” Ø¬Ø±ÙŠØ¯Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ù…ØºØ±Ø¨ÙŠØ© Ù…Ø³ØªÙ‚Ù„Ø©';
  }
}

