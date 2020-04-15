import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className = {layoutStyles.container}>
            <div className = {layoutStyles.content}>
            <Header>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153754685-1"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag()
            {
                dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'UA-153754685-1');
            </script>
            </Header>
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout