// pages/api/eligibilityapi/currentCourses.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://localhost:8080/api/eligibilityapi/getCourses');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in API route /api/eligibilityapi/currentCourses:', error);

    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
