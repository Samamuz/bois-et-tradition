import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Cuisine' | 'Mobilier' | 'Architecture' | 'Extérieur';
  image: string;
  location: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
