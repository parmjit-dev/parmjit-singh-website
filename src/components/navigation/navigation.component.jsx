import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faArrowLeft,
  faBriefcase,
  faAddressCard,
  faEnvelope,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './navigation.style.scss';
import resume from '../../static/Parmjit_Singh_Resume.pdf';

const Navigation = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [width, setWidth] = useState(0);
  const openNav = () => {
    setWidth(250);
  };
  const closeNav = () => {
    setWidth(0);
  };
  return (
    <div className="navigation">
      {isTabletOrMobile ? (
        <div className="mobileNav">
          <span class="icon" id="icon" onClick={openNav}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </span>
          <div class="sidenav" id="sidenav" style={{ width: width }}>
            <span onClick={closeNav} className="closeButton">
              <FontAwesomeIcon icon={faArrowLeft} size="3x" />
            </span>
            <span className="sidenav_btn">Resume</span>
            <Link activeClass="active" className="navLinks" to="welcome" spy smooth duration={1000}>
              <span className="sidenav_btn">Profile</span>
            </Link>
            <Link
              activeClass="active"
              className="navLinks"
              to="projects"
              spy
              smooth
              duration={1000}
            >
              <span className="sidenav_btn">Projects</span>
            </Link>
            <Link
              activeClass="active"
              className="navLinks"
              to="contacts"
              spy
              smooth
              duration={1500}
            >
              <span className="sidenav_btn">Contact</span>
            </Link>
          </div>
        </div>
      ) : (
        <nav className="navbar">
          <a href={resume} download="Parmjit_Singh_Resume.pdf">
            <span className="buttonCode">Resume</span>
          </a>
          <Link activeClass="active" className="navLinks" to="welcome" spy smooth duration={1000}>
            <span className="buttonCode header_btns">Profile</span>
          </Link>
          <Link activeClass="active" className="navLinks" to="projects" spy smooth duration={1000}>
            <span className="buttonCode header_btns">Projects</span>
          </Link>
          <Link activeClass="active" className="navLinks" to="contacts" spy smooth duration={1500}>
            <span className="buttonCode header_btns">Contact</span>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
