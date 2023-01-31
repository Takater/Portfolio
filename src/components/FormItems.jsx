import React, { useState, useEffect } from "react";

function FormItems(props) {

    // Hook to reference checkboxes
    const [checkboxes, setCheckboxes] = useState([]);

    // Hook to make checkboxes properly clickable
    useEffect(() => {
        setCheckboxes(document.querySelectorAll('input[type="checkbox"]'));
        checkboxes.length > 0 && checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', (event) => {
                return event.target.checked = !event.target.checked;
            });
            const label = document.querySelector(`label[for="${checkbox.id}]`);
            if (label) { 
                console.log(label.id);
                label.addEventListener('click', (event) => {
                    let box = document.querySelector(`input[id="${event.target.htmlFor}"]`);
                    return box.checked = !box.checked;
                });
            }
        });
    }, []);

    // Max length for description box
    const textMaxLength = 200;

    // Hook to count description characters and change style
    const [charactersLeft, setCharactersLeft] = useState(textMaxLength);

    function countCharacters (event) {
        let text = event.target.value;
        setCharactersLeft(textMaxLength - text.length);
        if(text.length > textMaxLength) {
            document.getElementById("characters").style.color = "red";
            document.querySelector("#description").style.borderColor = "red";
        } else {
            document.getElementById("characters").style.color = "#050a30";
            document.querySelector("textarea").style.borderColor = "";
        }
    }

    // Hook for quantity of new pages
    const [newPageChecked, setnewPageChecked] = useState(false);
    function addNewPage(event) {
        const newPage = event.target;
        setnewPageChecked(newPage.checked);
    }


    // SWITCH FOR RENDERING
    let item = props.type;
    
    switch(item) {
        case 'DFS':                 // FROM SCRATCH
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel">Select all the features that your project might include </label><br />
                    <div className="secondPart-checkboxes"                         >
                        <input type="checkbox" name="multiple_pages" id="MultiplePages" value="multiple_pages"/>
                        <label htmlFor="MultiplePages">Multiple pages</label><br />

                        <input type="checkbox" name="various_users" id="MultipleUsers" value="various_users"/>
                        <label htmlFor="MultipleUsers">Various users</label><br />

                        <input type="checkbox" name="register_and_login" id="RegisterLogin" value="register_and_login"/>
                        <label htmlFor="RegisterLogin">Register and Login</label><br />

                        <input type="checkbox" name="record_data" id="Database" value="record_data"/>
                        <label htmlFor="Database">Record data</label><br />

                        <input type="checkbox" name="internal_files" id="FilesStorage" value="internal_files"/>
                        <label htmlFor="FilesStorage">Internal files</label><br />

                        <input type="checkbox" name="get_data_from_other_websites" id="externalAPI" value="get_data_from_other_websites"/>
                        <label htmlFor="externalAPI">Get data from other websites</label><br />

                        <input type="checkbox" name="online_payment" id="paymentOpt" value="online_payment"/>
                        <label htmlFor="paymentOpt">Online payment</label><br />

                        <input type="checkbox" name="multiple_languages" id="MultipleLanguages" value="multiple_languages"/>
                        <label htmlFor="MultipleLanguages">Multiple Languages</label><br />

                        <input type="checkbox" name="generate_charts" id="charts" value="generate_charts"/>
                        <label htmlFor="charts">Generate charts</label><br />

                        <input type="checkbox" name="worksheet_formulas_or_macros" id="worksheet" value="worksheet_formulas_or_macros"/>
                        <label htmlFor="worksheet">Worksheet formulas or macros</label><br />

                        <input type="checkbox" name="others" id="anotherOpt" value="others"/>
                        <label htmlFor="anotherOpt">Others</label><br />
                    </div>
                    <label className="secondPartLabel"> Write a short description of your project </label><br />
                    <small id="characters">{charactersLeft} characters left</small>
                    <textarea id="description" onInput={countCharacters} />
                </div>
            )
        case 'NFEP':                    // NEW FEATURES
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel">Select options that best fit the new features that you would like to add to your project</label><br />
                    <div className="secondPart-checkboxes"                         >
                        <input type="checkbox" name="new_page" id="newPage" value="new_page" onChange={addNewPage}/>
                        <label htmlFor="newPage">New Page</label><br />
                        
                        {newPageChecked && 
                            <div>
                                <input type="number" id="qntNewPages" placeholder="1"/>
                                <label htmlFor="qntNewPages">: How many? </label> 
                            </div>
                        }

                        <input type="checkbox" name="new_user" id="newUser" value="new_user" />
                        <label htmlFor="newUser">New User and their permissions</label><br />

                        <input type="checkbox" name="new_languages" id="NewLanguage" value="new_languages"/>
                        <label htmlFor="NewLanguage">Multiple Languages</label><br />

                        <input type="checkbox" name="new_feature" id="newFeature" value="new_feature"/>
                        <label htmlFor="newFeature">Other new feature</label><br />
                    </div>
                    <label className="secondPartLabel"> Write a short description of the new features you would like to add </label><br />
                    <small id="characters">{charactersLeft} characters left</small>
                    <textarea id="description" onInput={countCharacters} />
                </div>
            )
        case 'SEP':
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel"> Write a short description of the support you need </label><br />
                    <small id="characters">{charactersLeft} characters left</small>
                    <textarea id="description" onInput={countCharacters} />
                </div>
            )
        default:
            break;
    }
}

export default FormItems;