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
        <Route path="/admin/user-management" element={<div>UserManagement </div>} />
        <Route path="/admin/settings" element={<div>Settings </div>} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;
