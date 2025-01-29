import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import OfficeLayout from '../layouts/officeLayout';
import { useUser } from '../context/userContext';
import KeyPerformanceIndicators from '../pages/office/kpis';

function OfficeRoutes() {
  const { user } = useUser();

  if (user.role !== 'office'){
    return (<div>Unauthorize</div>)
  }
  
  return (
    <OfficeLayout>
      <Routes>
        <Route path="/" element={<div>Wellcome officer</div>} />
        <Route path="/kpis" element={<KeyPerformanceIndicators/>} />
        <Route path='/profile' element={<div>User profiles</div>} />
        <Route path="/notifications" element={<div>Notifications </div>} />
      </Routes>
    </OfficeLayout>
  );
}

export default OfficeRoutes;
