import React from 'react';
import { mainHeader, leftHeaderContainer, mainTitle, rightHeaderContainer} from '../styles/global.module.css'
import NavBar from './NavBar';
import { Link } from 'gatsby'

export default function Header() {
  return (
    <div className={mainHeader}>
        <div className={leftHeaderContainer}>
            <Link to='../'>
                <h1 className={mainTitle}>MICAELA</h1>
                <h1 className={mainTitle}>TROMBINI</h1>
            </Link>
        </div>
        <div className={rightHeaderContainer}>
            <NavBar />
        </div>
    </div>
  )
}
