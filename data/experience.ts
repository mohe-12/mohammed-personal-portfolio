export type ExperienceItem = {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Development Intern',
    organization: 'Madda Walabu University, College of Computing, (on-site)',
    startDate: 'July 2025',
    endDate: 'Oct 2025',
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  description: string;
};

export const education: EducationItem = {
  degree: 'Bachelor of Science in Computer Science and Engineering',
  institution: 'Bule Hora University',
  year: '2026',
  description:
    'Undergraduate program focused on computer science fundamentals, software engineering, and modern web development.',
};
