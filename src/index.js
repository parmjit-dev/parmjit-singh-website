import React from 'react';
import { render } from 'react-dom';
import { Parallax, Background } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('start', arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
          <Parallax
              bgImage={require('./images/cropped-3840-2160-939177.jpg')}
              bgImageAlt="the cat"
              strength={200}
          >
                  <nav className="navbar">
                    <div className="container-fluid">
                          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <Link activeClass="active" className="test1" to="welcome" spy={true} smooth={true} duration={500} > About Me </Link>
                            <Link activeClass="active" className="test1" to="projects" spy={true} smooth={true} duration={500} > Projects </Link>
                            <Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={500} > Contact </Link>
                            </ul>
                          </div>
                        </div>
                  </nav>
                <p><Typewriter
                  options={{
                    strings: ['<span style="font-size:50px;"> This is Parmjit Singh</span>', '<span style="font-size:40px;"> Welcome to my site.</span>'],
                    autoStart: true,
                    loop: true,
                    cursor: '<span style="font-size:50px;">|</span>'
                  }}
                />
              <div style={{ height: '1000px' }} /></p>
          </Parallax>
  
          {/* -----dynamic blur-----*/}
          <Element name ='welcome' className="element">
          <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('./images/dd04dd8.jpg')}
              bgImageAlt="the dog"
              strength={-200}
          >
            <div className="heading">
              <h1 className="greeting">Welcome</h1>
            </div>
            <div style={{ height: '1000px' }} />
            
          </Parallax>
          </Element>
          <Element name ='projects' className="element">
          <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('./images/dd04dd8.jpg')}
              bgImageAlt="the dog"
              strength={-200}
          >
            <div>
              <p className="greeting">Welcome</p>
              <div style={{ height: '1000px' }} />
            </div>
          </Parallax>
          </Element>
          <Element name ='contact' className="element">
          <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('./images/dd04dd8.jpg')}
              bgImageAlt="the dog"
              strength={-200}
          >
            <div>
              <p className="contactMe"> Contact Me:</p>
              <div style={{ height: '1000px' }} />
            </div>
          </Parallax>
          </Element>
          {/* -----custom background element-----*/}
          {/* <Parallax strength={3000}
              <div>Use the background component for custom elements</div>
              <Background className="custom-bg">
                  <img src="./images/j0zucawmxt351.png" alt="fill murray" />
              </Background>
          </Parallax> */}

                  {/* -----renderProp: "renderLayer"-----*/}
                  {/* <Parallax
              bgImage={'./images/j0zucawmxt351.png'}
              strength={400}
              renderLayer={percentage => (
                  <div
                      style={{
                          position: 'absolute',
                          background: `rgba(255, 125, 0, ${percentage * 1})`,
                          left: '50%',
                          top: '50%',
                          width: percentage * 500,
                          height: percentage * 500,
                      }}
                  />
              )}
          >
              <p>... Content</p>
          </Parallax> */}
      </div>
  );
      }
    };

render(<App/>, document.getElementById('root'));