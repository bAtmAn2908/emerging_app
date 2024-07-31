import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import IntegMap from './IntegMap';
import AgriculturalDataPage from './AgriculturalDataPage';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<IntegMap />} />
          <Route path="/agricultural-data" element={<AgriculturalDataPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    
  );
}

export default App;
