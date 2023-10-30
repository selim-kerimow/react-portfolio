import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Ant Design
import { Dropdown, Button, Space, } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

// css
import '../css/navbar.css'

// react-icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineClose } from 'react-icons/md'

// assets 
import rus from '../assets/rus.png'
import eng from '../assets/eng.png'
import { useTranslation } from "react-i18next";



const Navbar: React.FC = () => {

    const location = useLocation()
    const [_, i18n] = useTranslation()

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
    const switchLaguageHandler = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    // language menu items
    const items: MenuProps['items'] = [
        { label: 'English',
          key: '1',
          icon: <img src={eng} />,
          onClick: () => switchLaguageHandler('eng')
        },
        {
          label: 'Russian',
          key: '2',
          icon: <img src={rus} />,
          onClick: () => switchLaguageHandler('rus')
        }
      ];
    
      const menuProps = {
        items,
        // onClick: switchLaguageHandler,
      };

    return (
        <nav className="navbar">

            <h1 className="navbar--initials">SK</h1>

            <div className="navbar--wrapper">

                <Dropdown className="languages--button" menu={menuProps}>
                    <Button>
                        <Space>
                            Languages
                        <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>

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
            </div>

        </nav>
    )
}

export default Navbar