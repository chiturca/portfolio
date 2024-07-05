import { useEffect, useState } from "react";
import { AnimatedLetters, ProjectItem } from "../../components";
import { FrontList, UnityList, TestList } from "../../helpers/ProjectList";
import "./index.scss";

function Projects() {
  const [letterClass, setLetterClass] = useState<string>("text-animate");
  const projectTitleText = "Projects";
  const projectTitleLetters = projectTitleText.split("");
  const frontTitle = "FRONT-END";
  const frontLetters = frontTitle.split("");
  const unityTitle = "UNITY";
  const unityLetters = unityTitle.split("");
  const testTitle = "TEST CASES";
  const testLetters = testTitle.split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="projects">
      <h1 className="projectTitle">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={projectTitleLetters}
          idx={1}
        />
      </h1>
      <h2>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={testLetters}
          idx={1}
        />
      </h2>
      <div className="projectList animate__animated animate__pulse">
        {TestList.map((project) => {
          return (
            <ProjectItem
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              boxShadow={project.boxShadow}
              skills={project.skills}
            />
          );
        })}
      </div>
      <h2>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={frontLetters}
          idx={1}
        />
      </h2>
      <div className="projectList animate__animated animate__pulse">
        {FrontList.map((project) => {
          return (
            <ProjectItem
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              boxShadow={project.boxShadow}
              skills={project.skills}
            />
          );
        })}
      </div>
      <h2>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={unityLetters}
          idx={1}
        />
      </h2>
      <div className="projectList animate__animated animate__pulse">
        {UnityList.map((project) => {
          return (
            <ProjectItem
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              boxShadow={project.boxShadow}
              skills={project.skills}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
