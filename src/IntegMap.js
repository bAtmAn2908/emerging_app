import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import osm from './osm-provider';
import 'leaflet/dist/leaflet.css';
import cities from './cities.json';
import Button from '@mui/material/Button';
import TransitionsModal from './TransitionsModal'; // Import your modal component

const markerIcon = new L.Icon({
  iconUrl: require('./marker.png'),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const IntegMap = () => {
  const [center, setCenter] = useState({ lat: 43.936670, lng: -80.013379 });
  const [selectedCity, setSelectedCity] = useState(null);
  const [open, setOpen] = useState(false);
  const [contentType, setContentType] = useState('');
  const mapRef = useRef();

  const handleOpen = (city, type) => {
    setSelectedCity(city);
    setContentType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCity(null);
    setContentType('');
  };

  return (
    <div>
      <MapContainer center={center} zoom={7} ref={mapRef}>
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
        {cities.map((city, idx) => (
          <Marker position={[city.lat, city.lng]} icon={markerIcon} key={idx}>
            <Popup>
              <div>
                <b>{city.city}</b>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'Yearly Rates')}
                  >
                    Birth and death Rate
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'Population')}
                  >
                    Population
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'AQI Levels')}
                  >
                    AQI Levels
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'Average Age')}
                  >
                    Average Age
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'Rainfall and Snowfall')}
                  >
                    Rainfall and Snowfall
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'Family Income and Size')}
                  >
                    Family Income and Size
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginBottom: '5px' }}
                    size="small"
                    onClick={() => handleOpen(city, 'Natural Disasters')}
                  >
                    Natural Disasters
                  </Button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedCity && (
        <TransitionsModal
          open={open}
          handleClose={handleClose}
          city={selectedCity}
          contentType={contentType}
        />
      )}
    </div>
  );
};

export default IntegMap;
