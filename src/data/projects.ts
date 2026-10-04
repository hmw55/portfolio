import rootAndBowerImage from "../assets/projects/root-and-bower/card.png";
import worldscopeImage from "../assets/projects/worldscope/card.png";
import corelatoCard from "../assets/projects/corelato/card.png";
import jobSearchingSucksCard from "../assets/projects/job-searching-sucks/card.png";

export type ProjectCategory =
  | "Full Stack"
  | "Backend"
  | "Automation"
  | "Systems"
  | "Frontend";

export type ProjectLanguage =
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "Java"
  | "SQL";

export interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  languages: ProjectLanguage[];
  categories: ProjectCategory[];
  cardImage?: string;
  cardImageAlt?: string;
  caseStudy?: boolean;
  caseStudyHero?: string;
  caseStudyHeroAlt?: string;
  featured?: boolean;
  status?: "Live" | "In Development";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "root-and-bower",
    name: "Root & Bower",
    type: "Digital Legacy Platform",
    description:
      "A privacy-focused platform for preserving family stories, memories, media, and relationships through shared digital sanctuaries.",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Cloudflare R2",
      "Stripe",
    ],
    languages: ["TypeScript", "SQL"],
    categories: ["Full Stack"],
    cardImage: rootAndBowerImage,
    cardImageAlt:
      "Root & Bower digital legacy platform homepage",
    caseStudy: true,
    featured: true,
    status: "Live",
    liveUrl: "https://rootandbower.com",
  },
  {
    slug: "job-searching-sucks",
    name: "JobSearchingSucks",
    type: "Job Search Analytics Platform",
    description:
      "A full-stack SaaS platform for tracking job applications, measuring resume and source performance, managing follow-ups, and turning the job search into actionable data.",
    technologies: [
      "Next.js",
      "React",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Cloudflare R2",
      "Stripe",
    ],
    languages: ["TypeScript", "Python", "SQL"],
    categories: ["Full Stack"],
    cardImage: jobSearchingSucksCard,
    cardImageAlt:
      "JobSearchingSucks job search analytics platform",
    caseStudy: false,
    featured: true,
    status: "In Development",
  },
  {
    slug: "corelato",
    name: "Corelato",
    type: "Student Productivity Platform",
    description:
      "A full-stack student productivity platform combining course management, notes, flashcards, documents, study tools, and progress tracking in one workspace.",
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Supabase",
    ],
    languages: ["TypeScript", "SQL"],
    categories: ["Full Stack"],
    cardImage: corelatoCard,
    cardImageAlt:
      "Corelato student productivity platform dashboard",
    caseStudy: false,
    featured: true,
    status: "Live",
  },
  {
    slug: "worldscope",
    name: "WorldScope",
    type: "Global Data Explorer",
    description:
      "An interactive global data explorer combining country statistics, historical development trends, geographic visualization, and city-level weather and local-time data from multiple public data sources.",
    technologies: [
      "Angular 22",
      "Angular Signals",
      "RxJS",
      "D3",
      "SVG",
      "SCSS",
      "Vitest",
      "World Bank API",
      "Natural Earth",
      "Open-Meteo",
    ],
    languages: ["TypeScript"],
    categories: ["Frontend"],
    cardImage: worldscopeImage,
    cardImageAlt:
      "WorldScope interactive global data explorer displaying country data on a world map",
    featured: true,
    status: "Live",
    liveUrl: "https://hmw55.github.io/worldscope/",
    githubUrl: "https://github.com/hmw55/worldscope",
  },

  // Projects without card images yet

  {
    slug: "colorado-dmv-appointment-tracker",
    name: "Colorado DMV Appointment Tracker",
    type: "Automation & Monitoring",
    description:
      "An automated appointment monitoring system that tracks Colorado DMV availability across multiple locations and filters results by date and travel preferences.",
    technologies: [
      "Webhooks",
      "Automation",
      "Data Processing",
    ],
    languages: ["Python"],
    categories: ["Backend", "Automation"],
  },
  {
    slug: "warehouse-operations-engine",
    name: "Warehouse Operations Engine",
    type: "Operations & Routing System",
    description:
      "A warehouse operations system modeling inventory control, order fulfillment, analytics, and dynamic routing through weighted graphs.",
    technologies: [
      "NetworkX",
      "pytest",
    ],
    languages: ["Python"],
    categories: ["Backend", "Systems"],
    githubUrl:
      "https://github.com/hmw55/warehouse-operations-engine",
  },
  {
    slug: "job-radar",
    name: "Job Radar",
    type: "Job Data Pipeline",
    description:
      "An automated job collection and matching system that aggregates postings from multiple sources, maintains active job records, and identifies relevant opportunities.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "GitHub Actions",
      "Webhooks",
    ],
    languages: ["Python", "SQL"],
    categories: ["Backend", "Automation"],
  },
  {
    slug: "avarra",
    name: "Avarra",
    type: "Browser RPG",
    description:
      "A browser-based RPG with persistent accounts, world exploration, character systems, and an evolving hand-drawn game world.",
    technologies: [
      "Spring Boot",
      "React",
      "PostgreSQL",
    ],
    languages: ["Java", "TypeScript", "SQL"],
    categories: ["Full Stack"],
    status: "In Development",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Full Stack",
  "Backend",
  "Automation",
  "Systems",
  "Frontend",
];

export const projectLanguages: ProjectLanguage[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "SQL",
];