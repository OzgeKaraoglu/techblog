import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyle from './index.module.scss'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
        <h1 className={aboutStyle.title}>About Me</h1>
        <p>I had my BSc in Computer Engineering Department of Bahcesehir University/ Istanbul</p>
        <p>I started my career early while still was in the university as a Software Engineer </p>
        <h5>I love listen beautiful songs while coding here is my Spotify Playlist</h5>  
        <iframe title="spotify" src="https://open.spotify.com/embed/playlist/7IImK40Rng4pclYflKPLs9" width="380" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media">spotify</iframe>
        <p className={aboutStyle.link}><Link className={aboutStyle.link} to='/contact'>Want to work with me? Reach out!</Link></p>
        <p>Here is my 
        <a className={aboutStyle.link} href="https://www.linkedin.com/in/karaogluozge/"> Linkedin </a></p>
        </Layout>
    )
}

export default AboutPage