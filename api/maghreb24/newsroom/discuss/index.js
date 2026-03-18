// pages/api/chat.js  (أو أي اسم ملف API عندك)
export default function handler(req, res) {
  // السماح بالاتصال من أي مصدر (CORS) أثناء التطوير
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // التعامل مع طلبات OPTIONS (Preflight request من المتصفح)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: 'Message required' });
    }

    return res.status(200).json({
      id: Date.now().toString(),
      reply: `تم استلام: "${message}"`,
      timestamp: new Date().toISOString(),
    });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}