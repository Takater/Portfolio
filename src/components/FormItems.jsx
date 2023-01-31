import React, { useState, useEffect } from "react";

function FormItems(props) {

    // Hooks to reference checkboxes
    const [checkboxes, setCheckboxes] = useState([]);

    // Function to be added to checkboxes and labels
    function handleCheckboxClick(event) {
        /* 
            GETS THE CORRECT TARGET FOR A CLICK EITHER ON BOX OR ON LABEL,
            PREVENTS EVENT TO BE RE-RAN AFTER TOGGLING BOX,
            TOGGLE CHECKBOX CHECKED
        */
        let target = event.target.nodeName === 'INPUT' ? event.target : document.querySelector(`label[for="${event.target.id}"]`);
        target.preventDefault();
        return target.checked = !target.checked;
    }

    // Hook to add onClick event to checkboxes and labels
    useEffect(() => {
        /*
            SET THE ARRAY OF CHECKBOXES,
            IF CHECKBOXES HAVE BEEN RENDERED START A LOOP FOR EACH CHECKBOX:
                ADDS FUNCTION TO CHECKBOX ONCLICK EVENT,
                GETS LABEL FOR CURRENT CHECKBOX,
                ADDS FUNCTION TO CURRENT LABEL
            THE SECOND PARAMETER IS THE OBJECT TO TRIGGER THE UPDATE
        */
        setCheckboxes(document.querySelectorAll('input[type="checkbox"]'));
        checkboxes.length > 0 && checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', handleCheckboxClick);
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            label && label.addEventListener('click', handleCheckboxClick);
        });
    }, [checkboxes]);

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
            document.querySelector("#description").style.borderColor = "";
        }
    }

    // Hook for quantity of new pages
    const [newPageChecked, setnewPageChecked] = useState(false);
    function addNewPage(event) {
        const newPage = event.target;
        setnewPageChecked(newPage.checked);
    }

    // Chosen type of development
    let item = props.type;

    // Hook for estimated price
    const [estimatedPrice, setEstimatedPrice] = useState(null);

    function handleEstimatePrice() {
        let startingPrice = 50;

        switch(item) {
            case 'DFS':
                // FROM SCRATCH PRICING
                startingPrice *= 4;
                checkboxes.forEach((checkbox) => {
                    if(checkbox.checked) {
                        switch(checkbox.id) {
                            case 'MultiplePages':
                                startingPrice += 50;
                                break;
                            case 'MultipleUsers':
                                startingPrice += 80;
                                break;
                            case 'RegisterLogin':
                                startingPrice += 40;
                                break;
                            case 'Database':
                                startingPrice += 100;
                                break;
                            case 'FilesStorage':
                                startingPrice += 100;
                                break;
                            case 'ExternalAPI':
                                startingPrice += 40;
                                break;
                            case 'PayemntOpt':
                                startingPrice += 80;
                                break;
                            case 'Charts':
                                startingPrice += 30;
                                break;
                            case 'Worksheet':
                                startingPrice += 50;
                                break;
                            default:
                                startingPrice += 30;
                                break;
                        }
                    }
                });
                let maxPrice = startingPrice * 4;
                setEstimatedPrice(`The price can vary from R$${startingPrice.toString()} to R$${maxPrice.toString()}`);

        }
    }

    /* 
            SWITCH CASE
    */
    
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

                        <input type="checkbox" name="get_data_from_other_websites" id="ExternalAPI" value="get_data_from_other_websites"/>
                        <label htmlFor="ExternalAPI">Get data from other websites</label><br />

                        <input type="checkbox" name="online_payment" id="PaymentOpt" value="online_payment"/>
                        <label htmlFor="PaymentOpt">Online payment</label><br />

                        <input type="checkbox" name="generate_charts" id="Charts" value="generate_charts"/>
                        <label htmlFor="Charts">Generate charts</label><br />

                        <input type="checkbox" name="worksheet_formulas_or_macros" id="Worksheet" value="worksheet_formulas_or_macros"/>
                        <label htmlFor="Worksheet">Worksheet formulas or macros</label><br />

                        <input type="checkbox" name="others" id="AnotherOpt" value="others"/>
                        <label htmlFor="AnotherOpt">Others</label><br />
                    </div>
                    <label className="secondPartLabel"> Write a short description of your project </label><br />
                    <small id="characters">{charactersLeft} characters left</small>
                    <textarea id="description" onInput={countCharacters} />
                    {estimatedPrice && <span className="text-danger">{estimatedPrice}</span>}<br />
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleEstimatePrice}>Get price range</button>
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
                                <input type="number" id="qntNewPages" defaultValue="1"/>
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
                    {estimatedPrice && <span className="text-danger">{estimatedPrice}</span>}<br />
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleEstimatePrice}>Get price range</button>
                </div>
            )
        case 'SEP':
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel"> Write a short description of the support you need </label><br />
                    <small id="characters">{charactersLeft} characters left</small>
                    <textarea id="description" onInput={countCharacters} />
                    {estimatedPrice && <span className="text-danger">{estimatedPrice}</span>}<br />
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleEstimatePrice}>Get price range</button>
                </div>
            )
        default:
            break;
    }
}

export default FormItems;