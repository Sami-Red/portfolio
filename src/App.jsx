
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import ProjectPage from "./components/projects/ProjectPage";
import ValhallaDeception from "./components/projects/ValhallaDeception";
import DanubeFields from "./components/projects/danubeFields";
import PhantomHunters from "./components/projects/phantomHunters";
import TheFoxHasAGun from "./components/projects/theFoxHasAGun";
import DinoTaskManager from "./components/projects/dinoTaskManager";
import CyberXRace from "./components/projects/cyberXRace";
import TankWorld from "./components/projects/tankWorld";

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <FeaturedProjects />
            <Skills />
            <Experience />
            <Contact />
        </div>
    );
}

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                    path="/projects/portfolio"
                    element={<ProjectPage />}
                />
                <Route
                    path="/projects/valhallas-deception"
                    element={<ValhallaDeception />}
                />
                <Route
                    path="/projects/danube-fields"
                    element={<DanubeFields />}
                />
                <Route
                    path="/projects/phantom-hunters"
                    element={<PhantomHunters />}
                />
                <Route
                    path="/projects/the-fox-has-a-gun"
                    element={<TheFoxHasAGun />}
                />
                <Route
                    path="/projects/dino-task-manager"
                    element={<DinoTaskManager />}
                />
                <Route
                    path="/projects/cyberx-race"
                    element={<CyberXRace />}
                />
                <Route
                    path="/projects/tank-world"
                    element={<TankWorld />}
                />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
