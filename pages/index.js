import styles from '@/styles/Home.module.css'
import PostInput from '@/components/PostInput'
import PostsList from '@/components/PostsList'
import axios from 'axios';
import React from 'react';


export default function Home({posts}) {
  const [postList, setPostList] = React.useState(posts);
  const handleClick = async () => {
    const res = await axios.get('http://localhost:3000/api/posts')
    const posts = res.data
    setPostList(posts)
  }
  return (
    <>
      <div>
        <PostInput handleClick={handleClick} />
        <PostsList posts={postList} />
      </div>
    </>
  )
}



export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  return {
      props: {
          posts,
      },
  }
}