import { useEffect, useState } from 'react';
import { AnimatedLetters, ProjectItem } from '../../components';
import { ProjectList } from '../../helpers/ProjectList';
import './index.scss';

function Projects() {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const projectTitleText = 'Projects';
  const projectTitleLetters = projectTitleText.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="projects">
      <h1 className="projectTitle">
        <AnimatedLetters letterClass={letterClass} strArray={projectTitleLetters} idx={1} />
      </h1>
      <div className="projectList animate__animated animate__pulse">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              id={index}
              key={index}
              name={project.name}
              image={project.image}
              boxShadow={project.boxShadow}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
