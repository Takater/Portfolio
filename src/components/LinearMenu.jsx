import React from "react"
import Texts from "../support/Texts"

export default function LinearMenu (props) {
    return (
        <div id="menu-links">
                    <ul className="">
                        {["/", "/experience", "/projects-done", "/request-budget"].map((url, index) => {
                            return (
                                <li key={Texts.navbarLinks[props.lang][index]}>
                                    <a className="nav-link" href={url}>{Texts.navbarLinks[props.lang][index]}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <br/>
                </div>
    )
}