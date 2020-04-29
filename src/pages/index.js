import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyle from './index.module.scss'
import { Link } from 'gatsby'
import image from '../../static/images/resizedbooks.jpeg'
import laptop from '../../static/images/dell.jpeg'


const IndexPage = () => {
    let s = 8
    let w = `${ 3024 / s }`
    let h = `${ 4032 / s }`
    
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello. I'm Özge!</h1>
            <h3>I'm a front-end developer based in The Netherlands.</h3>
            <h4>Interested in working together? </h4>
            <h4><Link className={indexStyle.link} to='./contact'> Reach Me Out</Link></h4>           
            <img src={image} alt="books" style={{ marginRight: "1%", borderRadius: 40 }} height={h} width={w}/>
            <img src={laptop} alt="laptop" style={{ marginLeft: "1%", borderRadius: 40 }} height={h} width={w}/>
        </Layout>
    )
}

export default IndexPage