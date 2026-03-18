export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'POST') {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ error: 'Message required' });
    
    res.status(200).json({
      id: Date.now().toString(),
      reply: `تم استلام: "${message}"`,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}