import { nanoid } from "nanoid";
import styles from "@/styles/Input.module.css";
import React, { useState } from "react";
export default function PostInput({ handleClick }) {
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
        handleClick();
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setQuestion(e.target.value);
    };

    return (
        <>
        <label htmlFor="question" className={styles.label} >Question:</label>
        <div className={styles.inputContainer}>
            <input type="text" id="question" placeholder="Ask Anything..." onChange={handleChange} value={question} className={styles.input} />
            <button onClick={handleSubmit} className={styles.button} >Submit</button>
        </div>
        </>
    );
}
