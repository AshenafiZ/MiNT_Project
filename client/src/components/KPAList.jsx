import React from 'react';
import KeyPerformanceArea from './KPA';

const KeyPerformanceAreaList = ({keyPerformanceAreas, role}) => {
    
  return (
    <div className='kpaList' >
      {keyPerformanceAreas?.map(kpa => (
        <KeyPerformanceArea key={kpa.id} kpa={kpa} role={role} id={kpa.id} />
      ))}
    </div>
  );
};


export default KeyPerformanceAreaList;