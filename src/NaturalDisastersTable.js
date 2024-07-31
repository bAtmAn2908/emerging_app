import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const NaturalDisastersTable = ({ disasters }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Casualties</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {disasters.map((disaster, index) => (
            <TableRow key={index}>
              <TableCell>{disaster.event}</TableCell>
              <TableCell>{disaster.date}</TableCell>
              <TableCell>{disaster.description}</TableCell>
              <TableCell>{disaster.casualties}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NaturalDisastersTable;
