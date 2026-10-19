import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLaravel,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
} from 'react-icons/si';
import { Sparkles } from 'lucide-react';

export type TechIconName =
  | 'react'
  | 'nextjs'
  | 'javascript'
  | 'html5'
  | 'css3'
  | 'nodejs'
  | 'express'
  | 'mongodb'
  | 'laravel'
  | 'git'
  | 'github'
  | 'tailwind'
  | 'php'
  | 'mysql'
  | 'postman'
  | 'vscode'
  | 'vercel'
  | 'api'
  | 'sparkles';

const iconMap: Record<
  TechIconName,
  React.ComponentType<{
    className?: string;
    title?: string;
    style?: React.CSSProperties;
  }>
> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  laravel: SiLaravel,
  git: SiGit,
  github: SiGithub,
  tailwind: SiTailwindcss,
  php: SiPhp,
  mysql: SiMysql,
  postman: SiPostman,
  vscode: SiVisualstudiocode,
  vercel: SiVercel,
  api: SiReact,
  sparkles: Sparkles,
};

export function TechIcon({
  name,
  className,
  title,
  style,
}: {
  name: string;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}) {
  const Icon = iconMap[name as TechIconName] ?? SiReact;
  return <Icon className={className} title={title} style={style} />;
}
