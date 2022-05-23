import React from 'react'
import cloud from '../images/cloud.png'
import {useMediaQuery} from 'react-responsive'


function Cloud (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });

    const nome = props.text.toLowerCase().replaceAll(' ', '-');

    const mobileStyle = {
        position: "relative",
        width: "15%",
        top: "0",
        display: "inline",
        float: "left"
    }

    const cloudStyle = {
        position: "absolute",
        width: "100%",
        top: props.top,
        left: props.left
    };

    const mobileText = {
        position: "absolute",
        fontSize: isMobile ? "60%" : "80%",
        top: "50%",
        left: "15%",
        fontWeight: "bold",
        color: "#11999E"
    };

    const cloudText = {
        position: "absolute",
        top: "50%",
        left: "1.5%",
        fontWeight: "bold",
        color: "#11999E"
    }

    function goTo (e) {
        if (e.target.getAttribute('name') !== null) {
            window.location.hash = "#" + e.target.getAttribute('name');
        }
    }

    return (
        <div style={isMobile || isTablet ? mobileStyle : cloudStyle} onClick={goTo}>
            <img name={nome} src={cloud} alt="Cloud"/>
            <div style={isMobile || isTablet ? mobileText : cloudText} name={nome}>{props.text}</div>
        </div>
    );
}

export default Cloud;