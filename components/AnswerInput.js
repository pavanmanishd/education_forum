import { nanoid } from "nanoid";
import React from "react";
import styles from "@/styles/Input.module.css";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { server } from "@/config";
export default function AnswerInput({ qid, handleClick }) {
    const [answer, setAnswer] = React.useState("");
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(qid)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answer);
        // fetch(`http://localhost:3000/api/answers`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ Qid: qid, Aid: nanoid(), answer, username: (isLoaded && isSignedIn) ? user.username : "unknown" }),
        // })

        axios.post(`${server}/api/answers`, { Qid: qid, Aid: nanoid(), answer, username: (isLoaded && isSignedIn) ? user.username : "unknown" })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
        setAnswer("");
        handleClick();
    };

    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <div>
            <form>
                <label htmlFor="answer" className={styles.label} >Answer:</label>
                <input type="text" placeholder="Type your answer..." id="answer" name="answer" onChange={handleChange} value={answer} className={styles.input} />
                <button type="submit" onClick={handleSubmit} className={styles.button} >Submit</button>
            </form>
        </div>
    );
}