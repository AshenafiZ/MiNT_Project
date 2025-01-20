import React, { useState } from 'react';
import axios from 'axios'
import KeyPerformanceIndicatorList from './KPIList';
import { useUser } from '../context/userContext';

function KeyPerformanceArea({kpa}) {
    const [showKpiForm, setShowKpiForm] = useState(false)
    const [kpiData, setKpiData] = useState({
      title: "",
      kpa_id: 0,
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      target: 0,
    })
    const { user } = useUser();

    const status = kpa.status;
    const handleAddKPI = async (newId) => {
      try {
        const response = await axios.post(`/api/strategy/${newId}/kpi`,kpiData);
        if (response.data.success) {
          alert('Successfully Added KPI')
        }
        setKpiData({
          title: "",
          unit: "",
          kpa_id: 0,
          q1: 0,
          q2: 0,
          q3: 0,
          q4: 0,
          target: 0,
        });
        setShowKpiForm(false)

      } catch (error) {
        console.error('Error in adding kpi: ', error);
      }
    };
  
    const handleApprove = async(id, status) => {
      try {
        const response = await axios.post(`/api/minister/kpa/approval/${id}`, {status, user_id: user.id})
        if (response.data.success) {
          alert('Successfully Approve')
        }
      } catch (error) {
        console.error("Error: ",error)
      }
    };
  
    return (
      <div className='kpa'>
        <h3 className='kpaTitle'>{kpa.title}</h3>
        {user.role === 'strategy' && 
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
                type="text"
                placeholder="Enter KPI Unit"
                value={kpiData.unit}
                onChange={(e) => setKpiData({ ...kpiData, unit: e.target.value })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 1"
                value={kpiData.q1}
                onChange={(e) => setKpiData({ ...kpiData, q1: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 2"
                value={kpiData.q2}
                onChange={(e) => setKpiData({ ...kpiData, q2: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 3"
                value={kpiData.q3}
                onChange={(e) => setKpiData({ ...kpiData, q3: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              <input
                type="number"
                placeholder="Quarter 4"
                value={kpiData.q4}
                onChange={(e) => setKpiData({ ...kpiData, q4: parseInt(e.target.value) })}
                className="inputField"
                required
              />
              
              <button key={kpa.id} className='addButton' onClick={() => handleAddKPI(kpa.id)}>Add KPI</button>
            </div>
          )}
        </> }
        {user.role === 'minister' && status === "pending" &&
          <div className='actionButtons' >
            <textarea placeholder="Enter comment" className='commentBox'></textarea>
            <button onClick={() => handleApprove(kpa.id, "approved")} className='approveButton'>Approve</button>
            <button onClick={() => handleApprove(kpa.id, "rejected")} className='rejectButton'>Reject</button>
          </div>
        }
        
        <KeyPerformanceIndicatorList keyPerformanceIndicators={kpa.kpis} />
 
      </div>
    );
  };
  
export default KeyPerformanceArea;