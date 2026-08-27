import "./ProjectPage.css";

function ProjectPage() {
    return (
        <div className="project-page">

            {/* Project Header */}

            <div className="project-page_top">
                <h1>Project Title</h1>

                <p>
                    A short description of the project and what it is about.
                </p>
            </div>


            {/* Main Project Media */}

            <div className="project-page_media">

                <img
                    src=""
                    alt="Project preview"
                />

            </div>


            {/* Project Overview */}

            <div className="project-page_overview">

                <h2>About the Project</h2>

                <p>
                    This section provides an overview of the project, including
                    its purpose, gameplay, goals, and the overall development
                    process.
                </p>

            </div>


            {/* Project Information */}

            <div className="project-page_information">

                <h2>Project Information</h2>

                <div className="project-page_information-grid">

                    <div className="project-page_information-item">
                        <h3>Engine</h3>
                        <p>Unity</p>
                    </div>

                    <div className="project-page_information-item">
                        <h3>Language</h3>
                        <p>C#</p>
                    </div>

                    <div className="project-page_information-item">
                        <h3>Genre</h3>
                        <p>Platformer</p>
                    </div>

                    <div className="project-page_information-item">
                        <h3>Project Type</h3>
                        <p>Solo Project</p>
                    </div>

                </div>

            </div>


            {/* Key Features */}

            <div className="project-page_features">

                <h2>Key Features</h2>

                <div className="project-page_features-grid">

                    <div className="project-page_feature">
                        <h3>Feature One</h3>

                        <p>
                            Description of an important feature or system
                            developed for the project.
                        </p>
                    </div>

                    <div className="project-page_feature">
                        <h3>Feature Two</h3>

                        <p>
                            Description of another important feature or
                            technical system.
                        </p>
                    </div>

                    <div className="project-page_feature">
                        <h3>Feature Three</h3>

                        <p>
                            Description of another gameplay or technical
                            feature.
                        </p>
                    </div>

                </div>

            </div>


            {/* Development */}

            <div className="project-page_development">

                <h2>Development</h2>

                <p>
                    Explain how the project was developed, including the tools,
                    programming techniques, systems, and development process
                    used to create it.
                </p>

                <p>
                    This section can also explain how different systems were
                    designed and integrated throughout development.
                </p>

            </div>


            {/* Challenges */}

            <div className="project-page_challenges">

                <h2>Challenges &amp; Solutions</h2>

                <div className="project-page_challenges-grid">

                    <div className="project-page_challenge">
                        <h3>Challenge</h3>

                        <p>
                            Describe a problem encountered during development.
                        </p>
                    </div>

                    <div className="project-page_challenge">
                        <h3>Solution</h3>

                        <p>
                            Explain how the problem was investigated and
                            resolved.
                        </p>
                    </div>

                </div>

            </div>


            {/* Gallery */}

            <div className="project-page_gallery">

                <h2>Gameplay &amp; Screenshots</h2>

                <div className="project-page_gallery-grid">

                    <img src="" alt="Project screenshot" />

                    <img src="" alt="Project screenshot" />

                    <img src="" alt="Project screenshot" />

                    <img src="" alt="Project screenshot" />

                </div>

            </div>


            {/* What I Learned */}

            <div className="project-page_learning">

                <h2>What I Learned</h2>

                <p>
                    Explain the main skills, concepts, and experience gained
                    while developing the project.
                </p>

            </div>


            {/* Project Links */}

            <div className="project-page_links">

                <a href="#github">
                    GitHub
                </a>

                <a href="#demo">
                    Play / Demo
                </a>

            </div>

        </div>
    );
}

export default ProjectPage;