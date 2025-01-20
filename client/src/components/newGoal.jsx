import React, { useState } from 'react';
import axios from 'axios'
import { useUser } from '../context/userContext';

const AddPlan = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useUser();

  
    const handleAddGoal = async (id) => {
      try {
        const response = await axios.post('/api/strategy/goal', { title, description})
        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Error adding KPA: ', error);
      }
    };
  
    return (
      <div className='goal'>
        <h2 className='goalTitle'>Add new goals </h2>
        
        <div className='form'>
            <input
            type="text"
            placeholder="Enter Goal Title"
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
            <button className='addButton' onClick={handleAddGoal}>Add KPA</button>
        </div>
        
      </div>
    );
  };
export default AddPlan;