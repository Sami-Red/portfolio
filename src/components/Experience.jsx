import "./Experience.css";

function Experience() {
    return (
        <div className="experience">

            <div className="experience_top">
                <h1>Experience</h1>
            </div>

            <div className="experience_timeline">

                <div className="timeline_item">
                    <div className="timeline_marker"></div>

                    <div className="timeline_content">
                        <h2>B Bagel</h2>
                        <h3>Supervisor • 2025 – Present</h3>
                        <p>
                            Supported food production, store operations, and efficient
                            team coordination.
                        </p>
                    </div>
                </div>

                <div className="timeline_item">
                    <div className="timeline_marker"></div>

                    <div className="timeline_content">
                        <h2>Chipotle</h2>
                        <h3>Supervisor & Trainer • 2022 – 2025</h3>
                        <p>
                            Managed shifts, trained staff, and maintained operational
                            standards.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Experience;