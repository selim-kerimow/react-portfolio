import React from "react";

// css
import '../css/footer.css'

// react-icons
import { PiPhone } from 'react-icons/pi'
import { MdAlternateEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'


const Footer: React.FC = () => {



    return (
        <div className="footer">
            <p> <PiPhone size={23} /> +99362208957</p>
            <p> <MdAlternateEmail size={23} /> selimkerimovdv@gmail.com </p>
            <p><a href="https://github.com/selim-kerimow" target="_blank"> <AiFillGithub size={23} color='goldenrod'/> https://github.com/selim-kerimow</a></p>
            <p> Asghabat 2023</p>
        </div>
    )
}


export default Footer