export type Skill = {
  name: string;
  iconName: string; // key into techIconMap in components/tech-icon.tsx
  color: string;
};

export type SkillCategory = {
  title: string;
  iconName: 'code' | 'layout' | 'server' | 'database' | 'wrench' | 'sparkles';
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    iconName: 'layout',
    skills: [
      { name: 'HTML', iconName: 'html5', color: '#E34F26' },
      { name: 'CSS', iconName: 'css3', color: '#1572B6' },
      { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', iconName: 'typescript', color: '#3178C6' },
      { name: 'React', iconName: 'react', color: '#61DAFB' },
      { name: 'Next.js', iconName: 'nextjs', color: 'currentColor' },
      { name: 'Tailwind CSS', iconName: 'tailwind', color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Development',
    iconName: 'server',
    skills: [
      { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
      { name: 'Express.js', iconName: 'express', color: 'currentColor' },
      { name: 'PHP', iconName: 'php', color: '#777BB4' },
      { name: 'Laravel', iconName: 'laravel', color: '#FF2D20' },
      { name: 'REST APIs', iconName: 'api', color: '#6366F1' },
    ],
  },
  {
    title: 'Database Management',
    iconName: 'database',
    skills: [
      { name: 'MongoDB', iconName: 'mongodb', color: '#47A248' },
      { name: 'MySQL', iconName: 'mysql', color: '#4479A1' },
    ],
  },
  {
    title: 'Development Tools',
    iconName: 'wrench',
    skills: [
      { name: 'Git', iconName: 'git', color: '#F05032' },
      { name: 'GitHub', iconName: 'github', color: 'currentColor' },
      { name: 'VS Code', iconName: 'vscode', color: '#007ACC' },
      { name: 'Postman', iconName: 'postman', color: '#FF6C37' },
      { name: 'Vercel', iconName: 'vercel', color: 'currentColor' },
    ],
  },
  {
    title: 'Computer Science foundation',
    iconName: 'sparkles',
    skills: [
      { name: 'Data Structures & Algorithms', iconName: 'sparkles', color: '#10A37F' },
      { name: 'Object-Oriented Programming', iconName: 'sparkles', color: '#8D6CF1' },
      { name: 'Database Systems', iconName: 'sparkles', color: '#F59E0B' },
      { name: 'Software Engineering', iconName: 'sparkles', color: '#F97316' },
      { name: 'Computer Networks', iconName: 'sparkles', color: '#3B82F6' },
      { name: 'Operating Systems', iconName: 'sparkles', color: '#EF4444' },
    ],
  },
];

export const orbitTechnologies = [
  { name: 'React', iconName: 'react', color: '#61DAFB' },
  { name: 'Next.js', iconName: 'nextjs', color: 'currentColor' },
  { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
  { name: 'HTML', iconName: 'html5', color: '#E34F26' },
  { name: 'CSS', iconName: 'css3', color: '#1572B6' },
  { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
  { name: 'Express', iconName: 'express', color: 'currentColor' },
  { name: 'MongoDB', iconName: 'mongodb', color: '#47A248' },
  { name: 'Laravel', iconName: 'laravel', color: '#FF2D20' },
  { name: 'Git', iconName: 'git', color: '#F05032' },
];