import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import Texts from '../support/Texts';
import PhoneOrWhats from './PhoneOrWhats';

function Contact (props) {

    return (
        <div id="contact">
            <h2><span>
                    {Texts.contact.contactme[props.lang]}
                </span>
            </h2>
            <a rel="noreferrer" target="_blank" className="contactIcon" href="mailto:guilherme.moret.ps@gmail.com">
                <EmailIcon fontSize="large" />
            </a>
            <Tooltip  
                    title={<PhoneOrWhats lang={props.lang} />} placement="top"
                >
                <WhatsAppIcon className='contactIcon' fontSize="large" />
            </Tooltip>
            <a className="contactIcon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/guilherme-moret">
                <LinkedInIcon fontSize="large" />
            </a>
            <a className="contactIcon" rel="noreferrer" target="_blank" href="https://github.com/Takater">
                <GitHubIcon fontSize="large" />
            </a>
        </div>
    );
}

export default Contact;