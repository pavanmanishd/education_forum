import React from 'react';
import AnswerInput from '@/components/AnswerInput';
import axios from 'axios';
import AnswersList from '@/components/AnswersList';
import styles from '@/styles/Post.module.css';
import { server } from '@/config';
export default function Post({ post }) {
    const [answers, setAnswers] = React.useState(post.answers);
    const handleClick = async () => {
        const res = await axios.get(`/api/answers/${post.Qid}`)
        setAnswers(res.data)
    }
    return (
        <div className={styles.container}>
            <p className={styles.username}>By : {post.username}</p>
            <h1 className={styles.heading}>{post.question}</h1>
            <AnswerInput qid={post.Qid} handleClick={handleClick}/>
            <AnswersList answers={answers} />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    // const res = await axios.get(`${server}/api/posts/${params.id}`)
    // const post = res.data
    // const res2 = await axios.get(`${server}/api/answers/${params.id}`)
    // const answers = res2.data
    // post.answers = answers.filter((answer) => answer.Qid === params.id)

    const res = await axios.get(`/api/postData/${params.id}`)
    const post = res.data
    return { props: { post } }
}