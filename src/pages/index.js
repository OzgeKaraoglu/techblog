import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Ozge from <span style={{ color: '#30d5c8' }}>Istanbul, Turkey</span>.</h2>
            <h3>I'm a front end developer living in great <span style={{ color: 'orange'}}> Holland</span></h3>
        </Layout>
    )
}

export default IndexPage