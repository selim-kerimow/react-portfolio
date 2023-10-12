import React from "react";
import ProjectCard from "../components/ProjectCard";

// css 
import '../css/projects.css'


const Projects: React.FC = () => {



    return (
        <div className="projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default Projects