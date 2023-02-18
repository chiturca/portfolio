import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';

function About() {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];

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
          <p>Lorem ipsum</p>
          <h2>Skills</h2>
          <p>
            Javascript, Typescript, ReactJS, <br />
            Redux, Firebase, Postman, HTML, <br />
            CSS, SCSS, BootStrap, TailwindCSS
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
