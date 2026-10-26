/**
 * Portfolio Data Configuration
 * 
 * You can customize any of the information below to tailor the portfolio
 * to your personal brand, experience, projects, and contact details.
 */

export const personalData = {
  name: "Arun Kumar",
  role: "Full-Stack Developer & Hardware Enthusiast",
  location: "Bengaluru, India",
  email: "arun.developer@example.com",
  phone: "+91 98765 43210",
  availability: "Open to Work / Available for hire",
  profileImage: "/profile.png", // Copied from your root directory
  resumeUrl: "#resume", // Replace with your Google Drive / PDF link
  bioHeadline: "Hi, I'm Arun Kumar — Full-Stack Developer & Hardware Enthusiast.",
  shortBio: "Specializing in crafting high-performance web applications with React, Node.js, and modern cloud stacks, while bridging the physical and digital worlds through IoT systems. Driven by end-to-end craftsmanship, clean code architecture, and delightful user experiences.",
  aboutParagraphs: [
    "I am an Electronics & Communication Engineering graduate with an unrelenting passion for building intuitive, reliable software products. My journey started at the intersection of microcontrollers and code, which gave me a rigorous foundation in systems thinking, performance optimization, and hardware-to-cloud architecture.",
    "Over the past 2+ years, I have engineered full-stack web platforms, telemetry dashboards, and reactive microservices. I thrive in fast-paced environments where code quality, user experience, and pragmatic problem-solving meet.",
    "When I'm not writing clean TypeScript/React code or designing databases, you can find me tinkering with ESP32 sensor networks, solving algorithmic puzzles, or experimenting with emerging UI interaction models."
  ],
  stats: [
    { label: "Projects Completed", value: "12+", description: "Production & side projects" },
    { label: "Internship Experience", value: "1+ Yrs", description: "Full-stack & IoT teams" },
    { label: "Academic Qualification", value: "B.E. ECE", description: "Graduated with Honors" },
    { label: "LeetCode & Problem Solving", value: "250+", description: "Algorithmic problems solved" }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      iconName: "Github",
      username: "@arun-developer"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "Linkedin",
      username: "in/arunkumar-dev"
    },
    {
      name: "Email",
      url: "mailto:arun.developer@example.com",
      iconName: "Mail",
      username: "arun.developer@example.com"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      iconName: "Code2",
      username: "arun_codes"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: "Advanced", icon: "react" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "js" },
        { name: "Tailwind CSS", level: "Advanced", icon: "tailwind" },
        { name: "HTML5 & Semantic Web", level: "Expert", icon: "html" },
        { name: "CSS3 & Modern Animations", level: "Advanced", icon: "css" },
        { name: "Vite & Tooling", level: "Proficient", icon: "vite" },
        { name: "Framer Motion", level: "Proficient", icon: "motion" },
        { name: "Redux / Zustand", level: "Proficient", icon: "state" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Databases",
      iconName: "Database",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "node" },
        { name: "Express.js", level: "Advanced", icon: "express" },
        { name: "MongoDB & Mongoose", level: "Advanced", icon: "mongo" },
        { name: "SQL / MySQL / PostgreSQL", level: "Proficient", icon: "sql" },
        { name: "RESTful API Architecture", level: "Advanced", icon: "api" },
        { name: "JWT & OAuth Auth", level: "Proficient", icon: "lock" },
        { name: "WebSockets & MQTT", level: "Proficient", icon: "network" }
      ]
    },
    {
      id: "hardware",
      title: "Hardware & IoT Systems",
      iconName: "Cpu",
      skills: [
        { name: "Arduino Microcontrollers", level: "Advanced", icon: "arduino" },
        { name: "ESP32 / ESP8266 Wi-Fi/BLE", level: "Advanced", icon: "esp32" },
        { name: "Python (Hardware & PySerial)", level: "Proficient", icon: "python" },
        { name: "Embedded C / C++", level: "Proficient", icon: "c" },
        { name: "Sensor & Actuator Telemetry", level: "Advanced", icon: "sensors" },
        { name: "MQTT Broker Pipelines", level: "Proficient", icon: "mqtt" }
      ]
    },
    {
      id: "tools",
      title: "Tools & DevOps Workflow",
      iconName: "Terminal",
      skills: [
        { name: "Git & GitHub Workflows", level: "Advanced", icon: "git" },
        { name: "VS Code & Debuggers", level: "Expert", icon: "vscode" },
        { name: "Postman API Testing", level: "Advanced", icon: "postman" },
        { name: "Linux / Bash Scripting", level: "Proficient", icon: "linux" },
        { name: "Docker Basics", level: "Familiar", icon: "docker" },
        { name: "Agile / Scrum Methodologies", level: "Proficient", icon: "agile" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "omnipulse",
    title: "OmniPulse IoT Telemetry & Analytics Hub",
    tagline: "Industrial IoT streaming dashboard with live sensor visualizer and alert triggers",
    category: "Full-Stack & IoT",
    featured: true,
    description: "A real-time telemetry analytics platform built to bridge hardware sensor arrays (ESP32/temperature/humidity/voltage) to a high-speed web interface with sub-100ms latency.",
    problemSolved: "Engineered a resilient WebSocket and MQTT stream pipeline that handles fluctuating hardware connectivity, visualizes telemetry spikes via interactive charts, and triggers instant alerting rules.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "WebSockets", "ESP32", "MQTT", "MongoDB"],
    liveUrl: "https://example.com/omnipulse",
    githubUrl: "https://github.com/example/omnipulse-iot",
    metrics: ["<100ms latency", "50+ sensor nodes supported", "Auto-reconnect WebSocket channel"],
    accentGradient: "from-cyan-500/20 to-blue-600/20",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  },
  {
    id: "devforge",
    title: "DevForge — Developer Workspace & Snippet Vault",
    tagline: "Full-stack cloud snippet vault with syntax highlight, tags, and team sharing",
    category: "Full-Stack",
    featured: true,
    description: "A collaborative code curation and workflow tool for engineering teams to store, tag, search, and securely execute code snippets with instant markdown documentation.",
    problemSolved: "Eliminated fragmented notes by creating an ultra-fast searchable repository with instant regex filters, JWT authentication, and dark-mode syntax theme switcher.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "JWT Auth", "REST API"],
    liveUrl: "https://example.com/devforge",
    githubUrl: "https://github.com/example/devforge-app",
    metrics: ["99.8% test coverage", "Instant fuzzy search", "Dark/Light syntax themes"],
    accentGradient: "from-violet-500/20 to-indigo-600/20",
    badgeColor: "border-violet-500/30 text-violet-400 bg-violet-500/10"
  },
  {
    id: "auracommerce",
    title: "AuraStore — Modern Headless E-Commerce UI",
    tagline: "High-performance store interface with cart micro-animations and checkout flow",
    category: "Frontend",
    featured: true,
    description: "A sleek, responsive e-commerce web storefront with instantaneous client-side filtering, animated sliding cart drawers, persistent state, and mobile-first checkout ergonomics.",
    problemSolved: "Rebuilt legacy multi-step checkout with optimistic UI updates and smooth Framer Motion transitions, resulting in zero layout shifts and a 98+ Google Lighthouse rating.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Context API", "Vite", "Stripe API"],
    liveUrl: "https://example.com/aurastore",
    githubUrl: "https://github.com/example/aurastore-ui",
    metrics: ["98+ Lighthouse Performance", "Zero cumulative layout shift", "Optimistic cart state"],
    accentGradient: "from-emerald-500/20 to-teal-600/20",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
  },
  {
    id: "smartgrid",
    title: "EcoSense — Smart Energy & Device Monitor",
    tagline: "Hardware-to-Cloud power consumption monitor using Arduino and Python analytics",
    category: "Hardware & Systems",
    featured: false,
    description: "A hardware device monitor that measures AC/DC current flow and sends telemetry to a Python backend service, aggregating historical power consumption data into MySQL.",
    problemSolved: "Implemented hardware filtering on analog sensor readings to remove AC noise, calibrated sensor inputs, and developed an automated daily energy usage report generator.",
    tags: ["Python", "Arduino", "MySQL", "Chart.js", "PySerial", "REST API", "Tailwind CSS"],
    liveUrl: "https://example.com/ecosense",
    githubUrl: "https://github.com/example/ecosense-hardware",
    metrics: ["±1.5% measurement accuracy", "24/7 automated telemetry logging", "Smart cutoff alerts"],
    accentGradient: "from-amber-500/20 to-orange-600/20",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10"
  }
];

