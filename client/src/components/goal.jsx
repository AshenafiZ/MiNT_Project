import React, { useState } from 'react';
import axios from 'axios'
import KeyPerformanceAreaList from './KPAList';
import { useUser } from '../context/userContext';

const Goal = ({goal}) => {

    const [showKpaForm, setShowKpaForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useUser();

  
    const handleAddKPA = async (id) => {
      try {
        const response = await axios.post('/api/strategy/kpas', {goal_id: id, title, description})
        setTitle('');
        setDescription('');
        setShowKpaForm(false);
      } catch (error) {
        console.error('Error adding KPA: ', error);
      }
    };
  
    return (
      <div className='goal'>
        <h2 className='goalTitle'>{goal.title}</h2>
        {user.role === 'strategy' && 
          <>
            <button onClick={() => setShowKpaForm(!showKpaForm)} className='addButton'>Create New KPA</button>
            {showKpaForm && <div className='form'>
              <input
                type="text"
                placeholder="Enter KPA Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='inputField'
                required
              />
              <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='inputField'
              />
              <button key={goal.id} className='addButton' onClick={() => handleAddKPA(goal.id)}>Add KPA</button>
            </div>}
          </>}
        <KeyPerformanceAreaList keyPerformanceAreas={goal.kpas} />
      </div>
    );
  };
export default Goal;