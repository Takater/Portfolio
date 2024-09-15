import React, { useState, useEffect } from "react";
import alerts from "../support/Alerts";

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

            checkboxes && checkboxes.forEach((checkbox) => {
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
            document.querySelector("#characters").style.color = "red";
            document.querySelector("#description").style.borderColor = "red";
        } else {
            document.querySelector("#characters").style.color = "#050a30";
            document.querySelector("#description").style.borderColor = "";
        }
    }

    // Hook for quantity of new pages
    const [newPageChecked, setnewPageChecked] = useState(false);
    function addNewPage(event) {
        const newPage = event.target;
        setnewPageChecked(newPage.checked);
    }
    
    // Hook for new language choice
    const [newLanguageChecked, setNewLanguageChecked] = useState(false);
    function addNewLanguage(event) {
        const newLang = event.target;
        setNewLanguageChecked(newLang.checked);
    }

    // Chosen type of development
    let item = props.type;

    // Hook for estimated price
    const [estimatedPrice, setEstimatedPrice] = useState(null);

    // Hooks for chosen quantities
    const [qntNewPage, setQntNewPage] = useState(1);
    const [qntPage, setQntPage] = useState(1);

    function handleQntChange(event) {
        let target = event.target

        // Change appropriate hook
        target && target.id === 'qntNewPages' ?
            setQntNewPage(target.value) :
        target.id === 'qntPages' &&
            setQntPage(target.value)
    }

    function handleEstimatePrice() {
        let startingPrice = 50;
        let maxPrice = 0;

        switch(item) {
            case 'DFS': {
                // FROM SCRATCH PRICING
                startingPrice *= 4;
                let checked = 0;
                checkboxes.forEach((checkbox) => {
                    if(checkbox.checked) {
                        // Add value if it's a number or 0 otherwise
                        startingPrice += !isNaN(checkbox.value) ? parseInt(checkbox.value) : 0;

                        // Count checked
                        checked++;
                    } 
                });
                maxPrice = startingPrice * 5 * (checked/2);
                break;
            }
            case 'NFEP': {
                // NEW FEATURES PRICING
                startingPrice *= 2;
                let checked = 0;
                checkboxes.forEach((checkbox) => {
                    if(checkbox.checked) {
                        // Add up prices and multiply by the appropriate quantity for the appropriate choices, when necessary
                        if (checkbox.id === 'newPage' || checkbox.id === 'newLanguage') {
                            checkbox.id === 'newPage' ?
                                startingPrice += parseInt(checkbox.value * qntNewPage) :
                                startingPrice += parseInt(checkbox.value * qntPage)
                        } else {
                            startingPrice += parseInt(checkbox.value);
                        }
                        checked++;
                    }
                });
                maxPrice = startingPrice * 4 * checked;
                break;
            }
            case 'SEP': {
                // SUPPORT
                startingPrice *= 2;
                maxPrice = startingPrice + (document.getElementById("description").value.length * 5)
                break;
            }
            default:
                break;
        }

        // If no boxes where selected, maxPrice === 0, then alert
        if (maxPrice === 0) {
            alerts(props.lang, 'no-option');
            return
            // If 'SEP' and no description, starting and max prices are the same, then alert
        } else if (startingPrice === maxPrice) {
            alerts(props.lang, 'no-description');
            return
        }

        setEstimatedPrice(props.lang === 'en' ?
            `The price may vary from R$${startingPrice.toString()} to R$${maxPrice.toString()}` :
            `O preço pode variar de R$${startingPrice.toString()} a R$${maxPrice.toString()}` 

        );
    }

    /* 
            SWITCH CASE
    */
    
    switch(item) {
        case 'DFS':                 // FROM SCRATCH
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel">{props.lang === 'en' ?
                        "Select all the features that your project might include" :
                        "Selecione todos os recursos que seu projeto pode incluir"
                    }</label><br />
                    <div className="secondPart-checkboxes">
                        <input type="checkbox" name="multiple_pages" id="MultiplePages" value="70"/>
                        <label htmlFor="MultiplePages">{props.lang === 'en' ?
                            "Multiple pages" :
                            "Múltiplas Páginas"
                        }</label><br />

                        <input type="checkbox" name="various_users" id="MultipleUsers" value="80"/>
                        <label htmlFor="MultipleUsers">{props.lang === 'en' ?
                            "Various users" :
                            "Vários usuários"
                        }</label><br />

                        <input type="checkbox" name="register_and_login" id="RegisterLogin" value="50"/>
                        <label htmlFor="RegisterLogin">{props.lang === 'en' ?
                            "Register and Login" :
                            "Cadastro e Login"
                        }</label><br />

                        <input type="checkbox" name="record_data" id="Database" value="100"/>
                        <label htmlFor="Database">{props.lang === 'en' ?
                            "Record data" :
                            "Gravar dados"
                        }</label><br />

                        <input type="checkbox" name="internal_files" id="FilesStorage" value="100"/>
                        <label htmlFor="FilesStorage">{props.lang === 'en' ?
                            "Internal files" :
                            "Arquivos internos"
                        }</label><br />

                        <input type="checkbox" name="get_data_from_other_websites" id="ExternalAPI" value="50"/>
                        <label htmlFor="ExternalAPI">{props.lang === 'en' ?
                            "Get data from other websites" :
                            "Pegar dados de outros sites"
                        }</label><br />

                        <input type="checkbox" name="online_payment" id="PaymentOpt" value="80"/>
                        <label htmlFor="PaymentOpt">{props.lang === 'en' ?
                            "Online payment" :
                            "Pagamento online"
                        }</label><br />

                        <input type="checkbox" name="multiple_languages" id="MultiLang" value="30"/>
                        <label htmlFor="MultiLang">{props.lang === 'en' ?
                            "Multiple languages" :
                            "Múltiplos idiomas"
                        }</label><br />

                        <input type="checkbox" name="generate_charts" id="Charts" value="30"/>
                        <label htmlFor="Charts">{props.lang === 'en' ?
                            "Generate charts" :
                            "Gerar gráficos"
                        }</label><br />

                        <input type="checkbox" name="worksheet_formulas_or_macros" id="Worksheet" value="50"/>
                        <label htmlFor="Worksheet">{props.lang === 'en' ?
                            "Worksheet with formulas or macros" :
                            "Planilha com fórmulas ou macros"
                        }</label><br />

                        <input type="checkbox" name="arduino_automation" id="Arduino" value="200"/>
                        <label htmlFor="Arduino">{props.lang === 'en' ?
                            "Arduino Automation" : 
                            "Automação Arduino" 
                        }</label><br />

                        <input type="checkbox" name="tasks_automation" id="TasksAutomation" value="120"/>
                        <label htmlFor="TasksAutomation">{props.lang === 'en' ?
                            "Tasks Automations" : 
                            "Automatização de Tarefas" 
                        }</label><br />

                        <input type="checkbox" name="others" id="AnotherOpt" value="30"/>
                        <label htmlFor="AnotherOpt">{props.lang === 'en' ?
                            "Others" : 
                            "Outros" 
                        }</label><br />
                    </div>
                    <label className="secondPartLabel"> {props.lang === 'en' ?
                        "Write a short description of your project" : 
                        "Escreva uma pequena descrição do seu projeto" 
                    }</label><br />
                    <small id="characters">{props.lang === 'en' ?
                            `${charactersLeft} characters left` : 
                            `${charactersLeft} caracteres sobrando` 
                            }</small>
                    <textarea id="description" onInput={countCharacters} />
                    {estimatedPrice && <span className="text-warning">{estimatedPrice}</span>}<br />
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleEstimatePrice}>{props.lang === 'en' ? 
                        "Get price range" :
                        "Ver faixa de preço"
                    }</button>
                </div>
            )
        case 'NFEP':                    // NEW FEATURES
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel">{props.lang === 'en' ? 
                        "Select options that best fit the new features that you would like to add to your project" :
                        "Selecione as opções que melhor se encaixam nos recursos que você gostaria de adicionar ao seu projeto" 
                    }</label><br />
                    <div className="secondPart-checkboxes"                         >
                        <input type="checkbox" name="new_page" id="newPage" value="50" onChange={addNewPage}/>
                        <label htmlFor="newPage">{props.lang === 'en' ? 
                            "New page" :
                            "Nova página" 
                        }</label><br />
                        
                        {newPageChecked && 
                            <div>
                                <input type="number" id="qntNewPages" defaultValue="1" onChange={handleQntChange}/>
                                <label htmlFor="qntNewPages">: {props.lang === 'en' ? 
                                    "How many?" :
                                    "Quantas?" 
                                }</label> 
                            </div>
                        }

                        <input type="checkbox" name="new_user" id="newUser" value="30" />
                        <label htmlFor="newUser">{props.lang === 'en' ? 
                            "New User and their permissions" :
                            "Novo Usuário e suas permissões" 
                        }</label><br />

                        <input type="checkbox" name="new_language" id="newLanguage" value="80" onChange={addNewLanguage}/>
                        <label htmlFor="newLanguage">{props.lang === 'en' ? 
                            "New language" :
                            "Novo idioma" 
                        }</label><br />

                        {newLanguageChecked &&
                            <div>
                                <input type="number" id="qntPages" defaultValue="1" onChange={handleQntChange}/>
                                <label htmlFor="qntPages">: {props.lang === 'en' ? 
                                    "How many pages?" :
                                    "Quantas páginas?" 
                                }</label>
                            </div>                    
                        }

                        <input type="checkbox" name="new_macro" id="newMacro" value="40" />
                        <label htmlFor="newMacro">{props.lang === 'en' ? 
                            "New formula or macro for Worksheet" :
                            "Nova fórmula ou macro para Planilha" 
                        }</label><br />

                        <input type="checkbox" name="process_automation" id="processAutomation" value="100"/>
                        <label htmlFor="processAutomation">{props.lang === 'en' ? 
                            "Process automation" :
                            "Automatização de processo" 
                        }</label><br />

                        <input type="checkbox" name="new_feature" id="newFeature" value="50"/>
                        <label htmlFor="newFeature">{props.lang === 'en' ? 
                            "Other new features" :
                            "Outros novos recursos" 
                        }</label><br />
                    </div>
                    <label className="secondPartLabel"> {props.lang === 'en' ? 
                        "Write a short description of the new features you would like to add " :
                        "Escreva uma pequena descrição dos novos recursos que gostaria de adicionar " 
                    }</label><br />
                    <small id="characters">{props.lang === 'en' ?
                            `${charactersLeft} characters left` : 
                            `${charactersLeft} caracteres sobrando` 
                            }</small>
                    <textarea id="description" onInput={countCharacters} />
                    {estimatedPrice && <span className="text-warning">{estimatedPrice}</span>}<br />
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleEstimatePrice}>{props.lang === 'en' ? 
                        "Get price range" :
                        "Ver faixa de preço"
                    }</button>
                </div>
            )
        case 'SEP':
            return (
                <div id="formSecondPart">
                    <label className="secondPartLabel"> {props.lang === 'en' ? 
                        "Write a short description of the support you need " :
                        "Escreva uma pequena descrição do suporte que precisa "
                    }</label><br />
                    <small id="characters">{props.lang === 'en' ?
                            `${charactersLeft} characters left` : 
                            `${charactersLeft} caracteres sobrando` 
                            }</small>
                    <textarea id="description" onInput={countCharacters} />
                    {estimatedPrice && <span className="text-warning">{estimatedPrice}</span>}<br />
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleEstimatePrice}>{props.lang === 'en' ? 
                        "Get price range" :
                        "Ver faixa de preço"
                    }</button>
                </div>
            )
        default:
            break;
    }
}

export default FormItems;