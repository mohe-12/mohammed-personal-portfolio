export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  githubUrl: string | null;
  liveUrl: string | null;
  previewImage: string | null;
  accentFrom: string;
  accentTo: string;
};

export const projects: Project[] = [
  {
    id: 'yetababarut-beherawi-petroleum',
    number: '01',
    title: 'Yetababarut Beherawi Petroleum (YBP)',
    description:
      'Full-stack website for a petroleum company in Bale Robe, with service pages and a responsive design. Built with Next.js, React, TypeScript, and Tailwind CSS.',
    githubUrl: 'https://github.com/mohe-12/ybp-website-mohe',
    liveUrl: 'https://ybp-website-mohe.vercel.app/',
    previewImage: 'https://i.postimg.cc/PqXcfk3d/ybp.png',
    accentFrom: '#F59E0B',
    accentTo: '#EF4444',
  },
  {
    id: 'employee-management-system',
    number: '02',
    title: 'Employee Management System',
    description:
      'Full-stack system for Bule Hora University to manage staff records and roles. Built with the MERN stack, TypeScript, and Tailwind CSS.',
    githubUrl: null,
    liveUrl: null,
    previewImage: 'https://i.postimg.cc/rmyhTCwn/ems.png',
    accentFrom: '#6366F1',
    accentTo: '#22D3EE',
  },
  {
    id: 'personal-portfolio',
    number: '03',
    title: 'Personal Portfolio',
    description:
      'Responsive portfolio showcasing my projects, skills, and resume. Built with React, Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
    githubUrl: 'https://github.com/mohe-12/mohammed-personal-portfolio',
    liveUrl: 'https://mohammed-personal-portfolio.vercel.app/',
    previewImage: 'https://i.postimg.cc/9F9sJbR8/portfolio.png',
    accentFrom: '#FF2D20',
    accentTo: '#6366F1',
  },
  {
    id: 'moziblog',
    number: '04',
    title: 'MoziBlog',
    description:
      'Full-stack blog platform with articles on technology, sports, and business. Built with Next.js, Tailwind CSS, Laravel, and MySQL.',
    githubUrl: null,
    liveUrl: null,
    previewImage: 'https://i.postimg.cc/Vkj4bHrc/mozi.png',
    accentFrom: '#818CF8',
    accentTo: '#22D3EE',
  },
];