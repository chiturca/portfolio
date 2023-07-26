import refubook from '../../assets/projects/refubook.png';
import madlibs from '../../assets/projects/madlibs.png';
import hangman from '../../assets/projects/hangman.png';
import portfolio from '../../assets/projects/portfolio.png';
import vRefubook from '../../assets/projects/refubook.mp4';
import vMadlibs from '../../assets/projects/madlibs.mp4';
import vHangman from '../../assets/projects/hangman.mp4';
import vPortfolio from '../../assets/projects/portfolio.mp4';
import tappyFish from '../../assets/projects/TappyFish.png';
import vTappyFish from '../../assets/projects/TappyFish.mp4';
import Runner from '../../assets/projects/3DRunner.png';
import v3DRunner from '../../assets/projects/3DRunner.mp4';
import invaders from '../../assets/projects/InvadersFromSpace.png';
import vInvaders from '../../assets/projects/InvadersFromSpace.mp4';

export const ProjectList = [
  {
    name: 'Invaders  From Space',
    image: invaders,
    video: vInvaders,
    skills: 'Unity, C#',
    summary: 'Nostalgic 2D game where player kills aliens and get points with thier spaceship',
    github: 'https://github.com/chiturca/InvadersFromSpace',
    website: '',
    boxShadow: '0px 3px 15px rgba(255, 255, 255, 0.77)'
  },
  {
    name: '3D Runner',
    image: Runner,
    video: v3DRunner,
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
    video: vTappyFish,
    skills: 'Unity, C#',
    summary: '2D game where player get point via overcoming obstacles',
    github: 'https://github.com/chiturca/TappyFish',
    website: '',
    boxShadow: '0px 3px 15px rgba(255, 255, 255, 0.77)'
  },
  {
    name: 'The Incredibles - Refubook',
    image: refubook,
    video: vRefubook,
    skills: 'React.js, Redux, Firebase, TailwindCSS',
    summary:
      'A platform where every refugee can interact with and create content (created with a team)',
    github: 'https://github.com/Recoded-Spark-Turkey-2022/The-Incredibles',
    website: 'https://the-incredibles-refubook.netlify.app/'
    // boxShadow: '0px 3px 15px rgba(255, 254, 254, 0.495)'
  },
  {
    name: 'Miray Sönmez - Portfolio',
    image: portfolio,
    video: vPortfolio,
    skills: 'React, Typescript, SCSS',
    summary: 'Portfolio website',
    github: 'https://github.com/chiturca/portfolio',
    website: 'https://miraysonmez.vercel.app/'
  },
  {
    name: 'Thunderbird - Hangman',
    image: hangman,
    video: vHangman,
    skills: 'JavaScript, CSS, HTML',
    summary: 'A single page platform demonstrates famous hangman game (created with a team)',
    github: 'https://github.com/Recoded-Spark-Turkey-2022/hangman-thunderbird',
    website: 'https://hangman-thunderbird.vercel.app/'
  },
  {
    name: 'Runtime Terror - MadLibs',
    image: madlibs,
    video: vMadlibs,
    skills: 'JavaScript, CSS, HTML',
    summary: 'A single page web game platform based on filling the blanks (created with a team)',
    github: 'https://github.com/Recoded-Spark-Turkey-2022/mad-libs-runtime-terror',
    website: 'https://spookymadlibs.netlify.app/'
  }
];
