import React from 'react';
import AnswerInput from '@/components/AnswerInput';
import axios from 'axios';
import AnswersList from '@/components/AnswersList';
import styles from '@/styles/Post.module.css';
export default function Post({ post }) {
    const [answers, setAnswers] = React.useState(post.answers);
    const handleClick = async () => {
        const res = await axios.get(`http://localhost:3000/api/answers/${post.Qid}`)
        setAnswers(res.data)
    }
    return (
        <div className={styles.container}>
            <p className={styles.username}>By : {post.username}</p>
            <h1 className={styles.heading}>{post.question}</h1>
            <AnswerInput qid={post.Qid} handleClick={handleClick}/>
            {/* <ul>
                {answers.map((anwser) => (
                    <li key={anwser.Aid}>
                        <p>{anwser.answer}</p>
                        <p>{anwser.username}</p>
                    </li>
                ))}
            </ul> */}
            <AnswersList answers={answers} />
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
    const res = await axios.get(`http://localhost:3000/api/posts/${params.id}`)
    const post = res.data
    const res2 = await axios.get(`http://localhost:3000/api/answers/${params.id}`)
    const answers = res2.data
    post.answers = answers.filter((answer) => answer.Qid === params.id)
    return { props: { post } }
}