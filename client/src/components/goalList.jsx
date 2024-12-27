import React from 'react';
import Goal from './goal';

const GoalList = ({goals, role}) => {
    return (
      <div className='goalList' >
        {goals.map(goal => (
          <Goal key={goal.id} goal={goal} role={role} />
        ))}
      </div>
    );
  };

export default GoalList;
