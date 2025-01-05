import React, { useEffect, useState } from 'react';
import axios from 'axios'
import GoalList from '../components/goalList';
import '../style/components/goalPage.css';

const GoalPage = () =>  {
    const [goals, setGoals] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      const fetchGoals = async () => {
        try {
          const response = await axios.get('/api/strategy/goals')
          setGoals(response.data);
          setLoading(false);

        } catch (error) {
          console.error('Error fetching goals: ', error)
        }
      }
      fetchGoals();
      const interval = setInterval(fetchGoals, 500);
      return () => clearInterval(interval);
      
    }, [])

    if (loading) return <div className='loading'>loading...</div>
  
    return (
      <div className='appContainer'>
        <h1 className='title'>The Company Goals</h1>
        <GoalList goals={goals}  />
      </div>
    );
  };
  

export default GoalPage;