import React, { useState } from 'react';
import axios from 'axios'
import { useUser } from '../context/userContext';

const AddPlan = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage , setErrorMessage] = useState();
    const { user } = useUser();

  
    const handleAddGoal = async (id) => {
      try {
        const response = await axios.post('/api/strategy/goal', { title, description});
        if (response.data.success){
          setTitle('');
          setDescription('');
          alert(response.data.message);
        } else {
          console.log(response.data.message);
          setErrorMessage(response.data.message);
          alert(response.data.message);
        }
        
      } catch (error) {
        console.error('Error adding Goal: ', error);
        alert(error.response.data.message);
          
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
            <button className='addButton' onClick={handleAddGoal}>Add Goal</button>
        </div>
        
      </div>
    );
  };
export default AddPlan;