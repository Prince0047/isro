import React from 'react';
import heroImg from '../../assets/images/launcher_hero.jpg';
import data from '../../assets/data/home';
import '../../assets/styles/launchers.scss';
import screenshot from '../../assets/images/screenshot.png';
import Launch from './Launch';

function Launchers() {
  console.log(data.launchers.hero.text);
  return (
    <div className='launchers'>
      <div className='launchers--hero'>
        <img src={heroImg} alt='' />
        <div className='launchers--grid3'>
          <div>
            <h1 className='hero--text2'>{data.launchers.hero.heading}</h1>
          </div>

          <div>
            <p>{data.launchers.hero.text1}</p>
            <p>{data.launchers.hero.text2}</p>
          </div>
          <div>
            <p>{data.launchers.hero.text3}</p>
          </div>
        </div>
      </div>
      <img className='launchers--screenshot' src={screenshot} alt='' />
      <Launch />
    </div>
  );
}

export default Launchers;
