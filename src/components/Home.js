import React from 'react';
import data from '../assets/data/home';
import smj from '../assets/images/smj2.jpg';
import heroFullImage from '../assets/images/heroFullImage.jpg';
import four_images from '../assets/images/four_images.png';
import '../assets/styles/home.scss';
import data2 from '../assets/data/missions';

import Updates from './updates/Updates';
import Mission from './missions/Mission';

function Home() {
  return (
    <div>
      <div className='hero'>
        <div className='hero--top'>
          <div>
            <h1 className='hero--text'>{data.heroheader}</h1>
          </div>
          <div className='hero--img'>
            <img className='hero--smj' src={smj} alt='' />
          </div>
        </div>
        <div className='hero--bottom'>
          <img src={heroFullImage} alt='' />
        </div>
        <Mission mission={data2.missions[0]} />
        <div>
          <img src={four_images} alt='' />
        </div>
        <Updates />
      </div>
    </div>
  );
}

export default Home;
