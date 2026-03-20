import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const { message } = req.body || {};
    res.status(200).json({ reply: `تم استقبال الرسالة: "${message}"` });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
}