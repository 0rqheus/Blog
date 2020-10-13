import axios from 'axios'
import { GetServerSideProps } from 'next'
import Post from '../components/Post';
import Layout from '../components/Layout';

export default function Home({post}) {

  return (
    <Layout siteTitle={`Post #${post.id}`}>
      <Post post={post}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async() => {
  const postsResponse  = await axios.get('https://simple-blog-api.crew.red/posts');
  const lastPostId = postsResponse.data.pop().id;

  const lastPostResponse  = await axios.get(`https://simple-blog-api.crew.red/posts/${lastPostId}?_embed=comments`);

  return {
    props: {
      post: JSON.parse(JSON.stringify(lastPostResponse.data))
    }
  }
}