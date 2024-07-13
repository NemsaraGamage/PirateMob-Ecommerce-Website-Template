import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Category from './components/pages/Category';
import Community from './components/pages/Community';

// npm run deploy

const RouteConfig = () => {
  return (
    <Router>
      
      <Routes>
        {/* Mainpage routes */}
        <Route index element={<MainPage />} />
        <Route path='/PirateMob-Ecommerce-Website-Template/' element={<MainPage />} />

        {/* Main Page */}
        <Route path="/MainPage" element={<MainPage></MainPage>} />
       
        {/* Category page  */}
        <Route path="/CategoryPage" element={<Category></Category>} />

        {/* Community page  */}
        <Route path="/CommunityPage" element={<Community></Community>} />

        {/* Plans Page */}
        {/* <Route path="/plan" element={<Plans></Plans>} /> */}

      </Routes>
    </Router>
  );
}

export default RouteConfig;