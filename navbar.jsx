// src/components/navbar.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between">
      <h1 className="font-bold">Slooze</h1>
      <div>
        <button onClick={toggleTheme} className="mr-4">Toggle Theme</button>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}
