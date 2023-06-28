import React from 'react'

function List (props) {

    const items = props.items

    const projectStyle = {
        listStyleType: "none",
        margin: "0",
        padding: "0"
    }

    return (
        <ul style={projectStyle}>
            {items !== undefined && items.map((item, index) => (<li key={index} style={projectStyle}>{index + 1} - {item}</li>))}
        </ul>
    );
}

export default List;