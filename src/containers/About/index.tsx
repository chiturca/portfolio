import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';

function About() {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];
  const skillsArray = ['S', 'k', 'i', 'l', 'l', 's'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="about">
      <div>
        <div className="aboutme">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={3} />
          </h1>
          <p>
            I am an ambitious frontend web developer looking for a role in an established IT company
            with the opportunity to work with the latest technologies.
          </p>
          <br />
          <p>I am quite curious, detail oriented and a collaborative team player.</p>
          <h2>
            <AnimatedLetters letterClass={letterClass} strArray={skillsArray} idx={3} />
          </h2>
          <p>
            Javascript, Typescript, ReactJS, <br />
            Redux, Firebase, HTML, <br />
            CSS, SCSS, BootStrap, TailwindCSS
          </p>
        </div>
        <div className="cube">
          <div className="cubespinner">
            <div className="face1">{/* <FontAwesomeIcon /> */}</div>
            <div className="face2"></div>
            <div className="face3"></div>
            <div className="face4"></div>
            <div className="face5"></div>
            <div className="face6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
