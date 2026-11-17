export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress';
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
    title: 'Yetababarut Beherawi Petroleum (YBP) - የተባባሩት ቤሄራዊ ፔትሮሊየም',
    description:
      'A full-stack corporate website developed for a petroleum company in Bale Robe. It presents the company’s services and professional identity through a clean, responsive interface.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Completed',
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
      'A full-stack web application being developed for Bule Hora University to centralize the management of staff records and user roles. It is built with the MERN stack and features a responsive design, user authentication, and role-based access control.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    status: 'In Progress',
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
      'A responsive personal portfolio website that presents my projects, technical skills, and professional resume to employers and clients. It is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Completed',
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
      'A full-stack blog platform that publishes articles across technology, sports, and business. It combines a modern Next.js frontend with a Laravel backend and a MySQL database.',
    technologies: ['Next.js', 'Tailwind CSS', 'Laravel', 'MySQL'],
    status: 'In Progress',
    githubUrl: null,
    liveUrl: null,
    previewImage: 'https://i.postimg.cc/Vkj4bHrc/mozi.png',
    accentFrom: '#818CF8',
    accentTo: '#22D3EE',
  },
];