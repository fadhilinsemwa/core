// components/Login.tsx
"use client";

import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      router.push('/dashboard'); // Redirect to the dashboard or another page
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 space-y-6 font-body shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 font-heading">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col space-y-2 relative">
            <label htmlFor="password" className="font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-10 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12l-3 3m0 0l-3-3m3 3V9m0-4a4 4 0 100 8m0 4a4 4 0 100-8m0 4a4 4 0 100-8" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12l-3 3m0 0l-3-3m3 3V9m0-4a4 4 0 100 8m0 4a4 4 0 100-8m0 4a4 4 0 100-8" />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 ease-in-out w-full"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
