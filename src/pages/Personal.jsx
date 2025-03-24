import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Texts, { project_types } from '../support/Texts';
import KDAUIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import LinearMenu from '../components/LinearMenu';

export default function Personal (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const [filter, setFilter] = useState('all');
    const [projectsList, setProjectsList] = useState(Texts.projects);
    
    useEffect(() => {
        const filteredList = Texts.projects.filter(proj => filter === 'all' || proj.type['en'].split(", ").includes(filter))
        setProjectsList(filteredList)
    }, [filter])

    function handleFilterChange() {
        const filter = document.getElementById("filterSelect").value;
        setFilter(filter);
    }

    return (
        <div id="projects" className='align-items-center'>
            <h2>{Texts.navbarLinks[props.lang][2]}</h2>
            {isMobile && <LinearMenu lang={props.lang} />}
            <hr />
            <select className={'form-select text-center mx-auto ' + (isMobile ? 'w-50' : 'w-25')} defaultValue={filter} onChange={handleFilterChange} id="filterSelect">
                {['all', ...project_types.map((each => each['en']))].map((value, index) => {
                    return (
                        <option value={value} key={value}>
                            {Texts.projectsFilter[index][props.lang]}
                        </option>
                    )
                })}
            </select>
            {
                projectsList.map((proj, ind) => {
                    return (
                        <div className='card h-100 w-75 glass-bg my-3 mx-auto' key={"Project " + ind}>
                            <h5 className='card-title text-white'>{proj.title[props.lang]}</h5>
                            <h6 className='card-title text-dark'>{proj.type[props.lang]}</h6>
                            <p className={'card-text' + (isMobile ? ' projects-text-mobile' : '')}>{proj.longDescription[props.lang]}<br />
                                
                            </p>
                            {proj.link !== "" && 
                                <span className='mb-3'>
                                    <a className='project-page-link' href={proj.link}>{Texts.seeSourceCode[props.lang]}</a>
                                </span>
                            }
                            <p className='card-footer text-dark fw-bold'>{proj.details[props.lang]}</p>
                        </div>
                    )
                })
            }
            <button className="backTop" onClick={() => document.documentElement.scrollTop = 0}>
                <KDAUIcon 
                    fontSize="large"
                />
            </button>
        </div>
    );
}