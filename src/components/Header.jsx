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
                <hr />
                <h3><em>
                        {Texts.devPhrase[props.lang]} 
                    </em>
                </h3>
                <p>
                    { props.lang === 'en' ?
                        "This is my Portfolio, here you can view my education and work experience, " : 
                        "Esse é o meu Portfólio, aqui você pode ver minhas experiências de educação "
                    }
                    {props.lang=== 'en' ? 
                        "projects I've worked on, and request a project budget by filling a form " : 
                        "e trabalho, projetos nos quais trabalhei, e solicitar um orçamento de projeto "
                    }
                    {props.lang === 'en' ?
                        "that will be forwarded to my WhatsApp." :
                        "preenchendo um formulário que será encaminhado para o meu WhatsApp."
                    }
                </p>
                <div>
                <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                </button>
                <div>
                        <ul className="me-auto mb-2 mb-lg-0">
                            <li>
                                <a href="/">{Texts.navbarLinks[chosenLanguage][0]}</a>
                            </li>
                            <li>
                                <a href="/projects-done">{Texts.navbarLinks[chosenLanguage][1]}</a>
                            </li>
                        </ul>
                </div>
                </div>
                {/* CONTACT ME BAR */}
                <hr />
                <Contact lang={props.lang}/>
                <div className="bottom-container">
                    <p><em>2024 © Guilherme Moret</em></p>
                </div>
        </div>
    )
}