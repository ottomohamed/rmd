export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    res.status(200).json([
      { id: '1', topic: 'الذكاء الاصطناعي في المغرب', score: 95 },
      { id: '2', topic: 'الطاقة المتجددة', score: 87 },
      { id: '3', topic: 'كأس العالم 2030', score: 76 }
    ]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}