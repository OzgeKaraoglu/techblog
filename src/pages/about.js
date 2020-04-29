import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyle from './about.module.scss'
import profile from '../../static/images/resizeprofile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
        <h1 className={aboutStyle.title}>About Me</h1>
        <p>I had my BSc in Computer Engineering Department of Bahcesehir University/ Istanbul</p>
        <p>I started my career early while still was in the university as a Software Engineer </p>
        <p>I love photography  <FontAwesomeIcon style={{ color: "#40bad5" }} icon={faCameraRetro} /> and good coffe! 
        <FontAwesomeIcon style={{ color: "#40bad5" }} icon={faCoffee} /></p>
        <img style={{borderRadius: 30}} src={profile}  alt="profile"/>
        <p>Skills that I know!</p>
        <ul className={aboutStyle.skills}>
            <li className={aboutStyle.skillElement}> HTML, CSS, Javascript, Node.js </li>
            <li className={aboutStyle.skillElement}> Reactjs, React Native </li>
            <li className={aboutStyle.skillElement}> Vuejs, Gatsbyjs, GraphQL </li>
            <li className={aboutStyle.skillElement}> Git,  Agile Methodologies, Jira </li>
        </ul>
        <h4>I love listen beautiful songs while coding here is my Spotify Playlist</h4>  
        <div>
        <iframe src="https://open.spotify.com/embed/playlist/3WVFo3RkE9TPWTqXZoq2MY"
            title="codeEnergy"
            width="360"
            height="480" 
            frameborder="0" 
            style={{ borderRadius: 30, margin: "2%" }}
            allowtransparency="true" 
            allow="encrypted-media"></iframe>
        <iframe 
            src="https://open.spotify.com/embed/playlist/7IImK40Rng4pclYflKPLs9"          
            title="coding"
            width="360" 
            height="480" 
            style={{ borderRadius: 30, margin: "2%" }}
            frameBorder="0" allowtransparency="true" allow="encrypted-media">
        </iframe>
        </div>

        <p className={aboutStyle.link}>
            <Link className={aboutStyle.link} to='/contact'>
                Want to work with me? Reach out!
            </Link></p>
        <p>Here is my 
        <a className={aboutStyle.link} href="https://www.linkedin.com/in/karaogluozge/"> Linkedin </a></p>
        </Layout>
    )
}

export default AboutPage