// pages/eligibilitypages/current-courses.tsx
import React, { useEffect, useState } from 'react';
import { getCourses } from '../../utils/eligibilityApi';
import { Course } from '../../types/types';

const CurrentCoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getCourses();
        setCourses(Array.isArray(response) ? response : []);
      } catch (err) {
        setError('Failed to fetch current courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    courses.forEach(course => {
      const seenIds = new Set();
      course.subjects.forEach(subject => {
        if (!subject.id) {
          console.warn(`Subject ID is missing for subject "${subject.name}" in course "${course.name}"`);
        } else if (seenIds.has(subject.id)) {
          console.warn(`Subject ID "${subject.id}" is not unique for subject "${subject.name}" in course "${course.name}"`);
        } else {
          seenIds.add(subject.id);
        }
      });
    });
  }, [courses]);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h1 className="text-2xl font-bold mb-4 font-heading">Current Courses</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {courses.length === 0 && !loading && <p>No courses available</p>}
      {courses.length > 0 && (
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="p-4 border rounded-lg">
              <h2 className="text-xl font-bold mb-2 font-heading">{course.name}</h2>
              <ul className="list-disc list-inside">
                {course.subjects.map((subject, index) => (
                  <li key={`${subject.id || subject.name}-${index}`} className="ml-4">
                    {subject.name}: {subject.grade}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentCoursesPage;
