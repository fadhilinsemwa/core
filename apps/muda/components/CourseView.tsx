// components/CourseView.tsx
import React from 'react';
import { Course } from '../types/types';

interface CourseViewProps {
  course: Course;
  onBack: () => void;
}

const CourseView: React.FC<CourseViewProps> = ({ course, onBack }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h2 className="text-xl font-bold mb-4 font-heading">{course.name}</h2>
      <ul className="list-disc list-inside">
        {course.subjects && course.subjects.length > 0 ? (
          course.subjects.map((subject: { id?: string; name: string }, index: number) => (
            <li key={index}>{subject.name}</li>
          ))
        ) : (
          <li>No subjects available</li>
        )}
      </ul>
      <button 
        onClick={onBack}
        className="bg-secondary text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
      >
        Back
      </button>
    </div>
  );
};

export default CourseView;
