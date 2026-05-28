import { useState } from "react";
import { ExternalLink, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import corelatoImage from "../../assets/corelato-screenshot.png";
import jssImage from "../../assets/jss-screenshot.png";
import GitHubLogo from "../../assets/GitHub_Invertocat_White_Clearspace.svg";
import "./Projects.css";
import { span } from "motion/react-client";

type Project = {
    title: string;
    subtitle: string;
    image: string;
    stack: string[];
    siteUrl: string;
    details: string[];
}

const projects: Project[] = [
    {
        title: "Corelato",
        subtitle: "Learning productivity platform",
        image: corelatoImage,
        stack: ["React", "Spring Boot", "PostgreSQL", "Vercel", "Railway"],
        siteUrl: "https://corelato.com",
        details: [
            "Corelato started as my B.S. in Software engineering capstone. It began as a self-paced learning productivity app focused on helping learners organize courses, milestones, notes, flashcards, and study sessions.",
            "V2 is currently in development to expand the product beyond self-paced learners and support all learners with a stronger course-centered experience.",
            "Planned improvements include collaboration features, a redesigned UI, better learner workflows, and a more polished product experience.",
            "The current public site is a landing page with a video walkthrough of V1.",
        ],
    },
    {
        title: "JobSearchingSucks",
        subtitle: "Application tracking for the job search",
        image: jssImage,
        stack: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind", "Vercel"],
        siteUrl: "https://jobsearchingsucks.com",
        details: [
            "JobSearchingSucks is a job-search organization tool focused first on application tracking, status updates, and keeping momentum during the job hunt.",
            "The current scope intentionally stays focused on application tracking while I work through privacy, resume-data handling, and payment/card-processing requirements.",
            "Before expanding into resume storage, sensitive user data, or paid features, I want the product foundation to handle trust, data safety, and compliance responsibility.",
        ],
    },
];

function Projects() {
    const [selectedProject, setSelectedProject]=useState<Project | null>(null);

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="eyebrow">Selected Work</p>
                    <h2 className="section-heading">Projects built with product thinking.</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            className="project-card"
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="project-image-wrap">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} screenshot`}
                                    className="project-image"
                                />
                            </div>

                            <div className="project-content">
                                <div className="project-title-row">
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.subtitle}</p>
                                    </div>
                                    
                                    <button
                                        type="button"
                                        className="project-info-button"
                                        onClick={() => setSelectedProject(project)}
                                        aria-label={`More information about ${project.title}`}
                                    >
                                        <Info size={19} />
                                    </button>
                                </div>

                                <div className="project-stack">
                                    {project.stack.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <a
                                    href={project.siteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    Visit Site
                                    <ExternalLink size={17} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="github-callout"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h3>More on GitHub</h3>
                        <p>
                            I also build smaller tools and automation projects, including 
                            Job Radar and a DMV appointment watcher.
                        </p>
                    </div>

                    <a 
                        href="https://github.com/hmw55"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link"
                    >
                        View on GitHub
                        <img src={GitHubLogo} alt="Github Logo" />
                    </a>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject &&(
                    <motion.div
                        className="project-modal-backdrop"
                        onClick={() => event?.stopPropagation()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="project-modal"
                            onClick={(event) => event.stopPropagation()}
                            initial={{ opacity: 0, y: 28, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ duration: 0.25 }}
                        >
                            <button
                                type="button"
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close project details"
                            >
                                <X size={20} />
                            </button>

                            <p className="modal-eyebrow">Project Details</p>
                            <h3>{selectedProject.title}</h3>

                            <div className="modal-details">
                                {selectedProject.details.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>

                            <a 
                                href={selectedProject.siteUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="modal-link"
                            >
                                Visit Site
                                <ExternalLink size={17} />
                            </a>
                        </motion.div>
                    </motion.div>

                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects;