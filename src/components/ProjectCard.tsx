import React from "react";
import { IProject } from "../projects";

// Material UI 
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

import githubSearch from '../assets/github-search.png'


interface ProjectCardProps {
    project: IProject
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {



    return (
        <Card sx={{maxWidth: 335, width: 335, height: 520}} elevation={4}>
            <CardMedia
                sx={{ height: 300, width: '100%'}}
                image={project.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    { project.title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { project.description }
                </Typography>
            </CardContent>
            <CardActions sx={{ gap: '8px'}}>
                <Button size="small" sx={{position: 'inherit'}} href={project.check_url} target="_blank">
                        Check Out
                </Button>
                <Button size="small" sx={{position: 'inherit'}} href={project.repo_url} target="_blank">
                    Repository
                </Button>
            </CardActions>
      </Card>
    )
}

export default ProjectCard