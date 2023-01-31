import React, { useState } from "react";
import KDALIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import FormItems from "./FormItems";

function Budget(props) {

    const [selectedType, setType] = useState('DFS');

    function handleTypeSelection(event) {
        setType(event.target.value)
    }

    function submitForm() {
        /**/alert(document.TEXT_NODE);
    }

    return (
        <div id="budget">
            <h2>Project Budget</h2>
            <form id="formBudget">
                {/* NAME */}
                <label htmlFor="name" className="form-label">Your Name</label><br />
                <input id="name" type="text" className="form-control" required />

                {/* EMAIL */}
                <label htmlFor="email" className="form-label">Your E-mail</label><br />
                <input id="email" type="email" className="form-control" required/>

                {/* PHONE */}
                <label htmlFor="phone" className="form-label">Your Phone Number</label><br />
                <input id="phone" type="phone" className="form-control" required/>

                {/* TYPE */}
                <label htmlFor="typeDev" className="form-label">Type of Development</label><br />
                <select id="typeDev" className="form-select" onChange={handleTypeSelection}>
                    <option value="DFS">Development from scratch</option>
                    <option value="NFEP">New features on existing project</option>
                    <option value="SEP">Support on existing project (no new features)</option>
                </select>

                {/* SPECIFICS */}
                <FormItems 
                    type={selectedType}
                    lang={props.lang} 
                />
                <br />
                <button type="button" className="btn btn-success btn-sm" id="submitBtn" onClick={submitForm}>Enviar</button>
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