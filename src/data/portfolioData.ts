export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  duration: string;
  description?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profileImage: string;
  cvUrl: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  about: {
    story: string[];
    stats: { label: string; value: string }[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  name: "Sayed Herzallah",
  title: "Full Stack Developer (Backend Focused)",
  tagline: "Turning complex requirements into clean, production-ready web systems.",
  bio: "Full Stack Developer specializing in Backend development, with hands-on experience building and deploying real-world web applications across the MERN stack and relational databases (MySQL, Sequelize). Selected as one of 5,000 developers for Google's Build with AI: Masr Edition program.",
  profileImage: "/profile.png",
  cvUrl: "https://drive.google.com/file/d/1GNINzfLv5QjX0bsm-FHEwErgRvLBRo3U/view?usp=drive_link",
  email: "herzallahdeveloper@gmail.com",
  phone: "+20 155 858 5258",
  location: "Cairo, Egypt (Open to Remote / Gulf Market)",
  github: "https://github.com/Sayed-Herzallah",
  linkedin: "https://www.linkedin.com/in/sayed-herzallah",
  
  about: {
    story: [
      "I am a Full Stack Developer specializing in Backend architecture, with hands-on experience building and deploying real-world web applications across the MERN stack and relational databases (MySQL, Sequelize).",
      "My technical foundation was built through formal training at NTI, Creativa Innovation Hub (Ministry of Communications), and Route Academy, complemented by independent project work ranging from tourism platform APIs to AI-integrated dashboards.",
      "On the backend, I design and build RESTful APIs with Node.js and Express.js, implement JWT-based authentication, manage data models with both MongoDB/Mongoose and MySQL/Sequelize, and apply clean architecture patterns (Controller → Service → Model) to keep codebases maintainable at scale.",
      "On the frontend, I build component-based React applications with Redux and Context API, integrating responsive design with Tailwind CSS and handling real API consumption through the Fetch API.",
      "Recent work includes a production-ready backend for a tourism platform (Siwa Oasis) handling trip planning, bus booking, and chatbot functionality — and a full-stack URL analysis dashboard with integrated AI features."
    ],
    stats: [
      { label: "Completed Projects", value: "8+" },
      { label: "Public Repos", value: "40+" },
      { label: "Training Hours", value: "350+" },
      { label: "University Degree", value: "B.Sc." }
    ]
  },

  projects: [
    {
  id: "ataa-charity-platform",
  title: "Ataa Charity Platform",

  description:
    "A production-grade full-stack charity ecosystem enabling transparent donations, real-time impact tracking, campaign management, and AI-driven insights.",

  longDescription:
    "Ataa is a scalable full-stack platform designed to modernize charity operations. It connects donors, organizations, and administrators through a secure role-based system. The platform delivers real-time donation tracking, campaign lifecycle management, automated workflows, and AI-powered analytics to enhance transparency, trust, and decision-making in charitable operations.",

      image: "/images/ataa-charity.png",
      images: [
        "/images/ataa-charity.png"
      ],
  tags: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Cloudinary",
    "Node-cron",
    "REST API",
    "AI Integration"
  ],

  features: [
    "Secure authentication with JWT & password hashing (bcrypt)",
    "Role-based access control (Admin / Donor / Organization)",
    "Real-time donation tracking and analytics dashboard",
    "Full campaign lifecycle management system",
    "AI-powered insights for donation optimization",
    "Automated email notification workflows",
    "Cloud-based media handling via Cloudinary",
    "Scheduled background jobs using Node-cron",
    "Responsive and modern UI/UX dashboard"
  ],

  liveUrl: "https://ataa.page",
  githubUrl: "https://github.com/Sayed-Herzallah/Ataa-Charity-Platform-React-TypeScript",
  featured: true
},
    {
      id: "siwa-oasis-api",
      title: "Siwa Oasis Travel Platform API",
      description: "Production-ready REST API for a tourism platform — handling user authentication, destination browsing, custom trip planning, bus booking with cancel/confirm flows, chatbot with session history, and admin reporting.",
      longDescription: "Architected using layered service pattern (Controller → Service → Model) with full separation of concerns.",
      image: "/images/siwa-oasis.png",
      images: [
        "/images/siwa-oasis.png"
      ],
      tags: ["Node.js", "Express.js", "Sequelize", "MySQL", "JWT", "Clean Architecture"],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: true
    },
    {
      id: "social-media-api",
      title: "Social Media Platform Real-time API",
      description: "High-performance backend API supporting complex social graph relationships (followers/following), real-time communication via WebSockets, and scalable feed retrieval using cursor-based pagination for infinite scroll.",
      longDescription: "Optimised for high read-load scenarios using cursor-based pagination.",
      image: "/images/social-media.png",
      images: [
        "/images/social-media.png"
      ],
      tags: ["Node.js", "MongoDB", "Mongoose", "Socket.io", "Cursor-based Pagination"],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: true
    },
    {
      id: "ai-url-dashboard",
      title: "AI-Integrated URL Analysis Dashboard",
      description: "Full-stack dashboard application with deployed frontend and backend. Integrates an AI layer for real-time URL analysis and insight generation. Features responsive UI with dynamic data visualization.",
      longDescription: "Provides complete frontend/backend communication via Fetch API with serverless model hooks.",
      image: "/images/ai-dashboard.png",
      images: [
        "/images/ai-dashboard.png"
      ],
      tags: ["React.js", "Node.js", "Fetch API", "AI Integration", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah/dev-portfolio-backend",
      featured: true
    },
    {
      id: "brain-tumor-ai",
      title: "Brain Tumor AI Analysis Medical Web App",
      description: "Transformed a complete 17-screen mobile UI design into a structured React application simulating a real-world medical platform — covering patient registration, MRI scan upload, medical history search, and chat interface.",
      longDescription: "Demonstrates strong UI-to-code translation and scalable component architecture.",
      image: "/images/brain-tumor.png",
      images: [
        "/images/brain-tumor.png"
      ],
      tags: ["React.js", "Context API", "Custom Hooks", "Responsive Design"],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: false
    },
    {
  id: "r3aya-child-physiotherapy-system",
  title: "R3aya – Child Physiotherapy Monitoring System API",

  description:
    "Scalable healthcare backend system for managing child physiotherapy sessions, EMG assessments, and connecting parents with specialists through a secure digital platform.",

  longDescription:
    "R3aya is a production-level backend API designed for a child physiotherapy monitoring ecosystem. It enables structured management of parents, children, and medical specialists while supporting EMG-based muscle analysis sessions. The system is built with a modular architecture focusing on scalability, security, and healthcare-grade data integrity.",

      image: "/images/r3aya-healthcare.png",
      images: [
        "/images/r3aya-healthcare.png"
      ],
  tags: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Joi",
    "Nodemailer",
    "REST API",
    "Clean Architecture"
  ],

  features: [
    "Secure authentication with JWT and email OTP verification",
    "Role-based access control (Parent / Specialist / Admin)",
    "Child profile management linked to parent accounts",
    "Specialist discovery and contact request system",
    "EMG session tracking and medical data storage",
    "Soft delete system for data integrity",
    "Paginated medical record handling for large datasets",
    "Email notifications and verification system",
    "Modular and scalable backend architecture"
  ],

  liveUrl: "",
  githubUrl: "https://github.com/Sayed-Herzallah/R3aya-Care-System-Api",
  featured: true
},
    {
      id: "villa-agency",
      title: "Villa Agency React Frontend",
      description: "React application for a real estate agency with full CRUD, authentication, responsive animations, and live Vercel deployment. Built as a graduation project for MCIT Creativa Innovation Hub.",
      longDescription: "Features interactive villa searching, sorting, and user listing functions.",
      image: "/images/villa-agency.png",
      images: [
        "/images/villa-agency.png"
      ],
      tags: ["React.js", "CRUD", "Auth", "Responsive", "Vercel Deployment"],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: false
    },
    {
  id: "sharaha-app-backend",
  title: "Sharaha App – Anonymous Messaging API",

  description:
    "Secure and scalable backend API for an anonymous messaging platform supporting authentication, encrypted communication, and message management.",

  longDescription:
    "Sharaha App is a production-level RESTful API inspired by anonymous messaging platforms. It allows users to securely register, authenticate, and receive anonymous messages. The system is built with a modular architecture emphasizing separation of concerns, security best practices, and scalability.",

      image: "/images/sharaha-messaging.png",
      images: [
        "/images/sharaha-messaging.png"
      ],

  tags: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Joi",
    "Nodemailer",
    "Multer",
    "Cloudinary",
    "REST API",
    "Modular Architecture"
  ],

  features: [
    "Secure user authentication with JWT",
    "Password hashing using bcrypt",
    "Email verification system via Nodemailer",
    "Anonymous messaging system",
    "Message retrieval and optional reply system",
    "Input validation using Joi",
    "Protection against XSS and NoSQL injection",
    "Global error handling middleware",
    "File upload support with Cloudinary",
    "Modular feature-based architecture"
  ],

  liveUrl: "",
  githubUrl: "https://github.com/Sayed-Herzallah/Sharaha-App-BackEnd",
  featured: false
},
    {
  id: "ufuq-real-estate-react",
  title: "UFUQ Real Estate Platform",

  description:
    "Modern responsive real estate web platform built with React, enabling users to explore property listings, view statistics, and interact with an intuitive UI experience.",

  longDescription:
    "UFUQ Real Estate is a production-level frontend application designed to deliver a seamless property browsing experience. The platform includes dynamic property listings, multilingual support, and interactive UI sections such as hero banners, testimonials, and contact flows. It focuses on performance, responsiveness, and clean user experience design principles.",

      image: "/images/ufuq-realestate.png",
      images: [
        "/images/ufuq-realestate.png"
      ],

  tags: [
    "React",
    "JavaScript",
    "Context API",
    "CSS3",
    "Responsive Design",
    "UI/UX"
  ],

  features: [
    "Dynamic property listings with detailed views",
    "Multi-language support using Context API",
    "Interactive UI sections (Hero, Stats, Testimonials)",
    "Fully responsive design across all devices",
    "Clean and modern user experience",
    "Reusable component-based architecture"
  ],

  liveUrl: "",
  githubUrl: "https://github.com/Sayed-Herzallah/Ufuq-Real-Estate-React",
  featured: false
},
{
  id: "blog-backend-sequelize",
  title: "Blog Platform Backend (Sequelize)",

  description:
    "Scalable backend API for a blog platform with user authentication, posts management, and relational database structure using Sequelize ORM.",

  longDescription:
    "This project is a production-style backend API for a blogging system built with Node.js and Express, using Sequelize ORM for relational database management. It supports user authentication, CRUD operations for posts, and structured relational data modeling to ensure scalability and data consistency.",

      image: "/images/blog-platform.png",
      images: [
        "/images/blog-platform.png"
      ],

  tags: [
    "Node.js",
    "Express.js",
    "Sequelize",
    "MySQL",
    "JWT",
    "REST API",
    "MVC Architecture"
  ],

  features: [
    "User authentication with JWT",
    "Secure password hashing",
    "Create, update, delete blog posts",
    "Relational database design using Sequelize",
    "MVC architecture structure",
    "RESTful API design",
    "Input validation and error handling",
    "Scalable database schema design"
  ],

  liveUrl: "",
  githubUrl: "https://github.com/Sayed-Herzallah/My-Blog-Back-end-Sequelize",
  featured: false
}
  ],

  skills: [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Context API", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3"]
    },
        {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Socket.io (Real-time)", "Clean Layered Architecture", "MVC Pattern"]
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB", "Mongoose ODM", "MySQL", "Sequelize ORM", "Relational Database Design", "Database Normalization"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Docker", "Postman", "Swagger / OpenAPI", "Jest (Testing)", "Redis (Caching)", "Vercel / Railway"]
    }
  ],


  experience: [
    {
      id: "exp-creativa",
      role: "Frontend & Full Stack Developer (Training Program)",
      company: "Creativa Innovation Hub — Ministry of Communications (MCIT)",
      duration: "Aug 2023 – Nov 2023",
      description: [
        "Completed an intensive full-stack development program covering React.js, Node.js, REST API design, and database integration.",
        "Built and deployed a React.js frontend for a villa agency platform, implementing authentication, CRUD operations, responsive UI, and Postman-documented API contracts.",
        "Developed a Brain Tumor AI Analysis web app — transforming a 17-screen mobile design into a production-structured React application with Context API, custom hooks, and full authentication flows."
      ],
      tags: ["React.js", "Context API", "REST APIs", "Responsive Design"]
    },
    {
      id: "exp-NTI - National Telecommunication Institute",
      role: "Full Stack Web Developer (Bootcamp — MERN Stack)",
      company: "NTI - National Telecommunication Institute ",
      duration: "Jan 2024 – Apr 2024",
      description: [
        "Completed advanced MERN Stack training with a focus on building scalable backend systems and real-time features.",
        "Engineered a Social Media Platform backend using MongoDB with complex follower/following data relationships, Socket.io for real-time messaging, and cursor-based pagination for infinite scroll.",
        "Developed backend APIs with JWT authentication, role-based authorization, and performance-optimized query patterns."
      ],
      tags: ["MERN Stack", "Node.js", "Socket.io", "MongoDB", "Cursor-based Pagination"]
    },
    {
      id: "exp-freelance",
      role: "Full Stack Developer — Independent Projects",
      company: "Self-Employed / Freelance",
      duration: "May 2024 – Present",
      description: [
        "Designed and built the Siwa Oasis Travel Platform API — a production-structured backend serving trip planning, place discovery, bus booking, and AI chatbot features using Node.js, Express.js, Sequelize, and MySQL.",
        "Integrated AI-powered URL analysis into a deployed full-stack dashboard, connecting frontend and backend via Fetch API with real server deployment.",
        "Applied clean architecture principles (separation of concerns, modular service layers) across all projects."
      ],
      tags: ["Node.js", "Express.js", "Sequelize", "MySQL", "AI Integration", "Clean Architecture"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor's Degree in Computer Science and Information Systems",
       school: "Delta Higher Institute",
        duration: "2022 - 2026",
      description: [
        "Specialized in Software Engineering, database normalization, and web technologies.",
        "Graduation project focused on building automated web analysis tools and RESTful architectures."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-ai",
      title: "Build with AI: Masr Edition",
      issuer: "Google",
      date: "May 2024",
      url: ""
    },
    {
      id: "cert-NTI - National Telecommunication Institute",
      title: "MERN Stack Developer Certificate",
      issuer: "NTI - National Telecommunication Institute",
      date: "Apr 2024",
      url: "https://drive.google.com/file/d/11fPLx2J5t4Eq25eBhm9EAhsaSe94xAYd/view?usp=sharing"
    },
    {
      id: "cert-creativa",
      title: "Frontend React.js Scholarship (MCIT-affiliated)",
      issuer: "Creativa Innovation Hub",
      date: "Nov 2023",
      url: "https://drive.google.com/file/d/17Zey7KrCjPif3ngCvqhTC_lImm8Bkmlx/view?usp=sharing"
    },
        {
      id: "cert-manara",
      title: "Modern JavaScript Certificate",
      issuer: "Manara",
      date: "Feb 2024",
      url: "https://app.manara.tech/certificate/1775901865-B9E7A239B519F760"
    },    


  ]
};
