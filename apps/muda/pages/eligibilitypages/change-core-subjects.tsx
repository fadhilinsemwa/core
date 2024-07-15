// pages/eligibilitypages/change-core-subjects.tsx
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../components/AuthProvider';
import { changeCoreSubjects } from '../../utils/eligibilityApi';

const ChangeCoreSubjectsPage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const [coreSubjects, setCoreSubjects] = useState<string[]>(['Biology', 'Chemistry', 'Physics']);
  const [newSubject, setNewSubject] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleAddSubject = () => {
    if (newSubject && !coreSubjects.includes(newSubject)) {
      setCoreSubjects([...coreSubjects, newSubject]);
      setNewSubject('');
    }
  };

  const handleDeleteSubject = (subject: string) => {
    setCoreSubjects(coreSubjects.filter(s => s !== subject));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await changeCoreSubjects(coreSubjects);
      setResult('Core subjects successfully changed');
    } catch (err) {
      setError('Failed to change core subjects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null; // Avoid rendering the form if the user is not authenticated
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h1 className="text-2xl font-bold mb-4 font-heading">Change Core Subjects</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {coreSubjects.map((subject, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              value={subject}
              readOnly
              className="border p-1 h-8 rounded-lg flex-1 bg-gray-200"
              style={{ marginLeft: '8px', marginRight: '8px', paddingLeft: '5px' }}
            />
            <button
              type="button"
              onClick={() => handleDeleteSubject(subject)}
              className="bg-secondary text-white px-4 py-1 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
              style={{ marginBottom: '4px' }}
            >
              Delete
            </button>
          </div>
        ))}
        <div className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            placeholder="New Subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="border p-1 h-8 rounded-lg flex-1 focus:ring-2 focus:ring-primary focus:border-transparent"
            style={{ marginLeft: '8px', marginRight: '8px', paddingLeft: '5px' }}
          />
          <button
            type="button"
            onClick={handleAddSubject}
            className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out"
            style={{ marginBottom: '4px' }}
          >
            Add Subject
          </button>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
        >
          {loading ? 'Changing...' : 'Change Core Subjects'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && <p className="text-green-500 mt-4">{result}</p>}
    </div>
  );
};

export default ChangeCoreSubjectsPage;
