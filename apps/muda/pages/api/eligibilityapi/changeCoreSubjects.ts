// pages/api/eligibilityapi/changeCoreSubjects.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { coreSubjects } = req.body; // Destructure to ensure correct structure
    if (!Array.isArray(coreSubjects)) {
      return res.status(400).json({ error: 'Invalid request body format. Expected an array of core subjects.' });
    }
    
    const response = await axios.post('http://localhost:8080/api/eligibilityapi/changeCoreSubjects', { coreSubjects }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in API route /api/eligibilityapi/changeCoreSubjects:', error);

    if (axios.isAxiosError(error)) {
      // Axios specific error handling
      res.status(error.response?.status || 500).json({ error: error.message });
    } else {
      // General error handling
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
