import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyle from './index.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1 className={contactStyle.title}>Contact</h1>
            <h4>The best way to reach me is via
                <a className={contactStyle.link} href="https://www.instagram.com/ozgewhocodes"> ozgewhocodes </a> 
                on Instagram
            </h4>
            <h4>
            <a className={contactStyle.link}
                 href="https://nl.linkedin.com/in/karaogluozge"> Özge Karaoğlu </a> on Linkedin</h4>             
           <h4>Collaborations, questions, working together.. </h4> 
               <a className={contactStyle.link} href = "mailto: ozgewhocodes@gmail.com">Send Email!</a>
        </Layout>
    )
}

export default ContactPage