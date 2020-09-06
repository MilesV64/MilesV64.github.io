import React from 'react';
import { Link } from 'gatsby';

const Footer = ( props ) => {

    const style = "text-blue-500 mx-6 my-2 p-2"

    return (
        <div className="flex flex-col sm:flex-row justify-center pb-2 pt-1 text-center bg-gray-100 border-top">
            <Link className={style} to="/">Home</Link>
            <Link className={style} to="/support">Support</Link>
            <Link className={style} to="/contact">Contact Me</Link>
            <Link className={style} to="/privacy">Privacy Policy</Link>
        </div>
    )

}

export default Footer;