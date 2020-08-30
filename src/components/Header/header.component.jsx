import React from 'react';
// import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
  <div className="header">
		<div className="options">
			<div className="option" to="/shop">
				About Me
			</div>
			<div className="option" to="/shop">
				Projects
			</div>
      <div className="option" to="/shop">
				Contact
			</div>
		</div>
	</div>
);

export default Header;