import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './pages/hr/Login';
import Signup from './pages/hr/Signup'

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<div>Admin Page</div>} />
        <Route path="/minister" element={<div>Minister Page</div>} />
        <Route path="/sector-manager" element={<div>Sector Manager Page</div>} />
        <Route path="/office-manager" element={<div>Office Manager Page</div>} />
      </Routes>
    </>
    
  );
} 
export default App;
