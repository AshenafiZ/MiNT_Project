import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MinisterLayout from '../layouts/ministerLayout';
import GoalPage from '../pages/goal';
import { useUser } from '../context/userContext';
import KeyPerformanceArea from '../pages/sector/kpas';

function MinisterRoutes() {

  const { user } = useUser();

  if (user.role !== 'minister'){
    return (<div>Unauthorize</div>)
  }
  
  return (
    <MinisterLayout>
      <Routes>
        <Route path="/" element={<div>Wellcome Minister</div>} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/kpas" element={<KeyPerformanceArea />} />
        <Route path="/progress" element={<div>Reports </div>} />
        <Route path="/reports" element={<div>Reports </div>} />
        <Route path="/natification" element={<div>Reports </div>} />
      </Routes>
    </MinisterLayout>
  );
}

export default MinisterRoutes;
