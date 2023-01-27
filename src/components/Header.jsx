import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Bubbles from './Bubbles'
function Header () {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
            <div className="header-div">
                <h1><span className='titleHi'>Hello, there! I'm </span><br/><span> Guilherme Moret </span></h1>
                <h3><em> Software Engineering Student and Full Stack Developer I </em></h3>
                <p>
                    This is my Portfolio, here you can view my education and work experience, {!isMobile && <br />}projects I've worked on, and request 
                    a project budget by filling a form {!isMobile && <br />} that will be fowarded to my WhatsApp.
                </p>
                <Bubbles />
            </div>
    );
}

export default Header;