import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

// css
import '../css/sendEmail.css'

// Material UI && Ant Design
import { TextField } from "@mui/material";
import { message, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// react-icons
import { GrSend } from 'react-icons/gr'
import { useTranslation } from "react-i18next";


const SendEmail = () => {

    const [t] = useTranslation("global")
    const form = useRef<any>()
    const [loading, setLoading] = useState(false)

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        emailjs.sendForm('service_2bu6mok', 'template_mgstshe', form.current, 'iehaW4mfPHICH6fLT')
        .then(
            (result) => {
                console.log(result.text)
                e.target.reset()
                setLoading(false)
                message.success(t('email.success-message'))
            }, (error) => {
                console.log(error.text)
                setLoading(false)
                message.error(t('email.error-message'))
            }
        )
    }

    return (
        <div className="email">
            <h1 className="email--title">{t('email.title')}</h1>

            <form className="email--form" ref={form} onSubmit={sendEmail}>
                <TextField
                    label={t('email.to')}
                    id="outlined-required"
                    disabled
                    fullWidth={true}
                    value={'selimkerimovdv@gmail.com'}
                />
                <TextField
                    type="text"
                    name="user_name"
                    required
                    id="outlined-required"
                    label={t('email.name')}
                    fullWidth={true}
                />
                <TextField
                    type='email'
                    name="user_email"
                    id="outlined-required"
                    label={t('email.email')}
                    fullWidth={true}
                    required
                />
                <TextField
                    type='text'
                    name="message"
                    required
                    id="outlined-multiline-static"
                    label={t('email.compose')}
                    multiline
                    rows={7}
                />
                <button className="email--send" type="submit">
                    { loading ? <Spin size="small" indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/> : <p>Send <GrSend /></p>}
                </button>

            </form>
        </div>
    )
}

export default SendEmail