import React from 'react';
import KeyPerformanceArea from './KPA';

const KeyPerformanceAreaList = ({keyPerformanceAreas}) => {
    
  return (
    <div className='kpaList' >
      {keyPerformanceAreas?.map((kpa) => (
      
        <KeyPerformanceArea key={kpa.id} kpa={kpa} />
      ))}
    </div>
  );
};


export default KeyPerformanceAreaList;