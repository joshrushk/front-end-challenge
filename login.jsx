import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="mb-4 text-xl font-bold">Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="block w-full mb-2 p-2 border" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="block w-full mb-4 p-2 border" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Login</button>
    </form>
  );
}
