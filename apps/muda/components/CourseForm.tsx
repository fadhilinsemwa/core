// components/CourseForm.tsx
import React, { useState } from 'react';
import { Course, Subject } from '../types/types';

interface CourseFormProps {
  onSubmit: (course: Course) => void;
  onCancel: () => void;
  initialData?: Course;
}

const CourseForm: React.FC<CourseFormProps> = ({ onSubmit, onCancel, initialData = { id: '', name: '', subjects: [] } }) => {
  const [course, setCourse] = useState<Course>({ ...initialData, subjects: initialData.subjects || [] });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubjectChange = (index: number, field: keyof Subject, value: string) => {
    const newSubjects = [...course.subjects];
    newSubjects[index] = { ...newSubjects[index], [field]: value };
    setCourse({ ...course, subjects: newSubjects });
  };

  const handleAddSubject = () => {
    setCourse({ ...course, subjects: [...course.subjects, { id: '', name: '', grade: '' }] });
  };

  const handleRemoveSubject = (index: number) => {
    const newSubjects = course.subjects.filter((_, i) => i !== index);
    setCourse({ ...course, subjects: newSubjects });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(course);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-4 mb-4">
        <label htmlFor="name" className="w-32">Course Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={course.name}
          onChange={handleChange}
          className="border p-1 h-8 rounded-lg flex-1 focus:ring-2 focus:ring-primary focus:border-transparent"
          style={{ marginLeft: '8px', marginRight: '8px', paddingLeft: '5px' }}
          required
        />
      </div>
      <div>
        <label>Subjects:</label>
        {course.subjects.length > 0 ? (
          course.subjects.map((subject, index) => (
            <div key={index} className="flex items-center space-x-4 mb-2">
              <input
                type="text"
                placeholder="Subject Name"
                value={subject.name}
                onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
                className="border p-1 h-8 rounded-lg flex-1 focus:ring-2 focus:ring-primary focus:border-transparent"
                style={{ marginLeft: '8px', marginRight: '8px', paddingLeft: '5px' }}
                required
              />
              <input
                type="text"
                placeholder="Subject Grade"
                value={subject.grade}
                onChange={(e) => handleSubjectChange(index, 'grade', e.target.value)}
                className="border p-1 h-8 rounded-lg flex-1 focus:ring-2 focus:ring-primary focus:border-transparent"
                style={{ marginLeft: '8px', marginRight: '8px', paddingLeft: '5px' }}
                required
              />
              <button 
                type="button"
                onClick={() => handleRemoveSubject(index)}
                className="bg-secondary text-white px-4 py-1 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
                style={{ marginBottom: '4px' }}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No subjects available</div>
        )}
        <button 
          type="button"
          onClick={handleAddSubject}
          className="bg-primary text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
        >
          Add Subject
        </button>
      </div>
      <div className="flex space-x-4 mt-4">
        <button 
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
        >
          Save
        </button>
        <button 
          type="button"
          onClick={onCancel}
          className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
