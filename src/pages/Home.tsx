import React from "react";

// css 
import '../css/home.css'

// react-icons
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'


const Home: React.FC = () => {



    return (
        <div className="home">

            <div className="about">
                <h1 className="about--title">Selim Kerimow</h1>
                <p className="about--subtitle">A software developer with a passion for learning and creating.</p>
                <div className="about--icons">
                    <a href="/email">
                        <MdEmail size={45} color='white' />
                    </a>
                    <a href="https://github.com/selim-kerimow" target="_blank">
                        <BsGithub size={40} color='white'/>
                    </a>
                </div>
            </div>

            <div className="skills">
                <h1 className="skills--title">Skills</h1>
                <div className="skills-basic">
                    <h2>Basic</h2>
                    <p>HTML, CSS, TypeScrypt, JavaScript, Github</p>
                </div>
                <div className="skills--react">
                    <h2>React</h2>
                    <ul>
                        <li><strong>Fetch:</strong>  RTK Query, react-query</li>
                        <li><strong>State management:</strong> Redux Toolkit, Mobx, Context</li>
                        <li><strong>CSS Libraries:</strong> Ant Design, Material UI, tailwindcss, React-Bootstrap</li>
                        <li><strong>Testing:</strong> React Testing Library</li>
                        <li><strong>Others:</strong> React Hook Form, Axios, js-cookie, </li>
                    </ul>
                </div>
                <div className="skills--languages">
                    <h2>Languages</h2>
                    <div className="languages--inner">
                        <p>Russian: Native</p>
                        <p>English: Advanced</p>
                        <p>Turkmen: Native</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home