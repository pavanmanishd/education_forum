import Link from "next/link";

export default function PostItem({ post }) {
    return (
        <>
            <Link href="/posts/[id]" as={`/posts/${post.Qid}`} >
                <p>{post.question}</p>
            </Link>
            <p>{post.username}</p>
        </>
    );
}