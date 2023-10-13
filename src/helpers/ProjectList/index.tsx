import refubook from '../../assets/projects/refubook.png';
import madlibs from '../../assets/projects/madlibs.png';
import hangman from '../../assets/projects/hangman.png';
import portfolio from '../../assets/projects/portfolio.png';
import tappyFish from '../../assets/projects/TappyFish.png';
import Runner from '../../assets/projects/3DRunner.png';
import invaders from '../../assets/projects/InvadersFromSpace.png';

export const ProjectList = [
  {
    name: 'Invaders  From Space',
    image: invaders,
    skills: 'Unity, C#',
    summary: 'Nostalgic 2D game where player kills aliens and get points with thier spaceship',
    github: 'https://github.com/chiturca/InvadersFromSpace',
    website: '',
    boxShadow: '0px 3px 15px rgba(255, 255, 255, 0.77)'
  },
  {
    name: '3D Runner',
    image: Runner,
    skills: 'Unity, C#',
    summary:
      '3D game where player runs against other AI runners and obstacles and get points to reach to success',
    github: 'https://github.com/chiturca/3DRunner',
    website: '',
    boxShadow: '0px 3px 15px rgba(255, 255, 255, 0.77)'
  },
  {
    name: 'Tappy Fish- 2D',
    image: tappyFish,
    skills: 'Unity, C#',
    summary: '2D game where player get point via overcoming obstacles',
    github: 'https://github.com/chiturca/TappyFish',
    website: '',
    boxShadow: '0px 3px 15px rgba(255, 255, 255, 0.77)'
  },
  {
    name: 'Pure JS Mock',
    image: `https://i.ibb.co/28r5m5G/Ekran-g-r-nt-s-2023-10-13-133212.png`,
    skills: 'Vanilla JS, HTML, CSS',
    summary: `This project was created in response to a frontend recruitment challenge which needs to be completed in 24 hours. Although I didn't secure the position, I'd like to showcase the work I completed during the challenge.`,
    github: 'https://github.com/chiturca/helpjuice-mock',
    website: ''
  },
  {
    name: 'Shopify Mock',
    image: `https://i.ibb.co/61ymkmP/shopify-mock.png`,
    skills: 'React.js, Shopify Polaris, Vite',
    summary: `This project was created in response to a recruitment test given to me by a company for a limited time. It showcases my work as a frontend developer and my ability to create robust web applications using Shopify's Polaris Design Kit and React`,
    github: 'https://github.com/chiturca/shopify',
    website: 'https://shopify-chiturca.vercel.app'
  },
  {
    name: 'Miray Sönmez - Portfolio',
    image: portfolio,
    skills: 'React.js, Typescript, SCSS',
    summary:
      'A personal portfolio website showcasing my front-end development and game development projects.',
    github: 'https://github.com/chiturca/portfolio',
    website: 'https://miraysonmez.vercel.app/'
  },
  {
    name: 'The Incredibles - Refubook',
    image: refubook,
    skills: 'React.js, Redux, Firebase, TailwindCSS',
    summary:
      'A platform where every refugee can interact with and create content (created with a team)',
    github: 'https://github.com/Recoded-Spark-Turkey-2022/The-Incredibles',
    website: 'https://the-incredibles-refubook.netlify.app/'
  },
  {
    name: 'Thunderbird - Hangman',
    image: hangman,
    skills: 'JavaScript, CSS, HTML',
    summary: 'A single page platform demonstrates famous hangman game (created with a team)',
    github: 'https://github.com/Recoded-Spark-Turkey-2022/hangman-thunderbird',
    website: 'https://hangman-thunderbird.vercel.app/'
  },
  {
    name: 'Runtime Terror - MadLibs',
    image: madlibs,
    skills: 'JavaScript, CSS, HTML',
    summary: 'A single page web game platform based on filling the blanks (created with a team)',
    github: 'https://github.com/Recoded-Spark-Turkey-2022/mad-libs-runtime-terror',
    website: 'https://spookymadlibs.netlify.app/'
  }
];
