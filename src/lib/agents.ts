import type { LucideIcon } from 'lucide-react';
import { Leaf, Video, Network, BrainCircuit, Eye, Mic, Languages, Combine, Shield, Scale, Box, DollarSign, TrendingUp, Search, Cog, Target, ClipboardCheck, Cloud, ShieldCheck, Banknote, Users, Truck, Landmark, HeartHandshake, Siren, AreaChart, Scan, FileScan, Building2, Receipt, Vote, Code, PenTool, Plug, TestTube2, Rocket, Paintbrush, Clapperboard, Music, Cuboid, MicVocal, Book, Megaphone, Podcast, AudioWaveform, Film, GraduationCap, BookOpen, MessageSquare, Wrench, ClipboardPen, FileCheck, GitBranch, HelpCircle, School, BookText, Thermometer, Pill, Smile, CalendarDays, FileCode, FileHeart, Activity, MonitorSmartphone, FileText, FlaskConical, Wallet, LineChart, ShieldAlert, Bot, MessageCircle, Users2, Star, Sun, Dumbbell, Sprout, Telescope, Microscope, Globe, Blocks, Brick, Home, View, Move, DraftingCompass, Drama, Hand, Gavel, Briefcase, LandPlot, Ear, Factory } from 'lucide-react';

export type Agent = {
  name: string;
  slug: string;
  description: string;
  Icon: LucideIcon;
};

