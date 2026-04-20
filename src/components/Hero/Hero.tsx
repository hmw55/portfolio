import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

function Hero() {

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname);
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-background" />

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{opacity: 1, y: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <motion.div
                        className="availability-badge"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="availability-dot" />
                        <span className="availability-text">Available for Work</span>
                    </motion.div>

                    <h1 className="hero-name">Holland M. Wesley</h1>

                    <h2 className="hero-title">Software Engineer</h2>

                    <p className="hero-tagline">Building elegant digital products.</p>

                    <p className="hero-description">
                        Full-stack engineer focused on scalable systems, thoughtful UX, and shipping 
                        products that feel polished, useful, and inspirational.
                    </p>

                    <div className="hero-actions">
                        <motion.button
                            type="button"
                            className="hero-button hero-button-primary"
                            onClick={() => scrollToSection("projects")}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>View Projects</span>
                            <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            type="button"
                            className="hero-button hero-button-secondary"
                            onClick={() => scrollToSection("contact")}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Me
                        </motion.button>              
                    </div>
                </motion.div>
            </div>

            <motion.div 
                className="hero-scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-mouse">
                    <motion.div
                        className="scroll-wheel"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;