export interface Contact {
  email: string;
  website: string;
  github: string;
  instagram: string;
  threads: string;
  linkedin: string;
}

export interface Stat {
  num: string;
  unit: string;
  label: string;
}

export interface Role {
  title: string;
  sub: string;
  points: string[];
  tools: string[];
}

export type RoleId = "designer" | "developer" | "product" | "ai";

export interface WorkItem {
  company: string;
  title: string;
  date: string;
  current?: boolean;
  badges: string[];
  description: string;
  highlights?: string[];
}

export interface Project {
  title: string;
  role: string;
  eyebrow: string;
  description?: string;
  tags?: string[];
  size: string;
  isStat?: boolean;
  hasImage?: boolean;
}

export interface SideProjectLink {
  label: string;
  href: string;
}

export interface SideProject {
  title: string;
  grade?: string;
  description: string;
  tags: string[];
  link?: SideProjectLink;
}

export interface Education {
  date: string;
  school: string;
  degree: string;
}

export interface Profile {
  name: string;
  initials: string;
  location: string;
  tagline: string;
  about: string;
  summary: string;
  contact: Contact;
  stats: Stat[];
  roles: Record<RoleId, Role>;
  skills: string[];
  work: WorkItem[];
  projects: Project[];
  sideProjects: SideProject[];
  education: Education[];
}

export type LocalizedProfileContent = Omit<
  Profile,
  "name" | "initials" | "contact"
>;
