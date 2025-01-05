import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SectorLayout from '../layouts/sectorLayout';
import KeyPerformanceArea from '../pages/sector/kpas';
import Sector from '../pages/sector/sector';
import { useUser } from '../context/userContext';


function SectorRoutes() {
  const { user } = useUser()
  
  if (user.role !== 'sector'){
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
      </Routes>
    </SectorLayout>
  );
}

export default SectorRoutes;
