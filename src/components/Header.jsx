import React, { useEffect, useState } from "react";
import Texts from "../support/Texts";

// Country flag emojis
const brazilFlag = '🇧🇷';
const usaFlag = '🇺🇸';
const italyFlag = '🇮🇹';

export default function Header (props) {

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
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">{Texts.navbarLinks[chosenLanguage][0]}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/projects-done">{Texts.navbarLinks[chosenLanguage][1]}</a>
                            </li>
                            <li className="nav-item">
                                <LanguageSelector />
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}