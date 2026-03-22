import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method === 'POST') {
    const { prompt } = req.body || {}
    res.status(200).json({ 
      id: Date.now().toString(),
      content: `تم توليد محتوى بناء على: ${prompt || "لا يوجد نص"}`,
      model: 'claude-3-haiku'
    })
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }
}
