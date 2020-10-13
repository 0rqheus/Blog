import axios from 'axios'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout';

import Post from '../../components/Post';

export default function PostPage({post}) {
  return (
    <Layout siteTitle={`Post #${post.id}`}>
      <Post post={post}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const lastPostResponse  = await axios.get(`https://simple-blog-api.crew.red/posts/${context.params.postId}?_embed=comments`);

  return {
    props: {
      post: JSON.parse(JSON.stringify(lastPostResponse.data))
    }
  };
}
