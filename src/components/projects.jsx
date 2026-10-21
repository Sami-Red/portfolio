import "./Projects.css";
import { Link } from "react-router-dom";

// Imports for images/videos
import Portfolio from "../assets/project/Portfolio.mp4";
import CyberxRaceVideo from "../assets/project/cyberxrace.mp4";
import Tankworld from "../assets/project/Tankworld.mp4";
import Dinomanager from "../assets/project/Dinomanager.mp4";
import PhantomHunters from "../assets/project/PhantomHunters.mp4";
import TheFoxHasAGun from "../assets/project/TheFoxHasAGun.mp4";
import DanubeFields from "../assets/project/DanubeFields.mp4";
import ValhallasDeception from "../assets/project/ValhallasDeception.mp4";

function Projects() {
    return (
        <div className="projects">

            <div className="projects_top">
                <h1>Projects</h1>
            </div>

            <div className="projects_bottom">

                {/* Portfolio */}
                <div className="projects_card">

                    <div className="projects_image">
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

                    <div className="projects_content">
                        <h2>Portfolio Website</h2>
                        <h3>React, JavaScript, CSS, Git</h3>

                        <p>
                            Designed and developed a responsive portfolio website using
                            React, applying component-based architecture, modern CSS,
                            and Git version control to showcase personal software projects.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#PortfolioMore">
                                View More
                            </a>
                        </div>
                    </div>

                </div>


                {/* CyberX */}
                <div className="projects_card">

                    <div className="projects_image">
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

                    <div className="projects_content">
                        <h2>CyberX: Race</h2>
                        <h3>C#, Python, Unity, ML-Agents, Git</h3>

                        <p>
                            Developed an AI racing simulation in Unity using ML-Agents
                            and reinforcement learning, training autonomous vehicle
                            behaviour through testing and optimisation.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/CyberX-Race"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#CyberXMore">
                                View More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Dino Task Manager */}
                <div className="projects_card">

                    <div className="projects_image">
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

                    <div className="projects_content">
                        <h2>Dino Task Manager</h2>
                        <h3>C#, Console, GitHub</h3>
                        <p>
                            Developed a console-based task management application in
                            C#, implementing CRUD functionality, methods, loops, and
                            collections to practise core programming concepts.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/To-Do-List-console-version"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#DinoTaskManagerMore">
                                View More
                            </a>
                        </div>
                    </div>

                </div>


                {/* Tank World */}
                <div className="projects_card">

                    <div className="projects_image">
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

                    <div className="projects_content">
                        <h2>Tank World</h2>
                        <h3>C#, Unity, GitHub</h3>
                        <p>
                            Developed a multiplayer tank battle game in Unity,
                            implementing network programming and real-time multiplayer
                            functionality.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/Tank_World"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#TankWorldMore">
                                View More
                            </a>
                        </div>
                    </div>

                </div>


                {/* Phantom Hunters */}
                <div className="projects_card">

                    <div className="projects_image">
                        <video
                            className="project-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src={PhantomHunters} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="projects_content">
                        <h2>Phantom Hunters</h2>
                        <h3>C#, Unity, GitHub</h3>
                        <p>
                            Developed a 2D side-scrolling platformer 
                            in Unity featuring enemy AI, combat, health 
                            systems, traps, and atmospheric level design 
                            as a solo university project.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/Phantom-Hunters"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#PhantomHuntersMore">
                                View More
                            </a>
                        </div>
                    </div>

                </div>


                {/* The Fox Has A Gun */}
                <div className="projects_card">

                    <div className="projects_image">
                        <video
                            className="project-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src={TheFoxHasAGun} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="projects_content">
                        <h2>The Fox Has A Gun</h2>
                        <h3>C#, Unity, GitHub</h3>
                        <p>
                            Developed a Game AI combat simulation in Unity 
                            featuring procedurally generated terrain, finite 
                            state machine enemy behaviour, player combat, and 
                            dynamic AI state transitions.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/the-fox-has-a-gun"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#FoxHasAGunMore">
                                View More
                            </a>
                        </div>
                    </div>

                </div>


                {/* Danube Fields */}
                <div className="projects_card">

                    <div className="projects_image">
                        <video
                            className="project-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src={DanubeFields} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="projects_content">
                        <h2>Danube Fields</h2>
                        <h3>C#, Unreal Engine, GitHub</h3>
                        <p>
                            Collaborated with international students 
                            to develop a 3D isometric sustainable farming 
                            simulator inspired by games such as Stardew Valley 
                            and Harvest Moon, focused on sustainable agriculture 
                            and resource management.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/goingafk/iLRN-Game-Jam-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a href="#DanubeFieldsMore">
                                View More
                            </a>
                        </div>
                    </div>

                </div>


                {/* Valhalla's Deception */}
                <div className="projects_card">

                    <div className="projects_image">
                        <video
                            className="project-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src={ValhallasDeception} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="projects_content">
                        <h2>Valhalla's Deception</h2>
                        <h3>C#, MonoGame, GitHub</h3>
                        <p>
                            Collaborated as Project Manager on a team-developed 
                            2D hack-and-slash platformer, helping coordinate 
                            development of combat, enemy AI, player abilities, 
                            inventory systems, and branching gameplay mechanics.
                        </p>

                        <div className="projects_button">
                            <a
                                href="https://github.com/Sami-Red/Valhalla-s-Deception"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <Link to="/projects/valhallas-deception">
                                View More
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Projects;