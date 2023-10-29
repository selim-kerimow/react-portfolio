import githubSearch from './assets/github-search.png'
import GNBookstore from './assets/GNBookstore.png'
import Gym from './assets/Gym.png'

export interface IProject {
    id: number,
    title: string,
    description: string,
    check_url: string,
    repo_url: string,
    image: string
}

export const projects: IProject[] = [
    {
        id: 1, 
        title: 'GN Bookstore (Ant Design)', 
        description: "Demo bookstore website using the world's second most popular React UI library - Ant Design.", 
        check_url: 'https://selim-kerimow.github.io/react-antd/',
        repo_url: 'https://github.com/selim-kerimow/react-antd',
        image: GNBookstore
    },
    {
        id: 2, 
        title: 'Github Search (RTK Query)', 
        description: 'React project connected to open github API (using RTK Query). You can easily find your repositories in in this website.', 
        check_url: 'https://selim-kerimow.github.io/github-search',
        repo_url: 'https://github.com/selim-kerimow/github-search',
        image: githubSearch
    },
    {
        id: 3, 
        title: 'Fitness Club',
        description: 'Simple Fitness Club project, using React, Typescript and CSS.', 
        check_url: 'https://selim-kerimow.github.io/react-gym/',
        repo_url: 'https://github.com/selim-kerimow/react-gym',
        image: Gym
    },
]