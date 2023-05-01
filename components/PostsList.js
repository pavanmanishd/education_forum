import PostItem from "./PostItem";

export default function PostsList({posts}) {
    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <PostItem post={post} />
                ))}
            </ul>
        </>
    );
}

