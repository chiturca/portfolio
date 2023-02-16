import React from 'react';
import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Miray Sönmez</h2>
        <p>
          A Frontend Web Developer based on Ankara-Türkiye. Passionate about creating single page
          web applications and always ready to learn more.
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <span>
          Javascript, Typescript, ReactJS, Redux, Firebase, Postman, HTML, CSS, BootStrap,
          TailwindCSS, npm, Visual Studio Code, ubuntu
        </span>
      </div>
    </div>
  );
}

export default Home;
