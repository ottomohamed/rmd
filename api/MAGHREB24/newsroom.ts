import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method === 'GET') {
    res.status(200).json({ 
      logs: [
        { id: '1', message: 'غرفة الأخبار جاهزة', author: 'النظام', createdAt: new Date().toISOString() }
      ]
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
