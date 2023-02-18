import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/navbar/logo.svg';
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
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
