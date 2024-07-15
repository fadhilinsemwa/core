// utils/eligibilityApi.ts
import axios from 'axios';
import { Course } from '../types/types';

// Check eligibility
export const checkEligibility = async (formData: { [key: string]: string }) => {
    console.log('Sending eligibility check request with data:', formData);
    try {
        const response = await axios.post('http://localhost:8080/api/eligibilityapi/checkEligibility', formData, {
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('Received eligibility check response:', response.data);
        if (response.data && response.data.eligibleCourses) {
            return response.data.eligibleCourses;
        } else {
            console.error('No eligible courses found in the response:', response.data);
            return null;
        }
    } catch (error) {
        console.error('Error occurred while checking eligibility:', error);
        throw error;
    }
};

// Change core subjects
export const changeCoreSubjects = async (coreSubjects: string[]) => {
    console.log('Sending core subjects change request with data:', coreSubjects);
    const response = await axios.post('http://localhost:8080/api/eligibilityapi/changeCoreSubjects', { coreSubjects }, {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Received core subjects change response:', response.data);
    return response.data;
};

// Add a new course
export const addCourse = async (course: Course): Promise<void> => {
    console.log('Sending add course request with data:', course);
    await axios.post('http://localhost:8080/api/eligibilityapi/addCourse', course, {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Add course request successful');
};

// Update an existing course
export const updateCourse = async (courseId: string, course: Course): Promise<void> => {
    console.log('Sending update course request for courseId:', courseId, 'with data:', course);
    await axios.put(`http://localhost:8080/api/eligibilityapi/updateCourse/${courseId}`, course, {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Update course request successful');
};

// Delete a course
export const deleteCourse = async (courseId: string): Promise<void> => {
    console.log('Sending delete course request for courseId:', courseId);
    await axios.delete(`http://localhost:8080/api/eligibilityapi/deleteCourse/${courseId}`, {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Delete course request successful');
};

// Delete all courses
export const deleteAllCourses = async (): Promise<void> => {
    console.log('Sending delete all courses request');
    await axios.delete('http://localhost:8080/api/eligibilityapi/deleteAllCourses', {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Delete all courses request successful');
};

// Get all courses
export const getCourses = async (): Promise<Course[]> => {
    console.log('Sending get courses request');
    const response = await axios.get('/api/eligibilityapi/currentCourses');
    console.log('Received get courses response:', response.data);
    return response.data;
};

// Login
export const login = async (username: string, password: string): Promise<void> => {
    console.log('Sending login request for username:', username);
    await axios.post('http://localhost:8080/api/eligibilityapi/login', { username, password }, {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('Login request successful');
};
