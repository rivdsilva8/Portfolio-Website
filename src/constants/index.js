import {
  Hotel,
  ytclone,
  Portfolio,
  mobile,
  backend,
  mv,
  tr,
  creator,
  pyth,
  web,
  javascript,
  app,
  ps,
  angular,
  handlebars,
  sql,
  graphql,
  redis,
  cpp,
  c,
  java,
  csharp,
  blender,
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
  meta,
  starbucks,
  tesla,
  shopify,
  pp,
  threejs,
  bootstrap,
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
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "XR Developer",
    icon: backend,
  },
  {
    title: "3D modeler",
    icon: creator,
  },
];
const technologies = {
  frontend: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },

    {
      name: "React JS",
      icon: reactjs,
    },

    // {
    //   name: "Angular",
    //   icon: angular,
    // },

    {
      name: "handlebars",
      icon: handlebars,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "Three.js",
      icon: threejs,
    },
  ],
  backend: [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "Redis",
      icon: redis,
    },
  ],
  languages: [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: pyth,
    },
    {
      name: "C",
      icon: c,
    },

    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },
  ],

  design: [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "Adobe Photoshop",
      icon: ps,
    },
    {
      name: "Adobe Premiere Pro",
      icon: pp,
    },
  ],
};

const experiences = [
  {
    title: "Metaverse Ventures",
    company_name: "3D Graphics Intern",
    icon: mv,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Played a pivotal role in the creative department, developed and seamlessly integrated 2D/3D designs into the website, enhancing the user experience. Managed storyboarding for projects.",
      "Worked with AI software, including Stable Diffusion, DALL·E, and ChatGPT.",
    ],
  },
  {
    title: " Twin Reality Technologies ",
    company_name: "3D Modeler Intern",
    icon: tr,
    iconBg: "#FFFFFF",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Engaged in the development of Live web based VR experiences by utilizing Blender 3D and the Unity Engine, with a focus on creating immersive, interactive environments that captivated users.",
      "Modeling of Web-based VR apartments which were used to show potential renters a particular housing unit. Further website implementations were multiple people in the same room and even a text ability",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Modeling of multiple NFT VR galleries which were sold on OpenSea and gave owners a VR NFT gallery to put up their own work and NFTs ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rivaldo proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rivaldo does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rivaldo optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel Management system",
    description:
      "Part of a team that built a robust website using MongoDB, Express, Firebase and express handlebars to allow guests to book/check into rooms, leave feedback and also comes with a dynamic admin dashboard which allows admins to CRUD rooms, photos, feedbacks and accounts all secured from basic attacks and straightforward to use.",
    tags: [
      {
        name: "handlebars",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: Hotel,
    source_code_link: "https://github.com/rivdsilva8/Hotel_Management_System",
  },
  {
    name: "YouTube Clone",
    description:
      "Created a YouTube clone with the help of React.js and integrating the YouTube API. This enabled users to access a multitude of features, including a robust search functionality that empowered them to discover any YouTube video of their choice, and even employ advanced search parameters for precise results. Furthermore, users were provided with the seamless experience of watching YouTube videos directly on the website. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapis",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ytclone,
    source_code_link: "https://github.com/rivdsilva8/YouTube-Clone",
  },
  {
    name: "Portfolio Website",
    description:
      "A Vibrant personal Portfolio website with React and Three.js, showing all my past work and projects, uses emailjs for sending messages and various models using Three.js ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/rivdsilva8/3D_Printing_Website",
  },
  {
    name: "3D Printing Website",
    description:
      "Developed a dynamic 3D printing website using the MERN stack and three.js. Users can explore and purchase existing 3D prints or upload their STL files for printing. Implemented features include user authentication, product browsing, file uploading, shopping cart, and secure checkout process. Demonstrated proficiency in full-stack development and 3D visualization, delivering a seamless user experience.",
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
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/rivdsilva8/3D_Printing_Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
