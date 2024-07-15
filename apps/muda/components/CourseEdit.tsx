// components/CourseEdit.tsx
import React from 'react';
import CourseForm from './CourseForm';
import { Course } from '../types/types';

interface CourseEditProps {
  course: Course;
  onSubmit: (course: Course) => void;
  onCancel: () => void;
}

const CourseEdit: React.FC<CourseEditProps> = ({ course, onSubmit, onCancel }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h2 className="text-xl font-bold mb-4 font-heading">Edit Course</h2>
      <CourseForm onSubmit={onSubmit} onCancel={onCancel} initialData={course} />
    </div>
  );
};

export default CourseEdit;
