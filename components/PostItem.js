import Link from "next/link";
import styles from "@/styles/PostItem.module.css";
export default function PostItem({ post }) {
    return (
        <div className={styles.postContainer}>
            <Link href="/posts/[id]" as={`/posts/${post.Qid}`} className={styles.link} >
                <p className={styles.username}>By : {post.username}</p>
                <p className={styles.question}><span className={styles.questionTag}>Question : </span>{post.question}</p>
            </Link>
            <hr />
        </div>
    );
}