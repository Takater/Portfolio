import Texts from "./Texts";

export function calculateEstimatedPrice(item, lang) {
    let startingPrice = 100;
    let maxPrice = 0;
    
    const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
    const qntPage = document.querySelector("#qtnPages");
    const qntNewPage = document.querySelector("#qtnNewPages");

    const deadline = parseFloat(document.querySelector("#deadline").value);

    switch(item) {
        case 'DFS': {
            // FROM SCRATCH PRICING
            startingPrice *= 4;
            let checked = 0;
            checkboxes.forEach((checkbox) => {
                if(checkbox.checked) {
                    // Add value 
                    startingPrice += parseInt(checkbox.value);

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
                    if (['NewPage', 'NewLanguage'].includes(checkbox.id)) {
                        if(checkbox.id === 'NewPage'){
                            startingPrice += parseInt(checkbox.value) * parseInt(qntNewPage.value);
                        } else {
                            startingPrice += parseInt(checkbox.value) * parseInt(qntPage.value)
                        }
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
            startingPrice *= 2.5;
            let description = document.getElementById('description').value;
            if (description.length === 0) {
                alert(Texts.form.alerts['no-description'][lang]);
                break;
            }
            let descriptionValue = calculateDescriptionValue(description, lang);
            maxPrice = startingPrice + (descriptionValue > startingPrice * 2 ? descriptionValue : startingPrice * 2)
            break;
        }
        default:
            break;
    }

    // If no boxes where selected, maxPrice === 0, then alert
    if (maxPrice === 0) {
        alert(Texts.form.alerts['no-option'][lang]);
        return
    }

    return {
        'startingPrice': Math.round(startingPrice*deadline),
        'maxPrice': Math.round(maxPrice*deadline)
    }
}

function calculateDescriptionValue (description, lang) {
    let totalPrice = 0;
    const descriptionWords = description.split(" ");

    // Add all words found values to total price
    descriptionWords.forEach((word) => {
        
        // Remove symbols
        let cleanWord = word.replace(/[^\w\sÀ-ÿ]/g, "")

        Texts.descriptionWords.forEach((descriptionWords) => {
            if  (descriptionWords.words) {
                if (descriptionWords.words.includes(cleanWord.toLowerCase())) {
                    totalPrice += descriptionWords.value
                }
            } else {
                if (descriptionWords[lang].includes(cleanWord.toLowerCase())) {
                    totalPrice += descriptionWords.value
                }
            }
        })
    });
    
    return totalPrice;
}

export function buildBudgetText(lang) {
    
    // Form parts
    const [firstPart, secondPart] = [{}, {}]

    // Name
    firstPart.name = document.getElementById('name').value;
    if(!firstPart.name) {
        alert(Texts.form.alerts['no-name'][lang]);
        return;
    }

    // Email
    firstPart.email = document.getElementById('email').value;
    if(!firstPart.email) {
        alert(Texts.form.alerts['no-email'][lang]);
        return;
    }

    // Phone
    firstPart.phone = document.getElementById('phone').value;
    if(!firstPart.phone) {
        alert(Texts.form.alerts['no-phone'][lang]);
        return;
    }

    // Type of service
    let typeDev = document.getElementById('typeDev');
    firstPart.type = typeDev.options[typeDev.selectedIndex].textContent;

    // Deadline
    let deadline = document.getElementById('deadline');
    firstPart.deadline = deadline.options[deadline.selectedIndex].textContent;

    // If type of service includes checkboxes
    if (['DFS', 'NFEP'].includes(typeDev.value)) {

        // Get checked boxes, alert if there are none
        const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter((checkbox) => checkbox.checked);
        if (checkedBoxes.length === 0) {
            alert(Texts.form.alerts['no-option'][lang]);
            return
        }

        // Build array with labels
        if (typeDev.value === 'DFS') {
            // Get only labels
            secondPart.features = checkedBoxes.map((checkbox) => checkbox.nextElementSibling.textContent);
        } else {
            secondPart.features = checkedBoxes.map((checkbox) => {
                
                // If new page or language build quantity text
                if (['NewPage', 'NewLanguage'].includes(checkbox.id)) {
                    let quantity_text
                    let quantity = document.getElementById(checkbox.id === 'NewPage' ? 'qtnNewPages' : 'qtnPages').value;
                    if (checkbox.id === 'NewPage') {
                        quantity_text = `${quantity} ${Texts.budgetText[checkbox.id][lang][quantity > 1 ? "p" : "s"]}`
                    } else {
                        quantity_text = `${checkbox.nextElementSibling.textContent} ${Texts.budgetText[checkbox.id][lang]['to']} ${quantity} ${Texts.budgetText[checkbox.id][lang][quantity > 1 ? "p" : "s"]}`
                    }
                    return quantity_text

                // Else return label
                } else {
                    return checkbox.nextElementSibling.textContent;
                }
            });
        }
    }

    // Get description and alert if empty or extra long
    secondPart.description = document.getElementById('description').value;
    if(secondPart.description.length === 0) {
        return alert(Texts.form.alerts['no-description'][lang]);
    } else if (secondPart.description.length > 200) {
        alert(Texts.form.alerts['too-long'][lang]);
        return
    }

    // Build message
    const breakline = "%0D%0A"

    const prices = calculateEstimatedPrice(typeDev.value, lang)
    const message_text = [
        Texts.descriptionMessage.name[lang] + firstPart.name,
        Texts.descriptionMessage.email[lang] + firstPart.email,
        Texts.descriptionMessage.phone[lang] + firstPart.phone,
        Texts.descriptionMessage.typeDev[lang] + firstPart.type,
        Texts.descriptionMessage.deadline[lang] + firstPart.deadline,
        secondPart.features ? Texts.descriptionMessage.features[lang] + secondPart.features.join(", ") : "",
        Texts.descriptionMessage.description[lang] + secondPart.description,
        Texts.descriptionMessage.estimatedPrice[lang][0] + prices.startingPrice + Texts.descriptionMessage.estimatedPrice[lang][1] + prices.maxPrice
    ].join(breakline)

    return message_text;
}