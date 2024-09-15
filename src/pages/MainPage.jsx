import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Bubbles from '../components/Bubbles';
import Gui from '../images/gui_head.png';
import Texts from '../support/Texts';

export default function MainPage (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
            <div className="header-div">
                <img className="gui-head" src={Gui} alt='Selfie Guilherme'/>
                <h1><span className='titleHi'>
                        {Texts.titleHi[props.lang]}
                    </span><br/>
                    <span> Guilherme Moret </span>
                </h1>
                <h3><em>
                        {Texts.devPhrase[props.lang]} 
                    </em>
                </h3>
                <p>
                    { props.lang === 'en' ?
                        "This is my Portfolio, here you can view my education and work experience, " : 
                        "Esse é o meu Portfólio, aqui você pode ver minhas experiências de educação "
                    }
                         {!isMobile && <br />}
                    {props.lang=== 'en' ? 
                        "projects I've worked on, and request a project budget by filling a form " : 
                        "e trabalho, projetos nos quais trabalhei, e solicitar um orçamento de projeto "
                    }
                        {!isMobile && <br />} 
                    {props.lang === 'en' ?
                        "that will be forwarded to my WhatsApp." :
                        "preenchendo um formulário que será encaminhado para o meu WhatsApp."
                    }
                </p>
                <Bubbles 
                    lang={props.lang}
                />
            </div>
    );
}