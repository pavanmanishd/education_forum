import PostItem from "./PostItem";
import styles from "@/styles/PostsList.module.css";
export default function PostsList({posts}) {
    return (
        <div className={styles.postsContainer}>
            <h1 className={styles.heading}>Posts</h1>
            <hr />
            <div>
                {posts.map((post) => (
                    <PostItem post={post} />
                ))}
            </div>
        </div>
    );
}

