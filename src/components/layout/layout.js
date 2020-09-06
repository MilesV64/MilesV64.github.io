import React from 'react';
import Header from './header/header';
import Footer from './footer';

const Layout = ({ children, pageContext, location }) => {

    if (pageContext.layout === 'privacy') {
        return (
            <div>{children}</div>
        )
    }

    let index = 0
    if (location.pathname === '/faq') {
        index = 1;
    }
    else if (location.pathname === '/contact') {
        index = 2;
    }
    
    return (
        <div className='background'>
            <Header selectedIndex={index}/>
            <div className='content margin'>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout;