import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id, boxShadow, skills }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      style={{ boxShadow: boxShadow }}
      onClick={() => {
        navigate('/projects/' + id);
      }}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" loading="lazy">
        <div className="lang">{skills}</div>
      </div>
      <div className="projectdetails">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
