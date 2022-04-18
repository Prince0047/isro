import React from 'react';
import data from '../../assets/data/home';
import Update from './Update';

function Updates() {
  const updates = data.updates.map((update) => {
    return <Update update={update} key={update.id} />;
  });
  return (
    <div className='updates--div'>
      <h1 className='hero--text2'>Latest Updates</h1>
      <div className='update--list'>{updates}</div>
    </div>
  );
}

export default Updates;
