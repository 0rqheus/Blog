import axios from 'axios'
import { GetStaticProps, GetStaticPaths } from 'next'

import Post from '../../components/Post';

export default function PostPage({post}) {
  return (
    <Post post={post}/>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsResponse  = await axios.get('https://simple-blog-api.crew.red/posts');

  const paths = postsResponse.data.map( 
    post => (
      {
        params: 
        {
          postId: String(post.id)
        }
      }
    )
  );

  return {
    paths, 
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const lastPostResponse  = await axios.get(`https://simple-blog-api.crew.red/posts/${context.params.postId}?_embed=comments`);

  return {
    props: {
      post: JSON.parse(JSON.stringify(lastPostResponse.data))
    }
  }
}
