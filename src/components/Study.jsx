import React from 'react'

function Study (props) {
    const course = props.course
    const institution = props.school
    const startDate = props.start
    const endDate = props.end
    const description = props.description
    const certificate = props.certificate

    function date () {
        return startDate !== undefined && (
            <p className="duration">{startDate + " - " + endDate}</p>
        )
    }

    function certificate_url () {
        return certificate !== undefined && (
            <a className="certificate-link" href={certificate}>Certificate</a>
        )
    }

    return (
        <div className="educational">
            <h3>{course}{certificate_url()}</h3>
            <p className="place">{institution}</p>
            {date()}
            <p className="description" style={{color: "black"}}>{description}</p>
            <hr className="listHR"/>
        </div>
    )
}

export default Study;