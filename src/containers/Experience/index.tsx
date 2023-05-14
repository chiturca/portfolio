import { useState } from 'react';
import { ExperienceList } from '../../helpers/ExperienceList/index';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Popover } from '@mui/material';
import './index.scss';

function Experience() {
  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState('');

  // eslint-disable-next-line no-undef
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
    setImageSrc(event.currentTarget.src);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover-image' : undefined;

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
              <div>
                <img src={project.img} height="50vw" onClick={handleClick} />{' '}
                {project.img2 && <img src={project.img2} height="50vw" onClick={handleClick} />}{' '}
                {project.img3 && <img src={project.img3} height="50vw" onClick={handleClick} />}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}>
        <img src={imageSrc} style={{ width: '700px', height: '550px' }} />
      </Popover>
    </div>
  );
}

export default Experience;
