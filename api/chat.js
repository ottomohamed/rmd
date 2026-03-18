// MAROC24/api/chat.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method === "POST") {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ error: "Message required" });

    try {
      const response = await fetch("https://api.anthropic.com/v1/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.CLAUDE_API_KEY,
        },
        body: JSON.stringify({
          model: "claude-3.5",
          prompt: `Human: ${message}\nAssistant:`,
          max_tokens_to_sample: 300,
        }),
      });

      const data = await response.json();
      return res.status(200).json({ reply: data.completion });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Claude API request failed" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}