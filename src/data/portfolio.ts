import resumePdf from '../assets/Konakalla_Teja_Venkatesh_Resume.pdf';

export const personalInfo = {
  name: 'Konakalla Teja Venkatesh',
  greeting: "Hello, I'm",
  title: 'Full Stack Developer (MERN)',
  tagline:
    'Passionate Full Stack Developer with a strong interest in building simple, lightweight, and efficient web applications.',
  about:
    'Tech enthusiast. I enjoy learning new technologies, solving real-world problems, and continuously improving my skills. I seek opportunities that foster professional growth while allowing me to contribute to innovative and impactful projects.',
  location: 'Telangana, India',
  email: 'konakallateja2002@gmail.com',
  github: 'https://github.com/Teja65',
  linkedin: 'https://www.linkedin.com/in/konakalla-teja-venkatesh-b72a18243',
  resumePath: resumePdf,
  resumeFileName: 'Konakalla_Teja_Venkatesh_Resume.pdf',
};

export const projects = [
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'A full-stack expense management app with user authentication, secure API routes, and persistent data storage. Track income and expenses with a clean, responsive interface.',
    liveUrl: 'https://expense-tracker-xi-five-26.vercel.app/profile',
    repoUrl: 'https://github.com/Teja65/Expense_Tracker',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    id: 'truth-or-dare',
    title: 'Truth or Dare',
    description:
      'An interactive party game built with modern frontend tooling. Players draw random truth or dare prompts for a fun, shareable experience.',
    liveUrl: 'https://truth-or-dare-eta-five.vercel.app/',
    repoUrl: 'https://github.com/Teja65/TruthOrDare',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
];

export const skillCategories = [
  {
    title: 'Core Technologies',
    skills: ['JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    title: 'Frontend Frameworks & Libraries',
    skills: [
      'React.js',
      'React Router',
      'React Hook Form',
      'Redux Toolkit',
      'React Hot Toast',
      'React Query',
    ],
  },
  {
    title: 'Backend & Security',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'CORS',
      'Cookie Parser',
      'Express Session',
      'JWT',
    ],
  },
  {
    title: 'Tools & Languages',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Git',
      'GitHub',
    ],
  },
];

export const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'contact', label: 'Contact', path: '/contact' },
] as const;

export const pathToSection: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/skills': 'skills',
  '/contact': 'contact',
};
