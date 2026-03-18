export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: '1',
        topic: 'الذكاء الاصطناعي في المغرب',
        score: 95,
        articles: ['ثورة الذكاء الاصطناعي', 'تطبيقات محلية']
      },
      {
        id: '2',
        topic: 'الطاقة المتجددة',
        score: 87,
        articles: ['محطات شمسية جديدة', 'استثمارات أوروبية']
      },
      {
        id: '3',
        topic: 'كأس العالم 2030',
        score: 76,
        articles: ['الاستعدادات المغربية', 'البنية التحتية']
      }
    ]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
