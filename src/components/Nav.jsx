import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navBar">
      <span className="navCont1">
        <img id="logoHenry" src={Logo} alt='Henry Logo'/>
        <h1>Henry - Weather App</h1>
      </span>
      <SearchBar onSearch={onSearch} />
    </nav> 
  );
};

export default Nav;