export const experienceData = [
  {
    type: "work",
    role: "Full-Stack Developer Intern",
    company: "TechSphere Solutions",
    location: "Bengaluru, India (Hybrid)",
    period: "June 2024 - Present",
    badge: "Current / Internship",
    description: "Contributed to building enterprise client web portals, developing reusable React UI components and optimizing REST backend endpoints.",
    achievements: [
      "Engineered 15+ responsive React frontend components with Tailwind CSS, improving cross-device rendering speed by 35%.",
      "Designed and integrated Node.js/Express REST APIs with MongoDB aggregation pipelines for high-traffic analytical reports.",
      "Participated in daily Agile standups, code reviews, and Git feature-branch workflows with senior engineers."
    ],
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Git"]
  },
  {
    type: "work",
    role: "IoT & Embedded Systems Intern",
    company: "NexaRobotics Lab",
    location: "Bengaluru, India",
    period: "Nov 2023 - May 2024",
    badge: "Completed",
    description: "Developed embedded firmware for wireless sensor nodes and built lightweight telemetry dashboards to monitor field equipment.",
    achievements: [
      "Programmed ESP32 and Arduino microcontrollers in C++ to capture environmental telemetry via I2C and SPI buses.",
      "Implemented MQTT protocol communication to stream sensor payloads securely to a cloud broker with failover caching.",
      "Developed an internal web dashboard using JavaScript and Chart.js to monitor node status in real-time."
    ],
    technologies: ["ESP32", "Arduino", "C/C++", "Python", "MQTT", "REST APIs"]
  }
];

export const educationData = [
  {
    type: "education",
    degree: "Bachelor of Engineering (B.E.) in Electronics & Communication",
    institution: "Visvesvaraya Technological University (VTU) / Engineering College",
    location: "Karnataka, India",
    period: "2020 - 2024",
    grade: "First Class with Distinction (CGPA: 8.6 / 10.0)",
    description: "Comprehensive foundational study covering microprocessors, digital signal processing, computer networks, and embedded systems alongside core software engineering.",
    coursework: [
      "Data Structures & Algorithms",
      "Microcontrollers & Embedded Systems (ARM / 8051)",
      "Object-Oriented Programming with C++ / Java",
      "Computer Networks & Communication Protocols",
      "Digital Electronics & VLSI Systems",
      "IoT Architecture and Sensors"
    ],
    highlights: [
      "Elected Technical Lead for College Robotics & Tech Club; organized inter-college Hackathons.",
      "Final Year Capstone Project: Automated Industrial Safety & Telemetry Network awarded Top Project Distinction."
    ]
  }
];

export const contactDetails = {
  email: "arun.developer@example.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, Karnataka, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available immediately for Full-time roles & high-impact Freelance contracts",
  socials: personalData.socials
};
