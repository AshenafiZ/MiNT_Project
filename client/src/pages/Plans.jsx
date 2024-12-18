import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/plans')
      .then((response) => setPlans(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Plans</h2>
      <ul className="mt-4 space-y-2">
        {plans.map((plan) => (
          <li key={plan.id} className="p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-600">KPAs: {plan.kpas.map(kpa => kpa.name).join(', ')}</p>
            <p className="text-gray-600">KPIs: {plan.kpis.map(kpi => kpi.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plans;