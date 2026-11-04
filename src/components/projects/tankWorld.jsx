
import "./GeneralProjectStyling.css";

// Tank World videos
import officialDemo from "../../assets/project/individualProjects/tankWorld/tankworld_ytvideo.mp4";
import tankGameplay from "../../assets/project/individualProjects/tankWorld/Tankworld_video.mp4";


function TankWorld() {

    const features = [
        {
            title: "Online Multiplayer",
            description:
                "Photon PUN2 handles online connections, room creation, joining lobbies and managing multiplayer sessions for up to four players.",
        },
        {
            title: "Networked Combat",
            description:
                "Players can move, shoot and damage opponents in real time, with networked bullet spawning, health updates and player ownership.",
        },
        {
            title: "Match Progression",
            description:
                "A shared match timer, kill-based scoring, player respawning and win conditions manage the multiplayer gameplay loop.",
        },
    ];

    const challenges = [
        {
            title: "Synchronising Multiplayer Actions",
            challenge:
                "Player actions needed to be communicated between connected clients so that shooting, damage and gameplay events could be handled across the network.",
            solution:
                "Photon PUN2 was used with Photon RPC calls to distribute shooting events. Photon serialization was also implemented to synchronize player health values.",
        },
        {
            title: "Managing Multiplayer Sessions",
            challenge:
                "The game needed to coordinate players joining rooms, starting matches and reaching the end of a multiplayer round.",
            solution:
                "Photon room management handles player sessions and room membership, while shared room properties maintain the match timer. Score-based conditions determine the winner.",
        },
    ];

    return (

        <main className="project-page">

            {/* Project Header */}

            <header className="project-page_top">

                <h1>Tank World</h1>

                <p>
                    A top-down multiplayer tank shooter developed
                    in Unity, exploring real-time networking,
                    synchronisation and multiplayer gameplay
                    using Photon PUN2.
                </p>

            </header>


            {/* Official Project Demo */}

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
                    Tank World is a top-down multiplayer tank
                    shooter developed in Unity as part of my
                    final-year Games Networking and Security
                    university module.
                </p>

                <p>
                    The project explores the challenges of
                    developing a real-time multiplayer experience,
                    with a focus on connecting players, managing
                    online sessions and synchronising gameplay
                    between clients.
                </p>

                <p>
                    Players control tanks in an arena-style
                    environment, moving around the map and
                    firing projectiles at opponents. The
                    gameplay includes health and damage,
                    player elimination, respawning and
                    kill-based scoring.
                </p>

                <p>
                    The multiplayer functionality was developed
                    using Photon Unity Networking (PUN2), allowing
                    players to create and join rooms and compete
                    within the same match.
                </p>

                <p>
                    I developed the project independently,
                    implementing the gameplay systems,
                    multiplayer functionality, networking
                    and supporting interface.
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
                        <h3>Networking</h3>
                        <p>Photon PUN2</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Project Type</h3>
                        <p>Solo University Project</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Genre</h3>
                        <p>Top-Down Multiplayer Shooter</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Platform</h3>
                        <p>Windows PC</p>
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
                    Tank World was developed using Unity and
                    C#, with Photon PUN2 providing the
                    networking framework for online multiplayer.
                    The project was structured around separate
                    gameplay, networking, interface and
                    match-management systems.
                </p>

                <p>
                    <strong>Multiplayer Networking:</strong>
                    Photon PUN2 handles connections to the
                    Photon master server, room creation,
                    room joining and lobby management.
                    The system supports public rooms
                    and allows players to see and join
                    available matches.
                </p>

                <p>
                    <strong>Networked Player Control:</strong>
                    Multiplayer player instances are spawned
                    using Photon network instantiation.
                    Ownership checks ensure that local player
                    input is handled by the correct client,
                    while Photon RPC calls distribute
                    shooting events across connected players.
                </p>

                <p>
                    <strong>Combat and Health:</strong>
                    The combat system includes projectile
                    firing, collision-based damage and
                    health management. Multiplayer bullets
                    retain information about their owner,
                    allowing the game to attribute kills
                    to the correct player.
                </p>

                <p>
                    <strong>Match Management:</strong>
                    The multiplayer level manager handles
                    player spawning, match timing, kill
                    limits and end-game conditions.
                    The shared match timer is stored
                    using Photon room custom properties,
                    allowing connected clients to use
                    the same timer information.
                </p>

                <p>
                    <strong>Player Data and Leaderboards:</strong>
                    PlayFab integration supports player
                    login using a custom identifier,
                    updating display names and submitting
                    scores to a global leaderboard.
                    Local player data is also saved
                    between sessions.
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


            {/* Additional Gameplay Footage */}

            <section className="project-page_gallery">

                <h2>Additional Gameplay Footage</h2>

            </section>

            <section className="project-page_media">

                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                >
                    <source src={tankGameplay} type="video/mp4" />

                    Your browser does not support HTML video.
                </video>

            </section>


            {/* What I Learned */}

            <section className="project-page_development">

                <h2>What I Learned</h2>

                <p>
                    Tank World gave me practical experience
                    working with real-time multiplayer
                    networking in Unity. It developed my
                    understanding of client-server
                    communication, network ownership,
                    remote procedure calls and
                    synchronising information between
                    connected players.
                </p>

                <p>
                    Implementing room management and
                    match progression also helped me
                    understand how multiplayer sessions
                    are organised, from connecting
                    players and creating rooms to
                    coordinating match timers and
                    determining winners.
                </p>

                <p>
                    The project also provided experience
                    integrating third-party services
                    such as Photon and PlayFab into
                    a gameplay application.
                </p>

            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="Tank World project links"
            >

                <a
                    href="https://github.com/Sami-Red/Tank_World"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repository
                </a>

                <a
                    href="https://saaami.itch.io/tank-world"
                    target="_blank"
                    rel="noreferrer"
                >
                    Play on itch.io
                </a>

                <a
                    href="https://www.youtube.com/watch?v=QVZCABMrXkU"
                    target="_blank"
                    rel="noreferrer"
                >
                    YouTube Demo
                </a>

            </nav>

        </main>

    );

}

export default TankWorld;
