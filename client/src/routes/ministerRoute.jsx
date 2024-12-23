import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route } from 'react-router-dom';
import MinisterLayout from '../layouts/ministerLayout';

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
        <Route path="/minister/" element={<div>Dashboard </div>} />
        <Route path="/minister/profile" element={<div>Profile </div>} />
        <Route path="/minister/reports" element={<div>Reports </div>} />
        <Route path="/minister/reports" element={<div>Reports </div>} />
        <Route path="/minister/reports" element={<div>Reports </div>} />
        <Route path="/minister/reports" element={<div>Reports </div>} />

      </Routes>
    </MinisterLayout>
  );
}

export default MinisterRoutes;
