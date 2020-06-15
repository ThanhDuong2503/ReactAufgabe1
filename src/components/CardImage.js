import React from "react";
import "./CardImage.css";

export default function CardImage(props) {
    return (
        <section className="CardImage">
            {props.children}
        </section>);
}