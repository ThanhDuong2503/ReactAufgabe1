import React from "react";
import "./NewsletterForm.css";
import "./Button.css";

export default function NewsletterForm() {

    const [name, setName] = React.useState("");

    // speichert InputValue von Name
    function handleChangeName(event) {
        const inputValue= event.target.value;
        setName(inputValue);
    }

    const [email, setEmail] = React.useState("");

    // speichert InputValue von Email
    function handleChangeEmail(event) {
        const inputValue= event.target.value;
        setEmail(inputValue);
    }

    // versendet gesamten Submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log("newsletter will be sent to: " + name + " email: " + email);
        const submitResults = {name, email};
        console.log(submitResults);
    }

    return (
    <form className="NewsletterForm" onSubmit = {handleSubmit}>

        <input
            value={name}
            placeholder="enter name"
            type="text"
            onChange={handleChangeName}>
        </input>

        <input
            value={email}
            placeholder="enter email"
            type="text"
            onChange={handleChangeEmail}>
        </input>

        <button className="Button" type="submit">submit to Newsletter</button>

    </form>
    );
}