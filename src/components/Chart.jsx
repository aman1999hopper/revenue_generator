import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => `Year ${item.year}`),
    datasets: [
      {
        label: 'Revenue Growth',
        data: data.map((item) => item.revenue),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Projected Revenue Growth',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;
