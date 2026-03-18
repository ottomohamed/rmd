export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    const { limit = 100 } = req.query;
    
    res.status(200).json([
      { 
        id: '1', 
        message: 'تم تهيئة غرفة الأخبار', 
        author: 'النظام', 
        createdAt: new Date().toISOString(),
        messageType: 'system'
      },
      {
        id: '2',
        message: 'مرحبا بكم في غرفة أخبار مغرب 24',
        author: 'المحرر',
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        messageType: 'chat'
      }
    ]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
