import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';

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
            An ambitious developer specialized in frontend react development and unity game
            development looking for a full-time role in an IT company with the opportunity to work
            with the latest technologies.
          </p>
          <p>Quite curious, detail oriented and a collaborative team player.</p>
          <p>Also, interested in sociology theories, music, camping, animals and anime.</p>
          <h2>
            <AnimatedLetters letterClass={letterClass} strArray={skillsArray} idx={3} />
          </h2>
          <p>
            Javascript, Typescript, ReactJS, <br />
            Redux, Firebase, HTML, <br />
            CSS, SCSS, BootStrap, TailwindCSS, <br />
            Unity, C#
          </p>
        </div>
        <div className="cube">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGithub} color="#1d1a1a" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#264de4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
