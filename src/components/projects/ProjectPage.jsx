import "./GeneralProjectStyling.css";
import { Link } from "react-router-dom";

import portfolioVideo from "../../assets/project/Portfolio.mp4";


function ProjectPage() {

    const features = [
        {
            title: "Component-Based Architecture",
            description:
                "Built using reusable React components to separate the navigation, hero section, about section, project showcases, skills, experience and contact form.",
        },
        {
            title: "Multi-Page Navigation",
            description:
                "Implemented client-side routing with React Router, allowing visitors to navigate between the main portfolio, project listings and dedicated project pages.",
        },
        {
            title: "Responsive Interface",
            description:
                "Developed a dark-themed interface using custom CSS, flexible layouts and responsive breakpoints to maintain usability across different screen sizes.",
        },
        {
            title: "Project Showcases",
            description:
                "Created dedicated project pages containing gameplay footage, screenshots, technical information and descriptions of development work.",
        },
        {
            title: "Contact Integration",
            description:
                "Integrated Formspree with React to handle contact form submissions, including validation, submission feedback and success states.",
        },
        {
            title: "External Integrations",
            description:
                "Added links to GitHub, LinkedIn and itch.io, alongside CV access to make professional information and projects easier to explore.",
        },
    ];


    const implementationDecisions = [
        {
            title: "Organising the Application",
            challenge:
                "The portfolio needed to present several different sections and projects without becoming difficult to maintain.",
            solution:
                "React components separate the main sections into individual files, while React Router manages navigation between the homepage, project listings and individual project pages.",
        },
        {
            title: "Consistent Project Presentation",
            challenge:
                "Each project contains different types of information, images and video footage, but the overall portfolio needed a consistent presentation.",
            solution:
                "A shared project stylesheet provides reusable layouts and styling for individual project pages, while allowing each page to present its own content.",
        },
        {
            title: "Handling Contact Submissions",
            challenge:
                "The portfolio needed a way for visitors to send enquiries without building a separate custom backend.",
            solution:
                "Formspree was integrated with React to process form submissions, provide field validation and display feedback when a message is successfully submitted.",
        },
    ];


    return (

        <main className="project-page">


            {/* Project Header */}

            <header className="project-page_top">

                <h1>Portfolio Website</h1>

                <p>
                    A personal software engineering portfolio
                    built with React and Vite, designed to showcase
                    my projects, technical skills and development
                    experience through a responsive web interface.
                </p>

            </header>


            {/* Main Project Media */}

            <section
                className="project-page_media"
                aria-label="Portfolio website demonstration"
            >

                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                >
                    <source
                        src={portfolioVideo}
                        type="video/mp4"
                    />

                    Your browser does not support HTML video.

                </video>

            </section>


            {/* Project Overview */}

            <section className="project-page_overview">

                <h2>About the Project</h2>

                <p>
                    This portfolio was developed to bring together
                    my background, technical skills, professional
                    experience and software development projects
                    in one accessible location.
                </p>

                <p>
                    Built using React and Vite, the application
                    uses a component-based structure to organise
                    the different sections of the website. Visitors
                    can explore the main landing page, browse the
                    projects section and navigate to dedicated
                    pages containing more detailed information
                    about each project.
                </p>

                <p>
                    I designed the interface around a dark visual
                    theme using custom CSS, with a focus on clear
                    navigation, readable content and responsive
                    layouts.
                </p>

                <p>
                    The portfolio is an ongoing personal project
                    that I use to present my development work
                    while continuing to improve my frontend
                    development skills.
                </p>

            </section>


            {/* Project Information */}

            <section className="project-page_information">

                <h2>Project Information</h2>

                <div className="project-page_information-grid">

                    <article className="project-page_information-item">
                        <h3>Frontend</h3>
                        <p>React</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Language</h3>
                        <p>JavaScript / JSX</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Styling</h3>
                        <p>CSS3</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Build Tool</h3>
                        <p>Vite</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Routing</h3>
                        <p>React Router</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Contact Integration</h3>
                        <p>Formspree</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Version Control</h3>
                        <p>Git &amp; GitHub</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Project Type</h3>
                        <p>Personal Project</p>
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

                            <p>
                                {feature.description}
                            </p>

                        </article>

                    ))}

                </div>

            </section>


            {/* Development */}

            <section className="project-page_development">

                <h2>Development &amp; Implementation</h2>

                <p>
                    The application was developed using React,
                    with the interface divided into smaller
                    components responsible for individual
                    sections of the website.
                </p>

                <p>
                    <strong>Component Structure:</strong> The
                    homepage is organised into components
                    including the navigation bar, hero section,
                    about section, featured projects, skills,
                    experience and contact section. The navigation
                    bar and footer are shared across the application.
                </p>

                <p>
                    <strong>Routing:</strong> React Router handles
                    navigation between the homepage, projects
                    listing and individual project pages. The
                    application uses BrowserRouter to manage
                    client-side navigation.
                </p>

                <p>
                    <strong>Styling:</strong> Custom CSS is used
                    throughout the application. Global styling
                    variables define the colour scheme and
                    typography, while individual stylesheets
                    control component layouts and responsive
                    behaviour.
                </p>

                <p>
                    <strong>Project Media:</strong> Video previews
                    are used to introduce selected projects.
                    Individual project pages also provide
                    additional footage and screenshots to
                    demonstrate development work.
                </p>

                <p>
                    <strong>Contact Form:</strong> Formspree
                    integrates with the React contact component
                    to process enquiries. The form includes
                    required fields, validation messages,
                    submission state handling and a success
                    message after submission.
                </p>

                <p>
                    <strong>Development Environment:</strong>
                    Vite is used for the development server and
                    production build process. Git and GitHub
                    provide version control and source code
                    management.
                </p>

            </section>


            {/* Implementation Decisions */}

            <section className="project-page_challenges">

                <h2>Technical Decisions &amp; Solutions</h2>

                <div className="project-page_challenges-grid">

                    {implementationDecisions.map((item) => (

                        <article
                            className="project-page_challenge"
                            key={item.title}
                        >

                            <h3>{item.title}</h3>

                            <p>
                                <strong>Consideration:</strong>{" "}
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


            {/* What I Learned */}

            <section className="project-page_learning">

                <h2>What I Learned</h2>

                <p>
                    Developing this portfolio has strengthened
                    my understanding of React and modern
                    frontend development. It provided practical
                    experience building component-based
                    applications, managing application routes
                    and organising a larger codebase.
                </p>

                <p>
                    I also gained experience working with
                    responsive CSS, integrating third-party
                    services and handling form submission
                    states within React.
                </p>

                <p>
                    One of the most valuable aspects of the
                    project has been creating individual
                    case-study pages for my other projects.
                    This allowed me to practise presenting
                    technical work clearly while continuing
                    to improve the structure and maintainability
                    of the application.
                </p>

            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="Portfolio project links"
            >

                <a
                    href="https://github.com/Sami-Red/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repository
                </a>

                <Link to="/projects">
                    View Other Projects
                </Link>

            </nav>


        </main>

    );

}

export default ProjectPage;