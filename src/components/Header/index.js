import React from 'react';

import logo from '../../assets/roboto-logo.svg'

import './styles.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img className="logImg" src={logo}/>
      </div>
      <div className="rightSide">
        <p>Dashboard</p>
      </div>
    </div>
  );
}

export default Header;
