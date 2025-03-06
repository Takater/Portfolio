import React, { useState } from "react";
import KDAUIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import FormItems from "../components/FormItems";
import Texts from "../support/Texts";
import { useMediaQuery } from "react-responsive";
import LinearMenu from "../components/LinearMenu";
import { buildBudgetText } from "../support/Support";

export default function Budget(props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const [selectedType, setType] = useState('DFS');

    function handleTypeSelection() {
        const type = document.getElementById("typeDev").value;
        setType(type)
    }

    function submitForm() {
        const message_text = buildBudgetText(props.lang);
        if (message_text) {
            const url = 'https://api.whatsapp.com/send?phone=5561984170327&text=' + message_text;
            window.open(url, '_blank');
            return;
        }
    }

    return (
        <div id="budget">
            <h2>{Texts.form.pageTitle[props.lang]}</h2>
            {isMobile && <LinearMenu lang={props.lang} />}
            <hr />
            <form id="formBudget">
                {/* NAME */}
                <label htmlFor="name" className="form-label">{Texts.form.username[props.lang]}</label><br />
                <input id="name" type="text" className="form-control" required />

                {/* EMAIL */}
                <label htmlFor="email" className="form-label">{Texts.form.email[props.lang]}</label><br />
                <input id="email" type="email" className="form-control" required/>

                {/* PHONE */}
                <label htmlFor="phone" className="form-label">{Texts.form.phone[props.lang]}</label><br />
                <input id="phone" type="phone" className="form-control" required/>

                {/* TYPE */}
                <label htmlFor="typeDev" className="form-label">{Texts.form.devTypeLabel[props.lang]}</label><br />
                <select id="typeDev" className="form-select" onChange={handleTypeSelection}>
                    {Texts.form.devTypeOptions.map((option, index) => {
                        return (
                            <option value={option.value} key={"DevTypeOption " + index}>
                                {option[props.lang]}
                            </option>
                        )
                    })}
                </select>

                {/* DEADLINE */}
                <label htmlFor="deadline" className="form-label">{Texts.form.deadline[props.lang]}</label><br />
                <select id="deadline" className="form-select">
                    {Texts.form.deadlineOptions.map((option, index) => {
                        return (
                            <option value={option.value} key={"DeadlineOption " + index}>
                                {option[props.lang]}
                            </option>
                        )
                    })}
                </select>

                {/* SPECIFICS */}
                <FormItems 
                    type={selectedType}
                    lang={props.lang} 
                />
                <br />
                <button type="button" className="btn btn-success btn-sm" id="submitBtn" onClick={submitForm}>{Texts.form.sendButton[props.lang]}</button>
            </form><br />
            <button className="backTop" onClick={() => document.documentElement.scrollTop = 0}>
                <KDAUIcon 
                    fontSize="large"
                />
            </button>
        </div>
    )
}