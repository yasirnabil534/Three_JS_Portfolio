import {
  backend,
  carrent,
  creator,
  css,
  enosis,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  rebel_force,
  tailwind,
  threejs,
  tripguide,
  typescript,
  vivasoft,
  web,
  wowgpt,
  employees,
  bustrack,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Senior Software Engineer (Backend)",
    company_name: "Rebel Force Tech Solutions",
    project: "InovaBot - An online generative AI-based assistant service",
    icon: rebel_force,
    iconBg: "#011161",
    date: "April 2024 - Present",
    points: [
      "Developing a generative AI-based assistant service.",
      "OpenAI APIs are used in this system.",
      "Implemented fully customized role-based access system.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Led the backend team to fullfill a nice organized backend system.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Rebel Force Tech Solutions",
    project: "Sonbola - An online retailer marketplace",
    icon: rebel_force,
    iconBg: "#011161",
    date: "January 2024 - April 2024",
    points: [
      "Led the development of an online marketplace set to launch in Lebanon and Iraq, with anticipated expansion into Saudi Arabia and the UAE, reaching over 100,000 users in the initial phase.",
      "Engineered and upheld a robust database architecture, resulting in a 20% improvement in application performance.",
      "Designed efficient and secure software solutions for an international corporate client, resulting in a 30% increase in operational efficiency and client satisfaction.",
      "Implemented functionality in backend to extract data from Excel and CSV file that increases productivity 40% more than before.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Vivasoft Ltd.",
    icon: vivasoft,
    iconBg: "#E6DEDD",
    project: "Bkash - Marchant Portal",
    date: "March 2023 - December 2023",
    points: [
      "This system was a Mobile-based Financial Service (MFS), which is known by 98% people in Bangladesh and used by 70 million.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Constructed a Component-Based Website Frontend of the MFS system for this Fintech company that is serving more than 40,000 users.",
      "Programmed a user interface with Vue.js, integrated Quasar components, and customized Bootstrap styles, leading to a 30% reduction in bounce rate and a 20% increase in user retention.",
      "Ensured user interfaces to be user-friendly experience to increase the usage of the system 20% more"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Enosis Solutions Ltd",
    icon: enosis,
    iconBg: "#E6DEDD",
    project: "IQ3Connect - A VR Based 3D Workspace",
    date: "December 2021 - February 2023",
    points: [
      "Developed a single-page application (SPA) using Vue, Vuetify, Bootstrap, Node, and MongoDB to implement REST API having more than 30,000 users.",
      "Debugged software applications to identify and fix critical errors using Vue, Express, ThreeJs in my early career.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wow-GPT",
    description:
      "Web-based platform that allows users to make customized ai assistant using proper instructions. OpenAI APIs are used to create and maintain bots.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "openai",
        color: "purple-text-gradient",
      },
    ],
    image: wowgpt,
    source_code_link: "https://github.com/yasirnabil534/WowGPT",
  },
  {
    name: "Employee Management System",
    description:
      "Web application that enables company admin to maintain their employee information, leave, notice, HR management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "materialui",
        color: "purple-text-gradient",
      },
    ],
    image: employees,
    source_code_link: "https://github.com/yasirnabil534/Employee-Management-System",
  },
  {
    name: "CoU Bus Tracking System",
    description:
      "A vehicle tracking system using an android device instead of gps tracker to follow. Driver's android can be used as tracking device using an app and student will track driver's device with another app.",
    tags: [
      {
        name: "xml",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "googlemapapi",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "white-text-gradient",
      },
      {
        name: "java",
        color: "purple-text-gradient",
      },
    ],
    image: bustrack,
    source_code_link: "https://github.com/yasirnabil534/Vehicle-Tracking-System",
  },
];

export { experiences, projects, services, technologies, testimonials };

