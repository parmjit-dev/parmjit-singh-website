/**
 * onces the basic desgin work on splitting them into components -- like the arrow icons and the links
 */

import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { Link, Element, Events } from 'react-scroll';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useAlert } from 'react-alert';
import Helmet from 'react-helmet';
import Card from './components/project_card/project_card.component';

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
      <Helmet>
        <title>Parmjit.Dev</title>
        <meta
          name="description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 20."
        />

        <meta itemProp="name" content="Parmjit.Dev" />
        <meta
          itemProp="description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 20."
        />
        <meta itemProp="image" content="" />

        <meta property="og:url" content="https://parmjit.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Parmjit.Dev" />
        <meta
          property="og:description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 20."
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parmjit.Dev" />
        <meta
          name="twitter:description"
          content="Portfolio Site of Parmjit Singh Gill. Full Stack Developer, BSc Computer Science, 20."
        />
        <meta name="twitter:image" content="" />
      </Helmet>
      <Parallax
        bgImage={require('./images/Iceberg-Minimalist-4k-HD-Artist-4k-Wallpapers-Images-.jpg')}
        bgImageAlt="the cat"
        strength={200}
      >
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <Link activeClass="active" className="test1" to="welcome" spy smooth duration={1000}>
                  <span className="header-span"> About Me </span>
                </Link>

                <Link activeClass="active" className="test1" to="projects" spy smooth duration={1000}>
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
          <p className="about_me paragraph">
            Greetings, my name is Parmjit Singh I am a full stack web developer who has a passion for web
            development, learning and self development.
            <br />
          </p>
        </div>
        <div className="qualifications">
          <div className="skills">
            <div className="container-skills">
              <h2 className="qualifications-heading"> Qualifications: </h2>
              <li> Studying towards obtaining my Bsc in Computer Science </li>
              <h2 className="abilities"> Techinical Experience </h2>
              <div className="abilities-containers">
                <div className="container-front">
                  <h2 className="abilities-heading"> Frontend </h2>
                  <li> React - Context API + Hooks and Redux</li>
                  <li> experience Angular </li>
                  <li> Jquery </li>
                  <li> GraphQl </li>
                  <li> SCSS </li>
                </div>
                <div className="container-back">
                  <h2 className="abilities-heading"> Backend </h2>

                  <li> NodeJS - ExpressJS Framework</li>

                  <li> Python(Django) </li>

                  <li> experience C#(.NET CORE) </li>

                  <li> experience with PHP </li>

                  <li> Mongodb </li>

                  <li>  Postgres   </li>

                  <li>  MySQL   </li>
                  <li>AWS - Lambda and S3</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {' '}
        <div
          style={{
					  height: '200px',
          }}
        />
        {/* {' '} */}
        {/* </Parallax> */}
      </div>
      <div className="project_container">
        <Element name="projects" className="project">
          <h2 className="project-greetings"> Projects </h2>
          <div className="card_container">
            <Card
              link="https://mythosapi.herokuapp.com/"
              title="Mythos API"
              image={require('./static/mythosapi.png')}
              desc="This is an API built with Django-Rest-Framework, Postgres and uses AWS S3 for file storage"
            />
          </div>
          <div
            style={{
						  height: '800px',
            }}
          />
        </Element>
      </div>

      <Element name="contact" className="contact">
        <div className="social-container">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wolf-PSG?tab=repositories" className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_Parmjit_" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/parmjit-gill-b139721b8/" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
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
