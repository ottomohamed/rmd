import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method === 'GET') {
    res.status(200).json({ 
      trends: [
        { id: '1', topic: 'الذكاء الاصطناعي', score: 95 },
        { id: '2', topic: 'الطاقة المتجددة', score: 87 }
      ]
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
