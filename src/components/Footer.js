import React from "react";
import "./Footer.css";
import NewsletterForm from "./NewsletterForm";

export default function Footer(props) {
    return (
        <footer className="Footer">
            {props.children}
            <div><NewsletterForm></NewsletterForm></div>
        </footer>
    )
}