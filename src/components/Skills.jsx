import "./Skills.css"

import gitlogo from "../assets/skills/git-logo.svg"
import githublogo from "../assets/skills/github-logo.svg"
import vscodeLogo from "../assets/skills/vscode-logo.svg"
import visualStudioLogo from "../assets/skills/visualstudio-logo.svg"
import unityLogo from "../assets/skills/unity-logo.svg"
import unrealEngineLogo from "../assets/skills/UE5-logo.svg"

import csharpLogo from "../assets/skills/csharp-logo.svg"
import reactLogo from "../assets/skills/react-logo.svg"
import htmlLogo from "../assets/skills/html5-logo.svg"
import cssLogo from "../assets/skills/css3-logo.svg"
import pythonLogo from "../assets/skills/python-logo.svg"

function Skills() {
    return (
        <div className="skills">

            <div className="skills-top">
                <h1>Skills</h1>
            </div>

            <div className="skills-grid">

                <div className="skill-card">
                    <h2 className="skill-card-title">Languages</h2>

                    <div className="skill-badges">
                        <div className="skill-badge">
                            <img className="skill-badge-img" src={csharpLogo} alt="C# logo" />
                            <span className="skill-badge-text">C#</span>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <h2 className="skill-card-title">Frontend</h2>

                    <div className="skill-badges">
                        <div className="skill-badge">
                            <img className="skill-badge-img" src={reactLogo} alt="React logo" />
                            <span className="skill-badge-text">React</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={htmlLogo} alt="HTML5 logo" />
                            <span className="skill-badge-text">HTML5</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={cssLogo} alt="CSS3 logo" />
                            <span className="skill-badge-text">CSS3</span>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <h2 className="skill-card-title">Tools</h2>

                    <div className="skill-badges">
                        <div className="skill-badge">
                            <img className="skill-badge-img" src={gitlogo} alt="Git logo" />
                            <span className="skill-badge-text">Git</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={githublogo} alt="GitHub logo" />
                            <span className="skill-badge-text">GitHub</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={vscodeLogo} alt="VS Code logo" />
                            <span className="skill-badge-text">VS Code</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={visualStudioLogo} alt="Visual Studio logo" />
                            <span className="skill-badge-text">Visual Studio</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={unityLogo} alt="Unity logo" />
                            <span className="skill-badge-text">Unity</span>
                        </div>

                        <div className="skill-badge">
                            <img className="skill-badge-img" src={unrealEngineLogo} alt="Unreal Engine 5 logo" />
                            <span className="skill-badge-text">Unreal Engine 5</span>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <h2 className="skill-card-title">Currently Learning</h2>

                    <div className="skill-badges">
                        <div className="skill-badge">
                            <img className="skill-badge-img" src={pythonLogo} alt="Python logo" />
                            <span className="skill-badge-text">Python</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Skills;