import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'react-responsive';
import Meta from '../components/meta/meta.component';
import birdPNG from '../static/birds.png';
import branchPNG from '../static/cherry.png'
import HeaderNav from "../components/headerNav/HeaderNav";

const Landing = () => {
  const ref = useRef();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const fontSize = isTabletOrMobile ? '45' : '80';
  return (
    <div className="page" ref={ref}>
      <Meta />
      <div className="landing">
        <img src={branchPNG} className="landing_branch" alt="branches" />
        <HeaderNav />
        <img src={birdPNG} className="landing_wave" alt="birds resting on branch" />
        <div className="title_container">
          <div className="type-container">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style='font-size:${fontSize}px;line-height:1.8;'> Parmjit Singh,</span>`
                  )
                  .pauseFor(1000)
                  .typeString(
                    `<div></div><span style="font-size:${fontSize}px;line-height:1.8;"> Software Engineer,</span></div>`
                  )
                  .pauseFor(1000)
                  .typeString(
                    `<div></div><span style="font-size:${fontSize}px;line-height:1.8;"> Welcome</span></div>`
                  )
                  .pauseFor(2500)
                  .deleteChars(8)
                  .pauseFor(1000)
                  .typeString(
                    `<div></div><span style="font-size:${fontSize}px;line-height:1.8;"> Bonjour</span></div>`
                  )
                  .pauseFor(1000)
                  .deleteChars(8)
                  .pauseFor(1000)
                  .typeString(
                    `<div></div><span style="font-size:${fontSize}px;line-height:1.8;"> Hola</span></div>`
                  )
                  .pauseFor(1000)
                  .deleteChars(4)
                  .pauseFor(1000)
                  .typeString(
                    `<div></div><span style="font-size:${fontSize}px;line-height:1.8;"> こんにちは</span></div>`
                  )
                  .start();
              }}
              options={{
                autoStart: true,
                stop: true,
                cursor: `<span style="font-size:${fontSize}px;line-height:1.8;">|</span>`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
