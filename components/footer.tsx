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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <a
            href="#home"
            aria-label={`${siteConfig.name} — home`}
            className="text-sm font-semibold tracking-tight transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {siteConfig.name}
          </a>

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
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Compose an email to ${siteConfig.name} in Gmail`}
              title="Compose email in Gmail"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="h-4 w-4" />
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
                    className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
          </div>
        </div>

        <p className="mt-5 border-t border-border/60 pt-4 text-center text-xs text-muted-foreground sm:text-left">
          &copy; {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
