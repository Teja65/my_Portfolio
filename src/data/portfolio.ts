export const personalInfo = {
  name: "Konakalla Teja Venkatesh",
  title: "Full Stack Developer (MERN)",
  tagline:
    "Passionate Full Stack Developer with a strong interest in building simple, lightweight, and efficient web applications.",
  about:
    "Tech enthusiast based in Hyderabad. I enjoy learning new technologies, solving real-world problems, and continuously improving my skills. I seek opportunities that foster professional growth while allowing me to contribute to innovative and impactful projects.",
  location: "Hyderabad, Telangana",
  email: "konakallateja2002@gmail.com",
  github: "https://github.com/Teja65",
  linkedin: "https://www.linkedin.com/in/konakalla-teja-venkatesh-b72a18243",
  profileImage: "/profile/photo.jpg",
  resumePath: "/resume/resume.pdf",
};

export const projects = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A full-stack expense management app with user authentication, secure API routes, and persistent data storage. Track income and expenses with a clean, responsive interface.",
    liveUrl: "https://truth-or-dare-eta-five.vercel.app/",
    repoUrl: "https://github.com/Teja65/Expense_Tracker",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: "truth-or-dare",
    title: "Truth or Dare",
    description:
      "An interactive party game built with modern frontend tooling. Players draw random truth or dare prompts for a fun, shareable experience.",
    liveUrl: "https://expense-tracker-xi-five-26.vercel.app/",
    repoUrl: "https://github.com/Teja65/TruthOrDare",
    tech: ["React", "TypeScript", "Vite"],
  },
];

export const skillCategories = [
  {
    title: "Core Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend Frameworks & Libraries",
    skills: [
      "React.js",
      "React Router",
      "React Hook Form",
      "Redux Toolkit",
      "React Hot Toast",
      "React Query",
    ],
  },
  {
    title: "Backend & Security",
    skills: [
      "Node.js",
      "Express.js",
      "Firebase Authentication",
      "Google Authentication",
      "JWT",
      "Protected Routes",
      "Session Management",
      "Token Verification",
    ],
  },
  {
    title: "Tools & Languages",
    skills: ["Git", "GitHub", "Java (DSA)", "JavaScript", "TypeScript"],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
