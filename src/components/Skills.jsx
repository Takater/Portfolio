import React from 'react'
import Skill from './Skill'

function Skills () {

    return (
        <div id="skills" className="middle-container">
            <h2>Skills</h2>
            <Skill
                image="https://cdn-icons-png.flaticon.com/512/3062/3062533.png"
                title="Soft Skills"
                side="right"
                items= {[
                    "Assertive communication",
                    "Problem solving",
                    "Organization and time management",
                    "Ease for team work",
                    "Positive attitude",
                    "Trustworthy",
                    "Ease for self-learning",
                    "Can work under pressure"
                ]}
            />
            <Skill
                image="https://cdn-icons-png.flaticon.com/512/1066/1066370.png"
                title="Technical Skills"
                side="left"
                items= {[
                    "Full Stack Web Development: HTML, CSS, JavaScript, Python",
                    "Libraries/Frameworks: React, Bootstrap, Node.js, Flask",
                    "Databases: MySQL, SQLite, MongoDB",
                    "Others: C, VBA, Web 3.0, RPA/UiPath, Mathematics"
                ]}
            />
            <Skill
                image="https://cdn-icons-png.flaticon.com/512/3898/3898082.png"
                title="Languages"
                side="right"
                items = {[
                    "Portuguese: Native",
                    "English: Fluent",
                    "Italian: Advanced",
                    "Brazilian Sign Language: Basic",
                    "Japanese: Basic",
                ]}
            />
        </div>
    );
}

export default Skills