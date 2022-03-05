import React from 'react';
import { mainFooter} from '../styles/global.module.css'
import { Link } from 'gatsby'

export default function Footer() {
  return (
        <div>
            <footer className={mainFooter}>
                <h3><Link to='../'>EN</Link> | <Link to='../'>SPA</Link></h3>
                <p><Link to='../'> micaelatrombini.com.ar</Link></p>
                <p>&copy; 2022 |<a href='luistamagnini.com.ar'>luigi tamagnini</a></p>
            </footer>
        </div>
    )
}
