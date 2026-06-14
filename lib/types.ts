export type Category = 'spatial' | 'backend' | 'ml' | 'ai' | 'other';

export interface CaseStudy {
  challenge: string;
  solution: string;
  implementation: string[];
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  architectureDiagram?: string; // Mermaid.js or SVG path
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  description: string;
  category: Category;
  url?: string;
  metrics?: string[];
  caseStudy?: CaseStudy;
  type: 'experience';
}

export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  description: string;
  category: Category;
  url?: string;
  metrics?: string[];
  caseStudy?: CaseStudy;
  type: 'project';
}

export type PortfolioItem =
  | (Experience & { type: 'experience' })
  | (Project & { type: 'project' });

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
  category: Category;
}

export interface TechStackItem {
  name: string;
  category: 'Language' | 'Framework' | 'Database' | 'Infrastructure' | 'Tool';
  level: 'Basic' | 'Expert' | 'Advanced' | 'Intermediate';
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  svgPath: string;
  verifyUrl: string;
}

export interface TelemetryLog {
  timestamp: string;
  source: string;
  message: string;
  type: 'backend' | 'spatial' | 'ml';
}