import { client } from '../utils/prismicPosts'
import Post from '../components/Post'
import Image from 'next/image'

// inside your component markup, pull `posts` from props
export default function Home({ posts }) {
  return (
    <main>
          <div>
      {posts !== undefined &&
        posts.map((p) => {
          let title = p.title[0].text
          let key = `${title}`
          return <Post key={key} title={title} image={p.heroimage} />
        })}
    </div>
    </main>
  )
}

// at the bottom of your component file
export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query('')

  const posts = res.results.map((p) => {
    return p.data
  })

  return {
    props: {
      posts,
    },
  }
}