// app/page.tsx
import React from 'react';
import Layout from '../components/Layout';

const Card: React.FC<{ title: string, description: string, link: string }> = ({ title, description, link }) => (
  <a href={link} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
    <p className="font-normal text-gray-700">{description}</p>
  </a>
);

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="font-heading text-3xl">Welcome to Mwanza University Dashboard</h1>
        <p className="mt-4">Select an option to get started.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card title="Apply Now" description="Start your application" link="/applypages/apply-now" />
        <Card title="Check Eligibility" description="Check your eligibility" link="/eligibilitypages/check" />
        <Card title="Dashboard" description="Go to the dashboard" link="/dashboard" />
        <Card title="Soma" description="Access Soma platform" link="/soma-pages/soma-link" />
        {/* Add other common navigation cards here */}
      </div>
      <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
        v0.2
      </div>
    </Layout>
  );
};

export default Home;
