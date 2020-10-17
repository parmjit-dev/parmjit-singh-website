import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.style.scss';

const Header = (image, title, desc) => (
  <div className="header">
    <div className="options">
      <div className="image" style={{ backgroundImage: `url(${image})`}} to="/">
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
