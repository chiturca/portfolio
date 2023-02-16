import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../../helpers/ProjectList';
import './index.scss';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}{' '}
      </p>
      <p>
        <b>Summary:</b> {project.summary}{' '}
      </p>
      <p>
        <button>
          <a href={project.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </button>{' '}
        <button>
          <a href={project.website} target="_blank" rel="noreferrer">
            Website
          </a>
        </button>{' '}
      </p>
    </div>
  );
}

export default ProjectDisplay;
