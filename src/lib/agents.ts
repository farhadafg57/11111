
import type { LucideIcon } from 'lucide-react';
import { Leaf, Video, Network, BrainCircuit, Eye, Mic, Languages, Combine, Shield, Scale, Box, DollarSign, TrendingUp, Search, Cog, Target, ClipboardCheck, Cloud, ShieldCheck, Banknote, Users, Truck, Landmark, HeartHandshake, Siren, AreaChart, Scan, FileScan, Building2, Receipt, Vote, Code, PenTool, Plug, TestTube2, Rocket, Paintbrush, Clapperboard, Music, Cuboid, MicVocal, Book, Megaphone, Podcast, AudioWaveform, Film, GraduationCap, BookOpen, MessageSquare, Wrench, ClipboardPen, FileCheck, GitBranch, HelpCircle, School, BookText, Thermometer, Pill, Smile, CalendarDays, FileCode, FileHeart, Activity, MonitorSmartphone, FileText, FlaskConical, Wallet, LineChart, ShieldAlert, Bot, MessageCircle, Users2, Star, Sun, Dumbbell, Sprout, Telescope, Microscope, Globe, Blocks, Brick, Home, View, Move, DraftingCompass, Drama, Hand, Gavel, Briefcase, LandPlot, Ear, Factory, Brain, BotMessageSquare, Workflow, GitGraph, Database, HardDrive, Cpu, ScanSearch, KeyRound, CloudCog, Sigma, BarChart, Dna, BotIcon, Atom, Coins, CreditCard, UserCheck, PersonStanding, Lightbulb, MapPin, HeartPulse, Handshake } from 'lucide-react';

export type Agent = {
  name: string;
  slug: string;
  description: string;
  Icon: LucideIcon;
};

