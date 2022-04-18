import React from 'react';

function Update(props) {
  // console.log(props.img);
  return (
    <div className='update'>
      <img className='update--img' src={props.update.img} alt='' />
      <p className='update--text'>
        <span className='bold'>{props.update.date}</span>
        {props.update.text}
      </p>
    </div>
  );
}

export default Update;
