import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method === 'GET') {
    res.status(200).json({ 
      articles: [],
      message: 'API جاهز لاستقبال المقالات'
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
