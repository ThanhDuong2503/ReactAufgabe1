import React from "react";

export default function Cardbody(props) {
    return (
        <section className="CardBody">
            <h2>{props.title}</h2>
            <p>{props.infos}</p>
        </section>)
}