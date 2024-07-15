// pages/api/eligibilityapi/addCourse.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/api/eligibilityapi/addCourse', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ error: 'Failed to add course' });
  }
}
