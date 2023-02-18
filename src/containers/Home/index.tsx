import React from 'react';
import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Miray Sönmez</h2>
        <p>
          A Frontend Web Developer based on Ankara-Türkiye. <br />
          Passionate about creating single page web applications and always ready to create more.{' '}
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
