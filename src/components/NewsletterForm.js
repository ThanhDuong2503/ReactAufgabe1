import React from "react";

export default function NewsletterForm() {

    const [email, setEmail] = React.useState("");

    function handleChange(event) {
        const inputValue= event.target.value;
        setEmail(inputValue);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("newsletter will be sent to: " + email);
    }

    return (
    <form onSubmit = {handleSubmit}>
        <input
            value={email}
            placeholder="enter email"
            type="text"
            onChange={handleChange}>
        </input>

        <button type="submit">submit to Newsletter</button>

    </form>
    );
}