import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KeyPerformanceAreaList from '../../components/KPAList';
import { useUser } from '../../context/userContext';
import KeyPerformanceIndicatorList from '../../components/KPIList';

const keyPerformanceIndicators = () => {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchKpas = async () => {
      try {
        const response = await axios.get(`/api/office/kpis/${user.office_id}`, {withCredentials: true});
        setKpis(response.data);
        console.log(response.data);
        setLoading(false);
        console.log(user);
      } catch (error) {
        console.error("Error fetching KPAs", error);
      }
    }
    fetchKpas()
  }, [])
  if (loading) return <div className="loading">loading</div>
  return (
    <div className="appContiner">
      <h1>KPIs Assigned To This office{}</h1>
      <KeyPerformanceIndicatorList keyPerformanceIndicators = {kpis} />
    </div>
  )
}

export default keyPerformanceIndicators;