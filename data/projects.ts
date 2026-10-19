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
    title: 'YBP — Yetababarut Beherawi Petroleum',
    description:
      'Full Stack website for YBP (Yetababarut Beherawi Petroleum), a gas, oil, and fuel importer, using Next.js, Node.js, and MYSQL, Laravel, and Postman.',
    githubUrl: 'https://github.com/mohe-12/ybp-website-mohe',
    liveUrl: 'https://ybp-website-mohe.vercel.app/',
    previewImage: '/images/ybp.png',
    accentFrom: '#F59E0B',
    accentTo: '#EF4444',
  },

  {
    id: 'moziblog',
    number: '02',
    title: 'MoziBlog',
    description:
      'Full Stack blog application using Next.js, Tailwind CSS, Laravel, and MySQL.',
    githubUrl: null,
    liveUrl: null,
    previewImage: '/images/mozi.png',
    accentFrom: '#818CF8',
    accentTo: '#22D3EE',
  },
  {
    id: 'personal-portfolio',
    number: '03',
    title: 'Personal Portfolio',
    description:
      'Personal Portfolio website using Next.js, React.js, TypeScript, and Tailwind CSS.',
    githubUrl: null,
    liveUrl: null,
    previewImage: '/images/portfolio.png',
    accentFrom: '#FF2D20',
    accentTo: '#6366F1',
  },
  {
    id: 'employee-management-system',
    number: '04',
    title: 'Employee Management System',
    description:
      'Full Stack Employee Management System using MongoDB, Express.js, React.js, and Node.js.',
    githubUrl: null,
    liveUrl: null,
    previewImage: '/images/ems.png',
    accentFrom: '#6366F1',
    accentTo: '#22D3EE',
  },
];
