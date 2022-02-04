import React from "react";

function Links(props) {
    return (
        <links>
            <h3>Links</h3>
            <a href={props.user.links.github}>{props.user.links.github}</a>
            <a href={props.user.links.linkedin}>{props.user.links.linkedin}</a>
        </links>

)}

export default Links;