// components/CourseList.tsx
import React from 'react';
import { Course } from '../types/types';

interface CourseListProps {
  courses?: Course[];
  onAdd: () => void;
  onView: (course: Course) => void;
  onEdit: (course: Course) => void;
  onDelete: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onAdd, onView, onEdit, onDelete }) => {
  const safeCourses = courses ?? [];

  return (
    <div>
      <button 
        onClick={onAdd}
        className="bg-primary text-white px-4 py-2 mb-4 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
      >
        Add Course
      </button>
      <ul className="space-y-4">
        {safeCourses.map(course => (
          <li key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <span className="flex-1">{course.name}</span>
            <button 
              onClick={() => onView(course)}
              className="bg-secondary text-white px-4 py-1 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
            >
              View
            </button>
            <button 
              onClick={() => onEdit(course)}
              className="bg-secondary text-white px-4 py-1 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(course)}
              className="bg-secondary text-white px-4 py-1 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
