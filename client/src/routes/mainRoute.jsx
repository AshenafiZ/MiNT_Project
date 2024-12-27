import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/main/home'
import Signup from '../pages/signup';
import Login from '../pages/login';
import Logout from '../pages/logout'
import About from '../pages/main/about';
import KPAForm from '../components/KPAForm';

function MainRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />               
        <Route path="/logout" element={<Logout />} />  
        <Route path="/kpa" element={<KPAForm />} />               

      </Routes>
    </MainLayout>
  );
}

export default MainRoutes;
