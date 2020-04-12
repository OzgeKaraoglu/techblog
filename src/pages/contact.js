import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyle from './index.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <h4>The best way to reach me is via
                <a className={contactStyle.link}
                 href="https://www.instagram.com/ozgewhocodes"> ozgewhocodes</a> on Instagram</h4>
        </Layout>
    )
}

export default ContactPage