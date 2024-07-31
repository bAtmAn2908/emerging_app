import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleBarChart from './SimpleBarChart';  
import PopulationLineChart from './PopulationLineChart'; 
import AqiLineChart from './AqiLineChart'; 
import AverageAgeChart from './AverageAgeChart'; 
import RainfallSnowfallChart from './RainfallSnowfallChart'; 
import FamilyIncomeSizeChart from './FamilyIncomeSizeChart'; 
import NaturalDisastersTable from './NaturalDisastersTable'; // Import the new table component

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ open, handleClose, city, contentType }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {city.city} {contentType}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {contentType === 'Yearly Rates' ? (
              <SimpleBarChart city={city} />
            ) : contentType === 'Population' ? (
              <PopulationLineChart city={city} />
            ) : contentType === 'AQI Levels' ? (
              <AqiLineChart city={city} />
            ) : contentType === 'Average Age' ? (
              <AverageAgeChart city={city} />
            ) : contentType === 'Rainfall and Snowfall' ? (
              <RainfallSnowfallChart city={city} />
            ) : contentType === 'Family Income and Size' ? (
              <FamilyIncomeSizeChart city={city} />
            ) : contentType === 'Natural Disasters' ? (
              <NaturalDisastersTable disasters={city.disasters} />
            ) : null}
          </Box>
          <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
        </Box>
      </Fade>
    </Modal>
  );
}
