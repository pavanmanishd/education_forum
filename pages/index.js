import styles from '@/styles/Home.module.css'
import PostInput from '@/components/PostInput'
import PostsList from '@/components/PostsList'


export default function Home({posts}) {
  return (
    <>
      <div>
        <PostInput />
        <PostsList posts={posts} />
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