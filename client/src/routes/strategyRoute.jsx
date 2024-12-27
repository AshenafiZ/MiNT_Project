import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route, Navigate } from 'react-router-dom';
import StrategyLayout from '../layouts/strategyLayout';
import GoalPage from '../pages/goal';


function StrategyRoute() {
  const token = localStorage.getItem('token');
  if (!token){
    return (<Navigate to='/login'/>)
  }
  const payload = jwtDecode(token)
  if (payload.role !== 'strategy'){
    return (<div>Unauthorize</div>)
  }
  return (
    <StrategyLayout>
      <Routes>
        <Route path="/" element={<div>home page </div>} />
        <Route path="/progress" element={<div>home page </div>} />
        <Route path="/goals" element={<GoalPage role='strategy'/>} />
        <Route path="/add" element={<div>home page </div>} />
        <Route path="/settings" element={<div>Settings </div>} />
      </Routes>
    </StrategyLayout>
  );
}

export default StrategyRoute;
