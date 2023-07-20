import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import ReactGA from 'react-ga';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import Meta from '../components/meta/meta.component';
import Navigation from '../components/navigation/navigation.component';
import Skills from '../components/skills/skills.component';
import Social from '../components/social/social';
import Card from '../components/project_card/project_card.component';
import mythosJPG from '../static/mythosapi.png';
import yourvendorJPG from '../static/yourvendor.png';
import kickballJPG from '../static/kickball.png';
import myMuseJPG from '../static/myMuseBackend.png';
import gnkcJPG from '../static/gnkcJPG.png';
import wavePNG from '../static/birds.png';

ReactGA.initialize('UA-181720692-1');

const calcRight = (o) => `translateX(${o * 0.2}px)`;
const calcLeft = (o) => `translateX(${o * -0.2}px)`;

const card_data = [
  {
    link: 'N/A',
    title: 'Mythos API',
    image: mythosJPG,
    desc: 'This is an API built with Django-Rest-Framework, Postgres and uses AWS S3 for file storage',
    githubLink: 'https://github.com/Wolf-PSG/MythosAPI',
  },
  {
    link: 'https://yourvendor-demo.netlify.app/',
    title: 'Freelance: Vendor Application',
    image: yourvendorJPG,
    desc: 'An application I created for a clients new business venture, site uses Vue.js with Vite and utlises AWS services for image and analytics',
    githubLink: 'N/A',
  },
  {
    link: 'N/A',
    title: 'Freelance: Homework/Quiz CMS',
    image: gnkcJPG,
    desc: 'Web App built with a Django and PostgreSQL using AWS S3 for media storage. Key focus on optimisation for mobile and tablet view.',
    githubLink: 'https://github.com/Wolf-PSG/GNKC',
  },
  {
    link: 'N/A',
    title: 'myMuse - real-time chat App',
    image: myMuseJPG,
    desc: 'This is a Web App built with a Nodejs and Graphql backend using Subscriptions and Websockets to handle realtime chat. Not currently maintained',
    githubLink: 'https://github.com/Wolf-PSG/myMuse',
  },
  {
    link: 'N/A',
    title: 'KickBall - Golang GraphQL api',
    image: kickballJPG,
    desc: 'Player stat generator api built in Golang and GraphQL',
    githubLink: 'https://github.com/Wolf-PSG/kickball',
  },
];

