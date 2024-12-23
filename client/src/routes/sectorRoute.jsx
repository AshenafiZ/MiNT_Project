import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route } from 'react-router-dom';
import SectorLayout from '../layouts/sectorLayout';


function SectorRoutes() {
  const token = localStorage.getItem('token');
  if (!token){
    return (<Navigate to='/login'/>)
  }
  const payload = jwtDecode(token)
  if (payload.role !== 'sector'){
    return (<div>Unauthorize</div>)
  }
  return (
    <SectorLayout>
      <Routes>
        <Route path="/sector-manager/projects" element={<div>Projects </div>} />
        <Route path="/sector-manager/teams" element={<div >Teams </div>} />
      </Routes>
    </SectorLayout>
  );
}

export default SectorRoutes;
