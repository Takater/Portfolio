import React from 'react'

function List (props) {

    const items = props.items

    const listType = props.type
    const isProject = (listType === "project")

    const skillStyle = {
        position: "relative",
        float: "left",
        marginLeft: "2rem"
    }

    const projectStyle = {
        listStyleType: isProject ? "none" : "default",
        margin: isProject ? "0" : "default",
        padding: isProject ? "0" : "default"
    }

    return (
        <ul style={projectStyle}>
            {items !== undefined && items.map((item, index) => {

                let skillName = "";

                if (props.type === "skill")
                {
                    item = item.split(":");
                    if (item.length === 2) {
                        skillName = item[0] + ":";
                        item = item[1];
                    } else {
                        item = item[0];
                    }
                }

                return (<li key={index} style={listType === 'skill' ? skillStyle : projectStyle}><strong>{skillName}</strong>{item}</li>);
            })}
        </ul>
    );
}

export default List;