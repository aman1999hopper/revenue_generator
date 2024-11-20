export const calculateProjections = (currentRevenue, growthRate) => {
    const projections = [];
    let revenue = parseFloat(currentRevenue);
  
    for (let i = 1; i <= 5; i++) {
      revenue *= 1 + parseFloat(growthRate) / 100;
      projections.push({ year: i, revenue });
    }
  
    return projections;
  };
  
  export const calculateTotalRevenue = (projections) =>
    projections.reduce((total, item) => total + item.revenue, 0);
  
  export const calculateAverageGrowth = (projections) => {
    if (projections.length < 2) return 0;
    const initialRevenue = projections[0].revenue;
    const finalRevenue = projections[projections.length - 1].revenue;
    return ((finalRevenue - initialRevenue) / initialRevenue / (projections.length - 1)) * 100;
  };
  