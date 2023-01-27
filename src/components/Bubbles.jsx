import React from 'react'
import Bubble from './Bubble'

function Bubbles () {

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Bubble
                text="Curriculum Vitae"
                top="67%"
                left="20%"
            />
            <Bubble
                text="Projects Done"
                top="77%"
                left="45%"
            />
            <Bubble
                text="Project Budget"
                top="67%"
                left="70%"
            />
        </div>
    );
}

export default Bubbles;