import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StrategyLayout from '../layouts/strategyLayout';
import GoalPage from '../pages/goal';
import { useUser } from '../context/userContext';
import AddPlan from '../components/newGoal';
import { useNavigate } from 'react-router-dom';


function StrategyRoute() {
  const navigate = useNavigate();  
  const { user } = useUser();
  const role = user?.role || 'user';
  if (role !== 'strategy'){
    return (<div>Unauthorize</div>)
  }
  
  return (
    <StrategyLayout>
      <Routes>
        <Route path="/" element={<div>home page </div>} />
        <Route path="/progress" element={<div>home page </div>} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/plan" element={<AddPlan />} />
        <Route path="/settings" element={<div>Settings </div>} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </StrategyLayout>
  );
}

export default StrategyRoute;
