import type { LucideIcon } from 'lucide-react';
import { Leaf, Video, Network, BrainCircuit, Eye, Mic, Languages, Combine, Shield, Scale, Box, DollarSign } from 'lucide-react';

export type Agent = {
  name: string;
  description: string;
  Icon: LucideIcon;
};

export const agents: Agent[] = [
  {
    name: 'PlantDiagnoser',
    description: 'An expert botanist specializing in diagnosing plant illnesses.',
    Icon: Leaf,
  },
  {
    name: 'VideoGenerator',
    description: 'An AI that can generate videos from text or image prompts.',
    Icon: Video,
  },
  {
    name: 'AfgCore Orchestrator',
    description: 'Manages agent lifecycle, scaling, and routing.',
    Icon: Network,
  },
  {
    name: 'AfgMemory Engine',
    description: 'Manages user context and cross-agent insights.',
    Icon: BrainCircuit,
  },
  {
    name: 'AfgVision Agent',
    description: 'Image/video understanding.',
    Icon: Eye,
  },
  {
    name: 'AfgVoice Agent',
    description: 'Real-time speech-to-text pipeline.',
    Icon: Mic,
  },
  {
    name: 'AfgLang Router',
    description: '60+ language translation & adaptation.',
    Icon: Languages,
  },
  {
    name: 'AfgData Fusion',
    description: 'Creates knowledge graphs from multi-modal data.',
    Icon: Combine,
  },
  {
    name: 'AfgSecurity Guardian',
    description: 'Zero-trust AI monitor and access control.',
    Icon: Shield,
  },
  {
    name: 'AfgEthics Core',
    description: 'Bias detection, audit, and AI compliance.',
    Icon: Scale,
  },
  {
    name: 'AfgMLOps Manager',
    description: 'Automates Vertex AI pipeline deployment.',
    Icon: Box,
  },
  {
    name: 'AfgCost Optimizer',
    description: 'Real-time spend balancer.',
    Icon: DollarSign,
  },
];
