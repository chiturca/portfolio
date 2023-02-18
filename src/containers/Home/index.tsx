import { useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';

function Home() {
  const [letterClass] = useState<string>('text-animate');
  const salutArray = ['H', 'i', ',', ' ', 'I', ' ', 'a', 'm'];
  const nameArray = ['M', 'i', 'r', 'a', 'y', ' ', 'S', 'ö', 'n', 'm', 'e', 'z'];
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r'
  ];
  const locationArray = ['A', 'n', 'k', 'a', 'r', 'a', '-', 'T', 'ü', 'r', 'k', 'i', 'y', 'e'];
  return (
    <div className="home">
      <div className="about">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={salutArray} idx={3} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={11} />
        </h1>
        <p>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={locationArray} idx={45} />
          <br /> Contact me
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <p>
          Javascript, Typescript, ReactJS, <br />
          Redux, Firebase, Postman, HTML, <br />
          CSS, SCSS, BootStrap, TailwindCSS
        </p>
      </div>
    </div>
  );
}

export default Home;
