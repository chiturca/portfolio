import React from 'react';
import './index.scss';
import CV from '../../assets/footer/Miray_Sönmez.pdf';

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <button className="cv">
          <a href={CV} download>
            download CV
          </a>
        </button>
        <button className="email">
          <a href={'mailto:sonmezmiray@gmail.com'} target="_blank" rel="noreferrer">
            Email
          </a>
        </button>
        <button className="github">
          <a href={'https://github.com/chiturca'} target="_blank" rel="noreferrer">
            Github
          </a>
        </button>
        <button className="linkedin">
          <a href={'https://www.linkedin.com/in/miraysonmez'} target="_blank" rel="noreferrer">
            Likedin
          </a>
        </button>
      </div>
      <p> &copy; YEAR FUNCTION 2023 miraysonmez.vercel.app</p>
    </div>
  );
}

export default Footer;
