import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MinisterRoutes from './ministerRoute';
import StrategyRoutes from './strategyRoute';
import OfficeRoutes from './officeRoute';
import SectorRoutes from './sectorRoute';
import AdminRoutes from './adminRoute';
import MainRoutes from './mainRoute';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/*' element={<MainRoutes />} />      
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/sector/*" element={<SectorRoutes />} />
        <Route path="/office/*" element={<OfficeRoutes />} />
        <Route path="/minister/*" element={<MinisterRoutes />} />
        <Route path="/strategy/*" element={<StrategyRoutes />} />
      </Routes>
  );
}

export default AppRoutes;
