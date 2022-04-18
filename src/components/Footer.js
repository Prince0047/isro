import React from 'react';
import data from '../assets/data/home';
import logo from '../assets/images/isro-logo.png';
import '../assets/styles/footer.scss';

function Footer() {
  return (
    <div className='footer' id='fff'>
      <div className='footer--top'>
        <div className='footer--top--text'>
          <p>{data.footer.text}</p>
        </div>
        <div className='footer--logo'>
          <img className='footer--img' src={logo} alt='' />
        </div>
      </div>
      <div className='footer--mid'>
        <div className='footer--mid--row'>
          <ul>
            <li>Site Map</li>
            <li>FAQ</li>
            <li>Careers</li>
            <li>Feedback</li>
            <li>Contact us</li>
            <li>Help</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer--mid--row'>
          <ul>
            <li>International Coorporation</li>
            <li>Publications</li>
            <li>Annual Report</li>
            <li>Right to Information</li>
            <li>India's Space Policy</li>
            <li>Technology Transfer</li>
            <li>Isro Swachata Action Plan</li>
          </ul>
        </div>
        <div className='footer--mid--row'>
          <ul>
            <li>E-Procurement</li>
            <li>Monthly Summary of DOS</li>
            <li>Annual Report</li>
            <li>Timeline</li>
            <li>Hyperlink Policy</li>
            <li>ISM Datasheets</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className='footer--mid--row'>
          <ul>
            <li>
              <a
                className='footer--social'
                href='https://www.facebook.com/ISRO'
                target='_blank'
              >
                Facbook
              </a>
            </li>
            <li>
              <a
                className='footer--social'
                href='https://twitter.com/isro'
                target='_blank'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className='footer--social'
                href='https://www.youtube.com/channel/UCw5hEVOTfz_AfzsNFWyNlNg'
                target='_blank'
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                className='footer--social'
                href='https://www.instagram.com/isro.dos/'
                target='_blank'
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer--bottom'>
        <p>Copyright © 2017 ISRO. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
