import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import Signup from '../pages/signup';
import Login from '../pages/login';

function MainRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<div>Wellcome To Ministery Of Innovation And Technology </div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainLayout>
  );
}

export default MainRoutes;
