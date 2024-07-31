import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart'; // Adjust import based on actual library

const AverageAgeChart = ({ city }) => {
  // Find the city data
  const cityData = city;

  if (!cityData) {
    return null; // or some placeholder
  }

  // Extract years and average age data
  const years = Object.keys(cityData.average_age.male);
  const maleAges = years.map(year => parseInt(cityData.average_age.male[year], 10));
  const femaleAges = years.map(year => parseInt(cityData.average_age.female[year], 10));

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: maleAges, label: 'Male', id: 'maleId' },
        { data: femaleAges, label: 'Female', id: 'femaleId' }
      ]}
      xAxis={[{ data: years, scaleType: 'band' }]}
    />
  );
}

export default AverageAgeChart;
