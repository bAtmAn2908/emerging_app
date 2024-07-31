import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const FamilyIncomeSizeChart = ({ city }) => {
  // Extract years and data from city object
  const years = Object.keys(city.average_family_income);
  const income = years.map(year => parseInt(city.average_family_income[year], 10));
  const size = years.map(year => parseFloat(city.average_family_size[year]));

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        {
          data: income,
          label: 'Average Family Income ($)',
          id: 'incomeId',
          yAxisId: 'leftAxisId',
        },
        {
          data: size,
          label: 'Average Family Size (persons)',
          id: 'sizeId',
          yAxisId: 'rightAxisId',
        },
      ]}
      xAxis={[{ data: years, scaleType: 'band' }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />
  );
};

export default FamilyIncomeSizeChart;
