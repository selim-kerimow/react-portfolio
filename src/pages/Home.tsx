import React from "react";
import { useTranslation } from 'react-i18next'
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { message } from "antd";
import { Link } from 'react-scroll'

// css 
import '../css/home.css'

// react-icons
import { MdEmail } from 'react-icons/md'
import { BsGithub} from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { BiSolidDownArrowCircle } from 'react-icons/bi'


const Home: React.FC = () => {

    const [t] = useTranslation("global")

    function createData(
        category: string,
        description: string,
      ) {
        return {category, description };
      }
      
      const rows = [
        createData('Fetch', 'RTK Query, React Query, Axios'),
        createData('State Management', 'Redux Toolkit, Mobx, Context'),
        createData('CSS Frameworks', 'Ant Design, Material UI, tailwindcss, React-Bootstrap'),
        createData('Testing', 'React Testing Library'),
        createData('Others', 'react-scroll, i18next, emailjs, former-motion, js-cookie, react-hook-form ...'),
      ];

    const copyText = (value: string) => {
        message.success(value)
    }

    return (
        <div className="home">

            <div className="about">
                <h1 className="about--title">Selim Kerimov</h1>
                <p className="about--subtitle">{t("home.description")}</p>
                <div className="about--icons">
                    <CopyToClipboard text={'+99362208957'} onCopy={() => copyText(t('copy.phone'))}>
                        <AiTwotonePhone color='white' size={38} className='icon'/>
                    </CopyToClipboard>
                    <CopyToClipboard text={'selimkerimovdv@gmail.com'} onCopy={() => copyText(t('copy.email'))}>
                        <MdEmail color='white' size={40} className='icon'/>
                    </CopyToClipboard>
                    <a href="https://github.com/selim-kerimow" target="_blank">
                        <BsGithub size={35} color='white' className='icon'/>
                    </a>
                </div>
                <div className="arrow-abs">
                    <Link to='skills' smooth={true}><BiSolidDownArrowCircle size={45} color='goldenrod'/></Link>
                </div>
            </div>

            <div className="skills">
                <h1 className="skills--title" id="skills">{t('home.skills')}</h1>
                <div className="skills-basic">
                    <h2>{t('home.basic')}</h2>
                    <p>HTML, CSS, TypeScript, JavaScript, Github</p>
                </div>
                <div className="skills--react">
                    <h2>React</h2>
                    <ul>
                        <TableContainer component={Paper} elevation={0}>
                        <Table sx={{ width: '90%', maxWidth: 600,}} aria-label="simple table">
                            <TableBody >
                            {rows.map((row) => (
                                <TableRow
                                    key={row.category}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                    <TableCell component="th" scope="row" sx={{fontSize: {md: '1.2rem', xs: '1rem'}, color: '#21325e'}}>
                                        <strong>{row.category}</strong>
                                    </TableCell>
                                    <TableCell align="left" sx={{fontSize: {xs: '0.9rem', md: '1rem'}, color: '#21325e'}}>{row.description}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </ul>
                </div>
                <div className="skills--languages">
                    <h2>{t('home.languages')}</h2>
                    <div className="languages--inner">
                        <p>{t('home.lang1')}</p>
                        <p>{t('home.lang2')}</p>
                        <p>{t('home.lang3')}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home