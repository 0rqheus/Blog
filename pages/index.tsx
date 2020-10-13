import axios from 'axios'
import styled from 'styled-components';
import { GetServerSideProps } from 'next'
import PostModel from '../models/PostModel';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

const Title = styled.h2`
  text-align: center;
  color: #4da6ff;
`;

export default function Home({posts}: {posts: Array<PostModel>}) {

  return (
    <Layout siteTitle='Home'>
      <Title>Recent posts</Title>
      <PostsList posts={posts}/>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async() => {
  const postsResponse  = await axios.get('https://simple-blog-api.crew.red/posts');
  const latestPosts = postsResponse.data.slice(-5);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(latestPosts))
    }
  }
}