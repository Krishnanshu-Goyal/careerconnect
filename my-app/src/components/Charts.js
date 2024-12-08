import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const barData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80],
      backgroundColor: 'rgba(75,192,192,0.6)',
    },
  ],
};

const Charts = () => (
  <div className="charts-container">
    <div className="chart">
      <Pie data={pieData} />
    </div>
    <div className="chart">
      <Bar data={barData} />
    </div>
  </div>
);

export default Charts;