import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KeyPerformanceAreaList from '../../components/KPAList';
import { useUser } from '../../context/userContext';

const KeyPerformanceArea = () => {
  const [kpas, setKpas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchKpas = async () => {
      try {
        const response = await axios.get(`/api/sector/kpas/${user.sector_id}`, {withCredentials: true});
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
      <h1>KPAs Assigned To This {}</h1>
      <KeyPerformanceAreaList keyPerformanceAreas = {kpas} />
    </div>
  )
}

export default KeyPerformanceArea;