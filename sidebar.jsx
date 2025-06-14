import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <div className="w-48 p-4 bg-gray-100 dark:bg-gray-700">
      {user.role === 'manager' && <Link to="/dashboard" className="block mb-2">Dashboard</Link>}
      <Link to="/products" className="block mb-2">Products</Link>
      {user.role === 'manager' && <Link to="/products/new" className="block">Add Product</Link>}
    </div>
  );
}
