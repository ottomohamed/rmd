import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method === 'GET') {
    res.status(200).json({ 
      logs: [
        { id: '1', message: 'تم تهيئة غرفة الأخبار', author: 'النظام', createdAt: new Date().toISOString() },
        { id: '2', message: 'مرحبا بكم في غرفة أخبار مغرب 24', author: 'المحرر', createdAt: new Date().toISOString() }
      ]
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

