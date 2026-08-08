import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
    const [state, handleSubmit] = useForm("xoeajdwg");

    return (
        <section className="contact" id="contact">
            <div className="contact_container">

                <div className="contact_header">
                    <h1>Contact</h1>
                    <p>
                        I'm currently seeking graduate software engineering opportunities and
                        would be happy to discuss roles, projects, collaborations, or technology.
                    </p>
                </div>

                {state.succeeded ? (
                    <div className="contact_success">
                        <h2>Message sent!</h2>
                        <p>Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form className="contact_form" onSubmit={handleSubmit}>

                        <div className="form_group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />

                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Tell me about your project or opportunity..."
                                required
                            />

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button
                            className="contact_button"
                            type="submit"
                            disabled={state.submitting}
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                )}

                <div className="contact_links">

                    <a
                        className="contact_link_button"
                        href="https://github.com/Sami-Red"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub
                    </a>

                    <a
                        className="contact_link_button"
                        href="/cv.pdf"
                        download="Sami-Uysal-CV.pdf"
                    >
                        Download CV
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;