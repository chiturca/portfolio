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
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpand((prev) => !prev);
          }}>
          <MenuIcon />
        </button>
      </div>
      <div className="links">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
