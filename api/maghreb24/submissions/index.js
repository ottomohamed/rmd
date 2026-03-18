export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { adminKey } = req.query;
  
  if (adminKey !== 'meridian2024') {
    return res.status(401).json({ error: 'Unauthorized: Invalid admin key' });
  }
  
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: '101',
        title: 'مقترح تحقيق عن التعليم',
        authorName: 'أحمد العمري',
        status: 'pending',
        submittedAt: new Date().toISOString(),
        section: 'society'
      },
      {
        id: '102',
        title: 'تقرير حول الاستثمارات الأجنبية',
        authorName: 'فاطمة الكنوني',
        status: 'approved',
        submittedAt: new Date(Date.now() - 86400000).toISOString(),
        section: 'economics'
      }
    ]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
