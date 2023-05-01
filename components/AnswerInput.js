import { nanoid } from "nanoid";
import React from "react";

export default function AnswerInput({ qid }) {
    const [answer, setAnswer] = React.useState("");
    console.log(qid)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answer);
        fetch(`http://localhost:3000/api/answers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Qid: qid, Aid: nanoid(), answer, username: "test" }),
        })
        setAnswer("");
    };

    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <div>
            <form>
                <label htmlFor="answer">Answer:</label>
                <input type="text" id="answer" name="answer" onChange={handleChange} value={answer} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}