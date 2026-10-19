export type SocialLink = {
  name: string;
  href: string | null;
  icon: 'github' | 'linkedin' | 'mail' | 'twitter' | 'telegram';
  label: string;
};

// Set href to a real URL when available. null hides the link from the UI.
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/mohe-12',
    icon: 'github',
    label: 'Mohammed Hasen on GitHub',
  },
  {
    name: 'LinkedIn',
    href: null, // e.g. 'https://www.linkedin.com/in/yourusername'
    icon: 'linkedin',
    label: 'Mohammed Hasen on LinkedIn',
  },
  {
    name: 'Email',
    href: 'mailto:mohammedhasen2025q@gmail.com',
    icon: 'mail',
    label: 'Email Mohammed Hasen',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/mohe1899',
    icon: 'telegram',
    label: 'Message Mohammed Hasen on Telegram',
  },
];

export const configuredSocialLinks = socialLinks.filter(
  (link) => link.href !== null,
);
