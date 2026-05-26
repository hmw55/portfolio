import { motion } from "motion/react";
import {
    Code2,
    Layers,
    MonitorSmartphone,
    // Server, 
    Sparkles,
    Wrench,
} from "lucide-react";
import profileimage from "../../assets/profile.png";
import "./About.css";

function About() {
    const strengths = [
        {
        icon: Layers,
        title: "Full-Stack Mindset",
        text: "I like understanding the whole flow: interface, API, data, and the user experience connecting it all.",
        },
        {
            icon: MonitorSmartphone,
            title: "User-Focused UI",
            text: "I care about clean layouts, responsive design, and making software feel polished instead of just functional.",
        },
        {
            icon: Wrench,
            title: "Practical Engineering",
            text: "I prefer maintainable solutions, clear structure, and code that future teammates can actually work with.",
        },
    ];

    const stackGroups = [
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "JavaScript", "CSS", "TailwindCSS", "Responsive UI"], 
        },
        {
            title: "Backend",
            skills: ["Java", "Spring Boot", "Python", "FastAPI", "REST APIs", "SQL", "MySQL", "PostgreSQL", "Supabase"],
        },
        {
            title: "Tools & Practices",
            skills: ["Git", "Linux", "Windows", "Testing", "Debugging", "Deployment"],
        },
        // {
        //     title: "Certifications",
        //     skills: ["AWS Cloud Practitioner", "ITIL 4 Foundation in Service Management", "CompTIA Project+"],
        // },
    ];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y:24 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="about-eyebrow">About Me</p>
                    <h2>Building Software with structure, polish, and purpose.</h2>
                </motion.div>

                <div className="about-main">
                    <motion.div
                        className="about-copy"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true, amount: 0.35}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p>
                            I'm Holland M. Wesley — Mack to the people who know me — a software engineer 
                            focused on building practical, polished applications that balance strong 
                            technical foundations with thoughtful user experience. 
                        </p>

                        <p>
                            I enjoy working across the full stack: shaping interfaces, building APIs, 
                            designing data flows, and connecting the pieces into software that feels reliable 
                            and intentional. I'm especially drawn to products that help people organize 
                            information, learn faster, or make complicated work flows simpler.  
                        </p>

                        <p>
                            My background gives me a practical, user-aware approach to engineering. I care 
                            about clear communication, maintainable code, and building things that are not only 
                            technically sound, but useful in the real world. 
                        </p>

                        <div className="about-status-card">
                            <Sparkles size={18} />
                            <span>
                                Currently looking for frontend, backend, full-stack, and technical 
                                product roles where I can contribute across user experience, application 
                                logic, and real-world product development.
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <div className="profile-ring">
                            <img 
                                src={profileimage} 
                                alt="Holland M. Wesley" 
                                className="profile-image"
                            />
                        </div>

                        <div className="profile-card">
                            <div>
                                <span className="profile-label">Focus</span>
                                <strong>Full-stack product engineering</strong>
                            </div>
                            <div>
                                <span className="profile-label">Style</span>
                                <strong>Clean, practical, user-aware</strong>
                            </div>
                            <div>
                                <span className="profile-label">Based in</span>
                                <strong>Denver, Colorado</strong>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="strength-grid">
                    {strengths.map((item, index) => (
                        <motion.article
                            className="strength-card"
                            key={item.title}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                        >
                            <item.icon size={22} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="about-stack"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="stack-heading">
                        <Code2 size={22} />
                        <h3>Technologies I Work With</h3>
                    </div>

                    <div className="stack-grid">
                        {stackGroups.map((group) => (
                            <div className="stack-group" key={group.title}>
                                <h4>{group.title}</h4>
                                <div className="skill-list">
                                    {group.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;