// import recoded from '../../assets/certificates/ReCodedFEW_2022-2023.png';
// import gamedev from '../../assets/certificates/GNJSGameDev_Apr2022.png';
// import reactberlin from '../../assets/certificates/GNReactDayBerlin_Dec2022.png';
// import graphql from '../../assets/certificates/GNGraphQLGalaxy_Dec2022.png';
// import global from '../../assets/certificates/TGCustomerServices_2018-2019.png';
// import olympos from '../../assets/certificates/AGFOParticipation_2015.png';
// import sociology from '../../assets/certificates/AUSociology_2010-2016.png';
// import eng from '../../assets/certificates/AUEnglish_2010-2011.png';
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SchoolIcon from '@mui/icons-material/School';

export const ExperienceList = [
  {
    className: 'vertical-timeline-element--education',
    date: 'May 2023 - Present',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Panteon Academy',
    h4: 'Game Development',
    p: 'Unity, C#',
    img: ''
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'March 2023 - April 2023',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'Royal Apps',
    h4: 'Frontend Web Developer - Full Time',
    p: 'Creating embedded apps for B2B Shopify systems.',
    img: ''
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'September 2022 - February 2023',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Re:Coded Bootcamp',
    h4: 'Web Development',
    p: 'Frontend Web Developer',
    img: '<img src={recoded} height="50vw" />'
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'April 2022 - Present',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'GitNation Summits',
    h4: 'Web Development',
    p: 'Attending to summits for latest web development news. Recommended for anyone who wants to learn more',
    img: '<img src={gamedev} height="50vw" /><img src={reactberlin} height="50vw" /><img src={graphql} height="50vw" />'
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'March 2019 - September 2020',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'Turkcell Global Bilgi',
    h4: 'Customer Support Representative - Full Time',
    p: 'Handling customer feedbacks about their trip procedure from the time they reserved their tickets to the end of their travel process with Turkish Airlines.',
    img: ''
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'September 2018 - March 2019',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'Turkcell Global Bilgi - Full Time',
    h4: 'Inbound Customer Service Representative',
    p: 'Handling inbound calls on behalf of Turkish Airlines',
    img: '<img src={global} height="50vw" />'
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'April 2018 - July 2018',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'Tea Co. - Full Time',
    h4: 'Barista',
    p: 'Presenting international tea brands',
    img: ''
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'April 2015 - June 2016',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'RS Plan-Project - Seasonal',
    h4: 'Project Manager',
    p: 'Erasmus+ Project Management',
    img: ''
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'March 2014 - Present',
    dateClassName: 'date',
    background: '#fff',
    color: '#9A73CC',
    icon: <VolunteerActivismOutlinedIcon />,
    h3: 'Ankara Youth Philharmonic Orchestra/Polyphonic Choir - AGFO',
    h4: 'Vice Coordinator- Polyphonic choir member- Volunteer',
    p: 'Definition of volunteering: We determine little village primary schools in need around Turkey. According to their requirement list -these may include clothes, books for library, stationery material or instruments for music classes- we contact with people who can help their needs. After sufficient amount of items collected, we send them or directly go to the school and give them the suplies',
    img: '<img src={olympos} height="50vw" />'
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'September 2013 - March 2014',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Nicolaus Copernicus University-Poland Torun',
    h4: 'Erasmus exchange student',
    p: 'Political Sciences',
    img: '<img src={recoded} height="50vw" />'
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'September 2010 - June 2016',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Ankara University',
    h4: 'Bachelor of Arts -Sociology',
    p: 'Undergraduation thesis: Crime Sociology on Çinçin and Yenidoğan neighbourhood : Alteration on crime due to urban renewal',
    img: '<img src={sociology} height="50vw" /><img src={eng} height="50vw" />'
  }
];
