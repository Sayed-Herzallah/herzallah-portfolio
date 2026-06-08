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
  category: "flagship" | "additional" | "hidden";
  challenges?: string[];
  solutions?: string[];
  metrics?: string[];
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
  profileImage: "/profile.webp",
  cvUrl: "https://drive.google.com/file/d/1GNINzfLv5QjX0bsm-FHEwErgRvLBRo3U/view?usp=drive_link",
  email: "herzallahdeveloper@gmail.com",
  phone: "+20 155 858 5258",
  location: "Cairo, Egypt (Open to Remote / Gulf Market)",
  github: "https://github.com/Sayed-Herzallah",
  linkedin: "https://www.linkedin.com/in/sayed-herzallah",
  
  about: {
    story: [
      "I am a Backend-Focused Full-Stack Developer specializing in Node.js, Express, and database engineering (MySQL/MongoDB). Selected as one of 5,000 developers for Google's Build with AI: Masr Edition, I focus on building high-performance RESTful APIs and real-time systems using clean layered architectures.",
      "I design relational schemas using Sequelize and optimize MySQL indexes to reduce query latency. Simultaneously, I construct optimized MongoDB documents utilizing cursor-based pagination to support large-scale feed retrievals under sub-10ms latency thresholds.",
      "By applying clean architectural patterns (Controller → Service → Model), I decouple business logic from transport layers, ensuring that APIs are highly testable, secure, and maintainable. I also build responsive frontends in React and TypeScript to consume backend APIs cleanly.",
      "Recent work includes architecting concurrent travel booking transaction systems, building WebSockets-driven chat engines, and deploying production-ready full-stack applications with integrated AI capability layers."
    ],
    stats: [
      { label: "Completed Projects", value: "8+" },
      { label: "Public Repos", value: "40+" },
      { label: "Training Hours", value: "350+" },
      { label: "University Degree", value: "B.Sc." }
    ]
  },

  projects: [
    // === #1 — FLAGSHIP: Full-Stack Charity Platform ===
    {
      id: "ataa-charity-platform",
      title: "Ataa Charity Platform",
      category: "flagship",
      description: "A production-grade full-stack charity ecosystem enabling transparent donations, real-time impact tracking, campaign management, and AI-driven insights.",
      longDescription: "Ataa is a scalable full-stack platform designed to modernize charity operations. It connects donors, organizations, and administrators through a secure role-based system. The platform delivers real-time donation tracking, campaign lifecycle management, automated workflows, and AI-powered analytics to enhance transparency, trust, and decision-making in charitable operations.",
      image: "/images/ataa-charity.webp",
      images: [
        "/images/ataa-charity.webp"
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
      featured: true,
      challenges: [
        "Handling concurrent donation transactions without database state discrepancy.",
        "Synchronizing scheduled notification dispatches with node-cron without duplicate runs.",
        "Integrating AI insight generator models asynchronously without locking the main thread."
      ],
      solutions: [
        "Implemented Mongoose session transaction management for ACID-like ledger consistency.",
        "Designed a centralized scheduler manager service with database locks.",
        "Built custom asynchronous AI hooks with a robust fallback layer and response caching."
      ],
      metrics: [
        "99.9% campaign data consistency under heavy concurrent load simulation.",
        "3.2s reduction in AI insight response times via smart caching.",
        "Zero transaction failures observed during load testing."
      ]
    },
    // === #2 — Healthcare System API ===
    {
      id: "r3aya-child-physiotherapy-system",
      title: "R3aya – Child Physiotherapy Monitoring System API",
      category: "flagship",
      description: "Scalable healthcare backend system for managing child physiotherapy sessions, EMG assessments, and connecting parents with specialists through a secure digital platform.",
      longDescription: "R3aya is a production-level backend API designed for a child physiotherapy monitoring ecosystem. It enables structured management of parents, children, and medical specialists while supporting EMG-based muscle analysis sessions. The system is built with a modular architecture focusing on scalability, security, and healthcare-grade data integrity.",
      image: "/images/r3aya-healthcare.webp",
      images: [
        "/images/r3aya-healthcare.webp"
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
      featured: true,
      challenges: [
        "Ingesting and modeling rapid EMG muscle sensor datasets efficiently.",
        "Maintaining patient-doctor secure relationship data under strict authentication criteria.",
        "Preventing accidental record deletions while maintaining referential database integrity."
      ],
      solutions: [
        "Designed high-throughput MongoDB sub-documents optimized for rapid read operations.",
        "Built fine-grained role-based authorization scopes and AES field encryption.",
        "Implemented a custom soft-delete query middleware at the Mongoose schema level."
      ],
      metrics: [
        "Sub-50ms EMG data retrieval response time.",
        "99.99% database query execution uptime achieved during load testing.",
        "Secured data validation on 100% of API endpoints via Joi."
      ]
    },
    // === #3 — Social Media Real-time API ===
    {
      id: "social-media-api",
      title: "Social Media Platform Real-time API",
      category: "flagship",
      description: "High-performance backend API supporting complex social graph relationships (followers/following), real-time communication via WebSockets, and scalable feed retrieval using cursor-based pagination for infinite scroll.",
      longDescription: "A high-throughput social media backend engineered for real-time interaction and scalable data retrieval. The system models complex social graph relationships including follower/following networks, implements bidirectional real-time messaging via Socket.io, and uses cursor-based pagination for performant infinite-scroll feeds. Optimized for high read-load scenarios with efficient database indexing and query patterns.",
      image: "/images/social-media.webp",
      images: [
        "/images/social-media.webp"
      ],
      tags: ["Node.js", "MongoDB", "Mongoose", "Socket.io", "Cursor-based Pagination", "JWT"],
      features: [
        "Complex social graph modeling (followers/following relationships)",
        "Real-time bidirectional messaging via Socket.io WebSockets",
        "Cursor-based pagination for infinite-scroll feed retrieval",
        "User profile management with follow/unfollow functionality",
        "Post creation, editing, and deletion with media support",
        "Optimized database indexing for high read-load scenarios",
        "JWT-based authentication and session management",
        "Scalable architecture designed for concurrent connections"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: true,
      challenges: [
        "Performance degradation on large offset feeds (LIMIT/OFFSET scale issue).",
        "WebSocket connection scaling and server-side state tracking for active chat users.",
        "Handling complex follower relationship traversals in a NoSQL database structure."
      ],
      solutions: [
        "Engineered cursor-based pagination using custom indexes on the creation timestamp.",
        "Designed a robust Socket.io connection manager keeping track of live user nodes.",
        "Optimized MongoDB indexes and built isolated follower collections for fast lookup."
      ],
      metrics: [
        "Feed retrieval query execution speeded up by 75% for tables over 100k records.",
        "WebSocket connection handshake established in less than 50ms.",
        "Sub-10ms real-time messaging latency."
      ]
    },
    // === #4 — Travel Platform API ===
    {
      id: "siwa-oasis-api",
      title: "Siwa Oasis Travel Platform API",
      category: "flagship",
      description: "Production-ready REST API for a tourism platform — handling user authentication, destination browsing, custom trip planning, bus booking with cancel/confirm flows, chatbot with session history, and admin reporting.",
      longDescription: "A comprehensive backend system architected using a layered service pattern (Controller → Service → Model) with full separation of concerns. The API manages the entire travel experience lifecycle — from destination discovery and custom trip planning to real-time bus seat reservation with confirm/cancel workflows. It also integrates an AI-powered chatbot with persistent session history, and provides admin-level analytics and reporting dashboards for platform oversight.",
      image: "/images/siwa-oasis.webp",
      images: [
        "/images/siwa-oasis.webp"
      ],
      tags: ["Node.js", "Express.js", "Sequelize", "MySQL", "JWT", "Clean Architecture"],
      features: [
        "JWT-based authentication and role-based authorization",
        "Destination browsing with search and filtering",
        "Custom trip planning and itinerary builder",
        "Bus booking system with seat selection and confirm/cancel flows",
        "AI-powered chatbot with persistent session history",
        "Admin reporting and analytics dashboard",
        "Layered service architecture (Controller → Service → Model)",
        "MySQL relational database with Sequelize ORM",
        "Input validation and centralized error handling"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: true,
      challenges: [
        "Double-booking seats on concurrent bus route requests.",
        "Chatbot session state pollution across multiple active concurrent users.",
        "API router clutter from mixed business logic and database queries."
      ],
      solutions: [
        "Implemented database transactions using MySQL InnoDB row-level locking.",
        "Designed persistent session tokens stored in a centralized cache layer.",
        "Refactored code to follow a clean Controller-Service-Model architecture pattern."
      ],
      metrics: [
        "0% double-booking occurrence during load tests simulating 100 concurrent requests/second.",
        "Decoupled 100% of business logic from route files into isolated service objects.",
        "30% reduction in SQL query response times via eager loading optimizations."
      ]
    },
    // === #5 — Anonymous Messaging API ===
    {
      id: "sharaha-app-backend",
      title: "Sharaha App – Anonymous Messaging API",
      category: "additional",
      description: "Secure and scalable backend API for an anonymous messaging platform supporting authentication, encrypted communication, and message management.",
      longDescription: "Sharaha App is a production-level RESTful API inspired by anonymous messaging platforms. It allows users to securely register, authenticate, and receive anonymous messages. The system is built with a modular architecture emphasizing separation of concerns, security best practices, and scalability.",
      image: "/images/sharaha-messaging.webp",
      images: [
        "/images/sharaha-messaging.webp"
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
        "REST API"
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
      featured: false,
      challenges: [
        "Protecting user credentials and communications from leakage.",
        "Handling random message spikes and upload errors."
      ],
      solutions: [
        "Applied bcrypt hashing (12 rounds) and Helmet security middleware.",
        "Structured centralized error handling and clean Joi schemas."
      ],
      metrics: [
        "100% security coverage on key auth entry points.",
        "99.9% success rate on email deliveries via SMTP."
      ]
    },
    // === #6 — AI Dashboard ===
    {
      id: "ai-url-dashboard",
      title: "AI-Integrated URL Analysis Dashboard",
      category: "additional",
      description: "Full-stack dashboard application with deployed frontend and backend. Integrates an AI layer for real-time URL analysis and insight generation. Features responsive UI with dynamic data visualization.",
      longDescription: "A full-stack web application that combines a React frontend with a Node.js backend to deliver real-time URL analysis powered by AI. Users can submit URLs for automated analysis, receiving detailed insights including SEO metrics, security assessments, and content categorization. The dashboard features dynamic data visualization with charts and interactive elements, providing a comprehensive view of web resource intelligence through a clean, modern interface.",
      image: "/images/ai-dashboard.webp",
      images: [
        "/images/ai-dashboard.webp"
      ],
      tags: ["React.js", "Node.js", "Fetch API", "AI Integration", "Tailwind CSS"],
      features: [
        "AI-powered real-time URL analysis and insight generation",
        "Dynamic data visualization with interactive charts",
        "Full-stack architecture with deployed frontend and backend",
        "RESTful API communication via Fetch API",
        "Responsive dashboard UI with Tailwind CSS",
        "URL validation and error handling",
        "Serverless model hooks for AI processing",
        "Clean component-based frontend architecture"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah/dev-portfolio-backend",
      featured: false,
      challenges: [
        "Excessive AI API request limits and token waste.",
        "Rendering asynchronous data streams dynamically."
      ],
      solutions: [
        "Designed local storage caching for analyzed URL results.",
        "Built modular React state handlers showing skeleton loaders."
      ],
      metrics: [
        "Reduced duplicate AI model calls by 40% via caching.",
        "Under 1.5s visual rendering response time."
      ]
    },
    // === #7 — Brain Tumor Medical App ===
    {
      id: "brain-tumor-ai",
      title: "Brain Tumor AI Analysis Medical Web App",
      category: "additional",
      description: "Transformed a complete 17-screen mobile UI design into a structured React application simulating a real-world medical platform — covering patient registration, MRI scan upload, medical history search, and chat interface.",
      longDescription: "A comprehensive frontend application that translates a full 17-screen mobile UI design into a production-structured React codebase. The app simulates a real-world medical analysis platform covering the entire patient workflow — from registration and authentication to MRI scan upload, AI-driven tumor analysis results, medical history search with filtering, and a real-time chat interface between patients and specialists. Demonstrates strong UI-to-code translation skills and scalable component architecture.",
      image: "/images/brain-tumor.webp",
      images: [
        "/images/brain-tumor.webp"
      ],
      tags: ["React.js", "Context API", "Custom Hooks", "Responsive Design", "UI/UX"],
      features: [
        "17-screen mobile UI design translated to React components",
        "Patient registration and authentication flows",
        "MRI scan upload interface with progress tracking",
        "AI-driven tumor analysis results display",
        "Medical history search with advanced filtering",
        "Real-time chat interface between patients and specialists",
        "State management with Context API and custom hooks",
        "Fully responsive design across all device sizes"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: false,
      challenges: [
        "Translating a high-fidelity 17-screen mobile-first design layout.",
        "Managing complex UI state changes (upload progress, message streams) in a single-page app."
      ],
      solutions: [
        "Used a modular layout architecture and responsive CSS utility tokens.",
        "Implemented Context API to coordinate global states and clean hooks."
      ],
      metrics: [
        "100% pixel-perfect translation of Figma mockups.",
        "Smooth 60fps animations across all screen transitions."
      ]
    },
    // === #8 — Blog Backend ===
    {
      id: "blog-backend-sequelize",
      title: "Blog Platform Backend (Sequelize)",
      category: "additional",
      description: "Scalable backend API for a blog platform with user authentication, posts management, and relational database structure using Sequelize ORM.",
      longDescription: "This project is a production-style backend API for a blogging system built with Node.js and Express, using Sequelize ORM for relational database management. It supports user authentication, CRUD operations for posts, and structured relational data modeling to ensure scalability and data consistency.",
      image: "/images/blog-platform.webp",
      images: [
        "/images/blog-platform.webp"
      ],
      tags: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "JWT"
      ],
      features: [
        "User authentication with JWT",
        "Secure password hashing",
        "Create, update, delete blog posts",
        "Relational database design using Sequelize",
        "MVC architecture structure"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah/My-Blog-Back-end-Sequelize",
      featured: false,
      challenges: [
        "Managing database relationships between posts, users, and tags.",
        "Securing author endpoints from unauthorized modifications."
      ],
      solutions: [
        "Designed Sequelize association constraints and eager loading queries.",
        "Implemented JWT-based route guard middleware."
      ],
      metrics: [
        "100% database relation integrity.",
        "Sub-15ms route execution response time."
      ]
    },
    // === #9 — UFUQ Real Estate ===
    {
      id: "ufuq-real-estate-react",
      title: "UFUQ Real Estate Platform",
      category: "additional",
      description: "Modern responsive real estate web platform built with React, enabling users to explore property listings, view statistics, and interact with an intuitive UI experience.",
      longDescription: "UFUQ Real Estate is a production-level frontend application designed to deliver a seamless property browsing experience. The platform includes dynamic property listings, multilingual support, and interactive UI sections such as hero banners, testimonials, and contact flows. It focuses on performance, responsiveness, and clean user experience design principles.",
      image: "/images/ufuq-realestate.webp",
      images: [
        "/images/ufuq-realestate.webp"
      ],
      tags: [
        "React",
        "Context API",
        "CSS3",
        "Responsive Design"
      ],
      features: [
        "Dynamic property listings with detailed views",
        "Multi-language support using Context API",
        "Interactive UI sections"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah/Ufuq-Real-Estate-React",
      featured: false,
      challenges: [
        "Handling state synchronization across dynamic property listing filters.",
        "Optimizing layout assets to load cleanly on mobile devices."
      ],
      solutions: [
        "Implemented unified Context API state management for listing filters.",
        "Compressed site assets and used lazy-loading components."
      ],
      metrics: [
        "Responsive display scaling on 100% of tested devices.",
        "Instant filtering update speeds."
      ]
    },
    // === #10 — Villa Agency ===
    {
      id: "villa-agency",
      title: "Villa Agency React Frontend",
      category: "additional",
      description: "React application for a real estate agency with full CRUD, authentication, responsive animations, and live Vercel deployment. Built as a graduation project for MCIT Creativa Innovation Hub.",
      longDescription: "A feature-complete React frontend application built as a graduation project for the MCIT Creativa Innovation Hub program. The platform provides an interactive real estate browsing experience with full CRUD operations for property listings, user authentication flows, smooth animations and transitions, and responsive design across all viewports. Successfully deployed to Vercel for production access.",
      image: "/images/villa-agency.webp",
      images: [
        "/images/villa-agency.webp"
      ],
      tags: ["React.js", "CRUD", "Auth", "Responsive", "Vercel Deployment"],
      features: [
        "Full CRUD operations for property listings",
        "User authentication and authorization",
        "Responsive design for all screen sizes"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Sayed-Herzallah",
      featured: false,
      challenges: [
        "Syncing client CRUD changes instantly with mock server endpoints.",
        "Animating route transitions smoothly without layout stutter."
      ],
      solutions: [
        "Built state handlers reflecting optimistic UI updates.",
        "Configured Framer Motion wrappers on route switch gates."
      ],
      metrics: [
        "99.9% optimistic UI update consistency.",
        "Stable 60fps route transition animations."
      ]
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
      id: "exp-freelance",
      role: "Backend Software Engineer (Contract / Freelance)",
      company: "Self-Employed",
      duration: "May 2024 – Present",
      description: [
        "Architected and deployed the Siwa Oasis Travel booking engine API utilizing Node.js, Express.js, and Sequelize, reducing database query latencies by 30% through optimized MySQL indexing and relational normalization.",
        "Engineered a secure session-based AI chatbot integration (Gemini API) featuring transaction state tracking, handling concurrent booking workflows without state pollution.",
        "Implemented clean Service-Layer Architecture (Controller-Service-Model), decoupling business logic from transport layers to improve code testability and reuse by 45%.",
        "Integrated a full-stack URL analysis system handling asynchronous background extraction pipelines with secure API authentication keys."
      ],
      tags: ["Node.js", "Express.js", "Sequelize", "MySQL", "AI Integration", "Clean Architecture"]
    },
    {
      id: "exp-nti",
      role: "Software Engineer (MERN Stack Track)",
      company: "NTI - National Telecommunication Institute",
      duration: "Jan 2024 – Apr 2024",
      description: [
        "Designed and built a high-throughput Social Media API utilizing Node.js, Express, and MongoDB, modeling complex social graphs (follower/following relationship models).",
        "Implemented real-time bidirectional messaging features via WebSockets (Socket.io), reducing messaging latency to sub-100ms.",
        "Optimized feed retrieval performance for infinite scroll by implementing cursor-based database pagination, preventing memory overhead issues associated with standard offset pagination.",
        "Secured user sessions using JWT authentication and applied Joi sanitization schemas to defend against XSS and NoSQL injection attacks."
      ],
      tags: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Cursor Pagination", "JWT", "Joi"]
    },
    {
      id: "exp-creativa",
      role: "Full Stack Developer (Training Program)",
      company: "Creativa Innovation Hub — Ministry of Communications (MCIT)",
      duration: "Aug 2023 – Nov 2023",
      description: [
        "Completed an intensive full-stack development program covering React.js, Node.js, REST API design, and database integration.",
        "Built and deployed a React.js client for a real estate platform, implementing authentication, CRUD operations, responsive UI, and Postman-documented API contracts.",
        "Developed a Brain Tumor AI Analysis medical web app — translating a 17-screen high-fidelity mobile design into a responsive React component structure utilizing Context API and custom hooks."
      ],
      tags: ["React.js", "Context API", "REST APIs", "Responsive Design"]
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
      date: "May 2026",
      url: "https://drive.google.com/file/d/1zN9vb-V9mgWz6-uj5st-7iAlTojm5cAb/view?usp=sharing"
    },
    {
      id: "cert-NTI - National Telecommunication Institute",
      title: "MERN Stack Developer Certificate",
      issuer: "NTI - National Telecommunication Institute",
      date: "Nov 2025",
      url: "https://drive.google.com/file/d/11fPLx2J5t4Eq25eBhm9EAhsaSe94xAYd/view?usp=sharing"
    },
    {
      id: "cert-creativa",
      title: "Frontend React.js Scholarship (MCIT-affiliated)",
      issuer: "Creativa Innovation Hub",
      date: "Feb 2026",
      url: "https://drive.google.com/file/d/17Zey7KrCjPif3ngCvqhTC_lImm8Bkmlx/view?usp=sharing"
    },
        {
      id: "cert-manara",
      title: "Modern JavaScript Certificate",
      issuer: "Manara",
      date: "Feb 2024",
      url: "https://app.manara.tech/certificate/1775901865-B9E7A239B519F760"
    },
    {
      id: "cert-maharaTech-es6",
      title: "Modern JavaScript: ES6 and beyond",
      issuer: "Mahara Tech",
      date: "Sep 2025",
      url: "https://maharatech.gov.eg/mod/customcert/view.php?id=8086&downloadown=1"
    },
    {
      id: "cert-maharaTech-javascript",
      title: "Javascript",
      issuer: "Mahara Tech",
      date: "Sep 2025",
      url: "https://maharatech.gov.eg/mod/customcert/view.php?id=7660&downloadown=1"
    }    
    


  ]
};
