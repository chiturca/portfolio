import { ExperienceList } from '../../helpers/ExperienceList/index';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#fff">
        {ExperienceList.map((project, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className={project.className}
              date={project.date}
              dateClassName={project.dateClassName}
              iconStyle={{ background: project.background, color: project.color }}
              icon={project.icon}>
              <h3 className="vertical-timeline-element-title">{project.h3}</h3>
              <h4 className="vertical-timeline-element-subtitle">{project.h4}</h4>
              <p>{project.p}</p>
              <img src={project.img} height="50vw" /> <img src={project.img2} height="50vw" />{' '}
              <img src={project.img3} height="50vw" />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
