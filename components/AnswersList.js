import AnswerItem from "./AnswerItem";
import styles from "@/styles/AnswersList.module.css";

export default function AnswersList({ answers }) {
    return (
        <div className={styles.answersContainer}>
            <h1 className={styles.heading}>Answers</h1>
            <hr />
            <div>
                {answers.map((answer) => (
                    <AnswerItem answer={answer} />
                ))}
            </div>
        </div>
    );
}