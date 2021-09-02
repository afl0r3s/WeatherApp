import React from 'react';
//import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
	return (
		<div className="mainConent">
			<div className="navBar">
				<h1 data-text="Weather App">Weather App</h1>
			  <SearchBar onSearch={onSearch} />
			</div>
		</div>
	);
}

export default Nav;
