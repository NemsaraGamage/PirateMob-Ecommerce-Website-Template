import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';

// npm run deploy

const RouteConfig = () => {
  return (
    <Router>
      
      <Routes>
        {/* Mainpage routes */}
        <Route index element={<MainPage />} />
        <Route path='/AutoTraders-Ecommerce-Website-Template' element={<MainPage />} />
       
       {/* Vehical Page */}
        {/* <Route path="/VehiclePage" element={<VehiclePage></VehiclePage>} /> */}

        {/* Plans Page */}
        {/* <Route path="/plan" element={<Plans></Plans>} /> */}

      </Routes>
    </Router>
  );
}

export default RouteConfig;