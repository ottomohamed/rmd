import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { prompt } = req.body || {};
    res.status(200).json({
      id: Date.now().toString(),
      content: `تم التوليد بناءً على: "${prompt}"`,
      model: 'claude-3-haiku',
      created: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
}