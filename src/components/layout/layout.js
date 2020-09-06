import React from 'react';
import Header from './header/header';
import Footer from './footer';
import SEO from './SEO';

const Layout = ({ children, pageContext, location }) => {

    if (pageContext.layout === 'privacy') {
        return (
            <div>
                <SEO title="Privacy Policy • Andante"/>
                {children}
            </div>
        )
    }

    let index = 0
    let title = "Andante • Music Practice Journal"
    if (location.pathname === '/support') {
        index = 1;
        title = "Support • Andante"
    }
    else if (location.pathname === '/contact') {
        index = 2;
        title = "Contact • Andante"
    }
    
    return (
        <div className='background'>
            <SEO title={title}/>
            <Header selectedIndex={index}/>
            <div className='content margin'>{children}</div>
            <Footer />
        </div>
        
    )
}

export default Layout;