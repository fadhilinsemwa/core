// pages/eligibilitypages/check-applicant-status.tsx
import React, { useState } from 'react';
import { checkStatus } from '../../utils/tcuApi';

const CheckApplicantStatusPage: React.FC = () => {
  const [indexNumbers, setIndexNumbers] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await checkStatus(
        indexNumbers.split(',').map(num => num.trim()),
        'DM', // Replace with actual username
        'OTcyMURGMTY5QTRENU3MUJ' // Replace with actual session token
      );
      setResult(response);
    } catch (err) {
      setError('Failed to fetch status. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Check Applicant Status</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="indexNumbers">Index Numbers (comma separated):</label>
          <input
            type="text"
            id="indexNumbers"
            value={indexNumbers}
            onChange={(e) => setIndexNumbers(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Check Status'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h2>Result</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default CheckApplicantStatusPage;
