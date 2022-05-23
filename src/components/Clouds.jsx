import React from 'react'
import Cloud from './Cloud'

function Clouds () {
    return (
        <div>
            <Cloud
                text="Soft Skills"
                top="15%"
                left="15%"
            />
            <Cloud
                text="Technical Skills"
                top="40%"
                left="5%"
            />
            <Cloud
                text="Education"
                top="50%"
                left="25%"
            />
            <Cloud
                text="Work Experience"
                top="15%"
                left="75%"
            />
            <Cloud
                text="Personal Projects"
                top="40%"
                left="85%"
            />
            <Cloud
                text="Contact"
                top="50%"
                left="65%"
            />
        </div>
    );
}

export default Clouds;