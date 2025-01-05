import React from 'react';
import Goal from './goal';

const GoalList = ({goals}) => {
    return (
      <div className='goalList' >
        {goals.map(goal => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </div>
    );
  };

export default GoalList;
