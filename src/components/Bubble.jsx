import React, { useState } from 'react'
import blueborder from '../images/blueborder.png'
import {useMediaQuery} from 'react-responsive'

function Bubble (props) {


    // Media Queries
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });

    // Name for pathname change
    const nome = props.text.toLowerCase().replaceAll(' ', '-');

    // Hook for hovering images
    const [isHovered, setIsHovered] = useState(false);

    /* 
            BUBBLE 
            STYLING
    
    */
    const bubbleStyle = {
        position: "absolute",
        width: isHovered ? "10.5%" : "10%",
        top: props.top,
        left: props.left,
        cursor: "pointer",
        backgroundColor: isHovered && "rgba(0, 0, 0, 0.5)",
        borderRadius: isHovered && "100%"
    };

    const bubbleText = {
        position: "absolute",
        top: "33%",
        left: props.text.length >= 15 ? (isHovered ? "25%" : "20%") : "28%",
        textAlign: "left",
        textShadow: "#000 1px 2px 1px",
        fontSize: "100%",
        fontWeight: "bold",
        color: "#fff"
    };

    /*   
            MOBILE
            STYLING
    */

    const mobileStyle = {
        position: "relative",
        width: isMobile ? "30%" : "20%",
        top: "0",
        display: "inline",
        float: "left"
    };

    const mobileText = {
        position: "absolute",
        fontSize: isMobile ? "70%" : "100%",
        top: "35%",
        left: props.text.length > 15 ? "27%" : "32%",
        textAlign: "left",
        textShadow: "#005500 2px 1px 2px",
        fontWeight: "bold",
        color: "#fff",
        cursor: "pointer"
    };


    // IMAGE STYLE
    const borderImage = {
        position: "relative",
        filter: "saturate(5)",
        width: "100%",
        transform: isHovered && "rotate(36000deg)",
        transitionDuration: isHovered && "100s",
        transitionDelay: isHovered && "now",
        animationTimingFunction: isHovered && "linear",
        animationIterationCount: isHovered && "infinite"
    }


    // On Click Function
    function goTo (event) {
        if (event.target.name) {

            // Language Configuration

            // English
            if(props.lang === 'en') {

                // Go to bubble name
                window.location.pathname = event.target.name;
            }
            // Portuguese 
            else {
                // Get correct pathname
                let link = (event.target.name === 'solicitar-orçamento' || event.target.name === 'request-budget') ?
                 'request-budget' : 
                 'projects-done';

                // Open link
                window.location.pathname = link;
            }
        } else {

            // Curriculum File Based on language           Click on border 
            if((event.target.id === "curriculum-vitae") || (event.target.id === '')) {
                const link = require(props.lang === 'en' ? 
                // English CV file
                '../files/CV-GuilhermeMoret2022FS-Eng.pdf' : 

                // Portuguese CV file
                '../files/CV-GuilhermeMoret2022FS.pdf');

                // Open Link
                window.open(link, '_blank');
            } else {
                // Ternary to trigger hook for pages in languages
                let link = (event.target.id === 'solicitar-orçamento' || event.target.id === 'request-budget') ? 
                    'request-budget' : 
                    'projects-done';

                // Open Link
                window.location.pathname = link;
            }
        }
    }

    return (
        <div 
            style={isMobile || isTablet ? mobileStyle : bubbleStyle}
            onClick={goTo}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            
            <img name={nome !== "curriculum-vitae" ? nome : undefined} src={blueborder} style={borderImage} alt={`"Blue Border - ${nome}"`}/>

            <div 
            id={nome} 
            style={isMobile || isTablet ? mobileText : bubbleText} 
            name={nome !== "curriculum-vitae" ? nome : undefined}
            >
                {props.text.split(" ")[0]}<br />{props.text.split(" ")[1]}
            </div>
        </div>
    );
}

export default Bubble;