import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss'
import logo from '../../static/images/logo.ico'


const HeaderPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <div> 
            <img src={logo} alt="logo" />
            <h6><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h6> 
            </div>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='./'>Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link></li>
                    <li><Link  className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderPage