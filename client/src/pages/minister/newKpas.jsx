import React, { useEffect, useState } from 'react';
import KeyPerformanceAreaList from '../../components/KPAList';
import axios from 'axios';

function NewKPAs() {
  const [kpas, setKpas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKpas = async () => {
      try {
        const response = await axios.get(`/api/minister/kpas//pending`, {withCredentials: true});
        setKpas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching KPAs", error);
      }
    }
    fetchKpas()
  }, [])
  if (loading) return <div className="loading">loading</div>
  return (
    <div className="appContiner">
      <h1> New KPAs </h1>
      <KeyPerformanceAreaList keyPerformanceAreas = {kpas} />
    </div>
  )
}


export default NewKPAs;