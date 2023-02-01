import React, { useState } from "react";
import KDALIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import FormItems from "./FormItems";

function Budget(props) {

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
            // E-MAIL
        firstPart.email = document.getElementById('email').value;
            // PHONE
        firstPart.phone = document.getElementById('phone').vaue;
            // TYPE
        firstPart.type = document.getElementById('typeDev').textContent;

        // SECOND PART
        let typeDev = document.getElementById('typeDev').value;

        // If Development from scratch or New Features on Existing Project
        if(typeDev === 'DFS' || typeDev === 'NFEP') {

            // Array for checkboxes
            const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(checkbox => checkbox.checked);

            // Check if at least one check box if tagged
            if(checkboxes.length === 0) {
                alert(props.lang === 'en' ?
                'Please, select at least one option' :
                'Por favor, selecione ao menos uma opção'
                );
                return
            }

            // Build array with the label from all selected boxes
            secondPart.features = checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.nextElementSibling.textContent);
        }

        // Check if description is not empty
        if(document.getElementById('description').value.length === 0) {
            alert(props.lang === 'en' ? 
            'Please, write a short description of what you wish' : 
            'Por favor, escreva uma descrição curta do que deseja'
            );
            return
        }
        secondPart.description = document.getElementById('description').value;

        // Build message

        // Breakline
        const breakline ="%0D%0A"

        const message_text = encodeURIComponent([
            (props.lang === 'en' ? "*Name: *" : "*Nome: *") & firstPart.name,
            "E-mail: " & firstPart.email,
            (props.lang === 'en' ? "*Phone :*" : "*Telefone: *") & firstPart.phone,
            (props.lang === 'en' ? "*Type of Development: *" : "*Tipo de Desenvolvimento: *") & firstPart.type,
            secondPart.features && 
                (props.lang === 'en' ? "*Included features: *" : "*Recursos inclusos: *") & secondPart.features.join(", "),
            (props.lang === 'en' ? "*Description: *" : "*Descrição: *") & secondPart.description            
        ].join(breakline));

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

export default Budget