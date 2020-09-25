import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'AWS Consultant', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Victor',
  subtitle: 'AWS Consultant',
  cta: 'Hire me!',
};

// ABOUT DATA
export const servicesData = {
  servicesOne:
    'If you are working with AWS, you will notice that there are different ways to do the same, using different services and approaches. I can help you rethink and redesign the architecture of your platform and find the best solutions to your challenge at the best price.',
  servicesTwo:
    'AWS has more than 175 products and services, designing a scalable and cost-effective architecture is a very difficult task, where you need to test and validate some approaches and services. For the last 7 years I have been working on this type of task and I can help you reduce your TTM.',
  servicesThree:
    "AWS can be quite intimidating at first due to the large number of services, if you have any concerns and don't know where you can start using AWS in your company we can do it together, for the last 7 years I have been working with AWS, focused on Design and Architecture Development.",
  servicesFour:
    'When you need to validate an idea in the market, the best option is to create an MVP, an advantage of AWS is that you can use many managed services to make it faster and more efficient. I can help you create this MPV using serverless technologies and managed services.',
};

// ABOUT DATA
export const aboutData = {
  img: 'victor.jpeg',
  paragraphOne:
    "I'm a Certified AWS Professional Architect specialized in designing and implementing complex Big Data & IoT solutions for different type of industries such as banking, pharma and analytics companies. These solutions are developed using the latest technologies in the market, e.g. AWS, Azure, Apache Spark, Docker, Ansible, Terraform.",
  paragraphTwo: 'I am also running some personal projects that you can find here.',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/vgmartinez/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'inflybo.png',
    title: 'Inflybo',
    info: 'All-in-one platform to manage your VIP Lounges',
    info2:
      'A fully customized platform with your brand, where you can manage the entire process in your lounges.',
    tags: '#aws #cognito #amplify #appsync #graphql #react',
    url: 'https://inflybo.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'awsstation.png',
    title: 'AWS Station',
    info: 'A useful AWS App in your hands!',
    info2: 'Create useful Shortcuts with the most common Actions in your main AWS Resources.',
    tags: '#aws #cognito #amplify #appsync #graphql #react-native',
    url: 'https://awsstation.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'holisfy.png',
    title: 'Holisfy (Failed)',
    info: 'A Platform made for Independent Healthcare Professionals',
    info2: 'Holisfy will provide you the knowledge-based tools to help your patients holistically',
    tags: '#aws #cognito  #amplify #appsync #graphql #elasticsearch #react',
    url: 'https://holisfy.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vgmartinez.cu@gmail.com',
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
