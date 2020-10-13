import axios from 'axios'
import { GetStaticProps } from 'next'
import Post from '../components/Post';

export default function Home({post}) {

  return (
    <Post post={post}/>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const postsResponse  = await axios.get('https://simple-blog-api.crew.red/posts');
  const lastPostId = postsResponse.data.pop().id;

  const lastPostResponse  = await axios.get(`https://simple-blog-api.crew.red/posts/${lastPostId}?_embed=comments`);

  return {
    props: {
      post: JSON.parse(JSON.stringify(lastPostResponse.data))
    }
  }
}