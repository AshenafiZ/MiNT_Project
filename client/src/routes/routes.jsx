import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MinisterRoutes from './ministerRoute';
import OfficerRoutes from './sectorRoute';
import SectorManagerRoutes from './sectorRoute';
import AdminRoutes from './adminRoute';
import MainRoutes from './mainRoute';
import Logout from '../pages/logout';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/*' element={<MainRoutes />} />
        
        <Route path="/minister/*" element={<MinisterRoutes />} />

        <Route path="/office/*" element={<OfficerRoutes />} />

        <Route path="/sector-manager/*" element={<SectorManagerRoutes />} />

        <Route path="/admin/*" element={<AdminRoutes />} />
        
        <Route path="/logout" element={<Logout />} />
        

      </Routes>
  );
}

export default AppRoutes;
