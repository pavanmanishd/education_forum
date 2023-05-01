import React from 'react';
import {answers} from '@/data'
import AnswerInput from '@/components/AnswerInput';

export default function Post({ post }) {
    return (
        <div>
            <h1>{post.question}</h1>
            <p>{post.username}</p>
            <AnswerInput qid={post.Qid} />
            <ul>
                {post.answers.map((anwser) => (
                    <li key={anwser.Aid}>
                        <p>{anwser.answer}</p>
                        <p>{anwser.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { id: post.Qid },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/posts/${params.id}`)
    const post = await res.json()
    // const res2 = await fetch(`http://localhost:3000/api/anwsers/${params.id}`)
    // const anwsers = await res2.json()
    // post.answers = anwsers
    post.answers = answers.filter((answer) => answer.Qid === params.id)
    return { props: { post } }
}