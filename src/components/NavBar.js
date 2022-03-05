import React from 'react'
import { mainNavBar} from '../styles/global.module.css'
import { Link } from 'gatsby'

const NavBar = () => {
    
    return (
        <div>
            <ul className={mainNavBar}>
                <li><Link to='../works' activeClassName='clicked'>WORKS</Link></li>
                <li><Link to='../bio' activeClassName='clicked'>BIO</Link></li>
                <li><Link to='../projects' activeClassName='clicked'>PROJECTS</Link></li>
                <li><Link to='../contact' activeClassName='clicked'>CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