export const agents: Agent[] = [
  // AI Core & Systems
  { name: 'Oracle', slug: 'oracle', description: 'The central intelligence of the Hub. Analyzes commands and routes them to the perfect agent.', Icon: BrainCircuit },
  { name: 'Orchestrator AI', slug: 'orchestrator-ai', description: 'Manages and coordinates complex, multi-agent workflows.', Icon: Workflow },
  { name: 'Context Manager AI', slug: 'context-manager-ai', description: 'Maintains and recalls context across long conversations.', Icon: BotMessageSquare },
  { name: 'Knowledge Grapher AI', slug: 'knowledge-grapher-ai', description: 'Builds and traverses knowledge graphs from data.', Icon: GitGraph },
  { name: 'Oracle AI', slug: 'oracle-ai', description: 'The central intelligence of the Hub. Analyzes commands and routes them to the perfect agent.', Icon: BrainCircuit },

  // Enterprise & GovTech
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

  // Developer & Creative Ops
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

  // Education & Learning
  { name: 'Kankor Tutor AI', slug: 'kankor-tutor-ai', description: 'Provides personalized tutoring for the Kankor exam.', Icon: GraduationCap },
  { name: 'Quran Tutor AI', slug: 'quran-tutor-ai', description: 'Assists with the study and understanding of the Holy Quran.', Icon: Book },
  { name: 'English Coach AI', slug: 'english-coach-ai', description: 'Coaches users in improving their English language skills.', Icon: MessageSquare },
  { name: 'SkillBuilder AI', slug: 'skillbuilder-ai', description: 'Helps users learn and develop new professional skills.', Icon: Wrench },
  { name: 'EssayEvaluator AI', slug: 'essayevaluator-ai', description: 'Evaluates and provides feedback on written essays.', Icon: FileCheck },
  { name: 'AdaptiveLearning AI', slug: 'adaptivelearning-ai', description: 'Adapts educational content to individual learning styles.', Icon: GitBranch },

  // HealthTech & Wellness
  { name: 'SymptomChecker AI', slug: 'symptomchecker-ai', description: 'Provides information based on reported medical symptoms.', Icon: Thermometer },
  { name: 'DrugAdvisor AI', slug: 'drugadvisor-ai', description: 'Offers information and advice on pharmaceuticals.', Icon: Pill },
  { name: 'MentalHealth AI Companion', slug: 'mentalhealth-ai-companion', description: 'A supportive companion for mental wellness.', Icon: Smile },
  { name: 'LabReport Analyzer AI', slug: 'labreport-analyzer-ai', description: 'Analyzes and explains medical lab reports.', Icon: FlaskConical },
  { name: 'TeleHealth AI', slug: 'telehealth-ai', description: 'Facilitates remote telehealth consultations and services.', Icon: MonitorSmartphone },
  { name: 'Medical Scribe', slug: 'medical-scribe', description: 'Automates the process of taking medical notes during consultations.', Icon: ClipboardPen },

  // FinTech & E-Commerce
  { name: 'Expense Tracker AI', slug: 'expense-tracker-ai', description: 'Tracks and categorizes personal or business expenses.', Icon: Wallet },
  { name: 'Investment Planner AI', slug: 'investment-planner-ai', description: 'Assists in creating and managing investment portfolios.', Icon: LineChart },
  { name: 'Fraud Detector AI', slug: 'fraud-detector-ai', description: 'Detects and flags fraudulent financial transactions.', Icon: ShieldAlert },
  { name: 'E-Commerce Optimizer', slug: 'ecommerce-optimizer', description: 'Optimizes e-commerce stores for sales and performance.', Icon: Factory },

  // Communication & Social
  { name: 'WhatsApp Responder AI', slug: 'whatsapp-responder-ai', description: 'Automates responses for WhatsApp Business accounts.', Icon: MessageCircle },
  { name: 'Community Moderator AI', slug: 'community-moderator-ai', description: 'Moderates online communities and forums.', Icon: Users2 },
  { name: 'Dating Coach AI', slug: 'dating-coach-ai', description: 'Provides advice on dating and profile optimization.', Icon: Star },
  { name: 'Personal Trainer AI', slug: 'personal-trainer-ai', description: 'Creates personalized workout and fitness plans.', Icon: Dumbbell },
  { name: 'Nutritionist AI', slug: 'nutritionist-ai', description: 'Provides nutritional advice and meal planning.', Icon: Sprout },
  { name: 'Sohbat Companion', slug: 'sohbat-companion', description: 'An AI companion for conversation and friendship.', Icon: Ear },

  // Global & Innovation
  { name: 'Trend Forecaster AI', slug: 'trend-forecaster-ai', description: 'Forecasts emerging trends in technology and culture.', Icon: TrendingUp },
  { name: 'Patent Scout AI', slug: 'patent-scout-ai', description: 'Scouts for new and relevant patents in any industry.', Icon: ScanSearch },
  { name: 'Green Tech AI', slug: 'green-tech-ai', description: 'Advises on green technology and sustainable practices.', Icon: Leaf },
  { name: 'Real Estate Command Center AI', slug: 'real-estate-command-center-ai', description: 'Analyzes real estate markets and opportunities.', Icon: Building2 },

  // Experimental & Metaverse
  { name: 'Virtual World AI', slug: 'virtual-world-ai', description: 'Builds and manages interactive virtual worlds.', Icon: Cuboid },
  { name: 'Avatar Gen AI', slug: 'avatar-gen-ai', description: 'Generates realistic and stylized user avatars.', Icon: Users },
  { name: 'Voice Clone AI', slug: 'voice-clone-ai', description: 'Clones a voice from a short audio sample.', Icon: MicVocal },
  { name: 'Emotion Synthesis AI', slug: 'emotion-synthesis-ai', description: 'Synthesizes realistic emotions for digital avatars.', Icon: Smile },
  { name: 'Consciousness Simulator AI', slug: 'consciousness-simulator-ai', description: 'An experimental agent for simulating aspects of consciousness.', Icon: Brain },
  
  // Real-World Grounding
  { name: 'Fact-Checker Agent', slug: 'fact-checker-agent', description: 'Verifies and fact-checks information from various sources.', Icon: ClipboardCheck },
  { name: 'Local Guide AI', slug: 'local-guide-ai', description: 'Provides local information, directions, and recommendations.', Icon: MapPin },

  // Advanced Media & Content
  { name: 'Vision AI', slug: 'vision-ai', description: 'Analyzes and understands the content of images and videos.', Icon: Eye },
  { name: 'Speech-to-Text AI', slug: 'speech-to-text-ai', description: 'Transcribes spoken language into written text.', Icon: Mic },
  { name: 'Translator AI', slug: 'translator-ai', description: 'Translates text and speech between different languages.', Icon: Languages },
  { name: 'Video Generator AI', slug: 'video-generator-ai', description: 'Generates video content from text or image prompts.', Icon: Video },
  { name: '3D Asset Creator AI', slug: '3d-asset-creator-ai', description: 'Creates 3D models and assets from text or images.', Icon: Box },
  { name: 'Podcast Producer AI', slug: 'podcast-producer-ai', description: 'Automates aspects of podcast production, from editing to show notes.', Icon: Podcast },
  { name: 'Music Producer AI', slug: 'music-producer-ai', description: 'Produces and composes full music tracks with multiple instruments.', Icon: Music },
  { name: 'Audio Producer AI', slug: 'audio-producer-ai', description: 'Generates and manipulates audio, sound effects, and voiceovers.', Icon: AudioWaveform },

  // Security & DevOps
  { name: 'Security Monitor AI', slug: 'security-monitor-ai', description: 'Monitors systems for security threats and vulnerabilities in real-time.', Icon: Shield },
  { name: 'Compliance Inspector AI', slug: 'compliance-inspector-ai', description: 'Inspects infrastructure and code for compliance with standards.', Icon: FileCheck },
  { name: 'Pipeline Architect AI', slug: 'pipeline-architect-ai', description: 'Designs and implements CI/CD and data pipelines.', Icon: GitBranch },
  { name: 'Cloud Advisor AI', slug: 'cloud-advisor-ai', description: 'Provides advice on cloud architecture, cost optimization, and security.', Icon: CloudCog },
  { name: 'Cyber Defender AI', slug: 'cyber-defender-ai', description: 'Actively defends against and responds to cyber attacks.', Icon: ShieldAlert },
  { name: 'Deployment Automator AI', slug: 'deployment-automator-ai', description: 'Automates the deployment of applications to various environments.', Icon: Rocket },

  // Financial Services
  { name: 'Finance Optimizer AI', slug: 'finance-optimizer-ai', description: 'Optimizes personal and corporate financial strategies.', Icon: DollarSign },
  { name: 'Talent Matcher AI', slug: 'talent-matcher-ai', description: 'Matches job candidates to roles based on skills and cultural fit.', Icon: UserCheck },
  { name: 'Supply Chain Analyst AI', slug: 'supply-chain-analyst-ai', description: 'Analyzes and optimizes supply chain logistics and operations.', Icon: Truck },
  { name: 'Credit Analyst AI', slug: 'credit-analyst-ai', description: 'Analyzes creditworthiness and financial risk for individuals and businesses.', Icon: CreditCard },
  { name: 'Crypto Analyst AI', slug: 'crypto-analyst-ai', description: 'Analyzes cryptocurrency markets, trends, and on-chain data.', Icon: Coins },
  { name: 'Loan Assistant AI', slug: 'loan-assistant-ai', description: 'Assists with loan applications, calculations, and document processing.', Icon: Handshake },
  { name: 'Payroll Manager AI', slug: 'payroll-manager-ai', description: 'Automates payroll processing, tax calculations, and compliance.', Icon: Banknote },
  { name: 'Accountant AI', slug: 'accountant-ai', description: 'Performs accounting tasks like bookkeeping, reconciliation, and reporting.', Icon: Receipt },
  { name: 'FinTech Analyst AI', slug: 'fintech-analyst-ai', description: 'Analyzes trends and innovations in the financial technology sector.', Icon: Sigma },

  // Public Sector & Urbanism
  { name: 'Population Analyst AI', slug: 'population-analyst-ai', description: 'Analyzes demographic data and population trends.', Icon: Users },
  { name: 'Corruption Detector AI', slug: 'corruption-detector-ai', description: 'Detects patterns of corruption in public financial data.', Icon: Eye },
  { name: 'Smart City Planner AI', slug: 'smart-city-planner-ai', description: 'Assists in planning and designing smart city infrastructure.', Icon: Building2 },
  { name: 'Tax Assistant AI', slug: 'tax-assistant-ai', description: 'Helps citizens and businesses with tax calculation and filing.', Icon: Receipt },
  { name: 'Election Analyst AI', slug: 'election-analyst-ai', description: 'Analyzes election data, voter turnout, and political trends.', Icon: Vote },

  // Personal Learning & Growth
  { name: 'Language Lab AI', slug: 'language-lab-ai', description: 'An interactive lab for practicing pronunciation, vocabulary, and grammar.', Icon: Languages },
  { name: 'Learning Style Adapter AI', slug: 'learning-style-adapter-ai', description: 'Adapts any content to a user\'s preferred learning style (e.g., visual, auditory).', Icon: PersonStanding },
  { name: 'Quiz Generator AI', slug: 'quiz-generator-ai', description: 'Generates quizzes and tests from any learning material.', Icon: HelpCircle },
  { name: 'Virtual Classroom AI', slug: 'virtual-classroom-ai', description: 'Facilitates and manages a virtual learning environment.', Icon: School },
  { name: 'Research Summarizer AI', slug: 'research-summarizer-ai', description: 'Summarizes long research papers, articles, and documents.', Icon: BookText },

  // Health & Agriculture
  { name: 'Plant Diagnoser', slug: 'plant-diagnoser', description: 'An expert botanist specializing in diagnosing plant illnesses.', Icon: Leaf },
  { name: 'Appointment Manager AI', slug: 'appointment-manager-ai', description: 'Schedules and manages medical appointments.', Icon: CalendarDays },
  { name: 'Medical Coder AI', slug: 'medical-coder-ai', description: 'Translates medical reports into standardized codes for billing.', Icon: FileCode },
  { name: 'Insurance Processor AI', slug: 'insurance-processor-ai', description: 'Automates the processing of health insurance claims.', Icon: FileHeart },
  { name: 'Disease Predictor AI', slug: 'disease-predictor-ai', description: 'Predicts disease outbreaks and personal health risks based on data.', Icon: Activity },

  // Digital Marketing & Engagement
  { name: 'Brand Voice Developer AI', slug: 'brand-voice-developer-ai', description: 'Develops and maintains a consistent brand voice across all content.', Icon: MicVocal },
  { name: 'Script Writer AI', slug: 'script-writer-ai', description: 'Writes scripts for videos, podcasts, and advertisements.', Icon: FileText },
  { name: 'Social Media Analyst AI', slug: 'social-media-analyst-ai', description: 'Analyzes social media trends, engagement, and performance.', Icon: BarChart },
  { name: 'Content Strategist AI', slug: 'content-strategist-ai', description: 'Develops comprehensive content strategies for marketing campaigns.', Icon: Lightbulb },
  { name: 'Telegram Bot AI', slug: 'telegram-bot-ai', description: 'Creates and manages intelligent bots for the Telegram platform.', Icon: BotIcon },
  { name: 'Sentiment Tracker AI', slug: 'sentiment-tracker-ai', description: 'Tracks and analyzes public sentiment around a brand or topic.', Icon: HeartPulse },

  // Emerging Tech & Virtual Worlds
  { name: 'Quantum Simulator AI', slug: 'quantum-simulator-ai', description: 'Simulates quantum computing algorithms and behaviors.', Icon: Atom },
  { name: 'Genomic Analyst AI', slug: 'genomic-analyst-ai', description: 'Analyzes genomic data to find insights and patterns.', Icon: Dna },
  { name: 'Robotics Controller AI', slug: 'robotics-controller-ai', description: 'Designs and controls the behavior of robotic systems.', Icon: Bot },
  { name: 'Regional Hub AI', slug: 'regional-hub-ai', description: 'Manages and coordinates AI agents within a specific geographical region.', Icon: Network },
  { name: 'Global Coordinator AI', slug: 'global-coordinator-ai', description: 'Coordinates tasks and data across multiple Regional Hubs.', Icon: Globe },
  { name: 'Content Localizer AI', slug: 'content-localizer-ai', description: 'Adapts and localizes content for different cultures and languages.', Icon: Languages },
  { name: 'Partner Ecosystem AI', slug: 'partner-ecosystem-ai', description: 'Manages relationships and integrations within a partner ecosystem.', Icon: HeartHandshake },
  { name: 'Motion Capture AI', slug: 'motion-capture-ai', description: 'Analyzes video to create 3D motion capture data.', Icon: Move },
  { name: 'Training Simulator AI', slug: 'training-simulator-ai', description: 'Creates immersive simulations for training purposes.', Icon: Cuboid },
  { name: 'AR Designer AI', slug: 'ar-designer-ai', description: 'Designs and develops augmented reality experiences.', Icon: View },
  { name: 'VR Event Host AI', slug: 'vr-event-host-ai', description: 'Hosts and manages events within a virtual reality space.', Icon: Users2 },
  { name: 'Holographic Comms AI', slug: 'holographic-comms-ai', description: 'Facilitates communication through holographic representations.', Icon: MessageCircle },
];
