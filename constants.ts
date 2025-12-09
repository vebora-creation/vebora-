import { Layout, Globe, Search, Share2, Bot, Megaphone } from 'lucide-react';
import { NavItem, Service, PricingPackage, SEOData, SocialPost } from './types';

export const COMPANY_NAME = "Vebora";
export const COMPANY_PHONE = "+94 781 99 9468"; // WhatsApp
export const COMPANY_LOCATION = "Global";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    description: 'Custom, responsive, and high-performance websites tailored to your global brand identity.',
    icon: Layout
  },
  {
    id: 'seo',
    title: 'Global SEO Optimization',
    description: 'Rank higher on Google with our data-driven SEO strategies and international targeting.',
    icon: Search
  },
  {
    id: 'social-media',
    title: 'Social Media Design',
    description: 'Engaging visuals and strategic content to grow your audience on FB, Insta, and LinkedIn.',
    icon: Share2
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive campaigns including PPC, email marketing, and conversion optimization.',
    icon: Megaphone
  },
  {
    id: 'ai-solutions',
    title: 'AI-Based Solutions',
    description: 'Leverage the power of Gemini and other AI models to automate your business workflows.',
    icon: Bot
  },
  {
    id: 'branding',
    title: 'Brand Strategy',
    description: 'Complete branding kits including logos, color palettes, and voice guidelines.',
    icon: Globe
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    name: 'Basic Package',
    price: '$299',
    features: [
      '3 Page Professional Website',
      'Basic SEO Setup',
      'Mobile Responsive Design',
      'Contact Form Integration',
      '6 Months Free Support',
      'Domain & Hosting Setup Assistance'
    ]
  },
  {
    name: 'Standard Package',
    price: '$599',
    features: [
      '6 Page Premium Website',
      'Full SEO Optimization',
      'Blog / News Section',
      'Social Media Integration',
      'Speed Optimization',
      '1 Year Free Support',
      'Google Analytics Setup'
    ],
    recommended: true
  },
  {
    name: 'Custom Package',
    price: 'Custom Quote',
    features: [
      'Unlimited Pages',
      'E-commerce Functionality',
      'Custom Web Applications',
      'AI Chatbot Integration',
      'Advanced Animations',
      'Priority 24/7 Support',
      'Dedicated Project Manager'
    ]
  }
];

export const SEO_INFO: SEOData = {
  title: "Vebora - Web Design & Digital Marketing",
  description: "Vebora provides premium web design, SEO, and AI solutions. Transform your digital presence with our expert team.",
  keywords: ["Web Design", "SEO Expert", "Digital Marketing Agency", "Vebora", "Website Development"]
};

export const SOCIAL_CONTENT: SocialPost[] = [
  {
    id: 1,
    concept: "Launch Announcement",
    caption: "🚀 Elevate your business with Vebora! We bring top-tier web design and AI solutions to the global market. Ready to transform your digital presence? Click the link in bio!",
    hashtags: "#Vebora #WebDesign #DigitalMarketing #BusinessGrowth"
  },
  {
    id: 2,
    concept: "SEO Educational",
    caption: "🔍 Is your website invisible on Google? Good design is nothing without SEO. Swipe left to see how we optimized our latest client to #1. ",
    hashtags: "#SEOTips #GoogleRanking #GlobalBusiness #SEOExpert"
  }
];

export const BRANDING_KIT = {
  colors: [
    { name: 'Deep Navy', hex: '#0f172a' },
    { name: 'Neon Teal', hex: '#2dd4bf' },
    { name: 'Cyan', hex: '#06b6d4' },
  ],
  fonts: ['Inter (Primary)', 'Poppins (Headings)'],
  slogans: [
    "Digital Excellence, Delivered.",
    "Innovate. Optimize. Grow.",
    "Your Vision, Our Digital Craft."
  ]
};