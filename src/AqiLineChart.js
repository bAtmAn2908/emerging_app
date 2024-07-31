import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart'; // Adjust import based on actual library

const AqiLineChart = ({ city }) => {
  // Find the city data
  const cityData = city;

  if (!cityData) {
    return null; // or some placeholder
  }

  // Extract years and AQI levels data
  const years = Object.keys(cityData.aqi_levels); // Extract years from the aqi_levels object
  const aqiLevels = years.map(year => parseInt(cityData.aqi_levels[year], 10)); // Convert AQI values to numbers

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: aqiLevels, label: 'AQI Levels', id: 'aqiId' },
      ]}
      xAxis={[{ data: years, scaleType: 'band' }]}
    />
  );
}

export default AqiLineChart;
