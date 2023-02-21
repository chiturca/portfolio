import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/navbar/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import Face3Icon from '@mui/icons-material/Face3';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CV from '../../assets/footer/Miray_Sönmez.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import './index.scss';

function Navbar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <div className="navbar" id={expand ? 'open' : 'close'}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpand((prev) => !prev);
          }}>
          <MenuIcon />
        </button>
      </div>
      <div className="navs">
        <div className="links">
          <NavLink exact="true" activeclassname="active" to="/">
            <HomeIcon />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/aboutme">
            <Face3Icon />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/projects">
            <CollectionsBookmarkIcon />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/experience">
            <WorkHistoryIcon />
          </NavLink>
        </div>
        <div className="contact">
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
      </div>
    </div>
  );
}

export default Navbar;
