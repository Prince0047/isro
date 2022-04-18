import React from 'react';
import data from '../../assets/data/missions';
import Mission from './Mission';

function Missions() {
  const missions = data.missions.map((mission) => {
    return <Mission mission={mission} key={mission.id} />;
  });
  return (
    <div className='missions'>
      <div className='missions--header'>
        <h1 className='hero--text'>Missions</h1>
      </div>
      {missions}
    </div>
  );
}

export default Missions;
