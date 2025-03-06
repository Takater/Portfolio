import React from 'react';
import Texts from '../support/Texts';

export default function PhoneOrWhats (props) {
    return (
        <ul className='phoneOrWhatsList'>
            <li>
                <a className='contactLink' rel='noreferrer' target='_blank' href='tel:5561984170327'>
                    <button className='btn btn-outline-primary text-dark fw-bold'>
                        {Texts.contact.phone[props.lang]}
                    </button>
                </a>
            </li>
            <li><span className='text-white'>{Texts.contact.or[props.lang]}</span></li>
            <li>
                <a className='contactLink' rel='noreferrer' target='_blank' href={`https://api.whatsapp.com/send?phone=5561984170327&text=${Texts.contact.whatsapp[props.lang]}`}>
                    <button className='btn btn-outline-primary text-dark fw-bold'>
                        WhatsApp
                    </button>
                </a>
            </li>
        </ul>
    )
}