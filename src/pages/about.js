import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <p>I had my BSc in Computer Engineering Department of Bahcesehir University/ Istanbul and started my career early while still was in the university as a Software Engineer </p>
        <Link to='/contact'>Want to work with me? Reach out!</Link>
        </Layout>
    )
}

export default AboutPage