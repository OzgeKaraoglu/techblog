import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyle from './index.module.scss'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h3>I'm Özge  from Istanbul, Turkey.</h3>
            <h3>I'm a front end developer based in Holland.</h3>
            <h4>Interested in working together? then<Link className={indexStyle.link} to='./contact'> reach me out</Link></h4>
        </Layout>
    )
}

export default IndexPage