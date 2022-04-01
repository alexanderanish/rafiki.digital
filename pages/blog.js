import Container from '@/components/container'
import Posts from '@/components/posts'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'

export default function blog({ allPosts, preview }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Rafiki Digital: Blog</title>
        </Head>
        <Container>
          <Intro />
          <Posts posts={allPosts} />
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
