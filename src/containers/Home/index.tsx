import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';

function Home() {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const salutArray = ['H', 'i', ','];
  const nameArray = [
    'I',
    ' ',
    'a',
    'm',
    ' ',
    'M',
    'i',
    'r',
    'a',
    'y',
    ' ',
    'S',
    'ö',
    'n',
    'm',
    'e',
    'z'
  ];
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

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="home">
      <div className="intro">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={salutArray} idx={1} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={1} />
        </h1>
        <p>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={1} /> <br />
        </p>
      </div>
    </div>
  );
}

export default Home;