export const agents: Agent[] = [
  // Core Agents
  { name: 'Oracle', slug: 'oracle', description: 'The central intelligence of the Hub. The Oracle analyzes your command, understands its complexity, and routes it to the perfect agent for the task.', Icon: BrainCircuit },
  
  // Existing AI Agents
  { name: 'Plant Diagnoser', slug: 'plant-diagnoser', description: 'An expert botanist specializing in diagnosing plant illnesses.', Icon: Leaf },
  { name: 'Video Generator', slug: 'video-generator', description: 'An AI that can generate videos from text or image prompts.', Icon: Video },

  // New Enterprise & GovTech Agents
  { name: 'BizStrategy AI', slug: 'bizstrategy-ai', description: 'Assists in formulating and analyzing business strategies.', Icon: TrendingUp },
  { name: 'MarketIntel AI', slug: 'marketintel-ai', description: 'Provides real-time market intelligence and analysis.', Icon: Search },
  { name: 'ProcessOptimizer AI', slug: 'processoptimizer-ai', description: 'Optimizes business processes for efficiency and cost-savings.', Icon: Cog },
  { name: 'ROI Predictor AI', slug: 'roi-predictor-ai', description: 'Predicts the potential return on investment for business decisions.', Icon: Target },
  { name: 'Compliance Auditor AI', slug: 'compliance-auditor-ai', description: 'Audits business operations for regulatory compliance.', Icon: ShieldCheck },
  { name: 'E-Gov Automation AI', slug: 'egov-automation-ai', description: 'Automates and streamlines e-governance services and workflows.', Icon: Landmark },
  { name: 'Citizen Support AI', slug: 'citizen-support-ai', description: 'Provides automated, 24/7 support for citizen inquiries.', Icon: HeartHandshake },
  { name: 'Policy Simulator AI', slug: 'policy-simulator-ai', description: 'Simulates the potential impact of public policies before implementation.', Icon: Scale },
  { name: 'Disaster Response AI', slug: 'disaster-response-ai', description: 'Coordinates and assists in disaster response efforts.', Icon: Siren },
  { name: 'Legal Advisor', slug: 'legal-advisor', description: 'Provides research and analysis for legal questions.', Icon: Gavel },
  { name: 'Document Digitizer', slug: 'document-digitizer', description: 'Digitizes and extracts information from physical documents.', Icon: FileScan },

  // New Developer & Creative Ops Agents
  { name: 'CodeGen AI', slug: 'codegen-ai', description: 'Generates production-ready code in various languages and frameworks.', Icon: Code },
  { name: 'UI/UX Designer AI', slug: 'ui-ux-designer-ai', description: 'Designs user interfaces and experiences from prompts or sketches.', Icon: PenTool },
  { name: 'API Builder AI', slug: 'api-builder-ai', description: 'Automates the creation of robust and scalable APIs.', Icon: Plug },
  { name: 'TestSuite AI', slug: 'testsuite-ai', description: 'Generates comprehensive test suites for your applications.', Icon: TestTube2 },
  { name: 'LogoGen AI', slug: 'logogen-ai', description: 'Generates unique and professional logos for your brand.', Icon: Paintbrush },
  { name: 'Video Director AI', slug: 'video-director-ai', description: 'Directs and helps create professional-quality videos.', Icon: Clapperboard },
  { name: 'Music Composer AI', slug: 'music-composer-ai', description: 'Composes original music tracks in various styles.', Icon: Music },
  { name: 'AdCampaign AI', slug: 'adcampaign-ai', description: 'Designs, manages, and optimizes advertising campaigns.', Icon: Megaphone },
  { name: 'StoryTeller AI', slug: 'storyteller-ai', description: 'Crafts compelling narratives and stories for any medium.', Icon: BookOpen },
  { name: 'App Prototyper AI', slug: 'app-prototyper-ai', description: 'Rapidly creates interactive application prototypes.', Icon: Cuboid },

  // New Education & Learning Agents
  { name: 'Kankor Tutor AI', slug: 'kankor-tutor-ai', description: 'Provides personalized tutoring for the Kankor exam.', Icon: GraduationCap },
  { name: 'Quran Tutor AI', slug: 'quran-tutor-ai', description: 'Assists with the study and understanding of the Holy Quran.', Icon: Book },
  { name: 'English Coach AI', slug: 'english-coach-ai', description: 'Coaches users in improving their English language skills.', Icon: MessageSquare },
  { name: 'SkillBuilder AI', slug: 'skillbuilder-ai', description: 'Helps users learn and develop new professional skills.', Icon: Wrench },
  { name: 'EssayEvaluator AI', slug: 'essayevaluator-ai', description: 'Evaluates and provides feedback on written essays.', Icon: FileCheck },
  { name: 'AdaptiveLearning AI', slug: 'adaptivelearning-ai', description: 'Adapts educational content to individual learning styles.', Icon: GitBranch },
  
  // New HealthTech & Wellness Agents
  { name: 'SymptomChecker AI', slug: 'symptomchecker-ai', description: 'Provides information based on reported medical symptoms.', Icon: Thermometer },
  { name: 'DrugAdvisor AI', slug_name: 'drugadvisor-ai', description: 'Offers information and advice on pharmaceuticals.', Icon: Pill },
  { name: 'MentalHealth AI Companion', slug: 'mentalhealth-ai-companion', description: 'A supportive companion for mental wellness.', Icon: Smile },
  { name: 'LabReport Analyzer AI', slug: 'labreport-analyzer-ai', description: 'Analyzes and explains medical lab reports.', Icon: FlaskConical },
  { name: 'TeleHealth AI', slug: 'telehealth-ai', description: 'Facilitates remote telehealth consultations and services.', Icon: MonitorSmartphone },
  { name: 'Medical Scribe', slug: 'medical-scribe', description: 'Automates the process of taking medical notes during consultations.', Icon: ClipboardPen },

  // New FinTech & E-Commerce Agents
  { name: 'Expense Tracker AI', slug: 'expense-tracker-ai', description: 'Tracks and categorizes personal or business expenses.', Icon: Wallet },
  { name: 'Investment Planner AI', slug: 'investment-planner-ai', description: 'Assists in creating and managing investment portfolios.', Icon: LineChart },
  { name: 'Fraud Detector AI', slug: 'fraud-detector-ai', description: 'Detects and flags fraudulent financial transactions.', Icon: ShieldAlert },
  { name: 'E-Commerce Optimizer', slug: 'ecommerce-optimizer', description: 'Optimizes e-commerce stores for sales and performance.', Icon: Factory },

  // New Communication & Social Agents
  { name: 'WhatsApp Responder AI', slug: 'whatsapp-responder-ai', description: 'Automates responses for WhatsApp Business accounts.', Icon: MessageCircle },
  { name: 'Community Moderator AI', slug: 'community-moderator-ai', description: 'Moderates online communities and forums.', Icon: Users2 },
  { name: 'Dating Coach AI', slug: 'dating-coach-ai', description: 'Provides advice on dating and profile optimization.', Icon: Star },
  { name: 'Personal Trainer AI', slug: 'personal-trainer-ai', description: 'Creates personalized workout and fitness plans.', Icon: Dumbbell },
  { name: 'Nutritionist AI', slug: 'nutritionist-ai', description: 'Provides nutritional advice and meal planning.', Icon: Sprout },
  { name: 'Sohbat Companion', slug: 'sohbat-companion', description: 'An AI companion for conversation and friendship.', Icon: Ear },
  
  // New Global & Innovation Agents
  { name: 'Trend Forecaster AI', slug: 'trend-forecaster-ai', description: 'Forecasts emerging trends in technology and culture.', Icon: TrendingUp },
  { name: 'Patent Scout AI', slug: 'patent-scout-ai', description: 'Scouts for new and relevant patents in any industry.', Icon: Search },
  { name: 'Green Tech AI', slug: 'green-tech-ai', description: 'Advises on green technology and sustainable practices.', Icon: Leaf },
  { name: 'Real Estate Command Center AI', slug: 'real-estate-command-center-ai', description: 'Analyzes real estate markets and opportunities.', Icon: Building2 },

  // New Experimental & Metaverse Agents
  { name: 'Virtual World AI', slug: 'virtual-world-ai', description: 'Builds and manages interactive virtual worlds.', Icon: Cuboid },
  { name: 'Avatar Gen AI', slug: 'avatar-gen-ai', description: 'Generates realistic and stylized user avatars.', Icon: Users },
  { name: 'Voice Clone AI', slug: 'voice-clone-ai', description: 'Clones a voice from a short audio sample.', Icon: MicVocal },
  { name: 'Emotion Synthesis AI', slug: 'emotion-synthesis-ai', description: 'Synthesizes realistic emotions for digital avatars.', Icon: Smile },
  { name: 'Consciousness Simulator AI', slug: 'consciousness-simulator-ai', description: 'An experimental agent for simulating aspects of consciousness.', Icon: BrainCircuit },

  // New Real-World Grounding Agent
  { name: 'Fact-Checker Agent', slug: 'fact-checker-agent', description: 'Verifies and fact-checks information from various sources.', Icon: ClipboardCheck },
];
