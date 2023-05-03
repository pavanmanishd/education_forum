import Link from "next/link";
import styles from "@/styles/AnswerItem.module.css";
export default function AnswerItem({ answer }) {
    return (
        <div className={styles.answerContainer}>
                <p className={styles.username}>Answer By : {answer.username}</p>
                <p className={styles.answer}><span className={styles.answerTag}>Answer : </span>{answer.answer}</p>
            <hr />
        </div>
    );
}