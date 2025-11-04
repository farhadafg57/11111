import type { LucideIcon } from 'lucide-react';
import { Leaf, Video, Network, BrainCircuit, Eye, Mic, Languages, Combine, Shield, Scale, Box, DollarSign, TrendingUp, Search, Cog, Target, ClipboardCheck, Cloud, ShieldCheck, Banknote, Users, Truck, Landmark, HeartHandshake, Siren, AreaChart, Scan, FileScan, Building2, Receipt, Vote, Code, PenTool, Plug, TestTube2, Rocket, Paintbrush, Clapperboard, Music, Cuboid, MicVocal, Book, Megaphone, Podcast, AudioWaveform, Film } from 'lucide-react';

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
  { name: 'BizStrategy AI', description: 'Business strategy formulation.', Icon: TrendingUp },
  { name: 'MarketIntel AI', description: 'Market intelligence and analysis.', Icon: Search },
  { name: 'ProcessOptimizer AI', description: 'Business process optimization.', Icon: Cog },
  { name: 'ROI Predictor AI', description: 'Predicts return on investment.', Icon: Target },
  { name: 'Compliance Auditor AI', description: 'Audits for compliance.', Icon: ClipboardCheck },
  { name: 'CloudOps Advisor AI', description: 'Advises on cloud operations.', Icon: Cloud },
  { name: 'CyberDefense AI', description: 'Cyber defense strategies.', Icon: ShieldCheck },
  { name: 'FinOps AI', description: 'Financial operations optimization.', Icon: Banknote },
  { name: 'TalentMatch AI', description: 'Matches talent with opportunities.', Icon: Users },
  { name: 'SupplyChain Predictor AI', description: 'Predicts supply chain disruptions.', Icon: Truck },
  { name: 'E-Gov Automation AI', description: 'Automates e-governance processes.', Icon: Landmark },
  { name: 'Citizen Support AI', description: 'Provides support to citizens.', Icon: HeartHandshake },
  { name: 'Policy Simulator AI', description: 'Simulates policy outcomes.', Icon: Scale },
  { name: 'Disaster Response AI', description: 'Aids in disaster response.', Icon: Siren },
  { name: 'Population Insights AI', description: 'Provides population insights.', Icon: AreaChart },
  { name: 'Corruption Detector AI', description: 'Detects corruption.', Icon: Scan },
  { name: 'Document Digitizer AI', description: 'Digitizes documents.',
  Icon: FileScan },
  { name: 'SmartCity Planner AI', description: 'Plans smart city infrastructure.', Icon: Building2 },
  { name: 'Tax Assistant AI', description: 'Assists with tax-related queries.', Icon: Receipt },
  { name: 'Election Intel AI', description: 'Provides election intelligence.', Icon: Vote },
  { name: 'CodeGen AI (TypeScript/Node)', description: 'Generates TypeScript/Node code.', Icon: Code },
  { name: 'UI/UX Designer AI (Figma→Next.js)', description: 'Designs UI/UX from Figma to Next.js.', Icon: PenTool },
  { name: 'API Builder AI (OpenAPI→Cloud Run)', description: 'Builds APIs from OpenAPI to Cloud Run.', Icon: Plug },
  { name: 'TestSuite AI (Unit + Integration)', description: 'Generates test suites.', Icon: TestTube2 },
  { name: 'Deployment AI (CI/CD Vertex Hook)', description: 'Automates deployment.', Icon: Rocket },
  { name: 'LogoGen AI', description: 'Generates logos.', Icon: Paintbrush },
  { name: 'Video Director AI', description: 'Directs video production.', Icon: Clapperboard },
  { name: 'Music Composer AI', description: 'Composes music.', Icon: Music },
  { name: '3D Asset AI', description: 'Generates 3D assets.', Icon: Cuboid },
  { name: 'BrandVoice AI', description: 'Develops brand voice.', Icon: MicVocal },
  { name: 'Script Writer AI', description: 'Writes scripts.', Icon: Book },
  { name: 'AdCampaign AI', description: 'Manages ad campaigns.', Icon: Megaphone },
  { name: 'StoryTeller AI', description: 'Tells stories.', Icon: Book },
  { name: 'Video Podcast Studio AI', description: 'Produces video podcasts.', Icon: Podcast },
  { name: 'Music Production Studio AI', description: 'Produces music.', Icon: AudioWaveform },
];
