import React from "react";

// Country flag emojis
const brazilFlag = '🇧🇷';
const usaFlag = '🇺🇸';
const italyFlag = '🇮🇹';

export default function LanguageSelector(props) {

    const chosenLanguage = localStorage.getItem("guimoret-portfolio-chosenLanguage") || "pt";

    return (
        <select id="languageSelector" className="country-flags" onChange={props.languageChangeHandler} defaultValue={chosenLanguage}>
            <option value="pt" role='img' aria-label='brazilFlag'>{brazilFlag}</option>
            <option value="en" role='img' aria-label='usaFlag'>{usaFlag}</option>
            <option value="it" role='img' aria-label='italyFlag'>{italyFlag}</option>
        </select>
    )
}