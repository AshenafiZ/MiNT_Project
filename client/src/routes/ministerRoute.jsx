import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route } from 'react-router-dom';
import MinisterLayout from '../layouts/ministerLayout';
import GoalPage from '../pages/goal';

function MinisterRoutes() {
  const token = localStorage.getItem('token');
  if (!token){
    return (<Navigate to='/login'/>)
  }
  const payload = jwtDecode(token)
  if (payload.role !== 'minister'){
    return (<div>Unauthorize</div>)
  }
  return (
    <MinisterLayout>
      <Routes>
        <Route path="/" element={<div>Wellcome Minister</div>} />
        <Route path="/goals" element={<GoalPage role = 'minister' />} />
        <Route path="/kpas" element={<div>KPAs </div>} />
        <Route path="/progress" element={<div>Reports </div>} />
        <Route path="/reports" element={<div>Reports </div>} />
        <Route path="/natification" element={<div>Reports </div>} />
      </Routes>
    </MinisterLayout>
  );
}

export default MinisterRoutes;
