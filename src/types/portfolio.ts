export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  category: 'Full-Stack' | 'Backend / .NET' | 'Frontend / React';
  techStack: string[];
  metrics?: string[];
  architecture?: {
    frontend: string;
    backend: string;
    database: string;
    highlight: string;
  };
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  badge?: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  score?: string;
  highlights: string[];
  coursework: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  description?: string;
  badge?: string;
  credentialUrl?: string;
  verificationId?: string;
  badgeColor?: string;
}

export interface CoCurricular {
  id: string;
  category: 'Sports' | 'Debate & Oratory' | 'Arts & Culture';
  title: string;
  description: string;
  badge: string;
}

export interface TechSkill {
  name: string;
  category: 'Frontend' | 'Backend & APIs' | 'Database' | 'DevOps & Tools';
  level: 'Advanced' | 'Proficient' | 'Core';
  highlight: string;
}

export interface ArchitectureLayer {
  step: number;
  layer: string;
  title: string;
  tech: string[];
  description: string;
  keyResponsibilities: string[];
  iconName: string;
}
