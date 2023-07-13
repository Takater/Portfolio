import React from 'react'

function List (props) {

    const items = props.items

    const type = props.type

    const projectStyle = {
        listStyleType: "none",
        margin: "0",
        padding: "0"
    }

    return (
        <ul style={projectStyle}>
            {items !== undefined && items.map((item, index) => (
                <li key={index} style={projectStyle}>
                    {/* Include listing number if item is project */}
                    {type === 'project' && index + 1 + ' - '}{item}
                </li>
            ))}
        </ul>
    );
}

export default List;