import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

// assets
import githubSearch from '../assets/github-search.png'
import GNBookstore from '../assets/GNBookstore.png'
import Gym from '../assets/Gym.png'

// css 
import '../css/projects.css'

export interface IProject {
    id: number,
    title: string,
    description: string,
    check_url: string,
    repo_url: string,
    image: string
}


const Projects: React.FC = () => {

    const [t] = useTranslation("global")

    const projects: IProject[] = [
        {
            id: 1, 
            title: 'GN Bookstore (Ant Design)', 
            description: t('projects.project1'), 
            check_url: 'https://selim-kerimow.github.io/react-antd/',
            repo_url: 'https://github.com/selim-kerimow/react-antd',
            image: GNBookstore
        },
        {
            id: 2, 
            title: 'Github Search (RTK Query)', 
            description: t('projects.project2'), 
            check_url: 'https://selim-kerimow.github.io/github-search',
            repo_url: 'https://github.com/selim-kerimow/github-search',
            image: githubSearch
        },
        {
            id: 3, 
            title: 'Fitness Club',
            description: t('projects.project3'), 
            check_url: 'https://selim-kerimow.github.io/react-gym/',
            repo_url: 'https://github.com/selim-kerimow/react-gym',
            image: Gym
        },
    ]

    return (
        <div className="projects">

            <div className="projects-header">
                <h1>{ t('projects.title')}</h1>
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