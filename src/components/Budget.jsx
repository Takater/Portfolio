import React from "react";
import KDALIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { useState } from "react";
import FormItems from "./FormItems";

function Budget() {

    const [selectedType, setType] = useState('');

    function handleTypeSelection(event) {
        setType(event.target.value)
    }

    return (
        <div id="budget">
            <h2>Project Budget</h2>
            <form id="formBudget">
                {/* NAME */}
                <label for="name" className="form-label">Name</label><br />
                <input id="name" type="text" className="form-control" required/>

                {/* EMAIL */}
                <label for="email" className="form-label">E-mail</label><br />
                <input id="email" type="email" className="form-control" required/>

                {/* PHONE */}
                <label for="phone" className="form-label">Phone Number</label><br />
                <input id="phone" type="phone" className="form-control" required/>

                {/* TYPE */}
                <label for="typeDev" className="form-label">Type of Development</label><br />
                <select id="typeDev" className="form-select" onChange={handleTypeSelection}>
                    <option value="DFS">Development from scratch</option>
                    <option value="NFEP">New features on existing project</option>
                    <option value="SEP">Support on existing project (no new features)</option>
                </select>

                <FormItems 
                    type={selectedType === '' ? 'DFS' : selectedType} 
                />


                <button type="submit" className="btn btn-secondary btn-sm" disabled>Enviar</button>
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