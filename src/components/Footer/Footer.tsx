import { Mail } from "lucide-react";
import GitHubLogo from "../../assets/GitHub_Invertocat_White_Clearspace.svg";
import LinkedInLogo from "../../assets/InBug-White.png"
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <a href="#hero" className="footer-logo">
                    HMW
                </a>

                <nav className="footer-links" aria-label="Footer navigation">
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>


                <div className="footer-socials">
                    <a 
                        href="mailto:holland@hollandmwesley.com" 
                        className="footer-social-link"
                        aria-label="Email"
                    >
                        <Mail size={17} />
                    </a>

                    <a 
                        href="https://github.com/hmw55"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                        aria-label="GitHub"
                    >
                        <img src={GitHubLogo} alt="GitHub" />
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="footer-social-link"
                    >
                        <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo" />
                    </a>
                </div>
            </div>

            <p className="footer-copy">
                © Holland M. Wesley — Mack. All rights reserved. 
            </p>
        </footer>
    );
}

export default Footer;