const Landing = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const largerTabletsScreen = useMediaQuery({ maxDeviceWidth: 1440 });
  const tenEightScreens = useMediaQuery({ maxDeviceWidth: 1080 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 2560 });

  const moving_paragraph_distance = {
    first: isBigScreen ? 0.1 : tenEightScreens ? 0.001 : largerTabletsScreen ? 0.01 : 0.1,
    second: isBigScreen ? 0.2 : tenEightScreens ? 0.002 : largerTabletsScreen ? 0.04 : 0.15,
    third: isBigScreen ? 0.3 : tenEightScreens ? 0.003 : largerTabletsScreen ? 0.08 : 0.2,
    forth: isBigScreen ? 0.4 : tenEightScreens ? 0.004 : largerTabletsScreen ? 0.12 : 0.25,
    fifth: isBigScreen ? 0.5 : tenEightScreens ? 0.005 : largerTabletsScreen ? 0.14 : 0.3,
    sixth: isBigScreen ? 0.6 : tenEightScreens ? 0.006 : largerTabletsScreen ? 0.18 : 0.35,
  };

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

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // });

  // const clickHandler = () => {
  //   ReactGA.event({
  //     category: 'Button',
  //     action: 'user clicked a project',
  //   });
  // };
  // useEffect(() => {
  //   return function unmount() {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   };
  // });

  return (
    <div className="page" ref={ref}>
      <Meta />
      <div className="landing">
        <Navigation />
        <img src={wavePNG} className="landing_wave" alt="birds resting on branch" />
        <div className="title_container">
          {isTabletOrMobile ? (
            <div className="type-container">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<span style='font-size:45px;line-height:1.8;'> Parmjit Singh,  </span>"
                    )
                    .pauseFor(1000)
                    .typeString(
                      '<span style="font-size:45px;line-height:1.8;"> Software Engineer. </span>'
                    )
                    .pauseFor(1000)
                    .typeString('<span style="font-size:45px;line-height:1.8;"> Welcome. </span>')
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                  autoStart: true,
                  stop: true,
                  // loop: true,
                  cursor: '<span style="font-size:60px;">|</span>',
                }}
              />
            </div>
          ) : isBigScreen ? (
            <div className="type-container">
              <animated.div
                className="typewriter_name"
                style={{ transform: offset.interpolate(calcRight) }}
              >
                <Typewriter
                  options={{
                    strings: ['<span style="font-size:80px;"> Parmjit Singh</span>'],
                    autoStart: true,
                    stop: true,
                    loop: true,
                    pausefor: 2500,
                    cursor: '<span style="font-size:80px;">|</span>',
                  }}
                />{' '}
              </animated.div>
              <animated.div
                className="typewriter_role"
                style={{ transform: offset.interpolate(calcLeft) }}
              >
                <Typewriter
                  options={{
                    strings: ['<span style="font-size:80px;"> Software Engineer </span>'],
                    autoStart: true,
                    stop: true,
                    loop: true,
                    pausefor: 2500,
                    cursor: '<span style="font-size:80px;">|</span>',
                  }}
                />
              </animated.div>
              <animated.div
                className="typewriter_welcome"
                style={{ transform: offset.interpolate(calcRight) }}
              >
                <Typewriter
                  options={{
                    strings: ['<span style="font-size:80px;"> Welcome to my site.</span>'],
                    autoStart: true,
                    stop: true,
                    loop: true,
                    pausefor: 2500,
                    cursor: '<span style="font-size:80px;">|</span>',
                  }}
                />
              </animated.div>
            </div>
          ) : (
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
                    pausefor: 3500,
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
                    strings: ['<span style="font-size:60px;"> Software Engineer </span>'],
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
            </div>
          )}
        </div>
      </div>
      <div name="welcome" className="welcome">
        <Element name="welcome" className="element_welcome_container">
          <div className="heading_container">
            <div className="about_me_paragraph">
              {isTabletOrMobile ? (
                <div className="static_about_me_paragraph">
                  <h1>Hard Working</h1>
                  <h1>And Driven.</h1>
                  <h1>Motivated</h1>
                  <h1>To Creating</h1>
                  <h1>Clean And</h1>
                  <h1>Efficient Code.</h1>
                </div>
              ) : (
                <div className="moving_about_me_paragraph">
                  <animated.h1
                    className="about_1"
                    style={{
                      transform: offset.interpolate(
                        (x) => `translateX(${x * moving_paragraph_distance.first}px)`
                      ),
                    }}
                  >
                    Hard Working
                  </animated.h1>
                  <animated.h1
                    className="about_2"
                    style={{
                      transform: offset.interpolate(
                        (x) => `translateX(${x * moving_paragraph_distance.second}px)`
                      ),
                    }}
                  >
                    {' '}
                    And Driven.
                  </animated.h1>
                  <animated.h1
                    className="about_3"
                    style={{
                      transform: offset.interpolate(
                        (x) => `translateX(${x * moving_paragraph_distance.third}px)`
                      ),
                    }}
                  >
                    I Am Motivated
                  </animated.h1>
                  <animated.h1
                    className="about_4"
                    style={{
                      transform: offset.interpolate(
                        (x) => `translateX(${x * moving_paragraph_distance.forth}px)`
                      ),
                    }}
                  >
                    to Creating
                  </animated.h1>
                  <animated.h1
                    className="about_5"
                    style={{
                      transform: offset.interpolate(
                        (x) => `translateX(${x * moving_paragraph_distance.fifth}px)`
                      ),
                    }}
                  >
                    {' '}
                    Clean and{' '}
                  </animated.h1>
                  <animated.h1
                    className="about_6"
                    style={{
                      transform: offset.interpolate(
                        (x) => `translateX(${x * moving_paragraph_distance.sixth}px)`
                      ),
                    }}
                  >
                    {' '}
                    Performant Code
                  </animated.h1>
                </div>
              )}
            </div>
          </div>
          <div className="about_me_paragraph_container">
            <p className="about_me paragraph_p">
              Hey I'm Parmjit, I'm a software engineer with a passion in creating{' '}
              <strong> Data-driven </strong>, <strong> Responsive </strong> and{' '}
              <strong> Secure </strong>
              <strong>applications. </strong> <br /> <br /> I have professional and freelance
              experience in <strong> Full Stack Development </strong> and{' '}
              <strong> Data Engineering </strong>
              <br /> <br />
              For information about my interest and what I enjoy, please view the contact section
              <br /> <br />
              Below are just some of the skills I have acquired so far:
            </p>{' '}
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
          <h3 className="project-hint"> Click the cards to open the app</h3>
          <div className="card_container">
            {card_data.map((data, index) => (
              <Card key={`${index}_card`} {...data} />
            ))}
          </div>{' '}
        </Element>
      </div>
      <div className="contacts_container">
        <Element name="contacts">
          <Social landing={true}/>
        </Element>
      </div>
    </div>
  );
};

export default Landing;
