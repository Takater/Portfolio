import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Bubbles from './Bubbles'
function Header (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
            <div className="header-div">
                <h1><span className='titleHi'>
                        {props.lang === 'en' ? 
                            "Hello, there! I'm" : 
                            "Oi! Eu sou o"
                        }
                    </span><br/>
                    <span> Guilherme Moret </span>
                </h1>
                <h3><em>
                        {props.lang === 'en' ? 
                            "Software Engineering Student and Full Stack Developer I" : 
                            "Estudante de Engenharia de Software e Desenvolvedor Full Stack Junior"
                        } 
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

export default Header;