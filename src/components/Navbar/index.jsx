import { Link, NavLink } from 'react-router-dom';
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
import './index.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
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
      <div className="smmedia">
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
  );
}

export default Navbar;
