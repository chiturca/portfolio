import { useParams } from "react-router-dom";
import { FrontList, UnityList, TestList } from "../../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import HttpIcon from "@mui/icons-material/Http";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./index.scss";

function ProjectDisplay() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project =
    TestList.find((p) => p.id === projectId) ||
    FrontList.find((p) => p.id === projectId) ||
    UnityList.find((p) => p.id === projectId);

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="holder">
        <div
          style={{ backgroundImage: `url(${project.image})` }}
          className="bgImage"
          loading="lazy"
        >
          <div className="link">
            {project.github !== "" && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
                <span>GITHUB</span>
              </a>
            )}
            {project.website !== "" && (
              <a href={project.website} target="_blank" rel="noreferrer">
                <HttpIcon />
                <span>WEBSITE</span>
              </a>
            )}
            {project.report !== "" && (
              <a href={project.report} target="_blank" rel="noreferrer">
                <AssessmentIcon />
                <span>TEST REPORTS</span>
              </a>
            )}
          </div>
        </div>
        <div className="details">
          <p>
            <b>Skills:</b> {project.skills}{" "}
          </p>
          <p>
            <b>Summary:</b> {project.summary}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
