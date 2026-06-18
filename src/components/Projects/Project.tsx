import { useState } from "react";
import { ExternalLink, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import corelatoImage from "../../assets/corelato-screenshot.png";
import jssImage from "../../assets/jss-screenshot.png";
import GitHubLogo from "../../assets/GitHub_Invertocat_White_Clearspace.svg";
import "./Projects.css";

type Project = {
    title: string;
    subtitle: string;
    image: string;
    stack: string[];
    siteUrl: string;
    details: string[];
};

const projects: Project[] = [
    {
        title: "Corelato",
        subtitle: "Learning platform for notes, courses, flashcards, and public knowledge sharing",
        image: corelatoImage,
        stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "TipTap", "Tailwind", "Vercel"],
        siteUrl: "https://corelato.com",
        details: [
            "Corelato is a learning platform designed to help students and lifelong learners organize, connect, and retain knowledge through courses, notes, flashcards, and study tools.",
            "The project originally began as my B.S. Software Engineering capstone, where I built a prototype using React, Spring Boot, and PostgreSQL.",
            "Through that experience, I learned a tremendous amount about full-stack development, product design, and the challenges of building software that people actually want to use.",
            "After graduating, I began rebuilding the platform from the ground up as a Corelato V1 using Next.js, TypeScript, Supabase, and PostgreSQL.",
            "The new architecture focuses on scalability, developer experience, and a more polished user experience.",
            "Today, Corelato includes authentication, rich-text note editing, public and private knowledge sharing, public learner profiles, course organization, flashcard decks, and SEO-friendly public notes.",
            "The long-term vision is to create a platform that helps learners not only store information, but actively connect ideas and retain knowledge more effectively.",
        ],
    },
    {
        title: "JobSearchingSucks",
        subtitle: "Job application tracker with resume management and analytics foundations",
        image: jssImage,
        stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Supabase", "Tailwind"],
        siteUrl: "https://jobsearchingsucks.com",
        details: [
            "JobSearchingSucks is a job search management platform built to help users organize applications, track progress, and stay focused during the often overwhelming process of finding a new role.",
            "The project was inspired by my own experience applying to software engineering positions after graduation.",
            "Existing tools were either overly complex, abandoned, or focused on enterprise recruiting rather than helping individual job seekers stay organized.",
            "The application uses a modern full-stack architecture with a Next.js frontend, FastAPI backend, PostgreSQL database, and SQLAlchemy ORM.",
            "The platform currently focuses on application tracking, status management, resume organization foundations, and dashboard analytics.",
            "As the project grows, I plan to expand into a more complete career management platform while maintaining a strong focus on privacy, user trust, and responsible handling of personal data.",
        ],
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <motion.div
                    className="projects-header section-header"
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
                            whileInView={{ opacity: 1, y: 0 }}
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h3>More on GitHub</h3>
                        <p>
                            I also build smaller tools and automation projects, including Job Radar,
                            a Python-based job aggregation tool, and a DMV appointment watcher.
                        </p>
                    </div>

                    <a
                        href="https://github.com/hmw55"
                        target="_blank"
                        rel="noreferrer"
                        className="github-link"
                    >
                        View on GitHub
                        <img src={GitHubLogo} alt="GitHub logo" />
                    </a>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-backdrop"
                        onClick={() => setSelectedProject(null)}
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