import React from 'react';

const RevenueTable = ({ projections }) => {
  const highestGrowthYear = projections.reduce((max, curr, index, arr) => {
    if (index === 0) return max;
    const growth = curr.revenue - arr[index - 1].revenue;
    return growth > max.growth ? { year: curr.year, growth } : max;
  }, { year: null, growth: 0 });

  return (
    <table className="table-auto w-full border-collapse border border-gray-400 mt-6">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Year</th>
          <th className="border border-gray-300 px-4 py-2">Projected Revenue</th>
        </tr>
      </thead>
      <tbody>
        {projections.map((item, index) => (
          <tr
            key={index}
            className={item.year === highestGrowthYear.year ? 'bg-yellow-200' : ''}
          >
            <td className="border border-gray-300 px-4 py-2">{item.year}</td>
            <td className="border border-gray-300 px-4 py-2">${item.revenue.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RevenueTable;
