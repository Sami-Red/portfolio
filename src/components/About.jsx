/* cd C:\Users\redic\Desktop\Portfolio\software-engineer-portfolio then npm.cmd run dev */
import "./About.css";
function About(){
    return(
    <div className="about">
        <div className="about_top">
            <h1>About Me</h1>
        </div>
        <div className="about_bottom">
            <h1>Who am I?</h1>

            <p>
                I'm a Computer Games Development graduate with a passion for
                software engineering and problem solving. I enjoy building
                applications that are clean, practical, and user-focused while
                continuously expanding my knowledge of modern technologies.
            </p>

            <p>
                Recently, I've been focusing on C#, React, JavaScript, and web
                development, creating personal projects that strengthen both my
                technical skills and understanding of software design.
            </p>

            <p>
                My goal is to transition into a software engineering role where I
                can continue learning, collaborate with others, and build software
                that makes a real impact.
            </p>
        </div>
    </div>
    )
}
export default About;