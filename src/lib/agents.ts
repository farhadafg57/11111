
import type { LucideIcon } from 'lucide-react';
import { Leaf, Video, Network, BrainCircuit, Eye, Mic, Languages, Combine, Shield, Scale, Box, DollarSign, TrendingUp, Search, Cog, Target, ClipboardCheck, Cloud, ShieldCheck, Banknote, Users, Truck, Landmark, HeartHandshake, Siren, AreaChart, Scan, FileScan, Building2, Receipt, Vote, Code, PenTool, Plug, TestTube2, Rocket, Paintbrush, Clapperboard, Music, Cuboid, MicVocal, Book, Megaphone, Podcast, AudioWaveform, Film, GraduationCap, BookOpen, MessageSquare, Wrench, ClipboardPen, FileCheck, GitBranch, HelpCircle, School, BookText, Thermometer, Pill, Smile, CalendarDays, FileCode, FileHeart, Activity, MonitorSmartphone, FileText, FlaskConical, Wallet, LineChart, ShieldAlert, Bot, MessageCircle, Users2, Star, Sun, Dumbbell, Sprout, Telescope, Microscope, Globe, Blocks, Brick, Home, View, Move, DraftingCompass, Drama, Hand, Gavel, Briefcase, LandPlot, Ear } from 'lucide-react';

export type Agent = {
  name: string;
  description: string;
  Icon: LucideIcon;
};

