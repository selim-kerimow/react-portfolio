import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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



const Navbar: React.FC = () => {

    const location = useLocation()
    const [t, i18n] = useTranslation("global")

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
          label: 'Русский',
          key: '2',
          icon: <img src={rus} />,
          onClick: () => switchLaguageHandler('rus')
        }
      ];
    
      const menuProps = {
        items
      };

    return (
        <nav className="navbar">

            <h1 className="navbar--initials">SK</h1>

            <div className="navbar--wrapper">

                <Dropdown className="languages--button" menu={menuProps}>
                    <Button>
                        <Space>
                        { t('navbar.languages') }
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
                        { t('navbar.home') }
                    </Link>
                    <Link to='/projects' style={{color: location.pathname == '/projects' ? 'goldenrod' : ''}}>
                    { t('navbar.projects') }
                    </Link>
                    <Link to='/email' style={{color: location.pathname == '/email' ? 'goldenrod' : ''}}>
                    { t('navbar.sendEmail') }
                    </Link>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar