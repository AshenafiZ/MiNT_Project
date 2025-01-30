import React from 'react';
import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import AdminLayout from '../layouts/adminLayout';
import { useUser } from '../context/userContext';


function AdminRoutes() {
  const navigate = useNavigate();
  const { user } = useUser();
  const role = user?.role || 'user';
  if (role !== 'admin'){
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
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;
