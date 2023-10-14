import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../projects";

// css 
import '../css/projects.css'


const Projects: React.FC = () => {



    return (
        <div className="projects">
            { projects?.map(project => (
                <ProjectCard project={project}/>  
            ))}
            
        </div>
    )
}

export default Projects