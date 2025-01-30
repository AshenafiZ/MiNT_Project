import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MinisterLayout from '../layouts/ministerLayout';
import GoalPage from '../pages/goal';
import { useUser } from '../context/userContext';
import KeyPerformanceArea from '../pages/minister/kpas';
import NewKPAs from '../pages/minister/newKpas';
import Minister from '../pages/minister/minister';
import Approval from '../pages/minister/approved';

function MinisterRoutes() {
  const { user } = useUser();
  const role = user?.role || 'user';
  if (role !== 'minister'){
    return (<div>Unauthorize</div>)
  }
  
  return (
    <MinisterLayout>
      <Routes>
        <Route path="/" element={<Minister />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/kpas" element={<KeyPerformanceArea />} />
        <Route path="/newkpas" element={<NewKPAs />} />
        <Route path="/approvals" element={<Approval />} />
        <Route path="/reports" element={<div>Reports </div>} />
        <Route path="/natification" element={<div>Reports </div>} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </MinisterLayout>
  );
}

export default MinisterRoutes;
