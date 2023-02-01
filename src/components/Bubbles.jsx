import React from 'react'
import Bubble from './Bubble'

function Bubbles (props) {

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Bubble
                text="Curriculum Vitae"
                top="67%"
                left="15%"
                lang={props.lang}
            />
            <Bubble
                text={props.lang === 'en' ? "Projects Done" : "Projetos Concluídos"}
                top="80%"
                left="45%"
                lang={props.lang}
            />
            <Bubble
                text={props.lang === 'en' ? "Request Budget" : "Solicitar Orçamento"}
                top="67%"
                left="75%"
                lang={props.lang}
            />
        </div>
    );
}

export default Bubbles;