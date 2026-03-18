export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'POST') {
    const { prompt } = req.body || {};
    
    // محاكاة استجابة الذكاء الاصطناعي
    res.status(200).json({
      id: Date.now().toString(),
      content: \هذا محتوى تم توليده بناء على: "\".\,
      model: 'claude-3-haiku',
      created: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
}
