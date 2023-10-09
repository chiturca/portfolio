import recoded from '../../assets/certificates/ReCodedFEW_2022-2023.png';
import gamedev from '../../assets/certificates/GNJSGameDev_Apr2022.png';
import reactberlin from '../../assets/certificates/GNReactDayBerlin_Dec2022.png';
import graphql from '../../assets/certificates/GNGraphQLGalaxy_Dec2022.png';
import global from '../../assets/certificates/TGCustomerServices_2018-2019.png';
import olympos from '../../assets/certificates/AGFOParticipation_2015.png';
import sociology from '../../assets/certificates/AUSociology_2010-2016.png';
import eng from '../../assets/certificates/AUEnglish_2010-2011.png';
import ÇAHEM from '../../assets/certificates/ÇAHEMComputer_2016.png';
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SchoolIcon from '@mui/icons-material/School';
import DIG from '../../assets/logos/DİG.jpg';
import AU from '../../assets/logos/AÜ.png';
import UMK from '../../assets/logos/UMK.png';
import AGFO from '../../assets/logos/AGFO.jpg';
import RS from '../../assets/logos/RS.jpg';
import TEACO from '../../assets/logos/TEACO.jpg';
import TGB from '../../assets/logos/TGB.jpg';
import GN from '../../assets/logos/GN.png';
import RC from '../../assets/logos/RC.png';
import RA from '../../assets/logos/RA.jpg';
import P from '../../assets/logos/P.png';
import Ç from '../../assets/logos/Ç.jpg';

export const ExperienceList = [
  {
    className: 'vertical-timeline-element--education',
    date: 'May 2023 - July 2023',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Panteon Academy',
    h4: 'Game Development',
    p: 'Unity, C#',
    logo: P,
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
    logo: RA,
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
    logo: RC,
    img: recoded
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
    logo: GN,
    img: gamedev,
    img2: reactberlin,
    img3: graphql
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
    logo: TGB,
    img: ''
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'September 2018 - March 2019',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'Turkcell Global Bilgi',
    h4: 'Inbound Customer Service Representative - Full Time',
    p: 'Handling inbound calls on behalf of Turkish Airlines',
    logo: TGB,
    img: global
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'April 2018 - July 2018',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'Tea Co.',
    h4: 'Barista - Full Time',
    p: 'Presenting international tea brands',
    logo: TEACO,
    img: ''
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'Sep 2016 - Nov 2016',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'ÇAHEM',
    h4: 'Computer Operating',
    p: 'Computer basics, HTML, CSS, Microsoft Office Programmes',
    logo: Ç,
    img: ÇAHEM
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'April 2015 - June 2016',
    dateClassName: 'date',
    background: '#9A73CC',
    color: '#fff',
    icon: <WorkIcon />,
    h3: 'RS Plan-Project',
    h4: 'Project Manager - Seasonal',
    p: 'Erasmus+ Project Management',
    logo: RS,
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
    logo: AGFO,
    img: olympos
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'September 2013 - March 2014',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Nicolaus Copernicus University',
    h4: 'Erasmus exchange student - Poland Torun',
    p: 'Political Sciences',
    logo: UMK,
    img: ''
  },
  {
    className: 'vertical-timeline-element--education',
    date: 'September 2010 - June 2016',
    dateClassName: 'date',
    background: '#F6DBFF',
    color: '#9A73CC',
    icon: <SchoolIcon />,
    h3: 'Ankara University',
    h4: 'Bachelor of Arts - Sociology',
    p: 'Undergraduation thesis: Crime Sociology on Çinçin and Yenidoğan neighbourhood : Alteration on crime due to urban renewal',
    logo: AU,
    img: sociology,
    img2: eng
  },
  {
    className: 'vertical-timeline-element--work',
    date: 'September 2006 - June 2010',
    dateClassName: 'date',
    background: '#fff',
    color: '#9A73CC',
    icon: <VolunteerActivismOutlinedIcon />,
    h3: 'Doğanay Scout Group',
    h4: 'Venturer Scout',
    p: 'Scout under oath. Have training about teamwork, camping/survival in nature, Morse Alphabet and radio communication. Been attended JOTA-JOTI, came together with other scout groups for big events.',
    logo: DIG,
    img: ''
  }
];