export const agents: Agent[] = [
  { name: 'Dehqan', description: 'An expert botanist specializing in diagnosing plant illnesses.', Icon: Leaf }, // Farmer/Gardener
  { name: 'Neqash', description: 'An AI that can generate videos from text or image prompts.', Icon: Video }, // Painter/Illustrator
  { name: 'Sarlashkar', description: 'Manages agent lifecycle, scaling, and routing.', Icon: Network }, // Commander/Leader
  { name: 'Hafiza', description: 'Manages user context and cross-agent insights.', Icon: BrainCircuit }, // Memory
  { name: 'Bina', description: 'Image/video understanding.', Icon: Eye }, // Vision
  { name: 'Sada', description: 'Real-time speech-to-text pipeline.', Icon: Mic }, // Voice
  { name: 'Motarjem', description: '60+ language translation & adaptation.', Icon: Languages }, // Translator
  { name: 'Kimyagar', description: 'Creates knowledge graphs from multi-modal data.', Icon: Combine }, // Alchemist
  { name: 'Mohafez', description: 'Zero-trust AI monitor and access control.', Icon: Shield }, // Guardian
  { name: 'Adalat', description: 'Bias detection, audit, and AI compliance.', Icon: Scale }, // Justice
  { name: 'Memar', description: 'Automates Vertex AI pipeline deployment.', Icon: Box }, // Architect
  { name: 'Hesabdar', description: 'Real-time spend balancer.', Icon: DollarSign }, // Accountant
  { name: 'Rahbord', description: 'Business strategy formulation.', Icon: TrendingUp }, // Strategy
  { name: 'Jasus', description: 'Market intelligence and analysis.', Icon: Search }, // Spy
  { name: 'Sanatgar', description: 'Business process optimization.', Icon: Cog }, // Artisan/Industrialist
  { name: 'Fayda', description: 'Predicts return on investment.', Icon: Target }, // Benefit/Profit
  { name: 'Mofatesh', description: 'Audits for compliance.', Icon: ClipboardCheck }, // Inspector
  { name: 'Abr-Das', description: 'Advises on cloud operations.', Icon: Cloud }, // Cloud Hand
  { name: 'Dafa', description: 'Cyber defense strategies.', Icon: ShieldCheck }, // Defense
  { name: 'Saraf', description: 'Financial operations optimization.', Icon: Banknote }, // Money-changer
  { name: 'Karyab', description: 'Matches talent with opportunities.', Icon: Users }, // Job-finder
  { name: 'Anbardar', description: 'Predicts supply chain disruptions.', Icon: Truck }, // Warehouse keeper
  { name: 'Edari', description: 'Automates e-governance processes.', Icon: Landmark }, // Administrative
  { name: 'Shahri', description: 'Provides support to citizens.', Icon: HeartHandshake }, // Citizenry
  { name: 'Qanon-Saz', description: 'Simulates policy outcomes.', Icon: Scale }, // Law-maker
  { name: 'Aafat', description: 'Aids in disaster response.', Icon: Siren }, // Disaster
  { name: 'Nofus', description: 'Provides population insights.', Icon: AreaChart }, // Population
  { name: 'Fesad-Yab', description: 'Detects corruption.', Icon: Scan }, // Corruption-finder
  { name: 'Raqami', description: 'Digitizes documents.', Icon: FileScan }, // Digital
  { name: 'Shahr-Saz', description: 'Plans smart city infrastructure.', Icon: Building2 }, // City-planner
  { name: 'Maliyat', description: 'Assists with tax-related queries.', Icon: Receipt }, // Tax
  { name: 'Ray-Giri', description: 'Provides election intelligence.', Icon: Vote }, // Voting
  { name: 'Barnama-Newis', description: 'Generates TypeScript/Node code.', Icon: Code }, // Programmer
  { name: 'Tarrah', description: 'Designs UI/UX from Figma to Next.js.', Icon: PenTool }, // Designer
  { name: 'Wassl', description: 'Builds APIs from OpenAPI to Cloud Run.', Icon: Plug }, // Connector
  { name: 'Azmayesh', description: 'Generates test suites.', Icon: TestTube2 }, // Test/Trial
  { name: 'Faza-Naward', description: 'Automates deployment.', Icon: Rocket }, // Astronaut
  { name: 'Logo-Saz', description: 'Generates logos.', Icon: Paintbrush },
  { name: 'Kargardan', description: 'Directs video production.', Icon: Clapperboard }, // Director
  { name: 'Musiqar', description: 'Composes music.', Icon: Music }, // Musician
  { name: 'Mojassama-Saz', description: 'Generates 3D assets.', Icon: Cuboid }, // Sculptor
  { name: 'Goyanda', description: 'Develops brand voice.', Icon: MicVocal }, // Speaker
  { name: 'Nawisanda', description: 'Writes scripts.', Icon: Book }, // Writer
  { name: 'Tablighat', description: 'Manages ad campaigns.', Icon: Megaphone }, // Advertising
  { name: 'Qessa-Gu', description: 'Tells stories.', Icon: Film }, // Storyteller
  { name: 'Stodio-Yar', description: 'Produces video podcasts.', Icon: Podcast }, // Studio-helper
  { name: 'Ahangsaz', description: 'Produces music.', Icon: AudioWaveform }, // Composer
  { name: 'Kankor-Yar', description: 'Kankor exam tutoring.', Icon: GraduationCap }, // Kankor-helper
  { name: 'Quran-Yar', description: 'Quranic studies tutor.', Icon: BookOpen }, // Quran-helper
  { name: 'Engelisi-Yar', description: 'Coaches English language skills.', Icon: MessageSquare }, // English-helper
  { name: 'Zaban-Dan', description: 'Language learning laboratory.', Icon: Languages }, // Linguist
  { name: 'Maharat', description: 'Builds new skills.', Icon: Wrench }, // Skill
  { name: 'Emtehan-Yar', description: 'Prepares for exams.', Icon: ClipboardPen }, // Exam-helper
  { name: 'Ensha-Sanj', description: 'Evaluates essays.', Icon: FileCheck }, // Essay-evaluator
  { name: 'Tadris-Yar', description: 'Adapts to learning styles.', Icon: GitBranch }, // Teaching-helper
  { name: 'Porsesh', description: 'Generates quizzes.', Icon: HelpCircle }, // Question
  { name: 'Maktab', description: 'Manages virtual classrooms.', Icon: School }, // School
  { name: 'Mohaqeq', description: 'Summarizes research papers.', Icon: BookText }, // Researcher
  { name: 'Tabib-Yar', description: 'Checks medical symptoms.', Icon: Thermometer }, // Doctor-helper
  { name: 'Dawa-Saz', description: 'Advises on drugs.', Icon: Pill }, // Pharmacist
  { name: 'Hamsuhbat', description: 'A mental health companion.', Icon: Smile }, // Companion
  { name: 'Waqt', description: 'Manages appointments.', Icon: CalendarDays }, // Time
  { name: 'Ramz-Newis', description: 'Assists with medical coding.', Icon: FileCode }, // Code-writer
  { name: 'Bima-Yar', description: 'Processes insurance claims.', Icon: FileHeart }, // Insurance-helper
  { name: 'Peshgo', description: 'Predicts diseases.', Icon: Activity }, // Foreteller
  { name: 'Tele-Tabib', description: 'Provides telehealth services.', Icon: MonitorSmartphone }, // Tele-doctor
  { name: 'Parwanda', description: 'Manages patient records.', Icon: FileText }, // File/Record
  { name: 'Tajzia', description: 'Analyzes lab reports.', Icon: FlaskConical }, // Analysis
  { name: 'Masraf', description: 'Tracks expenses.', Icon: Wallet }, // Expense
  { name: 'Sarmayaguzar', description: 'Plans investments.', Icon: LineChart }, // Investor
  { name: 'Etebar', description: 'Analyzes credit scores.', Icon: Target }, // Credit
  { name: 'Taqalob-Yab', description: 'Detects financial fraud.', Icon: ShieldAlert }, // Fraud-finder
  { name: 'Arz-Digital', description: 'Analyzes crypto markets.', Icon: DollarSign }, // Digital Currency
  { name: 'Qarz-Deh', description: 'Assists with SME loans.', Icon: Landmark }, // Lender
  { name: 'Mawash', description: 'Manages payroll.', Icon: Banknote }, // Salary
  { name: 'Mohaseb', description: 'Handles accounting tasks.', Icon: Receipt }, // Accountant
  { name: 'Tijarat', description: 'Optimizes e-commerce operations.', Icon: Cog }, // Commerce
  { name: 'FinTech-Dan', description: 'Provides FinTech intelligence.', Icon: Search }, // FinTech-knower
  { name: 'Payam-Resan', description: 'Responds to WhatsApp messages.', Icon: Bot }, // Messenger
  { name: 'Telegram-Yar', description: 'A Telegram bot.', Icon: MessageCircle }, // Telegram-helper
  { name: 'Poshtiban', description: 'Manages support desks.', Icon: Users2 }, // Supporter
  { name: 'Nazer', description: 'Moderates online communities.', Icon: Shield }, // Supervisor
  { name: 'Ehsas', description: 'Tracks sentiment.', Icon: Smile }, // Feeling/Sentiment
  { name: 'Morabi', description: 'Coaches dating and profiles.', Icon: Star }, // Coach
  { name: 'Ejtemai', description: 'Provides social media insights.', Icon: Sun }, // Social
  { name: 'Mohtawa', description: 'Builds content empires.', Icon: BookOpen }, // Content
  { name: 'Warzeshkar', description: 'A personal trainer.', Icon: Dumbbell }, // Athlete
  { name: 'Taghzia', description: 'A nutritionist.', Icon: Sprout }, // Nutrition
  { name: 'Ayanda-Negar', description: 'Forecasts trends.', Icon: TrendingUp }, // Future-viewer
  { name: 'Ekhtesab', description: 'Scouts for patents.', Icon: Search }, // Accounting/Patenting
  { name: 'Quantum-Sanj', description: 'Simulates quantum mechanics.', Icon: Cuboid }, // Quantum-evaluator
  { name: 'Jen-Shenas', description: 'Analyzes genomic data.', Icon: Microscope }, // Gene-knower
  { name: 'Sabz-Fan', description: 'Advises on green technology.', Icon: Leaf }, // Green-tech
  { name: 'Robot-Kar', description: 'Controls robotics.', Icon: Bot }, // Robot-worker
  { name: 'Markaz-Mantaqa', description: 'Regional AI hub.', Icon: Globe }, // Regional-center
  { name: 'Hama-Hang', description: 'Orchestrates global operations.', Icon: Network }, // Coordinator
  { name: 'Mahalli-Saz', description: 'Localizes content.', Icon: Languages }, // Localizer
  { name: 'Hamkar', description: 'Manages partner ecosystems.', Icon: Blocks }, // Partner/Colleague
  { name: 'Amlak', description: 'A real estate command center.', Icon: Home }, // Property/Real Estate
  { name: 'Donya-Majazi', description: 'Builds and manages virtual worlds.', Icon: Blocks }, // Virtual World
  { name: 'Chehra-Saz', description: 'Generates realistic avatars.', Icon: Users2 }, // Face-maker
  { name: 'Takallom', description: 'Clones voices with high fidelity.', Icon: MicVocal }, // Speech
  { name: 'Harakat', description: 'Captures and analyzes motion data.', Icon: Move }, // Movement
  { name: 'Tamrin', description: 'Creates immersive training simulations.', Icon: View }, // Practice/Exercise
  { name: 'Memar-AR', description: 'Designs augmented reality experiences.', Icon: DraftingCompass }, // AR-architect
  { name: 'Jashn-VR', description: 'Organizes and hosts virtual reality events.', Icon: Drama }, // VR-celebration
  { name: 'Suhbat-Holo', description: 'Enables holographic communication.', Icon: MessageCircle }, // Holo-chat
  { name: 'Tassawor', description: 'Synthesizes realistic emotions in avatars.', Icon: Hand }, // Imagination
  { name: 'Zehn', description: 'Simulates aspects of consciousness.', Icon: BrainCircuit }, // Mind/Intellect
  { name: 'Wokil', description: 'Provides legal insights and research.', Icon: Gavel }, // Lawyer
  { name: 'Moshaver', description: 'Offers personalized financial advice.', Icon: Briefcase }, // Advisor
  { name: 'Studio-Mosiqi', description: 'Automates music and podcast production.', Icon: AudioWaveform }, // Music-studio
  { name: 'Moneshi', description: "Generates a short description of an AI agent's capabilities.", Icon: FileScan }, // Scribe/Clerk
];

    