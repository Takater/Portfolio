import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import List from './List';

function Contact (props) {
    
    function PhoneOrWhats () {
        return (<List items={[
            <a className="contactLink" rel="noreferrer" target="_blank" href="tel:5569948282019"><button className="btn btn-outline-primary text-dark fw-bold">
                    {props.lang === 'en' ?
                        "Phone" : 
                        "Telefone"
                    }
                </button></a>,
            <span className='text-white'>
                {props.lang === 'en' ?
                    "Or" : "Ou"
                }
            </span>,
            <a className="contactLink" rel="noreferrer" target="_blank"
                href={props.lang === 'en' ? 
                    "https://api.whatsapp.com/send?phone=5569984282019&text=Hello,%20Guilherme!I%20came%20from%20your%20Portfolio.%20Nice%20to%20meet%20you!" :
                    "https://api.whatsapp.com/send?phone=5569984282019&text=Olá,%20Guilherme!%20Eu%20vim%20do%20seu%20Portfólio.%20Prazer%20em%20te%20conhecer!"
                }
                ><button className="btn btn-outline-primary text-dark fw-bold"> WhatsApp</button></a>
        ]} />)
    }


    return (
        <div id="contact">
            <h2><span>
                    {props.lang === 'en' ?
                        "Contact Me" :
                        "Contate-Me"
                    }
                </span>
            </h2>
            <a rel="noreferrer" target="_blank" className="contactIcon" href="mailto:guilherme.moret.ps@gmail.com">
                <EmailIcon
                    fontSize="large"
                />
            </a>
            <Tooltip  title={<PhoneOrWhats />} placement="top">
                <WhatsAppIcon
                    className='contactIcon'
                    fontSize="large"
                />
            </Tooltip>
            <a className="contactIcon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/guilherme-moret-03ba97219/">
                <LinkedInIcon
                    fontSize="large"
                />
            </a>
            <a className="contactIcon" rel="noreferrer" target="_blank" href="https://github.com/Takater">
                <GitHubIcon
                    fontSize="large"
                />
            </a>
        </div>
    );
}

export default Contact;