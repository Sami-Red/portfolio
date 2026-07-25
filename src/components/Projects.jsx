/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */
import "./Projects.css"
function Projects(){
    return(
    <div className="projects">
        <div className="projects_top">
            <h1>Projects</h1>
        </div>

        <div className="projects_bottom">

            <div className="project_card">

                <img />

                <h2>Portfolio Website</h2>

                <p>
                    Personal portfolio built with
                    React and Vite.
                </p>

                <div className="project_stack">

                    <span>React</span>
                    <span>Vite</span>
                    <span>CSS</span>

                </div>

                <div className="project_buttons">

                    <a>GitHub</a>
                    <a>Live Demo</a>

                </div>

            </div>

        </div>
    </div>
    )
}
export default Projects;