export type ExperienceItem = {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Web Development Intern',
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
  degree: 'BSc in Computer Science and Engineering',
  institution: 'Bule Hora University',
  year: '2026',
  description: '',
};
