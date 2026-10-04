import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import {
  projects,
  projectCategories,
  projectLanguages,
  type ProjectCategory,
  type ProjectLanguage,
} from "../data/projects";
import "./ProjectsPage.css";

type ProjectFilter = "All" | ProjectCategory;
type LanguageFilter = "All" | ProjectLanguage;

function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const [activeLanguage, setActiveLanguage] =
    useState<LanguageFilter>("All");

  const categoryFilters: ProjectFilter[] = [
    "All",
    ...projectCategories,
  ];

  const languageFilters: LanguageFilter[] = [
    "All",
    ...projectLanguages,
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "All" ||
      project.categories.includes(activeFilter);

    const matchesLanguage =
      activeLanguage === "All" ||
      project.languages.includes(activeLanguage);

    return matchesCategory && matchesLanguage;
  });

  const imageProjects = filteredProjects.filter(
    (project) => project.cardImage
  );

  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.slice(1);
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  return (
    <>
      <Nav />

      <main className="projects-page">
        <header className="projects-page-header">
          <span className="projects-page-label">
            PROJECTS
          </span>

          <h1>Things I've built.</h1>

          <p>
            Full-stack products, backend systems,
            automation tools, and experiments built
            to solve real problems.
          </p>
        </header>

        <div className="project-filter-groups">
          <div className="project-filter-group">
            <span className="project-filter-label">
              Project Type
            </span>

            <div
              className="project-filters"
              aria-label="Filter projects by type"
            >
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`project-filter ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="project-filter-group">
            <span className="project-filter-label">
              Language
            </span>

            <div
              className="project-filters"
              aria-label="Filter projects by language"
            >
              {languageFilters.map((language) => (
                <button
                  key={language}
                  type="button"
                  className={`project-filter ${
                    activeLanguage === language ? "active" : ""
                  }`}
                  onClick={() => setActiveLanguage(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="projects-grid">
          {filteredProjects.map((project) => {
            const imageIndex = imageProjects.findIndex(
              (item) => item.slug === project.slug
            );

            const hasImage = Boolean(project.cardImage);
            const imageRight =
              hasImage && imageIndex % 2 === 1;

            const cardClassName = [
              "project-card",
              !hasImage ? "project-card-no-image" : "",
              imageRight ? "project-card-image-right" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <article
                id={project.slug}
                className={cardClassName}
                key={project.slug}
              >
                {project.cardImage && (
                  <div className="project-image-wrapper">
                    <img
                      src={project.cardImage}
                      alt={
                        project.cardImageAlt ??
                        `${project.name} preview`
                      }
                      className="project-image"
                    />
                  </div>
                )}

                <div className="project-card-content">
                  <div className="project-card-top">
                    <span className="project-type">
                      {project.type}
                    </span>

                    {(project.githubUrl ||
                      project.liveUrl) && (
                      <div className="project-links">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                          >
                            GitHub
                            <span aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link project-link-primary"
                          >
                            Live Site
                            <span aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <h2>{project.name}</h2>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.languages.map((language) => (
                      <span key={language}>
                        {language}
                      </span>
                    ))}

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  {project.caseStudy && (
                    <Link
                      to={`/projects/${project.slug}`}
                      className="project-case-study"
                    >
                      <span>Explore Case Study</span>

                      <span
                        className="project-case-study-arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;