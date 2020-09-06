import React from 'react';
import styles from './header.module.css';
import Logo from '../../../assets/logo.png'
import { Link } from 'gatsby';

const Header = ( props ) => {

    return (
        <div className={props.className + " py-10 flex items-center"}>
            <Link to="/">
                <img src={Logo} alt='Andante Logo' className="mr-4 w-12 h-12"/>
            </Link>
            
            <Link to="/" className={props.selectedIndex === 0 ? styles.selectedNavItem : styles.navItem}>Andante</Link>
            <Link to="/faq" className={props.selectedIndex === 1 ? styles.selectedNavItem : styles.navItem}>Support</Link>
            <Link to="/contact" className={props.selectedIndex === 2 ? styles.selectedNavItem : styles.navItem}>Contact Me</Link>
        </div>
    )

}

export default Header;