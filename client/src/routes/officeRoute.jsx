import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route } from 'react-router-dom';
import OfficerLayout from '../layouts/officeLayout';

function OfficerRoutes() {
  const token = localStorage.getItem('token');
  if (!token){
    return (<Navigate to='/login'/>)
  }
  const payload = jwtDecode(token)
  if (payload.role !== 'office'){
    return (<div>Unauthorize</div>)
  }
  return (
    <OfficerLayout>
      <Routes>
        <Route path="/office/tasks" element={<div>Tasks </div>} />
        <Route path="/office/notifications" element={<div>Notifications </div>} />
      </Routes>
    </OfficerLayout>
  );
}

export default OfficerRoutes;
