import React from 'react';
import PSLVImg from '../../assets/images/PSLVLaunch.jpg';

function Launch() {
  return (
    <div className='launchers--grid32'>
      <div className='launchers--div'>
        <img className='launchers--div--img' src={PSLVImg} alt='' />
      </div>
      <div>
        <div>
          <h2 className='hero--text2'>PSLV Launches</h2>
        </div>
        <div className='launchers--grid2'>
          <div>
            <div className='launch--heading'>
              <div className='launch--number'>
                <span>48</span>
              </div>
              <div>
                <h2>PSLV-C46 Mission</h2>
                <p>May 22, 2019</p>
              </div>
            </div>
            <pre className='launch--detail'>
              Launcher Type: PSLV
              <br />
              PSLV Payload: EMISAT
              <br />
              Orbit: -<br />
              Remarks: Mission Successfull
            </pre>
          </div>
          <div>
            <div className='launch--heading'>
              <div className='launch--number'>
                <span>49</span>
              </div>
              <div>
                <h2>PSLV-C46 Mission</h2>
                <p>Apr 01, 2019</p>
              </div>
            </div>
            <pre className='launch--detail'>
              Launcher Type: PSLV-CA
              <br />
              PSLV Payload: RISAT-2B
              <br />
              Orbit: -<br />
              Remarks: Mission Successfull
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launch;
