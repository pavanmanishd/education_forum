import { nanoid } from "nanoid";
import React, { useState } from "react";
export default function PostInput() {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(question);
        fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ qid: nanoid(),question, username: "test" }),
        })
        setQuestion("");
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setQuestion(e.target.value);
    };

    return (
        <>
            <input type="text" placeholder="Ask Anything..." onChange={handleChange} value={question} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
