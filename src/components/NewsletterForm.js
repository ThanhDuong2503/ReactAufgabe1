import React from "react";

export default function NewsletterForm() {

    const [email, setEmail] = React.useState("");

    // speichert InputValue von Email
    function handleChangeEmail(event) {
        const inputValue= event.target.value;
        setEmail(inputValue);
    }

    const [name, setName] = React.useState("");

    // speichert InputValue von Name
    function handleChangeName(event) {
        const inputValue= event.target.value;
        setName(inputValue);
    }

    // versendet gesamten Submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log("newsletter will be sent to: " + name + " email: " + email);
        const submitResults = {name, email};
        console.log(submitResults);
    }

    return (
    <form onSubmit = {handleSubmit}>

        <input
            value={email}
            placeholder="enter email"
            type="text"
            onChange={handleChangeEmail}>
        </input>

        <input
            value={name}
            placeholder="enter name"
            type="text"
            onChange={handleChangeName}>
        </input>

        <button type="submit">submit to Newsletter</button>

    </form>
    );
}