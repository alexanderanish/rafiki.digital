import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'


export default function Work({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Welcome To Rafiki Digital</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
