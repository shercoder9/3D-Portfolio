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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  Evold,
  freelanceIcon,
  cimaLogo,
  restaurant,
  nikeshop,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "animation",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "Next JS",
    icon: nextJs,
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
    name: "Angular",
    icon: angular,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Evold",
    company_website: "https://evold.com", // Replace with the actual website URL
    icon: Evold, // Replace with the actual logo variable
    iconBg: "#E6DEDD",
    date: "06-2022 - 06-2023", // Replace with the actual dates
    points: [
      "Collaborate with both startups and established businesses to develop innovative digital products.",
      "Act as long-term partners, helping clients gain traction, grow revenue, and reduce costs through tailored solutions.",
      "Advise on the efficient planning, development, and launching of new software products.",
      "Assist in tracking, collecting, and transforming analytical data into actionable business insights.",
      "Translate business goals into clear and actionable product requirements.",
      "Deliver branding solutions that customers love and remember.",
      "Design user experiences (UX) that are intuitive and enjoyable, along with beautiful and compelling user interfaces (UI).",
      "Develop scalable and responsive applications for multiple platforms, including Web, iOS, and Android.",
      "Utilize cutting-edge technologies to ensure optimal performance and future-proof solutions.",
      "Scale applications effortlessly to accommodate growth and evolving business needs.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Self-Employed",
    company_website: "", // Leave empty or add a personal portfolio/website link
    icon: freelanceIcon, // Replace with an actual logo/icon variable if available
    iconBg: "#E6DEDD",
    date: "06-2023 - 06-2024", // Replace with actual dates or "Ongoing"
    location: "Remote",
    employment_type: "Freelancing",
    points: [
      "Developing and delivering custom software solutions tailored to client requirements.",
      "Collaborating with clients to define project goals, scope, and timelines effectively.",
      "Building scalable and maintainable web and mobile applications using modern frameworks and technologies.",
      "Ensuring project delivery within deadlines while maintaining high-quality standards.",
      "Managing all aspects of freelancing, including client communication, project planning, and technical execution.",
    ],
    
  },
  {
    title: "Technicien Informatique",
    company_name: "CIMA+",
    company_website: "https://www.cima.ca/",
    icon: cimaLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    location: "Sherbrooke, Québec, Canada",
    employment_type: "Internship",
    points: [
      "Providing technical support and troubleshooting to ensure smooth IT operations.",
      "Collaborating with team members to resolve hardware and software issues effectively.",
      "Assisting in the maintenance and optimization of IT systems and networks.",
      "Gaining hands-on experience with IT infrastructure in an on-site environment.",
    ],
  },
];

const projects = [
  {
    name: "Restaurant Website",
    description: 
      "Interactive restaurant website with online menu browsing, table reservations, and location details. Features a modern design that showcases the restaurant's atmosphere, special offers, and customer reviews.",
    tags: [
      {
        name: "html",
        color: "text-orange-500", // HTML's color
      },
      {
        name: "css",
        color: "text-blue-500",  // CSS's color
      },
      {
        name: "javascript",
        color: "text-yellow-500" // JavaScript's color
      },
    ],
    image: restaurant,
    hosted_link: "https://shercoder9.github.io/restaurant/",
  },
  {
    name: "NikeShop E-commerce",
    description: 
      "E-commerce platform featuring product catalog, shopping cart functionality, and secure checkout process. Built with React for smooth user experience and real-time inventory updates.",
    tags: [
      {
        name: "react",
        color: "text-cyan-400",  // React's color
      },
      {
        name: "tailwind",
        color: "text-sky-500",   // Tailwind's color
      },
      {
        name: "javascript",
        color: "text-yellow-500" // JavaScript's color
      },
    ],
    image: nikeshop,
    hosted_link: "https://shercoder9.github.io/nikeshop/",
  },
  
  
];

const personalInfo = {
  name: "Anwar",
  fullName: "Shridhar Rai",
  email: "shercode9@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with extensive experience in TypeScript and 
  JavaScript, specializing in frameworks such as React.js, React Native, and Node.js. 
  I’m a quick learner who thrives on close collaboration with clients to develop efficient, scalable,
  and user-friendly solutions that address real-world challenges. Let’s work together to turn your ideas into reality!`,
  projectsIntro: `The following projects highlight my skills and experience through real-world examples of my work. 
  Each project is briefly described and includes live demos, 
  showcasing my ability to solve complex problems, work with diverse technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/anwar-oukrid-b91ab3286/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shercoder9",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
