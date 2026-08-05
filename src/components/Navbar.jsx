/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */

import profilePic from "../assets/navbar/logo.png";
import githublogo from "../assets/navbar/github-logo.svg"
import linkedinLogo from "../assets/navbar/linkedin-logo.svg";
import itchiologo from "../assets/navbar/itchio-logo.svg";
import "./Navbar.css";
function Navbar(){
    return(
    <div className="navbar">
        <div className="navbar_left">
            <img src={profilePic} alt="Logo" />
        </div>
        <div className="navbar_right">
            <div className="navbar_buttons">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#about">CV</a>
            </div>
        </div>
        <div className="navbar_socials">
            <a href="https://www.linkedin.com/in/sami-uysal-657565196/" target="_blank" rel="noopener noreferrer">
                <img src={githublogo} alt="GitHub" />
            </a>
            <a href="https://github.com/Sami-Red" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="https://saaami.itch.io/" target="_blank" rel="noopener noreferrer">
                <img src={itchiologo} alt="Itch.io" />
            </a>
        </div>
    </div>
    )
}
export default Navbar;