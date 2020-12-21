const { nanoid } = require('nanoid');

const projectDetails = [
  {
    img: 'lets-eat-base.png',
    title: "Let's Eat(Philippines)",
    info:
      'This is a food-delivery app that had a market Australia, and wanted to expand to the Philippines',
    info2:
      "I was responsible for modifying and deploying the Swift app to have more features and meet Apple's requirements",
    url: '',
    repo: ' ', // if no repo, the button will not show up.
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
  {
    img: 'hlw-base.png',
    title: 'HLW Mobile',
    info:
      'This is a react-native app for a US-based architecture firm for their prospective clients to analyze and learn about structural ratings',
    info2:
      'I was responsible for developing the app, deploying the Android apk and iOS builds (via tesflight) for QA, and also writing extensive tests with jest and detox',
    url: '',
    repo: ' ', // if no repo, the button will not show up
    screenshots: [
      {
        src: 'sterling-shot1.png',
      },
      {
        src: 'sterling-shot2.png',
      },
      {
        src: 'sterling-shot3.png',
      },
      {
        src: 'sterling-shot4.png',
      },
    ],
  },
  {
    img: 'sterling-base.png',
    title: 'Sterling OnePay',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
    screenshots: [
      {
        src: 'sterling-shot1.png',
      },
      {
        src: 'sterling-shot2.png',
      },
      {
        src: 'sterling-shot3.png',
      },
      {
        src: 'sterling-shot4.png',
      },
    ],
  },
  {
    img: 'clane-app-base2.png',
    title: 'Clane app',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
    screenshots: [
      {
        src: 'sterling-shot1.png',
      },
      {
        src: 'sterling-shot2.png',
      },
      {
        src: 'sterling-shot3.png',
      },
      {
        src: 'sterling-shot4.png',
      },
    ],
  },
];

module.exports = projectDetails;
