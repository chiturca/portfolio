import { useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';

function Home() {
  const [letterClass] = useState<string>('text-animate');
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
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r'
  ];
  return (
    <div className="home">
      <div className="about">
        <h1>
          Hi, I am <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <p>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27} /> based on
          Ankara-Türkiye. <br />
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
