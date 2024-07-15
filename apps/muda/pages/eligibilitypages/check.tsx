// pages/eligibilitypages/check.tsx
import React, { useState } from 'react';
import { checkEligibility } from '../../utils/eligibilityApi';

// Define the type for the form data
type FormData = {
  [key: string]: string;
};

const CheckPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Biology: '',
    Chemistry: '',
    Physics: '',
    Mathematics: '',
    ComputerScience: '',
  });
  const [newSubject, setNewSubject] = useState('');
  const [result, setResult] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(`Updated ${name} to ${value}`);
  };

  const handleAddSubject = () => {
    if (newSubject && !formData[newSubject]) {
      setFormData({
        ...formData,
        [newSubject]: '',
      });
      console.log(`Added new subject: ${newSubject}`);
      setNewSubject('');
    }
  };

  const handleDeleteSubject = (subject: string) => {
    const updatedFormData = { ...formData };
    delete updatedFormData[subject];
    setFormData(updatedFormData);
    console.log(`Deleted subject: ${subject}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log('Submitting form data:', formData);

    try {
      const response = await checkEligibility(formData);
      console.log('Received response:', response);
      if (response) {
        setResult(response);
      } else {
        setError('No eligible courses found.');
      }
    } catch (err) {
      console.error('Error checking eligibility:', err);
      setError('Failed to check eligibility. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-body">
      <h1 className="text-2xl font-bold mb-4 font-heading">Check Eligibility</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((subject) => (
          <div key={subject} className="flex items-center space-x-4 mb-4">
            <label htmlFor={subject} className="w-32">{subject}:</label>
            <input
              type="text"
              id={subject}
              name={subject}
              value={formData[subject]}
              onChange={handleChange}
              className={`border p-1 h-8 rounded-lg flex-1 focus:ring-2 focus:ring-primary focus:border-transparent ${formData[subject] ? 'bg-secondary-light' : ''}`}
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
          {loading ? 'Checking...' : 'Check Eligibility'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-bold font-heading">Eligible Courses</h2>
          <ul className="list-disc list-inside mb-4">
            {result.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="https://edumas.mwanzauniversity.ac.tz/"
              className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 ease-in-out inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckPage;
