/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */

import profilePic from "../assets/logo.png";
import "./Navbar.css";
function Navbar(){
    return(
    <div className="navbar">
        <div className="navbar_left">
            <img src={profilePic} alt="Logo" />
        </div>
        <div className="navbar_right">
            <div className="navbar_buttons">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </div>
    )
}
export default Navbar;