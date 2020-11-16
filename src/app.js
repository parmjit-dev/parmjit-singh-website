/* eslint-disable indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable global-require */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable prefer-rest-params */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import ReactGA from 'react-ga';
import { Link, Element, Events } from 'react-scroll';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useAlert } from 'react-alert';
import Helmet from 'react-helmet';
import Card from './components/project_card/project_card.component';
import background from './images/Iceberg-Minimalist-4k-HD-Artist-4k-Wallpapers-Images-.jpg';
import mythosJPG from './static/mythosapi.png';
import quizmakerJPG from './static/quiz-maker-psg.png';

// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
// import Image from './components/render.image/renderimagecomponent'
ReactGA.initialize('UA-181720692-1');

const App = () => {
    // const pagePosition = ['landing', 'aboutMe', 'projects'];
    // const [checkPosition] = useState(0);
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    const clickHandler = () => {
        ReactGA.event({
            category: 'Button',
            action: 'user clicked a project',
        });
    };
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
          <meta property="og:title" content="Parmjit.dev" />
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
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-0GMZGNKVZ2"></script>
        <script>
            {window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0GMZGNKVZ2');
        </script> */}
        <Parallax bgImage={background} bgImageAlt="the cat" strength={200}>
          <nav className="navbar">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <Link
                    activeClass="active"
                    className="test1"
                    to="welcome"
                    spy
                    smooth
                    duration={1000}
                  >
                    <span className="header-span">
                      About Me
                    </span>
                  </Link>

                  <Link
                    className="test1"
                    to="projects"
                    spy
                    smooth
                    duration={1000}
                  >
                    <span className="header-span">Project</span>
                  </Link>

                  <Link
                    activeClass="active"
                    className="test1"
                    to="contact"
                    spy
                    smooth
                    duration={1500}
                  >
                    <span className="header-span">
                      {' '}
                      Contact
                      {' '}
                    </span>
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
              Greetings, my name is Parmjit Singh I am a full stack
              web developer who has a passion for web development,
              learning and self development.
              <br />
            </p>
          </div>
          <div className="qualifications">
            <div className="skills">
              <div className="container-skills">
                <div className="awards">
                  <h2 className="qualifications-heading">
                    Qualifications:
                  </h2>
                  <li>
                    Studying towards obtaining my Bsc in
                    Computer Science
                  </li>
                </div>
                <h2 className="abilities">
                  {' '}
                  Techinical Experience
                  {' '}
                </h2>
                <div className="abilities-containers">
                  <div className="container-front">
                    <h2 className="abilities-heading">
                      Frontend
                    </h2>
                    <br />
                    <li>
                      React - Context API + Hooks and Redux
                    </li>
                    <br />
                    <li> experience with Angular </li>
                    <br />
                    <li> Jquery </li>
                    <br />
                    <li> GraphQl </li>
                    <br />
                    <li> SCSS </li>
                  </div>
                  <div className="container-back">
                    <h2 className="abilities-heading">
                      Backend
                    </h2>
                    <br />
                    <li> NodeJS - ExpressJS Framework</li>
                    <br />
                    <li> Python(Django) </li>
                    <br />
                    <li> experience with C#(.NET CORE) </li>
                    <br />
                    <li> experience with PHP </li>
                    <br />
                    <li> Mongodb </li>
                    <br />
                    <li> Postgres </li>
                    <br />
                    <li> MySQL </li>
                    <br />
                    <li>AWS - Lambda and S3</li>
                    <br />
                    {/* <div className="container-back">
                    <h2 className="abilities-heading">

                      Testing

                    </h2>
                    <br />
                    <li> API testing with Postman </li>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
                        height: '600px',
                    }}
          />
        </div>
        <div className="project_container">
          <Element name="projects" className="project">
            <h2 className="project-greetings"> Projects </h2>
            <div className="card_container">
              <Card
                link="https://mythosapi.herokuapp.com/"
                title="Mythos API"
                image={mythosJPG}
                desc="This is an API built with Django-Rest-Framework, Postgres and uses AWS S3 for file storage"
                githubLink="https://github.com/Wolf-PSG/MythosAPI"
                onClick={clickHandler}
              />
              <Card
                link="https://quiz-maker-psg.netlify.app/"
                title="quiz-maker Web App -- REST API"
                image={quizmakerJPG}
                desc="This is a Web App built with the MERN (Mongodb, Express.js, React, Node.js) stack using AWS S3 for image storage. The Node API is hosted on heroku -- Site is currently being reworked/developed -- still usable"
                githubLink="https://github.com/Wolf-PSG/quizPortfolio"
                onClick={() => ReactGA.event(
                                    'PROJECT',
                                    'QUIZ PROJECT CLICKED',
                                    'QUIZ_PAGE',
                                )}
              />
            </div>
            <div
              style={{
                            height: '1000px',
                        }}
            />
          </Element>
        </div>

        <Element name="contact" className="contact">
          <div className="social-container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Wolf-PSG?tab=repositories"
              className="github social"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/_Parmjit_"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/parmjit-gill-b139721b8/"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a
              className="mail social"
              onClick={() => {
                            navigator.clipboard.writeText(
                                'parmjit.singh.1199@gmail.com',
                            );
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
