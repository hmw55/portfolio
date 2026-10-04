import "./GitHubCTA.css";

function GitHubCTA() {
  return (
    <section className="github-cta">
      <span className="github-cta-label">GITHUB</span>

      <h2>Want to see the code?</h2>

      <p>
        Explore my repositories, ongoing projects, and the code
        behind what I'm building.
      </p>

      <a
        href="https://github.com/hmw55"
        target="_blank"
        rel="noreferrer"
        className="github-cta-link"
      >
        View My GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export default GitHubCTA;