import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import ProjectItem from '../../components/ProjectItem';
import { ProjectList } from '../../helpers/ProjectList';
import './index.scss';

function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="projects">
      <h1 className="projectTitle">
        <AnimatedLetters letterClass={letterClass} strArray={projectsArray} idx={1} />
      </h1>
      <div className="projectList animate__animated animate__fadeInBottomRight">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} key={index} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
