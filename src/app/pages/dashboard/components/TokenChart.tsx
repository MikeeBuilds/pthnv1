// In dashboard/components/TokenChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const TokenChart: React.FC = () => (
  <>
    <div className='header'>
      <h1 className='title'>Token Chart</h1>
    </div>
    <Line data={data} />
  </>
);

export default TokenChart;
