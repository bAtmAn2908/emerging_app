import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const jsonData = {
  "Ontario Farm Data": {
      "1871": {
        "Number of Census Farms": 172258,
        "Total Area of Farms (acres)": 16162000,
        "Average Farm Size (acres)": 94,
        "Cropland (acres)": 6744449,
        "Tame or Seeded Pasture (acres)": 2453000,
        "Natural Land for Pasture (acres)": 2015768,
        "Summerfallow (acres)": 245324,
        "All Other Land (acres)": 4703459,
        "Wheat (acres)": 1365872,
        "Number of Farms Reporting Wheat": 172258,
        "Average Wheat Acres per Farm": 8,
        "Tree Fruit (acres)": 180617,
        "Number of Farms Reporting Tree Fruit": 138761,
        "Average Tree Fruit Acres per Farm": 1,
        "Vegetables (acres)": 19200,
        "Potatoes (acres)": 165580,
        "Number of Farms Reporting Potatoes": 157551,
        "Average Potato Acres per Farm": 1,
        "Total Number of Cattle and Calves": 1355233,
        "Number of Farms Reporting Cattle and Calves": 172258,
        "Average Number of Cattle and Calves per Farm": 8,
        "Total Number of Pigs": 874664,
        "Number of Farms Reporting Pigs": 172258,
        "Average Number of Pigs per Farm": 5
      },
      "1881": {
        "Number of Census Farms": 206989,
        "Total Area of Farms (acres)": 19260000,
        "Average Farm Size (acres)": 93,
        "Cropland (acres)": 8675071,
        "Tame or Seeded Pasture (acres)": 2329245,
        "Natural Land for Pasture (acres)": 2405693,
        "Summerfallow (acres)": 236707,
        "All Other Land (acres)": 5613284,
        "Wheat (acres)": 1930123,
        "Number of Farms Reporting Wheat": 206989,
        "Average Wheat Acres per Farm": 9,
        "Tree Fruit (acres)": 136961,
        "Number of Farms Reporting Tree Fruit": 118715,
        "Average Tree Fruit Acres per Farm": 1,
        "Vegetables (acres)": 66306,
        "Potatoes (acres)": 171175,
        "Number of Farms Reporting Potatoes": 139513,
        "Average Potato Acres per Farm": 1,
        "Total Number of Cattle and Calves": 1702167,
        "Number of Farms Reporting Cattle and Calves": 206989,
        "Average Number of Cattle and Calves per Farm": 8,
        "Total Number of Pigs": 700922,
        "Number of Farms Reporting Pigs": 206989,
        "Average Number of Pigs per Farm": 3
      },
      "1891": {
        "Number of Census Farms": 216195,
        "Total Area of Farms (acres)": 21092000,
        "Average Farm Size (acres)": 98,
        "Cropland (acres)": 8502946,
        "Tame or Seeded Pasture (acres)": 2448205,
        "Natural Land for Pasture (acres)": 2967616,
        "Summerfallow (acres)": 248796,
        "All Other Land (acres)": 6924438,
        "Wheat (acres)": 1430532,
        "Number of Farms Reporting Wheat": 216195,
        "Average Wheat Acres per Farm": 7,
        "Tree Fruit (acres)": 79206,
        "Number of Farms Reporting Tree Fruit": 13861,
        "Average Tree Fruit Acres per Farm": 6,
        "Vegetables (acres)": 68444,
        "Potatoes (acres)": 123093
      },
      "1901": {
        "Number of Census Farms": 224857,
        "Total Area of Farms (acres)": 22563432,
        "Average Farm Size (acres)": 100,
        "Cropland (acres)": 8727930,
        "Tame or Seeded Pasture (acres)": 2761789,
        "Natural Land for Pasture (acres)": 3184885,
        "Summerfallow (acres)": 216694,
        "All Other Land (acres)": 7840134,
        "Wheat (acres)": 1271160,
        "Number of Farms Reporting Wheat": 224857,
        "Average Wheat Acres per Farm": 6,
        "Tree Fruit (acres)": 111113,
        "Number of Farms Reporting Tree Fruit": 20053,
        "Average Tree Fruit Acres per Farm": 6,
        "Vegetables (acres)": 76459,
        "Potatoes (acres)": 128601
      },
      "1911": {
        "Number of Census Farms": 225190,
        "Total Area of Farms (acres)": 22659727,
        "Average Farm Size (acres)": 101,
        "Cropland (acres)": 10250426,
        "Tame or Seeded Pasture (acres)": 2571040,
        "Natural Land for Pasture (acres)": 2870575,
        "Summerfallow (acres)": 126325,
        "All Other Land (acres)": 6759361,
        "Wheat (acres)": 1124844,
        "Number of Farms Reporting Wheat": 225190,
        "Average Wheat Acres per Farm": 5,
        "Tree Fruit (acres)": 130957,
        "Number of Farms Reporting Tree Fruit": 21722,
        "Average Tree Fruit Acres per Farm": 6,
        "Vegetables (acres)": 97037,
        "Potatoes (acres)": 109731
      },
      "1921": {
        "Number of Census Farms": 218285,
        "Total Area of Farms (acres)": 21579677,
        "Average Farm Size (acres)": 99,
        "Cropland (acres)": 10730420,
        "Tame or Seeded Pasture (acres)": 2285092,
        "Natural Land for Pasture (acres)": 2638351,
        "Summerfallow (acres)": 120926,
        "All Other Land (acres)": 5784888,
        "Wheat (acres)": 916614,
        "Number of Farms Reporting Wheat": 218285,
        "Average Wheat Acres per Farm": 4,
        "Tree Fruit (acres)": 124497,
        "Number of Farms Reporting Tree Fruit": 21827,
        "Average Tree Fruit Acres per Farm": 6,
        "Vegetables (acres)": 103716,
        "Potatoes (acres)": 124594
      },
      "1931": {
        "Number of Census Farms": 213207,
        "Total Area of Farms (acres)": 21470000,
        "Average Farm Size (acres)": 101,
        "Cropland (acres)": 11324519,
        "Tame or Seeded Pasture (acres)": 2156185,
        "Natural Land for Pasture (acres)": 2353547,
        "Summerfallow (acres)": 112879,
        "All Other Land (acres)": 5746870,
        "Wheat (acres)": 808964,
        "Number of Farms Reporting Wheat": 213207,
        "Average Wheat Acres per Farm": 4,
        "Tree Fruit (acres)": 122062,
        "Number of Farms Reporting Tree Fruit": 20588,
        "Average Tree Fruit Acres per Farm": 6,
        "Vegetables (acres)": 113507,
        "Potatoes (acres)": 140474
      },
      "1941": {
        "Number of Census Farms": 201726,
        "Total Area of Farms (acres)": 21410000,
        "Average Farm Size (acres)": 106,
        "Cropland (acres)": 11441504,
        "Tame or Seeded Pasture (acres)": 1817358,
        "Natural Land for Pasture (acres)": 1899545,
        "Summerfallow (acres)": 67950,
        "All Other Land (acres)": 6514643,
        "Wheat (acres)": 1265145,
        "Number of Farms Reporting Wheat": 201726,
        "Average Wheat Acres per Farm": 6,
        "Tree Fruit (acres)": 128167,
        "Number of Farms Reporting Tree Fruit": 22503,
        "Average Tree Fruit Acres per Farm": 6,
        "Vegetables (acres)": 112508,
        "Potatoes (acres)": 147228
      },
      "1951": {
        "Number of Census Farms": 157922,
        "Total Area of Farms (acres)": 20592672,
        "Average Farm Size (acres)": 130,
        "Cropland (acres)": 10913779,
        "Tame or Seeded Pasture (acres)": 1461867,
        "Natural Land for Pasture (acres)": 1292281,
        "Summerfallow (acres)": 32868,
        "All Other Land (acres)": 6938877,
        "Wheat (acres)": 1405807,
        "Number of Farms Reporting Wheat": 157922,
        "Average Wheat Acres per Farm": 9,
        "Tree Fruit (acres)": 136847,
        "Number of Farms Reporting Tree Fruit": 20480,
        "Average Tree Fruit Acres per Farm": 7,
        "Vegetables (acres)": 123900,
        "Potatoes (acres)": 119503
      },
      "1961": {
        "Number of Census Farms": 116823,
        "Total Area of Farms (acres)": 19139215,
        "Average Farm Size (acres)": 164,
        "Cropland (acres)": 11334715,
        "Tame or Seeded Pasture (acres)": 952614,
        "Natural Land for Pasture (acres)": 1000656,
        "Summerfallow (acres)": 14826,
        "All Other Land (acres)": 6531404,
        "Wheat (acres)": 1444887,
        "Number of Farms Reporting Wheat": 116823,
        "Average Wheat Acres per Farm": 12,
        "Tree Fruit (acres)": 135786,
        "Number of Farms Reporting Tree Fruit": 15756,
        "Average Tree Fruit Acres per Farm": 9,
        "Vegetables (acres)": 128631,
        "Potatoes (acres)": 88104
      },
      "1971": {
        "Number of Census Farms": 83667,
        "Total Area of Farms (acres)": 16047689,
        "Average Farm Size (acres)": 192,
        "Cropland (acres)": 11665441,
        "Tame or Seeded Pasture (acres)": 673679,
        "Natural Land for Pasture (acres)": 583215,
        "Summerfallow (acres)": 6098,
        "All Other Land (acres)": 3127256,
        "Wheat (acres)": 1359741,
        "Number of Farms Reporting Wheat": 83667,
        "Average Wheat Acres per Farm": 16,
        "Tree Fruit (acres)": 115198,
        "Number of Farms Reporting Tree Fruit": 8857,
        "Average Tree Fruit Acres per Farm": 13,
        "Vegetables (acres)": 121327,
        "Potatoes (acres)": 68354
      },
      "1981": {
        "Number of Census Farms": 68375,
        "Total Area of Farms (acres)": 15529458,
        "Average Farm Size (acres)": 227,
        "Cropland (acres)": 11844788,
        "Tame or Seeded Pasture (acres)": 517162,
        "Natural Land for Pasture (acres)": 505922,
        "Summerfallow (acres)": 1142,
        "All Other Land (acres)": 3042544,
        "Wheat (acres)": 1421155,
        "Number of Farms Reporting Wheat": 68375,
        "Average Wheat Acres per Farm": 21,
        "Tree Fruit (acres)": 110115,
        "Number of Farms Reporting Tree Fruit": 6031,
        "Average Tree Fruit Acres per Farm": 18,
        "Vegetables (acres)": 119504,
        "Potatoes (acres)": 65449
      },
      "1991": {
        "Number of Census Farms": 67431,
        "Total Area of Farms (acres)": 15364490,
        "Average Farm Size (acres)": 228,
        "Cropland (acres)": 11713088,
        "Tame or Seeded Pasture (acres)": 403438,
        "Natural Land for Pasture (acres)": 405890,
        "Summerfallow (acres)": 229,
        "All Other Land (acres)": 3178845,
        "Wheat (acres)": 1357914,
        "Number of Farms Reporting Wheat": 67431,
        "Average Wheat Acres per Farm": 20,
        "Tree Fruit (acres)": 94897,
        "Number of Farms Reporting Tree Fruit": 4210,
        "Average Tree Fruit Acres per Farm": 23,
        "Vegetables (acres)": 117787,
        "Potatoes (acres)": 65405
      },
      "2001": {
        "Number of Census Farms": 59828,
        "Total Area of Farms (acres)": 13453678,
        "Average Farm Size (acres)": 225,
        "Cropland (acres)": 10786915,
        "Tame or Seeded Pasture (acres)": 287692,
        "Natural Land for Pasture (acres)": 374073,
        "Summerfallow (acres)": 1791,
        "All Other Land (acres)": 2348207,
        "Wheat (acres)": 1220738,
        "Number of Farms Reporting Wheat": 59828,
        "Average Wheat Acres per Farm": 20,
        "Tree Fruit (acres)": 78116,
        "Number of Farms Reporting Tree Fruit": 2668,
        "Average Tree Fruit Acres per Farm": 29,
        "Vegetables (acres)": 102645,
        "Potatoes (acres)": 59911
      },
      "2011": {
        "Number of Census Farms": 51950,
        "Total Area of Farms (acres)": 12768973,
        "Average Farm Size (acres)": 246,
        "Cropland (acres)": 10846930,
        "Tame or Seeded Pasture (acres)": 233719,
        "Natural Land for Pasture (acres)": 350376,
        "Summerfallow (acres)": 1258,
        "All Other Land (acres)": 1490690,
        "Wheat (acres)": 1608961,
        "Number of Farms Reporting Wheat": 51950,
        "Average Wheat Acres per Farm": 31,
        "Tree Fruit (acres)": 71346,
        "Number of Farms Reporting Tree Fruit": 1423,
        "Average Tree Fruit Acres per Farm": 50,
        "Vegetables (acres)": 100764,
        "Potatoes (acres)": 51935
      },
      "2021": {
        "Number of Census Farms": 48625,
        "Total Area of Farms (acres)": 12700427,
        "Average Farm Size (acres)": 261,
        "Cropland (acres)": 11146019,
        "Tame or Seeded Pasture (acres)": 203057,
        "Natural Land for Pasture (acres)": 330311,
        "Summerfallow (acres)": 1473,
        "All Other Land (acres)": 1123567,
        "Wheat (acres)": 1780985,
        "Number of Farms Reporting Wheat": 48625,
        "Average Wheat Acres per Farm": 37,
        "Tree Fruit (acres)": 57354,
        "Number of Farms Reporting Tree Fruit": 1003,
        "Average Tree Fruit Acres per Farm": 57,
        "Vegetables (acres)": 103918,
        "Potatoes (acres)": 46332
      }
    }
};

