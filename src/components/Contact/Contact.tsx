import { useState } from "react";
import { Turnstile } from "react-turnstile";
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
    company: string; // NOTE: hidden honeypot field for spam bots
};

const initialFormState: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
};

function Contact() {
    const [form, setForm] = useState<FormState>(initialFormState);
    const [status, setStatus] = useState<string>("");
    const [turnstileToken, setTurnstileToken] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!turnstileToken) {
            setStatus("Please complete the verification before sending.");
            return;
        }

        try {
            setIsSubmitting(true);
            setStatus("Sending message...");

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    turnstileToken,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send");
            }

            setStatus("Message sent successfully.");
            setForm(initialFormState);
            setTurnstileToken("");

            setTimeout(() => {
                setStatus("");
            }, 5000);
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong. Please email me directly instead.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <input
                            type="text"
                            name="company"
                            className="honeypot"
                            autoComplete="off"
                            tabIndex={-1}
                            value={form.company}
                            onChange={handleChange}
                            aria-hidden="true"
                        />

                        <div className="form-row">
                            <label>
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    autoComplete="name"
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
                                    autoComplete="email"
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

                        {import.meta.env.VITE_TURNSTILE_SITE_KEY && (
                            <div className="turnstile-wrap">
                                <Turnstile
                                    sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                                    onVerify={(token) => setTurnstileToken(token)}
                                    onExpire={() => setTurnstileToken("")}
                                    onError={() => setTurnstileToken("")}
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={isSubmitting}
                        >
                            <Send size={18} />
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {status && <p className="contact-status">{status}</p>}
                    </motion.form>

                    <motion.aside
                        className="contact-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6, delay: 0.18 }}
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
                                <img
                                    src={GitHubLogo}
                                    alt="GitHub Link"
                                    className="contact-socials-img"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/holland-m-wesley-6a7040400"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <img
                                    src={LinkedInLogo}
                                    alt="LinkedIn Link"
                                    className="contact-socials-img"
                                />
                            </a>
                        </div>

                        <div className="contact-note">
                            <strong>How This Form Works</strong>
                            <span>
                                Protected with Cloudflare Turnstile and a spam-trap field,
                                then sent through a Vercel API route with Resend.
                            </span>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

export default Contact;