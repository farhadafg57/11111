import type { LucideIcon } from 'lucide-react';
import { 
    Activity, Bot, BookOpen, Code, Lightbulb, Users, Target, BarChart, 
    Heart, Briefcase, School, TrendingUp, Zap, Workflow, Settings, 
    Network, Camera, Music, Palette, Pencil, Globe, Map, Brain, Award, Gavel, Building, Home, Plane, Apple, Pill, Stethoscope
} from 'lucide-react';

export type Agent = {
  name: string;
  slug: string;
  description: string;
  Icon: LucideIcon;
};

export const agents: Agent[] = [
  { name: 'Oracle', slug: 'oracle', description: 'Central intelligence routing commands to the perfect agent.', Icon: Brain },
  { name: 'Business Strategist', slug: 'business-strategist', description: 'Assists with business strategies.', Icon: Briefcase },
  { name: 'Code Generator', slug: 'code-generator', description: 'Generates production-ready code.', Icon: Code },
  { name: 'English Coach', slug: 'english-coach', description: 'Coaches English skills.', Icon: BookOpen },
  { name: 'Kankor Tutor', slug: 'kankor-tutor', description: 'Tutoring for the Kankor exam.', Icon: School },
  { name: 'Travel Planner', slug: 'travel-planner', description: 'Plans trips and itineraries.', Icon: Plane },
];
