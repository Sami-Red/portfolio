import "./Footer.css"
import githublogo from "../assets/skills/github-logo.svg"
import linkedinLogo from "../assets/navbar/linkedin-logo.svg";

function Footer() {
    return (
        <footer className="footer">
            <p>© 2026 Sami Uysal</p>

            <p>Built with React &amp; Vite</p>

            <div className="footer_links">
                <a href="https://github.com/Sami-Red" target="_blank" rel="noreferrer">
                    <img src={githublogo} alt="GitHub" />
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/sami-uysal-657565196/" target="_blank" rel="noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;