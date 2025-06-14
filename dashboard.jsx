import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-200">Total Products: 20</div>
        <div className="p-4 bg-green-200">Pending Orders: 5</div>
        <div className="p-4 bg-yellow-200">Revenue: $10,000</div>
      </div>
    </div>
  );
}
