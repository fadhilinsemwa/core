// pages/api/tcuapi/checkStatus.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import https from 'https';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post('https://api.tcu.go.tz/applicants/checkStatus', req.body, {
      headers: {
        'Content-Type': 'application/xml',
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignore SSL certificate errors
      }),
    });

    res.status(200).send(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios specific error handling
      res.status(error.response?.status || 500).json({ error: error.message });
    } else {
      // General error handling
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
