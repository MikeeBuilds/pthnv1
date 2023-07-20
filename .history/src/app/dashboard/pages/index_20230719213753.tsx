// In dashboard/pages/index.tsx
import React from 'react';
import TokenChart from '../components/TokenChart';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <TokenChart />
    </div>
  );
};

export default DashboardPage;
