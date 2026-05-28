import { useState } from "react";
import "./Nav.css";
import { Menu, X, Mail } from "lucide-react";
import GitHubLogo from "../../assets/GitHub_Invertocat_White_Clearspace.svg";
import LinkedInLogo from "../../assets/InBug-White.png";

function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="nav-shell">
            <div className="nav-wrapper">
                <nav className="nav-pill">
                    <a href="#hero" className="nav-logo" onClick={closeMenu}>
                        HMW
                    </a>

                    <div className="nav-center desktop-only">
                        <a href="#projects" className="nav-link">
                            Projects
                        </a>
                        <a href="#about" className="nav-link">
                            About
                        </a>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </div>

                    <div className="nav-right desktop-only">
                        <a 
                            href="https://github.com/hmw55"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-icon"
                            aria-label="GitHub"
                        >
                            <img src={GitHubLogo} alt="Github Logo" className="github-logo" />
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
                            target="_blank"
                            rel="noreferrer"
                            className="nav-icon"
                            aria-label="LinkedIn"
                        >
                            <img src={LinkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
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
                        className="menu-toggle mobile-only"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu": "Open menu"}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="mobile-menu">
                        <a href="#projects" className="mobile-link" onClick={closeMenu}>
                            Projects
                        </a>
                        <a href="#about" className="mobile-link" onClick={closeMenu}>
                            About
                        </a>
                        <a href="#contact" className="mobile-link" onClick={closeMenu}>
                            Contact
                        </a>

                        <div className="mobile-icons">
                            <a 
                                href="https://github.com/hmw55"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-icon"
                                aria-label="GitHub"
                            >
                                <img src={GitHubLogo} alt="Github Logo" className="github-logo" />
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-icon"
                                aria-label="LinkedIn"
                            >
                                <img src={LinkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
                            </a>

                            <a 
                                href="mailto:hello@hollandmwesley.com"
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