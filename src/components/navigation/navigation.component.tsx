import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import './navigation.style.scss';
import ReactTooltip from 'react-tooltip';

const Navigation = (props: {resume: any}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [resumeText, setResumeText] = useState('Resume');
  // eslint-disable-next-line no-unused-vars
  const changeResume = () => {
    if (resumeText === 'Resume') {
        setResumeText('Currently Employed')
    } else {
        setResumeText('Resume')
    }
  }
  return (
    <div className="navigation">
      {isTabletOrMobile ? (
        <div className="mobileNav">
        </div>
      ) : (
        <nav className="navbar">
          <a href={props.resume} download="Parmjit_Singh_Resume_Jul_2023.pdf">
            <span className="buttonCode" data-tip="Currently employed as a software engineer">Resume</span>
            <ReactTooltip />
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
