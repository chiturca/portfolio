import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {
  IconDefinition,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';

function About() {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const titleText = 'About Me';
  const skillsText = 'Skills';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
// solution for if you add more & more icons (can be deleted if not)
  function getIconColor(icon: IconDefinition) {
    switch (icon) {
      case faReact:
        return '#61DBFB'; // Color for React icon
      case faGithub:
        return '#1d1a1a'; // Color for GitHub icon
      case faHtml5:
        return '#e34c26'; // Color for HTML5 icon
      case faCss3:
        return '#264de4'; // Color for CSS3 icon
      case faJsSquare:
        return '#f0db4f'; // Color for JavaScript icon
      case faGitAlt:
        return '#F1502F'; // Color for Git icon
      default:
        return 'black'; // Default color (you can change this to any color you prefer)
    }
  }

  return (
    <div className="about">
      <div>
        <div className="aboutme">
          <div style={{ border: 'solid-red' }}>
            <h1>
              <AnimatedLetters letterClass={letterClass} strArray={titleText.split('')} idx={3} />
            </h1>
            <p>
              An ambitious developer specialized in frontend development and game development
              looking for a full-time role in an IT company with the opportunity to work with the
              latest technologies.
            </p>
            <p>Quite curious, detail oriented and a collaborative team player.</p>
            <p>Also, interested in sociology theories, music, camping, animals and anime.</p>
          </div>
          <div>
            <h2>
              <AnimatedLetters letterClass={letterClass} strArray={skillsText.split('')} idx={3} />
            </h2>
            <p>
              Javascript, Typescript, ReactJS, <br />
              Redux, Firebase, HTML, <br />
              CSS, SCSS, BootStrap, TailwindCSS, <br />
              Unity, C#
            </p>
          </div>
        </div>
        <div className="cube">
          <div className="cubespinner">
            {[faReact, faGithub, faHtml5, faCss3, faJsSquare, faGitAlt].map((icon, index) => (
              <div key={index} className={`face${index + 1}`}>
                <FontAwesomeIcon icon={icon} color={getIconColor(icon)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
