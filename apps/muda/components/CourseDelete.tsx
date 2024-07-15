// components/CourseDelete.tsx
import React from 'react';
import { Course } from '../types/types';

interface CourseDeleteProps {
  course: Course;
  onDelete: () => void;
  onCancel: () => void;
}

const CourseDelete: React.FC<CourseDeleteProps> = ({ course, onDelete, onCancel }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h2 className="text-xl font-bold mb-4 font-heading">Delete Course</h2>
      <p>Are you sure you want to delete the course: <strong>{course.name}</strong>?</p>
      <div className="flex space-x-4 mt-4">
        <button 
          onClick={onDelete}
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
        >
          Delete
        </button>
        <button 
          type="button"
          onClick={onCancel}
          className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CourseDelete;
