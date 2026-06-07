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
  profileImage: "/profile.svg",
  cvUrl: "https://drive.google.com/file/d/1_aB_cDeF_gHiJkLmNoPqRsTuVwXyZ123/view?usp=sharing",
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
      { label: "Followers", value: "4,900+" },
      { label: "Completed Projects", value: "8+" },
      { label: "Training Hours", value: "350+" },
      { label: "Clean Code Rating", value: "A+" }
    ]
  },

  projects: [
    {
      id: "siwa-oasis-api",
      title: "Siwa Oasis Travel Platform API",
      description: "Production-ready REST API for a tourism platform — handling user authentication, destination browsing, custom trip planning, bus booking with cancel/confirm flows, chatbot with session history, and admin reporting.",
      longDescription: "Architected using layered service pattern (Controller → Service → Model) with full separation of concerns.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800"
      ],
      tags: ["Node.js", "Express.js", "Sequelize", "MySQL", "JWT", "Clean Architecture"],
      liveUrl: "https://siwa-oasis.example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "social-media-api",
      title: "Social Media Platform Real-time API",
      description: "High-performance backend API supporting complex social graph relationships (followers/following), real-time communication via WebSockets, and scalable feed retrieval using cursor-based pagination for infinite scroll.",
      longDescription: "Optimised for high read-load scenarios using cursor-based pagination.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
      ],
      tags: ["Node.js", "MongoDB", "Mongoose", "Socket.io", "Cursor-based Pagination"],
      liveUrl: "https://social-api.example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "ai-url-dashboard",
      title: "AI-Integrated URL Analysis Dashboard",
      description: "Full-stack dashboard application with deployed frontend and backend. Integrates an AI layer for real-time URL analysis and insight generation. Features responsive UI with dynamic data visualization.",
      longDescription: "Provides complete frontend/backend communication via Fetch API with serverless model hooks.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"
      ],
      tags: ["React.js", "Node.js", "Fetch API", "AI Integration", "Tailwind CSS"],
      liveUrl: "https://url-analysis.example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "brain-tumor-ai",
      title: "Brain Tumor AI Analysis Medical Web App",
      description: "Transformed a complete 17-screen mobile UI design into a structured React application simulating a real-world medical platform — covering patient registration, MRI scan upload, medical history search, and chat interface.",
      longDescription: "Demonstrates strong UI-to-code translation and scalable component architecture.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      tags: ["React.js", "Context API", "Custom Hooks", "Responsive Design"],
      liveUrl: "https://brain-analysis.example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: "villa-agency",
      title: "Villa Agency React Frontend",
      description: "React application for a real estate agency with full CRUD, authentication, responsive animations, and live Vercel deployment. Built as a graduation project for MCIT Creativa Innovation Hub.",
      longDescription: "Features interactive villa searching, sorting, and user listing functions.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      tags: ["React.js", "CRUD", "Auth", "Responsive", "Vercel Deployment"],
      liveUrl: "https://villa-agency.example.com",
      githubUrl: "https://github.com",
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
      id: "exp-route",
      role: "Full Stack Web Developer (Bootcamp — MERN Stack)",
      company: "Route Academy",
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
      degree: "Bachelor of Science in Computer Science & Information Systems",
      school: "Cairo / Helwan University",
      duration: "2020 - 2024",
      description: [
        "Specialized in Software Engineering, database normalization, and web technologies.",
        "Graduation project focused on building automated web analysis tools and RESTful architectures."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-creativa",
      title: "Frontend React.js Scholarship (MCIT-affiliated)",
      issuer: "Creativa Innovation Hub",
      date: "Nov 2023",
      url: "https://creativa.gov.eg"
    },
    {
      id: "cert-ai",
      title: "Build with AI: Masr Edition",
      issuer: "Google",
      date: "May 2024",
      url: "https://google.com"
    },
    {
      id: "cert-route",
      title: "MERN Stack Developer Certificate",
      issuer: "Route Academy",
      date: "Apr 2024",
      url: "https://routeacademy.com"
    },
    {
      id: "cert-manara",
      title: "Modern JavaScript Certificate",
      issuer: "Manara",
      date: "Feb 2024",
      url: "https://manara.tech"
    }
  ]
};
