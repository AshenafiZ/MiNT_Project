import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KeyPerformanceAreaList from '../../components/KPAList';
import { useUser } from '../../context/userContext';

function Approval(){
  const [rejectedKpas, setRejectedKpas] = useState([]);
  const [approvedKpas, setApprovedKpas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchKpas = async () => {
      try {
        const response = await axios.get(`/api/minister/kpas/approved/${user.id}`, {withCredentials: true});
        setApprovedKpas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching KPAs", error);
      }
    }
    const fetchRejectedKpas = async () => {
        try {
          const response = await axios.get(`/api/minister/kpas/rejected/${user.id}`, {withCredentials: true});
          setRejectedKpas(response.data);
          setLoading(false);
          console.log(user);
        } catch (error) {
          console.error("Error fetching KPAs", error);
        }
      }
    fetchKpas()
    fetchRejectedKpas()
  }, [])
  if (loading) return <div className="loading">loading</div>
  return (
    <div className="appContiner">
      <h1> KPAs approved by {user.name} </h1>
      <KeyPerformanceAreaList keyPerformanceAreas = {approvedKpas} />
      <h1> KPAs rejected by {user.name} </h1>
      <KeyPerformanceAreaList keyPerformanceAreas = {rejectedKpas} />
    </div>
  )
}


export default Approval;