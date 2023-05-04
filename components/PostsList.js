import PostItem from "./PostItem";
import React from "react";
import styles from "@/styles/PostsList.module.css";
export default function PostsList({posts}) {
    // const [postList, setPostList] = React.useState(posts);
    // const list = postList.map((post) => (<PostItem post={post} />))
    // let list = []
    const [list , setList] = React.useState([])
    React.useEffect(() => {
        for (let i = 0; i < posts.length; i++) {
            setList((prev) => [...prev, <PostItem post={posts[i]} />])
        }
    }, [])

    return (
        <div className={styles.postsContainer}>
            <h1 className={styles.heading}>Posts</h1>
            <hr />
            <div>
                {list}
            </div>
        </div>
    );
}

