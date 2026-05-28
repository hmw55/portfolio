import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import GitHubLogo from "../../assets/GitHub_Invertocat_White_Clearspace.svg";
import LinkedInLogo from "../../assets/InBug-White.png";
import "./Contact.css";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const initialFormState: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

function Contact() {

    const [form, setForm] = useState<FormState>(initialFormState);
    const [status, setStatus] = useState<string>("");
    
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Replace with "/api/contact" later
        setStatus(
            "Thanks — this form is ready. Direct site sending will be connected after deployment."
        );

        setForm(initialFormState);
    }
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <motion.div
                    className="section-header contact-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="eyebrow">Contact</p>
                    <h2 className="section-heading">Let's build something worth shipping.</h2>
                    <p className="section-subtitle">
                        Have a role, project, or collaboration in mind? Send a message 
                        here or email me directly.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="form-row">
                            <label>
                                Name
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Email
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <label>
                            Subject
                            <input 
                                type="text" 
                                name="subject"
                                placeholder="Opportunity, project, or question"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Message
                            <textarea 
                                name="message" 
                                id="message"
                                placeholder="Tell me a little about what you're reaching out about..."
                                value={form.message}
                                onChange={handleChange}
                                rows={7}
                                required
                            />
                        </label>

                        <button type="submit" className="contact-submit">
                            <Send size={18} />
                            Send Message
                        </button>

                        {status && <p className="contact-status">{status}</p>}
                    </motion.form>

                    <motion.aside
                        className="contact-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6, delay: 0.18}}
                    >
                        <div className="contact-card-icon">
                            <Mail size={24} />
                        </div>

                        <h3>Prefer Email?</h3>
                        <p>
                            Reach out directly and I'll get back to you as soon as I can.
                        </p>

                        <a 
                            href="mailto:holland@hollandmwesley.com"
                            className="direct-email-link"
                        >
                            holland@hollandmwesley.com
                        </a>

                        <div className="contact-socials">
                            <a 
                                href="https://github.com/hmw55"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <img src={GitHubLogo} alt="GitHub Link" className="contact-socials-img" />
                            </a>

                            <a 
                                href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <img src={LinkedInLogo} alt="LinkedIn Link" className="contact-socials-img" />
                            </a>
                        </div>

                        <div className="contact-note">
                            <strong>How This Form Works</strong>
                            <span>
                                This form is structured to submit to a Vercel API route with Resend.
                            </span>
                        </div>

                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

export default Contact;