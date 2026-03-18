export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { adminKey } = req.query;
  
  if (adminKey !== 'meridian2024') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  if (req.method === 'GET') {
    res.status(200).json([
      { id: '101', title: 'مقترح تحقيق عن التعليم', authorName: 'أحمد العمري', status: 'pending', submittedAt: new Date().toISOString() }
    ]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}