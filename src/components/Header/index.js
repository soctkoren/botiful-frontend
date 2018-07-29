import React from 'react';

import logo from '../../assets/roboto-logo.svg'

import './styles.css';

const Header = ({action}) => {
  return (
    <div className="Header">
      <div className="logo">
        <img className="logImg" src={logo}/>
      </div>
      <div className="centerContent">
        <p>BOTIFUL<span className="exclaim">!</span></p>
      </div>
      <div className="rightSide" onClick={action}>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

export default Header;
