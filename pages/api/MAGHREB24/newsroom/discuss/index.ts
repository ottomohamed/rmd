import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method === 'POST') {
    const { message } = req.body || {}
    if (!message) return res.status(400).json({ error: 'Message required' })

    res.status(200).json({
      id: Date.now().toString(),
      reply: `تم استلام رسالتك: ${message}`,
      timestamp: new Date().toISOString()
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
