import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// css
import '../css/navbar.css'

// react-icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineClose } from 'react-icons/md'


const Navbar: React.FC = () => {

    const location = useLocation()

    // states
    const [toggle, setToggle] = useState(false)

    // This hook will close the navbar of small screens after clicking on path
    useEffect(() => {
        setToggle(false)
    }, [location])

    // functions
    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <nav className="navbar">

            <h1 className="navbar--initials">SK</h1>

            <div className="navbar--hamburger" onClick={toggleHandler}>
                { toggle 
                ? <MdOutlineClose color='white' size={30}/>
                : <RxHamburgerMenu  color='white' size={30}/> 
                }
            </div>

            <ul className={`navbar--links ${toggle ? 'active' : ''}`}>

                <Link to='/' style={{color: location.pathname == '/' ? 'goldenrod' : ''}}>
                    Home
                </Link>
                <Link to='/projects' style={{color: location.pathname == '/projects' ? 'goldenrod' : ''}}>
                    Projects
                </Link>
                <Link to='/email' style={{color: location.pathname == '/email' ? 'goldenrod' : ''}}>
                    Send Email
                </Link>

            </ul>

        </nav>
    )
}

export default Navbar