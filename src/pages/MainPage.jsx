import React from 'react'
import { useMediaQuery } from 'react-responsive';
import KDAUIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import Gui from '../images/gui_head.png';
import Texts from '../support/Texts';
import Showcase from '../components/Showcase';
import LinearMenu from '../components/LinearMenu';

export default function MainPage (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <div id="main-page">
            
            {/* Include picture if mobile */
            isMobile && (
                <span>
                    <h1><span className='titleHi'>
                        {Texts.titleHi[props.lang]}
                    </span><br/>
                    <span> Guilherme Moret </span></h1>
                    <img className="gui-head mb-2" src={Gui} alt='Selfie Guilherme'/>
                </span>
            )}

            <p id="main-paragraph">
                {Texts.mainParagraph[props.lang]}
            </p>

            {/* Include linear navbar if mobile */
            isMobile && <LinearMenu lang={props.lang}/>}
            <hr />

            {/* Experiences and Projects showcase */
            ["Experience", "Projects"].map((section, index) => {
                return (
                    <div key={Texts.navbarLinks[props.lang][index+1]}>
                        <h4>
                            {Texts.navbarLinks[props.lang][index+1]}
                        </h4>
                        <Showcase section={section} lang={props.lang}/>
                        {index === 0 && <hr />}
                    </div>
                )
            })}
            <button className="backTop" onClick={() => document.documentElement.scrollTop = 0}>
                <KDAUIcon 
                    fontSize="large"
                />
            </button>
        </div>
    );
}