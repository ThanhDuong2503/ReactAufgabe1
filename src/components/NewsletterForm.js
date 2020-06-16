import React from "react";

export default function NewsletterForm() {

    const [email, setEmail] = React.useState("");

    function handleChange(event) {
        const inputValue= event.target.value;
        setEmail(inputValue);
    }

    return (
    <form onSubmit = {console.log("submitted")}>
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