import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import citiesData from './cities.json'; // Adjust the path as needed

const SimpleBarChart = ({ city }) => {
  // Find the city data
  const cityData = citiesData.find(item => item.city === city.city);

  if (!cityData) {
    return null; // or some placeholder
  }

  // Extract years and rates for birth rate and death rate
  const years = cityData.birth_rate.map(entry => entry.year);
  const birthRates = cityData.birth_rate.map(entry => entry.rate);
  const deathRates = cityData.death_rate.map(entry => entry.rate);

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: birthRates, label: 'Birth Rate (%)', id: 'birthRateId' },
        { data: deathRates, label: 'Death Rate (%)', id: 'deathRateId' },
      ]}
      xAxis={[{ data: years, scaleType: 'band' }]}
    />
  );
}

export default SimpleBarChart;
