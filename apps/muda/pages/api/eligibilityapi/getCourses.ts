// pages/api/eligibilityapi/getCourse.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get('http://localhost:8080/api/eligibilityapi/getCourses');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Error fetching courses' });
    }
}

