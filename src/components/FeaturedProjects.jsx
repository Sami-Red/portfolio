/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */

import "./FeaturedProjects.css";

import CyberxRaceVideo from "../assets/project/cyberxrace.mp4";
import Tankworld from "../assets/project/Tankworld.mp4";
import Dinomanager from "../assets/project/Dinomanager.mp4";
import Portfolio from "../assets/project/Portfolio.mp4";

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
                        <video
                            className="project-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src={Portfolio} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                            <a
                                href="https://github.com/Sami-Red/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            GitHub
                            </a>
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
                            <a
                                href="https://github.com/Sami-Red/CyberX-Race"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            GitHub
                            </a>
                            <a href="#CyberXMore">View More</a>
                        </div>
                    </div>

                </div>

                {/* Dino Task Manager */}
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
                            <source src={Dinomanager} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="featured-projects_content">
                        <h2>Dino Task Manager</h2>
                        <h3>C#, Console, GitHub</h3>

                        <p>
                            Developed a console-based task management application in
                            C#, implementing CRUD functionality, methods, loops, and
                            collections to practise core programming concepts.
                        </p>

                        <div className="featured-projects_button">
                            <a
                                href="https://github.com/Sami-Red/To-Do-List-console-version"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            GitHub
                            </a>
                            <a href="#DinoTaskManagerMore">View More</a>
                        </div>
                    </div>

                </div>

                {/* Tank World */}
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
                            <source src={Tankworld} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="featured-projects_content">
                        <h2>Tank World</h2>
                        <h3>C#, Unity, GitHub</h3>
                        <p>
                            Developed a multiplayer tank battle game in Unity,
                            implementing network programming and real-time multiplayer
                            functionality.
                        </p>

                        <div className="featured-projects_button">
                            <a
                                href="https://github.com/Sami-Red/Tank_World"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            GitHub
                            </a>
                            <a href="#TankWorldMore">View More</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default FeaturedProjects;