export type ExperienceItem = {
  role: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Development Intern',
    organization: 'Madda Walabu University, College of Computing, (on-site)',
    description: 'Gained hands-on experience building frontend web interfaces in a professional, on-site environment within a university computing team.',
    startDate: 'Jul 2025',
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
  institution: 'Bule Hora University · Bule Hora, Ethiopia',
  year: '2026',
  description: '',
};
