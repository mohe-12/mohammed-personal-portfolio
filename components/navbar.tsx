'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks, siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [underlinedLink, setUnderlinedLink] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setMobileOpen(false);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        mobileOpen &&
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [mobileOpen]);

  
const handleNav = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const href = event.currentTarget.getAttribute('href');

  if (!href?.startsWith('#')) return;

  const target = document.getElementById(href.slice(1));
  if (!target) {
    console.warn(`Navbar target not found: ${href}`);
    setMobileOpen(false);
    return;
  }
  event.preventDefault();
  setMobileOpen(false);
  if (window.location.hash !== href) {
    window.history.pushState(null, '', href);
  }
  const navbarHeight = headerRef.current?.offsetHeight ?? 64;
  const targetTop =
    target.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight -
    8;
  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: 'smooth',
  });
};


  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 glass shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={handleNav}
          className="group flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-extrabold tracking-tight transition-opacity hover:opacity-90 sm:text-lg"
          aria-label="Mohammed Hasen — home"
        >
          <span className="text-foreground">Mohammed</span>
          <span className="gradient-text">Hasen</span>
          <span
            className="ml-0.5 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.65)] transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
        </a>

        <ul
          className="hidden items-center gap-1 lg:flex"
          onPointerLeave={() => setUnderlinedLink(null)}
        >
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const active = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav}
                  onPointerEnter={() => setUnderlinedLink(link.href)}
                  onFocus={() => setUnderlinedLink(link.href)}
                  onBlur={() => setUnderlinedLink(null)}
                  className={cn(
                    'relative rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                    underlinedLink === link.href && 'bg-muted/80 font-semibold text-foreground',
                  )}
                >
                  {link.name}
                  {underlinedLink === link.href && (
                    <motion.span
                      layoutId="nav-hover-underline"
                      className="absolute inset-x-3 -bottom-px h-px origin-left rounded-full bg-gradient-to-r from-primary to-accent"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="group hidden bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 lg:inline-flex"
          >
            <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer">
              <motion.span
                className="mr-1.5 inline-flex"
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 16 }}
              >
                <Download className="h-4 w-4" />
              </motion.span>
              <span>Resume</span>
            </a>
          </Button>
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            id="mobile-navigation"
            className="max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain border-b border-border bg-background/95 glass supports-[height:100dvh]:max-h-[calc(100dvh-4rem)] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const active = activeSection === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNav}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                        active
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/80 hover:bg-muted',
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2">
                <Button
                  asChild
                  className="group w-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
