import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/navbar/logo.svg';
// import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Face3Icon from '@mui/icons-material/Face3';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
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
      {/* <div className="toggleButton">
        <button
          onClick={() => {
            setExpand((prev) => !prev);
          }}>
          <MenuIcon />
        </button>
      </div> */}
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
