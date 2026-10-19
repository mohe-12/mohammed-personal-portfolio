export const siteConfig = {
  name: 'Mohammed Hasen',
  role: 'Full-Stack Developer',
  title: 'Computer Engineer',
  description:
    'I build responsive web applications and practical digital solutions using modern web technologies, thoughtful design, and clean code.',
  email: 'mohammedhasen2025q@gmail.com',
  location: 'Bale Robe, Oromia, Ethiopia',
  education: {
    degree: 'BSc in Computer Science and Engineering',
    institution: 'Bule Hora University',
    graduationYear: '2026',
  },
  resumePath: '/resume/mohammed-hasen-resume.pdf',
  profileImagePath: '/images/profile.png',
  url: 'https://mohammedhasen.vercel.app',
} as const;

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Overview', href: '#about' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
] as const;
