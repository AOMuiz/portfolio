const { nanoid } = require('nanoid');
const { path } = require('path');
const fitAppVideo = '../videos/FitApp.mp4';

const projectDetails = [
  {
    img: 'FitApp/1.png',
    title: 'Fit App',
    info:
      'This is a food-delivery app that had a market Australia, and wanted to expand to the Philippines',
    info2:
      "I was responsible for creating  and deploying the Swift app to have more features and meet Apple's requirements",
    url: '',
    repo: ' ', // if no repo, the button will not show up.
    video: './videos/FitApp.mp4',
    screenshots: [
      {
        src: 'FitApp/1.png',
        label: 'Add lists and customise with a colour',
      },
      {
        src: 'FitApp/2.png',
        label: 'Add lists and customise with a colour',
      },
      {
        src: 'FitApp/3.png',
        label: 'Add lists and customise with a colour',
      },
      {
        src: 'FitApp/4.png',
        label: 'Add lists and customise with a colour',
      },
    ],
  },
  {
    img: 'hlw-base.png',
    title: 'HLW Mobile',
    info:
      'This is a react-native app for a US-based architecture firm for their prospective clients to analyze and learn about structural ratings',
    info2:
      'I was responsible for developing the app, deploying the Android apk and iOS builds (via tesflight) for QA, and also writing extensive tests with jest and detox',
    url: '',
    repo: ' ', // if no repo, the button will not show up
    video: '',
    screenshots: [
      {
        src: 'sterling-shot1.png',
        label: 'Add lists and customise with a colour',
      },
      {
        src: 'sterling-shot2.png',
        label: 'Add lists and customise with a colour',
      },
      {
        src: 'sterling-shot3.png',
        label: 'Add lists and customise with a colour',
      },
      {
        src: 'sterling-shot4.png',
        label: 'Add lists and customise with a colour',
      },
    ],
  },
];

module.exports = projectDetails;
