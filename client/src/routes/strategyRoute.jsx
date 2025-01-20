import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StrategyLayout from '../layouts/strategyLayout';
import GoalPage from '../pages/goal';
import { useUser } from '../context/userContext';
import AddPlan from '../components/newGoal';


function StrategyRoute() {
  const { user } = useUser();

  if (user.role !== 'strategy'){
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
      </Routes>
    </StrategyLayout>
  );
}

export default StrategyRoute;
