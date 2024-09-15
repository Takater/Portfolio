import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Bubbles from '../components/Bubbles';
import Gui from '../images/gui_head.png';
import Texts from '../support/Texts';
import Contact from '../components/Contact';

export default function MainPage (props) {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
            <h1>Main Page</h1>
    );
}