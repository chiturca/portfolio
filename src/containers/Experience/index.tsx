import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import './index.scss';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - February 2023"
          iconStyle={{ background: '#F6DBFF', color: '#9A73CC' }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Re:Coded Bootcamp</h3>
          <h4 className="vertical-timeline-element-subtitle">Web Development</h4>
          <p>Frontend Web Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2019 - September 2020"
          iconStyle={{ background: '#9A73CC', color: '#fff' }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Turkcell Global Bilgi</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Customer Support Representative - Full Time
          </h4>
          <p>
            Handling customer feedbacks about their trip procedure from the time they reserved their
            tickets to the end of their travel process with Turkish Airlines.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2018 - March 2019"
          iconStyle={{ background: '#9A73CC', color: '#fff' }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Turkcell Global Bilgi - Full Time</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Inbound Customer Service Representative
          </h4>
          <p>Handling inbound calls on behalf of Turkish Airlines</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2018 - July 2018"
          iconStyle={{ background: '#9A73CC', color: '#fff' }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Tea Co. - Full Time</h3>
          <h4 className="vertical-timeline-element-subtitle">Barista</h4>
          <p>Presenting international tea brands</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2015 - June 2016"
          iconStyle={{ background: '#9A73CC', color: '#fff' }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">RS Plan-Project - Seasonal</h3>
          <h4 className="vertical-timeline-element-subtitle">Project Manager</h4>
          <p>Erasmus+ Project Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2014 - Present"
          iconStyle={{ background: '#fff', color: '#9A73CC' }}
          icon={<VolunteerActivismOutlinedIcon />}>
          <h3 className="vertical-timeline-element-title">
            Ankara Youth Philharmonic Orchestra/Polyphonic Choir - AGFO
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vice Coordinator- Polyphonic choir member- Volunteer
          </h4>
          <p>
            Definition of volunteering:
            <br />
            We determine little village primary schools in need around Turkey. According to their
            requirement list -these may include clothes, books for library, stationery material or
            instruments for music classes- we contact with people who can help their needs. After
            sufficient amount of items collected, we send them or directly go to the school and give
            them the suplies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2013 - March 2014"
          iconStyle={{ background: '#F6DBFF', color: '#9A73CC' }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            Nicolaus Copernicus University-Poland Torun
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Erasmus exchange student</h4>
          <p>Political Sciences</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2010 - June 2016"
          iconStyle={{ background: '#F6DBFF', color: '#9A73CC' }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Ankara University</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor of Arts -Sociology</h4>
          <p>
            Undergraduation thesis: <br />
            Crime Sociology on Çinçin and Yenidoğan neighbourhood : Alteration on crime due to urban
            renewal
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
