import React from 'react';
import Texts from '../support/Texts';

export default function Showcase (props) {

    if ('Experience'.localeCompare(props.section) === 0) {
        return (
            <div id='experience-section'>
                <div className='card-group my-2'>
                    {Texts.experiences.slice(0, 3).map((exp, index) => {
                        return (
                            <div className='card h-100 mx-1 glass-bg' key={"Exp " + index}>
                                <h5 className='card-title text-white'>{exp.position[props.lang]}<br/>{exp.company}</h5>
                                <h6 className='card-title text-dark'>{exp.time[props.lang]}</h6>
                                <p className='card-text'>{exp.shortDescription[props.lang]}</p>
                            </div>
                        )
                    })}
                </div>
                <p><a href="/experience" className='see-all'>{Texts.seeAll[props.lang]}</a></p>
            </div>
        )
    }
    else if ('Projects'.localeCompare(props.section) === 0) {
        return (
            <div id='projects-section'>
                <div className='card-group my-2'>
                    {Texts.projects.slice(0, 3).map((proj, index) => {
                        return (
                            <div className='card h-100 mx-1 glass-bg' key={"Project " + index}>
                                <h5 className='card-title text-white'>{proj.title[props.lang]}</h5>
                                <h6 className='card-title text-dark'>{proj.type[props.lang]}</h6>
                                <p className='card-text'>{proj.shortDescription[props.lang]}</p>
                                <p className='card-footer project-details'>{proj.details[props.lang]}</p>
                            </div>
                        )
                    })}
                </div>
                <p><a href="/projects-done" className='see-all'>{Texts.seeAll[props.lang]}</a></p>
            </div>
        )
    }
}