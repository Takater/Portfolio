import React from "react";
import { useState } from "react";

export default function FormItems(props) {

    const textMaxLength = 200;

    const [charactersLeft, setCharactersLeft] = useState(textMaxLength);

    function countCharacters (event) {
        let text = event.target.value;
        setCharactersLeft(textMaxLength - text.length);
        document.getElementById("characters").style.color = text.length > textMaxLength ? "red" : "#050a30";
    }

    function Description (props) {
        return (
            <span>
                Write a short description of {props.title} <br />
                <small id="characters">{charactersLeft} characters left</small>
                <textarea id="description" onInput={countCharacters} required/>
            </span>
        )
    }

    let item = props.type;
    
    switch(item) {
        case 'DFS':
            return (
                <label id="formSecondPart">
                    Select all the options that your project might include <br />
                    <div className="DFS-checkboxes">
                        <input type="checkbox" name="dfs_option" id="MultiplePages" value="MultiplePages"/>
                        <label htmlFor="MultiplePages">Multiple Pages</label><br />

                        <input type="checkbox" name="dfs_option" id="MultipleUsers" value="MultipleUsers"/>
                        <label htmlFor="MultipleUsers">Various Users</label><br />

                        <input type="checkbox" name="dfs_option" id="RegisterLogin" value="RegisterLogin"/>
                        <label htmlFor="RegisterLogin">Register and Login</label><br />

                        <input type="checkbox" name="dfs_option" id="Database" value="Database"/>
                        <label htmlFor="Database">Record data</label><br />

                        <input type="checkbox" name="dfs_option" id="FilesStorage" value="FilesStorage"/>
                        <label htmlFor="FilesStorage">Internal Files</label><br />

                        <input type="checkbox" name="dfs_option" id="externalAPI" value="externalAPI"/>
                        <label htmlFor="externalAPI">Connect to other websites</label><br />
                        
                        <input type="checkbox" name="dfs_option" id="paymentOpt" value="paymentOpt"/>
                        <label htmlFor="paymentOpt">Online Payment</label><br />

                        <input type="checkbox" name="dfs_option" id="anotherOpt" value="anotherOpt"/>
                        <label htmlFor="anotherOpt">Others</label><br />
                    </div>
                    <Description title="your project"/>
                </label>
            )
        case 'NFEP':
            return (
                <div>NFEP</div>
            )
        case 'SEP':
            return (
                <div>SEP</div>
            )
        default:
            break;
    }
}