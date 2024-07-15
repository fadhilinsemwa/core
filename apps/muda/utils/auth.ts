// utils/auth.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/eligibilityapi';

export const login = async (username: string, password: string): Promise<void> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password }, {
      headers: { 'Content-Type': 'application/json' },
    });
    // Handle successful login, e.g., store token in localStorage
    localStorage.setItem('authToken', response.data.token);
    console.log('Login successful');
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/logout`, {}, {
      headers: { 'Content-Type': 'application/json' },
    });
    // Handle successful logout, e.g., remove token from localStorage
    localStorage.removeItem('authToken');
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout failed', error);
    throw error;
  }
};
