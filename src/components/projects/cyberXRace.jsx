
import "./GeneralProjectStyling.css";

// CyberX: Race videos
import officialDemo from "../../assets/project/individualProjects/cyberXRace/CyberXRace_Official_Project_Demo.mp4";

import aiRacingDemo from "../../assets/project/individualProjects/cyberXRace/CyberXRace_AI_Racing_Demo.mp4";

import trackLayoutVideo from "../../assets/project/individualProjects/cyberXRace/CyberXRace_Track_Layout_Editor.mp4";

import alternateRaceFootage from "../../assets/project/individualProjects/cyberXRace/CyberXRace_Alternate_Race_Footage.mp4";


function CyberXRace() {

    const supportingVideos = [
        {
            src: aiRacingDemo,
            title: "AI Racing Simulation",
            description:
                "Footage of the autonomous racing agent navigating the circuit and demonstrating its learned driving behaviour.",
        },
        {
            src: trackLayoutVideo,
            title: "Track Layout & Environment",
            description:
                "A closer look at the racing environment and track layout inside the Unity Editor.",
        },
        {
            src: alternateRaceFootage,
            title: "Additional Racing Footage",
            description:
                "Further footage showcasing the racing environment and autonomous vehicle behaviour.",
        },
    ];

    const features = [
        {
            title: "Reinforcement Learning",
            description:
                "An autonomous racing agent trained using Unity ML-Agents and the Proximal Policy Optimisation (PPO) algorithm.",
        },
        {
            title: "Vehicle Navigation",
            description:
                "Raycast observations, waypoint navigation and vehicle orientation help the agent understand its position and surroundings on the circuit.",
        },
        {
            title: "Reward Shaping",
            description:
                "A reward system encourages track progression, forward movement and efficient lap completion while penalising collisions, drifting and poor driving behaviour.",
        },
    ];

    const challenges = [
        {
            title: "Developing Autonomous Driving Behaviour",
            challenge:
                "The agent needed to learn how to navigate the racing circuit without relying on manually scripted driving decisions.",
            solution:
                "Unity ML-Agents was used to train the agent through reinforcement learning, allowing it to learn driving behaviour from observations, actions and reward feedback.",
        },
        {
            title: "Balancing Speed and Stability",
            challenge:
                "Driving quickly was not enough. The agent also needed to remain on the track, navigate corners and avoid excessive sideways movement.",
            solution:
                "Reward shaping was used to encourage waypoint progression and forward movement while applying penalties for wall proximity, drifting, backwards movement and aggressive steering at speed.",
        },
    ];

    return (

        <main className="project-page">


            {/* Project Header */}

            <header className="project-page_top">

                <h1>CyberX: Race</h1>

                <p>
                    An autonomous AI racing simulation developed
                    in Unity using machine learning and reinforcement
                    learning to train a vehicle to navigate a racing
                    circuit without human input.
                </p>

            </header>


            {/* Main Project Media - Official Demo */}

            <section className="project-page_media">

                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                >
                    <source src={officialDemo} type="video/mp4" />

                    Your browser does not support HTML video.
                </video>

            </section>


            {/* Project Overview */}

            <section className="project-page_overview">

                <h2>About the Project</h2>

                <p>
                    CyberX: Race is an autonomous AI racing project
                    developed as my final-year BSc Computer Game
                    Development project. The aim was to create
                    an AI-controlled vehicle capable of navigating
                    a custom racing circuit without direct human input.
                </p>

                <p>
                    The project explores how reinforcement learning
                    can be applied to game AI. Using Unity ML-Agents,
                    I trained a racing agent with the Proximal Policy
                    Optimisation (PPO) algorithm to understand the
                    track, control the vehicle and improve its
                    driving behaviour through repeated training.
                </p>

                <p>
                    The training process focused on teaching
                    the agent to make progress around the circuit,
                    avoid collisions with track boundaries and
                    complete laps more consistently.
                </p>

                <p>
                    Development involved building the racing
                    environment, implementing vehicle physics,
                    designing the agent's observations and actions,
                    and experimenting with reward functions
                    to improve its performance.
                </p>

            </section>


            {/* Project Information */}

            <section className="project-page_information">

                <h2>Project Information</h2>

                <div className="project-page_information-grid">

                    <article className="project-page_information-item">
                        <h3>Engine</h3>
                        <p>Unity 2022.3.15f1</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Languages</h3>
                        <p>C# &amp; Python</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Technology</h3>
                        <p>Unity ML-Agents</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>AI Algorithm</h3>
                        <p>PPO Reinforcement Learning</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Project Type</h3>
                        <p>Final-Year University Project</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Training Period</h3>
                        <p>Approximately 2 Months</p>
                    </article>

                </div>

            </section>


            {/* Key Features */}

            <section className="project-page_features">

                <h2>Key Features</h2>

                <div className="project-page_features-grid">

                    {features.map((feature) => (

                        <article
                            className="project-page_feature"
                            key={feature.title}
                        >

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                        </article>

                    ))}

                </div>

            </section>


            {/* Development */}

            <section className="project-page_development">

                <h2>Development &amp; Implementation</h2>

                <p>
                    CyberX: Race was developed in Unity using
                    C# for gameplay systems and the Unity
                    ML-Agents Toolkit to implement and train
                    the autonomous racing agent. Python was
                    used through the ML-Agents training interface.
                </p>

                <p>
                    <strong>Vehicle Controls:</strong> The racing
                    environment includes physics-based vehicle
                    controls for acceleration, braking and steering.
                    Rigidbody physics, speed limits and sideways
                    velocity reduction help control the vehicle's
                    movement.
                </p>

                <p>
                    <strong>Agent Observations:</strong> The AI
                    collects information about its environment
                    before making driving decisions. This includes
                    the relative position of the next waypoint,
                    local vehicle velocity, orientation and
                    distance measurements from multiple raycast
                    directions.
                </p>

                <p>
                    <strong>Agent Actions:</strong> The agent
                    controls continuous movement and steering
                    inputs. These actions influence acceleration,
                    turning and vehicle movement through the
                    racing environment.
                </p>

                <p>
                    <strong>Reward System:</strong> Reward shaping
                    encourages the agent to move towards
                    waypoints, maintain forward momentum and
                    complete laps. Negative rewards discourage
                    collisions, excessive drifting, moving
                    backwards, getting stuck and leaving
                    the track.
                </p>

                <p>
                    <strong>Training:</strong> The PPO training
                    configuration controls parameters including
                    learning rate, batch size, network layers,
                    training steps and reward signals. The
                    process involved repeated training runs
                    and experimentation to improve the agent's
                    racing performance.
                </p>

            </section>


            {/* Challenges and Solutions */}

            <section className="project-page_challenges">

                <h2>Challenges &amp; Solutions</h2>

                <div className="project-page_challenges-grid">

                    {challenges.map((item) => (

                        <article
                            className="project-page_challenge"
                            key={item.title}
                        >

                            <h3>{item.title}</h3>

                            <p>
                                <strong>Challenge:</strong>{" "}
                                {item.challenge}
                            </p>

                            <p>
                                <strong>Solution:</strong>{" "}
                                {item.solution}
                            </p>

                        </article>

                    ))}

                </div>

            </section>


            {/* Supporting Videos */}

            <section className="project-page_gallery">

                <h2>Development &amp; Racing Showcase</h2>

                <div className="project-page_gallery-grid">

                    {supportingVideos.map((video) => (

                        <figure key={video.title}>

                            <video
                                className="project-page_gameplay-video"
                                controls
                                preload="metadata"
                                playsInline
                            >
                                <source
                                    src={video.src}
                                    type="video/mp4"
                                />

                                Your browser does not support HTML video.
                            </video>

                            <figcaption>

                                <strong>{video.title}</strong>

                                <p>{video.description}</p>

                            </figcaption>

                        </figure>

                    ))}

                </div>

            </section>


            {/* What I Learned */}

            <section className="project-page_development">

                <h2>What I Learned</h2>

                <p>
                    CyberX: Race gave me practical experience
                    applying machine learning techniques
                    to game development, particularly
                    reinforcement learning and autonomous
                    agent behaviour.
                </p>

                <p>
                    Developing the agent improved my understanding
                    of observation design, continuous actions,
                    reward shaping and how training parameters
                    influence learning performance.
                </p>

                <p>
                    The project also strengthened my experience
                    with Unity physics, vehicle control systems,
                    Python-based training workflows and the
                    integration of machine learning into
                    interactive simulations.
                </p>

            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="CyberX Race project links"
            >

                <a
                    href="https://github.com/Sami-Red/CyberX-Race"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repository
                </a>

                <a
                    href="https://saaami.itch.io/cyberx-rac"
                    target="_blank"
                    rel="noreferrer"
                >
                    Play on itch.io
                </a>

                <a
                    href="https://www.youtube.com/watch?v=zvTQrPHAR90"
                    target="_blank"
                    rel="noreferrer"
                >
                    Official YouTube Demo
                </a>

            </nav>

        </main>

    );

}

export default CyberXRace;
