/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */

import "./Hero.css";
import profilePic from "../assets/profile-picture.jpeg";
function Hero(){
    return(
        <div className="hero">
            <div className="hero_left">
            <h1>Sami Uysal</h1>
            <h2>Graduate Software Engineer</h2>
            <p>Recent graduate, passionate about creating innovative software solutions.</p>
            <div className="hero_buttons">
                <a href="#projects">Projects</a>
                 <a href="#downloadCV">Download CV</a>
            </div>           
            </div>

            <div className="hero_right">
                <img src={profilePic} alt="Portrait of Sami Uysal" />
            </div>
        </div>
    )
}

export default Hero;