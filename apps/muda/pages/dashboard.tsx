// pages/dashboard.tsx
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/AuthProvider';

const DashboardContent: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-heading">Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return <DashboardContent />;
};

export default DashboardPage;
