
import "./GeneralProjectStyling.css";

// The Fox Has a Gun assets
import projectVideo from "../../assets/project/individualProjects/theFoxHasAGun/TheFoxHasAGun_video.mp4";

import foxScreenshot01 from "../../assets/project/individualProjects/theFoxHasAGun/thefoxhasagun_2.png";
import foxScreenshot02 from "../../assets/project/individualProjects/theFoxHasAGun/thefoxhasagun_5.png";
import foxScreenshot03 from "../../assets/project/individualProjects/theFoxHasAGun/thefoxhasagun_3.png";
import foxScreenshot04 from "../../assets/project/individualProjects/theFoxHasAGun/thefoxhasagun_4.png";
import foxScreenshot05 from "../../assets/project/individualProjects/theFoxHasAGun/thefoxhasagun_1.png";

function TheFoxHasAGun() {

    const screenshots = [
        {
            src: foxScreenshot01,
            alt: "Fox player character facing a green enemy",
            caption: "Enemy encounter showing the enemy's current AI state and health",
        },
        {
            src: foxScreenshot03,
            alt: "Fox player character navigating a platforming environment",
            caption: "Platforming environment with elevated terrain and obstacles",
        },
        {
            src: foxScreenshot04,
            alt: "Fox character exploring a stone environment",
            caption: "Combat and exploration within the arena",
        },
        {
            src: foxScreenshot02,
            alt: "Procedurally generated terrain with height-based colouring",
            caption: "Procedural terrain generated using layered Perlin noise",
        },
        {
            src: foxScreenshot05,
            alt: "Fox character standing on a floating platform",
            caption: "Player movement and platform layout",
        },
    ];

    const features = [
        {
            title: "Procedural Terrain Generation",
            description:
                "Custom Perlin noise terrain generation using multiple octaves, persistence, lacunarity and adjustable parameters to create varied terrain heights.",
        },
        {
            title: "Finite State Machine AI",
            description:
                "Enemy behaviour is controlled through finite state machines, allowing different enemy types to patrol, detect, chase and attack the player.",
        },
        {
            title: "Player Combat and Health",
            description:
                "Player movement, jumping, dashing, shooting, enemy projectiles and health management create the core combat interactions.",
        },
    ];

    const challenges = [
        {
            title: "Managing Enemy State Transitions",
            challenge:
                "Enemy behaviour needed to respond to the player's position without repeatedly switching between states or triggering attacks too frequently.",
            solution:
                "Finite state machines use detection ranges, state conditions and shooting cooldowns to control enemy behaviour.",
        },
        {
            title: "Generating Varied Terrain",
            challenge:
                "Creating terrain with adjustable height variation required more control than a basic single-layer noise calculation.",
            solution:
                "A custom Perlin noise implementation combines multiple octaves using persistence, lacunarity, frequency and strength parameters.",
        },
    ];

    return (
        <main className="project-page">

            {/* Project Header */}

            <header className="project-page_top">

                <h1>The Fox Has a Gun</h1>

                <p>
                    A Unity-based Game AI project combining player
                    combat, procedural terrain generation and
                    intelligent enemy behaviour using finite
                    state machines.
                </p>

            </header>


            {/* Main Project Media */}

            <section className="project-page_media">

                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                    poster={foxScreenshot01}
                >
                    <source src={projectVideo} type="video/mp4" />

                    Your browser does not support HTML video.
                </video>

            </section>


            {/* Project Overview */}

            <section className="project-page_overview">

                <h2>About the Project</h2>

                <p>
                    The Fox Has a Gun is a Game AI project developed
                    in Unity for the Game AI module. The project
                    explores the interaction between a player and
                    AI-controlled enemies within a combat simulation.
                </p>

                <p>
                    The project combines player movement and shooting
                    mechanics with enemy behaviour controlled through
                    finite state machines. Different enemy types use
                    separate behaviour patterns, including patrolling,
                    shooting and chasing the player.
                </p>

                <p>
                    Alongside the combat simulation, the project
                    includes a procedural terrain generation system
                    built using a custom Perlin noise implementation.
                    This generates terrain meshes with adjustable
                    height variation and height-based colouring.
                </p>

                <p>
                    I developed the project independently, working
                    on the programming, gameplay systems, AI behaviour
                    and procedural terrain generation.
                </p>

            </section>


            {/* Project Information */}

            <section className="project-page_information">

                <h2>Project Information</h2>

                <div className="project-page_information-grid">

                    <article className="project-page_information-item">
                        <h3>Engine</h3>
                        <p>Unity 2022.3.45f1</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Language</h3>
                        <p>C#</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Project Focus</h3>
                        <p>Game AI &amp; Simulation</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Project Type</h3>
                        <p>Solo University Project</p>
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

                <h2>Development</h2>

                <p>
                    The project was developed using Unity and C#,
                    with separate systems handling player controls,
                    enemy behaviour, combat interactions and
                    procedural terrain generation.
                </p>

                <p>
                    <strong>Procedural Terrain:</strong> The terrain
                    generator uses a custom Perlin noise implementation
                    to calculate vertex heights. Multiple noise
                    octaves are combined using persistence and
                    lacunarity to control the level of detail and
                    variation. The resulting vertices, triangles,
                    UV coordinates and colours are used to construct
                    a dynamic mesh.
                </p>

                <p>
                    Terrain colouring is determined by height,
                    creating different visual regions for lower
                    areas, mid-level terrain and higher elevations.
                    Terrain dimensions and generation parameters
                    can be adjusted through exposed variables.
                </p>

                <p>
                    <strong>Enemy AI:</strong> Two different enemy
                    behaviour systems were implemented. Patrolling
                    enemies move between predefined points and
                    transition into shooting behaviour when the
                    player enters their detection range. A second
                    enemy type uses chasing behaviour, pursuing
                    the player when detected before retreating
                    and returning to an idle state.
                </p>

                <p>
                    <strong>Combat and Player Systems:</strong>
                    The player controller includes movement,
                    jumping, double jumping, dashing and shooting.
                    Health and damage systems handle interactions
                    between the player and enemy attacks, with
                    temporary invulnerability and respawning
                    when health is depleted.
                </p>

                <p>
                    <strong>Navigation:</strong> The procedural
                    terrain system also supports NavMesh generation.
                    Objects can be placed using accessibility
                    checks, while the terrain navigation scene
                    includes click-to-move movement and
                    visualised navigation paths.
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


            {/* Screenshot Gallery */}

            <section className="project-page_gallery">

                <h2>Gameplay &amp; Technical Screenshots</h2>

                <div className="project-page_gallery-grid">

                    {screenshots.map((screenshot) => (

                        <figure key={screenshot.src}>

                            <img
                                src={screenshot.src}
                                alt={screenshot.alt}
                                loading="lazy"
                            />

                            <figcaption>
                                {screenshot.caption}
                            </figcaption>

                        </figure>

                    ))}

                </div>

            </section>


            {/* What I Learned */}

            <section className="project-page_development">

                <h2>What I Learned</h2>

                <p>
                    This project strengthened my understanding of
                    artificial intelligence in games, particularly
                    how finite state machines can be used to organise
                    enemy behaviour and manage transitions between
                    different decision-making states.
                </p>

                <p>
                    Developing the terrain generator also provided
                    practical experience with procedural generation,
                    mesh construction, Perlin noise and navigation
                    systems. It helped me understand how mathematical
                    techniques can be used to create interactive
                    environments rather than relying entirely on
                    manually placed level geometry.
                </p>

                <p>
                    Working across the player, enemy and terrain
                    systems gave me experience integrating multiple
                    gameplay components into one Unity project.
                </p>

            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="The Fox Has a Gun project links"
            >

                <a
                    href="https://github.com/Sami-Red/the-fox-has-a-gun"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repository
                </a>

                <a
                    href="https://saaami.itch.io/the-fox-has-a-gun"
                    target="_blank"
                    rel="noreferrer"
                >
                    Play on itch.io
                </a>

                <a
                    href="https://youtu.be/FFSx_IFpFU0"
                    target="_blank"
                    rel="noreferrer"
                >
                    YouTube Demo
                </a>

            </nav>

        </main>
    );

}

export default TheFoxHasAGun;
