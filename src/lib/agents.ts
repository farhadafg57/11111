
import type { LucideIcon } from 'lucide-react';
import { Leaf, Video, Network, BrainCircuit, Eye, Mic, Languages, Combine, Shield, Scale, Box, DollarSign, TrendingUp, Search, Cog, Target, ClipboardCheck, Cloud, ShieldCheck, Banknote, Users, Truck, Landmark, HeartHandshake, Siren, AreaChart, Scan, FileScan, Building2, Receipt, Vote, Code, PenTool, Plug, TestTube2, Rocket, Paintbrush, Clapperboard, Music, Cuboid, MicVocal, Book, Megaphone, Podcast, AudioWaveform, Film, GraduationCap, BookOpen, MessageSquare, Wrench, ClipboardPen, FileCheck, GitBranch, HelpCircle, School, BookText, Thermometer, Pill, Smile, CalendarDays, FileCode, FileHeart, Activity, MonitorSmartphone, FileText, FlaskConical, Wallet, LineChart, ShieldAlert, Bot, MessageCircle, Users2, Star, Sun, Dumbbell, Sprout, Telescope, Microscope, Globe, Blocks, Brick, Home, View, Move, DraftingCompass, Drama, Hand, Gavel, Briefcase, LandPlot, Ear, Factory, Brain, BotMessageSquare, Workflow, GitGraph, Database, HardDrive, Cpu, ScanSearch, KeyRound, CloudCog, Sigma, BarChart, Dna, BotIcon, Atom, Coins, CreditCard, UserCheck, PersonStanding, Lightbulb, MapPin, Handshake, HeartPulse, User, Gamepad2, UserCog, ShieldQuestion, UserRoundCog, Settings, ShoppingCart, Drama as Theater, SunSnow, Award, Newspaper, Anchor, Wind, BrainCog, Briefcase as BriefcaseBusiness, Mail, HandCoins, FileSignature, Presentation } from 'lucide-react';

export type Agent = {
  name: string;
  slug: string;
  description: string;
  Icon: LucideIcon;
};

