import React from 'react'
import Grid from '@mui/material/Grid';
import Project from './Project'
import imgHTML from '../images/html.png'
import devFullStack from '../images/devFullStack.png'
import automation from '../images/automation.png'
import web3 from '../images/web3.png'
import KDALIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { useMediaQuery } from 'react-responsive';

function Personal (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    function Link (prop) {
        const LinkStyle = {
            color: (prop.text === "In Progress" || prop.text === "Em Andamento") && '#ad5'
        }
        return (<a target="_blank" rel="noreferrer" style={LinkStyle} className="project-link" href={prop.href}>{prop.text}</a>);
    }

    return (
        <div id="projects">
            <h2><span>
                {props.lang === 'en' ? "Projects" : "Projetos"}
                </span>
            </h2>
            <div id="projects-bubbles">
                                                    {/* ADJUST SPACING ACCORDING TO LANGUAGE AND SCREEN SIZE */}
                <Grid container spacing={props.lang === 'en' ? 3 : (isMobile ? 2.5 : 1)}>
                    <Project
                        image={imgHTML}
                        title={props.lang === 'en' ? "Front-End Only" : "Apenas Front-End"}
                        items = {[
                            <Link 
                                href="https://github.com/Takater/Portfolio"
                                text={props.lang === 'en' ? "This Portfolio" : "Esse Portfólio" }
                            />,
                            <Link 
                                href="https://github.com/Takater/dep-mirian-moret" 
                                text={props.lang === 'en' ? "Landing Page Model" : "Modelo de Página de Destino"}
                            />,
                            <Link 
                                href="https://github.com/Takater" 
                                text={props.lang === 'en' ? "In Progress" : "Em Andamento"}
                            />
                        ]}
                    />
                    <Project
                        image={devFullStack}
                        title={props.lang === 'en' ? "Full Stack Web Apps" : "Aplicações Web Full Stack"}
                        items = {[
                            <Link 
                                href="https://github.com/Takater/CS50x-FinalProject" 
                                text={props.lang === 'en' ? "Game Zone (Cs50x Final Project)" : "Game Zone (Projeto Final CS50x)"}
                            />,
                            <Link 
                                href="https://github.com/Takater/MyStocks" 
                                text={props.lang === 'en' ? "My Stocks App" : "Aplicativo My Stocks"}
                            />,
                            <Link 
                                href="https://github.com/Takater" 
                                text={props.lang === 'en' ? "In Progress" : "Em Andamento"}
                            />
                        ]}
                    />
                    <Project
                        image={web3}
                        title="Web 3.0"
                        items = {[
                            <Link 
                                href="https://github.com/Takater" 
                                text={props.lang === 'en' ? "In Progress" : "Em Andamento"}
                            />
                        ]}
                    />
                    <Project
                        image={automation}
                        title={props.lang === 'en' ? "Automation Projects" : "Projetos de Automação"}
                        items = {[
                            <Link 
                                href="https://github.com/Takater/HR-Automation-WhatsApp-WebScrapping" 
                                text={props.lang === 'en' ? "VBA Automated WhatsApp Bulk Messaging" : "Envio de Mensagens em Massa no WhatsApp com VBA"}
                            />,
                            <Link 
                                href="https://github.com/Takater" 
                                text={props.lang === 'en' ? "In Progress" : "Em Andamento"}
                            />
                        ]}
                    />
                </Grid>
            </div>
            <button className="backHome" onClick={() => window.location.pathname = "/"}>
                <KDALIcon 
                    fontSize="large"
                />
            </button>
        </div>
    );
}

export default Personal;