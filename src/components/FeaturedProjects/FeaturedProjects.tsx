import { projects } from "../../data/projects";
import "./FeaturedProjects.css";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="featured-projects" id="featured-projects">
      <header className="featured-projects-header">
      <span className="featured-projects-label">
          SELECTED WORK
      </span>

      <h2>Things I've built.</h2>

      <p>
          A selection of products and systems I've designed,
          built, and shipped.
      </p>
      </header>

      <div className="featured-projects-grid">
        {featuredProjects.map((project) => (
          <Link
            to={`/projects#${project.slug}`}
            className="featured-project-card"
            key={project.slug}
          >
            {project.cardImage && (
              <div className="featured-project-image-wrapper">
                <img
                  src={project.cardImage}
                  alt={
                    project.cardImageAlt ??
                    `${project.name} preview`
                  }
                  className="featured-project-image"
                />
              </div>
            )}

            <div className="featured-project-content">
              <span className="featured-project-type">
                {project.type}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>
            </div>

          </Link>
        ))}
      </div>

      <div className="featured-projects-footer">
        <Link to="/projects" className="featured-projects-all">
          See All Projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>

    </section>
  );
}

export default FeaturedProjects;