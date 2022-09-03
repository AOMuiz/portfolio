// const { nanoid } = require('nanoid');
// const { path } = require('path');

const projectDetails = [
  {
    img: 'nLog/1.png',
    title: 'nLog(SalafiBlog)',
    info:
      'This is a blog website built on the JAMSTACK architecture using Nextjs for the frontend and netlify CMS for content management.',
    info2:
      'I was responsible for developing the app, integrating a Headless CMS and also writing a pixel perfect CSS based on the provided figma design',
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
  {
    img: 'GeoMart/1.png',
    title: 'GeoMart',
    info:
      'This is a Fullstack ecommerce web app that is built for business, to help user track his orders and make payment on products.',
    info2:
      'I was responsible for for developing the whole app, implemented stripe payment and state management using react context, creating reusable components.',
    url: '',
    repo: '', // if no repo, the button will not show up.
    video: '',
    screenshots: [
      {
        src: 'GeoMart/1.png',
        label: 'Home Screen',
      },
      {
        src: 'GeoMart/2.png',
        label: 'Product Details Screen',
      },
      {
        src: 'GeoMart/5.png',
        label: 'Choose Menu',
      },
    ],
  },
];

module.exports = projectDetails;
