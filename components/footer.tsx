import { Github, Linkedin, Mail } from 'lucide-react';
import { SiTelegram } from 'react-icons/si';
import { siteConfig, navLinks } from '@/data/site-config';
import { configuredSocialLinks } from '@/data/social-links';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Linkedin,
  telegram: SiTelegram,
};

const iconLinkClass =
  'flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Send an email to ${siteConfig.name}`}
              title="Send an email"
              className={iconLinkClass}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            {configuredSocialLinks
              .filter((link) => link.icon !== 'mail')
              .map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={iconLinkClass}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}