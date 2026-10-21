
import "./ValhallaDeception.css";

// Gameplay video
import gameplayVideo from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Gameplay-Video-01.mp4";

// Level screenshots
import levelScreenshot01 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-01.png";
import levelScreenshot02 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-02.png";
import levelScreenshot03 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-03.png";
import levelScreenshot04 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-04.jpg";
import levelScreenshot05 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-05.png";
import levelScreenshot06 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-06.png";
import levelScreenshot07 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-07.jpg";
import levelScreenshot08 from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Screenshot-08.jpg";

// Development assets
import levelTileset from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Level-Tileset.jpg";
import torchSprites from "../../assets/project/individualProjects/valhallasdeception/Valhallas-Deception-Torch-Sprites.png";

// Project proposal
import projectProposal from "../../assets/project/individualProjects/valhallasdeception/project-Proposal.pdf";

function ValhallaDeception() {
    const screenshots = [
        { src: levelScreenshot01, alt: "Valhalla's Deception level screenshot 1" },
        { src: levelScreenshot02, alt: "Valhalla's Deception level screenshot 2" },
        { src: levelScreenshot03, alt: "Valhalla's Deception level screenshot 3" },
        { src: levelScreenshot04, alt: "Valhalla's Deception level screenshot 4" },
        { src: levelScreenshot05, alt: "Valhalla's Deception level screenshot 5" },
        { src: levelScreenshot06, alt: "Valhalla's Deception level screenshot 6" },
        { src: levelScreenshot07, alt: "Valhalla's Deception level screenshot 7" },
        { src: levelScreenshot08, alt: "Valhalla's Deception level screenshot 8" },
    ];

    const challenges = [
        {
            title: "Team Coordination",
            challenge:
                "Coordinating a seven-person team when participation and contributions were inconsistent.",
            learning:
                "Clear responsibilities, communication, and progress tracking help keep a project moving.",
        },
        {
            title: "Role Alignment",
            challenge:
                "Balancing project management responsibilities with opportunities to contribute directly to the game.",
            learning:
                "Understanding your role and strengths helps you contribute more effectively to a team.",
        },
        {
            title: "Technical Understanding",
            challenge:
                "Managing a game project without a strong programming background.",
            learning:
                "Project managers benefit from understanding technical requirements, dependencies, and progress.",
        },
        {
            title: "Prioritisation",
            challenge:
                "Balancing team coordination, individual contributions, and the goal of completing the game.",
            learning:
                "Prioritising tasks and delegating effectively helps make the best use of a team's time.",
        },
    ];

    return (
        <main className="project-page">
            <header className="project-page_top">
                <h1>Valhalla's Deception</h1>
                <p>
                    A 2D action-adventure platformer developed in C# using
                    MonoGame as part of a team project.
                </p>
            </header>

            <section className="project-page_media">
                <img
                    src={levelScreenshot01}
                    alt="Valhalla's Deception gameplay preview"
                />
            </section>

            <section className="project-page_overview">
                <h2>About the Project</h2>
                <p>
                    Valhalla's Deception is a 2D action-adventure platformer
                    built with MonoGame and C#. The game combines platforming
                    with combat in a Viking-inspired setting.
                </p>
                <p>
                    This project was developed as part of a seven-person team,
                    with project management and collaboration forming part of
                    the development process.
                </p>
            </section>

            <section className="project-page_information">
                <h2>Project Information</h2>
                <div className="project-page_information-grid">
                    <article className="project-page_information-item">
                        <h3>Engine / Framework</h3>
                        <p>MonoGame</p>
                    </article>
                    <article className="project-page_information-item">
                        <h3>Language</h3>
                        <p>C#</p>
                    </article>
                    <article className="project-page_information-item">
                        <h3>Genre</h3>
                        <p>2D Action-Adventure Platformer</p>
                    </article>
                    <article className="project-page_information-item">
                        <h3>Team Size</h3>
                        <p>7 members</p>
                    </article>
                </div>
            </section>

            <section className="project-page_features">
                <h2>Key Features</h2>
                <div className="project-page_features-grid">
                    <article className="project-page_feature">
                        <h3>Platforming</h3>
                        <p>
                            Navigate levels using movement, jumping, and
                            traversal mechanics.
                        </p>
                    </article>
                    <article className="project-page_feature">
                        <h3>Combat</h3>
                        <p>
                            Face enemies using the game's action and combat
                            mechanics.
                        </p>
                    </article>
                    <article className="project-page_feature">
                        <h3>Level Design</h3>
                        <p>
                            Explore environments built from tile-based assets,
                            obstacles, and hazards.
                        </p>
                    </article>
                </div>
            </section>

            <section className="project-page_development">
                <h2>Development</h2>
                <p>
                    The game was developed in C# using the MonoGame framework.
                    Its environments use tile-based artwork, with different
                    landscapes and platforms creating the levels.
                </p>

                <div className="project-page_development-assets">
                    <figure>
                        <h3>Level Tileset</h3>
                        <img
                            src={levelTileset}
                            alt="Valhalla's Deception level tileset"
                            loading="lazy"
                        />
                    </figure>

                    <figure>
                        <h3>Torch Sprites</h3>
                        <img
                            src={torchSprites}
                            alt="Valhalla's Deception torch sprites"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </section>

            <section className="project-page_challenges">
                <h2>Challenges &amp; Lessons Learned</h2>
                <div className="project-page_challenges-grid">
                    {challenges.map((item) => (
                        <article
                            className="project-page_challenge"
                            key={item.title}
                        >
                            <h3>{item.title}</h3>
                            <p>
                                <strong>Challenge:</strong> {item.challenge}
                            </p>
                            <p>
                                <strong>What I learned:</strong> {item.learning}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="project-page_gameplay">
                <h2>Full Gameplay Video</h2>
                <p>
                    Watch a gameplay walkthrough of Valhalla's Deception.
                </p>
                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                >
                    <source src={gameplayVideo} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </section>

            <section className="project-page_gallery">
                <h2>Gameplay Screenshots</h2>
                <div className="project-page_gallery-grid">
                    {screenshots.map((screenshot) => (
                        <figure key={screenshot.src}>
                            <img
                                src={screenshot.src}
                                alt={screenshot.alt}
                                loading="lazy"
                            />
                            <figcaption>{screenshot.alt}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <nav className="project-page_links" aria-label="Project links">
                <a
                    href="https://github.com/Sami-Red/Valhalla-s-Deception"
                    target="_blank"
                    rel="noreferrer"
                >
                    View on GitHub
                </a>
                <a
                    href={projectProposal}
                    target="_blank"
                    rel="noreferrer"
                >
                    Project Proposal PDF
                </a>
            </nav>
        </main>
    );
}

export default ValhallaDeception;
