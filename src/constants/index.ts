import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  innovura,
  carrent,
  MultipleProject,
  threejs,
  python,
  tensorflow,
  opencv,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Innovura",
    icon: innovura,
    iconBg: "#383E56",
    date: "March 2023 - present",
    points: [
      "Developing and maintaining web application called Community-Portal using React.js, Redux-Toolkit, React-Query, Typescript, Bitbucket, Jira and Attlasian and other related technologies.",
      "My team and I used a React.Js in frontend and Spring-boot in backend.",
      "This application aim to create portal via admin to allow users to share many threads like ideas, opinions and complains or comment and voting on another thread shared by another user.",
      "All admins have a dashboard to fully customize them portals like portal name, colors, theme and much more.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Dania Hamza",
    designation: "CFO",
    company: "Innovura",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Abdulkarim",
    designation: "COO",
    company: "Innovura",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Fadal Sugar",
    designation: "CTO",
    company: "University of Aleppo",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Community-Portal",
    description:
      "This application aim to create portal via admin to allow users to share many threads like ideas, opinions and complains or comment and voting on another thread shared by another user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "React-Query",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Multi Project Custom field",
    description:
      "Multi Project Customfield is a custom Jira field that allows you to reference multiple projects within a Jira issue field. This is useful for multi-project initiatives, where users can easily track all projects related to a specific issue.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Jira cloud developer",
        color: "green-text-gradient",
      },
      {
        name: "Atlassian",
        color: "pink-text-gradient",
      },
      {
        name: "JIRA",
        color: "pink-text-gradient",
      },
      {
        name: "Bitbucket",
        color: "pink-text-gradient",
      },
    ],
    image: MultipleProject,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
