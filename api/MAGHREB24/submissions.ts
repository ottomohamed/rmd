import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { adminKey } = req.query
  
  if (adminKey !== 'meridian2024') {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  
  if (req.method === 'GET') {
    res.status(200).json({ 
      submissions: [
        { id: '101', title: 'مقترح تحقيق', authorName: 'أحمد', status: 'pending' }
      ]
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
