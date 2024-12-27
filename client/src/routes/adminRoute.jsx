import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../layouts/adminLayout';


function AdminRoutes() {
  const token = localStorage.getItem('token');
  if (!token){
    return (<Navigate to='/login'/>)
  }
  const payload = jwtDecode(token)
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
