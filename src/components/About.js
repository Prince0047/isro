import React from 'react';
import data from '../assets/data/about';
import '../assets/styles/about.scss';
import about__SS from '../assets/images/about__SS.jpg';

function About() {
  const handleClick = (idd) => {
    const divElement = document.getElementById(idd);
    divElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='about--container'>
      <div className='about'>
        <div className='about--index'>
          {/* <ul>
          <li>
            <div onClick={handleClick('about')}>About</div>
          </li>
          <li onClick={handleClick('about')}>About</li>
          <li onClick={handleClick('about')}>About</li>
          <li onClick={handleClick('about')}>About</li>
        </ul> */}
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/GSLV_Mk_III_D2_with_GSAT-29_on_Second_Launch_Pad_of_Satish_Dhawan_Space_Centre%2C_Sriharikota_%28SDSC_SHAR%29.jpg/330px-GSLV_Mk_III_D2_with_GSAT-29_on_Second_Launch_Pad_of_Satish_Dhawan_Space_Centre%2C_Sriharikota_%28SDSC_SHAR%29.jpg'
            alt=''
          />
        </div>
        <div className='about--content'>
          <div className='about--heading'>
            <h1 className='hero--text--about'>
              Indian Ambitioins, Universal Aspirations
            </h1>
          </div>
          <div className='about--para' id='about'>
            <div className='about--para1'>
              <p>{data.para1}</p>
              <p>{data.para2}</p>
            </div>
            <div className='about--para2'>
              <div className='about--para2--child'>
                <p>{data.para3}</p>
              </div>
              <div className='about--para2--child'>
                <p>{data.para4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={about__SS} alt='' />
      </div>
    </div>
  );
}

export default About;
