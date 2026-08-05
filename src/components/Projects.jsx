/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */
import "./Projects.css"
import CyberxRaceVideo from "../assets/project/cyberxrace.mp4"
import TankWorldGif from "../assets/project/TankWorldGif.gif"
import DinoManagerGif from "../assets/project/DinoManager.gif"
import tempPortfoliopic from "../assets/project/tempPortfoliopic.png"

function Projects(){
    return(
    <div className="projects">
        <div className="projects_top">
            <h1>Featured Projects</h1>
        </div>
        
        <div className="projects_bottom">
            <div className="projects_card">
                <div className="project_image">
                    <img src={tempPortfoliopic} alt="Portfolio Website" />
                </div>
                <div className="project_content">
                    <h2>Portfolio Website</h2>
                    <h3>React, JavaScript, CSS, Git</h3>
                    <p>Designed and developed a responsive portfolio website using React, applying component-based architecture, modern CSS, and Git version control to showcase personal software projects.</p>
                    <div className="project_button"> 
                        <a href="#Portfolio Github">Github</a>
                        <a href="#Portfolio more">View More</a>
                    </div>
                </div>
            </div>
            <div className="projects_card">
                <div className="project_image">
                    <video
                        className="project-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    >
                        <source src={CyberxRaceVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="project_content">
                    <h2>CyberX: Race</h2>
                    <h3>C#, Python, Unity, ML-Agents, Git</h3>
                    <p>Developed an AI racing simulation in Unity using ML-Agents and reinforcement learning, training autonomous vehicle behaviour through testing and optimisation.</p>
                    <div className="project_button"> 
                        <a href="#CyberX Github">Github</a>
                        <a href="#CyberX more">View More</a>
                    </div>
                    
                </div>
            </div>
            <div className="projects_card">
                <div className="project_image">
                    <img src={DinoManagerGif} alt="Dino Task Manager GIF"/>
                </div>
                <div className="project_content">
                    <h3>Dino Task Manager</h3>
                    <h3>C#, Console, Git</h3>
                    <p>
                        Developed a console-based task management application in C#, implementing
                        CRUD functionality, methods, loops, and collections to practise core
                        programming concepts.
                    </p>
                    <div className="project_button">
                        <a href="#DinoTaskManager Github">Github</a>
                        <a href="#DinoTaskManager more">View More</a>
                    </div>
                </div>
            </div>
            <div className="projects_card">
                <div className="project_image">
                    <img src={TankWorldGif} alt="Tank World GIF" />
                </div>
                <div className="project_content">
                    <h2>Tank World</h2>
                    <h3>C#, Unity, Git</h3>
                    <p>Developed a multiplayer tank battle game in Unity, implementing network programming and real-time multiplayer functionality.</p>
                    <div className="project_button">
                        <a href="#TankWorld Github">Github</a>
                        <a href="#TankWorld more">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>        
    )
}
export default Projects;