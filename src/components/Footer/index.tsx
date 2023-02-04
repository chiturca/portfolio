import React from 'react';
import './index.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <button className="cv">download</button>
        <button className="email">e</button>
        <button className="github">g</button>
        <button className="linkedin">l</button>
      </div>
      <p> &copy; YEAR FUNCTION 2023 miraysonmez.vercel.app</p>
    </div>
  );
}

export default Footer;
