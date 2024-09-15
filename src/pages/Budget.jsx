import React, { useState } from "react";
import KDALIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import FormItems from "../components/FormItems";
import alerts from "../support/Alerts";

export default function Budget(props) {

    const [selectedType, setType] = useState('DFS');

    function handleTypeSelection(event) {
        setType(event.target.value)
    }

    function submitForm() {

        // PARTS OF FORM
        const firstPart = {}
        const secondPart = {}

        // FIRST PART
        
        // NAME
        firstPart.name = document.getElementById('name').value;
            
        // If name is missing
        if(!firstPart.name) {
            alerts(props.lang, "no-name");
            return;
        }

        // E-MAIL
        firstPart.email = document.getElementById('email').value;

        // If email is missing
        if(!firstPart.email) {
            alerts(props.lang, "no-email");
            return;
        }


        // PHONE
        firstPart.phone = document.getElementById('phone').value;

        // If phone is missing
        if(!firstPart.phone) {
            alerts(props.lang, 'no-phone');
            return;
        }
        
        // TYPE
        let typeDev = document.getElementById('typeDev');

        firstPart.type = typeDev.options[typeDev.selectedIndex].textContent;

        // SECOND PART

        // If Development from scratch or New Features on Existing Project
        if(typeDev.value === 'DFS' || typeDev.value === 'NFEP') {

            // Array for checkboxes
            const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(checkbox => checkbox.checked);

            // Check if at least one check box if tagged
            if(checkboxes.length === 0) {
                alerts(props.lang, 'no-option');
                return
            }

            // Build array with the label from all selected boxes
            if(typeDev.value === 'DFS') {
                
                // For development from scratch, get only labels
                secondPart.features = checkboxes.map(checkbox => checkbox.nextElementSibling.textContent);

            } else {

                // For new features on existing project
                secondPart.features = checkboxes.map((checkbox) => {

                    // If new page or new language, get quantity of pages
                    if(checkbox.id === 'newPage' || checkbox.id === 'newLanguage') {
                        
                        // Chosen feature
                        let context = checkbox.id;

                        // Chosen quantity for either choice
                        let quantity = context === 'newPage' ? document.querySelector("#qntNewPages").value : document.querySelector("#qntPages").value ;

                        // Text edited
                        let quantity_text

                            
                            // If portuguese
                            if (props.lang === 'pt') {

                                // If news pages
                                if (context === 'newPage') {

                                    // Build text
                                    quantity_text = quantity > 1 ? 

                                        // Plural
                                        quantity + " " + checkbox.nextElementSibling.textContent.replace(" ", "s ") + "s" 
                                        :
                                        // Singular
                                        quantity + " " + checkbox.nextElementSibling.textContent

                                    // Return
                                    return quantity_text;
                                }

                                // If new language
                                else {
                                    return checkbox.nextElementSibling.textContent + " para " + quantity + " página" + (quantity > 1 ? "s" : "");
                                }
                            }

                            // If English 
                            else {
                                
                                // If new pages
                                if (context === 'newPage') {

                                    // Build text
                                    quantity_text = quantity > 1 ?

                                        // Plural
                                        quantity + " " + checkbox.nextElementSibling.textContent + "s"
                                        :
                                        // Singular
                                        quantity + " " + checkbox.nextElementSibling.textContent

                                    // Return message
                                    return quantity_text
                                }

                                // If new language
                                else {
                                    return checkbox.nextElementSibling.textContent + " for " + quantity + " page" + (quantity > 1 ? "s" : "");
                                }
                            }

                    } else {
                        
                        // If another, return only label
                        return checkbox.nextElementSibling.textContent
                    }
                
                // End of checkboxes mapping
                });
            }
        }

        // Check if description is not empty
        if(document.getElementById('description').value.length === 0) {
            alerts(props.lang, 'no-description');
            return
        }
        secondPart.description = document.getElementById('description').value;

        // Build message

        // Breakline
        const breakline ="%0D%0A"

        const message_text = [
            (props.lang === 'en' ? "*Name :* " : "*Nome :* ") + firstPart.name,
            "*E-mail:* " + firstPart.email,
            (props.lang === 'en' ? "*Phone :* " : "*Telefone :* ") + firstPart.phone,
            (props.lang === 'en' ? "*Type of Development :* " : "*Tipo de Desenvolvimento :* ") + firstPart.type,
            secondPart.features && 
                (props.lang === 'en' ? "*Included features :* " : "*Recursos inclusos :* ") + secondPart.features.join(", "),
            (props.lang === 'en' ? "*Description :* " : "*Descrição :* ") + secondPart.description            
        ].join(breakline);

        const url = 'https://api.whatsapp.com/send?phone=5569984282019&text=' + message_text;

        window.open(url, '_blank');
        return;

    }

    return (
        <div id="budget">
            <h2>{props.lang === 'en' ?
                "Project Budget" :
                "Orçamento de Projeto"
                }
            </h2>
            <form id="formBudget">
                {/* NAME */}
                <label htmlFor="name" className="form-label">{props.lang === 'en' ?
                    "Your Name" :
                    "Seu Nome"
                    }
                </label><br />
                <input id="name" type="text" className="form-control" required />

                {/* EMAIL */}
                <label htmlFor="email" className="form-label">{props.lang === 'en' ?
                    "Your E-mail" :
                    "Seu E-mail"
                    }
                </label><br />
                <input id="email" type="email" className="form-control" required/>

                {/* PHONE */}
                <label htmlFor="phone" className="form-label">{props.lang === 'en' ?
                    "Your Phone Number" :
                    "Seu Número de Telefone"
                    }
                </label><br />
                <input id="phone" type="phone" className="form-control" required/>

                {/* TYPE */}
                <label htmlFor="typeDev" className="form-label">{props.lang === 'en' ?
                    "Type of Development" :
                    "Tipo de Desenvolvimento"
                    }
                </label><br />
                <select id="typeDev" className="form-select" onChange={handleTypeSelection}>
                    <option value="DFS">{props.lang === 'en' ?
                        "Development from scratch" :
                        "Desenvolvimento do zero"
                        }
                    </option>
                    <option value="NFEP">{props.lang === 'en' ?
                        "New features on existing project" :
                        "Novos recursos em projeto existente"
                        }
                    </option>
                    <option value="SEP">{props.lang === 'en' ?
                        "Support on existing project (no new features)" :
                        "Suporte em projeto existente (sem recursos novos)"
                        }
                    </option>
                </select>

                {/* SPECIFICS */}
                <FormItems 
                    type={selectedType}
                    lang={props.lang} 
                />
                <br />
                <button type="button" className="btn btn-success btn-sm" id="submitBtn" onClick={submitForm}>{props.lang === 'en' ?
                    "Send" :
                    "Enviar"
                }</button>
            </form><br />
            <button className="backHome" onClick={() => window.location.pathname = "/"}>
                <KDALIcon 
                    fontSize="large"
                />
            </button>
        </div>
    )
}