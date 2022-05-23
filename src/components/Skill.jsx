import React from 'react'
import List from './List'

function Skill (props) {
    const img = props.image
    const title = props.title
    const items = props.items
    const side = props.side

    const id = title.toLowerCase().replaceAll(" ", "-");

    var picStyle = {
            position: "relative",
            width: "25%",
            float: side,
            marginLeft: side === "right" && "2 rem",
            marginRight: side === "left" && "2 rem",
            paddingLeft: side === "right" && "5%",
            paddingRight: side === "left" && "5%"
        }

    return (
        <div id={id} className="skill-row">
            <img style={picStyle} src={img} alt={title}/>
            <h3>{title}</h3>
            <List
                type='skill'
                items={items}
            />
        </div>
    );
}

export default Skill;