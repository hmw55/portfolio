import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import GitHubLogo from "../../assets/GitHub_Invertocat_White_Clearspace.svg";
import LinkedInLogo from "../../assets/InBug-White.png";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] =
    useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProjectsOpen(false);
  };

  return (
    <header className="nav-shell">
      <div className="nav-wrapper">
        <nav className="nav-pill" aria-label="Main navigation">
          <Link
            to="/"
            className="nav-logo"
            onClick={closeMenu}
          >
            HMW
          </Link>

          <div className="nav-center desktop-only">
            <div className="nav-projects">
              <Link
                to="/projects"
                className="nav-link nav-projects-link"
              >
                Projects
              </Link>

              <button
                type="button"
                className="nav-projects-toggle"
                aria-label="Open projects menu"
                aria-haspopup="true"
              >
                <ChevronDown size={16} />
              </button>

              <div className="nav-projects-dropdown">
                <Link
                  to="/#featured-projects"
                  className="nav-dropdown-link"
                >
                  <span>Featured Projects</span>
                  <small>Selected work</small>
                </Link>

                <Link
                  to="/projects"
                  className="nav-dropdown-link"
                >
                  <span>All Projects</span>
                  <small>Browse everything</small>
                </Link>
              </div>
            </div>

            <Link to="/#about" className="nav-link">
              About
            </Link>

            <Link to="/#contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="nav-right desktop-only">
            <a
              href="https://github.com/hmw55"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
              aria-label="GitHub"
            >
              <img
                src={GitHubLogo}
                alt=""
                className="github-logo"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
              aria-label="LinkedIn"
            >
              <img
                src={LinkedInLogo}
                alt=""
                className="linkedin-logo"
              />
            </a>

            <a
              href="mailto:holland@hollandmwesley.com"
              className="nav-icon"
              aria-label="Email"
            >
              <Mail size={25} />
            </a>
          </div>

          <button
            type="button"
            className="menu-toggle mobile-only"
            onClick={() => {
              setMenuOpen((previous) => !previous);

              if (menuOpen) {
                setMobileProjectsOpen(false);
              }
            }}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-projects">
              <div className="mobile-projects-header">
                <Link
                  to="/projects"
                  className="mobile-link"
                  onClick={closeMenu}
                >
                  Projects
                </Link>

                <button
                  type="button"
                  className="mobile-projects-toggle"
                  onClick={() =>
                    setMobileProjectsOpen(
                      (previous) => !previous
                    )
                  }
                  aria-label="Toggle project links"
                  aria-expanded={mobileProjectsOpen}
                >
                  <ChevronDown
                    size={17}
                    className={
                      mobileProjectsOpen
                        ? "mobile-chevron open"
                        : "mobile-chevron"
                    }
                  />
                </button>
              </div>

              {mobileProjectsOpen && (
                <div className="mobile-projects-submenu">
                  <Link
                    to="/#featured-projects"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Featured Projects
                  </Link>

                  <Link
                    to="/projects"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    All Projects
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/#about"
              className="mobile-link"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              to="/#contact"
              className="mobile-link"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <div className="mobile-icons">
              <a
                href="https://github.com/hmw55"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
                aria-label="GitHub"
              >
                <img
                  src={GitHubLogo}
                  alt=""
                  className="github-logo"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
                aria-label="LinkedIn"
              >
                <img
                  src={LinkedInLogo}
                  alt=""
                  className="linkedin-logo"
                />
              </a>

              <a
                href="mailto:holland@hollandmwesley.com"
                className="nav-icon"
                aria-label="Email"
              >
                <Mail size={25} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;