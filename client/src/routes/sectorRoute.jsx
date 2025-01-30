import React from 'react';
import { Routes, Route, Navigate , useNavigate } from 'react-router-dom';
import SectorLayout from '../layouts/sectorLayout';
import KeyPerformanceArea from '../pages/sector/kpas';
import Sector from '../pages/sector/sector';
import { useUser } from '../context/userContext';


function SectorRoutes() {
  const navigate = useNavigate();
  const { user } = useUser()
  const role = user?.role || 'user';
  if (role !== 'sector'){
    return (<div>Unauthorize</div>)
  }

  return (
    <SectorLayout>
      <Routes>
        <Route path="/" element={<Sector />} />
        <Route path="/kpas" element={<KeyPerformanceArea />} />
        <Route path="/projects" element={<div>Projects </div>} />
        <Route path="/profile" element={<div>User profile </div>} />
        <Route path="/teams" element={<div >Teams </div>} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </SectorLayout>
  );
}

export default SectorRoutes;
