// components/Layout.tsx
"use client";

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import SidePanel from './SidePanel';
import { AuthContext } from './AuthProvider';

const PageLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <main className="flex-1 p-6 bg-white">
        <header className="flex justify-between items-center p-2 bg-gray-100 h-12">
          {title && <h1 className="text-lg font-bold">{title}</h1>}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white text-xs px-3 py-1 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-primary text-white text-xs px-3 py-1 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out"
            >
              Login
            </button>
          )}
        </header>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
