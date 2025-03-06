import React from "react";
import Texts from "../support/Texts";
import KDAUIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { useMediaQuery } from "react-responsive";
import LinearMenu from "../components/LinearMenu";

export default function Work (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    function downloadCv() {
        window.open(Texts.resume_links[props.lang], "_blank");
    }

    return (
        <div>
            <h2>{Texts.navbarLinks[props.lang][1]}</h2>
            <span id="see-full-resume" onClick={downloadCv}>{Texts.fullResume[props.lang]}</span>
            {isMobile && <LinearMenu lang={props.lang} />}
            <hr />

            {Texts.experiences.map((exp, index) => {
                return (
                    <div className="card h-100 w-75 glass-bg my-3 mx-auto" key={"Exp " + index}>
                        <h5 className='card-title text-white'>{exp.position[props.lang]}<br/>{exp.company}</h5>
                        <h6 className='card-title text-dark'>{exp.time[props.lang]}</h6>
                        <p className='card-text'>{exp.longDescription[props.lang]}</p>
                    </div>
                )
            })}

            <button className="backTop" onClick={() => document.documentElement.scrollTop = 0}>
                <KDAUIcon 
                    fontSize="large"
                />
            </button>
        </div>
    )
}