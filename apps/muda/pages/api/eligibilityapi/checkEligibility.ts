// pages/api/checkEligibility.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post('http://localhost:8080/api/eligibilityapi/checkEligibility', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to check eligibility' });
  }
}
