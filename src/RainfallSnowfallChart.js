import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart'; // Adjust import based on actual library

const RainfallSnowfallChart = ({ city }) => {
  // Find the city data
  const cityData = city;

  if (!cityData) {
    return null; // or some placeholder
  }

  // Extract years and average rainfall and snowfall data
  const years = Object.keys(cityData.average_rainfall);
  const rainfall = years.map(year => parseInt(cityData.average_rainfall[year], 10));
  const snowfall = years.map(year => parseInt(cityData.average_snowfall[year], 10));

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: rainfall, label: 'Rainfall (mm)', id: 'rainfallId' },
        { data: snowfall, label: 'Snowfall (cm)', id: 'snowfallId' }
      ]}
      xAxis={[{ data: years, scaleType: 'band' }]}
    />
  );
}

export default RainfallSnowfallChart;
