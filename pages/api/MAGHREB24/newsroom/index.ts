import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    res.status(200).json({ newsroom: [] });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}