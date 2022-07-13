import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import Modal from 'react-modal'

const modalStyle = {
    content: {
        top: 'auto',
        left: '50%',
        right: 'auto',
        bottom: '5%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function Contact () {

    const [modalOpen, setModal] = React.useState(false);

    function openModal () { setModal(true) };
    function closeModal () { setModal(false) };

    return (
        <div id="contact">
            <h2><span>Contact Me</span></h2>
            <a className="contactIcon" href="mailto:guilherme.moret.ps@gmail.com">
                <EmailIcon
                    fontSize="large"
                />
            </a>
            <Tooltip  title="Phone or WhatsApp" placement="top">
                <a className="contactIcon" href="#contact" onClick={openModal}>
                    <WhatsAppIcon
                        fontSize="large"
                        />
                </a>
            </Tooltip>
            <Modal
                isOpen={modalOpen}
                style={modalStyle}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
            >
                <a className="contactLink" href="tel:5569948282019"><button className="btn">Phone</button></a>
                <a className="contactLink" href="https://web.whatsapp.com/send?phone=5569984282019&text=Hello%2C%20Guilherme%21%20I%20came%20from%20your%20Portfolio.%20Nice%20to%20meet%20you%21"><button className="btn"> WhatsApp</button></a>
                <button style={{border: "none", padding: "0", background: "none"}}onClick={closeModal}><CloseIcon fontSize="small"/></button>
            </Modal>
            <a className="contactIcon" href="https://www.linkedin.com/in/guilherme-moret-03ba97219/">
                <LinkedInIcon
                    fontSize="large"
                />
            </a>
            <a className="contactIcon" href="https://github.com/Takater">
                <GitHubIcon
                    fontSize="large"
                />
            </a>
        </div>
    );
}

export default Contact;