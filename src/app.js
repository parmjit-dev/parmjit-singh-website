import React from 'react';
import { render } from 'react-dom';
import { Parallax, Background } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import {
  Link, Element, Events, animateScroll as scroll, scroller,
} from 'react-scroll';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import alertMaker from './components/alerts/alert.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    // this.alert = useAlert();
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('start', arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <Parallax bgImage={require('./images/background.jpg')} bgImageAlt="the cat" strength={200}>
          <nav className="navbar">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <Link activeClass="active" className="test1" to="welcome" spy smooth duration={500}>
                    {' '}
                    About Me
{' '}
                  </Link>
                  {' '}
                  <Link
                    activeClass="active"
                    className="test1"
                    to="projects"
                    spy
                    smooth
                    duration={500}
                  >
                    {' '}
                    Projects
{' '}
                  </Link>
                  {' '}
                  <Link activeClass="active" className="test1" to="contact" spy smooth duration={500}>
                    {' '}
                    Contact
{' '}
                  </Link>
                  {' '}
                </ul>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </nav>
          {' '}
          <p>
            {' '}
            <Typewriter
              options={{
							  strings: [
							    '<span style="font-size:50px;"> This is Parmjit Singh</span>',
							    '<span style="font-size:50px;"> Full Stack Developer </span>',
							    '<span style="font-size:40px;"> Welcome to my site.</span>',
							  ],
							  autoStart: true,
							  loop: true,
							  cursor: '<span style="font-size:50px;">|</span>',
              }}
            />
            {' '}
            <div
              style={{
							  height: '1000px',
              }}
            />
            {' '}
          </p>
          {' '}
        </Parallax>
        {' '}
        {/* -----dynamic blur-----*/}
        {' '}
        <Element name="welcome" className="element">
          <Parallax
						// blur={{ min: -15, max: 15 }}
            bgImage={require('./images/dd04dd8.jpg')}
            bgImageAlt="the dog"
            strength={-200}
          >
            <div className="heading">
              <h1 className="greeting"> Welcome </h1>
              {' '}
            </div>
            {' '}
            <div className="qualifications">
              <h2 className="qualifications-heading"> Qualifications: </h2>
              {' '}
              <li> Bsc Computer Science </li>
              {' '}
              <div className="skills">
                <div className="container-skills">
                  <h2 className="abilities"> Techinical Experience </h2>
                  {' '}
                  <div className="container-front">
                    <h2 className="abilities-heading"> Front - end </h2>
                    {' '}
                    <li> React </li>
                    {' '}
                    <li> Angular </li>
                    {' '}
                  </div>
                  {' '}
                  <div className="container-back">
                    <h2 className="abilities-heading"> Back - end </h2>
                    {' '}
                    <li> NodeJS </li>
                    {' '}
                    <li> Python(Django) </li>
                    {' '}
                    <li> C#(.NET CORE) </li>
                    {' '}
                    <li> Intermediate experience with PHP </li>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div
              style={{
							  height: '1000px',
              }}
            />
            {' '}
          </Parallax>
          {' '}
        </Element>
        {' '}
        <Element name="projects" className="element">
          <Parallax
						// blur={{ min: -15, max: 15 }}
            bgImage={require('./images/j0zucawmxt351.png')}
            bgImageAlt="the dog"
            strength={-200}
          >
            <div>
              <p className="greeting"> Welcome </p>
              {' '}
              <div
                style={{
								  height: '1000px',
                }}
              />
              {' '}
            </div>
            {' '}
          </Parallax>
          {' '}
        </Element>
        {' '}
        <Element name="contact" className="element">
          <div className="social-container">
            <a href="https://github.com/Wolf-PSG?tab=repositories" className="github social">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            {' '}
            <a href="https://twitter.com/_Parmjit_" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            {' '}
            <a
              className="mail social"
              onClick={() => {
							  // navigator.clipboard.writeText('parmjit.singh.1199@gmail.com');
                alertMaker();
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
            {' '}
          </div>
          {' '}
        </Element>
        {' '}
      </div>
    );
  }
}

export default App;
