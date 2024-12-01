import React, { useEffect, useState } from "react";
import Texts from "../support/Texts";
import Gui from '../images/gui_head.png';
import Contact from '../components/Contact';
import { useMediaQuery } from "react-responsive";

// Country flag emojis
const brazilFlag = '🇧🇷';
const usaFlag = '🇺🇸';
const italyFlag = '🇮🇹';

export default function Header (props) {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const chosenLanguage = localStorage.getItem("guimoret-portfolio-chosenLanguage") || "pt";

    // Language selector
    function LanguageSelector() {
        return (
            <select id="languageSelector" className="country-flags" onChange={props.languageChangeHandler} defaultValue={chosenLanguage}>
                <option value="pt" role='img' aria-label='brazilFlag'>{brazilFlag}</option>
                <option value="en" role='img' aria-label='usaFlag'>{usaFlag}</option>
                <option value="it" role='img' aria-label='italyFlag'>{italyFlag}</option>
            </select>
        )
    }

    return (
        <div className="container" id="main-div">
            <img className="gui-head" src={Gui} alt='Selfie Guilherme'/>
                <h1><span className='titleHi'>
                        {Texts.titleHi[props.lang]}
                    </span><br/>
                    <span> Guilherme Moret </span>
                <LanguageSelector />
                </h1>
                <h3>
                    <em>
                        {Texts.devPhrase[props.lang]} 
                    </em>
                </h3>
                <hr />
                <div id="menu-links">
                    <ul className="me-auto mb-2 mb-lg-0">
                        {["/", "/experience", "/projects-done", "/budget"].map((url, index) => {
                            return (
                                <li key={Texts.navbarLinks[chosenLanguage][index]}>
                                    <a className="nav-link" href={url}>{Texts.navbarLinks[chosenLanguage][index]}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    )
}