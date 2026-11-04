
import "./GeneralProjectStyling.css";

// Phantom Hunters assets
import phantomScreenshot01 from "../../assets/project/individualProjects/PhantomHunters/Phantom_1.jpg";
import phantomScreenshot02 from "../../assets/project/individualProjects/PhantomHunters/Phantom_2.jpg";
import phantomScreenshot03 from "../../assets/project/individualProjects/PhantomHunters/Phantom_3.jpg";
import phantomScreenshot04 from "../../assets/project/individualProjects/PhantomHunters/Phantom_4.jpg";
import phantomScreenshot05 from "../../assets/project/individualProjects/PhantomHunters/Phantom_5.jpg";
import phantomScreenshot06 from "../../assets/project/individualProjects/PhantomHunters/Phantom_6.jpg";
import projectVideo from "../../assets/project/individualProjects/PhantomHunters/PhantomHunters_Video.mp4";

function PhantomHunters() {

    const screenshots = [
        {
            src: phantomScreenshot01,
            alt: "Phantom Hunters platforming section with elevated platforms and hazards",
            caption: "Platforming section with elevated routes and environmental hazards",
        },
        {
            src: phantomScreenshot02,
            alt: "Phantom Hunters character navigating an atmospheric cave environment",
            caption: "Exploration through an atmospheric cave environment",
        },
        {
            src: phantomScreenshot03,
            alt: "Phantom Hunters blue zone level section",
            caption: "A blue zoned themed section within the level",
        },
        {
            src: phantomScreenshot04,
            alt: "Phantom Hunters red hazard corridor",
            caption: "High-contrast hazard corridor",
        },
        {
            src: phantomScreenshot05,
            alt: "Phantom Hunters boss encounter",
            caption: "Boss encounter and combat space",
        },
        {
            src: phantomScreenshot06,
            alt: "Phantom Hunters gameplay during a boss encounter",
            caption: "Combat gameplay during the encounter",
        },
    ];

    const designChallenges = [
        {
            title: "Enemy Behaviour",
            challenge:
                "Enemy encounters needed to create pressure while the player moved through the platforming sections.",
            solution:
                "The prototype includes phantom AI with patrolling and chasing behaviour, creating different types of enemy interaction.",
        },
        {
            title: "Atmosphere and Level Readability",
            challenge:
                "The haunted setting needed a distinct visual atmosphere while keeping platforms, hazards and routes readable.",
            solution:
                "Fog, lighting, layered background parallax and ambient audio were used to build atmosphere throughout the level.",
        },
    ];

    return (
        <main className="project-page">

            {/* Project Header */}

            <header className="project-page_top">

                <h1>Phantom Hunters</h1>

                <p>
                    A 2D side-scrolling action-platformer featuring
                    exploration, combat, environmental hazards and
                    hostile phantom enemies.
                </p>

            </header>


            {/* Main Project Media */}

            <section className="project-page_media">

                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                    poster={phantomScreenshot01}
                >
                    <source src={projectVideo} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>

            </section>


            {/* Project Overview */}

            <section className="project-page_overview">

                <h2>About the Project</h2>

                <p>
                    Phantom Hunters is a 2D side-scrolling platformer
                    developed independently in Unity as a personal
                    project during my spare time. The game combines
                    platforming, exploration and combat across a
                    collection of visually distinct environments.
                </p>

                <p>
                    Players navigate handcrafted levels containing
                    environmental hazards, traps and hostile phantom
                    enemies. The project focuses on responsive controls,
                    enemy interactions, combat and level design.
                </p>

                <p>
                    I independently handled the programming, level
                    design and implementation. Most art and audio
                    assets were sourced from royalty-free or
                    Creative Commons-licensed collections.
                </p>

            </section>


            {/* Project Information */}

            <section className="project-page_information">

                <h2>Project Information</h2>

                <div className="project-page_information-grid">

                    <article className="project-page_information-item">
                        <h3>Engine</h3>
                        <p>Unity 2D URP</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Language</h3>
                        <p>C#</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Genre</h3>
                        <p>2D Side-Scrolling Platformer</p>
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

                    <article className="project-page_feature">

                        <h3>Platforming and Combat</h3>

                        <p>
                            Side-scrolling movement, jumping and
                            combat mechanics form the core of the
                            player experience.
                        </p>

                    </article>

                    <article className="project-page_feature">

                        <h3>Phantom Enemy AI</h3>

                        <p>
                            Hostile phantoms use patrolling and
                            chasing behaviour to interact with
                            the player during encounters.
                        </p>

                    </article>

                    <article className="project-page_feature">

                        <h3>Atmospheric Level Design</h3>

                        <p>
                            Fog, lighting, background parallax and
                            ambient audio help establish the haunted
                            setting and its atmosphere.
                        </p>

                    </article>

                </div>

            </section>


            {/* Development */}

            <section className="project-page_development">

                <h2>Development</h2>

                <p>
                    Phantom Hunters was developed in Unity using
                    C# and the 2D Universal Render Pipeline.
                    As a solo project, I was responsible for the
                    code, level design and implementation.
                </p>

                <p>
                    The gameplay combines side-scrolling movement
                    and jumping with combat, enemy interactions,
                    and a health and damage system. Phantom enemies
                    use patrolling and chasing behaviours to create
                    encounters throughout the level.
                </p>

                <p>
                    The environment uses fog, lighting and layered
                    background parallax to create depth and support
                    the horror-inspired atmosphere. Sound effects
                    and ambient audio further contribute to the
                    presentation.
                </p>

                <p>
                    Most visual and audio assets were sourced from
                    royalty-free or Creative Commons-licensed
                    collections. My focus was on integrating these
                    resources into the game and developing the
                    gameplay, level layout and supporting systems.
                </p>

            </section>


            {/* Challenges and Solutions */}

            <section className="project-page_challenges">

                <h2>Challenges &amp; Solutions</h2>

                <div className="project-page_challenges-grid">

                    {designChallenges.map((item) => (

                        <article
                            className="project-page_challenge"
                            key={item.title}
                        >

                            <h3>{item.title}</h3>

                            <p>
                                <strong>Design consideration:</strong>{" "}
                                {item.challenge}
                            </p>

                            <p>
                                <strong>Implementation:</strong>{" "}
                                {item.solution}
                            </p>

                        </article>

                    ))}

                </div>

            </section>


            {/* Screenshot Gallery */}

            <section className="project-page_gallery">

                <h2>Gameplay &amp; Screenshots</h2>

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
                    Developing Phantom Hunters gave me experience
                    building a complete 2D platformer prototype
                    independently, from gameplay programming and
                    enemy behaviour to level layout and implementation.
                </p>

                <p>
                    It also strengthened my understanding of how
                    gameplay systems and environmental presentation
                    work together. Movement, enemy encounters,
                    health, lighting, fog and audio all contribute
                    to the overall player experience.
                </p>

            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="Phantom Hunters project links"
            >

                <a
                    href="https://github.com/Sami-Red/Phantom-Hunters"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repository
                </a>

                <a
                    href="https://saaami.itch.io/phantom-hunters"
                    target="_blank"
                    rel="noreferrer"
                >
                    Play on itch.io
                </a>

                <a
                    href="https://www.youtube.com/watch?v=SjewGsat8Pc"
                    target="_blank"
                    rel="noreferrer"
                >
                    YouTube Showcase
                </a>

            </nav>

        </main>
    );

}

export default PhantomHunters;