const years = Object.keys(jsonData["Ontario Farm Data"]);
const dataRows = years.map(year => ({
  id: year,
  year,
  ...jsonData["Ontario Farm Data"][year]
}));

function AgriculturalDataPage() {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const selectedData = dataRows.find(row => row.year === selectedYear);

  const chartData = [
    { name: 'Cropland', value: selectedData["Cropland (acres)"] },
    { name: 'Tame or Seeded Pasture', value: selectedData["Tame or Seeded Pasture (acres)"] },
    { name: 'Natural Land for Pasture', value: selectedData["Natural Land for Pasture (acres)"] },
    { name: 'Summerfallow', value: selectedData["Summerfallow (acres)"] },
    { name: 'All Other Land', value: selectedData["All Other Land (acres)"] },
  ];

  return (
    <Box p={2}>
      <Paper style={{ height: 570, width: '100%', overflowX: 'auto' }}>
        <div style={{ width: '100%' }}>
          <DataGrid
            rows={dataRows}
            columns={[
              { field: 'year', headerName: 'Year', width: 100 },
              { field: 'Number of Census Farms', headerName: 'Number of Census Farms', width: 200 },
              { field: 'Total Area of Farms (acres)', headerName: 'Total Area of Farms (acres)', width: 250 },
              { field: 'Average Farm Size (acres)', headerName: 'Average Farm Size (acres)', width: 250 },
              { field: 'Cropland (acres)', headerName: 'Cropland (acres)', width: 250 },
              { field: 'Tame or Seeded Pasture (acres)', headerName: 'Tame or Seeded Pasture (acres)', width: 250 },
              { field: 'Natural Land for Pasture (acres)', headerName: 'Natural Land for Pasture (acres)', width: 250 },
              { field: 'Summerfallow (acres)', headerName: 'Summerfallow (acres)', width: 250 },
              { field: 'All Other Land (acres)', headerName: 'All Other Land (acres)', width: 250 },
              { field: 'Wheat (acres)', headerName: 'Wheat (acres)', width: 250 },
              { field: 'Number of Farms Reporting Wheat', headerName: 'Number of Farms Reporting Wheat', width: 250 },
              { field: 'Average Wheat Acres per Farm', headerName: 'Average Wheat Acres per Farm', width: 250 },
              { field: 'Tree Fruit (acres)', headerName: 'Tree Fruit (acres)', width: 250 },
              { field: 'Number of Farms Reporting Tree Fruit', headerName: 'Number of Farms Reporting Tree Fruit', width: 250 },
              { field: 'Average Tree Fruit Acres per Farm', headerName: 'Average Tree Fruit Acres per Farm', width: 250 },
              { field: 'Vegetables (acres)', headerName: 'Vegetables (acres)', width: 250 },
              { field: 'Potatoes (acres)', headerName: 'Potatoes (acres)', width: 250 },
              { field: 'Number of Farms Reporting Potatoes', headerName: 'Number of Farms Reporting Potatoes', width: 250 },
              { field: 'Average Potato Acres per Farm', headerName: 'Average Potato Acres per Farm', width: 250 },
              { field: 'Total Number of Cattle and Calves', headerName: 'Total Number of Cattle and Calves', width: 250 },
              { field: 'Number of Farms Reporting Cattle and Calves', headerName: 'Number of Farms Reporting Cattle and Calves', width: 250 },
              { field: 'Average Number of Cattle and Calves per Farm', headerName: 'Average Number of Cattle and Calves per Farm', width: 250 },
              { field: 'Total Number of Pigs', headerName: 'Total Number of Pigs', width: 250 },
              { field: 'Number of Farms Reporting Pigs', headerName: 'Number of Farms Reporting Pigs', width: 250 },
              { field: 'Average Number of Pigs per Farm', headerName: 'Average Number of Pigs per Farm', width: 250 }
            ]}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onRowClick={(params) => setSelectedYear(params.row.year)}
            autoHeight
          />
        </div>
      </Paper>

      {/* <Box mt={4}>
        <Paper style={{ height: 300, width: '100%' }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Box> */}
    </Box>
  );
}

export default AgriculturalDataPage;
