import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ allowedRoles }) {
  const { user } = useAuth();
  return user && allowedRoles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
