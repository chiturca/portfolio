import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate('/projects/' + id);
      }}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div className="projectdetails">
        <h1>{name}</h1>
        <button>GitHub</button>
        <button>Website</button>
      </div>
    </div>
  );
}

export default ProjectItem;
