import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../projects";

// css 
import '../css/projects.css'


const Projects: React.FC = () => {



    return (
        <div className="projects">

            <div className="projects-header">
                <h1>My Personal Projects</h1>
            </div>

            <div className="projects-card">
                { projects?.map(project => (
                    <ProjectCard project={project}/>  
                ))}
            </div>
        </div>
    )
}

export default Projects