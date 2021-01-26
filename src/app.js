/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import ReactGA from 'react-ga';
import { useSpring, animated } from 'react-spring';
import { Element, Events } from 'react-scroll';
import './index.css';
import Meta from './components/meta/meta.component';
import Navigation from './components/navigation/navigation.component';
import Skills from './components/skills/skills.component';
import Social from './components/social/social';
import Card from './components/project_card/project_card.component';
import mythosJPG from './static/mythosapi.png';
import birdJPG from './static/main_image.jpg';
import quizmakerJPG from './static/quiz-maker-psg.png';
import quizReactJPG from './static/quiz-maker-react.png';
import myMuseJPG from './static/myMuseBackend.png';
import gnkcJPG from './static/gnkcJPG.png';
ReactGA.initialize('UA-181720692-1');

const calcRight = (o) => `translateX(${o * 0.2}px)`;
const calcRightSlow = (o) => `translateX(${o * 0.05}px)`;
const calcLeft = (o) => `translateX(${o * -0.2}px)`;

const App = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

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
    return function unmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  return (
    <div className="page" ref={ref}>
      <Meta />
      <div className="landing">
        <Navigation />
        <div className="title_container">
          <div className="type-container">
            <animated.div
              className="typewriter_name"
              style={{ transform: offset.interpolate(calcRight) }}
            >
              <Typewriter
                options={{
                  strings: ['<span style="font-size:60px;"> Parmjit Singh</span>'],
                  autoStart: true,
                  stop: true,
                  loop: true,
                  pausefor: 2500,
                  cursor: '<span style="font-size:60px;">|</span>',
                }}
              />{' '}
            </animated.div>
            <animated.div
              className="typewriter_role"
              style={{ transform: offset.interpolate(calcLeft) }}
            >
              <Typewriter
                options={{
                  strings: ['<span style="font-size:60px;"> Full Stack Developer</span>'],
                  autoStart: true,
                  stop: true,
                  loop: true,
                  pausefor: 2500,
                  cursor: '<span style="font-size:60px;">|</span>',
                }}
              />
            </animated.div>
            <animated.div
              className="typewriter_welcome"
              style={{ transform: offset.interpolate(calcRight) }}
            >
              <Typewriter
                options={{
                  strings: ['<span style="font-size:60px;"> Welcome to my site.</span>'],
                  autoStart: true,
                  stop: true,
                  loop: true,
                  pausefor: 2500,
                  cursor: '<span style="font-size:60px;">|</span>',
                }}
              />
            </animated.div>
          </div>{' '}
        </div>
      </div>
      <div name="welcome" className="welcome">
        <Element name="welcome" className="element_welcome_container">
          <div className="heading_container">
            <div className="about_me_paragraph">
              <animated.h1
                className="about_1"
                style={{
                  transform: offset.interpolate((x) => `translateX(${x * 0.01}px)`),
                }}
              >
                Hard Working
              </animated.h1>
              <animated.h1
                className="about_2"
                style={{
                  transform: offset.interpolate((x) => `translateX(${x * 0.03}px)`),
                }}
              >
                {' '}
                And Driven.
              </animated.h1>
              <animated.h1
                className="about_3"
                style={{
                  transform: offset.interpolate((x) => `translateX(${x * 0.05}px)`),
                }}
              >
                I am Motivated
              </animated.h1>
              <animated.h1
                className="about_4"
                style={{
                  transform: offset.interpolate((x) => `translateX(${x * 0.07}px)`),
                }}
              >
                to Creating
              </animated.h1>
              <animated.h1
                className="about_5"
                style={{
                  transform: offset.interpolate((x) => `translateX(${x * 0.09}px)`),
                }}
              >
                {' '}
                Clean and{' '}
              </animated.h1>
              <animated.h1
                className="about_6"
                style={{
                  transform: offset.interpolate((x) => `translateX(${x * 0.11}px)`),
                }}
              >
                {' '}
                Performant Code
              </animated.h1>
            </div>
          </div>
          <div className="qualifications">
            <div className="skill_container">
              <h1> My Skills</h1>
              <Skills />
            </div>
          </div>
        </Element>
      </div>
      <div className="project_container">
        <Element name="projects">
          <h2 className="project-greetings"> Projects - Made From Scratch </h2> <br />
          <h5 className="project-hint"> Click the cards to open the app</h5>
          <div className="card_container">
            <Card
              link="https://mythosapi.herokuapp.com/"
              title="Mythos API"
              image={mythosJPG}
              desc="This is an API built with Django-Rest-Framework, Postgres and uses AWS S3 for file storage"
              githubLink="https://github.com/Wolf-PSG/MythosAPI"
              onClick={clickHandler}
            />{' '}
            <Card
              link="https://quiz-maker-psg.netlify.app/"
              title="quiz-maker Web App -- REST API"
              image={quizmakerJPG}
              desc="This is a Web App built with the MERN (Mongodb, Express.js, React, Node.js) stack using AWS S3 for image storage. The Node API is hosted on heroku -- Site is currently being reworked -- still usable"
              githubLink="https://github.com/Wolf-PSG/quizPortfolio"
              onClick={() => ReactGA.event('PROJECT', 'QUIZ PROJECT CLICKED', 'QUIZ_PAGE')}
            />{' '}
            <Card
              link="https://quiz-maker-psg.netlify.app/"
              title="quiz-maker Web App -- React"
              image={quizReactJPG}
              desc="Quiz app frontend. built with React.js. Site is currently being reworked-- still usable"
              githubLink="https://github.com/Wolf-PSG/quizPortfolioWebApp"
              onClick={() => ReactGA.event('PROJECT', 'QUIZ PROJECT CLICKED', 'QUIZ_PAGE')}
            />{' '}
            <Card
              link="https://github.com/Wolf-PSG/myMuse"
              title="myMuse - real-time chat App"
              image={myMuseJPG}
              desc="This is a Web App built with a Nodejs and Graphql backend using Subscriptions and Websockets to handle realtime chat funcationality. Frontend is built with React and is currently under development"
              githubLink="https://github.com/Wolf-PSG/myMuse"
            />
            <Card
              link="https://gnkc-test.herokuapp.com/"
              title="Client Project - Website and Homework/Quiz CMS"
              image={gnkcJPG}
              desc="This is a Web App built with a Django and PostgreSQL using AWS S3 for media storage. Also optimised for mobile and tablet view. Code not available due to privacy. Additional screenshots/showcase available on request"
              githubLink="https://gnkc-test.herokuapp.com/"
            />
          </div>{' '}
        </Element>
      </div>
      <div className="contacts_container">
        <Element name="contacts">
          <Social />
        </Element>
      </div>
    </div>
  );
};
export default App;
