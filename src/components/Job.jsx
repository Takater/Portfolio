import React from 'react'

function Job (props) {
    const position = props.position
    const company = props.company
    const duration = props.duration
    const description = props.description

    return (
        <div className="job">
            <h3>{position}</h3>
            <p className="place">{company}</p>
            <p className="duration">{duration}</p>
            <p className="description" style={{color: "black"}}>{description}</p>
            <hr className="listHR"/>
        </div>
    );
}

export default Job;