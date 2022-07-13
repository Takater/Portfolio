import React, { useState } from 'react'
import blueborder from '../images/blueborder.png'
import {useMediaQuery} from 'react-responsive'


function Cloud (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });

    const nome = props.text.toLowerCase().replaceAll(' ', '-');

    const [isHovered, setIsHovered] = useState(false);

    const cloudStyle = {
        position: "absolute",
        width: isHovered ? "11%" : "10%",
        top: props.top,
        left: props.left,
        cursor: "pointer",
        backgroundColor: isHovered && "rgba(0, 0, 0, 0.5)",
        borderRadius: isHovered && "100%"
    };

    const cloudText = {
        position: "absolute",
        top: props.text.length >= 10 ? (isHovered ? "40%" : "35%") : "45%",
        left: props.text.length >= 15 ? (isHovered ? "29%" : "25%") : (props.text.length > 10 ? "35%" : "27%"),
        textAlign: "left",
        textShadow: "#000 1px 2px 1px",
        fontSize: "100%",
        fontWeight: "bold",
        color: "#d9b29c"
    };

    const mobileStyle = {
        position: "relative",
        width: "15%",
        left: "1rem",
        top: "0",
        display: "inline",
        float: "left"
    };

    const mobileText = {
        position: "absolute",
        fontSize: isMobile ? "60%" : "80%",
        top: "45%",
        left: "32%",
        textAlign: "left",
        textShadow: "#005500 2px 1px 2px",
        fontWeight: "bold",
        color: "#fff",
        cursor: "pointer"
    };

    const borderImage = {
        position: "relative",
        filter: "saturate(5)",
        width: "100%",
        transform: isHovered && "rotate(900deg)",
        transitionDuration: isHovered && "5s",
        transitionDelay: isHovered && "now",
        animationTimingFunction: isHovered && "linear",
        animationIterationCount: isHovered && "infinite"
    }

    function goTo (e) {
        if (e.target.getAttribute('name') !== null) {
            window.location.hash = "#" + e.target.getAttribute('name');
        }
    }

    return (
        <div 
            style={isMobile || isTablet ? mobileStyle : cloudStyle}
            onClick={goTo}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img name={nome} src={blueborder} style={borderImage} alt="Cloud" />
            <div style={isMobile || isTablet ? mobileText : cloudText} name={nome}>{props.text.split(" ").length > 1 ? props.text.split(" ")[0] : props.text}{props.text.split(" ").length > 1  && <br />}{props.text.split(" ").length > 1 && props.text.split(" ")[1]}</div>
        </div>
    );
}

export default Cloud;