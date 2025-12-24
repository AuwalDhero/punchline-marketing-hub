import React from 'react';
import { 
  BarChart3, 
  Lightbulb, 
  Users, 
  Target, 
  Target as TargetIcon, 
  Search, 
  Award, 
  Globe,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Service, Stat } from './types';

/**
 * LOGO COMPONENT
 * Fixed for GitHub Pages deployment
 */
export const PMH_LOGO = (className = "h-20 w-auto") => ( 
  <img 
    // REMOVED the leading slash so it works inside the subfolder
    src="resources/logo.png" 
    alt="Punchline Marketing Hub" 
    className={`${className} object-contain transition-all`} 
    style={{ minWidth: '100px' }} 
    onError={(e) => {
      // Fallback if the path is still tricky
      const target = e.target as HTMLImageElement;
      if (target.src !== 'https://via.placeholder.com/250x60?text=PMH+LOGO') {
        target.src = 'https://via.placeholder.com/250x60?text=PMH+LOGO';
      }
    }}
  />
);

/**
 * SERVICES DATA
 */
export const SERVICES: Service[] = [
  {
    id: 'consultancy',
    title: 'Strategic Consultancy',
    description: 'Bespoke marketing strategies that bridge global best practices with Nigerian market nuances.',
    longDescription: 'We help you navigate the complex Nigerian consumer landscape with precision-engineered strategies. Our consultancy service covers brand positioning, market entry strategy, and long-term growth roadmaps tailored for sustainable success.',
    icon: 'Target'
  },
  {
    id: 'training',
    title: 'Transformative Training',
    description: 'Empowering your sales and marketing teams with practical, expert-led skills for the modern era.',
    longDescription: 'Bridge the skill gap in your organization with our intensive training programs. We focus on modern sales techniques, data literacy for marketers, and leadership transformation that drives measurable performance improvements.',
    icon: 'Users'
  },
  {
    id: 'research',
    title: 'Data-Driven Research',
    description: 'Uncovering actionable insights through deep-dive market research and consumer behavior analysis.',
    longDescription: 'Stop guessing and start knowing. Our research arm utilizes advanced methodology to analyze market trends, competitor movements, and consumer sentiment across all 36 states of Nigeria.',
    icon: 'Search'
  }
];

/**
 * STATS DATA
 */
export const STATS: Stat[] = [
  { label: 'Average ROI', value: '3', suffix: 'x' },
  { label: 'Revenue Growth', value: '+120', suffix: '%' },
  { label: 'Consulted Brands', value: '150', suffix: '+' },
  { label: 'Trained Professionals', value: '5k', suffix: '+' }
];

/**
 * COURSES DATA 
 * (Replaced Case Studies)
 * Paid courses range between ₦10,000 - ₦20,000
 */
export const COURSES = [
  { 
    id: 1, 
    title: 'Sales Mastery Accelerator', 
    description: 'Advanced techniques to close high-ticket deals in the Nigerian market.', 
    duration: '6 Weeks', 
    price: 15000, 
    type: 'paid', 
    category: 'Sales', 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    title: 'Foundations of Growth Marketing', 
    description: 'Understand the basics of data-driven marketing for early startups.', 
    duration: 'Self-paced', 
    price: 0, 
    type: 'free', 
    category: 'Marketing', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    title: 'Strategic Leadership for Executives', 
    description: 'Build high-performance teams and navigate business complexity.', 
    duration: '4 Weeks', 
    price: 20000, 
    type: 'paid', 
    category: 'Leadership', 
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    title: 'Customer Experience Protocol', 
    description: 'The blueprint for world-class service that builds loyal fans.', 
    duration: '3 Weeks', 
    price: 10000, 
    type: 'paid', 
    category: 'Service', 
    image: 'https://images.unsplash.com/photo-1556740734-7f9a2b7a0f4d?auto=format&fit=crop&q=80' 
  }
];

/**
 * EVENTS & MASTERCLASSES DATA
 */
export const EVENTS = [
  { 
    id: 1,
    title: 'Q4 Sales Strategy Intensive', 
    date: 'October 15, 2024', 
    location: 'Victoria Island, Lagos', 
    type: 'Physical Masterclass',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
  },
  { 
    id: 2,
    title: 'Consumer Psychology & Branding', 
    date: 'November 20, 2024', 
    location: 'Abuja / Virtual', 
    type: 'Hybrid Workshop',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f1?auto=format&fit=crop&q=80'
  },
  { 
    id: 3,
    title: 'The Art of High-Ticket Closing', 
    date: 'December 05, 2024', 
    location: 'Virtual (Zoom)', 
    type: 'Webinar',
    image: 'https://images.unsplash.com/photo-1591115765373-520b7a217294?auto=format&fit=crop&q=80'
  }
];