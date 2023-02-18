import React from 'react';
import CV from '../../assets/footer/Miray_Sönmez.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './index.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={CV} download className="cv">
          <DownloadIcon />
        </a>
        <a href={'mailto:sonmezmiray@gmail.com'} target="_blank" rel="noreferrer">
          <EmailIcon />
        </a>
        <a href={'https://github.com/chiturca'} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={'https://www.linkedin.com/in/miraysonmez'} target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        {' '}
        &copy; {new Date().getFullYear()} <br /> miraysonmez
      </p>
    </div>
  );
}

export default Footer;
