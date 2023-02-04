import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

function Navbar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <div className="navbar" id={expand ? 'open' : 'close'}>
      <div className="expandtoggle">
        <button
          onClick={() => {
            setExpand((prev) => !prev);
          }}>
          bars
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
