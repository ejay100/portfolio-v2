export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  category: 'frontend' | 'business' | 'cloud';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: 'project' | 'consultation' | 'other';
}

export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}
