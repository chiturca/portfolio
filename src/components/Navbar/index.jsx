import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/navbar/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import Face3Icon from '@mui/icons-material/Face3';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
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
    </div>
  );
}

export default Navbar;
