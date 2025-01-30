import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import OfficeLayout from '../layouts/officeLayout';
import { useUser } from '../context/userContext';
import KeyPerformanceIndicators from '../pages/office/kpis';

function OfficeRoutes() {
  const navigate = useNavigate();
  const { user } = useUser();
  const role = user?.role || 'user';
  if (role !== 'office'){
    return (<div>Unauthorize</div>)
  }
  
  return (
    <OfficeLayout>
      <Routes>
        <Route path="/" element={<div>Wellcome officer</div>} />
        <Route path="/kpis" element={<KeyPerformanceIndicators/>} />
        <Route path='/profile' element={<div>User profiles</div>} />
        <Route path="/notifications" element={<div>Notifications </div>} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </OfficeLayout>
  );
}

export default OfficeRoutes;
