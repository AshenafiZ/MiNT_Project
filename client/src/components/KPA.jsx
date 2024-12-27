import React, { useState } from 'react';
import axios from 'axios'
import KeyPerformanceIndicatorList from './KPIList';

function KeyPerformanceArea({kpa, role}) {
  
    const [showKpiForm, setShowKpiForm] = useState(false)
    const [kpiData, setKpiData] = useState({
      title: "",
      kpa_id: 0,
      Q1: 0,
      Q2: 0,
      Q3: 0,
      Q4: 0,
      target: 0,
    })
    const handleAddKPI = async (newId) => {
      try {
        const response = await axios.post('/api/strategy/kpis',{...kpiData, kpa_id: newId});
        if (response.ok) {
          alert('Successfully Added KPI')
        }
        setKpiData({
          title: "",
          kpa_id: 0,
          Q1: 0,
          Q2: 0,
          Q3: 0,
          Q4: 0,
          target: 0,
        });
        setShowKpiForm(false)

      } catch (error) {
        console.error('Error in adding kpi: ', error);
      }
    };
  
    const handleApprove = () => {
      alert('Approved with comment functionality not implemented yet.');
    };
  
    const handleReject = () => {
      alert('Rejected with comment functionality not implemented yet.');
    };
  
    return (
      <div className='kpa'>
        <h3 className='kpaTitle'>{kpa.title}</h3>
        {role === 'strategy' && 
        <>
          <button className='addButton' onClick={() => setShowKpiForm(!showKpiForm)} >Create New KPI</button> 
          {showKpiForm && (
            <div className="form">
              <input
                type="text"
                placeholder="Enter KPI Name"
                value={kpiData.title}
                onChange={(e) => setKpiData({ ...kpiData, title: e.target.value })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 1"
                value={kpiData.Q1}
                onChange={(e) => setKpiData({ ...kpiData, Q1: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 2"
                value={kpiData.Q2}
                onChange={(e) => setKpiData({ ...kpiData, Q2: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 3"
                value={kpiData.Q3}
                onChange={(e) => setKpiData({ ...kpiData, Q3: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 4"
                value={kpiData.Q4}
                onChange={(e) => setKpiData({ ...kpiData, Q4: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Yearly Target"
                value={kpiData.target}
                onChange={(e) => setKpiData({ ...kpiData, target: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <button key={kpa.id} className='addButton' onClick={() => handleAddKPI(kpa.id)}>Add KPI</button>
            </div>
          )}
        </> }
        {role === 'minister' && 
          <div className='actionButtons' >
            <button onClick={handleApprove} className='approveButton'>Approve</button>
            <button onClick={handleReject} className='rejectButton'>Reject</button>
            <textarea placeholder="Enter comment" className='commentBox'></textarea>
          </div>
        }
        
        <KeyPerformanceIndicatorList keyPerformanceIndicators={kpa.kpis} />
 
      </div>
    );
  };
  
export default KeyPerformanceArea;