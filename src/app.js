/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import ReactGA from 'react-ga';
import { Link, Element, Events } from 'react-scroll';
import './index.css';
import Helmet from 'react-helmet';
import Social from './components/social/social';
import Card from './components/project_card/project_card.component';
import background from './images/Iceberg-Minimalist-4k-HD-Artist-4k-Wallpapers-Images-.jpg';
import mythosJPG from './static/mythosapi.png';
import quizmakerJPG from './static/quiz-maker-psg.png';
import myMuseJPG from './static/myMuseBackend.png';

ReactGA.initialize('UA-181720692-1');

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const clickHandler = () => {
    ReactGA.event({
      category: 'Button',
      action: 'user clicked a project',
    });
  };
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log('start', arguments);
    });
    Events.scrollEvent.register('end', () => {
      console.log('end', arguments);
    });

    return function unmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  return (
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
      <Parallax bgImage={background} bgImageAlt="the cat" strength={200}>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <Link
                  activeClass="active"
                  className="test1"
                  to="welcome"
                  spy
                  smooth
                  duration={1000}
                >
                  <span className="buttonCode header_btns">About Me</span>
                </Link>

                <Link className="test1" to="projects" spy smooth duration={1000}>
                  <span className="buttonCode header_btns">Project</span>
                </Link>

                <Link
                  activeClass="active"
                  className="test1"
                  to="contact"
                  spy
                  smooth
                  duration={1500}
                >
                  <span className="buttonCode header_btns"> Contact </span>
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
        <div className="heading_container">
          <h1 className="greeting"> Welcome </h1>
          <p className="about_me paragraph">
            Greetings, my name is Parmjit Singh I am a full stack web developer who has a passion
            for web development, learning and self development.
            <br />
          </p>
        </div>
        <div className="qualifications">
          <div className="skills">
            <div className="container-skills">
              <div className="awards">
                <h2 className="qualifications-heading">Qualifications:</h2>
                <li>Studying towards obtaining my Bsc in Computer Science</li>
              </div>
              <h2 className="abilities"> Techinical Experience </h2>
              <div className="abilities-containers">
                <div className="container-front">
                  <h2 className="abilities-heading">Frontend</h2>
                  <br />
                  <li>React - Context API + Hooks and Redux</li>
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
                  <h2 className="abilities-heading">Backend</h2>
                  <br />
                  <li> NodeJS - ExpressJS Framework</li>
                  <br />
                  <li> Python(Django) </li>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: '300px',
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
              onClick={() => ReactGA.event('PROJECT', 'QUIZ PROJECT CLICKED', 'QUIZ_PAGE')}
            />
            <Card
              link="https://github.com/Wolf-PSG/myMuse"
              title="myMuse - real-time chat App"
              image={myMuseJPG}
              desc="This is a Web App built with a Nodejs and Graphql backend using Subscriptions and Websockets to handle realtime chat funcationality. Frontend is built with React and is currently under development"
              githubLink="https://github.com/Wolf-PSG/myMuse"
            />
          </div>
          <div
            style={{
              height: '900px',
            }}
          />
        </Element>
      </div>

      <Element name="contact" className="contact">
        <Social />
      </Element>
    </div>
  );
};
export default App;
