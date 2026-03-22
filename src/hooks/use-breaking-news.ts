import { useState, useEffect } from "react";

export interface BreakingNews {
  id: string;
  text: string;
  active: boolean;
  urgent: boolean;
}

const DEFAULT_BREAKING: BreakingNews[] = [
  { id: "1", text: "Ø¬Ù„Ø§Ù„Ø© Ø§Ù„Ù…Ù„Ùƒ Ù…Ø­Ù…Ø¯ Ø§Ù„Ø³Ø§Ø¯Ø³ ÙŠØªØ±Ø£Ø³ Ù…Ø¬Ù„Ø³Ø§Ù‹ ÙˆØ²Ø§Ø±ÙŠØ§Ù‹ Ø¨Ø§Ù„Ù‚ØµØ± Ø§Ù„Ù…Ù„ÙƒÙŠ Ø¨Ø§Ù„Ø±Ø¨Ø§Ø·", active: true, urgent: true },
  { id: "2", text: "Ø§Ù„Ù…ØºØ±Ø¨ ÙŠØ³Ø¬Ù„ Ù†Ù…ÙˆØ§Ù‹ Ø§Ù‚ØªØµØ§Ø¯ÙŠØ§Ù‹ Ù…Ù„Ø­ÙˆØ¸Ø§Ù‹ ÙÙŠ Ø§Ù„Ø±Ø¨Ø¹ Ø§Ù„Ø£ÙˆÙ„ Ù…Ù† Ø§Ù„Ø³Ù†Ø©", active: true, urgent: false },
  { id: "3", text: "Ø§Ù†Ø·Ù„Ø§Ù‚ ÙØ¹Ø§Ù„ÙŠØ§Øª Ù…Ù‡Ø±Ø¬Ø§Ù† Ù…ÙˆØ§Ø²ÙŠÙ† Ø§Ù„Ø¯ÙˆÙ„ÙŠ ÙÙŠ Ø¯ÙˆØ±ØªÙ‡ Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©", active: true, urgent: false },
  { id: "4", text: "Ø§Ù„Ù…Ù†ØªØ®Ø¨ Ø§Ù„ÙˆØ·Ù†ÙŠ ÙŠØ³ØªØ¹Ø¯ Ù„Ù…ÙˆØ§Ø¬Ù‡Ø© Ø­Ø§Ø³Ù…Ø© ÙÙŠ Ø§Ù„ØªØµÙÙŠØ§Øª Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠØ©", active: true, urgent: false },
];

export function useBreakingNews() {
  const [items, setItemsState] = useState<BreakingNews[]>(() => {
    try {
      const stored = localStorage.getItem("maghrib24_breaking");
      if (stored) return JSON.parse(stored);
    } catch {}
    return DEFAULT_BREAKING;
  });

  const [tickerEnabled, setTickerEnabledState] = useState<boolean>(() => {
    try {
      return localStorage.getItem("maghrib24_ticker_enabled") !== "false";
    } catch {}
    return true;
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const stored = localStorage.getItem("maghrib24_breaking");
        if (stored) setItemsState(JSON.parse(stored));
        setTickerEnabledState(localStorage.getItem("maghrib24_ticker_enabled") !== "false");
      } catch {}
    };
    window.addEventListener("breaking_updated", handleUpdate);
    return () => window.removeEventListener("breaking_updated", handleUpdate);
  }, []);

  const persist = (data: BreakingNews[]) => {
    localStorage.setItem("maghrib24_breaking", JSON.stringify(data));
    window.dispatchEvent(new Event("breaking_updated"));
  };

  const setItems = (fn: BreakingNews[] | ((p: BreakingNews[]) => BreakingNews[])) => {
    setItemsState((prev) => {
      const updated = typeof fn === "function" ? fn(prev) : fn;
      persist(updated);
      return updated;
    });
  };

  const setTickerEnabled = (val: boolean) => {
    setTickerEnabledState(val);
    localStorage.setItem("maghrib24_ticker_enabled", val ? "true" : "false");
    window.dispatchEvent(new Event("breaking_updated"));
  };

  const addItem = (text: string, urgent = false) => {
    setItems((prev) => [...prev, { id: Date.now().toString(), text, active: true, urgent }]);
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleItem = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, active: !i.active } : i)));
  };

  const updateItem = (id: string, text: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, text } : i)));
  };

  return { items, tickerEnabled, setTickerEnabled, addItem, deleteItem, toggleItem, updateItem };
}

