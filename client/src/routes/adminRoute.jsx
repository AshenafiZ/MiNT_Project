import React from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminLayout from '../layouts/adminLayout';
import { useUser } from '../context/userContext';


function AdminRoutes() {
  const { user } = useUser();

  if (payload.role !== 'admin'){
    return (<div>Unauthorize</div>)
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/users" element={<div>UserManagement </div>} />
        <Route path="/sectors" element={<div>UserManagement </div>} />
        <Route path="/offices" element={<div>UserManagement </div>} />
        <Route path="/strategys" element={<div>UserManagement </div>} />
        <Route path="/ministers" element={<div>UserManagement </div>} />
        <Route path="/settings" element={<div>Settings </div>} />
        <Route path="/profile" element={<div>Settings </div>} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;
