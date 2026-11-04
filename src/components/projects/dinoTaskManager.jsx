
import "./GeneralProjectStyling.css";

// Dino Task Manager assets
import dinoScreenshot01 from "../../assets/project/individualProjects/dinoTaskManager/dinotaskmanager_1.PNG";
import dinoScreenshot02 from "../../assets/project/individualProjects/dinoTaskManager/dinotaskmanager_2.PNG";
import dinoScreenshot03 from "../../assets/project/individualProjects/dinoTaskManager/dinotaskmanager_3.PNG";
import dinoScreenshot04 from "../../assets/project/individualProjects/dinoTaskManager/dinotaskmanager_4.PNG";
import projectVideo from "../../assets/project/individualProjects/dinoTaskManager/Dinomanager_Video.mp4";

function DinoTaskManager() {

    const screenshots = [
        {
            src: dinoScreenshot01,
            alt: "Dino Task Manager ASCII dinosaur startup screen",
            caption: "Custom ASCII dinosaur startup screen",
        },
        {
            src: dinoScreenshot02,
            alt: "Dino Task Manager console menu and task creation",
            caption: "Menu-driven interface and adding a new task",
        },
        {
            src: dinoScreenshot03,
            alt: "Dino Task Manager displaying saved tasks",
            caption: "Viewing tasks stored in the to-do list",
        },
        {
            src: dinoScreenshot04,
            alt: "Dino Task Manager removing a selected task",
            caption: "Selecting and removing a task by its list number",
        },
    ];

    const features = [
        {
            title: "Add and Manage Tasks",
            description:
                "Users can enter new tasks through the console menu and add them to the task list.",
        },
        {
            title: "Persistent Task Storage",
            description:
                "Tasks are saved to a local text file and loaded back into the application, allowing the list to be retained between sessions.",
        },
        {
            title: "View and Remove Tasks",
            description:
                "Tasks are displayed with numbered entries, allowing users to select a specific task for removal.",
        },
    ];

    const challenges = [
        {
            title: "Saving Tasks Between Sessions",
            challenge:
                "Tasks needed to remain available after the application was closed instead of existing only in memory.",
            solution:
                "Text-file storage was implemented using File.WriteAllLines and File.ReadAllLines to save and reload the task list.",
        },
        {
            title: "Selecting Tasks for Removal",
            challenge:
                "Users needed a simple way to identify and remove individual tasks from the list.",
            solution:
                "Tasks are displayed with numbered positions. The application converts the user's selection into a list index and checks that it falls within the available range.",
        },
    ];

    return (
        <main className="project-page">

            {/* Project Header */}

            <header className="project-page_top">

                <h1>Dino Task Manager</h1>

                <p>
                    A lightweight C# console application for creating,
                    viewing and removing tasks, with local text-file
                    storage to retain the task list.
                </p>

            </header>


            {/* Main Project Media */}

            <section className="project-page_media">

                <video
                    className="project-page_gameplay-video"
                    controls
                    preload="metadata"
                    playsInline
                    poster={dinoScreenshot02}
                >
                    <source src={projectVideo} type="video/mp4" />

                    Your browser does not support HTML video.
                </video>

            </section>


            {/* Project Overview */}

            <section className="project-page_overview">

                <h2>About the Project</h2>

                <p>
                    Dino Task Manager is a simple console-based
                    task management application developed using
                    C# and .NET. It provides users with a
                    straightforward way to organise a list of
                    tasks through a numbered menu.
                </p>

                <p>
                    Users can add new tasks, view their existing
                    list and remove individual entries. The
                    application also uses a local text file
                    to save task data, allowing previously
                    entered tasks to be loaded again.
                </p>

                <p>
                    The application features a custom ASCII
                    dinosaur startup message, giving the
                    console application a bit of personality
                    before the main menu appears.
                </p>

            </section>


            {/* Project Information */}

            <section className="project-page_information">

                <h2>Project Information</h2>

                <div className="project-page_information-grid">

                    <article className="project-page_information-item">
                        <h3>Language</h3>
                        <p>C#</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Framework</h3>
                        <p>.NET 10</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Application</h3>
                        <p>Console Application</p>
                    </article>

                    <article className="project-page_information-item">
                        <h3>Data Storage</h3>
                        <p>Text File</p>
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
                    Dino Task Manager was developed in C# as
                    a console application. The application
                    uses a continuous menu loop to allow
                    users to interact with the task list
                    until they choose to exit.
                </p>

                <p>
                    <strong>Task Management:</strong> A
                    List&lt;string&gt; collection stores
                    the tasks. Separate methods handle
                    adding, displaying and removing entries,
                    keeping the different operations organised.
                </p>

                <p>
                    <strong>File Handling:</strong> The
                    application uses a local file named
                    tasks.txt to store the task list.
                    File.WriteAllLines saves the current
                    collection, while File.ReadAllLines
                    loads previously saved tasks back
                    into the application.
                </p>

                <p>
                    <strong>Input and Selection:</strong>
                    When removing a task, the application
                    displays numbered entries and asks
                    the user to select one. Integer
                    parsing and range checks help prevent
                    invalid task numbers from being used
                    as list indices.
                </p>

                <p>
                    <strong>Program Structure:</strong>
                    The application uses methods to
                    separate menu display, startup output,
                    task operations and file handling.
                    This keeps the main program loop
                    straightforward and easier to follow.
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

                <h2>Application Screenshots</h2>

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
                    This project provided practical experience
                    working with C# collections, methods,
                    loops and conditional logic to build
                    a small but functional application.
                </p>

                <p>
                    Implementing text-file storage also
                    helped develop my understanding of
                    reading and writing data, while the
                    task removal functionality provided
                    practice working with list indices
                    and validating user input.
                </p>

                <p>
                    It was a useful exercise in breaking
                    a program into smaller methods and
                    organising a simple application
                    around a clear menu-driven workflow.
                </p>

            </section>


            {/* Project Links */}

            <nav
                className="project-page_links"
                aria-label="Dino Task Manager project links"
            >

                <a
                    href="https://github.com/Sami-Red/To-Do-List-console-version"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repository
                </a>

            </nav>

        </main>
    );

}

export default DinoTaskManager;
