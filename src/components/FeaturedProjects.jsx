/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */

import "./FeaturedProjects.css";

import CyberxRaceVideo from "../assets/project/cyberxrace.mp4";
import TankWorldGif from "../assets/project/TankWorldGif.gif";
import DinoManagerGif from "../assets/project/DinoManager.gif";
import tempPortfoliopic from "../assets/project/tempPortfoliopic.png";

function FeaturedProjects() {
    return (
        <div className="featured-projects">

            <div className="featured-projects_top">
                <h1>Featured Projects</h1>
            </div>

            <div className="featured-projects_bottom">

                {/* Portfolio */}
                <div className="featured-projects_card">

                    <div className="featured-projects_image">
                        <img src={tempPortfoliopic} alt="Portfolio Website" />
                    </div>

                    <div className="featured-projects_content">
                        <h2>Portfolio Website</h2>
                        <h3>React, JavaScript, CSS, Git</h3>

                        <p>
                            Designed and developed a responsive portfolio website using
                            React, applying component-based architecture, modern CSS,
                            and Git version control to showcase personal software projects.
                        </p>

                        <div className="featured-projects_button">
                            <a href="#PortfolioGithub">GitHub</a>
                            <a href="#PortfolioMore">View More</a>
                        </div>
                    </div>

                </div>

                {/* CyberX */}
                <div className="featured-projects_card">

                    <div className="featured-projects_image">
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

                    <div className="featured-projects_content">
                        <h2>CyberX: Race</h2>
                        <h3>C#, Python, Unity, ML-Agents, Git</h3>

                        <p>
                            Developed an AI racing simulation in Unity using ML-Agents
                            and reinforcement learning, training autonomous vehicle
                            behaviour through testing and optimisation.
                        </p>

                        <div className="featured-projects_button">
                            <a href="#CyberXGithub">GitHub</a>
                            <a href="#CyberXMore">View More</a>
                        </div>
                    </div>

                </div>

                {/* Dino Task Manager */}
                <div className="featured-projects_card">

                    <div className="featured-projects_image">
                        <img src={DinoManagerGif} alt="Dino Task Manager GIF" />
                    </div>

                    <div className="featured-projects_content">
                        <h2>Dino Task Manager</h2>
                        <h3>C#, Console, Git</h3>

                        <p>
                            Developed a console-based task management application in
                            C#, implementing CRUD functionality, methods, loops, and
                            collections to practise core programming concepts.
                        </p>

                        <div className="featured-projects_button">
                            <a href="#DinoTaskManagerGithub">GitHub</a>
                            <a href="#DinoTaskManagerMore">View More</a>
                        </div>
                    </div>

                </div>

                {/* Tank World */}
                <div className="featured-projects_card">

                    <div className="featured-projects_image">
                        <img src={TankWorldGif} alt="Tank World GIF" />
                    </div>

                    <div className="featured-projects_content">
                        <h2>Tank World</h2>
                        <h3>C#, Unity, Git</h3>

                        <p>
                            Developed a multiplayer tank battle game in Unity,
                            implementing network programming and real-time multiplayer
                            functionality.
                        </p>

                        <div className="featured-projects_button">
                            <a href="#TankWorldGithub">GitHub</a>
                            <a href="#TankWorldMore">View More</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default FeaturedProjects;