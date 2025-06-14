import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="p-4 flex-1">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute allowedRoles={['manager']} />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products/new" element={<ProductForm />} />
                  <Route path="/products/:id/edit" element={<ProductForm />} />
                </Route>
                <Route element={<PrivateRoute allowedRoles={['manager', 'storekeeper']} />}>
                  <Route path="/products" element={<Products />} />
                </Route>
                <Route path="*" element={<Login />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}
