import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Cloud Architect', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Victor M',
  subtitle: 'AWS Consultant',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I'm a Certified AWS Professional Architect specialized in designing and implementing complex Big Data & IoT solutions for different type of industries such as banking, pharma and analytics companies. These solutions are developed using the latest technologies in the market, e.g. AWS, Azure, Apache Spark, Docker, Ansible, Terraform.",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/vgmartinez/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'holisfy.png',
    title: 'Holisfy',
    info: 'A Platform made for Independent Healthcare Professionals',
    info2: 'Holisfy will provide you the knowledge-based tools to help your patients holistically',
    tags: '#aws #cognito  #amplify #appsync #graphql #elasticsearch #react',
    url: 'https://holisfy.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'inflybo.png',
    title: 'Inflybo',
    info: 'A Platform made for VIP lounges management',
    info2: '',
    tags: '#aws #cognito #amplify #appsync #graphql #react',
    url: 'https://inflybo.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'eaashub@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/_vgmartinez',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vgmartinez/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/vgmartinez',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
