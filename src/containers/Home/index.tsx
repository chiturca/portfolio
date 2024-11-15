import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import MS from "../../assets/home/MS.png";
import "./index.scss";

function Home() {
  const [letterClass, setLetterClass] = useState<string>("text-animate");

  const greeting = "Hi,";
  const name = "I am Miray Sönmez";
  const jobTitle = "Software Quality Assurance Specialist - Etiya";
  const secondaryTitle = "Frontend Developer";

  useEffect(() => {
    const animationDelay = 4000;
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, animationDelay);
  }, []);

  return (
    <div className="home">
      <div className="intro">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={greeting.split("")}
            idx={1}
          />{" "}
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={name.split("")}
            idx={1}
          />
        </h1>
        <p>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobTitle.split("")}
            idx={1}
          />{" "}
          <br />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={secondaryTitle.split("")}
            idx={1}
          />{" "}
        </p>
      </div>
      <div className="photo animate__animated animate__pulse">
        <div className="miray">
          <img src={MS} alt="Miray" />
        </div>
      </div>
    </div>
  );
}

export default Home;
