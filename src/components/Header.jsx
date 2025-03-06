import React from "react";
import Texts from "../support/Texts";
import Gui from '../images/gui_head.png';
import LanguageSelector from "./LanguageSelector";

export default function Header (props) {

    return (
        <div className="container" id="main-div">
            <img className="gui-head" src={Gui} alt='Selfie Guilherme'/>
                <h1><span className='titleHi'>
                        {Texts.titleHi[props.lang]}
                    </span><br/>
                    <span> Guilherme Moret </span>
                <LanguageSelector languageChangeHandler={props.languageChangeHandler} />
                </h1>
                <h3>
                    <em>
                        {Texts.devPhrase[props.lang]} 
                    </em>
                </h3>
                <hr />
                <div id="menu-links">
                    <ul className="me-auto mb-2 mb-lg-0">
                        {["/", "/experience", "/projects-done", "/request-budget"].map((url, index) => {
                            return (
                                <li key={Texts.navbarLinks[props.lang][index]}>
                                    <a className="nav-link" href={url}>{Texts.navbarLinks[props.lang][index]}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    )
}