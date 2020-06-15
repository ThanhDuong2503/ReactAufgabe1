import React from "react";
import "./MainContent.css";

export default function MainContent(props) {
    return (
        <main className="MainContent">
            {props.children}
        </main>
    )
}