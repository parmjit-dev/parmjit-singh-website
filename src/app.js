/**
 * onces the basic desgin work on splitting them into components -- like the arrow icons and the links
 */

import React, {
  useEffect,
} from 'react';
import {
  Parallax,
} from 'react-parallax';
import Typewriter from 'typewriter-effect';
import {
  Link, Element, Events,
} from 'react-scroll';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { useAlert } from 'react-alert';
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
// import Image from './components/render.image/renderimagecomponent'

const App = () => {
  // const pagePosition = ['landing', 'aboutMe', 'projects'];
  // const [checkPosition] = useState(0);
  const alert = useAlert();
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('start', arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    return function unmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Parallax bgImage={require('./images/Iceberg-Minimalist-4k-HD-Artist-4k-Wallpapers-Images-.jpg')} bgImageAlt="the cat" strength={200}>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <Link activeClass="active" className="test1" to="welcome" spy smooth duration={1000}>

                  <span className="header-span"> About Me </span>

                </Link>

                <Link
                  activeClass="active"
                  className="test1"
                  to="projects"
                  spy
                  smooth
                  duration={1000}
                >

                  <span className="header-span"> Projects </span>

                </Link>

                <Link activeClass="active" className="test1" to="contact" spy smooth duration={1500}>

                  <span className="header-span"> Contact </span>

                </Link>

              </ul>
            </div>
          </div>
        </nav>
        <div className="type-container">
          <Typewriter
            className="typewriter"
            options={{
							  strings: [
							    '<span style="font-size:60px;"> Parmjit Singh</span>',
							    '<span style="font-size:60px;"> Full Stack Developer</span>',
							    '<span style="font-size:60px;"> Welcome to my site.</span>',
							  ],
							  autoStart: true,
							  loop: true,
							  cursor: '<span style="font-size:60px;">|</span>',
            }}
          />
        </div>
        <div
          className="element-container"
          style={{
							  height: '1000px',
          }}
        />
        <a
          href="/"
          className="scroll social floating"
        >
          <Link activeClass="active" className="test1" to="welcome" spy smooth duration={500}>
            <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />
          </Link>
        </a>
      </Parallax>
      <div name="welcome" className="welcome">
        {/* <Parallax
						// blur={{ min: -15, max: 15 }}
          bgImage={require('./images/Cheer Up Emo Kid.jpg')}
          bgImageAlt="the dog"
          // strength={-200}
        > */}
        <div className="heading_container">
          <h1 className="greeting"> Welcome </h1>
          <p className="about_me paragraph" />
          Greetings, my name is Parmjit Singh I am a full stack web developer who has a passion for web development, learning and self development.
        </div>
        <div className="qualifications">
          <div className="skills">
            <div className="container-skills">
              <h2 className="qualifications-heading"> Qualifications: </h2>
              <li> Bsc Computer Science </li>
              <h2 className="abilities"> Techinical Experience </h2>
              <div className="container-front">
                <h2 className="abilities-heading"> Frontend </h2>
                <li> React </li>
                <li> Angular </li>
                <li> SCSS </li>
              </div>
              <div className="container-back">
                <h2 className="abilities-heading"> Backend </h2>

                <li> NodeJS </li>

                <li> Python(Django) </li>

                <li> C#(.NET CORE) </li>

                <li> experience with PHP </li>

                <li> Mongodb </li>

                <li>
                  {' '}
                  {
                  ' '
                }
                  Postgres
                  {' '}
                  {
                  ' '
                }
                  {' '}

                </li>

                <li>
                  {' '}
                  {
                  ' '
                }
                  MySQL
                  {' '}
                  {
                  ' '
                }
                  {' '}

                </li>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div
          style={{
            height: '1000px',
          }}
        />
        {/* {' '} */}
        {/* </Parallax> */}

      </div>
      <Element name="projects" className="project">
        <div>
          <h2 className="greeting"> Welcome </h2>

        </div>

        <div
          style={{
            height: '1000px',
          }}
        />
      </Element>
      <Element name="contact" className="contact">
        <div className="social-container">
          <a href="https://github.com/Wolf-PSG?tab=repositories" className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://twitter.com/_Parmjit_" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a
            href="/"
            className="mail social"
            onClick={() => {
              navigator.clipboard.writeText('parmjit.singh.1199@gmail.com');
              alert.show('Email Copied');
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>

      </Element>
    </div>
  );
};

export default App;
