'use client';

import { useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Linkedin,
  Github,
} from 'lucide-react';
import { SiTelegram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Section, SectionHeader } from '@/components/section';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/data/site-config';
import { configuredSocialLinks } from '@/data/social-links';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Field = 'name' | 'email' | 'subject' | 'message';
type FormErrors = Partial<Record<Field, string>>;

const FIELD_ORDER: Field[] = ['name', 'email', 'subject', 'message'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMIT_TIMEOUT_MS = 15000;

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Linkedin,
  telegram: SiTelegram,
};

// Display names shown under each social link
const socialHandles: Record<string, string> = {
  github: 'mohe-12',
  telegram: 'mohe1899',
};

const contactStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const contactItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

function validate(values: Record<Field, string>): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  else if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

// Lightweight honeypot: hidden field that bots fill but humans don't.
function isSpam(honeypot: string) {
  return honeypot.trim() !== '';
}

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [deliveryError, setDeliveryError] = useState('');

  const handleChange =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeliveryError('');

    if (isSpam(honeypot)) {
      setStatus('success');
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);

    const firstInvalid = FIELD_ORDER.find((field) => validationErrors[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('Email is not configured. Please email me directly.');
      }

      const name = values.name.trim();
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name,
            from_name: name,
            email: values.email.trim(),
            reply_to: values.email.trim(),
            subject: values.subject.trim(),
            message: values.message.trim(),
          },
        }),
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        const errorDetails = await res.text();
        console.error(`EmailJS request failed (${res.status}):`, errorDetails);
        throw new Error('EmailJS could not send your message.');
      }

      setStatus('success');
      setValues({ name: '', email: '', subject: '', message: '' });
      setHoneypot('');
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus('error');

      if (err instanceof DOMException && err.name === 'AbortError') {
        setDeliveryError('The request took too long. Check your connection and try again.');
      } else {
        setDeliveryError(
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again or email me directly.',
        );
      }
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <Section id="contact" className="bg-muted/20">
        <SectionHeader
          eyebrow="Let's connect"
          title={
            <>
              <span className="text-foreground">Con</span>
              <span className="gradient-text">tact</span>
            </>
          }
          subtitle="Get in touch with me anytime."
        />
        <Card className="overflow-hidden border-border/60">
          <div className="grid min-w-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            {/* Left column: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="flex min-w-0 flex-col justify-center space-y-7 p-6 sm:p-8 lg:justify-start lg:p-10 lg:pt-8"
            >
              <div>
                <h3 className="max-w-md text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  Let&apos;s build something great.
                </h3>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  I&apos;m open to technology opportunities, including software development, IT, and AI-related roles, as well as freelance projects and collaborations.
                </p>
              </div>

              <motion.div
                className="space-y-3"
                variants={contactStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  variants={contactItem}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/40 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="block truncate font-semibold group-hover:text-primary">
                      {siteConfig.email}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </motion.a>

                {configuredSocialLinks
                  .filter((link) => link.icon !== 'mail')
                  .map((link) => {
                    const Icon = socialIcons[link.icon];
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        variants={contactItem}
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                        className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/40 p-4 transition-colors hover:border-primary/40"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm text-muted-foreground">{link.name}</span>
                          <span className="block truncate font-semibold group-hover:text-primary">
                            {socialHandles[link.icon] ?? link.name}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </motion.a>
                    );
                  })}
              </motion.div>

              <p className="flex min-w-0 items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-words">{siteConfig.location}</span>
              </p>
            </motion.div>

            {/* Right column: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="min-w-0 border-t border-border/60 bg-background/30 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
            >
              {status === 'success' ? (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Message sent!</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <motion.form
                  onSubmit={onSubmit}
                  className="space-y-6"
                  noValidate
                  variants={contactStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  {/* Honeypot field — hidden from humans */}
                  <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="company">Company (leave empty)</label>
                    <input
                      id="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <motion.div variants={contactItem}>
                    <h3 className="gradient-text text-sm font-bold uppercase tracking-[0.2em]">
                      Send a message
                    </h3>
                    <p className="mt-2 text-base text-muted-foreground md:text-lg">
                      Fill out the form below and I&apos;ll respond as soon as I can.
                    </p>
                  </motion.div>

                  <motion.div
                    className="grid min-w-0 gap-5 sm:grid-cols-2"
                    variants={contactStagger}
                  >
                    <motion.div className="min-w-0 space-y-2" variants={contactItem}>
                      <Label htmlFor="name" className="text-base font-semibold">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        autoComplete="name"
                        maxLength={100}
                        placeholder="Enter your full name"
                        value={values.name}
                        onChange={handleChange('name')}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`h-14 rounded-2xl ${errors.name ? 'border-destructive' : ''}`}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </motion.div>

                    <motion.div className="min-w-0 space-y-2" variants={contactItem}>
                      <Label htmlFor="email" className="text-base font-semibold">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        maxLength={150}
                        placeholder="your_email@gmail.com"
                        value={values.email}
                        onChange={handleChange('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`h-14 rounded-2xl ${errors.email ? 'border-destructive' : ''}`}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.div className="space-y-2" variants={contactItem}>
                    <Label htmlFor="subject" className="text-base font-semibold">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      maxLength={150}
                      placeholder="What's this about?"
                      value={values.subject}
                      onChange={handleChange('subject')}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`h-14 rounded-2xl ${errors.subject ? 'border-destructive' : ''}`}
                      disabled={status === 'submitting'}
                    />
                    {errors.subject && (
                      <p id="subject-error" role="alert" className="text-xs text-destructive">
                        {errors.subject}
                      </p>
                    )}
                  </motion.div>

                  <motion.div className="space-y-2" variants={contactItem}>
                    <div className="flex items-center justify-between gap-3">
                      <Label htmlFor="message" className="text-base font-semibold">
                        Message
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        {values.message.length} / 2000
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      placeholder="Tell me a bit more..."
                      rows={5}
                      maxLength={2000}
                      value={values.message}
                      onChange={handleChange('message')}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`min-h-40 resize-y rounded-2xl ${errors.message ? 'border-destructive' : ''}`}
                      disabled={status === 'submitting'}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </motion.div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium">Couldn&apos;t send your message.</p>
                        <p className="mt-0.5 text-xs opacity-90">
                          {deliveryError || 'Please try again, or email me directly.'}
                        </p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="mt-1 inline-block text-xs font-medium underline underline-offset-2"
                        >
                          Email me at {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  )}

                  <motion.div
                    variants={contactItem}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="h-14 w-full rounded-2xl bg-gradient-to-r from-primary via-violet-600 to-accent text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
          </div>
        </Card>
      </Section>
    </MotionConfig>
  );
}