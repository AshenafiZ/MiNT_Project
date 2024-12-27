import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route, Navigate } from 'react-router-dom';
import OfficeLayout from '../layouts/officeLayout';

function OfficeRoutes() {
  const token = localStorage.getItem('token');
  if (!token){
    return (<Navigate to='/login'/>)
  }
  const payload = jwtDecode(token)
  if (payload.role !== 'office'){
    return (<div>Unauthorize</div>)
  }
  return (
    <OfficeLayout>
      <Routes>
        <Route path="/" element={<div>Wellcome officer</div>} />
        <Route path="/tasks" element={<div>Tasks </div>} />
        <Route path='/profile' element={<div>User profiles</div>} />
        <Route path="/notifications" element={<div>Notifications </div>} />
      </Routes>
    </OfficeLayout>
  );
}

export default OfficeRoutes;
