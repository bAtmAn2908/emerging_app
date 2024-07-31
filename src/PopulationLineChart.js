import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart'; // Adjust import based on actual library

const PopulationLineChart = ({ city }) => {
  // Find the city data
  const cityData = city;

  if (!cityData) {
    return null; // or some placeholder
  }

  // Extract years and population data
  const years = Object.keys(cityData.population_proper); // Extract years from the population_proper object
  const population = years.map(year => parseInt(cityData.population_proper[year], 10)); // Convert population values to numbers

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: population, label: 'Population', id: 'populationId' },
      ]}
      xAxis={[{ data: years, scaleType: 'band' }]}
    />
  );
}

export default PopulationLineChart;
