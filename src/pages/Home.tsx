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



        </div>
    )
}

export default Home