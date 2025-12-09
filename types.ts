import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface SocialPost {
  id: number;
  concept: string;
  caption: string;
  hashtags: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}