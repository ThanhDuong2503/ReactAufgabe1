import React from "react";
import "./CardBody.css"

export default function CardBody(props) {
    return (
        <section className="CardBody">
            <h1>{props.title}</h1>
            <p>{props.infos}</p>
        </section>)
}