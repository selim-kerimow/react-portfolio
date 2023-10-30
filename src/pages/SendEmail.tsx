import React from "react";

// css
import '../css/sendEmail.css'

// Material UI 
import { TextField } from "@mui/material";

// react-icons
import { GrSend } from 'react-icons/gr'
import { useTranslation } from "react-i18next";


const SendEmail: React.FC = () => {

    const [t] = useTranslation("global")

    return (
        <div className="email">
            <h1 className="email--title">{t('email.title')}</h1>

            <form className="email--form">

                <TextField
                    
                    required
                    id="outlined-required"
                    label="From"
                    fullWidth={true}
                />
                <TextField
                
                    disabled
                    id="outlined-required"
                    label="To"
                    defaultValue='selimkerimovdv@gmail.com'
                    fullWidth={true}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Subject"
                    multiline
                    fullWidth={true}
                />
                <TextField
                    required
                    id="outlined-multiline-static"
                    label="Compose email"
                    multiline
                    rows={7}
                />
                <button className="email--send">
                    Send <GrSend />
                </button>

            </form>
        </div>
    )
}

export default SendEmail