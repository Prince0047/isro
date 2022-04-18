import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/isro-logo.png';
import '../assets/styles/header.scss';

function Header() {
  return (
    <div className='header'>
      <div className='head--logo'>
        <Link to='/'>
          <img className='logo--img' src={logo} alt='' />
        </Link>
      </div>
      <div className='nav'>
        <ul className='nav--list'>
          <li className='nav--list--item'>
            <Link to='/quiz'>Play Quiz</Link>
          </li>
          <li className='nav--list--item'>
            <Link to='/missions'>Missions</Link>
          </li>
          <li className='nav--list--item'>
            <Link to='/launchers'>Launchers</Link>
          </li>
          <li className='nav--list--item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nav--list--item'>
            <Link to='/about'>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
