import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import MS from '../../assets/home/MiraySönmez-rbg.png';
import './index.scss';

function Home() {
  const [letterClass, setLetterClass] = useState<string>('text-animate');

  const greeting = 'Hi,';
  const name = 'I am Miray Sönmez';
  const jobTitle = 'Frontend - Game Developer';

  useEffect(() => {
    const animationDelay = 4000;
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, animationDelay);
  }, []);

  return (
    <div className="home">
      <div className="intro">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={greeting.split('')} idx={1} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={name.split('')} idx={1} />
        </h1>
        <p>
          <AnimatedLetters letterClass={letterClass} strArray={jobTitle.split('')} idx={1} /> <br />
        </p>
      </div>
      <div className="photo animate__animated animate__jackInTheBox">
        <div className="layer1"></div>
        <div className="layer2"></div>
        <div className="layer3"></div>
        <div className="miray">
          <img src={MS} alt="Miray" />
        </div>
      </div>
    </div>
  );
}

export default Home;
