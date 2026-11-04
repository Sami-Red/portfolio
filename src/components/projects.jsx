
import "./projects.css";
import { Link } from "react-router-dom";

// Portfolio and existing project videos
import Portfolio from "../assets/project/Portfolio.mp4";
import CyberxRaceVideo from "../assets/project/cyberxrace.mp4";
import Tankworld from "../assets/project/Tankworld.mp4";
import ValhallasDeception from "../assets/project/ValhallasDeception.mp4";

// Individual project videos
import Dinomanager from "../assets/project/individualProjects/dinoTaskManager/Dinomanager_Video.mp4";
import PhantomHunters from "../assets/project/individualProjects/PhantomHunters/PhantomHunters_Video.mp4";
import TheFoxHasAGun from "../assets/project/individualProjects/theFoxHasAGun/TheFoxHasAGun_video.mp4";
import DanubeFields from "../assets/project/individualProjects/Danubefields/Danube_video.mp4";


function Projects() {

    return (

        <div className="projects">

            {/* Projects Header */}

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
                            Designed and developed a responsive portfolio
                            website using React, applying component-based
                            architecture, modern CSS and Git version control
                            to showcase personal software projects.
                        </p>


                        <div className="projects_button">

                            <a
                                href="https://github.com/Sami-Red/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <Link to="/projects/portfolio">
                                View More
                            </Link>

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
                            Developed an AI racing simulation in Unity using
                            ML-Agents and reinforcement learning, training
                            autonomous vehicle behaviour through testing
                            and optimisation.
                        </p>


                        <div className="projects_button">

                            <a
                                href="https://github.com/Sami-Red/CyberX-Race"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <Link to="/projects/cyberx-race">
                                View More
                            </Link>

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

                        <h3>C#, .NET, Console Application</h3>

                        <p>
                            Developed a console-based task management
                            application in C#, implementing task creation,
                            viewing, removal and persistent text-file
                            storage.
                        </p>


                        <div className="projects_button">

                            <a
                                href="https://github.com/Sami-Red/To-Do-List-console-version"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <Link to="/projects/dino-task-manager">
                                View More
                            </Link>

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
                            implementing network programming and real-time
                            multiplayer functionality.
                        </p>


                        <div className="projects_button">

                            <a
                                href="https://github.com/Sami-Red/Tank_World"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <Link to="/projects/tank-world">
                                View More
                            </Link>

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
                            Independently developed a 2D side-scrolling
                            platformer featuring phantom enemy AI, combat,
                            health systems, traps and level design.
                        </p>


                        <div className="projects_button">

                            <a
                                href="https://github.com/Sami-Red/Phantom-Hunters"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <Link to="/projects/phantom-hunters">
                                View More
                            </Link>

                        </div>

                    </div>

                </div>


                {/* The Fox Has a Gun */}

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

                        <h2>The Fox Has a Gun</h2>

                        <h3>C#, Unity, Game AI, Procedural Generation</h3>

                        <p>
                            Developed a Game AI combat simulation featuring
                            procedurally generated terrain, finite state
                            machine enemy behaviour, player combat and
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

                            <Link to="/projects/the-fox-has-a-gun">
                                View More
                            </Link>

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

                        <h3>Unreal Engine 4.27, Level Design</h3>

                        <p>
                            Collaborated with an international team to
                            develop a 3D isometric sustainable farming
                            simulator, contributing to the environment
                            layout and level design.
                        </p>


                        <div className="projects_button">

                            <a
                                href="https://github.com/goingafk/iLRN-Game-Jam-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <Link to="/projects/danube-fields">
                                View More
                            </Link>

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

                        <h3>C#, MonoGame, Pixel Art</h3>

                        <p>
                            Contributed as Project Manager and 2D Level Artist
                            to a seven-person team developing a 2D action
                            platformer, creating pixel-art environment tiles
                            and coordinating project development.
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
