import React from 'react';
// import data from '../../assets/data/missions';
import '../../assets/styles/missions.scss';

function Mission(props) {
  const url = window.location.href.split('/');

  var showImg = false;
  if (url[url.length - 1] == 'missions') {
    showImg = true;
  }

  console.log(props);

  return (
    <div className='mission--container'>
      {showImg && (
        <div className='mission--img--div'>
          <img src={props.mission.img} alt='' />
        </div>
      )}
      <div className='mission'>
        <div className='mission--heading'>
          <h1 className='hero--text2'>{props.mission.heading}</h1>
          <img className='mission-img2' src={props.mission.img2} alt='' />
        </div>
        <div className='mission--detail'>
          <div>
            <p className='p-text'>{props.mission.top_text}</p>
          </div>
          <div className='mission--detail--div'>
            <div>
              <h3>About {props.mission.name}</h3>
              <p className='p-text'>
                <span>{props.mission.detail}</span>
              </p>
            </div>
            <div>
              <h3>Location</h3>
              <p className='p-text'>
                <span>{props.mission.location}</span>
              </p>
            </div>
            <div>
              <h3>Date</h3>
              <p className='p-text'>
                <span>{props.mission.date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
