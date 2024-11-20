import React, { useState } from 'react';
import RevenueTable from './components/RevenueTable';
import Chart from './components/Chart';
import { calculateProjections, calculateTotalRevenue, calculateAverageGrowth } from '../src/utils/Calculation.js';

const App = () => {
  const [currentRevenue, setCurrentRevenue] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [projections, setProjections] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averageGrowth, setAverageGrowth] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCalculate = () => {
    if (!currentRevenue || !growthRate || currentRevenue <= 0 || growthRate <= 0) {
      setErrorMessage('Please enter valid positive numbers for revenue and growth rate.');
      return;
    }
    setErrorMessage('');
    const revenueData = calculateProjections(currentRevenue, growthRate);
    setProjections(revenueData);
    setTotalRevenue(calculateTotalRevenue(revenueData));
    setAverageGrowth(calculateAverageGrowth(revenueData));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Revenue Calculator</h1>

      {/* Input Form */}
      <div className="mb-8 text-center">
        <input
          type="number"
          placeholder="Current Revenue"
          className="border p-2 w-full md:w-1/3 mb-4"
          value={currentRevenue}
          onChange={(e) => setCurrentRevenue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Annual Growth Rate (%)"
          className="border p-2 w-full md:w-1/3 mb-4"
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      {/* Projections Table */}
      {projections.length > 0 && (
        <>
          <RevenueTable projections={projections} />
          <div className="mt-4">
            <p>Total Revenue Over 5 Years: ${totalRevenue.toFixed(2)}</p>
            <p>Average Annual Growth: {averageGrowth.toFixed(2)}%</p>
          </div>
          <Chart data={projections} />
        </>
      )}
    </div>
  );
};

export default App;
