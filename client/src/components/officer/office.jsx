import React from 'react';

const data = {
  goals: [
    {
      id: 1,
      name: 'Goal 1',
      kpas: [
        {
          id: 1,
          name: 'KPA 1',
          kpis: [
            { id: 1, name: 'KPI 1', targetQ1: 50, achievedQ1: 40, targetQ2: 60, achievedQ2: 55 },
            { id: 2, name: 'KPI 2', targetQ1: 80, achievedQ1: 70, targetQ2: 90, achievedQ2: 85 },
          ],
        },
        {
          id: 2,
          name: 'KPA 2',
          kpis: [
            { id: 3, name: 'KPI 3', targetQ1: 100, achievedQ1: 90, targetQ2: 110, achievedQ2: 100 },
            { id: 4, name: 'KPI 4', targetQ1: 150, achievedQ1: 140, targetQ2: 160, achievedQ2: 155 },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Goal 2',
      kpas: [
        {
          id: 3,
          name: 'KPA 3',
          kpis: [
            { id: 5, name: 'KPI 5', targetQ1: 30, achievedQ1: 25, targetQ2: 40, achievedQ2: 35 },
          ],
        },
      ],
    },
  ],
};

function GoalCard({ goal }) {
  return (
    <div className="goal-card bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-blue-600">{goal.name}</h2>
      <KPAList kpas={goal.kpas} />
    </div>
  );
}

function KPAList({ kpas }) {
  return (
    <div className="kpa-list mt-4">
      {kpas.map((kpa) => (
        <div key={kpa.id} className="kpa mb-4">
          <h3 className="text-xl font-semibold text-blue-500">{kpa.name}</h3>
          <KPIList kpis={kpa.kpis} />
        </div>
      ))}
    </div>
  );
}

function KPIList({ kpis }) {
  return (
    <div className="kpi-list mt-2">
      {kpis.map((kpi) => (
        <div key={kpi.id} className="kpi bg-gray-100 rounded-lg p-4 mb-4">
          <h4 className="text-lg font-medium text-gray-800">{kpi.name}</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm text-gray-600">Q1 Target</h5>
              <div className="text-xl font-bold">{kpi.targetQ1}</div>
              <h5 className="text-sm text-gray-600">Q1 Achieved</h5>
              <div className={`text-xl font-bold ${kpi.achievedQ1 >= kpi.targetQ1 ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.achievedQ1}
              </div>
            </div>
            <div>
              <h5 className="text-sm text-gray-600">Q2 Target</h5>
              <div className="text-xl font-bold">{kpi.targetQ2}</div>
              <h5 className="text-sm text-gray-600">Q2 Achieved</h5>
              <div className={`text-xl font-bold ${kpi.achievedQ2 >= kpi.targetQ2 ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.achievedQ2}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function GoalsPage() {
  return (
    <div className="goals-page container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Goals Overview</h1>
      <div className="goals-list">
        {data.goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
}

export default GoalsPage;
