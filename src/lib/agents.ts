import type { LucideIcon } from 'lucide-react';
import { Leaf, Video } from 'lucide-react';

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
];
