import React from 'react';

function Update(props) {
  // console.log(props.img);
  return (
    <div className='update'>
      <a href={props.update.src} target='_blank'>
        <img className='update--img' src={props.update.img} alt='' />
      </a>
      <p className='update--text'>
        <span className='bold'>{props.update.date}</span>
        {props.update.text}
      </p>
    </div>
  );
}

export default Update;