export const agents: Agent[] = [
  // AI Core & Systems
  { name: 'Oracle', slug: 'oracle', description: 'The central intelligence of the Hub. Analyzes commands and routes them to the perfect agent.', Icon: BrainCircuit },
  { name: 'Consciousness Simulator AI', slug: 'consciousness-simulator-ai', description: 'An experimental agent for simulating aspects of consciousness.', Icon: BrainCog },
  { name: 'Orchestrator AI', slug: 'orchestrator-ai', description: 'Manages and coordinates complex, multi-agent workflows.', Icon: Workflow },
  { name: 'Context Manager AI', slug: 'context-manager-ai', description: 'Maintains and recalls context across long conversations.', Icon: BotMessageSquare },
  { name: 'Knowledge Grapher AI', slug: 'knowledge-grapher-ai', description: 'Builds and traverses knowledge graphs from data.', Icon: GitGraph },
  { name: 'NeuralInterface AI', slug: 'neuralinterface-ai', description: 'Interfaces with neural-inspired computing architectures.', Icon: Brain },
  
  // Enterprise & GovTech
  { name: 'BizStrategy AI', slug: 'bizstrategy-ai', description: 'Assists in formulating and analyzing business strategies.', Icon: BriefcaseBusiness },
  { name: 'MarketIntel AI', slug: 'marketintel-ai', description: 'Provides real-time market intelligence and analysis.', Icon: Search },
  { name: 'ProcessOptimizer AI', slug: 'processoptimizer-ai', description: 'Optimizes business processes for efficiency and cost-savings.', Icon: Cog },
  { name: 'ROI Predictor AI', slug: 'roi-predictor-ai', description: 'Predicts the potential return on investment for business decisions.', Icon: Target },
  { name: 'HRManager AI', slug: 'hrmanager-ai', description: 'Assists with human resources tasks, from recruitment to employee engagement.', Icon: Users },
  { name: 'Compliance Auditor AI', slug: 'compliance-auditor-ai', description: 'Audits business operations for regulatory compliance.', Icon: ShieldCheck },
  { name: 'Legal Advisor', slug: 'legal-advisor', description: 'Provides research and analysis for legal questions.', Icon: Gavel },
  { name: 'E-Gov Automation AI', slug: 'egov-automation-ai', description: 'Automates and streamlines e-governance services and workflows.', Icon: Landmark },
  { name: 'Citizen Support AI', slug: 'citizen-support-ai', description: 'Provides automated, 24/7 support for citizen inquiries.', Icon: HeartHandshake },
  { name: 'Policy Simulator AI', slug: 'policy-simulator-ai', description: 'Simulates the potential impact of public policies before implementation.', Icon: Scale },
  { name: 'ProcurementBot AI', slug: 'procurementbot-ai', description: 'Automates and optimizes procurement and purchasing processes.', Icon: ShoppingCart },
  { name: 'LogisticsOptimizer AI', slug: 'logisticsoptimizer-ai', description: 'Optimizes logistics and transportation routes for efficiency.', Icon: Truck },
  { name: 'SupplyChainOptimizer AI', slug: 'supplychainoptimizer-ai', description: 'Analyzes and optimizes complex supply chain operations.', Icon: Network },

  // Developer & Creative Ops
  { name: 'CodeGen AI', slug: 'codegen-ai', description: 'Generates production-ready code in various languages and frameworks.', Icon: Code },
  { name: 'UI/UX Designer AI', slug: 'ui-ux-designer-ai', description: 'Designs user interfaces and experiences from prompts or sketches.', Icon: PenTool },
  { name: 'API Builder AI', slug: 'api-builder-ai', description: 'Automates the creation of robust and scalable APIs.', Icon: Plug },
  { name: 'TestSuite AI', slug: 'testsuite-ai', description: 'Generates comprehensive test suites for your applications.', Icon: TestTube2 },
  { name: 'DevOpsAuto AI', slug: 'devopsauto-ai', description: 'Automates DevOps tasks like CI/CD, monitoring, and deployment.', Icon: Rocket },
  { name: 'CyberSecurity Analyst AI', slug: 'cybersecurity-analyst-ai', description: 'Analyzes and defends against cybersecurity threats.', Icon: ShieldAlert },
  { name: 'DataScientistAid AI', slug: 'datascientistaid-ai', description: 'Assists data scientists with analysis, modeling, and visualization.', Icon: Sigma },

  // Education & Learning
  { name: 'Kankor Tutor AI', slug: 'kankor-tutor-ai', description: 'Provides personalized tutoring for the Kankor exam.', Icon: GraduationCap },
  { name: 'Quran Tutor AI', slug: 'quran-tutor-ai', description: 'Assists with the study and understanding of the Holy Quran.', Icon: Book },
  { name: 'English Coach AI', slug: 'english-coach-ai', description: 'Coaches users in improving their English language skills.', Icon: MessageSquare },
  { name: 'SkillBuilder AI', slug: 'skillbuilder-ai', description: 'Helps users learn and develop new professional skills.', Icon: Wrench },
  { name: 'EssayEvaluator AI', slug: 'essayevaluator-ai', description: 'Evaluates and provides feedback on written essays.', Icon: FileCheck },
  { name: 'ExamPrepper AI', slug: 'examprepper-ai', description: 'Helps students prepare for a wide range of exams and tests.', Icon: School },
  { name: 'CareerMentor AI', slug: 'careermentor-ai', description: 'Provides guidance and mentorship for professional career development.', Icon: UserCog },
  { name: 'LanguageExchange AI', slug: 'languageexchange-ai', description: 'Facilitates language practice with AI conversation partners.', Icon: Languages },
  { name: 'PublicSpeaker AI', slug: 'publicspeaker-ai', description: 'Helps users practice and improve their public speaking skills.', Icon: Megaphone },
  { name: 'TranslatorPro AI', slug: 'translatorpro-ai', description: 'Provides advanced, context-aware translations for professional use.', Icon: Languages },
  { name: 'CV Generator', slug: 'cv-generator', description: 'Creates professional CVs and resumes from your information.', Icon: FileSignature },
  { name: 'Proposal Writer', slug: 'proposal-writer', description: 'Generates persuasive proposals for business, grants, or projects.', Icon: Presentation },


  // HealthTech & Wellness
  { name: 'SymptomChecker AI', slug: 'symptomchecker-ai', description: 'Provides information based on reported medical symptoms.', Icon: Thermometer },
  { name: 'DrugAdvisor AI', slug: 'drugadvisor-ai', description: 'Offers information and advice on pharmaceuticals.', Icon: Pill },
  { name: 'MentalHealth AI Companion', slug: 'mentalhealth-ai-companion', description: 'A supportive companion for mental wellness.', Icon: Smile },
  { name: 'LabReport Analyzer AI', slug: 'labreport-analyzer-ai', description: 'Analyzes and explains medical lab reports.', Icon: FlaskConical },
  { name: 'TeleHealth AI', slug: 'telehealth-ai', description: 'Facilitates remote telehealth consultations and services.', Icon: MonitorSmartphone },
  { name: 'Dietitian AI', slug: 'dietitian-ai', description: 'Provides personalized dietary advice and meal planning.', Icon: HandCoins },
  { name: 'Nutritionist AI', slug: 'nutritionist-ai', description: 'Provides nutritional advice and meal planning.', Icon: Sprout },
  { name: 'Personal Trainer AI', slug: 'personal-trainer-ai', description: 'Creates personalized workout and fitness plans.', Icon: Dumbbell },
  { name: 'FitnessCoach AI', slug: 'fitnesscoach-ai', description: 'Guides users through workouts and fitness routines.', Icon: Activity },

  // FinTech & E-Commerce
  { name: 'Expense Tracker AI', slug: 'expense-tracker-ai', description: 'Tracks and categorizes personal or business expenses.', Icon: Wallet },
  { name: 'Investment Planner AI', slug: 'investment-planner-ai', description: 'Assists in creating and managing investment portfolios.', Icon: LineChart },
  { name: 'FinancialPlanner AI', slug: 'financialplanner-ai', description: 'Provides comprehensive financial planning and advice.', Icon: Banknote },
  { name: 'Fraud Detector AI', slug: 'fraud-detector-ai', description: 'Detects and flags fraudulent financial transactions.', Icon: ShieldAlert },
  { name: 'E-Commerce Optimizer', slug: 'ecommerce-optimizer', description: 'Optimizes e-commerce stores for sales and performance.', Icon: Factory },
  { name: 'TaxAdvisor AI', slug: 'taxadvisor-ai', description: 'Provides advice and assistance with tax-related queries.', Icon: Receipt },
  { name: 'GrantWriter AI', slug: 'grantwriter-ai', description: 'Assists in writing and preparing grant proposals.', Icon: Award },

  // Communication & Social
  { name: 'WhatsApp Responder AI', slug: 'whatsapp-responder-ai', description: 'Automates responses for WhatsApp Business accounts.', Icon: MessageCircle },
  { name: 'Community Moderator AI', slug: 'community-moderator-ai', description: 'Moderates online communities and forums.', Icon: Users2 },
  { name: 'Dating Coach AI', slug: 'dating-coach-ai', description: 'Provides advice on dating and profile optimization.', Icon: Star },
  { name: 'SentimentAnalyzer AI', slug: 'sentimentanalyzer-ai', description: 'Analyzes and reports on sentiment in text and social media.', Icon: HeartPulse },
  { name: 'SocialMediaManager AI', slug: 'socialmediamanager-ai', description: 'Manages social media accounts, from posting to analytics.', Icon: Mail },

  // Sensory & Data Intelligence
  { name: 'Vision AI', slug: 'vision-ai', description: 'Analyzes and understands the content of images and videos.', Icon: Eye },
  { name: 'Document Digitizer', slug: 'document-digitizer', description: 'Digitizes and extracts information from physical documents.', Icon: FileScan },
  { name: 'DataViz AI', slug: 'dataviz-ai', description: 'Creates insightful data visualizations from raw data.', Icon: BarChart },
  { name: 'AdCampaign AI', slug: 'adcampaign-ai', description: 'Designs, manages, and optimizes advertising campaigns.', Icon: Megaphone },
  { name: 'AR Designer AI', slug: 'ar-designer-ai', description: 'Designs and develops augmented reality experiences.', Icon: View },
  { name: 'Avatar Gen AI', slug: 'avatar-gen-ai', description: 'Generates realistic and stylized user avatars.', Icon: User },
  { name: 'LogoGen AI', slug: 'logogen-ai', description: 'Generates unique and professional logos for your brand.', Icon: Paintbrush },
  { name: 'StoryTeller AI', slug: 'storyteller-ai', description: 'Crafts compelling narratives and stories for any medium.', Icon: BookOpen },
  { name: 'Video Director AI', slug: 'video-director-ai', description: 'Directs and helps create professional-quality videos.', Icon: Clapperboard },
  { name: 'UrbanPlanner AI', slug: 'urbanplanner-ai', description: 'Assists in urban planning and architectural design.', Icon: Building2 },

  // Audio & Speech Intelligence
  { name: 'Speech-to-Text AI', slug: 'speech-to-text-ai', description: 'Transcribes spoken language into written text.', Icon: Mic },
  { name: 'AdaptiveLearning AI', slug: 'adaptivelearning-ai', description: 'Adapts educational content to individual learning styles.', Icon: GitBranch },
  { name: 'Emotion Synthesis AI', slug: 'emotion-synthesis-ai', description: 'Synthesizes realistic emotions for digital avatars.', Icon: Smile },
  { name: 'Medical Scribe', slug: 'medical-scribe', description: 'Automates the process of taking medical notes during consultations.', Icon: ClipboardPen },
  { name: 'Music Composer AI', slug: 'music-composer-ai', description: 'Composes original music tracks in various styles.', Icon: Music },
  { name: 'MusicGen AI', slug: 'musicgen-ai', description: 'Generates novel musical compositions from prompts.', Icon: AudioWaveform },
  { name: 'Sohbat Companion', slug: 'sohbat-companion', description: 'An AI companion for conversation and friendship.', Icon: Ear },
  { name: 'Voice Clone AI', slug: 'voice-clone-ai', description: 'Clones a voice from a short audio sample.', Icon: MicVocal },

  // Real-World Grounding
  { name: 'Fact-Checker Agent', slug: 'fact-checker-agent', description: 'Verifies and fact-checks information from various sources.', Icon: ClipboardCheck },
  { name: 'Local Guide AI', slug: 'local-guide-ai', description: 'Provides local information, directions, and recommendations.', Icon: MapPin },
  { name: 'ResearchAssistant AI', slug: 'researchassistant-ai', description: 'Assists with academic and scientific research tasks.', Icon: BookText },
  { name: 'Disaster Response AI', slug: 'disaster-response-ai', description: 'Coordinates and assists in disaster response efforts.', Icon: Siren },
  { name: 'EmergencyResponder AI', slug: 'emergencyresponder-ai', description: 'Provides immediate information and guidance in emergencies.', Icon: ShieldQuestion },
  { name: 'ClimateData AI', slug: 'climatedata-ai', description: 'Analyzes and visualizes global and local climate data.', Icon: SunSnow },
  { name: 'CryptoAnalyst AI', slug: 'cryptoanalyst-ai', description: 'Analyzes cryptocurrency markets, trends, and on-chain data.', Icon: Coins },
  { name: 'GlobalNewsFeed AI', slug: 'globalnewsfeed-ai', description: 'Aggregates and summarizes news from around the world.', Icon: Newspaper },
  { name: 'InnovationScout AI', slug: 'innovationscout-ai', description: 'Scouts for emerging technologies and innovative ideas.', Icon: Lightbulb },

  // Emerging Tech & Virtual Worlds
  { name: 'Virtual World AI', slug: 'virtual-world-ai', description: 'Builds and manages interactive virtual worlds.', Icon: Cuboid },
  { name: 'GameDev AI', slug: 'gamedev-ai', description: 'Assists in various aspects of game development, from design to coding.', Icon: Gamepad2 },
  { name: 'MetaverseArchitect AI', slug: 'metaversearchitect-ai', description: 'Designs and constructs environments and experiences for the metaverse.', Icon: Cuboid },
  { name: 'RoboticsControl AI', slug: 'roboticscontrol-ai', description: 'Designs and controls the behavior of robotic systems.', Icon: Bot },
  { name: 'Green Tech AI', slug: 'green-tech-ai', description: 'Advises on green technology and sustainable practices.', Icon: Leaf },
  { name: 'Patent Scout AI', slug: 'patent-scout-ai', description: 'Scouts for new and relevant patents in any industry.', Icon: ScanSearch },
  { name: 'Real Estate Command Center AI', slug: 'real-estate-command-center-ai', description: 'Analyzes real estate markets and opportunities.', Icon: Building2 },
  { name: 'Trend Forecaster AI', slug: 'trend-forecaster-ai', description: 'Forecasts emerging trends in technology and culture.', Icon: TrendingUp },
];
