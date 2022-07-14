import React from 'react'
import dev from '../images/dev.png'
import gui from '../images/gui.png'
import Clouds from './Clouds'
function Header () {

    return (
        <header id="headerTag">
            <div className="header-div">
                <Clouds />
                <h1><span> Guilherme Moret </span></h1>
                <img className="profilepic" src={gui} alt="Personal" />
                <h3><em> Software Engineering Student and Full Stack Developer I </em></h3>
            </div>
                <img className="dev" src={dev} alt="Developer Desk" />
        </header>
    );
}

export default Header;