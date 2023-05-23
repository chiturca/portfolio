import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/navbar/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import Face3Icon from '@mui/icons-material/Face3';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CV from '../../assets/footer/Miray_Sönmez.pdf';
import MenuIcon from '@mui/icons-material/Menu';
import './index.scss';

function Navbar({ handleToggleDarkMode }) {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <div className="navbar" id={expand ? 'open' : 'close'}>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpand((prev) => !prev);
          }}>
          <MenuIcon />
        </button>
      </div>
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
      <div className="smnav">
        <h3>Navigation</h3>
        <NavLink exact="true" activeclassname="active" to="/">
          HOME
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/aboutme">
          ABOUT ME
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/projects">
          PROJECTS
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/experience">
          EXPERIENCE
        </NavLink>
        <h3>Contact Links</h3>
        <a href={CV} download className="cv">
          Download CV
        </a>
        <a href={'mailto:sonmezmiray@gmail.com'} target="_blank" rel="noreferrer">
          Email
        </a>
        <a href={'https://github.com/chiturca'} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={'https://www.linkedin.com/in/miraysonmez'} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Navbar;
