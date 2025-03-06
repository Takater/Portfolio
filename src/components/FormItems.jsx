import React, { useState, useEffect } from "react";
import Texts from "../support/Texts";
import { calculateEstimatedPrice } from "../support/Support";

function FormItems(props) {

    // Chosen type of development
    let item = props.type;

    // Hook for checkboxes
    const [checkBoxes, setCheckBoxes] = useState([]);

    // Reset data on type change
    useEffect(()=>{
        // Set all checkboxes to false and set new list
        const checkedBoxes = document.querySelectorAll(`input[type="checkbox"]`);
        checkedBoxes.forEach((each) => {each.checked = false});
        setCheckBoxes(Texts.form.specificsCheckboxes[item]);
    },[item])

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
            document.querySelector("#characters").style.color = "#ddd";
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

    // Hook for estimated price
    const [estimatedPrice, setEstimatedPrice] = useState(null);
    function handleEstimatedPrice() {
        const prices = calculateEstimatedPrice(item, props.lang);

        setEstimatedPrice(`${Texts.form.priceRange[props.lang][0]}${prices.startingPrice}${Texts.form.priceRange[props.lang][1]}${prices.maxPrice}`);
    }
    // Set text to null on language change
    useEffect(() => {setEstimatedPrice(null)},[props.lang])

    return (
        <div id="formSecondPart">
            {['DFS', 'NFEP'].includes(item) && (
                <span>
                    <label className="secondPartLabel">{Texts.form.secondPartLabel[props.lang]}</label><br />
                    <div className="secondPart-checkboxes">
                        {checkBoxes.map((checkbox, index) => {
                            switch(checkbox.id) {
                                case 'NewPage':
                                    return (
                                        <span key={"Checkbox " + index}>
                                            <input type="checkbox" name={checkbox.name} id={checkbox.id} value={checkbox.value} onChange={addNewPage} />
                                            <label htmlFor={checkbox.id}>{checkbox[props.lang]}</label><br />
                                            {newPageChecked &&
                                                <div>
                                                    <input type="number" id="qtnNewPages" defaultValue={1} />
                                                    <label htmlFor="qtnNewPages">{Texts.form.newPages[props.lang]}</label>

                                                </div>
                                            }
                                        </span>
                                    )
                                case 'NewLanguage':
                                    return (
                                        <span key={"Checkbox " + index}>
                                            <input type="checkbox" name={checkbox.name} id={checkbox.id} value={checkbox.value} onChange={addNewLanguage} />
                                            <label htmlFor={checkbox.id}>{checkbox[props.lang]}</label><br />
                                            {newLanguageChecked &&
                                                <div>
                                                    <input type="number" id="qtnPages" defaultValue={1} />
                                                    <label htmlFor="qtnPages">{Texts.form.newLanguage[props.lang]}</label>
                                                </div>
                                            }
                                        </span>

                                    )
                                default:
                                    return (
                                        <span key={"Checkbox " + index}>
                                            <input type="checkbox" name={checkbox.name} id={checkbox.id} value={checkbox.value} />
                                            <label htmlFor={checkbox.id}>{checkbox[props.lang]}</label><br />
                                        </span>
                                    )
                            }
                        })}
                    </div>
                </span>
            )}
            <label className="secondPartLabel"> {Texts.form.descriptionLabel[props.lang]}</label><br />
            <small id="characters">{`${charactersLeft} ${Texts.form.charactersDescription[props.lang]}`}</small>
            <textarea id="description" onInput={countCharacters} />
            {estimatedPrice && <span className="text-warning">{estimatedPrice}<br/></span>}
            <button type="button" className="btn btn-warning btn-sm mt-2" onClick={handleEstimatedPrice}>{Texts.form.generatePriceRange[props.lang]}</button>
        </div>
    )
}

export default FormItems;