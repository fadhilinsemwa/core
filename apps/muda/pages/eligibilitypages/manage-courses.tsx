// pages/eligibilitypages/manage-courses.tsx
import React, { useState, useEffect } from 'react';
import CourseForm from '../../components/CourseForm';
import CourseList from '../../components/CourseList';
import CourseView from '../../components/CourseView';
import CourseEdit from '../../components/CourseEdit';
import CourseDelete from '../../components/CourseDelete';
import { getCourses, addCourse, updateCourse, deleteCourse } from '../../utils/eligibilityApi';
import { Course } from '../../types/types';

const ManageCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [view, setView] = useState<'list' | 'add' | 'view' | 'edit' | 'delete'>('list');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data: Course[] = await getCourses();
    setCourses(data);
  };

  const handleAddCourse = async (course: Course) => {
    await addCourse(course);
    fetchCourses();
    setView('list');
  };

  const handleUpdateCourse = async (course: Course) => {
    await updateCourse(course.id, course);
    fetchCourses();
    setView('list');
  };

  const handleDeleteCourse = async (courseId: string) => {
    await deleteCourse(courseId);
    fetchCourses();
    setView('list');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h1 className="text-2xl font-bold mb-4 font-heading">Manage Courses</h1>
      {view === 'list' && (
        <CourseList
          courses={courses}
          onAdd={() => setView('add')}
          onView={(course: Course) => { setSelectedCourse(course); setView('view'); }}
          onEdit={(course: Course) => { setSelectedCourse(course); setView('edit'); }}
          onDelete={(course: Course) => { setSelectedCourse(course); setView('delete'); }}
        />
      )}
      {view === 'add' && (
        <CourseForm
          onSubmit={handleAddCourse}
          onCancel={() => setView('list')}
        />
      )}
      {view === 'view' && selectedCourse && (
        <CourseView
          course={selectedCourse}
          onBack={() => setView('list')}
        />
      )}
      {view === 'edit' && selectedCourse && (
        <CourseEdit
          course={selectedCourse}
          onSubmit={handleUpdateCourse}
          onCancel={() => setView('list')}
        />
      )}
      {view === 'delete' && selectedCourse && (
        <CourseDelete
          course={selectedCourse}
          onDelete={() => { handleDeleteCourse(selectedCourse.id); }}
          onCancel={() => setView('list')}
        />
      )}
    </div>
  );
};

export default ManageCourses;
