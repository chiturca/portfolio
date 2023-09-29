import { useParams } from 'react-router-dom';
import { ProjectList } from '../../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import HttpIcon from '@mui/icons-material/Http';
import './index.scss';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="holder">
        <div
          style={{ backgroundImage: `url(${project.image})` }}
          className="bgImage"
          loading="lazy">
          <div className="link">
            {project.github !== '' && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            )}
            {project.website !== '' && (
              <a href={project.website} target="_blank" rel="noreferrer">
                <HttpIcon />
              </a>
            )}
          </div>
        </div>
        <div className="details">
          <p>
            <b>Skills:</b> {project.skills}{' '}
          </p>
          <p>
            <b>Summary:</b> {project.summary}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
