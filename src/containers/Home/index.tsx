import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import MS from '../../assets/home/MiraySönmez-rbg.png';
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
      <div className="photo animate__animated animate__jackInTheBox">
        <div className="layer1"></div>
        <div className="layer2"></div>
        <div className="layer3"></div>
        <div className="miray">
          <img src={MS} alt="miray" />
        </div>
      </div>
    </div>
  );
}

export default Home;
