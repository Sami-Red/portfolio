import "./GeneralProjectStyling.css";

// Danube Fields assets
import farmHero from "../../assets/project/individualProjects/danubefields/Danube_3.PNG";
import farmOverview from "../../assets/project/individualProjects/danubefields/Danube_1.PNG";
import farmDetail from "../../assets/project/individualProjects/danubefields/Danube_2.PNG";
import unrealEditor from "../../assets/project/individualProjects/danubefields/Danube_4.PNG";
import unrealOverview from "../../assets/project/individualProjects/danubefields/Danube_5.PNG";
import projectVideo from "../../assets/project/individualProjects/danubefields/Danube_video.mp4";

function DanubeFields() {
    const screenshots = [
        {
            src: farmOverview,
            alt: "Overhead view showing the layout of the Danube Fields farm",
            caption: "Farm layout from an elevated isometric perspective",
        },
        {
            src: farmDetail,
            alt: "Farm buildings, crop plots, fences and pathways",
            caption: "Environmental composition and farm details",
        },
        {
            src: farmHero,
            alt: "Wide view across the Danube Fields farm environment",
            caption: "The farm environment, including crop areas and waterways",
        },
        {
            src: unrealEditor,
            alt: "Danube Fields environment open in the Unreal Engine editor",
            caption: "The environment inside Unreal Engine",
        },
        {
            src: unrealOverview,
            alt: "Wide Unreal Engine editor view of the farm level",
            caption: "Level overview in the Unreal Engine editor",
        },
    ];

    const designChallenges = [
        {
            title: "Organising the Farm Layout",
            challenge:
                "The environment needed to accommodate several farming areas and facilities while still feeling like one connected space.",
            solution:
                "I arranged the fields, buildings and working areas as distinct zones, connecting them with paths, fences and crossings.",
        },
        {
            title: "Translating the Plan into 3D",
            challenge:
                "The initial Miro concept described the farm as a set of functional areas rather than a finished 3D environment.",
            solution:
                "I used the planning layout as a reference when positioning the environment elements and assembling the farm in Unreal Engine.",
        },
    ];

    return (
        <main className="project-page">

            {/* Project Header */}

            <header className="project-page_top">
                <h1>Danube Fields</h1>

                <p>
                    A 3D isometric sustainable farming simulator prototype,
                    developed by an international university team in Vienna,
                    Austria.
                </p>
            </header>


            {/* Main Project Media - Project Showcase Video */}

            <section className="project-page_media">
                <video
                    className="project-page_hero-video"
                    controls
                    preload="metadata"
                    playsInline
                    poster={farmHero}
                >
                    <source src={projectVideo} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </section>


            {/* Project Overview */}

            <section className="project-page_overview">
                <h2>About the Project</h2>

                <p>
                    Danube Fields is a 3D isometric farming simulator set in
                    the Austrian countryside. Inspired by games such as
                    Stardew Valley and Harvest Moon, the project explores
                    sustainable agriculture through crop production,
                    resource management and planning.
                </p>

                <p>
                    The game concept centres on growing crops such as wheat
                    and tomatoes to meet the changing needs of the surrounding
                    community. Players are also expected to manage resources
                    such as money and water, while avoiding unnecessary
                    production and surplus waste.
                </p>

                <p>
                    The project was developed collaboratively by a
                    seven-person international team. My role was Level
                    Designer, focusing on building and organising the farm
                    environment in Unreal Engine.
                </p>
            </section>


            {/* Project Information */}

            <section className="project-page_information">
                <h2>Project Information</h2>

                <div className="project-page_information-grid">
                    <article className="project-page_information-item">
                        <h3>Engine</h3>
                        <p>Unreal Engine 4.27</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Role</h3>
                        <p>Level Designer</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Genre</h3>
                        <p>3D Isometric Farming Simulator</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Team Size</h3>
                        <p>7 Members</p>
                    </article>
                </div>
            </section>


            {/* Project Design Focus */}

            <section className="project-page_features">
                <h2>Project Design</h2>

                <div className="project-page_features-grid">
                    <article className="project-page_feature">
                        <h3>Farm Environment</h3>
                        <p>
                            A connected countryside environment bringing
                            together crop plots, farm buildings, pathways,
                            fences, waterways and surrounding vegetation.
                        </p>
                    </article>

                    <article className="project-page_feature">
                        <h3>Crop Production</h3>
                        <p>
                            The farming concept focuses on producing crops
                            such as wheat and tomatoes in response to the
                            needs and demand of the surrounding area.
                        </p>
                    </article>

                    <article className="project-page_feature">
                        <h3>Sustainable Agriculture</h3>
                        <p>
                            The wider game design explores resource
                            management, production planning and reducing
                            unnecessary agricultural waste.
                        </p>
                    </article>
                </div>
            </section>


            {/* Development and Personal Contribution */}

            <section className="project-page_development">
                <h2>Development &amp; Level Design</h2>

                <p>
                    My primary responsibility was designing and building
                    the farm environment in Unreal Engine 4.27. I worked
                    from the initial layout concept to arrange the different
                    areas of the farm and establish how they connected
                    within the 3D isometric environment.
                </p>

                <p>
                    The environment brings together crop plots, farm
                    buildings, fences, pathways, bridges, vegetation and
                    water features. I focused on positioning these elements
                    to create distinct areas while keeping the wider farm
                    readable and connected.
                </p>

                <p>
                    We used Miro during the planning process to explore the
                    organisation of the farm. The concept included crop
                    fields, grape-growing areas, livestock facilities and
                    proposed sustainable infrastructure. This planning
                    material helped guide the translation of the concept
                    into the Unreal environment.
                </p>

                <p>
                    The project was a team effort, and the final video
                    includes work from different areas of development.
                    My personal contribution was focused on level design
                    and environment assembly, rather than claiming
                    ownership of every model, asset or system shown.
                </p>

                <p>
                    <a
                        href="https://miro.com/app/board/uXjVMCkPufE=/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View the Farm Layout Planning on Miro
                    </a>
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
                                <strong>Challenge:</strong> {item.challenge}
                            </p>

                            <p>
                                <strong>Approach:</strong> {item.solution}
                            </p>
                        </article>
                    ))}
                </div>
            </section>


            {/* Environment and Development Gallery */}

            <section className="project-page_gallery">
                <h2>Environment &amp; Development Screenshots</h2>

                <div className="project-page_gallery-grid">
                    {screenshots.map((screenshot) => (
                        <figure key={screenshot.src}>
                            <img
                                src={screenshot.src}
                                alt={screenshot.alt}
                                loading="lazy"
                            />

                            <figcaption>{screenshot.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>


            {/* What I Learned */}

            <section className="project-page_learning">
                <h2>What I Learned</h2>

                <p>
                    Danube Fields gave me practical experience translating
                    a conceptual layout into a 3D game environment. It
                    strengthened my understanding of spatial planning,
                    environmental composition and how separate areas can
                    be connected within an isometric level.
                </p>

                <p>
                    Working with an international team also gave me
                    experience collaborating across different development
                    disciplines and considering how level design supports
                    the wider direction of a game.
                </p>
            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="Danube Fields project links"
            >
                <a
                    href="https://github.com/goingafk/iLRN-Game-Jam-Project"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repository
                </a>

                <a
                    href="https://goingafk.itch.io/danube-fields"
                    target="_blank"
                    rel="noreferrer"
                >
                    Play on itch.io
                </a>

                <a
                    href="https://www.youtube.com/watch?v=W3Z1sixGYbk"
                    target="_blank"
                    rel="noreferrer"
                >
                    YouTube Showcase
                </a>

                <a
                    href="https://miro.com/app/board/uXjVMCkPufE=/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Miro Planning Board
                </a>
            </nav>

        </main>
    );
}

export default DanubeFields;
