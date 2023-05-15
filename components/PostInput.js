import { nanoid } from "nanoid";
import styles from "@/styles/Input.module.css";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import axios from "axios";
import { server } from "@/config";
export default function PostInput({ handleClick }) {
    const [question, setQuestion] = useState("");
    const { isLoaded, isSignedIn, user } = useUser();
    const handleSubmit = (e) => {
        if (isLoaded && isSignedIn) {
            e.preventDefault();
            console.log(question);
            // fetch("http://localhost:3000/api/posts", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ qid: nanoid(), question, username: (isLoaded && isSignedIn) ? user.username : "test" }),
            // })
            axios.post(`/api/posts`, { qid: nanoid(), question, username: (isLoaded && isSignedIn) ? user.username : "test" })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                })
            setQuestion("");
            handleClick();
        }
        else {
            useRouter().push('/login');
        }
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
