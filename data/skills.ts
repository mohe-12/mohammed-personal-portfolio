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
    title: 'Programming Languages',
    iconName: 'code',
    skills: [
      { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
      { name: 'PHP', iconName: 'php', color: '#777BB4' },
    ],
  },
  {
    title: 'Frontend Technologies',
    iconName: 'layout',
    skills: [
      { name: 'HTML', iconName: 'html5', color: '#E34F26' },
      { name: 'CSS', iconName: 'css3', color: '#1572B6' },
      { name: 'React', iconName: 'react', color: '#61DAFB' },
      { name: 'Next.js', iconName: 'nextjs', color: '#000000' },
      { name: 'Tailwind CSS', iconName: 'tailwind', color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Technologies',
    iconName: 'server',
    skills: [
      { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
      { name: 'Express.js', iconName: 'express', color: '#000000' },
      { name: 'Laravel', iconName: 'laravel', color: '#FF2D20' },
      { name: 'REST APIs', iconName: 'api', color: '#6366F1' },
    ],
  },
  {
    title: 'Databases',
    iconName: 'database',
    skills: [
      { name: 'MongoDB', iconName: 'mongodb', color: '#47A248' },
      { name: 'MySQL', iconName: 'mysql', color: '#4479A1' },
    ],
  },
  {
    title: 'Tools & Platforms',
    iconName: 'wrench',
    skills: [
      { name: 'Git', iconName: 'git', color: '#F05032' },
      { name: 'GitHub', iconName: 'github', color: '#181717' },
      { name: 'VS Code', iconName: 'vscode', color: '#007ACC' },
      { name: 'Postman', iconName: 'postman', color: '#FF6C37' },
      { name: 'Vercel', iconName: 'vercel', color: '#000000' },
    ],
  },
  {
    title: 'AI & Productivity',
    iconName: 'sparkles',
    skills: [
      { name: 'ChatGPT', iconName: 'sparkles', color: '#10A37F' },
      { name: 'GitHub Copilot', iconName: 'sparkles', color: '#8D6CF1' },
      { name: 'Gemini', iconName: 'sparkles', color: '#4285F4' },
      { name: 'Claude', iconName: 'sparkles', color: '#D97757' },
      { name: 'Prompt Engineering', iconName: 'sparkles', color: '#8B5CF6' },
      { name: 'AI-assisted coding', iconName: 'sparkles', color: '#10A37F' },
    ],
  },
];

export const orbitTechnologies = [
  { name: 'React', iconName: 'react', color: '#61DAFB' },
  { name: 'Next.js', iconName: 'nextjs', color: '#000000' },
  { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
  { name: 'HTML', iconName: 'html5', color: '#E34F26' },
  { name: 'CSS', iconName: 'css3', color: '#1572B6' },
  { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
  { name: 'Express', iconName: 'express', color: '#000000' },
  { name: 'MongoDB', iconName: 'mongodb', color: '#47A248' },
  { name: 'Laravel', iconName: 'laravel', color: '#FF2D20' },
  { name: 'Git', iconName: 'git', color: '#F05032' },
];
