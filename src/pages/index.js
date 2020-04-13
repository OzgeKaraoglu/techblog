import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyle from './index.module.scss'
import { Link } from 'gatsby'
import image from '../../static/images/books.jpeg'

const IndexPage = () => {
    let s = 8
    let w = `${ 3024 / s }`
    let h = `${ 4032 / s }`
    
    return (
        <Layout>
            <Head title="Home"/>
            <div>
            <h1>Hello.</h1>
            <h3>I'm Özge from Istanbul, Turkey.</h3>
            <h3>I'm a front end developer based in Holland.</h3>
            <h4>Interested in working together? then<Link className={indexStyle.link} to='./contact'> reach me out</Link></h4>
            </div>
            <div><img src={image} alt="Smiley face" style={{border: 1, borderRadius: 40}} height={h} width={w}/></div>
        </Layout>
    )
}

export default IndexPage