/**
 * Portfolio Data Configuration - Ruthra Kumar J
 * 
 * Accurately populated from Resume:
 * Electronics & Communication Engineering Graduate | Full-Stack Web Developer
 */

export const personalData = {
  name: "Ruthra Kumar J",
  role: "Full-Stack Web Developer",
  tagline: "ECE Graduate (8.3 CGPA) | Full-Stack Web Development",
  location: "Tamil Nadu, India",
  email: "kruthra590@gmail.com",
  phone: "+91 9345423126",
  availability: "Available for Entry-Level Roles / Full-Time Hire",
  profileImage: "/profile.png",
  resumeUrl: "#resume",
  bioHeadline: "Hi, I'm Ruthra Kumar J — Full-Stack Web Developer.",
  shortBio: "Electronics and Communication Engineering graduate (8.3 CGPA) with hands-on proficiency in React.js, Tailwind CSS, JavaScript, and MongoDB. Adept at engineering responsive web architectures, integrating RESTful services, and developing embedded sensor systems. Seeking a full-time Full-Stack Web Developer role to deliver scalable digital solutions.",
  aboutParagraphs: [
    "I am an Electronics and Communication Engineering graduate (8.3 CGPA) from MRK Institute of Technology with a strong foundation in modern web technologies and practical software development.",
    "My hands-on technical skill set spans building responsive, user-friendly frontend interfaces with React.js and Tailwind CSS, designing backend endpoints with Node.js and Express.js, and managing data with MongoDB. Alongside web development, my engineering background includes embedded C and Arduino sensor architectures.",
    "I am actively seeking an entry-level Full-Stack Web Developer position where I can apply my problem-solving skills, collaborate with forward-thinking teams, and contribute to building high-quality digital solutions."
  ],
  stats: [
    { label: "B.E. Degree CGPA", value: "8.3 / 10", description: "MRK Institute of Technology" },
    { label: "Key Projects", value: "2", description: "Web & Embedded Systems" },
    { label: "Core Web Stack", value: "MERN", description: "React, Node, Express, MongoDB" },
    { label: "Graduation Year", value: "2026", description: "Available for Immediate Roles" }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      iconName: "Github",
      username: "github.com/ruthrakumar"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "Linkedin",
      username: "linkedin.com/in/ruthrakumar"
    },
    {
      name: "Email",
      url: "mailto:kruthra590@gmail.com",
      iconName: "Mail",
      username: "kruthra590@gmail.com"
    },
    {
      name: "Phone",
      url: "tel:+919345423126",
      iconName: "Phone",
      username: "+91 9345423126"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: "Hands-on", icon: "react" },
        { name: "JavaScript (ES6+)", level: "Proficient", icon: "js" },
        { name: "Tailwind CSS", level: "Proficient", icon: "tailwind" },
        { name: "HTML5", level: "Proficient", icon: "html" },
        { name: "CSS3", level: "Proficient", icon: "css" },
        { name: "Responsive Web Design", level: "Proficient", icon: "responsive" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Database",
      iconName: "Database",
      skills: [
        { name: "Node.js", level: "Hands-on", icon: "node" },
        { name: "Express.js", level: "Hands-on", icon: "express" },
        { name: "MongoDB", level: "Hands-on", icon: "mongo" },
        { name: "RESTful APIs", level: "Hands-on", icon: "api" }
      ]
    },
    {
      id: "hardware",
      title: "Hardware & Embedded Systems",
      iconName: "Cpu",
      skills: [
        { name: "Arduino", level: "Hands-on", icon: "arduino" },
        { name: "Embedded C", level: "Proficient", icon: "c" },
        { name: "Optical Blink Sensor", level: "Practical", icon: "sensor" },
        { name: "Pulse Oximeter (SpO2)", level: "Practical", icon: "sensor" },
        { name: "Temperature Sensor", level: "Practical", icon: "sensor" },
        { name: "Buzzer Alert Logic", level: "Practical", icon: "hardware" }
      ]
    },
    {
      id: "tools",
      title: "Developer Tools & Methods",
      iconName: "Terminal",
      skills: [
        { name: "Git", level: "Proficient", icon: "git" },
        { name: "GitHub", level: "Proficient", icon: "github" },
        { name: "VS Code", level: "Proficient", icon: "vscode" },
        { name: "Responsive Web Design", level: "Proficient", icon: "responsive" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    tagline: "React.js, Tailwind CSS, REST APIs",
    category: "Web Development",
    period: "Featured Project",
    description: "Architected a responsive single-page social media application supporting feed interaction, profile views, and dynamic likes and comments with seamless client-side performance.",
    problemSolved: "Engineered reusable modular React components with optimized state management and API integration for seamless client-side performance.",
    highlights: [
      "Architected a responsive single-page social media application supporting feed interaction, profile views, and dynamic likes and comments.",
      "Engineered reusable modular React components with optimized state management and API integration for seamless client-side performance.",
      "Crafted responsive and modern UI layout with Tailwind CSS ensuring cross-device compatibility."
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "REST APIs", "Modular Architecture"],
    badgeColor: "border-violet-500/30 text-violet-300 bg-violet-500/10"
  },
  {
    id: "driver-drowsiness-system",
    title: "Real-Time Driver Drowsiness & Health Monitoring System",
    tagline: "Arduino, Sensors, Embedded C",
    category: "Embedded & Hardware",
    period: "Featured Project",
    description: "Engineered an embedded safety system combining an optical blink sensor, pulse oximeter (SpO2/heart rate), and temperature sensor to safeguard drivers from fatigue.",
    problemSolved: "Implemented real-time sensor polling and threshold logic to activate instant buzzer alerts during driver fatigue or critical vital deviations.",
    highlights: [
      "Engineered an embedded safety system combining an optical blink sensor, pulse oximeter (SpO2/heart rate), and temperature sensor.",
      "Implemented real-time sensor polling and threshold logic to activate instant buzzer alerts during driver fatigue or critical vital deviations.",
      "Integrated multi-sensor analog/digital inputs with Arduino microcontroller using optimized threshold evaluation routines in Embedded C."
    ],
    tags: ["Arduino", "Sensors", "Embedded C", "Optical Blink Sensor", "Pulse Oximeter (SpO2)", "Temperature Sensor", "Hardware Alerts"],
    badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10"
  }
];

export const educationData = [
  {
    type: "education",
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "MRK Institute of Technology",
    location: "Tamil Nadu, India",
    period: "2022 – 2026",
    grade: "CGPA: 8.3 / 10",
    description: "Comprehensive engineering curriculum covering digital systems, microcontrollers, embedded architecture, data communication, and modern programming foundations.",
    coursework: [
      "Data Structures & Algorithms",
      "Microcontrollers & Embedded Systems",
      "Digital Signal Processing",
      "Object-Oriented Programming",
      "Electronic Circuits & Sensors"
    ],
    highlights: [
      "Maintained a strong 8.3 / 10 CGPA throughout undergraduate study.",
      "Spearheaded embedded and web development projects combining hardware sensors with software interfaces."
    ]
  },
  {
    type: "education",
    degree: "Higher Secondary Certificate (HSC) – Class XII",
    institution: "Chandra Higher Secondary School",
    location: "Tamil Nadu, India",
    period: "2022",
    grade: "Marks: 354 / 600",
    description: "Senior secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science.",
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science / Foundations"
    ],
    highlights: [
      "Graduated with 354 / 600 marks with strong focus on quantitative reasoning."
    ]
  }
];

export const certificationsData = [
  {
    title: "Typewriting Junior Grade",
    issuer: "State Board of Technical Examination",
    grade: "First Class",
    description: "Certified with First Class distinction in Junior Grade Typewriting, demonstrating rapid text input precision and professional documentation speed."
  }
];

export const languagesData = [
  { language: "Tamil", proficiency: "Native", level: 100 },
  { language: "English", proficiency: "Professional Working", level: 85 },
  { language: "German", proficiency: "Basic", level: 35 }
];

export const contactDetails = {
  email: "kruthra590@gmail.com",
  phone: "+91 9345423126",
  location: "Tamil Nadu, India",
  timezone: "IST (UTC+5:30)",
  availability: "Seeking Full-time Entry-Level Full-Stack Web Developer roles",
  socials: personalData.socials
};
