import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  text: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';