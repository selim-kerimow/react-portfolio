import React from "react";

// Material UI 
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

import githubSearch from '../assets/github-search.png'


const ProjectCard: React.FC = () => {



    return (
        <Card sx={{maxWidth: 335}} elevation={4}>
            <CardMedia
                sx={{ height: 300, width: '100%'}}
                image={githubSearch}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Github Search
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    React project connected to opened github API. You can easily find your repositories in in this project
                </Typography>
            </CardContent>
            <CardActions sx={{ gap: '8px'}}>
                <Button size="small" sx={{position: 'inherit'}} href="https://selim-kerimow.github.io/react-modern-stack/" target="_blank">
                        Live Demo
                </Button>
                <Button size="small" sx={{position: 'inherit'}} href="https://github.com/selim-kerimow/github-search" target="_blank">
                    Repository
                </Button>
            </CardActions>
      </Card>
    )
}

export default ProjectCard