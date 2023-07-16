// const { nanoid } = require('nanoid');
// const { path } = require('path');

const projectDetails = [
  {
    img: 'ataasil/so.png',
    title: 'Ataasil',
    info:
      "Attaasil University is an online based university that set out the goal of benefitting mankind with the knowledge of the Qur'an and Sunnah In Shaa Allah.",
    info2:
      'I was responsible for for developing internationalization(i18n) functionality for changing from arabic to other languages, implemented api integration and state management using apollo & graphql, maintaining the front-end documentation while ensuring consistency and efficiency.',
    url: 'https://ataasil.vercel.app',
    repo: 'AOMuiz/ataasil', // if no repo, the button will not show up.
    video: '',
    screenshots: [
      {
        src: 'ataasil/1.png',
        label: 'Home Screen',
      },
      {
        src: 'ataasil/2.png',
        label: 'Auth Screen',
      },
      {
        src: 'ataasil/4.png',
        label: 'Course Screen',
      },
      {
        src: 'ataasil/3.png',
        label: 'Responsive screens',
      },
    ],
  },
  {
    img: 'innovatics/1.png',
    title: 'Innovatics',
    info:
      'This is a Hands-on, interact technical Learning Platform for data scientist, and other technical fields.',
    info2:
      'I was responsible for for developing the whole website while working closely with the design team. Implemented firebase authenticatioin state management using react context, creating reusable components with styled components, e.t.c.',
    url: 'https://innovatics.ai',
    repo: '', // if no repo, the button will not show up.
    video: '',
    screenshots: [
      {
        src: 'innovatics/1.png',
        label: 'Home Screen',
      },
      {
        src: 'innovatics/2.png',
        label: 'Authentication Screen',
      },
      {
        src: 'innovatics/3.png',
        label: 'Course Detail',
      },
    ],
  },
  {
    img: 'nLog/1.png',
    title: 'nLog(SalafiBlog)',
    info:
      'This is a blog website built on the JAMSTACK architecture using Nextjs for the frontend and netlify CMS for content management.',
    info2:
      'I was responsible for developi`ng the app, integrating a Headless CMS and also writing a pixel perfect CSS based on the provided figma design',
    url: 'salafiblog.netlify.app',
    repo: 'aomuiz/nLog', // if no repo, the button will not show up
    video: '',
    screenshots: [
      {
        src: 'nLog/4.png',
        label: 'Tablet Home',
      },
      {
        src: 'nLog/5.png',
        label: 'Post Detail',
      },
      {
        src: 'nLog/2.png',
        label: 'Home Screen',
      },
      {
        src: 'nLog/3.png',
        label: 'Blog Detail Desktop',
      },
      {
        src: 'nLog/6.png',
        label: 'Blog Home Desktop',
      },
    ],
  },
  {
    img: 'swotd/1.jpg',
    title: 'swotd',
    info:
      'This is a react-native word guessing app for daily word based on scientific vocalbulary.',
    info2:
      'I was responsible for developing the app, integrating local storage and a streak system',
    url: '',
    repo: 'aomuiz/rn-swotd', // if no repo, the button will not show up
    video: 'swotd-preview.mp4',
    screenshots: [
      {
        src: 'swotd/1.jpg',
        label: 'Onboarding',
      },
      {
        src: 'swotd/2.jpg',
        label: 'Home Screen',
      },
      {
        src: 'swotd/3.jpg',
        label: 'Result Streak System',
      },
      {
        src: 'swotd/4.jpg',
        label: 'Result Share',
      },
    ],
  },
  {
    img: 'rate-repository/1.png',
    title: `Rate Repository`,
    info:
      'This is a react-native application for rating GitHub repositories, the app include features such as, sorting and filtering reviewed repositories',
    info2:
      'I was responsible for developing the app, implemented user authentications using react-native, yup and Formik, setup API request using Graphql for iOS and Android, setup state management(Apollo and React Context).',
    url: '',
    repo: '', // if no repo, the button will not show up
    video: '', // if no repo, the img will show up
    screenshots: [
      {
        src: 'rate-repository/1.png',
        label: 'Home Screen',
      },
      {
        src: 'rate-repository/4.png',
        label: 'Login Screen',
      },
      {
        src: 'rate-repository/3.jpg',
        label: 'Repo Reviews Screen',
      },
      {
        src: 'rate-repository/2.jpg',
        label: 'Repo Reviews Screen',
      },
    ],
  },
  
];

module.exports = projectDetails;
