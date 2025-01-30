import React from 'react';
import { useState } from 'react';


const Progress = () => {

    const [kpiData, setKpiData] = useState({

        kpi_id: 0,
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
    
      });
      const handleAddKPI = async (newId) => {
        try {
          const response = await axios.post(`/api/strategy/${newId}/kpi`, {...kpiData, new: true}, {withCredentials: true});
          if (response.data.success) {
            alert('Successfully Added KPI')
          }
          setKpiData({
            kpi_id: 0,
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
          });
    
        } catch (error) {
          setError(error)
          console.error('Error in adding kpi: ', error);
        }
      };
  return (
    <div className="form">
            
            <input
              type="number"
              placeholder="Quarter 1"
              value={kpiData.a1}
              onChange={(e) => setKpiData({ ...kpiData, a1: parseInt(e.target.value) })}
              className="inputField"
              required
            />
            <input
              type="number"
              placeholder="Quarter 2"
              value={kpiData.a2}
              onChange={(e) => setKpiData({ ...kpiData, a2: parseInt(e.target.value) })}
              className="inputField"
              required
            />
            <input
              type="number"
              placeholder="Quarter 3"
              value={kpiData.a3}
              onChange={(e) => setKpiData({ ...kpiData, a3: parseInt(e.target.value) })}
              className="inputField"
              required
            />
            <input
              type="number"
              placeholder="Quarter 4"
              value={kpiData.a4}
              onChange={(e) => setKpiData({ ...kpiData, a4: parseInt(e.target.value) })}
              className="inputField"
              required
            />
            <button key={kpa.id} className='addButton' onClick={() => handleAddKPI(kpa.id)}>Add KPI</button>
          </div>
  )
}

export default Progress